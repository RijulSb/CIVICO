"""Submission schemas — matches PRD §3.1 / §4.1 API contract exactly."""

from enum import StrEnum
from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel


class SubmissionLanguage(StrEnum):
    ODIA = "odia"
    HINDI = "hindi"
    ENGLISH = "english"
    HINGLISH = "hinglish"


class SubmissionType(StrEnum):
    VOICE = "voice"
    TEXT = "text"
    PHOTO = "photo"


class SubmissionStatus(StrEnum):
    PENDING = "pending"
    PROCESSED = "processed"
    REJECTED = "rejected"


class SubmissionLocation(APIModel):
    ward: str = Field(max_length=100)
    block: str = Field(max_length=100)
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)


class SubmissionRequest(APIModel):
    constituency: str = Field(default="khordha", max_length=50)
    language: SubmissionLanguage
    submission_type: SubmissionType
    content: str = Field(default="", max_length=10_000)
    audio_url: str | None = Field(default=None, max_length=500)
    photo_url: str | None = Field(default=None, max_length=500)
    location: SubmissionLocation
    category: str | None = Field(default=None, max_length=100)
    citizen_id: UUID | None = None


class SubmissionResponse(APIModel):
    submission_id: UUID
    status: SubmissionStatus
    theme: str | None = None
    confidence: float | None = Field(default=None, ge=0, le=1)
    message: str
