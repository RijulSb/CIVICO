"use client";

import dynamic from "next/dynamic";
import {
  Activity,
  MapPin,
  MessageSquareText,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

const CivicMap = dynamic(() => import("@/components/maps/CivicMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#f4f3ef]">
      <div className="rounded-lg border border-[#171817]/15 bg-white px-4 py-3 text-sm font-semibold text-[#171817] shadow-sm">
        Loading Khordha civic map...
      </div>
    </div>
  ),
});

const MAP_METRICS = [
  { label: "Active reports", value: "145", icon: MessageSquareText },
  { label: "DBSCAN hotspots", value: "08", icon: RadioTower },
  { label: "Wards covered", value: "12", icon: MapPin },
  { label: "Feedback loop", value: "Live", icon: ShieldCheck },
];

export default function MapsPage() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#eeede9] text-[#171817]">
      <section className="grid min-h-[calc(100vh-4rem)] grid-rows-[auto_1fr]">
        <div className="relative z-20 border-b border-[#171817]/15 bg-white/95 px-4 py-3 shadow-sm backdrop-blur md:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#e25a45]">
                <Activity className="h-3.5 w-3.5" />
                <span>Khordha Issue Location & Feedback Console</span>
              </div>
              <h1 className="mt-1 text-xl font-black tracking-tight md:text-2xl">
                Locate civic issues, inspect demand hotspots, and close the citizen feedback loop.
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:min-w-[520px]">
              {MAP_METRICS.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-[#171817]/15 bg-[#f8f7f3] px-3 py-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-[#171817]/65">
                        {metric.label}
                      </span>
                      <Icon className="h-3.5 w-3.5 text-[#e25a45]" />
                    </div>
                    <p className="mt-1 font-mono text-lg font-black">{metric.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative min-h-[640px]">
          <CivicMap className="rounded-none" />
        </div>
      </section>
    </main>
  );
}
