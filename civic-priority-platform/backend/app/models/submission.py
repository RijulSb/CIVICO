"""Submission ORM model — matches PRD §5 database schema exactly."""

from uuid import UUID

from sqlalchemy import Double, String, Text
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class Submission(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    """Citizen submission (voice, text, or photo) for a development request."""

    __tablename__ = "submissions"

    constituency: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    language: Mapped[str] = mapped_column(String(20), nullable=False)
    submission_type: Mapped[str] = mapped_column(String(20), nullable=False)
    content: Mapped[str | None] = mapped_column(Text, nullable=True)
    audio_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    photo_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    ward: Mapped[str | None] = mapped_column(String(100), nullable=True, index=True)
    block: Mapped[str | None] = mapped_column(String(100), nullable=True)
    latitude: Mapped[float | None] = mapped_column(Double, nullable=True)
    longitude: Mapped[float | None] = mapped_column(Double, nullable=True)
    category: Mapped[str | None] = mapped_column(String(100), nullable=True, index=True)
    citizen_id: Mapped[UUID | None] = mapped_column(PGUUID(as_uuid=True), nullable=True)
    status: Mapped[str] = mapped_column(String(20), nullable=False, default="pending", index=True)

    themes: Mapped[list["Theme"]] = relationship(
        "Theme", back_populates="submission", cascade="all, delete-orphan"
    )


class Theme(UUIDPrimaryKeyMixin, Base):
    """AI-extracted theme from a citizen submission."""

    __tablename__ = "themes"

    from datetime import datetime

    from sqlalchemy import DateTime, ForeignKey, func

    submission_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True),
        ForeignKey("submissions.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    theme_label: Mapped[str] = mapped_column(String(100), nullable=False, index=True)
    confidence: Mapped[float | None] = mapped_column(Double, nullable=True)
    extracted_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    submission: Mapped["Submission"] = relationship("Submission", back_populates="themes")
