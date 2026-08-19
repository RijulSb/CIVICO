"use client";

import * as React from "react";
import {
  Layers,
  Database,
  HeartPulse,
  Network,
  GraduationCap,
  Sliders,
  CheckSquare,
  Square,
  Sparkles,
} from "lucide-react";

export interface VectorOverlay {
  id: string;
  name: string;
  category: "Demographics" | "Public Health" | "Infrastructure" | "Education";
  description: string;
  icon: React.ElementType;
  enabled: boolean;
  opacity: number;
  dataPoints: number;
}

export interface MultiLayerGisStudioProps {
  onOverlayToggle?: (id: string, enabled: boolean) => void;
  onOpacityChange?: (id: string, opacity: number) => void;
}

export function MultiLayerGisStudio({
  onOverlayToggle,
  onOpacityChange,
}: MultiLayerGisStudioProps) {
  const [overlays, setOverlays] = React.useState<VectorOverlay[]>([
    {
      id: "layer-census",
      name: "Census & Demographics Data",
      category: "Demographics",
      description: "Population density, income brackets & BPL distribution.",
      icon: Database,
      enabled: true,
      opacity: 80,
      dataPoints: 12450,
    },
    {
      id: "layer-health",
      name: "Disease Outbreak Heatmaps",
      category: "Public Health",
      description: "Waterborne disease clusters & vector-borne risk zones.",
      icon: HeartPulse,
      enabled: true,
      opacity: 90,
      dataPoints: 4820,
    },
    {
      id: "layer-roads",
      name: "Road & Drainage Network",
      category: "Infrastructure",
      description: "Arterial roads, storm drains & sewage culvert maps.",
      icon: Network,
      enabled: false,
      opacity: 70,
      dataPoints: 18900,
    },
    {
      id: "layer-schools",
      name: "School Enrolment Ratios",
      category: "Education",
      description: "Primary school capacity, literacy & student density.",
      icon: GraduationCap,
      enabled: true,
      opacity: 65,
      dataPoints: 3120,
    },
  ]);

  const toggle = (id: string) => {
    setOverlays((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextState = !item.enabled;
          onOverlayToggle?.(id, nextState);
          return { ...item, enabled: nextState };
        }
        return item;
      })
    );
  };

  const handleOpacity = (id: string, val: number) => {
    setOverlays((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          onOpacityChange?.(id, val);
          return { ...item, opacity: val };
        }
        return item;
      })
    );
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm font-sans transition-all duration-300 hover:shadow-md">
      {/* Box Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-black/50 uppercase tracking-widest">
            <Layers className="h-4 w-4 text-black" />
            <span>01 — Multi-Layer GIS Studio</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0a0a0a]">
            Vector Tile Overlays
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Select and blend spatial GIS layers for multi-dimensional analysis
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-mono text-xs font-semibold text-black">
          <Sparkles className="h-3.5 w-3.5 text-black" />
          <span>4 Layers Available</span>
        </div>
      </div>

      {/* Layer List Grid with Generous Spacing */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {overlays.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.id}
              className={`flex flex-col justify-between rounded-xl border p-5 transition-all duration-200 ${
                layer.enabled
                  ? "border-black bg-white shadow-sm"
                  : "border-gray-200 bg-gray-50/60 opacity-80"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggle(layer.id)}
                      className="text-black hover:opacity-75 transition"
                    >
                      {layer.enabled ? (
                        <CheckSquare className="h-5 w-5 text-black" />
                      ) : (
                        <Square className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    <h3 className="text-base font-bold text-[#0a0a0a]">
                      {layer.name}
                    </h3>
                  </div>
                  <Icon className="h-5 w-5 text-gray-500 shrink-0" />
                </div>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {layer.description}
                </p>
              </div>

              {/* Slider for Opacity */}
              {layer.enabled && (
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <Sliders className="h-4 w-4 text-gray-400" />
                  <span className="font-mono text-xs text-gray-500">Opacity:</span>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={layer.opacity}
                    onChange={(e) => handleOpacity(layer.id, parseInt(e.target.value))}
                    className="h-1.5 flex-1 accent-black cursor-pointer"
                  />
                  <span className="font-mono text-xs font-bold text-black min-w-[36px] text-right">
                    {layer.opacity}%
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MultiLayerGisStudio;
