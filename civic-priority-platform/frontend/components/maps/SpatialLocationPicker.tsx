"use client";

import * as React from "react";
import { MapPin, Navigation, CheckCircle2, Crosshair } from "lucide-react";

export interface SpatialLocationPickerProps {
  initialLat?: number | null;
  initialLng?: number | null;
  exifGeotag?: { lat: number; lng: number } | null;
  onLocationConfirmed: (location: { lat: number; lng: number; address?: string }) => void;
  disabled?: boolean;
}

export function SpatialLocationPicker({
  initialLat,
  initialLng,
  exifGeotag,
  onLocationConfirmed,
  disabled = false,
}: SpatialLocationPickerProps) {
  const defaultCenter = { lat: 20.2961, lng: 85.8245 }; // Default Bhubaneswar
  const [currentCoords, setCurrentCoords] = React.useState<{ lat: number; lng: number }>(
    exifGeotag || (initialLat && initialLng ? { lat: initialLat, lng: initialLng } : defaultCenter)
  );
  const [isLocating, setIsLocating] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const [exifApplied, setExifApplied] = React.useState(false);

  // Sync if EXIF geotag arrives from uploaded photo
  React.useEffect(() => {
    if (exifGeotag && !exifApplied) {
      setCurrentCoords(exifGeotag);
      setExifApplied(true);
      setIsConfirmed(false);
    }
  }, [exifGeotag, exifApplied]);

  const handleGetCurrentLocation = () => {
    if (!("geolocation" in navigator)) return;
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setCurrentCoords(coords);
        setIsLocating(false);
        setIsConfirmed(false);
      },
      () => {
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    onLocationConfirmed(currentCoords);
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-4 font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e25a45] text-white">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#171817]">Spatial Location Verification</h4>
            <p className="font-mono text-xs text-[#777872]">
              {exifGeotag ? "EXIF Photo Geotag Detected" : "GPS / Minimap Pinpoint"}
            </p>
          </div>
        </div>
        {isConfirmed && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 font-mono text-xs font-medium text-emerald-800">
            <CheckCircle2 className="h-3.5 w-3.5" /> Verified
          </span>
        )}
      </div>

      {/* Interactive Minimap Simulation Grid */}
      <div className="relative h-44 w-full overflow-hidden rounded-lg border border-[#171817]/20 bg-[#1c2d1c]">
        {/* Synthetic Map Background Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />
        
        {/* Map Coordinates overlay */}
        <div className="absolute left-3 top-3 z-10 rounded bg-[#171817]/80 px-2.5 py-1 font-mono text-[11px] text-[#eeede9] backdrop-blur-sm">
          {currentCoords.lat.toFixed(4)}° N, {currentCoords.lng.toFixed(4)}° E
        </div>

        {/* Center Target Pin */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex flex-col items-center">
            <div className="h-4 w-4 rounded-full border-2 border-white bg-[#e25a45] shadow-lg animate-bounce" />
            <div className="h-2 w-8 rounded-full bg-black/40 blur-xs" />
          </div>
        </div>

        {/* Location Trigger */}
        <button
          type="button"
          onClick={handleGetCurrentLocation}
          disabled={disabled || isLocating}
          className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#171817] text-white shadow-md transition hover:bg-[#353833] active:scale-95 disabled:opacity-50"
          title="Detect Current GPS Location"
        >
          {isLocating ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <Navigation className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Large Single-Tap Confirm Touch Target (>56px height requirement) */}
      <button
        type="button"
        onClick={handleConfirm}
        disabled={disabled}
        className={`flex h-14 w-full items-center justify-center gap-3 rounded-xl text-base font-semibold transition-all duration-200 ${
          isConfirmed
            ? "border-2 border-emerald-600 bg-emerald-600 text-white shadow-md"
            : "bg-[#171817] text-[#eeede9] shadow-md hover:bg-[#353833] active:scale-[0.99]"
        }`}
      >
        <Crosshair className="h-5 w-5" />
        <span>{isConfirmed ? "Location Confirmed ✓" : "Single-Tap Confirm Location"}</span>
      </button>
    </div>
  );
}
