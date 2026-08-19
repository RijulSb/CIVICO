"use client";

import { useState } from "react";
import { TileLayer } from "react-leaflet";
import { Map as MapIcon } from "lucide-react";

type BasemapId = "osm" | "light" | "dark";

interface BasemapConfig {
  id: BasemapId;
  label: string;
  url: string;
  attribution: string;
}

const BASEMAPS: BasemapConfig[] = [
  {
    id: "osm",
    label: "OpenStreetMap",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "&copy; OpenStreetMap contributors",
  },
  {
    id: "light",
    label: "Light",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
  },
  {
    id: "dark",
    label: "Dark",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
  },
];

export default function BasemapSelector() {
  const [activeBasemap, setActiveBasemap] = useState<BasemapId>("osm");

  const [open, setOpen] = useState(false);

  const active =
    BASEMAPS.find((basemap) => basemap.id === activeBasemap) ?? BASEMAPS[0];

  return (
    <>
      <TileLayer
        key={active.id}
        attribution={active.attribution}
        url={active.url}
      />

      <div className="absolute right-4 top-4 z-[1000]">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label="Change map style"
          aria-expanded={open}
          className="flex h-10 items-center gap-2 rounded-lg border bg-background/95 px-3 text-sm font-medium shadow-md backdrop-blur transition hover:bg-background"
        >
          <MapIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{active.label}</span>
        </button>

        {open && (
          <div className="mt-2 w-44 rounded-lg border bg-background/95 p-1 shadow-lg backdrop-blur">
            {BASEMAPS.map((basemap) => {
              const isActive = basemap.id === activeBasemap;

              return (
                <button
                  key={basemap.id}
                  type="button"
                  onClick={() => {
                    setActiveBasemap(basemap.id);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-left text-sm transition ${
                    isActive ? "bg-muted font-medium" : "hover:bg-muted/70"
                  }`}
                >
                  <span>{basemap.label}</span>

                  {isActive && (
                    <span className="ml-auto text-xs text-muted-foreground">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
