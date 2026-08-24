"""Submission service — create and retrieve citizen submissions.

For the MVP, theme extraction runs synchronously using zero-shot keyword matching.
A proper RQ/Celery async worker can replace classify_theme() at any time.
"""

from uuid import UUID, uuid4

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.submission import Submission, Theme
from app.schemas.submissions import (
    SubmissionRequest,
    SubmissionResponse,
    SubmissionStatus,
)

# ---------------------------------------------------------------------------
# Theme extraction — zero-shot keyword approach (no external model required)
# Replace the body of classify_theme() with a MuRIL/IndicBERT call when ready.
# ---------------------------------------------------------------------------

THEME_KEYWORDS: dict[str, list[str]] = {
    "road_repair": ["road", "pothole", "path", "street", "bridge", "pavement", "rasta", "sadak"],
    "school_infrastructure": ["school", "classroom", "teacher", "education", "vidyalaya", "books"],
    "health_clinic": ["hospital", "clinic", "doctor", "medicine", "health", "chc", "phc", "nurse"],
    "water_supply": ["water", "pipe", "pump", "borewell", "pani", "jal", "drainage", "sewage"],
    "electricity": ["electricity", "power", "light", "bijli", "transformer", "wire"],
    "sanitation": ["toilet", "latrine", "open_defecation", "swachh", "garbage", "waste"],
}


def classify_theme(text: str) -> tuple[str, float]:
    """Return (theme_label, confidence) using keyword frequency scoring."""
    text_lower = text.lower()
    scores: dict[str, int] = {}
    for label, keywords in THEME_KEYWORDS.items():
        scores[label] = sum(1 for kw in keywords if kw in text_lower)
    best = max(scores, key=lambda k: scores[k])
    total = sum(scores.values()) or 1
    confidence = round(scores[best] / total, 2) if scores[best] > 0 else 0.0
    return best, confidence


# ---------------------------------------------------------------------------
# Service
# ---------------------------------------------------------------------------


class SubmissionService:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def create_submission(self, payload: SubmissionRequest) -> SubmissionResponse:
        # 1. Extract theme synchronously
        theme_label, confidence = classify_theme(payload.content or "")

        # 2. Persist submission
        submission = Submission(
            constituency=payload.constituency,
            language=payload.language.value,
            submission_type=payload.submission_type.value,
            content=payload.content,
            audio_url=payload.audio_url,
            photo_url=payload.photo_url,
            ward=payload.location.ward,
            block=payload.location.block,
            latitude=payload.location.latitude,
            longitude=payload.location.longitude,
            category=theme_label,
            citizen_id=payload.citizen_id,
            status="processed" if confidence > 0 else "pending",
        )
        self._db.add(submission)
        await self._db.flush()
        # 3. Persist theme record
        if confidence > 0:
            theme = Theme(
                submission_id=submission.id,
                theme_label=theme_label,
                confidence=confidence,
            )
            self._db.add(theme)

        await self._db.commit()
        await self._db.refresh(submission)

        return SubmissionResponse(
            submission_id=submission.id,
            status=SubmissionStatus(submission.status),
            theme=theme_label if confidence > 0 else None,
            confidence=confidence if confidence > 0 else None,
            message="Submission received and processed." if confidence > 0
            else "Submission received. AI processing in progress.",
        )

    async def get_submission(self, submission_id: UUID) -> SubmissionResponse:
        result = await self._db.execute(
            select(Submission).where(Submission.id == submission_id)
        )
        submission = result.scalar_one_or_none()
        if submission is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Submission {submission_id} not found.",
            )
        return SubmissionResponse(
            submission_id=submission.id,
            status=SubmissionStatus(submission.status),
            theme=submission.category,
            confidence=None,
            message="Submission retrieved.",
        )

    async def list_by_constituency(self, constituency: str, limit: int = 50) -> list[Submission]:
        result = await self._db.execute(
            select(Submission)
            .where(Submission.constituency == constituency)
            .order_by(Submission.created_at.desc())
            .limit(limit)
        )
        return list(result.scalars().all())


def get_submission_service(db: AsyncSession) -> SubmissionService:
    return SubmissionService(db)
