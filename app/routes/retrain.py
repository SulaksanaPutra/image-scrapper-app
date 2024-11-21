import uuid
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas import RetrainRequest, RetrainResponse
from app.deps import get_db, get_job_runner
from app.services.storage import create_training_job
from app.services.job_runner import BackgroundJobRunner

router = APIRouter(tags=["Model Retraining"])

@router.post("/retrain", response_model=RetrainResponse)
def trigger_retrain_job(
    payload: RetrainRequest,
    db: Session = Depends(get_db),
    runner: BackgroundJobRunner = Depends(get_job_runner)
):
    """Triggers an asynchronous model retraining background job."""
    date_str = datetime.now().strftime("%Y%m%d_%H%M%S")
    job_id = f"job_{date_str}_{uuid.uuid4().hex[:4]}"

    create_training_job(db, job_id=job_id, dataset_version=payload.dataset_version or "latest")

    runner.submit_retrain_job(
        job_id=job_id,
        dataset_version=payload.dataset_version or "latest",
        base_model=payload.base_model,
        engine=payload.engine or "sklearn"
    )

    return RetrainResponse(status="queued", job_id=job_id)
