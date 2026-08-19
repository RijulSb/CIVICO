"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { MapProvider, useCivicMap } from "./MapProvider";

import BasemapSelector from "@/components/maps/layers/BaseMapSelector";
import HotspotLayer from "@/components/maps/layers/HotspotLayer";
import IssueLayer from "@/components/maps/layers/IssueLayer";
import ContextLayers from "@/components/maps/layers/ContextLayers";

import MapControls from "@/components/maps/controls/MapControls";
import LayerSelector from "@/components/maps/controls/LayerSelector";

import ClusterDetailPanel from "@/components/maps/panels/ClusterDetailPanel";

import { useMapEvents } from "@/components/maps/utils/useMapEvents";

export interface CivicMapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
}

const DEFAULT_CENTER: [number, number] = [20.2961, 85.8245];

const DEFAULT_ZOOM = 11;

/**
 * Connects the Leaflet map instance to MapProvider.
 */
function MapInstanceBridge() {
  const map = useMap();
  const { setMap } = useCivicMap();

  useEffect(() => {
    setMap(map);

    return () => {
      setMap(null);
    };
  }, [map, setMap]);

  return null;
}

/**
 * Connects Leaflet map events to the application's
 * map interaction logic.
 */
function MapInteractionBridge() {
  useMapEvents();

  return null;
}

/**
 * Renders all map functionality.
 *
 * Visibility is controlled through MapProvider's
 * `layers` state rather than individual properties.
 */
function MapContent() {
  const { layers } = useCivicMap();

  return (
    <>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {layers.showHotspots && <HotspotLayer />}

      {layers.showIssues && <IssueLayer />}

      <ContextLayers />

      <MapControls />

      <LayerSelector />

      <BasemapSelector />

      <ClusterDetailPanel />

      <MapInstanceBridge />

      <MapInteractionBridge />
    </>
  );
}

/**
 * Keeps the Leaflet viewport synchronized with
 * the initial/current CivicMap props.
 */
interface MapViewportProps {
  center: [number, number];
  zoom: number;
}

function MapViewport({ center, zoom }: MapViewportProps) {
  const map = useMap();

  useEffect(() => {
    const currentCenter = map.getCenter();
    const currentZoom = map.getZoom();

    const centerChanged =
      Math.abs(currentCenter.lat - center[0]) > 0.0001 ||
      Math.abs(currentCenter.lng - center[1]) > 0.0001;

    const zoomChanged = currentZoom !== zoom;

    if (centerChanged || zoomChanged) {
      map.setView(center, zoom, {
        animate: true,
      });
    }
  }, [center, zoom, map]);

  return null;
}

/**
 * Main CivicMap component.
 */
export default function CivicMap({
  center = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM,
  className = "",
}: CivicMapProps) {
  return (
    <div
      className={`relative h-full min-h-[500px] w-full overflow-hidden rounded-xl ${className}`}
    >
      <MapProvider>
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          className="h-full min-h-[500px] w-full"
        >
          <MapViewport center={center} zoom={zoom} />

          <MapContent />
        </MapContainer>
      </MapProvider>
    </div>
  );
}
