import os
import json
import threading
from typing import Tuple, Dict, Optional, Any
from app.services.model_registry import model_registry
from app.config import settings

class InferenceEngine:
    """Thread-safe inference manager capable of loading baseline models, scikit-learn models, or Transformers."""

    def __init__(self):
        self._lock = threading.Lock()
        self.model = None
        self.tokenizer_or_vectorizer = None
        self.label_map: Dict[int, str] = {}
        self.engine_type: str = "baseline"
        self.current_version: str = "v1.0.0-baseline"

    def load_active_model(self, force_reload: bool = False):
        with self._lock:
            active_dir = model_registry.get_active_version_dir()
            if not active_dir or not os.path.exists(active_dir):
                self._load_baseline_fallback()
                return

            version_name = os.path.basename(active_dir.rstrip("/\\"))
            if not force_reload and self.current_version == version_name and self.model is not None:
                return

            # Check for label_map.json
            label_map_file = os.path.join(active_dir, "label_map.json")
            if os.path.exists(label_map_file):
                with open(label_map_file, "r", encoding="utf-8") as f:
                    raw_map = json.load(f)
                    self.label_map = {int(k): v for k, v in raw_map.items()}
            else:
                self.label_map = {0: "account", 1: "billing", 2: "bug", 3: "feature_request", 4: "other"}

            # Check if sklearn model
            sklearn_model_path = os.path.join(active_dir, "model.joblib")
            vectorizer_path = os.path.join(active_dir, "vectorizer.joblib")

            if os.path.exists(sklearn_model_path) and os.path.exists(vectorizer_path):
                import joblib
                self.model = joblib.load(sklearn_model_path)
                self.tokenizer_or_vectorizer = joblib.load(vectorizer_path)
                self.engine_type = "sklearn"
                self.current_version = version_name
                return

            # Check if transformer model
            transformer_weights = os.path.join(active_dir, "pytorch_model.bin")
            safetensors_weights = os.path.join(active_dir, "model.safetensors")
            if os.path.exists(transformer_weights) or os.path.exists(safetensors_weights):
                try:
                    import torch
                    from transformers import AutoTokenizer, AutoModelForSequenceClassification
                    self.tokenizer_or_vectorizer = AutoTokenizer.from_pretrained(active_dir)
                    self.model = AutoModelForSequenceClassification.from_pretrained(active_dir)
                    self.model.eval()
                    self.engine_type = "transformer"
                    self.current_version = version_name
                    return
                except Exception as e:
                    print(f"Warning: Failed to load Transformer model from {active_dir}: {e}")

            # Fallback to baseline if loading failed
            self._load_baseline_fallback()

    def _load_baseline_fallback(self):
        self.model = None
        self.tokenizer_or_vectorizer = None
        self.label_map = {0: "account", 1: "billing", 2: "bug", 3: "feature_request", 4: "other"}
        self.engine_type = "baseline"
        self.current_version = "v1.0.0-baseline"

    def predict(self, text: str) -> Tuple[str, float, str]:
        if self.model is None or self.engine_type == "baseline":
            return self._baseline_rule_predict(text)

        with self._lock:
            if self.engine_type == "sklearn":
                try:
                    features = self.tokenizer_or_vectorizer.transform([text])
                    if hasattr(self.model, "predict_proba"):
                        probabilities = self.model.predict_proba(features)[0]
                        max_idx = int(probabilities.argmax())
                        confidence = float(probabilities[max_idx])
                    else:
                        max_idx = int(self.model.predict(features)[0])
                        confidence = 0.85

                    label = self.label_map.get(max_idx, "other")
                    return label, round(confidence, 4), self.current_version
                except Exception as e:
                    print(f"Sklearn prediction error: {e}")
                    return self._baseline_rule_predict(text)

            elif self.engine_type == "transformer":
                try:
                    import torch
                    inputs = self.tokenizer_or_vectorizer(text, return_tensors="pt", truncation=True, max_length=128)
                    with torch.no_grad():
                        outputs = self.model(**inputs)
                        probs = torch.nn.functional.softmax(outputs.logits, dim=-1)[0]
                        confidence, pred_idx = torch.max(probs, dim=0)
                        
                    label = self.label_map.get(int(pred_idx.item()), "other")
                    return label, round(float(confidence.item()), 4), self.current_version
                except Exception as e:
                    print(f"Transformer prediction error: {e}")
                    return self._baseline_rule_predict(text)

        return self._baseline_rule_predict(text)

    def _baseline_rule_predict(self, text: str) -> Tuple[str, float, str]:
        t = text.lower()
        if any(w in t for w in ["password", "login", "account", "profile", "lock", "email"]):
            return "account", 0.90, self.current_version
        elif any(w in t for w in ["invoice", "refund", "billing", "card", "charge", "payment", "receipt"]):
            return "billing", 0.90, self.current_version
        elif any(w in t for w in ["crash", "error", "bug", "exception", "failed", "500", "broken"]):
            return "bug", 0.90, self.current_version
        elif any(w in t for w in ["feature", "add", "support", "request", "excel", "dark mode", "webhook"]):
            return "feature_request", 0.85, self.current_version
        else:
            return "other", 0.70, self.current_version

inference_engine = InferenceEngine()
