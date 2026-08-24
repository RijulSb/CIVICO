"""Hotspot schemas — matches PRD §3.2 / §4.3 API contract."""

from pydantic import Field

from app.schemas.common import APIModel


class HotspotRequest(APIModel):
    constituency: str = Field(default="khordha", max_length=50)
    theme: str | None = Field(default=None, max_length=100)


class HotspotItem(APIModel):
    ward: str
    theme: str
    submission_count: int = Field(ge=0)
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)
    radius: float = Field(ge=0, description="Hotspot radius in metres")


class HotspotListResponse(APIModel):
    hotspots: list[HotspotItem]
    constituency: str
