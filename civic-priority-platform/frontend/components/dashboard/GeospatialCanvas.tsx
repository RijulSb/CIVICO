"use client";

import * as React from "react";
import {
  Layers,
  Eye,
  EyeOff,
  Flame,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Compass,
  MapPin,
  Sparkles,
  Info,
  Filter,
} from "lucide-react";

export interface GeospatialCanvasProps {
  className?: string;
}

export interface HotspotHex {
  id: string;
  lat: number;
  lng: number;
  densityScore: number;
  clusterTitle: string;
  category: string;
  reportCount: number;
  hexHeightPx: number;
  color: string;
}

const mockHexes: HotspotHex[] = [
  {
    id: "hex-1",
    lat: 20.2961,
    lng: 85.8245,
    densityScore: 96,
    clusterTitle: "Ward 14 Water Infrastructure Deficit",
    category: "Water & Sanitation",
    reportCount: 92,
    hexHeightPx: 84,
    color: "#e25a45", // Crimson High Density
  },
  {
    id: "hex-2",
    lat: 20.3012,
    lng: 85.8189,
    densityScore: 84,
    clusterTitle: "Janpath Traffic & Pothole Cluster",
    category: "Roads & Mobility",
    reportCount: 148,
    hexHeightPx: 110,
    color: "#e25a45",
  },
  {
    id: "hex-3",
    lat: 20.2845,
    lng: 85.8356,
    densityScore: 68,
    clusterTitle: "Unit 3 Electrical Substation Hazard",
    category: "Electricity",
    reportCount: 64,
    hexHeightPx: 58,
    color: "#f59e0b", // Amber Medium Density
  },
  {
    id: "hex-4",
    lat: 20.3156,
    lng: 85.8412,
    densityScore: 42,
    clusterTitle: "Patia Drainage Blockage",
    category: "Sanitation",
    reportCount: 38,
    hexHeightPx: 42,
    color: "#10b981", // Green Low Density
  },
];

export function GeospatialCanvas({ className = "" }: GeospatialCanvasProps) {
  const [activeLayer, setActiveLayer] = React.useState<{
    showHotspots: boolean;
    show3DHexBins: boolean;
    showBoundaries: boolean;
    showInfrastructure: boolean;
  }>({
    showHotspots: true,
    show3DHexBins: true,
    showBoundaries: true,
    showInfrastructure: false,
  });

  const [selectedHex, setSelectedHex] = React.useState<HotspotHex | null>(mockHexes[0]);
  const [zoomLevel, setZoomLevel] = React.useState(12.5);

  const toggleLayer = (layerKey: keyof typeof activeLayer) => {
    setActiveLayer((prev) => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  return (
    <div className={`relative flex h-full w-full flex-col overflow-hidden bg-[#121814] font-sans ${className}`}>
      {/* Top Floating Telemetry & Controls Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* Title Badge */}
        <div className="pointer-events-auto flex items-center gap-3 rounded-xl border border-white/15 bg-[#171817]/90 px-4 py-2.5 text-white backdrop-blur-md shadow-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e25a45] text-white">
            <Flame className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight">WebGL 3D Hex-Binning Heatmap</h3>
            <p className="font-mono text-[11px] text-white/70">
              DBSCAN Spatial Cluster Engine • 45 Wards Monitored
            </p>
          </div>
        </div>

        {/* Layer Controls Pill Bar */}
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#171817]/90 p-1.5 text-white backdrop-blur-md shadow-lg font-mono text-xs">
          {[
            { key: "show3DHexBins", label: "3D Hex-Bins" },
            { key: "showHotspots", label: "Hotspots" },
            { key: "showBoundaries", label: "Ward Boundaries" },
            { key: "showInfrastructure", label: "Infra Grid" },
          ].map((item) => {
            const isToggled = activeLayer[item.key as keyof typeof activeLayer];
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleLayer(item.key as keyof typeof activeLayer)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition ${
                  isToggled
                    ? "bg-[#e25a45] text-white shadow-sm"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {isToggled ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* WebGL Canvas Simulated Container */}
      <div className="relative flex-1 w-full overflow-hidden bg-[#0c120e]">
        {/* Synthetic WebGL Terrain Grid Texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#e25a45 1px, transparent 1px), linear-gradient(90deg, #e25a45 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Contour & Elevation Vectors */}
        <svg className="absolute inset-0 h-full w-full opacity-15 pointer-events-none">
          <ellipse cx="45%" cy="50%" rx="35%" ry="25%" fill="none" stroke="#e25a45" strokeWidth="1.5" strokeDasharray="6 4" />
          <ellipse cx="45%" cy="50%" rx="22%" ry="15%" fill="none" stroke="#e25a45" strokeWidth="1.5" />
          <ellipse cx="65%" cy="35%" rx="18%" ry="12%" fill="none" stroke="#10b981" strokeWidth="1.5" />
        </svg>

        {/* 3D Hexagonal Extrusion Clusters */}
        {activeLayer.show3DHexBins && (
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative h-96 w-full max-w-2xl">
              {mockHexes.map((hex, idx) => {
                const isSelected = selectedHex?.id === hex.id;
                // Position hexes in isometric-style positions
                const offsets = [
                  { top: "35%", left: "42%" },
                  { top: "25%", left: "58%" },
                  { top: "55%", left: "32%" },
                  { top: "65%", left: "62%" },
                ];
                const pos = offsets[idx % offsets.length];

                return (
                  <div
                    key={hex.id}
                    onClick={() => setSelectedHex(hex)}
                    style={{ top: pos.top, left: pos.left }}
                    className="absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group"
                  >
                    {/* 3D Column Bar Extrusion */}
                    <div className="relative flex flex-col items-center">
                      {/* Top Hexagon Surface */}
                      <div
                        style={{ backgroundColor: hex.color }}
                        className={`h-10 w-10 rounded-lg shadow-lg flex items-center justify-center font-mono text-xs font-bold text-white transition-transform ${
                          isSelected ? "ring-4 ring-white scale-125 z-30" : "group-hover:scale-110"
                        }`}
                      >
                        {hex.reportCount}
                      </div>

                      {/* 3D Vertical Pillar Shadow */}
                      <div
                        style={{
                          height: `${hex.hexHeightPx}px`,
                          backgroundColor: hex.color,
                          opacity: 0.65,
                        }}
                        className="w-8 rounded-b-md transition-all duration-300"
                      />

                      {/* Ground Base Glow Ring */}
                      <div
                        style={{ backgroundColor: hex.color }}
                        className="h-3 w-12 rounded-full opacity-40 blur-sm -mt-1"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Map Control Buttons Bottom Right */}
        <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(18, z + 0.5))}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#171817]/90 text-white backdrop-blur-md shadow-md transition hover:bg-[#353833]"
            title="Zoom In"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(8, z - 0.5))}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#171817]/90 text-white backdrop-blur-md shadow-md transition hover:bg-[#353833]"
            title="Zoom Out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#171817]/90 font-mono text-[11px] font-bold text-[#e25a45] backdrop-blur-md shadow-md">
            {zoomLevel.toFixed(1)}x
          </div>
        </div>

        {/* Selected Cluster Details Drawer (Bottom Left Floating) */}
        {selectedHex && (
          <div className="absolute bottom-6 left-6 z-20 w-80 rounded-xl border border-white/20 bg-[#171817]/95 p-4 text-white backdrop-blur-md shadow-xl animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between font-mono text-[11px] text-white/60">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[#e25a45]" /> {selectedHex.category}
              </span>
              <span className="font-bold text-[#e25a45]">Score: {selectedHex.densityScore}/100</span>
            </div>
            <h4 className="mt-1 text-base font-bold tracking-tight text-white">
              {selectedHex.clusterTitle}
            </h4>
            <div className="mt-3 grid grid-cols-2 gap-2 rounded-lg bg-white/5 p-2.5 font-mono text-xs">
              <div>
                <span className="text-white/60 text-[10px]">Aggregated Reports</span>
                <p className="font-bold text-white text-sm">{selectedHex.reportCount} Complaints</p>
              </div>
              <div>
                <span className="text-white/60 text-[10px]">Coordinates</span>
                <p className="font-bold text-white text-xs">{selectedHex.lat}° N, {selectedHex.lng}° E</p>
              </div>
            </div>
            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#e25a45] py-2 text-xs font-semibold text-white shadow transition hover:bg-[#d44833]"
            >
              <span>Issue Executive Resolution Directive</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeospatialCanvas;
