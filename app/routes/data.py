from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.schemas import DataInputRequest, DataInputResponse, DataListResponse, MessageItem
from app.services.storage import get_db, save_message, get_all_messages

router = APIRouter(tags=["Data Collection"])

@router.post("/data", response_model=DataInputResponse)
def collect_labeled_data(
    payload: DataInputRequest,
    db: Session = Depends(get_db)
):
    """Saves a labeled message (correction or new ground truth) to database for future retraining."""
    if not payload.text or not payload.text.strip():
        raise HTTPException(status_code=400, detail="Text field cannot be empty.")
    if not payload.label or not payload.label.strip():
        raise HTTPException(status_code=400, detail="Label field cannot be empty.")

    msg = save_message(db, text=payload.text, label=payload.label, source=payload.source or "human_correction")

    return DataInputResponse(status="saved", row_id=msg.id)

@router.get("/data", response_model=DataListResponse)
def list_labeled_data(
    limit: int = Query(50, ge=1, le=1000, description="Max number of items to return"),
    offset: int = Query(0, ge=0, description="Number of items to skip"),
    db: Session = Depends(get_db)
):
    """Lists stored labeled messages with pagination."""
    messages, total = get_all_messages(db, limit=limit, offset=offset)
    items = [MessageItem.model_validate(m) for m in messages]
    return DataListResponse(total=total, limit=limit, offset=offset, messages=items)
