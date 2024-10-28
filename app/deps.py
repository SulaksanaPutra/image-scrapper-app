from typing import Generator
from sqlalchemy.orm import Session
from app.services.storage import get_db
from app.services.inference import inference_engine, InferenceEngine
from app.services.job_runner import job_runner, BackgroundJobRunner
from app.services.model_registry import model_registry, ModelRegistry

def get_inference_engine() -> InferenceEngine:
    return inference_engine

def get_job_runner() -> BackgroundJobRunner:
    return job_runner

def get_model_registry() -> ModelRegistry:
    return model_registry
