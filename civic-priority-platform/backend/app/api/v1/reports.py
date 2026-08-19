from uuid import UUID

from fastapi import APIRouter, Header, HTTPException, status

from app.schemas.reports import ReportCreate, ReportJobResponse, ReportResponse

router = APIRouter()


@router.get("", response_model=list[ReportResponse])
async def list_reports() -> list[ReportResponse]:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Report repository is not connected.",
    )


@router.get("/{report_id}", response_model=ReportResponse)
async def get_report(report_id: UUID) -> ReportResponse:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail=f"Report {report_id} repository is not connected.",
    )


@router.post("", response_model=ReportJobResponse, status_code=status.HTTP_202_ACCEPTED)
async def create_report(
    payload: ReportCreate,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
) -> ReportJobResponse:
    if not idempotency_key:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Idempotency-Key is required for report generation.",
        )
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Report persistence and generation queue are not connected.",
    )
