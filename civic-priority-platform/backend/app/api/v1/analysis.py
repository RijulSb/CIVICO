from uuid import UUID

from fastapi import APIRouter, Header, HTTPException, status

from app.schemas.analysis import AnalysisJobResponse, AnalysisRequest

router = APIRouter()


@router.post("/jobs", response_model=AnalysisJobResponse, status_code=status.HTTP_202_ACCEPTED)
async def create_analysis_job(
    payload: AnalysisRequest,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
) -> AnalysisJobResponse:
    if not idempotency_key:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Idempotency-Key is required for analysis jobs.",
        )
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Analysis job persistence and queue integration are not connected.",
    )


@router.get("/jobs/{job_id}", response_model=AnalysisJobResponse)
async def get_analysis_job(job_id: UUID) -> AnalysisJobResponse:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail=f"Analysis job {job_id} repository is not connected.",
    )
