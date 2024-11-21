from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas import JobStatusResponse
from app.deps import get_db
from app.services.storage import get_training_job

router = APIRouter(tags=["Job Monitoring"])

@router.get("/jobs/{job_id}", response_model=JobStatusResponse)
def get_job_status(
    job_id: str,
    db: Session = Depends(get_db)
):
    """Retrieves status and progress details of a training job."""
    job = get_training_job(db, job_id=job_id)
    if not job:
        raise HTTPException(status_code=404, detail=f"Job '{job_id}' not found.")

    return JobStatusResponse.model_validate(job)
