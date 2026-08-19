"use client";

import {
  BarChart3,
  Construction,
  Layers,
  MapPinned,
  MessageSquare,
  Shield,
} from "lucide-react";

import { useCivicMap } from "../MapProvider";

interface LayerOption {
  key:
    | "showHotspots"
    | "showIssues"
    | "showDemographics"
    | "showInfrastructure"
    | "showBoundaries";

  label: string;
  icon: React.ElementType;
}

const LAYER_OPTIONS: LayerOption[] = [
  {
    key: "showHotspots",
    label: "Hotspots",
    icon: MapPinned,
  },
  {
    key: "showIssues",
    label: "Individual issues",
    icon: MessageSquare,
  },
  {
    key: "showDemographics",
    label: "Demographics",
    icon: BarChart3,
  },
  {
    key: "showInfrastructure",
    label: "Infrastructure",
    icon: Construction,
  },
  {
    key: "showBoundaries",
    label: "Boundaries",
    icon: Shield,
  },
];

export default function LayerSelector() {
  const { layers, toggleLayer } = useCivicMap();

  return (
    <div className="absolute left-4 top-4 z-[1000] w-56 rounded-xl border bg-background/95 p-3 shadow-lg backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-2">
        <Layers className="h-4 w-4" />

        <h3 className="text-sm font-semibold">Map layers</h3>
      </div>

      <div className="space-y-1">
        {LAYER_OPTIONS.map((option) => {
          const Icon = option.icon;
          const enabled = layers[option.key];

          return (
            <button
              key={option.key}
              type="button"
              onClick={() => toggleLayer(option.key)}
              aria-pressed={enabled}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                enabled ? "bg-muted font-medium" : "hover:bg-muted/60"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />

              <span className="flex-1">{option.label}</span>

              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  enabled ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
