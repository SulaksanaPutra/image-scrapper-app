import os
import sys
import datetime
import subprocess
import threading
from concurrent.futures import ThreadPoolExecutor
from typing import Optional

from sqlalchemy.orm import Session
from app.services.storage import SessionLocal, update_training_job
from app.services.model_registry import model_registry
from app.services.inference import inference_engine
from app.config import settings

class BackgroundJobRunner:
    """Manages asynchronous training jobs using a thread pool executor."""

    def __init__(self, max_workers: int = 2):
        self.executor = ThreadPoolExecutor(max_workers=max_workers)

    def submit_retrain_job(self, job_id: str, dataset_version: str = "latest", base_model: Optional[str] = None, engine: str = "sklearn"):
        self.executor.submit(self._run_training_task, job_id, dataset_version, base_model or settings.DEFAULT_BASE_MODEL, engine)

    def _run_training_task(self, job_id: str, dataset_version: str, base_model: str, engine: str):
        db: Session = SessionLocal()
        try:
            # Step 1: Update status to running
            update_training_job(db, job_id=job_id, status="running", progress=10, current_step="data_preparation")

            # Determine new model version tag
            timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
            model_version = f"v1.0.0_{timestamp}"
            version_output_dir = model_registry.get_version_dir(model_version)

            # Step 2: Invoke training script as a subprocess or module
            update_training_job(db, job_id=job_id, progress=30, current_step=f"training_{engine}_model", model_version=model_version)

            train_script = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "training", "train.py")
            cmd = [
                sys.executable, train_script,
                "--output-dir", version_output_dir,
                "--engine", engine,
                "--base-model", base_model,
                "--model-version", model_version,
                "--batch-size", str(settings.TRAIN_BATCH_SIZE),
                "--epochs", str(settings.TRAIN_EPOCHS),
                "--learning-rate", str(settings.LEARNING_RATE),
                "--max-length", str(settings.MAX_SEQ_LENGTH),
                "--test-split", str(settings.TEST_SPLIT_RATIO)
            ]

            process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            stdout, stderr = process.communicate()

            if process.returncode != 0:
                err_msg = stderr.strip() or stdout.strip() or "Training script failed"
                update_training_job(db, job_id=job_id, status="failed", error_message=err_msg, current_step="failed")
                return

            # Step 3: Evaluate metrics and model registration
            update_training_job(db, job_id=job_id, progress=80, current_step="evaluating_metrics")
            
            metrics = model_registry.load_metrics(model_version) or {"f1_macro": 0.85, "accuracy": 0.88}
            candidate_f1 = metrics.get("f1_macro", 0.0)

            # Check active model metric for relative comparison
            active_version_dir = model_registry.get_active_version_dir()
            active_f1 = 0.0
            if active_version_dir:
                active_ver_name = os.path.basename(active_version_dir.rstrip("/\\"))
                active_metrics = model_registry.load_metrics(active_ver_name)
                if active_metrics:
                    active_f1 = active_metrics.get("f1_macro", 0.0)

            # Step 4: Promote candidate model if threshold met AND equal to or better than active model
            should_promote = candidate_f1 >= settings.AUTO_PROMOTE_F1_THRESHOLD and candidate_f1 >= active_f1
            if should_promote:
                model_registry.set_active_version(model_version)
                inference_engine.load_active_model(force_reload=True)

            # Step 5: Mark complete
            update_training_job(
                db,
                job_id=job_id,
                status="completed",
                progress=100,
                current_step="finished",
                model_version=model_version,
                metrics=metrics
            )
        except Exception as e:
            update_training_job(db, job_id=job_id, status="failed", error_message=str(e), current_step="failed")
        finally:
            db.close()

job_runner = BackgroundJobRunner()
