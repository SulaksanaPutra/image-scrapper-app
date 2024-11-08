import os
import json
import joblib
from typing import Dict, Any

def save_sklearn_artifacts(output_dir: str, model, vectorizer, label2id: Dict[str, int], id2label: Dict[int, str], metrics: Dict[str, Any]):
    os.makedirs(output_dir, exist_ok=True)
    
    joblib.dump(model, os.path.join(output_dir, "model.joblib"))
    joblib.dump(vectorizer, os.path.join(output_dir, "vectorizer.joblib"))

    with open(os.path.join(output_dir, "label_map.json"), "w", encoding="utf-8") as f:
        json.dump({str(k): v for k, v in id2label.items()}, f, indent=2)

    with open(os.path.join(output_dir, "metrics.json"), "w", encoding="utf-8") as f:
        json.dump(metrics, f, indent=2)

def save_transformer_artifacts(output_dir: str, model, tokenizer, id2label: Dict[int, str], metrics: Dict[str, Any]):
    os.makedirs(output_dir, exist_ok=True)
    
    model.save_pretrained(output_dir)
    tokenizer.save_pretrained(output_dir)

    with open(os.path.join(output_dir, "label_map.json"), "w", encoding="utf-8") as f:
        json.dump({str(k): v for k, v in id2label.items()}, f, indent=2)

    with open(os.path.join(output_dir, "metrics.json"), "w", encoding="utf-8") as f:
        json.dump(metrics, f, indent=2)
