"""Multi-tier resilient address geocoding proxy & offline landmark index for CIVICO."""

from __future__ import annotations

import os
import re
import time
from typing import Any, Literal

import httpx
from fastapi import APIRouter, Query
from pydantic import BaseModel, Field

from app.core.config import settings
from app.core.security import sanitize_text_input

router = APIRouter(prefix="/geocoding", tags=["geocoding"])

GEOCODER_BASE_URL = "https://photon.komoot.io"
NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org"
OPENCAGE_BASE_URL = "https://api.opencagedata.com/geocode/v1/json"
MAPBOX_BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places"
GEOCODER_TIMEOUT_SECONDS = 4.0
CACHE_TTL_SECONDS = 600.0
MAX_CACHE_ENTRIES = 256
_cache: dict[str, tuple[float, dict[str, Any]]] = {}


async def _geocode_mapbox(query: str, token: str, limit: int) -> list[AddressSuggestion]:
    params = {
        "access_token": token,
        "country": "IN",
        "proximity": "85.8245,20.2961",
        "limit": str(limit),
    }
    encoded_q = httpx.QueryParams(params)
    url = f"{MAPBOX_BASE_URL}/{query}.json"

    async with httpx.AsyncClient(timeout=GEOCODER_TIMEOUT_SECONDS) as client:
        response = await client.get(url, params=params)
        response.raise_for_status()
        payload = response.json()

    results: list[AddressSuggestion] = []
    for feature in payload.get("features", []):
        coords = feature.get("geometry", {}).get("coordinates", [])
        if len(coords) >= 2:
            results.append(
                AddressSuggestion(
                    id=f"mapbox-{feature.get('id', coords[0])}",
                    display_name=feature.get("place_name", query),
                    latitude=float(coords[1]),
                    longitude=float(coords[0]),
                    precision="address" if "address" in feature.get("place_type", []) else "place",
                    source="Mapbox Places API",
                )
            )
    return results


async def _geocode_opencage(query: str, api_key: str, limit: int) -> list[AddressSuggestion]:
    params = {
        "q": f"{query}, Odisha, India",
        "key": api_key,
        "countrycode": "in",
        "bounds": "84.5,19.5,86.5,21.5",
        "limit": str(limit),
        "no_annotations": "1",
    }

    async with httpx.AsyncClient(timeout=GEOCODER_TIMEOUT_SECONDS) as client:
        response = await client.get(OPENCAGE_BASE_URL, params=params)
        response.raise_for_status()
        payload = response.json()

    results: list[AddressSuggestion] = []
    for result in payload.get("results", []):
        geometry = result.get("geometry", {})
        lat = geometry.get("lat")
        lng = geometry.get("lng")
        if lat is not None and lng is not None:
            results.append(
                AddressSuggestion(
                    id=f"opencage-{result.get('annotations', {}).get('geohash', lat)}",
                    display_name=result.get("formatted", query),
                    latitude=float(lat),
                    longitude=float(lng),
                    precision="place",
                    source="OpenCage Geocoding API",
                )
            )
    return results


# ---------------------------------------------------------------------------
# Local Offline Landmark Index for Constituency Regions (Zero-network fallback)
# ---------------------------------------------------------------------------

LOCAL_LANDMARKS = [
    {"name": "Saheed Nagar, Ward 5, Bhubaneswar", "lat": 20.2874, "lng": 85.8378, "precision": "place", "constituency": "khordha"},
    {"name": "Jaydev Vihar Square, Ward 3, Bhubaneswar", "lat": 20.3021, "lng": 85.8241, "precision": "street", "constituency": "khordha"},
    {"name": "Patia Station Road, Ward 2, Bhubaneswar", "lat": 20.3520, "lng": 85.8180, "precision": "street", "constituency": "khordha"},
    {"name": "Chandrasekharpur Sector 1, Ward 1, Bhubaneswar", "lat": 20.3250, "lng": 85.8150, "precision": "area", "constituency": "khordha"},
    {"name": "Bhauma Nagar, Ward 8, Khordha", "lat": 20.2798, "lng": 85.8189, "precision": "area", "constituency": "khordha"},
    {"name": "Acharya Vihar Square, Ward 4, Bhubaneswar", "lat": 20.2961, "lng": 85.8245, "precision": "street", "constituency": "bhubaneswar"},
    {"name": "Infocity IT Corridor, Ward 11, Bhubaneswar", "lat": 20.3200, "lng": 85.8100, "precision": "area", "constituency": "bhubaneswar"},
    {"name": "Grand Road (Bada Danda), Ward 4, Puri", "lat": 19.8120, "lng": 85.8314, "precision": "street", "constituency": "puri"},
    {"name": "VIP Road Pilgrim Sector, Ward 7, Puri", "lat": 19.8180, "lng": 85.8260, "precision": "street", "constituency": "puri"},
    {"name": "Swargadwar Beach Area, Ward 2, Puri", "lat": 19.8060, "lng": 85.8350, "precision": "place", "constituency": "puri"},
    {"name": "Badambadi Bus Terminal, Ward 6, Cuttack", "lat": 20.4625, "lng": 85.8830, "precision": "place", "constituency": "cuttack"},
    {"name": "SCB Medical College Square, Ward 3, Cuttack", "lat": 20.4710, "lng": 85.8780, "precision": "place", "constituency": "cuttack"},
    {"name": "Mahanadi Ring Road, Ward 9, Cuttack", "lat": 20.4560, "lng": 85.8890, "precision": "street", "constituency": "cuttack"},
]


class AddressSuggestion(BaseModel):
    id: str
    display_name: str
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)
    precision: Literal["address", "street", "place", "area"]
    source: str = "OpenStreetMap via Photon"
    attribution: str = "OpenStreetMap contributors"


class AddressSearchResponse(BaseModel):
    query: str
    results: list[AddressSuggestion]
    source: str = "Multi-tier Geocoder (Photon / Nominatim / Local Index)"
    attribution: str = "OpenStreetMap contributors & Local Landmark Engine"


def _display_name(properties: dict[str, Any]) -> str:
    parts = [
        properties.get("name"),
        properties.get("housenumber"),
        properties.get("street"),
        properties.get("district"),
        properties.get("city"),
        properties.get("state"),
        properties.get("postcode"),
        properties.get("country"),
    ]
    return ", ".join(dict.fromkeys(str(part).strip() for part in parts if part))


def _precision(properties: dict[str, Any]) -> str:
    value = str(properties.get("osm_value") or properties.get("type") or "").lower()
    if value in {"house", "building", "address", "residential"}:
        return "address"
    if value in {"street", "road", "primary", "secondary", "tertiary"}:
        return "street"
    if value in {"city", "town", "village", "suburb", "neighbourhood"}:
        return "place"
    return "area"


def _cache_key(query: str, language: str) -> str:
    return f"{query.strip().casefold()}::{language}"


def _cache_get(key: str) -> dict[str, Any] | None:
    item = _cache.get(key)
    if item is None:
        return None
    created_at, payload = item
    if time.monotonic() - created_at > CACHE_TTL_SECONDS:
        _cache.pop(key, None)
        return None
    return payload


def _cache_put(key: str, payload: dict[str, Any]) -> None:
    if len(_cache) >= MAX_CACHE_ENTRIES:
        oldest_key = min(_cache, key=lambda entry: _cache[entry][0])
        _cache.pop(oldest_key, None)
    _cache[key] = (time.monotonic(), payload)


async def _geocode_photon(query: str, language: str, limit: int) -> list[AddressSuggestion]:
    params = {
        "q": f"{query}, Odisha, India",
        "lat": "20.2961",
        "lon": "85.8245",
        "limit": str(limit),
        "lang": {"odia": "or", "hindi": "hi", "english": "en"}.get(language, "en"),
    }
    headers = {"User-Agent": "CIVICO-Citizen-Intake/1.0", "Accept": "application/json"}

    async with httpx.AsyncClient(timeout=GEOCODER_TIMEOUT_SECONDS) as client:
        response = await client.get(f"{GEOCODER_BASE_URL}/api/", params=params, headers=headers)
        response.raise_for_status()
        payload = response.json()

    results: list[AddressSuggestion] = []
    for feature in payload.get("features", []):
        coordinates = (feature.get("geometry") or {}).get("coordinates") or []
        properties = feature.get("properties") or {}
        if len(coordinates) < 2:
            continue
        try:
            longitude, latitude = float(coordinates[0]), float(coordinates[1])
        except (TypeError, ValueError):
            continue
        label = _display_name(properties)
        if not label:
            continue
        results.append(
            AddressSuggestion(
                id=f"photon-{properties.get('osm_id', properties.get('name', label))}",
                display_name=label,
                latitude=latitude,
                longitude=longitude,
                precision=_precision(properties),
                source="OpenStreetMap via Photon",
            )
        )
    return results


async def _geocode_nominatim(query: str, limit: int) -> list[AddressSuggestion]:
    params = {
        "q": f"{query}, Odisha, India",
        "format": "json",
        "limit": str(limit),
        "addressdetails": "1",
    }
    headers = {"User-Agent": "CIVICO-Citizen-Intake/1.0 (contact: support@civico.gov.in)"}

    async with httpx.AsyncClient(timeout=GEOCODER_TIMEOUT_SECONDS) as client:
        response = await client.get(f"{NOMINATIM_BASE_URL}/search", params=params, headers=headers)
        response.raise_for_status()
        payload = response.json()

    results: list[AddressSuggestion] = []
    if isinstance(payload, list):
        for item in payload:
            try:
                lat = float(item["lat"])
                lng = float(item["lon"])
                display = item.get("display_name", query)
                results.append(
                    AddressSuggestion(
                        id=f"nominatim-{item.get('place_id', lat)}",
                        display_name=display,
                        latitude=lat,
                        longitude=lng,
                        precision="place",
                        source="OpenStreetMap via Nominatim",
                    )
                )
            except (KeyError, ValueError, TypeError):
                continue
    return results


def _geocode_local_landmarks(query: str, limit: int) -> list[AddressSuggestion]:
    q_clean = query.lower().strip()
    words = re.findall(r"\w+", q_clean)
    matched = []

    for lm in LOCAL_LANDMARKS:
        lm_text = lm["name"].lower()
        score = sum(1 for w in words if w in lm_text)
        if score > 0 or q_clean in lm_text or lm_text in q_clean:
            matched.append((score, lm))

    matched.sort(key=lambda item: item[0], reverse=True)
    results: list[AddressSuggestion] = []
    for idx, (_, lm) in enumerate(matched[:limit]):
        results.append(
            AddressSuggestion(
                id=f"local-{idx}-{lm['lat']}",
                display_name=lm["name"],
                latitude=lm["lat"],
                longitude=lm["lng"],
                precision=lm["precision"],
                source="Local Constituency Landmark Index",
            )
        )
    return results


@router.get("/search", response_model=AddressSearchResponse)
async def search_addresses(
    q: str = Query(min_length=2, max_length=160),
    language: Literal["odia", "hindi", "english"] = "english",
    limit: int = Query(default=5, ge=1, le=10),
) -> AddressSearchResponse:
    # 1. Sanitize search query string against script injection & dangerous tokens
    raw_query = q.strip()
    query = sanitize_text_input(raw_query, max_length=150)
    if not query:
        return AddressSearchResponse(query=q, results=[])

    key = _cache_key(query, language)
    cached = _cache_get(key)
    if cached is not None:
        return AddressSearchResponse.model_validate(cached)

    results: list[AddressSuggestion] = []
    primary_source = "Multi-Tier Geocode Pipeline"

    # Stage 1: Mapbox Places API (if configured in .env.local)
    if settings.mapbox_geocoding_key:
        try:
            results = await _geocode_mapbox(query, settings.mapbox_geocoding_key, limit)
            if results:
                primary_source = "Mapbox Places API"
        except Exception:
            results = []

    # Stage 2: OpenCage Geocoding API (if configured in .env.local)
    if not results and settings.opencage_api_key:
        try:
            results = await _geocode_opencage(query, settings.opencage_api_key, limit)
            if results:
                primary_source = "OpenCage Geocoding API"
        except Exception:
            results = []

    # Stage 3: Primary Photon Geocoder
    if not results:
        try:
            results = await _geocode_photon(query, language, limit)
            if results:
                primary_source = "OpenStreetMap via Photon"
        except Exception:
            results = []

    # Stage 4: Secondary Nominatim Geocoder
    if not results:
        try:
            results = await _geocode_nominatim(query, limit)
            if results:
                primary_source = "OpenStreetMap via Nominatim"
        except Exception:
            results = []

    # Stage 5: Local Constituency Landmark Index (Zero-network fallback)
    if not results:
        results = _geocode_local_landmarks(query, limit)
        primary_source = "Local Landmark Index"


    # Default fallback: return Bhubaneswar Constituency Center if query matched nothing
    if not results:
        results.append(
            AddressSuggestion(
                id="default-bhubaneswar-center",
                display_name=f"{query}, Bhubaneswar, Odisha (Constituency Center)",
                latitude=20.2961,
                longitude=85.8245,
                precision="area",
                source="Constituency Center Default",
            )
        )

    response_payload = AddressSearchResponse(
        query=query,
        results=results[:limit],
        source=primary_source,
    ).model_dump()

    _cache_put(key, response_payload)
    return AddressSearchResponse.model_validate(response_payload)
