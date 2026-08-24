"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { DashboardHotspot } from "@/app/dashboard/page";

type ThemeMeta = Record<DashboardHotspot["theme"], { label: string; fill: string }>;

type DemandHotspotMapProps = {
  hotspots: DashboardHotspot[];
  selectedId: string | null;
  onSelect: (hotspot: DashboardHotspot) => void;
  themeMeta: ThemeMeta;
};

export type DemandHotspotMapHandle = {
  flyTo: (lat: number, lng: number, zoom?: number) => void;
};

const DEFAULT_CENTER: [number, number] = [20.295, 85.825];

function radiusFor(hotspot: DashboardHotspot) {
  const base =
    hotspot.intensity === "high"
      ? 720
      : hotspot.intensity === "medium"
        ? 520
        : 360;
  return base + Math.min(hotspot.submissionCount * 5, 620);
}

// Inner component that can call useMap() and exposes flyTo via ref
function FlyToController({
  mapRef,
}: {
  mapRef: React.MutableRefObject<ReturnType<typeof useMap> | null>;
}) {
  const map = useMap();
  mapRef.current = map;
  return null;
}

const DemandHotspotMap = forwardRef<DemandHotspotMapHandle, DemandHotspotMapProps>(
  function DemandHotspotMap({ hotspots, selectedId, onSelect, themeMeta }, ref) {
    const mapInstanceRef = useRef<ReturnType<typeof useMap> | null>(null);

    useImperativeHandle(ref, () => ({
      flyTo(lat: number, lng: number, zoom = 15) {
        mapInstanceRef.current?.flyTo([lat, lng], zoom, { duration: 1.2 });
      },
    }));

    const center = hotspots[0]
      ? ([hotspots[0].latitude, hotspots[0].longitude] as [number, number])
      : DEFAULT_CENTER;

    return (
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <FlyToController mapRef={mapInstanceRef} />
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {hotspots.map((hotspot) => {
          const meta = themeMeta[hotspot.theme];
          const selected = selectedId === hotspot.id;
          const centerPoint: [number, number] = [
            hotspot.latitude,
            hotspot.longitude,
          ];

          return (
            <div key={hotspot.id}>
              <Circle
                center={centerPoint}
                radius={radiusFor(hotspot)}
                pathOptions={{
                  color: meta.fill,
                  fillColor: meta.fill,
                  fillOpacity: selected ? 0.28 : 0.18,
                  opacity: 0.32,
                  weight: selected ? 2 : 1,
                }}
                eventHandlers={{ click: () => onSelect(hotspot) }}
              />
              <CircleMarker
                center={centerPoint}
                radius={selected ? 14 : hotspot.intensity === "high" ? 11 : 9}
                pathOptions={{
                  color: "#ffffff",
                  fillColor: meta.fill,
                  fillOpacity: 0.92,
                  opacity: 1,
                  weight: selected ? 4 : 2,
                }}
                eventHandlers={{ click: () => onSelect(hotspot) }}
              >
                <Tooltip direction="top" offset={[0, -8]} opacity={1} permanent={selected}>
                  <span className="font-sans text-xs font-bold">{hotspot.ward}</span>
                </Tooltip>
                <Popup>
                  <div className="space-y-1 p-1 font-sans text-xs">
                    <p className="font-bold text-[#171817]">
                      {hotspot.ward} - {meta.label}
                    </p>
                    <p>{hotspot.submissionCount} verified requests</p>
                    <p>{hotspot.affectedPopulation.toLocaleString()} residents affected</p>
                    <button
                      type="button"
                      onClick={() => onSelect(hotspot)}
                      className="mt-2 rounded-md bg-[#171817] px-2 py-1 text-xs font-bold text-white"
                    >
                      View evidence
                    </button>
                  </div>
                </Popup>
              </CircleMarker>
            </div>
          );
        })}
      </MapContainer>
    );
  }
);

export default DemandHotspotMap;

