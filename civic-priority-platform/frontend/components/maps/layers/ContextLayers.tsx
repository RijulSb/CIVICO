"use client";

import { useMemo } from "react";
import { GeoJSON } from "react-leaflet";
import type { FeatureCollection, Geometry } from "geojson";
import type { PathOptions } from "leaflet";

export interface ContextLayerData {
  demographics?: FeatureCollection;
  infrastructure?: FeatureCollection;
  boundaries?: FeatureCollection;
}

interface ContextLayersProps {
  showDemographics?: boolean;
  showInfrastructure?: boolean;
  showBoundaries?: boolean;
  data?: ContextLayerData;
}

const EMPTY_FEATURE_COLLECTION: FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

const DEFAULT_DATA: ContextLayerData = {
  demographics: EMPTY_FEATURE_COLLECTION,
  infrastructure: EMPTY_FEATURE_COLLECTION,
  boundaries: EMPTY_FEATURE_COLLECTION,
};

function getStyle(
  layer: "demographics" | "infrastructure" | "boundaries",
): PathOptions {
  switch (layer) {
    case "demographics":
      return {
        color: "#2563eb",
        weight: 1,
        fillOpacity: 0.18,
      };

    case "infrastructure":
      return {
        color: "#16a34a",
        weight: 1.5,
        fillOpacity: 0.12,
      };

    case "boundaries":
      return {
        color: "#111827",
        weight: 2,
        fillOpacity: 0,
        dashArray: "6 5",
      };

    default:
      return {};
  }
}

function normalizeGeoJSON(data?: FeatureCollection): FeatureCollection {
  return data ?? EMPTY_FEATURE_COLLECTION;
}

export default function ContextLayers({
  showDemographics = false,
  showInfrastructure = false,
  showBoundaries = true,
  data = DEFAULT_DATA,
}: ContextLayersProps) {
  const layers = useMemo(() => {
    return {
      demographics: normalizeGeoJSON(data.demographics),
      infrastructure: normalizeGeoJSON(data.infrastructure),
      boundaries: normalizeGeoJSON(data.boundaries),
    };
  }, [data]);

  return (
    <>
      {showDemographics && (
        <GeoJSON
          key="demographics"
          data={layers.demographics as FeatureCollection<Geometry>}
          style={() => getStyle("demographics")}
        />
      )}

      {showInfrastructure && (
        <GeoJSON
          key="infrastructure"
          data={layers.infrastructure as FeatureCollection<Geometry>}
          style={() => getStyle("infrastructure")}
        />
      )}

      {showBoundaries && (
        <GeoJSON
          key="boundaries"
          data={layers.boundaries as FeatureCollection<Geometry>}
          style={() => getStyle("boundaries")}
        />
      )}
    </>
  );
}
