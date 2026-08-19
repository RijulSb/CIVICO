"use client";

import { CircleMarker, Popup, Tooltip } from "react-leaflet";

import { useCivicMap } from "../MapProvider";
import { getSourceColor, getThemeColor } from "../utils/mapStyles";

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

export function IssueMarker({ issue }: IssueMarkerProps) {
  const { selectIssue } = useCivicMap();

  const color = issue.theme
    ? getThemeColor(issue.theme)
    : getSourceColor(issue.source);

  const handleSelect = () => {
    selectIssue(issue.id);
  };

  return (
    <CircleMarker
      center={[issue.latitude, issue.longitude]}
      radius={7}
      pathOptions={{
        color,
        fillColor: color,
        fillOpacity: 0.75,
        weight: 2,
      }}
      eventHandlers={{
        click: handleSelect,
      }}
    >
      <Tooltip>{issue.title ?? "Civic issue"}</Tooltip>

      <Popup>
        <div className="min-w-[200px] space-y-2">
          <h3 className="font-semibold">{issue.title ?? "Civic issue"}</h3>

          {issue.description && (
            <p className="text-sm text-muted-foreground">{issue.description}</p>
          )}

          <div className="space-y-1 text-xs">
            {issue.theme && (
              <p className="capitalize">
                <strong>Theme:</strong> {issue.theme}
              </p>
            )}

            {issue.source && (
              <p className="capitalize">
                <strong>Source:</strong> {issue.source}
              </p>
            )}

            {issue.timestamp && (
              <p>
                <strong>Reported:</strong> {issue.timestamp}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSelect}
            className="text-sm font-medium underline"
          >
            View details
          </button>
        </div>
      </Popup>
    </CircleMarker>
  );
}
export default IssueMarker;
