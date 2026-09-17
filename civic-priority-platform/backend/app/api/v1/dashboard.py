"""Dashboard route — GET /api/v1/dashboard?constituency=khordha&period=30d&theme=all&ward=all"""

from datetime import datetime, timezone
from typing import Any

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.services.analytics_service import get_analytics_service

router = APIRouter()

# ---------------------------------------------------------------------------
# Multi-constituency seed data
# ---------------------------------------------------------------------------

CONSTITUENCY_DATA: dict[str, dict] = {
    "khordha": {
        "label": "Khordha",
        "state": "Odisha",
        "languageBreakdown": {"odia": 42, "hindi": 26, "english": 32},
        "priorityPulse": [
            {"theme": "road_repair", "label": "Road Repair", "submissionCount": 1248, "affectedWards": 8, "affectedPopulation": 42300, "trendPercent": 31, "signalScore": 91.4, "priority": "high", "urgency": "high", "infraGap": "Main arterial roads in poor condition; school buses unable to pass post-rainfall."},
            {"theme": "water_supply", "label": "Water Supply", "submissionCount": 864, "affectedWards": 5, "affectedPopulation": 25800, "trendPercent": 18, "signalScore": 82.7, "priority": "high", "urgency": "high", "infraGap": "Irregular piped water; tanker dependency in 3 wards."},
            {"theme": "school_infrastructure", "label": "School Infrastructure", "submissionCount": 621, "affectedWards": 4, "affectedPopulation": 12900, "trendPercent": 0, "signalScore": 74.1, "priority": "medium", "urgency": "medium", "infraGap": "Overcrowded classrooms; 3 schools missing functional toilets."},
            {"theme": "health_access", "label": "Health Access", "submissionCount": 432, "affectedWards": 4, "affectedPopulation": 19200, "trendPercent": 9, "signalScore": 68.3, "priority": "medium", "urgency": "medium", "infraGap": "Nearest PHC >5 km for 4 wards; no ambulance coverage."},
            {"theme": "street_lighting", "label": "Street Lighting", "submissionCount": 251, "affectedWards": 3, "affectedPopulation": 8400, "trendPercent": 5, "signalScore": 52.8, "priority": "emerging", "urgency": "low", "infraGap": "60% of ward lanes unlit after 8 PM; women safety concern reported."},
        ],
        "hotspots": [
            {"id": "hotspot_ward5_road", "ward": "Ward 5", "block": "Khordha Block", "theme": "road_repair", "latitude": 20.2874, "longitude": 85.8378, "intensity": "high", "submissionCount": 126, "affectedPopulation": 15000, "evidenceCounts": {"text": 66, "voice": 42, "photo": 18}, "candidateProjectId": None, "infrastructureContext": {"roadCondition": "poor", "dailyCommuters": 6000, "nearestSchoolDistanceKm": 5.2}, "suggestedProject": {"title": "Repair 4.8 km connecting road in Ward 5", "estimatedCost": 80000000, "estimatedMonths": 6}, "representativeEvidence": [{"type": "voice", "language": "odia", "translatedText": "The road becomes unusable after rainfall; school buses cannot pass."}, {"type": "text", "language": "hindi", "translatedText": "Daily commute has become unsafe due to potholes and broken drainage."}]},
            {"id": "hotspot_ward8_water", "ward": "Ward 8", "block": "Khordha Block", "theme": "water_supply", "latitude": 20.2798, "longitude": 85.8189, "intensity": "high", "submissionCount": 103, "affectedPopulation": 12400, "evidenceCounts": {"text": 55, "voice": 30, "photo": 18}, "candidateProjectId": None, "infrastructureContext": {"pipedWaterCoverage": "38%", "tankerDependency": True, "dailyShortfallLitres": 18000}, "suggestedProject": {"title": "Extend piped water network to Ward 8 — 3.2 km pipeline", "estimatedCost": 60000000, "estimatedMonths": 7}, "representativeEvidence": [{"type": "voice", "language": "odia", "translatedText": "We wait 2 hours every morning for the tanker. Children are late to school."}]},
            {"id": "hotspot_ward3_school", "ward": "Ward 3", "block": "Bhubaneswar Block", "theme": "school_infrastructure", "latitude": 20.3021, "longitude": 85.8241, "intensity": "medium", "submissionCount": 84, "affectedPopulation": 9100, "evidenceCounts": {"text": 40, "voice": 28, "photo": 16}, "candidateProjectId": None, "infrastructureContext": {"schoolCapacityGap": "142 students above capacity", "toiletFunctional": False, "classroomShortfall": 4}, "suggestedProject": {"title": "Construct 4 classrooms and sanitation block in Ward 3", "estimatedCost": 45000000, "estimatedMonths": 8}, "representativeEvidence": [{"type": "voice", "language": "odia", "translatedText": "Children sit on the floor during monsoon because the roof leaks."}]},
            {"id": "hotspot_ward1_road", "ward": "Ward 1", "block": "Chandrasekharpur Block", "theme": "road_repair", "latitude": 20.3250, "longitude": 85.8150, "intensity": "medium", "submissionCount": 67, "affectedPopulation": 8200, "evidenceCounts": {"text": 30, "voice": 22, "photo": 15}, "candidateProjectId": None, "infrastructureContext": {"roadCondition": "fair", "dailyCommuters": 3200, "nearestMarketDistanceKm": 2.1}, "suggestedProject": {"title": "Resurface 2.3 km internal roads in Ward 1", "estimatedCost": 35000000, "estimatedMonths": 4}, "representativeEvidence": [{"type": "text", "language": "odia", "translatedText": "Roads flood every monsoon. Residents have requested repair for 3 years."}]},
            {"id": "hotspot_ward2_health", "ward": "Ward 2", "block": "Patia Block", "theme": "health_access", "latitude": 20.3520, "longitude": 85.8180, "intensity": "medium", "submissionCount": 58, "affectedPopulation": 7400, "evidenceCounts": {"text": 28, "voice": 20, "photo": 10}, "candidateProjectId": None, "infrastructureContext": {"nearestPHCDistanceKm": 6.3, "ambulanceCoverage": False, "maternalHealthIncidents": 12}, "suggestedProject": {"title": "Establish sub-health centre in Ward 2", "estimatedCost": 25000000, "estimatedMonths": 5}, "representativeEvidence": [{"type": "voice", "language": "odia", "translatedText": "The nearest doctor is 6 km away. Pregnant women suffer during night emergencies."}]},
        ],
        "recentSubmissions": [],
    },
    "puri": {
        "label": "Puri",
        "state": "Odisha",
        "languageBreakdown": {"odia": 58, "hindi": 22, "english": 20},
        "priorityPulse": [
            {"theme": "water_supply", "label": "Drinking Water", "submissionCount": 943, "affectedWards": 7, "affectedPopulation": 38100, "trendPercent": 24, "signalScore": 88.2, "priority": "high", "urgency": "high", "infraGap": "Coastal salinity contaminating groundwater; 5 wards rely on tankers."},
            {"theme": "road_repair", "label": "Road Repair", "submissionCount": 712, "affectedWards": 6, "affectedPopulation": 29500, "trendPercent": 14, "signalScore": 79.5, "priority": "high", "urgency": "high", "infraGap": "Heritage town roads deteriorated; pilgrim access routes in poor condition."},
            {"theme": "health_access", "label": "Health Access", "submissionCount": 514, "affectedWards": 5, "affectedPopulation": 22800, "trendPercent": 11, "signalScore": 71.3, "priority": "medium", "urgency": "medium", "infraGap": "Seasonal overcrowding of district hospital during pilgrimage season."},
            {"theme": "school_infrastructure", "label": "School Infrastructure", "submissionCount": 389, "affectedWards": 4, "affectedPopulation": 11200, "trendPercent": 0, "signalScore": 62.8, "priority": "medium", "urgency": "medium", "infraGap": "Cyclone-damaged school buildings unreplaced in 2 coastal wards."},
            {"theme": "street_lighting", "label": "Street Lighting", "submissionCount": 198, "affectedWards": 3, "affectedPopulation": 7600, "trendPercent": 3, "signalScore": 48.1, "priority": "emerging", "urgency": "low", "infraGap": "Fishing village lanes unlit; safety concerns raised."},
        ],
        "hotspots": [
            {"id": "puri_hotspot_ward4_water", "ward": "Ward 4", "block": "Puri Block", "theme": "water_supply", "latitude": 19.8120, "longitude": 85.8314, "intensity": "high", "submissionCount": 118, "affectedPopulation": 14200, "evidenceCounts": {"text": 62, "voice": 38, "photo": 18}, "candidateProjectId": None, "infrastructureContext": {"salinityLevel": "high", "tankerDependency": True, "boreholeCount": 2}, "suggestedProject": {"title": "Install RO water plant and pipeline in Ward 4", "estimatedCost": 55000000, "estimatedMonths": 5}, "representativeEvidence": [{"type": "voice", "language": "odia", "translatedText": "The well water is salty and undrinkable. We buy water every day."}]},
            {"id": "puri_hotspot_ward7_road", "ward": "Ward 7", "block": "Puri Block", "theme": "road_repair", "latitude": 19.8180, "longitude": 85.8260, "intensity": "high", "submissionCount": 89, "affectedPopulation": 10500, "evidenceCounts": {"text": 44, "voice": 29, "photo": 16}, "candidateProjectId": None, "infrastructureContext": {"roadCondition": "poor", "pilgrimTrafficDaily": 12000, "lastRepairYear": 2019}, "suggestedProject": {"title": "Repair 3.1 km pilgrim access road in Ward 7", "estimatedCost": 48000000, "estimatedMonths": 4}, "representativeEvidence": [{"type": "text", "language": "odia", "translatedText": "Pilgrims and residents both suffer on these broken roads."}]},
            {"id": "puri_hotspot_ward2_health", "ward": "Ward 2", "block": "Puri Block", "theme": "health_access", "latitude": 19.8060, "longitude": 85.8350, "intensity": "medium", "submissionCount": 74, "affectedPopulation": 9800, "evidenceCounts": {"text": 38, "voice": 25, "photo": 11}, "candidateProjectId": None, "infrastructureContext": {"nearestPHCDistanceKm": 4.8, "ambulanceCoverage": False, "seasonalCongestion": True}, "suggestedProject": {"title": "Open satellite health clinic in Ward 2", "estimatedCost": 22000000, "estimatedMonths": 4}, "representativeEvidence": [{"type": "voice", "language": "odia", "translatedText": "During festivals, even emergencies cannot reach the hospital quickly."}]},
        ],
        "recentSubmissions": [],
    },
    "cuttack": {
        "label": "Cuttack",
        "state": "Odisha",
        "languageBreakdown": {"odia": 51, "hindi": 31, "english": 18},
        "priorityPulse": [
            {"theme": "road_repair", "label": "Road Repair", "submissionCount": 1105, "affectedWards": 9, "affectedPopulation": 51200, "trendPercent": 21, "signalScore": 89.7, "priority": "high", "urgency": "high", "infraGap": "Flood-damaged roads unrepaired; arterial bridge overloaded."},
            {"theme": "health_access", "label": "Health Access", "submissionCount": 768, "affectedWards": 6, "affectedPopulation": 33400, "trendPercent": 16, "signalScore": 81.2, "priority": "high", "urgency": "high", "infraGap": "SCB Medical College overloaded; no satellite health centres in 6 wards."},
            {"theme": "water_supply", "label": "Water Supply", "submissionCount": 542, "affectedWards": 5, "affectedPopulation": 24600, "trendPercent": 8, "signalScore": 70.4, "priority": "medium", "urgency": "medium", "infraGap": "Mahanadi flooding contaminates water supply annually."},
            {"theme": "school_infrastructure", "label": "School Infrastructure", "submissionCount": 398, "affectedWards": 4, "affectedPopulation": 14100, "trendPercent": 0, "signalScore": 63.5, "priority": "medium", "urgency": "medium", "infraGap": "Old municipal school buildings with leaking roofs and no labs."},
            {"theme": "street_lighting", "label": "Street Lighting", "submissionCount": 287, "affectedWards": 4, "affectedPopulation": 9800, "trendPercent": 7, "signalScore": 55.9, "priority": "emerging", "urgency": "low", "infraGap": "Old town lanes and silver market area dark after 9 PM."},
        ],
        "hotspots": [
            {"id": "cuttack_hotspot_ward6_road", "ward": "Ward 6", "block": "Cuttack Block", "theme": "road_repair", "latitude": 20.4625, "longitude": 85.8830, "intensity": "high", "submissionCount": 142, "affectedPopulation": 18600, "evidenceCounts": {"text": 72, "voice": 48, "photo": 22}, "candidateProjectId": None, "infrastructureContext": {"roadCondition": "poor", "floodingFrequency": "annual", "dailyCommuters": 8500}, "suggestedProject": {"title": "Rebuild 5.2 km flood-prone road with elevated surface in Ward 6", "estimatedCost": 95000000, "estimatedMonths": 9}, "representativeEvidence": [{"type": "voice", "language": "odia", "translatedText": "Every monsoon the road disappears. We are cut off for weeks."}]},
            {"id": "cuttack_hotspot_ward3_health", "ward": "Ward 3", "block": "Cuttack Block", "theme": "health_access", "latitude": 20.4710, "longitude": 85.8780, "intensity": "high", "submissionCount": 96, "affectedPopulation": 13200, "evidenceCounts": {"text": 48, "voice": 32, "photo": 16}, "candidateProjectId": None, "infrastructureContext": {"nearestPHCDistanceKm": 7.1, "ambulanceCoverage": False, "maternalDeathRate": "high"}, "suggestedProject": {"title": "Establish maternity and primary care unit in Ward 3", "estimatedCost": 38000000, "estimatedMonths": 6}, "representativeEvidence": [{"type": "voice", "language": "hindi", "translatedText": "There is no doctor close by. Women in labour are transported in autorickshaws."}]},
            {"id": "cuttack_hotspot_ward9_water", "ward": "Ward 9", "block": "Cuttack Block", "theme": "water_supply", "latitude": 20.4560, "longitude": 85.8890, "intensity": "medium", "submissionCount": 78, "affectedPopulation": 10400, "evidenceCounts": {"text": 40, "voice": 26, "photo": 12}, "candidateProjectId": None, "infrastructureContext": {"pipedWaterCoverage": "44%", "floodContamination": True, "testingFrequency": "monthly"}, "suggestedProject": {"title": "Install water treatment and storage units in Ward 9", "estimatedCost": 42000000, "estimatedMonths": 5}, "representativeEvidence": [{"type": "text", "language": "odia", "translatedText": "After floods, the tap water smells bad and causes illness."}]},
        ],
        "recentSubmissions": [],
    },
    "bhubaneswar": {
        "label": "Bhubaneswar",
        "state": "Odisha",
        "languageBreakdown": {"odia": 38, "hindi": 29, "english": 33},
        "priorityPulse": [
            {"theme": "street_lighting", "label": "Street Lighting", "submissionCount": 876, "affectedWards": 7, "affectedPopulation": 44100, "trendPercent": 28, "signalScore": 84.3, "priority": "high", "urgency": "high", "infraGap": "IT corridor outskirts and new layouts without street lights; crime incidents rising."},
            {"theme": "road_repair", "label": "Road Repair", "submissionCount": 734, "affectedWards": 6, "affectedPopulation": 37200, "trendPercent": 12, "signalScore": 77.8, "priority": "high", "urgency": "high", "infraGap": "Rapid construction traffic damaged internal wards roads."},
            {"theme": "water_supply", "label": "Water Supply", "submissionCount": 498, "affectedWards": 5, "affectedPopulation": 21500, "trendPercent": 6, "signalScore": 68.9, "priority": "medium", "urgency": "medium", "infraGap": "New residential zones lack pipeline connection; rely on private tankers."},
            {"theme": "school_infrastructure", "label": "School Infrastructure", "submissionCount": 342, "affectedWards": 4, "affectedPopulation": 13800, "trendPercent": 3, "signalScore": 58.2, "priority": "medium", "urgency": "medium", "infraGap": "Rapid population growth has outpaced school capacity in 4 wards."},
            {"theme": "health_access", "label": "Health Access", "submissionCount": 229, "affectedWards": 3, "affectedPopulation": 9100, "trendPercent": 0, "signalScore": 47.6, "priority": "emerging", "urgency": "low", "infraGap": "Peripheral wards added after BMC expansion have no PHC assigned."},
        ],
        "hotspots": [
            {"id": "bbsr_hotspot_ward11_light", "ward": "Ward 11", "block": "Bhubaneswar North", "theme": "street_lighting", "latitude": 20.3200, "longitude": 85.8100, "intensity": "high", "submissionCount": 112, "affectedPopulation": 16400, "evidenceCounts": {"text": 58, "voice": 36, "photo": 18}, "candidateProjectId": None, "infrastructureContext": {"litLanePercent": "28%", "crimeIncidents": 14, "nearestPoliceStationKm": 4.2}, "suggestedProject": {"title": "Install 380 LED streetlights in Ward 11 IT corridor", "estimatedCost": 18000000, "estimatedMonths": 3}, "representativeEvidence": [{"type": "voice", "language": "english", "translatedText": "The road from the tech park to our colony has no lights. It is unsafe at night."}]},
            {"id": "bbsr_hotspot_ward5_road", "ward": "Ward 5", "block": "Bhubaneswar Central", "theme": "road_repair", "latitude": 20.2961, "longitude": 85.8245, "intensity": "high", "submissionCount": 94, "affectedPopulation": 12800, "evidenceCounts": {"text": 48, "voice": 31, "photo": 15}, "candidateProjectId": None, "infrastructureContext": {"roadCondition": "poor", "constructionDamage": True, "dailyCommuters": 7200}, "suggestedProject": {"title": "Rehabilitate 3.4 km construction-damaged road in Ward 5", "estimatedCost": 52000000, "estimatedMonths": 5}, "representativeEvidence": [{"type": "text", "language": "english", "translatedText": "Construction trucks have destroyed the road surface. Commute takes twice as long."}]},
            {"id": "bbsr_hotspot_ward8_water", "ward": "Ward 8", "block": "Bhubaneswar South", "theme": "water_supply", "latitude": 20.2720, "longitude": 85.8150, "intensity": "medium", "submissionCount": 68, "affectedPopulation": 8900, "evidenceCounts": {"text": 34, "voice": 22, "photo": 12}, "candidateProjectId": None, "infrastructureContext": {"pipelineConnected": False, "tankerCostPerDay": 350, "householdsAffected": 2200}, "suggestedProject": {"title": "Lay 2.1 km water distribution pipeline in Ward 8", "estimatedCost": 28000000, "estimatedMonths": 4}, "representativeEvidence": [{"type": "voice", "language": "hindi", "translatedText": "We pay Rs 350 daily for tanker water. Pipeline connection has been promised for 2 years."}]},
        ],
        "recentSubmissions": [],
    },
}

# Flat HOTSPOTS list for the hotspot detail/create-project endpoints (combines all)
HOTSPOTS = [h for cd in CONSTITUENCY_DATA.values() for h in cd["hotspots"]]

# In-memory created projects
CREATED_PROJECTS: dict[str, Any] = {}

# Available constituencies list (for the frontend selector)
CONSTITUENCIES = [
    {"id": "khordha",     "label": "Khordha",     "state": "Odisha"},
    {"id": "puri",        "label": "Puri",        "state": "Odisha"},
    {"id": "cuttack",     "label": "Cuttack",     "state": "Odisha"},
    {"id": "bhubaneswar", "label": "Bhubaneswar", "state": "Odisha"},
]


@router.get("/constituencies")
async def list_constituencies() -> list:
    """Return available constituencies for the location selector."""
    return CONSTITUENCIES


# Period scaling multipliers to reflect real-world window size
PERIOD_MULTIPLIERS = {
    "7d": 0.28,
    "30d": 1.0,
    "90d": 2.75,
}

PERIOD_TREND_OFFSETS = {
    "7d": 4,
    "30d": 0,
    "90d": -3,
}


@router.get("")
async def get_dashboard(
    constituency: str = Query(default="khordha"),
    period: str = Query(default="30d"),
    theme: str = Query(default="all"),
    ward: str = Query(default="all"),
    refresh: bool = Query(default=False),
    db: AsyncSession = Depends(get_db),
) -> dict:
    """Return live constituency analytics derived from persisted submissions."""
    return await get_analytics_service(db).build_dashboard(
        constituency=constituency,
        period=period,
        theme=theme,
        ward=ward,
        force_refresh=refresh,
    )

    c_key = constituency.lower().strip()
    cd = CONSTITUENCY_DATA.get(c_key, CONSTITUENCY_DATA["khordha"])

    period_mult = PERIOD_MULTIPLIERS.get(period, 1.0)
    trend_offset = PERIOD_TREND_OFFSETS.get(period, 0)

    # Scale priority pulse according to selected period
    pulse = []
    for p in cd["priorityPulse"]:
        if theme == "all" or p["theme"] == theme:
            scaled_count = max(int(p["submissionCount"] * period_mult), 12)
            scaled_trend = max(p["trendPercent"] + trend_offset, 0)
            pulse.append({
                **p,
                "submissionCount": scaled_count,
                "trendPercent": scaled_trend,
            })

    # Scale hotspots according to selected period
    hotspots = []
    for h in cd["hotspots"]:
        theme_match = (theme == "all" or h["theme"] == theme)
        ward_match = (ward == "all" or h["ward"].lower().replace(" ", "") == ward.lower().replace(" ", ""))
        if theme_match and ward_match:
            scaled_sub_count = max(int(h["submissionCount"] * period_mult), 5)
            text_c = max(int(h["evidenceCounts"]["text"] * period_mult), 2)
            voice_c = max(int(h["evidenceCounts"]["voice"] * period_mult), 1)
            photo_c = max(int(h["evidenceCounts"]["photo"] * period_mult), 1)
            hotspots.append({
                **h,
                "submissionCount": scaled_sub_count,
                "evidenceCounts": {"text": text_c, "voice": voice_c, "photo": photo_c},
            })

    total_submissions = sum(int(p["submissionCount"] * period_mult) for p in cd["priorityPulse"])
    recurring_themes = len([p for p in pulse if p["submissionCount"] > int(100 * period_mult)])
    active_hotspots = len(hotspots)
    candidate_projects = len(CREATED_PROJECTS) + 3

    return {
        "constituency": c_key,
        "constituencyLabel": cd["label"],
        "state": cd["state"],
        "period": period,
        "lastUpdatedAt": datetime.now(timezone.utc).isoformat(),
        "languageBreakdown": cd["languageBreakdown"],
        "summary": {
            "totalSubmissions": total_submissions,
            "recurringThemes": recurring_themes if recurring_themes > 0 else len(pulse),
            "activeHotspots": active_hotspots,
            "candidateProjects": candidate_projects,
        },
        "priorityPulse": pulse,
        "hotspots": hotspots,
        "recentSubmissions": cd["recentSubmissions"],
    }



