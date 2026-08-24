"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface WardCoverageMapProps {
  projects: any[];
  wards: any[];
}

export default function WardCoverageMap({ projects, wards }: WardCoverageMapProps) {
  return (
    <div className="h-72 w-full overflow-hidden rounded-xl border border-slate-200 relative z-0">
      <MapContainer
        center={[20.28, 85.80]}
        zoom={11}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* Selected Project Markers (Green Circles) */}
        {projects.map((proj, idx) => {
          const lat = proj.latitude || 20.25 + (idx % 4) * 0.03;
          const lng = proj.longitude || 85.75 + Math.floor(idx / 4) * 0.04;
          const isSelected = proj.status === "selected" || idx < 5;

          return (
            <CircleMarker
              key={proj.id || idx}
              center={[lat, lng]}
              radius={isSelected ? 16 : 10}
              pathOptions={{
                color: isSelected ? "#10b981" : "#64748b",
                fillColor: isSelected ? "#10b981" : "#94a3b8",
                fillOpacity: isSelected ? 0.7 : 0.3,
                weight: 2,
              }}
            >
              <Popup>
                <div className="font-sans text-xs p-1 space-y-1">
                  <div className="font-bold text-[#171817]">
                    {proj.title}
                  </div>
                  <div className="font-mono text-[10px] text-slate-600">
                    Ward: {proj.wardName || proj.ward || "Khordha"}
                  </div>
                  <div className="font-mono text-[10px] font-bold text-emerald-700">
                    Status: {isSelected ? "SELECTED (Priority #" + (idx + 1) + ")" : "EXCLUDED"}
                  </div>
                  <div className="font-mono text-[10px] text-slate-500">
                    Cost: ₹{(proj.estimatedCost / 1e7).toFixed(1)} Cr
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
