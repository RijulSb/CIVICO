"""Hotspot routes — POST /api/v1/hotspots, GET /api/v1/hotspots"""

from fastapi import APIRouter, HTTPException, Depends, Query, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import verify_api_key
from app.db.session import get_db
from app.schemas.hotspots import HotspotListResponse, HotspotRequest
from app.services.hotspot_service import HotspotService, get_hotspot_service
# Import shared seed data from dashboard module
from app.api.v1.dashboard import HOTSPOTS, CREATED_PROJECTS

router = APIRouter()


@router.post("", response_model=HotspotListResponse, status_code=status.HTTP_200_OK)
async def generate_hotspots(
    payload: HotspotRequest,
    db: AsyncSession = Depends(get_db),
    _api_key: str = Depends(verify_api_key),
) -> HotspotListResponse:
    """Run DBSCAN clustering on submissions and generate demand hotspots."""
    service = get_hotspot_service(db)
    return await service.generate_hotspots(payload)



@router.get("", response_model=HotspotListResponse)
async def list_hotspots(
    constituency: str = Query(default="khordha", max_length=50),
    db: AsyncSession = Depends(get_db),
) -> HotspotListResponse:
    """Return the most-recently computed hotspots for a constituency."""
    service = get_hotspot_service(db)
    return await service.list_cached(constituency)


@router.get("/{hotspot_id}")
async def get_hotspot_detail(hotspot_id: str) -> dict:
    """Return full detail for a single hotspot: evidence, infrastructure context, suggested project."""
    match = next((h for h in HOTSPOTS if h["id"] == hotspot_id), None)
    if not match:
        raise HTTPException(status_code=404, detail=f"Hotspot '{hotspot_id}' not found.")
    return match


@router.post("/{hotspot_id}/create-project", status_code=201)
async def create_project_from_hotspot(hotspot_id: str) -> dict:
    """Create a candidate project from a hotspot and return a redirect to the Priorities page."""
    hotspot = next((h for h in HOTSPOTS if h["id"] == hotspot_id), None)
    if not hotspot:
        raise HTTPException(status_code=404, detail=f"Hotspot '{hotspot_id}' not found.")

    project_id = f"project_{hotspot_id}_{len(CREATED_PROJECTS) + 1:03d}"
    CREATED_PROJECTS[project_id] = {
        "projectId": project_id,
        "hotspotId": hotspot_id,
        "title": hotspot["suggestedProject"]["title"],
        "estimatedCost": hotspot["suggestedProject"]["estimatedCost"],
        "estimatedMonths": hotspot["suggestedProject"]["estimatedMonths"],
        "ward": hotspot["ward"],
        "theme": hotspot["theme"],
        "status": "candidate_created",
    }
    return {
        "projectId": project_id,
        "status": "candidate_created",
        "redirectUrl": f"/priorities?projectId={project_id}",
    }

