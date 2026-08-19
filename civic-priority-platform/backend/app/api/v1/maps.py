from fastapi import APIRouter, HTTPException, Query, status

from app.schemas.issue import MapFeatureCollection

router = APIRouter()


@router.get("/issues", response_model=MapFeatureCollection)
async def get_map_issues(
    min_lat: float | None = Query(default=None, ge=-90, le=90),
    min_lng: float | None = Query(default=None, ge=-180, le=180),
    max_lat: float | None = Query(default=None, ge=-90, le=90),
    max_lng: float | None = Query(default=None, ge=-180, le=180),
) -> MapFeatureCollection:
    values = (min_lat, min_lng, max_lat, max_lng)
    if any(value is not None for value in values) and not all(value is not None for value in values):
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="All bounding-box parameters are required when filtering by bounds.",
        )
    if min_lat is not None and max_lat is not None and min_lat > max_lat:
        raise HTTPException(status_code=422, detail="min_lat must be less than or equal to max_lat.")
    if min_lng is not None and max_lng is not None and min_lng > max_lng:
        raise HTTPException(status_code=422, detail="min_lng must be less than or equal to max_lng.")

    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Map issue repository is not connected.",
    )


@router.get("/hotspots", response_model=MapFeatureCollection)
async def get_map_hotspots() -> MapFeatureCollection:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Hotspot analytics service is not connected.",
    )


@router.get("/layers/{layer_name}", response_model=MapFeatureCollection)
async def get_map_layer(layer_name: str) -> MapFeatureCollection:
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail=f"Map layer '{layer_name}' is not registered.",
    )
