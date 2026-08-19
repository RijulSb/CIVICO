"use client";

import { LocateFixed, MapPin, RotateCcw } from "lucide-react";

import { useCivicMap } from "../MapProvider";

export default function MapControls() {
  const { setCenter, setPinMode, isPinMode, resetView } = useCivicMap();

  const handleLocate = () => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter(position.coords.latitude, position.coords.longitude, 15);
      },
      () => {
        // Geolocation can be denied or unavailable.
      },
    );
  };

  const handleReport = () => {
    setPinMode(!isPinMode);
  };

  return (
    <div className="absolute right-4 top-4 z-[1000] flex flex-col gap-2">
      <button
        type="button"
        onClick={handleReport}
        aria-label="Report an issue"
        aria-pressed={isPinMode}
        className={`flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-md transition-colors ${
          isPinMode
            ? "border-primary bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
      >
        <MapPin className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={handleLocate}
        aria-label="Locate me"
        className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-md transition-colors hover:bg-muted"
      >
        <LocateFixed className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={resetView}
        aria-label="Reset map view"
        className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-md transition-colors hover:bg-muted"
      >
        <RotateCcw className="h-5 w-5" />
      </button>
    </div>
  );
}
