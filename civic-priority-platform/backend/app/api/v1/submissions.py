"""Submission routes — POST /api/v1/submissions, GET /api/v1/submissions/{id}"""

from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.submissions import SubmissionRequest, SubmissionResponse
from app.services.submission_service import SubmissionService, get_submission_service

router = APIRouter()


@router.post("", response_model=SubmissionResponse, status_code=status.HTTP_201_CREATED)
async def create_submission(
    payload: SubmissionRequest,
    db: AsyncSession = Depends(get_db),
) -> SubmissionResponse:
    """Create a new citizen submission and extract its theme synchronously."""
    service = get_submission_service(db)
    return await service.create_submission(payload)


@router.get("/{submission_id}", response_model=SubmissionResponse)
async def get_submission(
    submission_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> SubmissionResponse:
    """Retrieve a submission by ID with its processed theme."""
    service = get_submission_service(db)
    return await service.get_submission(submission_id)
