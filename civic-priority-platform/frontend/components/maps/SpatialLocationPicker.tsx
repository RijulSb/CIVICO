"use client";

import * as React from "react";
import {
  AlertCircle,
  CheckCircle2,
  Crosshair,
  Loader2,
  MapPin,
  Navigation,
  Search,
} from "lucide-react";

import {
  searchAddresses,
  type AddressSuggestion,
  type IntakeLanguage,
} from "@/lib/api/geocoding";

export interface ConfirmedLocation {
  lat: number;
  lng: number;
  address?: string;
  accuracyMeters?: number;
  source: "gps" | "address" | "photo";
  precision: "address" | "street" | "place" | "area" | "gps" | "photo";
}

export interface SpatialLocationPickerProps {
  initialLat?: number | null;
  initialLng?: number | null;
  exifGeotag?: { lat: number; lng: number } | null;
  language?: IntakeLanguage;
  onLocationConfirmed: (location: ConfirmedLocation) => void;
  disabled?: boolean;
}

const DEFAULT_CENTER = { lat: 20.2961, lng: 85.8245 };

const languageLabels: Record<IntakeLanguage, string> = {
  odia: "Odia",
  hindi: "Hindi",
  english: "English",
};

export function SpatialLocationPicker({
  initialLat,
  initialLng,
  exifGeotag,
  language = "english",
  onLocationConfirmed,
  disabled = false,
}: SpatialLocationPickerProps) {
  const initialLocation = React.useMemo(
    () =>
      exifGeotag ??
      (initialLat != null && initialLng != null
        ? { lat: initialLat, lng: initialLng }
        : DEFAULT_CENTER),
    [exifGeotag, initialLat, initialLng],
  );

  const [currentCoords, setCurrentCoords] = React.useState(initialLocation);
  const [addressQuery, setAddressQuery] = React.useState("");
  const [selectedAddress, setSelectedAddress] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<AddressSuggestion[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchError, setSearchError] = React.useState("");
  const [isLocating, setIsLocating] = React.useState(false);
  const [locationError, setLocationError] = React.useState("");
  const [gpsSuggestion, setGpsSuggestion] = React.useState<{
    lat: number;
    lng: number;
    accuracyMeters?: number;
  } | null>(null);
  const [accuracyMeters, setAccuracyMeters] = React.useState<
    number | undefined
  >();
  const [locationSource, setLocationSource] = React.useState<
    "gps" | "address" | "photo"
  >(exifGeotag ? "photo" : "address");
  const [precision, setPrecision] = React.useState<
    ConfirmedLocation["precision"]
  >(exifGeotag ? "photo" : "area");
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const [exifApplied, setExifApplied] = React.useState(Boolean(exifGeotag));
  const searchRequestRef = React.useRef<AbortController | null>(null);

  React.useEffect(() => {
    setCurrentCoords(initialLocation);
  }, [initialLocation]);

  React.useEffect(() => {
    if (exifGeotag && !exifApplied) {
      setCurrentCoords(exifGeotag);
      setLocationSource("photo");
      setPrecision("photo");
      setAccuracyMeters(undefined);
      setIsConfirmed(false);
      setExifApplied(true);
    }
  }, [exifApplied, exifGeotag]);

  // Ask for GPS once and show it as a suggestion; the citizen still confirms it.
  React.useEffect(() => {
    if (
      disabled ||
      exifGeotag ||
      typeof navigator === "undefined" ||
      !("geolocation" in navigator)
    ) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGpsSuggestion({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracyMeters: Number.isFinite(position.coords.accuracy)
            ? position.coords.accuracy
            : undefined,
        });
      },
      () => {
        // Permission denial is non-blocking; the user can search by address instead.
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 120000 },
    );
  }, [disabled, exifGeotag]);

  React.useEffect(() => {
    const query = addressQuery.trim();
    if (query.length < 3 || query === selectedAddress) {
      searchRequestRef.current?.abort();
      setSuggestions([]);
      setIsSearching(false);
      return;
    }

    const timer = window.setTimeout(async () => {
      searchRequestRef.current?.abort();
      const controller = new AbortController();
      searchRequestRef.current = controller;
      setIsSearching(true);
      setSearchError("");

      try {
        const response = await searchAddresses(
          query,
          language,
          controller.signal,
        );
        if (!controller.signal.aborted) setSuggestions(response.results);
      } catch (error) {
        if (!controller.signal.aborted) {
          setSuggestions([]);
          setSearchError(
            error instanceof Error
              ? error.message
              : "Address search is unavailable.",
          );
        }
      } finally {
        if (!controller.signal.aborted) setIsSearching(false);
      }
    }, 450);

    return () => window.clearTimeout(timer);
  }, [addressQuery, language, selectedAddress]);

  React.useEffect(() => () => searchRequestRef.current?.abort(), []);

  const applySuggestion = (suggestion: AddressSuggestion) => {
    setCurrentCoords({ lat: suggestion.latitude, lng: suggestion.longitude });
    setAddressQuery(suggestion.display_name);
    setSelectedAddress(suggestion.display_name);
    setSuggestions([]);
    setSearchError("");
    setLocationError("");
    setAccuracyMeters(undefined);
    setLocationSource("address");
    setPrecision(suggestion.precision);
    setIsConfirmed(false);
  };

  const useGpsSuggestion = () => {
    if (!gpsSuggestion) return;
    setCurrentCoords({ lat: gpsSuggestion.lat, lng: gpsSuggestion.lng });
    setAccuracyMeters(gpsSuggestion.accuracyMeters);
    setLocationSource("gps");
    setPrecision("gps");
    setIsConfirmed(false);
    setLocationError("");
  };

  const handleGetCurrentLocation = () => {
    if (!("geolocation" in navigator)) {
      setLocationError(
        "Device location is not available. Search for an address instead.",
      );
      return;
    }

    setIsLocating(true);
    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setAccuracyMeters(
          Number.isFinite(position.coords.accuracy)
            ? position.coords.accuracy
            : undefined,
        );
        setLocationSource("gps");
        setPrecision("gps");
        setIsConfirmed(false);
        setIsLocating(false);
      },
      () => {
        setLocationError(
          "We could not access your location. Search for an address instead.",
        );
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 120000 },
    );
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    onLocationConfirmed({
      lat: currentCoords.lat,
      lng: currentCoords.lng,
      address: selectedAddress || addressQuery.trim() || undefined,
      accuracyMeters,
      source: locationSource,
      precision,
    });
  };

  const accuracyLabel =
    locationSource === "gps" && accuracyMeters != null
      ? `GPS accuracy ±${Math.round(accuracyMeters)} m`
      : locationSource === "address"
        ? `${precision === "address" ? "Address" : "Place"} match — confirm pin`
        : locationSource === "photo"
          ? "Photo geotag — confirm pin"
          : "Approximate area — confirm pin";

  return (
    <div className="flex min-w-0 flex-col gap-3 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-3 font-sans sm:p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e25a45] text-white">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-[#171817]">
              Where is this happening?
            </h4>
            <p className="font-mono text-[10px] uppercase tracking-wide text-[#777872]">
              Address, GPS, or photo location
            </p>
          </div>
        </div>
        {isConfirmed && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 font-mono text-[10px] font-medium text-emerald-800">
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> Verified
          </span>
        )}
      </div>

      <div className="relative">
        <label htmlFor="civico-address-search" className="sr-only">
          Search address or landmark
        </label>
        <Search
          className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#777872]"
          aria-hidden="true"
        />
        <input
          id="civico-address-search"
          type="search"
          value={addressQuery}
          onChange={(event) => {
            setAddressQuery(event.target.value);
            setSelectedAddress("");
            setIsConfirmed(false);
          }}
          placeholder="Type a road, school, landmark, or address"
          autoComplete="street-address"
          disabled={disabled}
          className="h-11 w-full rounded-lg border border-[#171817]/20 bg-white pl-9 pr-10 text-sm text-[#171817] outline-none transition focus:border-[#e25a45] focus:ring-2 focus:ring-[#e25a45]/30 disabled:cursor-not-allowed disabled:opacity-60"
          aria-describedby="civico-address-help"
          aria-autocomplete="list"
          aria-controls="civico-address-suggestions"
        />
        {isSearching && (
          <Loader2
            className="absolute right-3 top-3 h-4 w-4 animate-spin text-[#e25a45]"
            aria-label="Searching"
          />
        )}

        {suggestions.length > 0 && (
          <ul
            id="civico-address-suggestions"
            role="listbox"
            className="absolute inset-x-0 top-12 z-30 max-h-56 overflow-y-auto rounded-lg border border-[#171817]/15 bg-white p-1 shadow-xl"
          >
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} role="option" aria-selected={false}>
                <button
                  type="button"
                  onClick={() => applySuggestion(suggestion)}
                  className="w-full rounded-md px-3 py-2 text-left text-xs text-[#171817] transition hover:bg-[#f4f3ef] focus:bg-[#f4f3ef] focus:outline-none"
                >
                  <span className="block font-medium">
                    {suggestion.display_name}
                  </span>
                  <span className="mt-0.5 block font-mono text-[10px] uppercase text-[#777872]">
                    {suggestion.precision} match
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p
        id="civico-address-help"
        className="text-[11px] leading-4 text-[#777872]"
      >
        Choose a suggestion to place the pin, then confirm it below. Intake
        language: {languageLabels[language]}.
      </p>

      {gpsSuggestion && !isConfirmed && locationSource !== "gps" && (
        <button
          type="button"
          onClick={useGpsSuggestion}
          disabled={disabled}
          className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-left text-xs text-emerald-900 transition hover:bg-emerald-100 disabled:opacity-60"
        >
          <Navigation className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            <span className="block font-semibold">
              Use your detected location?
            </span>
            <span className="block opacity-80">
              {gpsSuggestion.accuracyMeters != null
                ? `Estimated GPS accuracy ±${Math.round(gpsSuggestion.accuracyMeters)} m.`
                : "A device location was found; confirm it before submitting."}
            </span>
          </span>
        </button>
      )}

      {(searchError || locationError) && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{searchError || locationError}</span>
        </p>
      )}

      <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border border-[#171817]/20 bg-[#1c2d1c] sm:h-44">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
          aria-hidden="true"
        />
        <div className="absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] truncate rounded bg-[#171817]/80 px-2.5 py-1 font-mono text-[10px] text-[#eeede9] backdrop-blur-sm">
          {currentCoords.lat.toFixed(5)}° N, {currentCoords.lng.toFixed(5)}° E
        </div>
        <div
          className="pointer-events-none relative z-10 flex flex-col items-center"
          aria-hidden="true"
        >
          <div className="h-4 w-4 rounded-full border-2 border-white bg-[#e25a45] shadow-lg" />
          <div className="h-2 w-8 rounded-full bg-black/40 blur-sm" />
        </div>
        <button
          type="button"
          onClick={handleGetCurrentLocation}
          disabled={disabled || isLocating}
          className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#171817] text-white shadow-md transition hover:bg-[#353833] active:scale-95 disabled:opacity-50"
          title="Detect current GPS location"
          aria-label="Detect current GPS location"
        >
          {isLocating ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Navigation className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="flex items-center justify-between gap-2 text-[10px] text-[#777872]">
        <span className="truncate">
          {selectedAddress || "Bhubaneswar area starting point"}
        </span>
        <span className="shrink-0 font-mono uppercase">{accuracyLabel}</span>
      </div>

      <button
        type="button"
        onClick={handleConfirm}
        disabled={disabled}
        className={`flex min-h-14 w-full items-center justify-center gap-3 rounded-xl px-3 text-sm font-semibold transition-all duration-200 sm:text-base ${
          isConfirmed
            ? "border-2 border-emerald-600 bg-emerald-600 text-white shadow-md"
            : "bg-[#171817] text-[#eeede9] shadow-md hover:bg-[#353833] active:scale-[0.99]"
        }`}
      >
        <Crosshair className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>
          {isConfirmed ? "Location Confirmed ✓" : "Confirm Suggested Location"}
        </span>
      </button>

      <p className="text-center text-[10px] leading-4 text-[#777872]">
        Address results use OpenStreetMap data via Photon. Confirm the pin
        before sending your report.
      </p>
    </div>
  );
}
