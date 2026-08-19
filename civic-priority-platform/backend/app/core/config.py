from uuid import UUID

from fastapi import APIRouter, Header, HTTPException, status

from app.schemas.uploads import UploadInitRequest, UploadInitResponse, UploadResponse

router = APIRouter()


@router.post("/init", response_model=UploadInitResponse, status_code=status.HTTP_201_CREATED)
async def initialize_upload(
    payload: UploadInitRequest,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
) -> UploadInitResponse:
    if not idempotency_key:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Idempotency-Key is required for upload initialization.",
        )
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Object storage adapter is not configured.",
    )


@router.get("/{upload_id}", response_model=UploadResponse)
async def get_upload(upload_id: UUID) -> UploadResponse:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail=f"Upload {upload_id} repository is not connected.",
    )
