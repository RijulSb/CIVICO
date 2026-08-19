from uuid import UUID

from fastapi import APIRouter, HTTPException, Response, status

from app.schemas.jobs import PriorityListResponse

router = APIRouter()


@router.get("", response_model=PriorityListResponse)
async def list_priorities() -> PriorityListResponse:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Priority query service is not connected.",
    )


@router.get("/{priority_id}")
async def get_priority(priority_id: UUID):
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail=f"Priority {priority_id} repository is not connected.",
    )


@router.post("/recalculate", status_code=status.HTTP_202_ACCEPTED)
async def recalculate_priorities(response: Response):
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Priority recalculation queue is not connected.",
    )
