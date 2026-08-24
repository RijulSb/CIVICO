"use client";

import dynamic from "next/dynamic";

import { MapProvider } from "@/components/maps/MapProvider";

const CivicMap = dynamic(() => import("@/components/maps/CivicMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-muted/30">
      <div className="text-sm text-muted-foreground">Loading civic map...</div>
    </div>
  ),
});

export default function ExplorePage() {
  return (
    <main className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <CivicMap />
    </main>
  );
}
