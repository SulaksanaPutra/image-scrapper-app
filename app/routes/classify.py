from fastapi import APIRouter, Depends, HTTPException
from app.schemas import ClassifyRequest, ClassifyResponse
from app.deps import get_inference_engine
from app.services.inference import InferenceEngine

router = APIRouter(tags=["Classification"])

@router.post("/classify", response_model=ClassifyResponse)
def classify_message(
    payload: ClassifyRequest,
    engine: InferenceEngine = Depends(get_inference_engine)
):
    """Classifies an input message text and returns predicted label, confidence score, and model version."""
    if not payload.text or not payload.text.strip():
        raise HTTPException(status_code=400, detail="Input text cannot be empty.")

    label, confidence, version = engine.predict(payload.text)

    return ClassifyResponse(
        label=label,
        confidence=confidence,
        model_version=version
    )
