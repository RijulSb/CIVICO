export type IntakeLanguage = "odia" | "hindi" | "english";
export type LocationPrecision = "address" | "street" | "place" | "area";

export interface AddressSuggestion {
  id: string;
  display_name: string;
  latitude: number;
  longitude: number;
  precision: LocationPrecision;
  source: string;
  attribution: string;
}

interface AddressSearchResponse {
  query: string;
  results: AddressSuggestion[];
  source: string;
  attribution: string;
}

import { API_PREFIX } from "@/lib/api";

const CLIENT_LANDMARKS: Array<{ name: string; lat: number; lng: number }> = [
  { name: "Saheed Nagar, Bhubaneswar", lat: 20.2874, lng: 85.8378 },
  { name: "Jaydev Vihar Square, Bhubaneswar", lat: 20.3021, lng: 85.8241 },
  { name: "Patia Sector 3, Bhubaneswar", lat: 20.352, lng: 85.818 },
  { name: "Acharya Vihar, Bhubaneswar", lat: 20.2961, lng: 85.8245 },
  { name: "Puri Grand Road, Puri", lat: 19.812, lng: 85.8314 },
  { name: "Badambadi Bus Stand, Cuttack", lat: 20.4625, lng: 85.883 },
];

export async function searchAddresses(
  query: string,
  language: IntakeLanguage = "english",
  signal?: AbortSignal,
): Promise<AddressSearchResponse> {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      query,
      results: [],
      source: "client",
      attribution: "OpenStreetMap contributors",
    };
  }

  try {
    const params = new URLSearchParams({ q: trimmed, language, limit: "5" });
    const response = await fetch(`${API_PREFIX}/geocoding/search?${params}`, {
      method: "GET",
      signal,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      return (await response.json()) as AddressSearchResponse;
    }
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      throw err;
    }
  }

  // Client-side fallback if backend is unreachable or blocked
  const matches = CLIENT_LANDMARKS.filter((lm) =>
    lm.name.toLowerCase().includes(trimmed.toLowerCase()),
  );

  const fallbackResults: AddressSuggestion[] = (
    matches.length > 0
      ? matches
      : [
          {
            name: `${trimmed}, Bhubaneswar, Odisha`,
            lat: 20.2961,
            lng: 85.8245,
          },
        ]
  ).map((item, idx) => ({
    id: `client-fallback-${idx}`,
    display_name: item.name,
    latitude: item.lat,
    longitude: item.lng,
    precision: "area",
    source: "Offline Client Landmark Fallback",
    attribution: "CIVICO Local Landmark Index",
  }));

    return {
    query: trimmed,
    results: fallbackResults,
    source: "Offline Client Landmark Fallback",
    attribution: "CIVICO Local Landmark Index",
  };
}

export async function reverseGeocode(
  lat: number,
  lng: number,
  signal?: AbortSignal,
): Promise<AddressSuggestion> {
  try {
    const params = new URLSearchParams({
      lat: String(lat),
      lng: String(lng),
    });
    const response = await fetch(`${API_PREFIX}/geocoding/reverse?${params}`, {
      method: "GET",
      signal,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      return (await response.json()) as AddressSuggestion;
    }
  } catch (err) {
    if ((err as Error).name === "AbortError") throw err;
  }

  let nearest = "Bhubaneswar, Odisha";
  let minD = Infinity;
  for (const lm of CLIENT_LANDMARKS) {
    const d = (lat - lm.lat) ** 2 + (lng - lm.lng) ** 2;
    if (d < minD) {
      minD = d;
      nearest = lm.name;
    }
  }

  return {
    id: `client-rev-${lat.toFixed(4)}-${lng.toFixed(4)}`,
    display_name: `${nearest} (${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E)`,
    latitude: lat,
    longitude: lng,
    precision: "place",
    source: "Offline Client Landmark Index",
    attribution: "CIVICO Local Landmark Index",
  };
}
