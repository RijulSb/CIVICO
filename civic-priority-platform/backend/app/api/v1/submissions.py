"""Submission routes - POST /api/v1/submissions, GET /api/v1/submissions/{id}."""

from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import check_rate_limit
from app.db.session import get_db
from app.schemas.submissions import (
    SubmissionLocation,
    SubmissionRequest,
    SubmissionResponse,
)
from app.services.submission_service import get_submission_service

router = APIRouter()


@router.post(
    "",
    response_model=SubmissionResponse,
    status_code=status.HTTP_201_CREATED,
    dependencies=[Depends(check_rate_limit)],
)
async def create_submission(
    request: Request,
    db: AsyncSession = Depends(get_db),
) -> SubmissionResponse:
    """Create a citizen submission from JSON or multipart audio upload."""
    content_type = request.headers.get("content-type", "")
    audio_bytes: bytes | None = None
    video_bytes: bytes | None = None
    photo_bytes: bytes | None = None
    audio_filename = "voice_intake.webm"
    video_filename = "report_video.webm"

    if content_type.startswith("multipart/form-data"):
        form = await request.form()
        audio = form.get("audio")
        video = form.get("video")
        photo = form.get("photo")
        if hasattr(photo, "read"):
            photo_bytes = await photo.read()
        if hasattr(video, "read"):
            video_bytes = await video.read()
            video_filename = getattr(video, "filename", None) or video_filename
        if hasattr(audio, "read"):
            audio_bytes = await audio.read()
            audio_filename = getattr(audio, "filename", None) or audio_filename

        try:
            payload = SubmissionRequest(
                constituency=str(form.get("constituency") or "khordha"),
                language=str(form["language"]),
                submission_type=str(form["submission_type"]),
                content=str(form.get("content") or ""),
                audio_url=str(form["audio_url"]) if form.get("audio_url") else None,
                photo_url=str(form["photo_url"]) if form.get("photo_url") else None,
                video_url=str(form["video_url"]) if form.get("video_url") else None,
                full_name=str(form["full_name"]) if form.get("full_name") else None,
                email=str(form["email"]) if form.get("email") else None,
                phone=str(form["phone"]) if form.get("phone") else None,
                category=str(form["category"]) if form.get("category") else None,
                citizen_id=str(form["citizen_id"]) if form.get("citizen_id") else None,
                location=SubmissionLocation(
                    ward=str(form["ward"]),
                    block=str(form["block"]),
                    latitude=float(str(form["latitude"])) if form.get("latitude") else None,
                    longitude=float(str(form["longitude"])) if form.get("longitude") else None,
                    accuracy_m=float(str(form["gps_accuracy_m"])) if form.get("gps_accuracy_m") else None,
                    timestamp=str(form["gps_timestamp"]) if form.get("gps_timestamp") else None,
                    custom_text=str(form["custom_location_text"]) if form.get("custom_location_text") else None,
                ),
                custom_location_text=str(form["custom_location_text"]) if form.get("custom_location_text") else None,
                gps_accuracy_m=float(str(form["gps_accuracy_m"])) if form.get("gps_accuracy_m") else None,
                gps_timestamp=str(form["gps_timestamp"]) if form.get("gps_timestamp") else None,
                consent=str(form.get("consent", "true")).lower() == "true",
            )
        except KeyError as err:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=f"Missing multipart submission field: {err.args[0]}",
            ) from err
        except ValueError as err:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=f"Invalid multipart submission field: {err}",
            ) from err
    else:
        payload = SubmissionRequest.model_validate(await request.json())

    service = get_submission_service(db)
    return await service.create_submission(
        payload,
        audio_bytes=audio_bytes,
        audio_filename=audio_filename,
        video_bytes=video_bytes,
        video_filename=video_filename,
        photo_bytes=photo_bytes,
    )


@router.get("", response_model=list[SubmissionResponse])
async def list_submissions(
    constituency: str = "khordha",
    limit: int = 50,
    offset: int = 0,
    db: AsyncSession = Depends(get_db),
) -> list[SubmissionResponse]:
    """Retrieve real citizen submissions from the database."""
    service = get_submission_service(db)
    return await service.list_submissions(constituency=constituency, limit=limit, offset=offset)


@router.get("/{submission_id}", response_model=SubmissionResponse)
async def get_submission(
    submission_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> SubmissionResponse:
    """Retrieve a submission by ID with its processed theme."""
    service = get_submission_service(db)
    return await service.get_submission(submission_id)
