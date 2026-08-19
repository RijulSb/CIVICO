"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Map as LeafletMap } from "leaflet";

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

export type ThemeFilter =
  | "all"
  | "roads"
  | "water"
  | "education"
  | "health"
  | "sanitation"
  | "electricity"
  | "transport";

/**
 * MapTheme is kept as an alias because some map components
 * use MapTheme instead of ThemeFilter.
 */
export type MapTheme = ThemeFilter;

export type TimeRange = "7d" | "30d" | "90d" | "custom";

export type SourceFilter = "all" | "citizen" | "news" | "grievance";

export type IssueSource = Exclude<SourceFilter, "all">;

export interface MapFilters {
  themeFilter: ThemeFilter;
  timeRange: TimeRange;
  sourceFilter: SourceFilter;
}

export interface MapLayers {
  showHotspots: boolean;
  showIssues: boolean;
  showDemographics: boolean;
  showInfrastructure: boolean;
  showBoundaries: boolean;
}

export interface PinLocation {
  lat: number;
  lng: number;
}

interface CivicMapContextValue {
  map: LeafletMap | null;

  filters: MapFilters;
  layers: MapLayers;

  selectedClusterId: string | null;
  selectedIssueId: string | null;

  isPinMode: boolean;
  pinLocation: PinLocation | null;

  setMap: (map: LeafletMap | null) => void;

  setCenter: (lat: number, lng: number, zoom?: number) => void;

  selectCluster: (clusterId: string) => void;
  selectIssue: (issueId: string) => void;
  clearSelection: () => void;

  setPinMode: (enabled: boolean) => void;
  setPinLocation: (location: PinLocation | null) => void;

  updateFilters: (filters: Partial<MapFilters>) => void;
  toggleLayer: (layer: keyof MapLayers) => void;

  resetView: () => void;
}

/* -------------------------------------------------------------------------- */
/*                              DEFAULT STATE                                 */
/* -------------------------------------------------------------------------- */

const DEFAULT_CENTER: [number, number] = [20.2961, 85.8245];
const DEFAULT_ZOOM = 11;

const DEFAULT_FILTERS: MapFilters = {
  themeFilter: "all",
  timeRange: "30d",
  sourceFilter: "all",
};

const DEFAULT_LAYERS: MapLayers = {
  showHotspots: true,
  showIssues: true,
  showDemographics: false,
  showInfrastructure: false,
  showBoundaries: true,
};

/* -------------------------------------------------------------------------- */
/*                                  CONTEXT                                   */
/* -------------------------------------------------------------------------- */

const CivicMapContext = createContext<CivicMapContextValue | null>(null);

/* -------------------------------------------------------------------------- */
/*                                PROVIDER                                    */
/* -------------------------------------------------------------------------- */

interface MapProviderProps {
  children: ReactNode;
}

export function MapProvider({ children }: MapProviderProps) {
  const [map, setMap] = useState<LeafletMap | null>(null);

  const [filters, setFilters] = useState<MapFilters>(DEFAULT_FILTERS);

  const [layers, setLayers] = useState<MapLayers>(DEFAULT_LAYERS);

  const [selectedClusterId, setSelectedClusterId] = useState<string | null>(
    null,
  );

  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);

  const [isPinMode, setIsPinMode] = useState(false);

  const [pinLocation, setPinLocationState] = useState<PinLocation | null>(null);

  /* ---------------------------------------------------------------------- */
  /*                              MAP ACTIONS                               */
  /* ---------------------------------------------------------------------- */

  const setCenter = useCallback(
    (lat: number, lng: number, zoom?: number) => {
      if (!map) return;

      map.flyTo([lat, lng], zoom ?? map.getZoom(), {
        duration: 0.8,
      });
    },
    [map],
  );

  /* ---------------------------------------------------------------------- */
  /*                             SELECTION                                   */
  /* ---------------------------------------------------------------------- */

  const selectCluster = useCallback((clusterId: string) => {
    setSelectedClusterId(clusterId);
    setSelectedIssueId(null);
  }, []);

  const selectIssue = useCallback((issueId: string) => {
    setSelectedIssueId(issueId);
    setSelectedClusterId(null);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedClusterId(null);
    setSelectedIssueId(null);
  }, []);

  /* ---------------------------------------------------------------------- */
  /*                              PIN MODE                                   */
  /* ---------------------------------------------------------------------- */

  const setPinMode = useCallback((enabled: boolean) => {
    setIsPinMode(enabled);

    if (!enabled) {
      setPinLocationState(null);
    }
  }, []);

  const setPinLocation = useCallback((location: PinLocation | null) => {
    setPinLocationState(location);
  }, []);

  /* ---------------------------------------------------------------------- */
  /*                               FILTERS                                   */
  /* ---------------------------------------------------------------------- */

  const updateFilters = useCallback((updates: Partial<MapFilters>) => {
    setFilters((current) => ({
      ...current,
      ...updates,
    }));
  }, []);

  /* ---------------------------------------------------------------------- */
  /*                                LAYERS                                   */
  /* ---------------------------------------------------------------------- */

  const toggleLayer = useCallback((layer: keyof MapLayers) => {
    setLayers((current) => ({
      ...current,
      [layer]: !current[layer],
    }));
  }, []);

  /* ---------------------------------------------------------------------- */
  /*                              RESET VIEW                                 */
  /* ---------------------------------------------------------------------- */

  const resetView = useCallback(() => {
    if (!map) return;

    map.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, {
      duration: 0.8,
    });
  }, [map]);

  /* ---------------------------------------------------------------------- */
  /*                              CONTEXT VALUE                              */
  /* ---------------------------------------------------------------------- */

  const value = useMemo<CivicMapContextValue>(
    () => ({
      map,

      filters,
      layers,

      selectedClusterId,
      selectedIssueId,

      isPinMode,
      pinLocation,

      setMap,

      setCenter,

      selectCluster,
      selectIssue,
      clearSelection,

      setPinMode,
      setPinLocation,

      updateFilters,
      toggleLayer,

      resetView,
    }),
    [
      map,
      filters,
      layers,
      selectedClusterId,
      selectedIssueId,
      isPinMode,
      pinLocation,
      setCenter,
      selectCluster,
      selectIssue,
      clearSelection,
      setPinMode,
      setPinLocation,
      updateFilters,
      toggleLayer,
      resetView,
    ],
  );

  return (
    <CivicMapContext.Provider value={value}>
      {children}
    </CivicMapContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  HOOK                                      */
/* -------------------------------------------------------------------------- */

export function useCivicMap() {
  const context = useContext(CivicMapContext);

  if (!context) {
    throw new Error("useCivicMap must be used inside a MapProvider.");
  }

  return context;
}
