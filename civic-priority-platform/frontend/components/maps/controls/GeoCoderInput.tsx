"use client";

import { FormEvent, useState } from "react";
import { Loader2, MapPin, Search } from "lucide-react";

import { useCivicMap } from "../MapProvider";

interface GeocoderResult {
  display_name: string;
  lat: string;
  lon: string;
}

export default function GeocoderInput() {
  const { setCenter } = useCivicMap();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GeocoderResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchLocation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const response = await fetch(
        `/api/geocode?q=${encodeURIComponent(trimmedQuery)}`,
      );

      if (!response.ok) {
        throw new Error("Geocoding request failed");
      }

      const data: GeocoderResult[] = await response.json();

      setResults(data.slice(0, 5));

      if (data.length === 0) {
        setError("No matching locations found.");
      }
    } catch {
      setError("Unable to search this location right now.");
    } finally {
      setLoading(false);
    }
  };

  const selectLocation = (result: GeocoderResult) => {
    const latitude = Number(result.lat);
    const longitude = Number(result.lon);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return;
    }

    setCenter(latitude, longitude, 15);
    setResults([]);
    setQuery(result.display_name);
  };

  return (
    <div className="absolute left-1/2 top-4 z-[1000] w-[min(90vw,380px)] -translate-x-1/2">
      <form
        onSubmit={searchLocation}
        className="flex items-center gap-2 rounded-xl border bg-background/95 p-2 shadow-lg backdrop-blur-sm"
      >
        <Search className="ml-1 h-4 w-4 shrink-0 text-muted-foreground" />

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a place or area..."
          aria-label="Search map location"
          className="min-w-0 flex-1 bg-transparent px-1 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
        />

        <button
          type="submit"
          disabled={loading || !query.trim()}
          aria-label="Search location"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </button>
      </form>

      {error && (
        <div className="mt-2 rounded-lg border bg-background px-3 py-2 text-xs text-muted-foreground shadow-md">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-2 overflow-hidden rounded-xl border bg-background shadow-lg">
          {results.map((result, index) => (
            <button
              key={`${result.lat}-${result.lon}-${index}`}
              type="button"
              onClick={() => selectLocation(result)}
              className="flex w-full items-start gap-3 border-b px-3 py-3 text-left text-sm last:border-b-0 hover:bg-muted"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />

              <span className="line-clamp-2">{result.display_name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
