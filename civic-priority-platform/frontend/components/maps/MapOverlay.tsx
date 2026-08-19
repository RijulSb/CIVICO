"use client";

import { CircleMarker, Popup } from "react-leaflet";

export interface MapIssue {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  category?: string;
  priority?: "high" | "medium" | "low";
}

interface MapOverlayProps {
  issues?: MapIssue[];
}

const priorityRadius = {
  high: 12,
  medium: 9,
  low: 7,
};

export default function MapOverlay({ issues = [] }: MapOverlayProps) {
  return (
    <>
      {issues.map((issue) => {
        const priority = issue.priority ?? "medium";

        return (
          <CircleMarker
            key={issue.id}
            center={[issue.latitude, issue.longitude]}
            radius={priorityRadius[priority]}
            pathOptions={{
              color: "#ffffff",
              weight: 2,
              fillColor:
                priority === "high"
                  ? "#dc2626"
                  : priority === "medium"
                    ? "#f59e0b"
                    : "#2563eb",
              fillOpacity: 0.85,
            }}
          >
            <Popup>
              <div className="min-w-[180px]">
                <p className="font-semibold text-slate-900">{issue.title}</p>

                {issue.category && (
                  <p className="mt-1 text-xs text-slate-500">
                    {issue.category}
                  </p>
                )}

                <p className="mt-2 text-xs font-medium capitalize text-slate-700">
                  Priority: {priority}
                </p>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </>
  );
}
