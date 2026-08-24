"use client";

import { useMemo } from "react";
import { Circle, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

import { useCivicMap } from "../MapProvider";

export interface IssueMarkerData {
  id: string;
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
  theme?: string;
  source?: string;
  timestamp?: string;
}

interface IssueMarkerProps {
  issue: IssueMarkerData;
}

const CATEGORY_CONFIG: Record<string, { symbol: string; bg: string; name: string }> = {
  road_repair: { symbol: "🛠️", bg: "#ef4444", name: "Road Repair" },
  roads: { symbol: "🛣️", bg: "#ef4444", name: "Roads & Mobility" },
  water_supply: { symbol: "💧", bg: "#3b82f6", name: "Water Supply" },
  water: { symbol: "🚰", bg: "#3b82f6", name: "Drinking Water" },
  health_clinic: { symbol: "🏥", bg: "#10b981", name: "Health Clinic" },
  health: { symbol: "🚑", bg: "#10b981", name: "Healthcare" },
  school_infrastructure: { symbol: "🏫", bg: "#a855f7", name: "School Infrastructure" },
  education: { symbol: "🎓", bg: "#a855f7", name: "Education" },
  electricity: { symbol: "⚡", bg: "#f59e0b", name: "Electricity Grid" },
  sanitation: { symbol: "🧹", bg: "#f97316", name: "Sanitation" },
};

function createCategoryIcon(theme: string = "roads") {
  const config = CATEGORY_CONFIG[theme.toLowerCase()] || { symbol: "📍", bg: "#e25a45", name: "Civic Issue" };

  return L.divIcon({
    className: "custom-category-pin",
    html: `
      <div style="
        background: ${config.bg};
        border: 2px solid #ffffff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        width: 34px;
        height: 34px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
        cursor: pointer;
        transition: transform 0.2s ease;
      ">
        ${config.symbol}
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

export function IssueMarker({ issue }: IssueMarkerProps) {
  const { selectIssue } = useCivicMap();

  const themeKey = (issue.theme || "roads").toLowerCase();
  const config = CATEGORY_CONFIG[themeKey] || { symbol: "📍", bg: "#e25a45", name: "Civic Issue" };

  const customIcon = useMemo(() => createCategoryIcon(issue.theme), [issue.theme]);

  const handleSelect = () => {
    selectIssue(issue.id);
  };

  return (
    <>
      {/* 1. Affected Area Circle (350 meter radius highlight) */}
      <Circle
        center={[issue.latitude, issue.longitude]}
        radius={350}
        pathOptions={{
          color: config.bg,
          fillColor: config.bg,
          fillOpacity: 0.15,
          weight: 1.5,
          dashArray: "5,5",
        }}
      />

      {/* 2. Category Symbol Pin Marker */}
      <Marker
        position={[issue.latitude, issue.longitude]}
        icon={customIcon}
        eventHandlers={{
          click: handleSelect,
        }}
      >
        <Tooltip direction="top" offset={[0, -18]}>
          <div className="space-y-0.5 text-xs font-sans">
            <p className="font-bold text-[#171817]">{issue.title ?? "Civic Issue"}</p>
            <p className="text-[10px] text-muted-foreground">Category: {config.name}</p>
          </div>
        </Tooltip>

        <Popup>
          <div className="min-w-[220px] space-y-2.5 font-sans">
            <div className="flex items-center gap-2">
              <span className="text-xl">{config.symbol}</span>
              <div>
                <h3 className="font-bold text-sm text-[#171817] line-clamp-1">
                  {issue.title ?? "Civic Issue"}
                </h3>
                <span className="font-mono text-[10px] uppercase font-bold text-[#e25a45]">
                  {config.name}
                </span>
              </div>
            </div>

            {issue.description && (
              <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded border">
                {issue.description}
              </p>
            )}

            <div className="space-y-1 text-xs border-t pt-2 text-slate-700">
              <p>
                <strong>Location:</strong> {issue.latitude.toFixed(4)}° N, {issue.longitude.toFixed(4)}° E
              </p>
              {issue.source && (
                <p className="capitalize text-[11px]">
                  <strong>Source:</strong> {issue.source}
                </p>
              )}

              {issue.timestamp && (
                <p className="text-[11px]">
                  <strong>Reported:</strong> {issue.timestamp}
                </p>
              )}
            </div>
          </div>
        </Popup>
      </Marker>
    </>
  );
}

export default IssueMarker;
