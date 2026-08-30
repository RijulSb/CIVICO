import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type ProjectMarker = {
  id?: string;
  latitude?: number;
  longitude?: number;
  status?: string;
  title?: string;
  wardName?: string;
  ward?: string;
  estimatedCost?: number;
};

interface WardCoverageMapProps {
  projects: ProjectMarker[];
  wards?: unknown[];
}

export default function WardCoverageMap({ projects }: WardCoverageMapProps) {
  return (
    <div className="relative z-0 h-72 w-full overflow-hidden rounded-xl border border-slate-200">
      <MapContainer center={[20.28, 85.8]} zoom={11} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {projects.map((project, index) => {
          const lat = project.latitude ?? 20.25 + (index % 4) * 0.03;
          const lng = project.longitude ?? 85.75 + Math.floor(index / 4) * 0.04;
          const isSelected = project.status === "selected" || index < 5;
          return (
            <CircleMarker
              key={project.id ?? index}
              center={[lat, lng]}
              radius={isSelected ? 16 : 10}
              pathOptions={{
                color: isSelected ? "#10b981" : "#64748b",
                fillColor: isSelected ? "#10b981" : "#94a3b8",
                fillOpacity: isSelected ? 0.7 : 0.3,
                weight: 2,
              }}
            >
              <Popup>
                <div className="space-y-1 p-1 font-sans text-xs">
                  <div className="font-bold text-[#171817]">{project.title ?? "Civic project"}</div>
                  <div className="font-mono text-[10px] text-slate-600">Ward: {project.wardName ?? project.ward ?? "Khordha"}</div>
                  <div className="font-mono text-[10px] font-bold text-emerald-700">
                    Status: {isSelected ? `SELECTED (Priority #${index + 1})` : "EXCLUDED"}
                  </div>
                  <div className="font-mono text-[10px] text-slate-500">
                    Cost: ₹{((project.estimatedCost ?? 0) / 1e7).toFixed(1)} Cr
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
