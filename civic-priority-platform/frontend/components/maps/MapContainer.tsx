"use client";

import type { ReactNode } from "react";

interface MapContainerProps {
  children: ReactNode;
  className?: string;
}

export default function MapContainer({
  children,
  className = "",
}: MapContainerProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}
