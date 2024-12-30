import os
import json
import threading
from typing import Tuple, Dict, Optional, Any
from app.services.model_registry import model_registry
from app.config import settings

import os
import json
import threading
from typing import Tuple, Dict, Optional, Any
from app.services.model_registry import model_registry
from app.config import settings

class InferenceEngine:
    """Thread-safe inference manager with zero-downtime atomic model swapping."""

    def __init__(self):
        self._lock = threading.Lock()
        self.model = None
        self.tokenizer_or_vectorizer = None
        self.label_map: Dict[int, str] = {}
        self.engine_type: str = "baseline"
        self.current_version: str = "v1.0.0-baseline"

    def load_active_model(self, force_reload: bool = False):
        active_dir = model_registry.get_active_version_dir()
        if not active_dir or not os.path.exists(active_dir):
            self._load_baseline_fallback()
            return

        version_name = os.path.basename(active_dir.rstrip("/\\"))
        if not force_reload and self.current_version == version_name and self.model is not None:
            return

        # Prepare new model state outside lock to avoid blocking active requests
        loaded_model = None
        loaded_tok = None
        loaded_map = {}
        loaded_engine = "baseline"
        loaded_version = version_name

        # Load label_map.json if present
        label_map_file = os.path.join(active_dir, "label_map.json")
        if os.path.exists(label_map_file):
            try:
                with open(label_map_file, "r", encoding="utf-8") as f:
                    raw_map = json.load(f)
                    loaded_map = {int(k): str(v) for k, v in raw_map.items()}
            except Exception as e:
                print(f"Warning: Failed to load label map: {e}")

        # Check for scikit-learn model
        sklearn_model_path = os.path.join(active_dir, "model.joblib")
        vectorizer_path = os.path.join(active_dir, "vectorizer.joblib")

        if os.path.exists(sklearn_model_path) and os.path.exists(vectorizer_path):
            try:
                import joblib
                loaded_model = joblib.load(sklearn_model_path)
                loaded_tok = joblib.load(vectorizer_path)
                loaded_engine = "sklearn"
            except Exception as e:
                print(f"Warning: Failed to load Sklearn model from {active_dir}: {e}")

        # Check for transformer model
        if loaded_engine == "baseline":
            transformer_weights = os.path.join(active_dir, "pytorch_model.bin")
            safetensors_weights = os.path.join(active_dir, "model.safetensors")
            if os.path.exists(transformer_weights) or os.path.exists(safetensors_weights):
                try:
                    import torch
                    from transformers import AutoTokenizer, AutoModelForSequenceClassification
                    loaded_tok = AutoTokenizer.from_pretrained(active_dir)
                    loaded_model = AutoModelForSequenceClassification.from_pretrained(active_dir)
                    loaded_model.eval()
                    loaded_engine = "transformer"
                except Exception as e:
                    print(f"Warning: Failed to load Transformer model from {active_dir}: {e}")

        if loaded_engine == "baseline":
            self._load_baseline_fallback()
            return

        # Atomic pointer swap under lock
        with self._lock:
            self.model = loaded_model
            self.tokenizer_or_vectorizer = loaded_tok
            self.label_map = loaded_map
            self.engine_type = loaded_engine
            self.current_version = loaded_version

    def _load_baseline_fallback(self):
        with self._lock:
            self.model = None
            self.tokenizer_or_vectorizer = None
            self.label_map = {}
            self.engine_type = "baseline"
            self.current_version = "v1.0.0-baseline"

    def predict(self, text: str) -> Tuple[str, float, str]:
        # Snapshot references for lock-free read
        with self._lock:
            model = self.model
            tok = self.tokenizer_or_vectorizer
            label_map = self.label_map.copy()
            engine_type = self.engine_type
            version = self.current_version

        if model is None or engine_type == "baseline":
            return self._baseline_predict(text, label_map, version)

        if engine_type == "sklearn":
            try:
                features = tok.transform([text])
                if hasattr(model, "predict_proba"):
                    probabilities = model.predict_proba(features)[0]
                    max_idx = int(probabilities.argmax())
                    confidence = float(probabilities[max_idx])
                else:
                    max_idx = int(model.predict(features)[0])
                    confidence = 0.85

                label = label_map.get(max_idx, f"class_{max_idx}")
                return label, round(confidence, 4), version
            except Exception as e:
                print(f"Sklearn prediction error: {e}")
                return self._baseline_predict(text, label_map, version)

        elif engine_type == "transformer":
            try:
                import torch
                inputs = tok(text, return_tensors="pt", truncation=True, max_length=settings.MAX_SEQ_LENGTH)
                with torch.no_grad():
                    outputs = model(**inputs)
                    probs = torch.nn.functional.softmax(outputs.logits, dim=-1)[0]
                    confidence, pred_idx = torch.max(probs, dim=0)

                pred_int = int(pred_idx.item())
                label = label_map.get(pred_int, f"class_{pred_int}")
                return label, round(float(confidence.item()), 4), version
            except Exception as e:
                print(f"Transformer prediction error: {e}")
                return self._baseline_predict(text, label_map, version)

        return self._baseline_predict(text, label_map, version)

    def _baseline_predict(self, text: str, label_map: Dict[int, str], version: str) -> Tuple[str, float, str]:
        """Generic fallback when no trained model is loaded."""
        if label_map:
            first_label = next(iter(label_map.values()))
            return first_label, 0.50, version
        return "unclassified", 0.50, version

inference_engine = InferenceEngine()

