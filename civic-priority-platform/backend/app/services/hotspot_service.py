"""Hotspot service — DBSCAN geo-clustering of citizen submissions.

Uses scikit-learn DBSCAN on lat/lon coordinates. Falls back to simple centroid
aggregation per ward when there are fewer than min_samples submissions.
"""

import logging
from collections import defaultdict

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.submission import Submission
from app.models.ward import Hotspot
from app.schemas.hotspots import HotspotItem, HotspotListResponse, HotspotRequest

logger = logging.getLogger(__name__)

# DBSCAN parameters (PRD §4.3)
DBSCAN_EPS_METERS = 500.0
DBSCAN_MIN_SAMPLES = 3  # lowered from 5 for MVP — smaller dataset
EARTH_RADIUS_KM = 6371.0


def _meters_to_radians(m: float) -> float:
    import math
    return m / (EARTH_RADIUS_KM * 1000) * (180 / math.pi) * (math.pi / 180)


def _run_dbscan(
    coords: list[tuple[float, float]],
    eps_meters: float,
    min_samples: int,
) -> list[int]:
    """Run DBSCAN and return cluster labels (-1 = noise)."""
    try:
        import numpy as np
        from sklearn.cluster import DBSCAN

        eps_rad = _meters_to_radians(eps_meters)
        X = np.radians(coords)
        labels = DBSCAN(
            eps=eps_rad, min_samples=min_samples, algorithm="ball_tree", metric="haversine"
        ).fit_predict(X)
        return labels.tolist()
    except ImportError:
        logger.warning("scikit-learn not available; falling back to single-cluster per ward.")
        return [0] * len(coords)


def _ward_fallback_clusters(
    submissions: list[Submission],
) -> list[HotspotItem]:
    """Aggregate submissions per ward as a simple fallback when DBSCAN can't cluster."""
    ward_groups: dict[str, list[Submission]] = defaultdict(list)
    for s in submissions:
        ward_groups[s.ward or "Unknown"].append(s)

    items: list[HotspotItem] = []
    for ward, group in ward_groups.items():
        lats = [s.latitude for s in group if s.latitude is not None]
        lons = [s.longitude for s in group if s.longitude is not None]
        if not lats:
            continue
        themes: dict[str, int] = defaultdict(int)
        for s in group:
            themes[s.category or "other"] += 1
        dominant = max(themes, key=lambda k: themes[k])
        items.append(
            HotspotItem(
                ward=ward,
                theme=dominant,
                submission_count=len(group),
                latitude=sum(lats) / len(lats),
                longitude=sum(lons) / len(lons),
                radius=DBSCAN_EPS_METERS,
            )
        )
    return items


class HotspotService:
    def __init__(self, db: AsyncSession) -> None:
        self._db = db

    async def generate_hotspots(self, request: HotspotRequest) -> HotspotListResponse:
        # 1. Load submissions
        query = select(Submission).where(
            Submission.constituency == request.constituency,
            Submission.latitude.is_not(None),
            Submission.longitude.is_not(None),
        )
        if request.theme:
            query = query.where(Submission.category == request.theme)

        result = await self._db.execute(query)
        submissions = list(result.scalars().all())

        if len(submissions) < DBSCAN_MIN_SAMPLES:
            items = _ward_fallback_clusters(submissions)
            await self._persist_hotspots(items, request.constituency)
            return HotspotListResponse(hotspots=items, constituency=request.constituency)

        # 2. Run DBSCAN
        coords = [(s.latitude, s.longitude) for s in submissions]
        labels = _run_dbscan(coords, DBSCAN_EPS_METERS, DBSCAN_MIN_SAMPLES)

        # 3. Aggregate clusters
        clusters: dict[int, list[Submission]] = defaultdict(list)
        for sub, label in zip(submissions, labels):
            if label == -1:
                continue  # noise point
            clusters[label].append(sub)

        if not clusters:
            items = _ward_fallback_clusters(submissions)
        else:
            items = self._build_hotspot_items(clusters)

        # 4. Persist
        await self._persist_hotspots(items, request.constituency)
        return HotspotListResponse(hotspots=items, constituency=request.constituency)

    def _build_hotspot_items(
        self, clusters: dict[int, list[Submission]]
    ) -> list[HotspotItem]:
        items: list[HotspotItem] = []
        for cluster_subs in clusters.values():
            lats = [s.latitude for s in cluster_subs if s.latitude]
            lons = [s.longitude for s in cluster_subs if s.longitude]
            themes: dict[str, int] = defaultdict(int)
            wards: dict[str, int] = defaultdict(int)
            for s in cluster_subs:
                themes[s.category or "other"] += 1
                wards[s.ward or "Unknown"] += 1
            dominant_theme = max(themes, key=lambda k: themes[k])
            dominant_ward = max(wards, key=lambda k: wards[k])
            items.append(
                HotspotItem(
                    ward=dominant_ward,
                    theme=dominant_theme,
                    submission_count=len(cluster_subs),
                    latitude=sum(lats) / len(lats),
                    longitude=sum(lons) / len(lons),
                    radius=DBSCAN_EPS_METERS,
                )
            )
        return items

    async def _persist_hotspots(
        self, items: list[HotspotItem], constituency: str
    ) -> None:
        """Upsert hotspots — simple delete-then-insert for MVP."""
        from sqlalchemy import delete

        await self._db.execute(
            delete(Hotspot).where(Hotspot.constituency == constituency)
        )
        for item in items:
            self._db.add(
                Hotspot(
                    constituency=constituency,
                    theme_label=item.theme,
                    ward=item.ward,
                    centroid_lat=item.latitude,
                    centroid_lon=item.longitude,
                    radius_meters=item.radius,
                    submission_count=item.submission_count,
                )
            )
        await self._db.commit()

    async def list_cached(self, constituency: str) -> HotspotListResponse:
        """Return the most-recently stored hotspots from DB."""
        result = await self._db.execute(
            select(Hotspot).where(Hotspot.constituency == constituency)
        )
        rows = result.scalars().all()
        items = [
            HotspotItem(
                ward=h.ward or "Unknown",
                theme=h.theme_label,
                submission_count=h.submission_count,
                latitude=h.centroid_lat,
                longitude=h.centroid_lon,
                radius=h.radius_meters,
            )
            for h in rows
        ]
        return HotspotListResponse(hotspots=items, constituency=constituency)


def get_hotspot_service(db: AsyncSession) -> HotspotService:
    return HotspotService(db)
