"use client";

import { CircleMarker, Tooltip } from "react-leaflet";

import { useCivicMap } from "../MapProvider";
import { getThemeColor } from "../utils/mapStyles";

export interface ClusterMarkerData {
  id: string;
  latitude: number;
  longitude: number;
  count: number;
  dominantTheme?: string;
  score?: number;
}

interface ClusterMarkerProps {
  cluster: ClusterMarkerData;
}

function getRadius(count: number) {
  if (count >= 100) return 28;
  if (count >= 50) return 23;
  if (count >= 20) return 18;
  if (count >= 10) return 14;

  return 10;
}

export default function ClusterMarker({ cluster }: ClusterMarkerProps) {
  const { selectCluster } = useCivicMap();

  const radius = getRadius(cluster.count);

  const color = getThemeColor(cluster.dominantTheme);

  return (
    <CircleMarker
      center={[cluster.latitude, cluster.longitude]}
      radius={radius}
      pathOptions={{
        color,
        fillColor: color,
        fillOpacity: 0.35,
        weight: 3,
      }}
      eventHandlers={{
        click: () => selectCluster(cluster.id),
      }}
    >
      <Tooltip direction="top">
        <div className="text-sm">
          <strong>{cluster.count}</strong> issues
          {cluster.dominantTheme && (
            <span className="capitalize"> · {cluster.dominantTheme}</span>
          )}
        </div>
      </Tooltip>
    </CircleMarker>
  );
}
