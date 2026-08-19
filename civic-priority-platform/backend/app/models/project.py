from uuid import UUID

from sqlalchemy import ForeignKey, String, Text
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class Project(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "projects"

    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    constituency_id: Mapped[UUID | None] = mapped_column(PGUUID(as_uuid=True), nullable=True)
    status: Mapped[str] = mapped_column(String(30), nullable=False, default="active", index=True)

    issues = relationship("Issue", back_populates="project", lazy="selectin")
    analyses = relationship("Analysis", back_populates="project", lazy="selectin")
    priorities = relationship("Priority", back_populates="project", lazy="selectin")
    portfolios = relationship("Portfolio", back_populates="project", lazy="selectin")
    data_sources = relationship("DataSource", back_populates="project", lazy="selectin")
