import os
import argparse
import json
import sys

# Ensure root dir is in sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from training.dataset import load_dataset_from_db_or_csv, build_label_mappings, prepare_splits
from training.metrics import compute_classification_metrics
from training.save_artifacts import save_sklearn_artifacts, save_transformer_artifacts

def train_sklearn_pipeline(texts, labels, output_dir, model_version):
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.linear_model import LogisticRegression, SGDClassifier

    label2id, id2label = build_label_mappings(labels)
    y = [label2id[l] for l in labels]

    train_texts, val_texts, train_y, val_y = prepare_splits(texts, y, test_size=0.2)

    vectorizer = TfidfVectorizer(ngram_range=(1, 2), max_features=5000)
    X_train = vectorizer.fit_transform(train_texts)
    X_val = vectorizer.transform(val_texts)

    model = LogisticRegression(C=1.0, max_iter=500)
    model.fit(X_train, train_y)

    val_preds = model.predict(X_val)
    metrics = compute_classification_metrics(val_y, val_preds)
    metrics["model_version"] = model_version
    metrics["engine"] = "sklearn"

    save_sklearn_artifacts(output_dir, model, vectorizer, label2id, id2label, metrics)
    print(f"Successfully trained sklearn model. Metrics: {metrics}")
    return metrics

def train_transformer_pipeline(texts, labels, output_dir, base_model, model_version):
    import torch
    from transformers import AutoTokenizer, AutoModelForSequenceClassification, Trainer, TrainingArguments
    from datasets import Dataset

    label2id, id2label = build_label_mappings(labels)
    y = [label2id[l] for l in labels]

    train_texts, val_texts, train_y, val_y = prepare_splits(texts, y, test_size=0.2)

    tokenizer = AutoTokenizer.from_pretrained(base_model)
    model = AutoModelForSequenceClassification.from_pretrained(base_model, num_labels=len(label2id), id2label=id2label, label2id=label2id)

    train_dataset = Dataset.from_dict({"text": train_texts, "label": train_y})
    val_dataset = Dataset.from_dict({"text": val_texts, "label": val_y})

    def tokenize_func(examples):
        return tokenizer(examples["text"], truncation=True, max_length=128, padding="max_length")

    train_encoded = train_dataset.map(tokenize_func, batched=True)
    val_encoded = val_dataset.map(tokenize_func, batched=True)

    training_args = TrainingArguments(
        output_dir=os.path.join(output_dir, "checkpoints"),
        evaluation_strategy="epoch",
        learning_rate=2e-5,
        per_device_train_batch_size=8,
        num_train_epochs=3,
        weight_decay=0.01,
        save_strategy="epoch",
        logging_steps=10
    )

    def compute_metrics_eval(eval_pred):
        logits, labels = eval_pred
        preds = logits.argmax(axis=-1)
        return compute_classification_metrics(labels, preds)

    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=train_encoded,
        eval_dataset=val_encoded,
        compute_metrics=compute_metrics_eval,
    )

    trainer.train()
    eval_res = trainer.evaluate()
    metrics = {
        "accuracy": float(eval_res.get("eval_accuracy", 0.0)),
        "f1_macro": float(eval_res.get("eval_f1_macro", 0.0)),
        "model_version": model_version,
        "engine": "transformer"
    }

    save_transformer_artifacts(output_dir, model, tokenizer, id2label, metrics)
    print(f"Successfully trained transformer model. Metrics: {metrics}")
    return metrics

def main():
    parser = argparse.ArgumentParser(description="ClassifyKit Model Trainer")
    parser.add_argument("--output-dir", type=str, required=True, help="Directory to save trained artifacts")
    parser.add_argument("--engine", type=str, default="sklearn", choices=["sklearn", "transformer"], help="Training engine")
    parser.add_argument("--base-model", type=str, default="distilbert-base-uncased", help="Base transformer model name")
    parser.add_argument("--model-version", type=str, default="v1.0.0", help="Version string for the model")
    parser.add_argument("--csv-path", type=str, default=None, help="Path to CSV dataset")

    args = parser.parse_args()

    # Try DB session first, fallback to CSV
    try:
        from app.services.storage import SessionLocal, export_db_to_tuples
        db = SessionLocal()
        texts, labels = export_db_to_tuples(db)
        db.close()
    except Exception:
        texts, labels = [], []

    if len(texts) == 0:
        texts, labels = load_dataset_from_db_or_csv(csv_path=args.csv_path)

    if len(texts) == 0:
        print("Error: No training data found.")
        sys.exit(1)

    print(f"Training on {len(texts)} samples across {len(set(labels))} unique classes...")

    if args.engine == "transformer":
        try:
            train_transformer_pipeline(texts, labels, args.output_dir, args.base_model, args.model_version)
        except Exception as e:
            print(f"Transformer training failed: {e}. Falling back to Sklearn engine...")
            train_sklearn_pipeline(texts, labels, args.output_dir, args.model_version)
    else:
        train_sklearn_pipeline(texts, labels, args.output_dir, args.model_version)

if __name__ == "__main__":
    main()
