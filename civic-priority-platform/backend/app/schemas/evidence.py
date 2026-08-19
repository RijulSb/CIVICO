from enum import StrEnum
from uuid import UUID

from pydantic import Field

from app.schemas.common import APIModel


class EvidenceSourceType(StrEnum):
    CITIZEN_ISSUE = "citizen_issue"
    AUDIO_TRANSCRIPT = "audio_transcript"
    IMAGE = "image"
    GOVERNMENT_DATASET = "government_dataset"
    GEOSPATIAL_DATASET = "geospatial_dataset"
    ANALYSIS_RESULT = "analysis_result"


class EvidenceResponse(APIModel):
    id: UUID
    source_type: EvidenceSourceType
    source_id: UUID | None = None
    excerpt: str | None = Field(default=None, max_length=5_000)
    confidence: float | None = Field(default=None, ge=0, le=1)
    metadata: dict[str, str | int | float | bool | None] | None = None
