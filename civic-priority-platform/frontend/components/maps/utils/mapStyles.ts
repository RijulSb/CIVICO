import L from "leaflet";

export type CivicTheme =
  | "roads"
  | "water"
  | "schools"
  | "health"
  | "sanitation"
  | "electricity"
  | "housing"
  | "other";

export const THEME_COLORS: Record<CivicTheme, string> = {
  roads: "#ef4444",
  water: "#3b82f6",
  schools: "#8b5cf6",
  health: "#ec4899",
  sanitation: "#f59e0b",
  electricity: "#eab308",
  housing: "#10b981",
  other: "#64748b",
};

export const SOURCE_COLORS = {
  citizen: "#2563eb",
  news: "#7c3aed",
  grievance: "#dc2626",
  other: "#64748b",
};

export const MAP_DEFAULTS = {
  zoom: 12,
  minZoom: 5,
  maxZoom: 19,
  clusterRadius: 45,
  issueVisibleZoom: 15,
};

export const getThemeColor = (theme?: string): string => {
  if (!theme) return THEME_COLORS.other;

  return THEME_COLORS[theme.toLowerCase() as CivicTheme] ?? THEME_COLORS.other;
};

export const getSourceColor = (source?: string): string => {
  if (!source) return SOURCE_COLORS.other;

  return (
    SOURCE_COLORS[source.toLowerCase() as keyof typeof SOURCE_COLORS] ??
    SOURCE_COLORS.other
  );
};

export const createIssueIcon = (theme?: string, source?: string): L.DivIcon => {
  const color = source ? getSourceColor(source) : getThemeColor(theme);

  return L.divIcon({
    className: "civic-issue-marker",
    html: `
      <div
        style="
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          background: ${color};
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        "
      ></div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });
};

export const createClusterIcon = (count: number, theme?: string): L.DivIcon => {
  const color = getThemeColor(theme);

  const size = count >= 100 ? 56 : count >= 50 ? 50 : count >= 20 ? 44 : 38;

  return L.divIcon({
    className: "civic-cluster-marker",
    html: `
      <div
        style="
          width: ${size}px;
          height: ${size}px;
          border-radius: 9999px;
          background: ${color};
          border: 3px solid white;
          box-shadow: 0 3px 10px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 14px;
        "
      >
        ${count}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

export const CLUSTER_STYLE = {
  radius: MAP_DEFAULTS.clusterRadius,
  weight: 3,
  opacity: 1,
};

export const GEOJSON_STYLE = {
  weight: 1,
  opacity: 0.8,
  fillOpacity: 0.15,
};

export const BOUNDARY_STYLE = {
  weight: 2,
  opacity: 0.9,
  fillOpacity: 0.05,
};
