"use client";

import { cn } from "@/lib/utils";

export type DashboardStat = {
  id: string;
  label: string;
  value: string;
  description?: string;
  trend?: {
    value: string;
    direction: "up" | "down" | "neutral";
  };
  emphasis?: "default" | "positive" | "warning" | "critical";
};

type DashboardStatsProps = {
  stats: DashboardStat[];
  loading?: boolean;
  className?: string;
};

const emphasisStyles: Record<NonNullable<DashboardStat["emphasis"]>, string> = {
  default: "border-border bg-card",
  positive: "border-border bg-card",
  warning: "border-amber-200 bg-amber-50/40",
  critical: "border-red-200 bg-red-50/40",
};

const trendStyles = {
  up: "text-emerald-600",
  down: "text-red-600",
  neutral: "text-muted-foreground",
};

function StatSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="h-4 w-28 animate-pulse rounded bg-muted" />
      <div className="mt-3 h-8 w-24 animate-pulse rounded bg-muted" />
      <div className="mt-3 h-3 w-36 animate-pulse rounded bg-muted" />
    </div>
  );
}

export default function DashboardStats({
  stats,
  loading = false,
  className,
}: DashboardStatsProps) {
  if (loading) {
    return (
      <section
        aria-label="Dashboard statistics"
        className={cn(
          "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
          className,
        )}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <StatSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (!stats.length) {
    return (
      <section
        aria-label="Dashboard statistics"
        className={cn(
          "rounded-xl border border-dashed border-border bg-muted/20 p-6",
          className,
        )}
      >
        <p className="text-sm font-medium text-foreground">
          No dashboard statistics available
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Statistics will appear when processed civic submissions are available.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-label="Dashboard statistics"
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => {
        const emphasis = stat.emphasis ?? "default";

        return (
          <article
            key={stat.id}
            className={cn(
              "rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md",
              emphasisStyles[emphasis],
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>

              {stat.trend && (
                <span
                  className={cn(
                    "text-xs font-semibold",
                    trendStyles[stat.trend.direction],
                  )}
                >
                  {stat.trend.value}
                </span>
              )}
            </div>

            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              {stat.value}
            </p>

            {stat.description && (
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {stat.description}
              </p>
            )}
          </article>
        );
      })}
    </section>
  );
}
