"use client";

import { cn } from "@/lib/utils";

export type PriorityItem = {
  id: string;
  rank: number;
  title: string;
  location: string;
  category: string;
  priorityScore: number;
  severity: "low" | "medium" | "high" | "critical";
  estimatedCost?: string;
  affectedPeople?: number;
  reason?: string;
};

type PriorityCardProps = {
  item: PriorityItem;
  selected?: boolean;
  onSelect?: (item: PriorityItem) => void;
  className?: string;
};

const severityStyles: Record<PriorityItem["severity"], string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-orange-100 text-orange-700",
  critical: "bg-red-100 text-red-700",
};

export default function PriorityCard({
  item,
  selected = false,
  onSelect,
  className,
}: PriorityCardProps) {
  const content = (
    <>
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            "bg-muted text-sm font-bold text-foreground",
          )}
        >
          #{item.rank}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-foreground">
              {item.title}
            </h3>

            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize",
                severityStyles[item.severity],
              )}
            >
              {item.severity}
            </span>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            {item.category} · {item.location}
          </p>
        </div>

        <div className="shrink-0 text-right">
          <p className="text-lg font-bold text-foreground">
            {item.priorityScore}
          </p>
          <p className="text-[11px] text-muted-foreground">Priority</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 sm:grid-cols-3">
        {item.estimatedCost && (
          <div>
            <p className="text-[11px] text-muted-foreground">Est. cost</p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {item.estimatedCost}
            </p>
          </div>
        )}

        {typeof item.affectedPeople === "number" && (
          <div>
            <p className="text-[11px] text-muted-foreground">Affected</p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {item.affectedPeople.toLocaleString("en-IN")}
            </p>
          </div>
        )}

        <div>
          <p className="text-[11px] text-muted-foreground">Decision basis</p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            Impact / cost
          </p>
        </div>
      </div>

      {item.reason && (
        <div className="mt-4 rounded-lg bg-muted/40 px-3 py-2">
          <p className="text-xs leading-5 text-muted-foreground">
            <span className="font-semibold text-foreground">Why ranked: </span>
            {item.reason}
          </p>
        </div>
      )}
    </>
  );

  if (!onSelect) {
    return (
      <article
        className={cn(
          "rounded-xl border border-border bg-card p-5 shadow-sm",
          className,
        )}
      >
        {content}
      </article>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-pressed={selected}
      className={cn(
        "w-full rounded-xl border bg-card p-5 text-left shadow-sm",
        "transition-colors hover:bg-muted/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected ? "border-foreground/30" : "border-border",
        className,
      )}
    >
      {content}
    </button>
  );
}
