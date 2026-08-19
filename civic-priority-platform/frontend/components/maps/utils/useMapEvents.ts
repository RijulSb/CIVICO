"use client";

import { useCallback, useEffect } from "react";
import { useMap, useMapEvents as useLeafletMapEvents } from "react-leaflet";
import type { LeafletMouseEvent } from "leaflet";

import { useCivicMap } from "../MapProvider";

export function useMapEvents() {
  const map = useMap();

  const { isPinMode, setPinLocation, clearSelection } = useCivicMap();

  const handleMapClick = useCallback(
    (event: LeafletMouseEvent) => {
      if (!isPinMode) return;

      setPinLocation({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      });
    },
    [isPinMode, setPinLocation],
  );

  useLeafletMapEvents({
    click: handleMapClick,
  });

  useEffect(() => {
    const handleMoveEnd = () => {
      // Reserved for future viewport-based API loading.
      // Backend requests can be triggered here once
      // dynamic map querying is connected.
    };

    const handleZoomEnd = () => {
      // Reserved for zoom-dependent rendering.
      // IssueLayer can later use this to switch between
      // clustered and individual issue rendering.
    };

    map.on("moveend", handleMoveEnd);
    map.on("zoomend", handleZoomEnd);

    return () => {
      map.off("moveend", handleMoveEnd);
      map.off("zoomend", handleZoomEnd);
    };
  }, [map]);

  const flyToLocation = useCallback(
    (lat: number, lng: number, zoom = 15) => {
      map.flyTo([lat, lng], zoom, {
        duration: 0.8,
      });
    },
    [map],
  );

  const resetMap = useCallback(
    (center: [number, number], zoom: number) => {
      clearSelection();

      map.flyTo(center, zoom, {
        duration: 0.8,
      });
    },
    [map, clearSelection],
  );

  return {
    map,
    flyToLocation,
    resetMap,
  };
}
