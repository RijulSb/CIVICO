"use client";

/**
 * LoadingSpinner — spinning indicator with consistent sizing/color across
 * the app, plus SkeletonList, extracted from the skeleton rows page.tsx
 * was hand-rolling inline. Both are pure presentation — no fetch logic,
 * no timers; the parent decides when to render them.
 */

import * as React from "react";
import { Loader2 } from "lucide-react";

export type SpinnerSize = "sm" | "md" | "lg";

export interface LoadingSpinnerProps {
  size?: SpinnerSize;
  /** Visible caption under/beside the spinner. Omit for a bare icon with an sr-only label. */
  label?: string;
  /** "inline": spinner + label side by side, for buttons/rows.
   *  "block": centered and stacked with padding, for a whole empty section. */
  layout?: "inline" | "block";
  className?: string;
}

const SIZE_CLASS: Record<SpinnerSize, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-9 w-9",
};

export function LoadingSpinner({
  size = "md",
  label,
  layout = "inline",
  className = "",
}: LoadingSpinnerProps) {
  const icon = (
    <Loader2
      className={`animate-spin text-[#1B2A4A] ${SIZE_CLASS[size]}`}
      aria-hidden="true"
    />
  );

  const wrapperClass =
    layout === "block"
      ? `flex flex-col items-center justify-center gap-2 py-10 ${className}`
      : `inline-flex items-center gap-2 ${className}`;

  return (
    <div role="status" aria-live="polite" className={wrapperClass}>
      {icon}
      {label ? (
        <span className="text-sm text-slate-500">{label}</span>
      ) : (
        <span className="sr-only">Loading</span>
      )}
    </div>
  );
}

// --- SkeletonList ---------------------------------------------------------
//
// Placeholder rows shown while real data loads (e.g. the submissions list
// before the first GET /submissions resolves). Purely visual — aria-hidden
// because the LoadingSpinner (or a wrapping role="status") already
// announces the loading state; duplicate announcements are noise.

export interface SkeletonListProps {
  rows?: number;
  /** Tailwind height class for each row, e.g. "h-14". */
  rowHeight?: string;
  className?: string;
}

export function SkeletonList({
  rows = 3,
  rowHeight = "h-14",
  className = "",
}: SkeletonListProps) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse rounded-md bg-slate-100 ${rowHeight}`}
        />
      ))}
    </div>
  );
}

export default LoadingSpinner;
