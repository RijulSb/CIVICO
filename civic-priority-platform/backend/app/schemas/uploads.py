from datetime import datetime
from enum import StrEnum
from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel


class UploadStatus(StrEnum):
    INITIALIZED = "initialized"
    UPLOADING = "uploading"
    COMPLETED = "completed"
    FAILED = "failed"


class UploadInitRequest(APIModel):
    filename: str = Field(min_length=1, max_length=255)
    content_type: str = Field(min_length=1, max_length=100)
    size_bytes: int = Field(gt=0, le=25 * 1024 * 1024)


class UploadInitResponse(APIModel):
    upload_id: UUID
    upload_url: str
    expires_at: datetime


class UploadResponse(APIModel):
    id: UUID
    filename: str
    content_type: str
    size_bytes: int
    status: UploadStatus
