"use client";

import { CircleMarker, LayerGroup, Popup, Tooltip } from "react-leaflet";

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

function getHotspotRadius(count: number) {
  if (count >= 100) return 24;
  if (count >= 50) return 19;
  if (count >= 20) return 15;
  if (count >= 10) return 11;
  return 8;
}

function getHotspotColor(score = 0) {
  if (score >= 0.8) return "#dc2626";
  if (score >= 0.6) return "#ea580c";
  if (score >= 0.4) return "#f59e0b";
  return "#2563eb";
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
        const radius = getHotspotRadius(hotspot.count);
        const color = getHotspotColor(hotspot.score);

        return (
          <CircleMarker
            key={hotspot.id}
            center={[hotspot.latitude, hotspot.longitude]}
            radius={radius}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: 0.3,
              weight: 2,
            }}
            eventHandlers={{
              click: () => {
                selectCluster(hotspot.id);
              },
            }}
          >
            <Tooltip direction="top" offset={[0, -radius]}>
              <div className="space-y-1 text-sm">
                <p className="font-semibold">
                  {hotspot.label ?? "Civic hotspot"}
                </p>

                <p>
                  {hotspot.count} reported issue
                  {hotspot.count === 1 ? "" : "s"}
                </p>

                {hotspot.dominantTheme && (
                  <p className="capitalize">Theme: {hotspot.dominantTheme}</p>
                )}
              </div>
            </Tooltip>

            <Popup>
              <div className="min-w-[180px] space-y-2">
                <h3 className="font-semibold">
                  {hotspot.label ?? "Civic hotspot"}
                </h3>

                <div className="text-sm">
                  <p>
                    <strong>{hotspot.count}</strong> issues
                  </p>

                  {hotspot.dominantTheme && (
                    <p className="capitalize">
                      Dominant theme: {hotspot.dominantTheme}
                    </p>
                  )}

                  {typeof hotspot.score === "number" && (
                    <p>Priority score: {Math.round(hotspot.score * 100)}%</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => selectCluster(hotspot.id)}
                  className="text-sm font-medium underline"
                >
                  View hotspot details
                </button>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </LayerGroup>
  );
}
