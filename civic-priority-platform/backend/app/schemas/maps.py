from uuid import UUID

from pydantic import Field, model_validator

from app.schemas.common import APIModel


class MapPoint(APIModel):
    id: UUID
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)
    category: str | None = None
    priority_score: float | None = Field(default=None, ge=0)


class HotspotResponse(APIModel):
    id: UUID
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)
    radius_meters: float = Field(gt=0)
    issue_count: int = Field(ge=0)
    dominant_category: str | None = None
    priority_score: float | None = Field(default=None, ge=0)


class MapQuery(APIModel):
    min_lat: float = Field(ge=-90, le=90)
    min_lon: float = Field(ge=-180, le=180)
    max_lat: float = Field(ge=-90, le=90)
    max_lon: float = Field(ge=-180, le=180)
    category: str | None = None

    @model_validator(mode="after")
    def validate_bounds(self) -> "MapQuery":
        if self.min_lat > self.max_lat:
            raise ValueError("min_lat must be less than or equal to max_lat.")
        if self.min_lon > self.max_lon:
            raise ValueError("min_lon must be less than or equal to max_lon.")
        return self


class MapFeatureResponse(APIModel):
    type: str = "Feature"
    geometry: dict
    properties: dict


class MapFeatureCollectionResponse(APIModel):
    type: str = "FeatureCollection"
    features: list[MapFeatureResponse]
