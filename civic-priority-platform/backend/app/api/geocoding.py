"""Real, user-triggered address search proxy for the CIVICO intake form."""

from __future__ import annotations

import time
from typing import Any, Literal

import httpx
from fastapi import APIRouter, HTTPException, Query, status
from pydantic import BaseModel, Field

router = APIRouter(prefix="/geocoding", tags=["geocoding"])

GEOCODER_BASE_URL = "https://photon.komoot.io"
GEOCODER_TIMEOUT_SECONDS = 5.0
CACHE_TTL_SECONDS = 300.0
MAX_CACHE_ENTRIES = 128
_cache: dict[str, tuple[float, dict[str, Any]]] = {}


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
    source: str = "OpenStreetMap via Photon"
    attribution: str = "OpenStreetMap contributors"


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


@router.get("/search", response_model=AddressSearchResponse)
async def search_addresses(
    q: str = Query(min_length=3, max_length=160),
    language: Literal["odia", "hindi", "english"] = "english",
    limit: int = Query(default=5, ge=1, le=5),
) -> AddressSearchResponse:
    query = q.strip()
    key = _cache_key(query, language)
    cached = _cache_get(key)
    if cached is not None:
        return AddressSearchResponse.model_validate(cached)

    params = {
        "q": f"{query}, Bhubaneswar, Odisha, India",
        "lat": "20.2961",
        "lon": "85.8245",
        "limit": str(limit),
        "lang": {"odia": "or", "hindi": "hi", "english": "en"}[language],
    }
    headers = {
        "User-Agent": "CIVICO-Citizen-Intake/1.0",
        "Accept": "application/json",
    }

    try:
        async with httpx.AsyncClient(timeout=GEOCODER_TIMEOUT_SECONDS) as client:
            response = await client.get(f"{GEOCODER_BASE_URL}/api/", params=params, headers=headers)
            response.raise_for_status()
            payload = response.json()
    except (httpx.HTTPError, ValueError) as exc:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Address search is temporarily unavailable. You can still use device location.",
        ) from exc

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
                id=f"{properties.get('osm_type', 'osm')}-{properties.get('osm_id', properties.get('name', label))}",
                display_name=label,
                latitude=latitude,
                longitude=longitude,
                precision=_precision(properties),
            )
        )

    result = AddressSearchResponse(query=query, results=results).model_dump()
    _cache_put(key, result)
    return AddressSearchResponse.model_validate(result)
