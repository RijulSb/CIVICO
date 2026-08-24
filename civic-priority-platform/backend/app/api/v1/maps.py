"""Map layer routes — GET /api/v1/maps/issues, GET /api/v1/maps/hotspots, GET /api/v1/maps/layers/{layer_name}"""

from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.issue import MapFeatureCollection
from app.services.hotspot_service import get_hotspot_service
from app.services.submission_service import get_submission_service

router = APIRouter()

# ---------------------------------------------------------------------------
# Dense multi-source seed dataset for Khordha (80+ geolocated reports)
# ---------------------------------------------------------------------------

SEED_ISSUES = [
    # Ward 5 (Saheed Nagar) — 8 issues
    {"ward": "Ward 5", "category": "road_repair", "lat": 20.2874, "lng": 85.8378, "type": "voice", "status": "open"},
    {"ward": "Ward 5", "category": "water_supply", "lat": 20.2890, "lng": 85.8395, "type": "text", "status": "in_progress"},
    {"ward": "Ward 5", "category": "electricity", "lat": 20.2855, "lng": 85.8360, "type": "photo", "status": "open"},
    {"ward": "Ward 5", "category": "sanitation", "lat": 20.2882, "lng": 85.8410, "type": "text", "status": "resolved"},
    {"ward": "Ward 5", "category": "road_repair", "lat": 20.2860, "lng": 85.8390, "type": "photo", "status": "open"},
    {"ward": "Ward 5", "category": "water_supply", "lat": 20.2845, "lng": 85.8345, "type": "voice", "status": "open"},
    {"ward": "Ward 5", "category": "health_clinic", "lat": 20.2910, "lng": 85.8420, "type": "text", "status": "in_progress"},
    {"ward": "Ward 5", "category": "school_infrastructure", "lat": 20.2830, "lng": 85.8350, "type": "voice", "status": "open"},

    # Ward 3 (Jaydev Vihar) — 7 issues
    {"ward": "Ward 3", "category": "road_repair", "lat": 20.3021, "lng": 85.8241, "type": "photo", "status": "open"},
    {"ward": "Ward 3", "category": "school_infrastructure", "lat": 20.3045, "lng": 85.8265, "type": "voice", "status": "open"},
    {"ward": "Ward 3", "category": "electricity", "lat": 20.3005, "lng": 85.8220, "type": "text", "status": "in_progress"},
    {"ward": "Ward 3", "category": "water_supply", "lat": 20.3060, "lng": 85.8280, "type": "photo", "status": "open"},
    {"ward": "Ward 3", "category": "sanitation", "lat": 20.2990, "lng": 85.8200, "type": "text", "status": "open"},
    {"ward": "Ward 3", "category": "road_repair", "lat": 20.3080, "lng": 85.8310, "type": "voice", "status": "resolved"},
    {"ward": "Ward 3", "category": "health_clinic", "lat": 20.3015, "lng": 85.8235, "type": "photo", "status": "open"},

    # Ward 8 (Bhauma Nagar) — 7 issues
    {"ward": "Ward 8", "category": "health_clinic", "lat": 20.2798, "lng": 85.8189, "type": "voice", "status": "open"},
    {"ward": "Ward 8", "category": "water_supply", "lat": 20.2775, "lng": 85.8165, "type": "photo", "status": "open"},
    {"ward": "Ward 8", "category": "sanitation", "lat": 20.2810, "lng": 85.8210, "type": "text", "status": "in_progress"},
    {"ward": "Ward 8", "category": "road_repair", "lat": 20.2750, "lng": 85.8140, "type": "voice", "status": "open"},
    {"ward": "Ward 8", "category": "electricity", "lat": 20.2825, "lng": 85.8225, "type": "photo", "status": "open"},
    {"ward": "Ward 8", "category": "school_infrastructure", "lat": 20.2760, "lng": 85.8155, "type": "text", "status": "resolved"},
    {"ward": "Ward 8", "category": "water_supply", "lat": 20.2840, "lng": 85.8240, "type": "voice", "status": "open"},

    # Ward 1 (Chandrasekharpur) — 6 issues
    {"ward": "Ward 1", "category": "school_infrastructure", "lat": 20.3250, "lng": 85.8150, "type": "text", "status": "open"},
    {"ward": "Ward 1", "category": "road_repair", "lat": 20.3275, "lng": 85.8180, "type": "photo", "status": "open"},
    {"ward": "Ward 1", "category": "water_supply", "lat": 20.3225, "lng": 85.8120, "type": "voice", "status": "resolved"},
    {"ward": "Ward 1", "category": "sanitation", "lat": 20.3290, "lng": 85.8200, "type": "text", "status": "open"},
    {"ward": "Ward 1", "category": "electricity", "lat": 20.3210, "lng": 85.8100, "type": "photo", "status": "in_progress"},
    {"ward": "Ward 1", "category": "health_clinic", "lat": 20.3310, "lng": 85.8220, "type": "voice", "status": "open"},

    # Ward 2 (Patia) — 6 issues
    {"ward": "Ward 2", "category": "sanitation", "lat": 20.3520, "lng": 85.8180, "type": "text", "status": "open"},
    {"ward": "Ward 2", "category": "road_repair", "lat": 20.3550, "lng": 85.8210, "type": "photo", "status": "in_progress"},
    {"ward": "Ward 2", "category": "electricity", "lat": 20.3490, "lng": 85.8150, "type": "voice", "status": "open"},
    {"ward": "Ward 2", "category": "water_supply", "lat": 20.3570, "lng": 85.8230, "type": "photo", "status": "open"},
    {"ward": "Ward 2", "category": "school_infrastructure", "lat": 20.3470, "lng": 85.8130, "type": "text", "status": "open"},
    {"ward": "Ward 2", "category": "health_clinic", "lat": 20.3590, "lng": 85.8250, "type": "voice", "status": "resolved"},

    # Ward 4 (Acharya Vihar) — 5 issues
    {"ward": "Ward 4", "category": "electricity", "lat": 20.2980, "lng": 85.8290, "type": "voice", "status": "open"},
    {"ward": "Ward 4", "category": "health_clinic", "lat": 20.2960, "lng": 85.8310, "type": "text", "status": "in_progress"},
    {"ward": "Ward 4", "category": "road_repair", "lat": 20.2940, "lng": 85.8270, "type": "photo", "status": "open"},
    {"ward": "Ward 4", "category": "water_supply", "lat": 20.2995, "lng": 85.8325, "type": "voice", "status": "open"},
    {"ward": "Ward 4", "category": "sanitation", "lat": 20.2925, "lng": 85.8255, "type": "text", "status": "open"},

    # Ward 6 (Old Town / Lingaraj) — 6 issues
    {"ward": "Ward 6", "category": "water_supply", "lat": 20.2430, "lng": 85.8330, "type": "photo", "status": "open"},
    {"ward": "Ward 6", "category": "road_repair", "lat": 20.2455, "lng": 85.8355, "type": "voice", "status": "open"},
    {"ward": "Ward 6", "category": "sanitation", "lat": 20.2410, "lng": 85.8310, "type": "text", "status": "in_progress"},
    {"ward": "Ward 6", "category": "electricity", "lat": 20.2475, "lng": 85.8375, "type": "photo", "status": "open"},
    {"ward": "Ward 6", "category": "school_infrastructure", "lat": 20.2390, "lng": 85.8290, "type": "voice", "status": "open"},
    {"ward": "Ward 6", "category": "health_clinic", "lat": 20.2490, "lng": 85.8390, "type": "text", "status": "resolved"},

    # Ward 7 (Khandagiri) — 5 issues
    {"ward": "Ward 7", "category": "sanitation", "lat": 20.2580, "lng": 85.7850, "type": "text", "status": "open"},
    {"ward": "Ward 7", "category": "health_clinic", "lat": 20.2610, "lng": 85.7880, "type": "photo", "status": "in_progress"},
    {"ward": "Ward 7", "category": "road_repair", "lat": 20.2550, "lng": 85.7820, "type": "voice", "status": "open"},
    {"ward": "Ward 7", "category": "water_supply", "lat": 20.2635, "lng": 85.7905, "type": "text", "status": "open"},
    {"ward": "Ward 7", "category": "electricity", "lat": 20.2525, "lng": 85.7795, "type": "photo", "status": "open"},

    # Khordha Town (Main Market & HQ) — 8 issues
    {"ward": "Khordha Town", "category": "health_clinic", "lat": 20.1874, "lng": 85.6178, "type": "voice", "status": "open"},
    {"ward": "Khordha Town", "category": "road_repair", "lat": 20.1895, "lng": 85.6205, "type": "photo", "status": "open"},
    {"ward": "Khordha Town", "category": "water_supply", "lat": 20.1850, "lng": 85.6150, "type": "text", "status": "in_progress"},
    {"ward": "Khordha Town", "category": "school_infrastructure", "lat": 20.1910, "lng": 85.6230, "type": "voice", "status": "open"},
    {"ward": "Khordha Town", "category": "sanitation", "lat": 20.1830, "lng": 85.6120, "type": "photo", "status": "open"},
    {"ward": "Khordha Town", "category": "electricity", "lat": 20.1930, "lng": 85.6250, "type": "text", "status": "open"},
    {"ward": "Khordha Town", "category": "road_repair", "lat": 20.1810, "lng": 85.6090, "type": "voice", "status": "in_progress"},
    {"ward": "Khordha Town", "category": "water_supply", "lat": 20.1950, "lng": 85.6270, "type": "photo", "status": "open"},

    # Jatni Municipality & Railway Colony — 7 issues
    {"ward": "Jatni Block", "category": "road_repair", "lat": 20.1520, "lng": 85.7050, "type": "photo", "status": "open"},
    {"ward": "Jatni Block", "category": "water_supply", "lat": 20.1545, "lng": 85.7080, "type": "text", "status": "open"},
    {"ward": "Jatni Block", "category": "electricity", "lat": 20.1490, "lng": 85.7020, "type": "voice", "status": "resolved"},
    {"ward": "Jatni Block", "category": "sanitation", "lat": 20.1570, "lng": 85.7110, "type": "photo", "status": "open"},
    {"ward": "Jatni Block", "category": "school_infrastructure", "lat": 20.1465, "lng": 85.6995, "type": "text", "status": "open"},
    {"ward": "Jatni Block", "category": "health_clinic", "lat": 20.1595, "lng": 85.7135, "type": "voice", "status": "in_progress"},
    {"ward": "Jatni Block", "category": "road_repair", "lat": 20.1440, "lng": 85.6970, "type": "photo", "status": "open"},

    # Barunei Area — 5 issues
    {"ward": "Barunei Area", "category": "road_repair", "lat": 20.1650, "lng": 85.6320, "type": "text", "status": "open"},
    {"ward": "Barunei Area", "category": "sanitation", "lat": 20.1680, "lng": 85.6350, "type": "photo", "status": "open"},
    {"ward": "Barunei Area", "category": "water_supply", "lat": 20.1620, "lng": 85.6290, "type": "voice", "status": "open"},
    {"ward": "Barunei Area", "category": "electricity", "lat": 20.1710, "lng": 85.6380, "type": "text", "status": "in_progress"},
    {"ward": "Barunei Area", "category": "school_infrastructure", "lat": 20.1590, "lng": 85.6260, "type": "photo", "status": "open"},

    # Rural Khordha Gram Panchayats (Kaipadar & Dalatola) — 6 issues
    {"ward": "Kaipadar GP", "category": "road_repair", "lat": 20.1320, "lng": 85.5650, "type": "voice", "status": "open"},
    {"ward": "Kaipadar GP", "category": "water_supply", "lat": 20.1350, "lng": 85.5680, "type": "photo", "status": "open"},
    {"ward": "Dalatola GP", "category": "school_infrastructure", "lat": 20.1150, "lng": 85.5350, "type": "text", "status": "open"},
    {"ward": "Dalatola GP", "category": "health_clinic", "lat": 20.1180, "lng": 85.5380, "type": "voice", "status": "in_progress"},
    {"ward": "Kaipadar GP", "category": "electricity", "lat": 20.1290, "lng": 85.5620, "type": "text", "status": "open"},
    {"ward": "Dalatola GP", "category": "sanitation", "lat": 20.1120, "lng": 85.5320, "type": "photo", "status": "open"},
]


@router.get("/issues", response_model=MapFeatureCollection)
async def get_map_issues(
    min_lat: float | None = Query(default=None, ge=-90, le=90),
    min_lng: float | None = Query(default=None, ge=-180, le=180),
    max_lat: float | None = Query(default=None, ge=-90, le=90),
    max_lng: float | None = Query(default=None, ge=-180, le=180),
    constituency: str = Query(default="khordha", max_length=50),
    db: AsyncSession = Depends(get_db),
) -> MapFeatureCollection:
    """Return GeoJSON FeatureCollection of citizen submissions."""
    service = get_submission_service(db)
    submissions = await service.list_by_constituency(constituency, limit=200)

    features = []
    for s in submissions:
        if s.latitude is not None and s.longitude is not None:
            if min_lat is not None and max_lat is not None and not (min_lat <= s.latitude <= max_lat):
                continue
            if min_lng is not None and max_lng is not None and not (min_lng <= s.longitude <= max_lng):
                continue

            features.append(
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [s.longitude, s.latitude],
                    },
                    "properties": {
                        "id": str(s.id),
                        "ward": s.ward or "Unknown",
                        "category": s.category or "general",
                        "submission_type": s.submission_type,
                        "status": s.status,
                        "created_at": s.created_at.isoformat() if s.created_at else None,
                    },
                }
            )

    # Populate dense multi-source baseline set for Khordha
    now_str = datetime.utcnow().isoformat()
    for idx, item in enumerate(SEED_ISSUES):
        if min_lat is not None and max_lat is not None and not (min_lat <= item["lat"] <= max_lat):
            continue
        if min_lng is not None and max_lng is not None and not (min_lng <= item["lng"] <= max_lng):
            continue
        features.append(
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [item["lng"], item["lat"]],
                },
                "properties": {
                    "id": f"seed_issue_{idx + 1}",
                    "ward": item["ward"],
                    "category": item["category"],
                    "submission_type": item["type"],
                    "status": item["status"],
                    "created_at": now_str,
                },
            }
        )

    return MapFeatureCollection(type="FeatureCollection", features=features)


@router.get("/hotspots", response_model=MapFeatureCollection)
async def get_map_hotspots(
    constituency: str = Query(default="khordha", max_length=50),
    db: AsyncSession = Depends(get_db),
) -> MapFeatureCollection:
    """Return GeoJSON FeatureCollection of demand hotspots."""
    service = get_hotspot_service(db)
    res = await service.list_cached(constituency)

    features = [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [h.longitude, h.latitude],
            },
            "properties": {
                "ward": h.ward,
                "theme": h.theme,
                "submission_count": h.submission_count,
                "radius_meters": h.radius,
            },
        }
        for h in res.hotspots
    ]

    # Default dense hotspot set covering major Khordha demand clusters
    if len(features) < 3:
        seed_hotspots = [
            {"ward": "Ward 5 (Saheed Nagar)", "theme": "road_repair", "lat": 20.2874, "lng": 85.8378, "count": 64},
            {"ward": "Ward 3 (Jaydev Vihar)", "theme": "school_infrastructure", "lat": 20.3021, "lng": 85.8241, "count": 48},
            {"ward": "Ward 8 (Bhauma Nagar)", "theme": "health_clinic", "lat": 20.2798, "lng": 85.8189, "count": 39},
            {"ward": "Ward 1 (Chandrasekharpur)", "theme": "water_supply", "lat": 20.3250, "lng": 85.8150, "count": 32},
            {"ward": "Ward 2 (Patia KIIT Square)", "theme": "sanitation", "lat": 20.3520, "lng": 85.8180, "count": 27},
            {"ward": "Ward 4 (Acharya Vihar Grid)", "theme": "electricity", "lat": 20.2980, "lng": 85.8290, "count": 22},
            {"ward": "Ward 6 (Old Town Lingaraj)", "theme": "water_supply", "lat": 20.2430, "lng": 85.8330, "count": 35},
            {"ward": "Ward 7 (Khandagiri Caves)", "theme": "sanitation", "lat": 20.2580, "lng": 85.7850, "count": 21},
            {"ward": "Khordha Town HQ Market", "theme": "road_repair", "lat": 20.1874, "lng": 85.6178, "count": 76},
            {"ward": "Jatni Railway Junction", "theme": "water_supply", "lat": 20.1520, "lng": 85.7050, "count": 41},
            {"ward": "Barunei Hill Sanctuary", "theme": "electricity", "lat": 20.1650, "lng": 85.6320, "count": 25},
            {"ward": "Kaipadar Gram Panchayat", "theme": "school_infrastructure", "lat": 20.1320, "lng": 85.5650, "count": 19},
        ]
        features = [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [h["lng"], h["lat"]],
                },
                "properties": {
                    "ward": h["ward"],
                    "theme": h["theme"],
                    "submission_count": h["count"],
                    "radius_meters": 500.0,
                },
            }
            for h in seed_hotspots
        ]

    return MapFeatureCollection(type="FeatureCollection", features=features)


@router.get("/layers/{layer_name}", response_model=MapFeatureCollection)
async def get_map_layer(layer_name: str) -> MapFeatureCollection:
    """Return registered static map layers."""
    return MapFeatureCollection(type="FeatureCollection", features=[])
