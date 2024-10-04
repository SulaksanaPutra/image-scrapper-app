from datetime import datetime
from typing import Dict, List, Optional
from pydantic import BaseModel, Field

# --- Classification Schemas ---

class ClassifyRequest(BaseModel):
    text: str = Field(..., description="Message text to classify", example="I cannot reset my password")

class ClassifyResponse(BaseModel):
    label: str = Field(..., description="Predicted label name", example="account")
    confidence: float = Field(..., description="Prediction confidence score between 0 and 1", example=0.97)
    model_version: str = Field(..., description="Version of the model that generated prediction", example="v1.0.0")

# --- Data Collection Schemas ---

class DataInputRequest(BaseModel):
    text: str = Field(..., description="Input text message", example="My invoice is missing")
    label: str = Field(..., description="Correct ground truth label", example="billing")
    source: Optional[str] = Field("human_correction", description="Source of the labeled data")

class DataInputResponse(BaseModel):
    status: str = Field("saved", description="Operation status")
    row_id: int = Field(..., description="Database primary key of stored message")

class MessageItem(BaseModel):
    id: int
    text: str
    label: str
    source: str
    created_at: datetime

    class Config:
        from_attributes = True

class DataListResponse(BaseModel):
    total: int
    messages: List[MessageItem]

# --- Retraining Schemas ---

class RetrainRequest(BaseModel):
    dataset_version: Optional[str] = Field("latest", description="Dataset tag or source")
    base_model: Optional[str] = Field(None, description="Base transformer or model name")
    engine: Optional[str] = Field("sklearn", description="Training engine: 'sklearn' or 'transformer'")

class RetrainResponse(BaseModel):
    status: str = Field("queued", description="Job status")
    job_id: str = Field(..., description="Unique job identifier", example="job_20260730_001")

# --- Job Status Schemas ---

class JobStatusResponse(BaseModel):
    job_id: str
    status: str  # pending, running, completed, failed
    progress: int  # 0 to 100
    current_step: Optional[str] = None
    dataset_version: Optional[str] = None
    model_version: Optional[str] = None
    metrics: Optional[Dict[str, float]] = None
    error_message: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

# --- Health Check ---

class HealthResponse(BaseModel):
    status: str = "ok"
    model_loaded: bool
    active_version: str
