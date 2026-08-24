"use client";

import { useMemo } from "react";
import { Circle, LayerGroup, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

import { useCivicMap } from "../MapProvider";

export interface Hotspot {
  id: string;
  latitude: number;
  longitude: number;
  count: number;
  score?: number;
  dominantTheme?: string;
  label?: string;
}

interface HotspotLayerProps {
  hotspots?: Hotspot[];
}

const CATEGORY_CONFIG: Record<string, { symbol: string; bg: string; name: string }> = {
  road_repair: { symbol: "🛠️", bg: "#dc2626", name: "Road Repair" },
  roads: { symbol: "🛣️", bg: "#dc2626", name: "Roads & Mobility" },
  water_supply: { symbol: "💧", bg: "#2563eb", name: "Water Supply" },
  water: { symbol: "🚰", bg: "#2563eb", name: "Drinking Water" },
  health_clinic: { symbol: "🏥", bg: "#16a34a", name: "Health Clinic" },
  health: { symbol: "🚑", bg: "#16a34a", name: "Healthcare" },
  school_infrastructure: { symbol: "🏫", bg: "#7e22ce", name: "School Infrastructure" },
  education: { symbol: "🎓", bg: "#7e22ce", name: "Education" },
  electricity: { symbol: "⚡", bg: "#d97706", name: "Electricity Grid" },
  sanitation: { symbol: "🧹", bg: "#ea580c", name: "Sanitation" },
};

function createHotspotIcon(theme: string = "roads", count: number) {
  const config = CATEGORY_CONFIG[theme.toLowerCase()] || { symbol: "📍", bg: "#e25a45", name: "Demand Cluster" };
  const size = count >= 50 ? 44 : count >= 20 ? 38 : 34;

  return L.divIcon({
    className: "custom-hotspot-pin",
    html: `
      <div style="
        background: ${config.bg};
        border: 3px solid #ffffff;
        box-shadow: 0 4px 14px rgba(0,0,0,0.45);
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${size >= 40 ? "20px" : "16px"};
        color: white;
        cursor: pointer;
        position: relative;
      ">
        ${config.symbol}
        <span style="
          position: absolute;
          top: -6px;
          right: -6px;
          background: #171817;
          border: 1px solid #ffffff;
          border-radius: 50%;
          color: #ffffff;
          font-size: 10px;
          font-weight: 900;
          font-family: monospace;
          padding: 1px 5px;
        ">
          ${count}
        </span>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function HotspotLayer({ hotspots = [] }: HotspotLayerProps) {
  const { layers, filters, selectCluster } = useCivicMap();

  if (!layers.showHotspots) {
    return null;
  }

  const visibleHotspots = hotspots.filter((hotspot) => {
    if (filters.themeFilter === "all") {
      return true;
    }
    return (
      hotspot.dominantTheme?.toLowerCase() === filters.themeFilter.toLowerCase()
    );
  });

  return (
    <LayerGroup>
      {visibleHotspots.map((hotspot) => {
        const themeKey = (hotspot.dominantTheme || "roads").toLowerCase();
        const config = CATEGORY_CONFIG[themeKey] || { symbol: "📍", bg: "#e25a45", name: "Demand Cluster" };
        const customIcon = createHotspotIcon(hotspot.dominantTheme, hotspot.count);

        return (
          <LayerGroup key={hotspot.id}>
            {/* 1. Affected Cluster Circle (500 meter radius highlight) */}
            <Circle
              center={[hotspot.latitude, hotspot.longitude]}
              radius={500}
              pathOptions={{
                color: config.bg,
                fillColor: config.bg,
                fillOpacity: 0.12,
                weight: 2,
                dashArray: "6,6",
              }}
            />

            {/* 2. Hotspot Marker with Category Symbol and Issue Count Badge */}
            <Marker
              position={[hotspot.latitude, hotspot.longitude]}
              icon={customIcon}
              eventHandlers={{
                click: () => {
                  selectCluster(hotspot.id);
                },
              }}
            >
              <Tooltip direction="top" offset={[0, -20]}>
                <div className="space-y-0.5 text-xs font-sans">
                  <p className="font-bold text-[#171817]">{hotspot.label ?? "Civic Hotspot"}</p>
                  <p className="text-[10px] text-muted-foreground">
                    Theme: {config.name} ({hotspot.count} reports)
                  </p>
                </div>
              </Tooltip>

              <Popup>
                <div className="min-w-[200px] space-y-2.5 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{config.symbol}</span>
                    <div>
                      <h3 className="font-bold text-sm text-[#171817] line-clamp-1">
                        {hotspot.label ?? "Civic Hotspot"}
                      </h3>
                      <span className="font-mono text-[10px] uppercase font-bold text-[#e25a45]">
                        {config.name} Cluster
                      </span>
                    </div>
                  </div>

                  <div className="text-xs space-y-1 border-t pt-2 text-slate-700">
                    <p>
                      <strong>Location:</strong> {hotspot.latitude.toFixed(4)}° N, {hotspot.longitude.toFixed(4)}° E
                    </p>
                    <p>
                      <strong>Reports Volume:</strong> {hotspot.count} submissions
                    </p>
                    {typeof hotspot.score === "number" && (
                      <p>
                        <strong>Priority Score:</strong> {Math.round(hotspot.score * 100)}%
                      </p>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          </LayerGroup>
        );
      })}
    </LayerGroup>
  );
}
