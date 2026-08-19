"use client";

import { Popup } from "react-leaflet";

import { useCivicMap } from "../MapProvider";

export interface ClusterPopupData {
  id: string;
  count: number;
  dominantTheme?: string;
  themes?: string[];
  timeRange?: string;
  priorityScore?: number;
}

interface ClusterPopupProps {
  cluster: ClusterPopupData;
}

export default function ClusterPopup({ cluster }: ClusterPopupProps) {
  const { selectCluster } = useCivicMap();

  return (
    <Popup>
      <div className="min-w-[220px] space-y-3">
        <div>
          <h3 className="font-semibold">Civic hotspot</h3>

          <p className="text-xs text-muted-foreground">
            {cluster.count} reported issue
            {cluster.count === 1 ? "" : "s"}
          </p>
        </div>

        {cluster.dominantTheme && (
          <div className="text-sm">
            <span className="font-medium">Dominant theme</span>

            <p className="capitalize text-muted-foreground">
              {cluster.dominantTheme}
            </p>
          </div>
        )}

        {cluster.themes && cluster.themes.length > 0 && (
          <div className="text-sm">
            <span className="font-medium">Related themes</span>

            <p className="capitalize text-muted-foreground">
              {cluster.themes.join(", ")}
            </p>
          </div>
        )}

        {cluster.timeRange && (
          <div className="text-sm">
            <span className="font-medium">Time range</span>

            <p className="text-muted-foreground">{cluster.timeRange}</p>
          </div>
        )}

        {typeof cluster.priorityScore === "number" && (
          <div className="text-sm">
            <span className="font-medium">Priority score</span>

            <p className="text-muted-foreground">
              {Math.round(cluster.priorityScore * 100)}%
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => selectCluster(cluster.id)}
          className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
        >
          View hotspot details
        </button>
      </div>
    </Popup>
  );
}
