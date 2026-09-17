"""Submission service — create and retrieve citizen submissions.

For the MVP, theme extraction runs synchronously using zero-shot keyword matching.
A proper RQ/Celery async worker can replace classify_theme() at any time.
"""

from uuid import UUID, uuid4
from pathlib import Path
import re

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.script_utils import sanitize_odia_text
from app.core.security import detect_prompt_injection, sanitize_text_input
from app.models.submission import Submission, Theme
from app.schemas.submissions import (
    SubmissionRequest,
    SubmissionResponse,
    SubmissionStatus,
)
from app.services.contextual_ai import analyze_complaint
from app.services.transcription_service import (
    transcribe_and_extract_intent,
    transcribe_audio_bytes,
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


import os as _os
import subprocess as _subprocess
import tempfile as _tempfile
import logging as _logging

_media_logger = _logging.getLogger(__name__)

# Try to locate ffmpeg from imageio-ffmpeg (bundled binary, no system install needed)
def _get_ffmpeg() -> str | None:
    try:
        import imageio_ffmpeg  # type: ignore
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        return None


def _normalize_media(data: bytes, filename: str) -> tuple[bytes, str]:
    """
    Normalise uploaded media for browser playback:
      - WebM audio-only → remux with ffmpeg to write Duration/Cues (fixes 0:00 display)
      - AVI / non-web video → transcode to H.264 MP4 with faststart
      - WebM with video stream → transcode to MP4 for widest codec support
      - Everything else → pass through unchanged
    Returns (processed_bytes, extension).
    """
    ffmpeg = _get_ffmpeg()
    if not ffmpeg or not data:
        suffix = Path(filename).suffix.lower() or ".bin"
        return data, suffix

    # Detect container by magic bytes
    is_webm = data[:4] == b"\x1aE\xdf\xa3"
    is_avi = data[:4] == b"RIFF" and len(data) > 12 and data[8:12] == b"AVI "
    is_mp4_like = len(data) > 8 and data[4:8] in (b"ftyp", b"moov")

    if not (is_webm or is_avi or is_mp4_like):
        # Not a video/audio container — return as-is (e.g. JPEG photo)
        suffix = Path(filename).suffix.lower() or ".bin"
        return data, suffix

    # Detect if WebM is audio-only (has Opus/Vorbis track, no video track)
    webm_audio_only = False
    if is_webm:
        webm_audio_only = (b"A_OPUS" in data or b"A_VORBIS" in data) and \
                          (b"V_VP8" not in data and b"V_VP9" not in data and b"V_AV1" not in data)

    src_suffix = ".webm" if (is_webm or is_avi) else ".mp4"
    src_fd, src_path = _tempfile.mkstemp(suffix=src_suffix)
    try:
        with _os.fdopen(src_fd, "wb") as f:
            f.write(data)

        if webm_audio_only:
            # Transcode WebM/Opus audio → MP3 for universal browser support
            dst_fd, dst_path = _tempfile.mkstemp(suffix=".mp3")
            _os.close(dst_fd)
            res = _subprocess.run(
                [ffmpeg, "-y", "-i", src_path,
                 "-vn",                          # no video
                 "-c:a", "libmp3lame",
                 "-b:a", "128k",
                 "-ar", "44100",                 # standard sample rate
                 dst_path],
                capture_output=True, timeout=30,
            )
            if res.returncode == 0 and _os.path.getsize(dst_path) > 0:
                with open(dst_path, "rb") as f:
                    out = f.read()
                _os.remove(dst_path)
                return out, ".mp3"
            _os.remove(dst_path)
        else:
            # Transcode to H.264 MP4 with faststart (widest browser support)
            dst_fd, dst_path = _tempfile.mkstemp(suffix=".mp4")
            _os.close(dst_fd)
            res = _subprocess.run(
                [ffmpeg, "-y", "-i", src_path,
                 "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast",
                 "-c:a", "aac", "-movflags", "+faststart",
                 dst_path],
                capture_output=True, timeout=120,
            )
            if res.returncode == 0 and _os.path.getsize(dst_path) > 0:
                with open(dst_path, "rb") as f:
                    out = f.read()
                _os.remove(dst_path)
                return out, ".mp4"
            _os.remove(dst_path)
            _media_logger.warning("ffmpeg transcode failed: %s", res.stderr[-300:])
    except Exception as exc:
        _media_logger.warning("Media normalisation error: %s", exc)
    finally:
        if _os.path.exists(src_path):
            _os.remove(src_path)

    # Fallback — store raw bytes
    suffix = Path(filename).suffix.lower() or ".bin"
    return data, suffix


class SubmissionService:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    @staticmethod
    def _store_media(data: bytes | None, filename: str) -> str | None:
        if not data:
            return None
        media_dir = Path(__file__).resolve().parents[2] / "data" / "uploads"
        media_dir.mkdir(parents=True, exist_ok=True)
        processed, suffix = _normalize_media(data, filename)
        suffix = suffix if re.fullmatch(r"\.[a-z0-9]{1,8}", suffix) else ".bin"
        target = media_dir / f"{uuid4().hex}{suffix}"
        target.write_bytes(processed)
        return f"/media/{target.name}"


    async def create_submission(
        self,
        payload: SubmissionRequest,
        audio_bytes: bytes | None = None,
        audio_filename: str = "voice_intake.webm",
        video_bytes: bytes | None = None,
        video_filename: str = "report_video.webm",
        photo_bytes: bytes | None = None,
    ) -> SubmissionResponse:
        user_complaint = (payload.content or "").strip()
        is_placeholder = user_complaint in (
            "[Voice Evidence Attached]",
            "[Voice Recording Attached]",
            "[Video Evidence Attached]",
            "[Photo Evidence Attached]",
            "",
        )

        # 1. Voice Speech-to-Text Transcription & Multilingual Extraction Pipeline
        text_hint = user_complaint if not is_placeholder else ""
        if audio_bytes:
            voice_result = await transcribe_audio_bytes(
                audio_bytes=audio_bytes,
                filename=audio_filename,
                language=payload.language.value,
                user_text_hint=text_hint,
            )
            transcript = voice_result.transcript
            theme_override = voice_result.detected_theme
        elif (
            payload.submission_type.value == "voice"
            or payload.audio_url
            or "[Voice Recording Attached]" in user_complaint
        ):
            voice_result = await transcribe_and_extract_intent(
                audio_base64=payload.audio_url,
                filename=audio_filename,
                language=payload.language.value,
                user_text_hint=text_hint,
            )
            transcript = voice_result.transcript
            theme_override = voice_result.detected_theme
        else:
            theme_override = None

        # Determine primary complaint text:
        # NEVER overwrite what the citizen actually typed in the description box!
        if not is_placeholder:
            raw_text = user_complaint
        else:
            raw_text = transcript or "Citizen report submitted with attached media evidence."

        if payload.custom_location_text:
            raw_text = f"{raw_text}\nLocation: {payload.custom_location_text}".strip()

        # 2. Prompt Injection Detection
        is_injection, reason = detect_prompt_injection(raw_text)
        if is_injection:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Submission rejected: {reason}",
            )

        # 3. Text Input Sanitization
        sanitized_content = sanitize_text_input(raw_text, max_length=2000)

        if payload.language.value == "odia":
            sanitized_content = sanitize_odia_text(sanitized_content) or sanitized_content
            if transcript:
                transcript = sanitize_odia_text(transcript)

        # 4. Extract theme
        if theme_override:
            theme_label = theme_override
            confidence = 0.88
        else:
            theme_label, confidence = classify_theme(sanitized_content)

        stored_audio_url = payload.audio_url or self._store_media(audio_bytes, audio_filename)
        stored_video_url = payload.video_url or self._store_media(video_bytes, video_filename)
        stored_photo_url = payload.photo_url or self._store_media(photo_bytes, "report_photo.jpg")
        # 5. Build contextual preview from complaint + explicit location text.
        extracted = {
            "issue_type": theme_label,
            "problem_location": payload.custom_location_text or None,
            "coordinates": ({"lat": payload.location.latitude, "lng": payload.location.longitude} if payload.location.latitude is not None and payload.location.longitude is not None else None),
            "urgency": "high" if any(k in sanitized_content.lower() for k in ("danger", "flood", "broken", "urgent", "leak")) else "medium",
            "urgency_reason": "Detected from complaint wording and supplied location context.",
            "beneficiaries_estimate": None,
        }
        formatted_text = {payload.language.value: sanitized_content}
        llm_preview = await analyze_complaint(
            sanitized_content,
            payload.language.value,
            payload.custom_location_text,
            payload.location.latitude,
            payload.location.longitude,
        )
        if llm_preview:
            extracted.update({k: llm_preview.get(k) for k in ("issue_type", "problem_location", "urgency", "urgency_reason", "beneficiaries_estimate") if k in llm_preview})
            if llm_preview.get("formatted_text"):
                formatted_text = {payload.language.value: str(llm_preview["formatted_text"])}

        if payload.language.value == "odia":
            if isinstance(formatted_text, dict):
                formatted_text = {k: sanitize_odia_text(v) if isinstance(v, str) else v for k, v in formatted_text.items()}
            if isinstance(extracted, dict):
                if isinstance(extracted.get("problem_location"), str):
                    extracted["problem_location"] = sanitize_odia_text(extracted["problem_location"])
                if isinstance(extracted.get("urgency_reason"), str):
                    extracted["urgency_reason"] = sanitize_odia_text(extracted["urgency_reason"])

        # 6. Persist submission
        submission = Submission(
            constituency=payload.constituency,
            language=payload.language.value,
            submission_type=payload.submission_type.value,
            content=sanitized_content,
            audio_url=stored_audio_url,
            photo_url=stored_photo_url,
            video_url=stored_video_url,
            full_name=payload.full_name,
            email=payload.email,
            phone=payload.phone,
            transcript=transcript,
            formatted_text=formatted_text,
            extracted=extracted,
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

        try:
            from app.services.analytics_service import clear_dashboard_cache
            clear_dashboard_cache()
        except Exception:
            pass

        return SubmissionResponse(
            submission_id=submission.id,
            status=SubmissionStatus(submission.status),
            theme=theme_label if confidence > 0 else None,
            confidence=confidence if confidence > 0 else None,
            message="Submission received and contextual preview generated." if confidence > 0
            else "Submission received. AI processing in progress.",
            formatted_text=formatted_text,
            transcript=transcript,
            extracted=extracted,
            full_name=submission.full_name,
            email=submission.email,
            phone=submission.phone,
            audio_url=submission.audio_url,
            photo_url=submission.photo_url,
            video_url=submission.video_url,
            content=submission.content,
            ward=submission.ward,
            block=submission.block,
            created_at=submission.created_at,
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
        formatted_text = submission.formatted_text
        transcript = submission.transcript
        extracted = submission.extracted
        if submission.language == "odia":
            if isinstance(formatted_text, dict):
                formatted_text = {k: sanitize_odia_text(v) if isinstance(v, str) else v for k, v in formatted_text.items()}
            if isinstance(transcript, str):
                transcript = sanitize_odia_text(transcript)
            if isinstance(extracted, dict):
                if isinstance(extracted.get("problem_location"), str):
                    extracted["problem_location"] = sanitize_odia_text(extracted["problem_location"])
                if isinstance(extracted.get("urgency_reason"), str):
                    extracted["urgency_reason"] = sanitize_odia_text(extracted["urgency_reason"])

        return SubmissionResponse(
            submission_id=submission.id,
            status=SubmissionStatus(submission.status),
            theme=submission.category,
            confidence=None,
            message="Submission retrieved.",
            formatted_text=formatted_text,
            transcript=transcript,
            extracted=extracted,
            full_name=submission.full_name,
            email=submission.email,
            phone=submission.phone,
            audio_url=submission.audio_url,
            photo_url=submission.photo_url,
            video_url=submission.video_url,
            content=submission.content,
            ward=submission.ward,
            block=submission.block,
            created_at=submission.created_at,
        )

    async def list_submissions(
        self,
        constituency: str = "khordha",
        limit: int = 50,
        offset: int = 0,
    ) -> list[SubmissionResponse]:
        query = (
            select(Submission)
            .where(Submission.constituency == constituency)
            .where(Submission.status.notin_(["rejected", "duplicate"]))
            .order_by(Submission.created_at.desc())
            .offset(offset)
            .limit(limit)
        )
        result = await self._db.execute(query)
        rows = result.scalars().all()
        responses: list[SubmissionResponse] = []
        for s in rows:
            formatted_text = s.formatted_text
            transcript = s.transcript
            extracted = s.extracted
            if s.language == "odia":
                if isinstance(formatted_text, dict):
                    formatted_text = {k: sanitize_odia_text(v) if isinstance(v, str) else v for k, v in formatted_text.items()}
                if isinstance(transcript, str):
                    transcript = sanitize_odia_text(transcript)
                if isinstance(extracted, dict):
                    if isinstance(extracted.get("problem_location"), str):
                        extracted["problem_location"] = sanitize_odia_text(extracted["problem_location"])
                    if isinstance(extracted.get("urgency_reason"), str):
                        extracted["urgency_reason"] = sanitize_odia_text(extracted["urgency_reason"])
            if not formatted_text:
                formatted_text = {s.language: s.content or transcript or "Citizen report received for review."}

            responses.append(
                SubmissionResponse(
                    submission_id=s.id,
                    status=SubmissionStatus(s.status),
                    theme=s.category,
                    confidence=0.92,
                    message="Submission retrieved.",
                    formatted_text=formatted_text,
                    transcript=transcript,
                    extracted=extracted,
                    full_name=s.full_name,
                    email=s.email,
                    phone=s.phone,
                    audio_url=s.audio_url,
                    photo_url=s.photo_url,
                    video_url=s.video_url,
                    content=s.content,
                    ward=s.ward,
                    block=s.block,
                    created_at=s.created_at,
                )
            )
        return responses

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
