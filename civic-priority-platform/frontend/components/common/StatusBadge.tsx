"use client";

/**
 * StatusBadge — small pill for showing state (processing, funded, high
 * priority, error, etc). Generalized from the inline badge in page.tsx so
 * /rankings and /portfolio can reuse the same visual language instead of
 * each page inventing its own.
 *
 * Pure presentational — no polling, no backend logic. The parent decides
 * which tone applies to which piece of data.
 */

import * as React from "react";

export type StatusTone = "neutral" | "info" | "success" | "warning" | "error";

export interface StatusBadgeProps {
  label: string;
  tone?: StatusTone;
  /** Small pulsing dot — use for states that are actively changing (e.g.
   * "processing" while classification runs), not for static outcomes. */
  pulse?: boolean;
  size?: "sm" | "md";
  className?: string;
}

const TONE_BG: Record<StatusTone, string> = {
  neutral: "bg-slate-100 text-slate-600",
  info: "bg-[#E0A32C]/15 text-[#8a6414]",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  error: "bg-red-50 text-red-700",
};

const TONE_DOT: Record<StatusTone, string> = {
  neutral: "bg-slate-400",
  info: "bg-[#E0A32C]",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
};

export function StatusBadge({
  label,
  tone = "neutral",
  pulse = false,
  size = "md",
  className = "",
}: StatusBadgeProps) {
  const padding =
    size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs";

  return (
    <span
      // A pulsing badge represents live-changing state, so it's announced
      // as a status region; a static outcome badge doesn't need that.
      role={pulse ? "status" : undefined}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full font-medium ${padding} ${TONE_BG[tone]} ${className}`}
    >
      {pulse && (
        <span
          className={`h-1.5 w-1.5 animate-pulse rounded-full ${TONE_DOT[tone]}`}
          aria-hidden="true"
        />
      )}
      {label}
    </span>
  );
}

/**
 * SubmissionStatusBadge — thin preset over StatusBadge for the specific
 * "processing" / "classified" / "failed" states used by the submission
 * pipeline (matches backend/app/models/submission.py). Kept separate from
 * the generic StatusBadge so other pages aren't forced into this exact
 * three-state vocabulary.
 */
export type SubmissionStatus = "processing" | "classified" | "failed";

export function SubmissionStatusBadge({
  status,
  theme,
}: {
  status: SubmissionStatus;
  theme?: string | null;
}) {
  if (status === "processing")
    return <StatusBadge label="Processing" tone="info" pulse />;
  if (status === "failed")
    return <StatusBadge label="Retry needed" tone="error" />;
  return <StatusBadge label={theme ?? "Classified"} tone="success" />;
}

export default StatusBadge;
