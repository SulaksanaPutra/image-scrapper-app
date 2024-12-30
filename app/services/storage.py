import os
import csv
import json
from datetime import datetime, timezone
from typing import List, Optional, Tuple, Dict, Any

from sqlalchemy import create_engine, Column, Integer, String, DateTime, Text, Float, Boolean, JSON
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from app.config import settings

Base = declarative_base()

class MessageModel(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    text = Column(Text, nullable=False)
    label = Column(String(100), nullable=False, index=True)
    source = Column(String(100), default="human_correction")
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

class TrainingJobModel(Base):
    __tablename__ = "training_jobs"

    job_id = Column(String(100), primary_key=True, index=True)
    status = Column(String(50), default="pending")  # pending, running, completed, failed
    progress = Column(Integer, default=0)  # 0 to 100
    current_step = Column(String(100), default="queued")
    dataset_version = Column(String(50), default="latest")
    model_version = Column(String(50), nullable=True)
    metrics = Column(JSON, nullable=True)
    error_message = Column(Text, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

class ModelVersionModel(Base):
    __tablename__ = "models"

    model_version = Column(String(50), primary_key=True, index=True)
    path = Column(String(255), nullable=False)
    metrics_json = Column(JSON, nullable=True)
    is_active = Column(Boolean, default=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

# Database connection setup
engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False} if settings.DATABASE_URL.startswith("sqlite") else {}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_db():
    """Create database tables and populate seed data if empty."""
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
        count = db.query(MessageModel).count()
        if count == 0:
            seed_csv_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "data", "raw", "seed_dataset.csv")
            if os.path.exists(seed_csv_path):
                import_csv_to_db(db, seed_csv_path)
    finally:
        db.close()

def get_db():
    """Dependency for FastAPI route handlers."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def save_message(db: Session, text: str, label: str, source: str = "human_correction") -> MessageModel:
    msg = MessageModel(text=text, label=label, source=source)
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg

def get_all_messages(db: Session, limit: int = 50, offset: int = 0) -> Tuple[List[MessageModel], int]:
    total = db.query(MessageModel).count()
    messages = db.query(MessageModel).offset(offset).limit(limit).all()
    return messages, total

def import_csv_to_db(db: Session, csv_path: str) -> int:
    added = 0
    with open(csv_path, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if "text" in row and "label" in row:
                msg = MessageModel(text=row["text"].strip(), label=row["label"].strip(), source="seed_csv")
                db.add(msg)
                added += 1
    db.commit()
    return added

def export_db_to_tuples(db: Session) -> Tuple[List[str], List[str]]:
    messages = db.query(MessageModel).all()
    texts = [m.text for m in messages]
    labels = [m.label for m in messages]
    return texts, labels

def create_training_job(db: Session, job_id: str, dataset_version: str = "latest") -> TrainingJobModel:
    job = TrainingJobModel(job_id=job_id, status="pending", progress=0, dataset_version=dataset_version)
    db.add(job)
    db.commit()
    db.refresh(job)
    return job

def update_training_job(
    db: Session,
    job_id: str,
    status: Optional[str] = None,
    progress: Optional[int] = None,
    current_step: Optional[str] = None,
    model_version: Optional[str] = None,
    metrics: Optional[Dict[str, Any]] = None,
    error_message: Optional[str] = None
) -> Optional[TrainingJobModel]:
    job = db.query(TrainingJobModel).filter(TrainingJobModel.job_id == job_id).first()
    if not job:
        return None
    if status is not None:
        job.status = status
    if progress is not None:
        job.progress = progress
    if current_step is not None:
        job.current_step = current_step
    if model_version is not None:
        job.model_version = model_version
    if metrics is not None:
        job.metrics = metrics
    if error_message is not None:
        job.error_message = error_message
    job.updated_at = datetime.now(timezone.utc)
    db.commit()
    db.refresh(job)
    return job

def get_training_job(db: Session, job_id: str) -> Optional[TrainingJobModel]:
    return db.query(TrainingJobModel).filter(TrainingJobModel.job_id == job_id).first()
