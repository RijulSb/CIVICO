from datetime import datetime
from enum import StrEnum
from uuid import UUID

from pydantic import Field, model_validator

from app.schemas.common import APIModel, PaginationMeta


class IssueStatus(StrEnum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    RESOLVED = "resolved"
    ARCHIVED = "archived"


class IssueCreate(APIModel):
    title: str = Field(min_length=3, max_length=200)
    description: str = Field(min_length=3, max_length=5_000)
    category: str | None = Field(default=None, max_length=100)
    latitude: float | None = Field(default=None, ge=-90, le=90)
    longitude: float | None = Field(default=None, ge=-180, le=180)
    language: str = Field(default="en", min_length=2, max_length=20)

    @model_validator(mode="after")
    def validate_coordinates(self) -> "IssueCreate":
        if (self.latitude is None) != (self.longitude is None):
            raise ValueError("latitude and longitude must be provided together.")
        return self


class IssueUpdate(APIModel):
    title: str | None = Field(default=None, min_length=3, max_length=200)
    description: str | None = Field(default=None, min_length=3, max_length=5_000)
    category: str | None = Field(default=None, max_length=100)
    status: IssueStatus | None = None
    latitude: float | None = Field(default=None, ge=-90, le=90)
    longitude: float | None = Field(default=None, ge=-180, le=180)

    @model_validator(mode="after")
    def validate_update(self) -> "IssueUpdate":
        if not self.model_fields_set:
            raise ValueError("At least one field must be supplied for an update.")
        if ("latitude" in self.model_fields_set) != ("longitude" in self.model_fields_set):
            raise ValueError("latitude and longitude must be updated together.")
        return self


class IssueResponse(APIModel):
    id: UUID
    title: str
    description: str
    category: str | None
    latitude: float | None
    longitude: float | None
    language: str
    status: IssueStatus
    created_at: datetime
    updated_at: datetime | None


class IssueListResponse(APIModel):
    items: list[IssueResponse]
    pagination: PaginationMeta
