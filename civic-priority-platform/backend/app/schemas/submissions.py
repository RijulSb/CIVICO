"""Submission schemas — matches PRD §3.1 / §4.1 API contract exactly."""

from datetime import datetime
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
    VIDEO = "video"


class SubmissionStatus(StrEnum):
    PENDING = "pending"
    PROCESSED = "processed"
    REJECTED = "rejected"


class SubmissionLocation(APIModel):
    ward: str = Field(max_length=100)
    block: str = Field(max_length=100)
    latitude: float | None = Field(default=None, ge=-90, le=90)
    longitude: float | None = Field(default=None, ge=-180, le=180)
    accuracy_m: float | None = Field(default=None, ge=0, le=100_000)
    timestamp: datetime | None = None
    custom_text: str | None = Field(default=None, max_length=500)


class SubmissionRequest(APIModel):
    constituency: str = Field(default="khordha", max_length=50)
    language: SubmissionLanguage
    submission_type: SubmissionType
    content: str = Field(default="", max_length=10_000)
    audio_url: str | None = Field(default=None, max_length=500)
    photo_url: str | None = Field(default=None, max_length=500)
    location: SubmissionLocation
    custom_location_text: str | None = Field(default=None, max_length=500)
    gps_accuracy_m: float | None = Field(default=None, ge=0, le=100_000)
    gps_timestamp: datetime | None = None
    consent: bool = True
    full_name: str | None = Field(default=None, max_length=120)
    email: str | None = Field(default=None, max_length=254)
    phone: str | None = Field(default=None, max_length=20)
    video_url: str | None = Field(default=None, max_length=500)
    category: str | None = Field(default=None, max_length=100)
    citizen_id: UUID | None = None


class SubmissionResponse(APIModel):
    submission_id: UUID
    status: SubmissionStatus
    theme: str | None = None
    confidence: float | None = Field(default=None, ge=0, le=1)
    message: str
    formatted_text: dict[str, str | None] | None = None
    transcript: str | None = None
    extracted: dict[str, object] | None = None
    full_name: str | None = None
    email: str | None = None
    phone: str | None = None
    audio_url: str | None = None
    photo_url: str | None = None
    video_url: str | None = None
    content: str | None = None
    ward: str | None = None
    block: str | None = None
    created_at: datetime | None = None
