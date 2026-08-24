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

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const API_PREFIX = `${API_BASE}/api/v1`;

export async function searchAddresses(
  query: string,
  language: IntakeLanguage = "english",
  signal?: AbortSignal,
): Promise<AddressSearchResponse> {
  const params = new URLSearchParams({ q: query, language, limit: "5" });
  const response = await fetch(`${API_PREFIX}/geocoding/search?${params}`, {
    method: "GET",
    signal,
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Address search failed (${response.status}): ${detail}`);
  }

  return response.json() as Promise<AddressSearchResponse>;
}
