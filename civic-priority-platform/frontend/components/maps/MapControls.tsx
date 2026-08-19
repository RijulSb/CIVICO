"use client";

import { LocateFixed, Minus, Plus, RotateCcw } from "lucide-react";
import { useMap } from "react-leaflet";

const DEFAULT_LAT = 20.2961;
const DEFAULT_LNG = 85.8245;
const DEFAULT_ZOOM = 12;

export default function MapControls() {
  const map = useMap();

  function zoomIn() {
    map.zoomIn();
  }

  function zoomOut() {
    map.zoomOut();
  }

  function reset() {
    map.setView([DEFAULT_LAT, DEFAULT_LNG], DEFAULT_ZOOM);
  }

  function locate() {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      map.flyTo([position.coords.latitude, position.coords.longitude], 15, {
        duration: 0.8,
      });
    });
  }

  return (
    <div
      className="absolute right-4 top-4 z-[1000] flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md"
      aria-label="Map controls"
    >
      <ControlButton label="Zoom in" onClick={zoomIn}>
        <Plus className="h-4 w-4" />
      </ControlButton>

      <ControlButton label="Zoom out" onClick={zoomOut}>
        <Minus className="h-4 w-4" />
      </ControlButton>

      <ControlButton label="Reset map" onClick={reset}>
        <RotateCcw className="h-4 w-4" />
      </ControlButton>

      <ControlButton label="Locate me" onClick={locate}>
        <LocateFixed className="h-4 w-4" />
      </ControlButton>
    </div>
  );
}

function ControlButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className="flex h-10 w-10 cursor-pointer items-center justify-center border-b border-slate-200 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 last:border-b-0"
    >
      {children}
    </button>
  );
}
