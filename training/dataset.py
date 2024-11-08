import os
import pandas as pd
from typing import List, Tuple, Dict, Any
from sklearn.model_selection import train_test_split

def load_dataset_from_db_or_csv(db_session=None, csv_path: str = None) -> Tuple[List[str], List[str]]:
    """Loads texts and labels from database or CSV fallback."""
    if db_session:
        from app.services.storage import export_db_to_tuples
        texts, labels = export_db_to_tuples(db_session)
        if len(texts) > 0:
            return texts, labels

    if csv_path and os.path.exists(csv_path):
        df = pd.read_csv(csv_path)
        texts = df["text"].astype(str).tolist()
        labels = df["label"].astype(str).tolist()
        return texts, labels

    # Fallback to seed CSV location if nothing passed
    seed_csv = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "raw", "seed_dataset.csv")
    if os.path.exists(seed_csv):
        df = pd.read_csv(seed_csv)
        return df["text"].astype(str).tolist(), df["label"].astype(str).tolist()

    return [], []

def build_label_mappings(labels: List[str]) -> Tuple[Dict[str, int], Dict[int, str]]:
    unique_labels = sorted(list(set(labels)))
    label2id = {label: idx for idx, label in enumerate(unique_labels)}
    id2label = {idx: label for idx, label in enumerate(unique_labels)}
    return label2id, id2label

def prepare_splits(texts: List[str], labels: List[str], test_size: float = 0.2, random_state: int = 42):
    return train_test_split(texts, labels, test_size=test_size, random_state=random_state, stratify=labels if len(set(labels)) > 1 else None)
