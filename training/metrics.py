from typing import Dict, Any, List
from sklearn.metrics import accuracy_score, precision_recall_fscore_support

def compute_classification_metrics(y_true: List[int], y_pred: List[int]) -> Dict[str, float]:
    acc = accuracy_score(y_true, y_pred)
    precision, recall, f1, _ = precision_recall_fscore_support(y_true, y_pred, average="macro", zero_division=0)
    
    return {
        "accuracy": round(float(acc), 4),
        "f1_macro": round(float(f1), 4),
        "precision_macro": round(float(precision), 4),
        "recall_macro": round(float(recall), 4)
    }
