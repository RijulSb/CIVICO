from datetime import datetime
from typing import Any, Generic, TypeVar
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field

T = TypeVar("T")


class APIModel(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,
        extra="forbid",
        str_strip_whitespace=True,
    )


class PaginationParams(APIModel):
    page: int = Field(default=1, ge=1)
    page_size: int = Field(default=20, ge=1, le=100)


class PaginationMeta(APIModel):
    page: int = Field(ge=1)
    page_size: int = Field(ge=1, le=100)
    total: int = Field(ge=0)
    has_next: bool


class APIResponse(BaseModel, Generic[T]):
    model_config = ConfigDict(extra="forbid")

    data: T
    meta: dict[str, Any] | None = None


class ErrorDetail(APIModel):
    code: str = Field(min_length=1, max_length=100)
    message: str = Field(min_length=1, max_length=1_000)
    field: str | None = Field(default=None, max_length=200)


class ErrorResponse(APIModel):
    error: ErrorDetail
    request_id: str | None = Field(default=None, max_length=128)


class TimestampedResponse(APIModel):
    id: UUID
    created_at: datetime
    updated_at: datetime | None = None
