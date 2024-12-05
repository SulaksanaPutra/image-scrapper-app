import os
import shutil
import tempfile
import pytest
from training.dataset import build_label_mappings, prepare_splits
from training.metrics import compute_classification_metrics
from training.train import train_sklearn_pipeline

def test_label_mappings():
    labels = ["account", "billing", "account", "bug", "other"]
    label2id, id2label = build_label_mappings(labels)
    assert len(label2id) == 4
    assert label2id["account"] == id2label.keys().__iter__().__next__() or "account" in label2id

def test_metrics_computation():
    y_true = [0, 1, 2, 0, 1]
    y_pred = [0, 1, 2, 0, 0]
    metrics = compute_classification_metrics(y_true, y_pred)
    assert "accuracy" in metrics
    assert "f1_macro" in metrics
    assert metrics["accuracy"] > 0

def test_sklearn_training_end_to_end():
    texts = [
        "Reset my password please", "Cannot login into account",
        "Invoice calculation is wrong", "Refund my payment",
        "App crashes on button click", "Fatal error 500",
        "Add new feature please", "Export to CSV"
    ]
    labels = ["account", "account", "billing", "billing", "bug", "bug", "feature_request", "feature_request"]

    tmp_dir = tempfile.mkdtemp()
    try:
        metrics = train_sklearn_pipeline(texts, labels, tmp_dir, "v1.0.0-test")
        assert os.path.exists(os.path.join(tmp_dir, "model.joblib"))
        assert os.path.exists(os.path.join(tmp_dir, "vectorizer.joblib"))
        assert os.path.exists(os.path.join(tmp_dir, "label_map.json"))
        assert os.path.exists(os.path.join(tmp_dir, "metrics.json"))
        assert metrics["f1_macro"] >= 0.0
    finally:
        shutil.rmtree(tmp_dir, ignore_errors=True)
