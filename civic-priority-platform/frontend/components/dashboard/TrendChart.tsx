"use client";

import { cn } from "@/lib/utils";

export type TrendPoint = {
  label: string;
  value: number;
};

type TrendChartProps = {
  title?: string;
  description?: string;
  data: TrendPoint[];
  unit?: string;
  loading?: boolean;
  className?: string;
};

const CHART_WIDTH = 640;
const CHART_HEIGHT = 220;
const PADDING_X = 12;
const PADDING_Y = 24;

function getPath(data: TrendPoint[], maxValue: number) {
  if (!data.length) return "";

  const usableWidth = CHART_WIDTH - PADDING_X * 2;
  const usableHeight = CHART_HEIGHT - PADDING_Y * 2;

  return data
    .map((point, index) => {
      const x =
        PADDING_X + (index / Math.max(data.length - 1, 1)) * usableWidth;

      const y =
        CHART_HEIGHT -
        PADDING_Y -
        (point.value / Math.max(maxValue, 1)) * usableHeight;

      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

export default function TrendChart({
  title = "Submission Trends",
  description = "Recent civic issues by reporting period.",
  data,
  unit = "submissions",
  loading = false,
  className,
}: TrendChartProps) {
  const maxValue = Math.max(...data.map((point) => point.value), 1);
  const path = getPath(data, maxValue);

  if (loading) {
    return (
      <section
        aria-label={title}
        className={cn(
          "rounded-xl border border-border bg-card p-5 shadow-sm",
          className,
        )}
      >
        <div className="h-5 w-40 animate-pulse rounded bg-muted" />
        <div className="mt-2 h-4 w-64 animate-pulse rounded bg-muted" />
        <div className="mt-6 h-52 animate-pulse rounded-lg bg-muted/60" />
      </section>
    );
  }

  return (
    <section
      aria-labelledby="trend-chart-heading"
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-sm",
        className,
      )}
    >
      <header>
        <h2
          id="trend-chart-heading"
          className="text-base font-semibold text-foreground"
        >
          {title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </header>

      {!data.length ? (
        <div className="mt-6 flex h-52 items-center justify-center rounded-lg border border-dashed border-border bg-muted/20">
          <p className="text-sm text-muted-foreground">
            No trend data available yet.
          </p>
        </div>
      ) : (
        <div className="mt-6">
          <div className="overflow-x-auto">
            <svg
              viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
              className="h-52 min-w-[520px] w-full"
              role="img"
              aria-label={`${title} showing ${data.length} data points`}
            >
              {[0, 0.5, 1].map((ratio) => {
                const y =
                  CHART_HEIGHT -
                  PADDING_Y -
                  ratio * (CHART_HEIGHT - PADDING_Y * 2);

                return (
                  <line
                    key={ratio}
                    x1={PADDING_X}
                    x2={CHART_WIDTH - PADDING_X}
                    y1={y}
                    y2={y}
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="1"
                  />
                );
              })}

              <path
                d={path}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              />

              {data.map((point, index) => {
                const x =
                  PADDING_X +
                  (index / Math.max(data.length - 1, 1)) *
                    (CHART_WIDTH - PADDING_X * 2);

                const y =
                  CHART_HEIGHT -
                  PADDING_Y -
                  (point.value / Math.max(maxValue, 1)) *
                    (CHART_HEIGHT - PADDING_Y * 2);

                return (
                  <circle
                    key={`${point.label}-${index}`}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="currentColor"
                    className="text-foreground"
                  />
                );
              })}
            </svg>
          </div>

          <div className="mt-2 flex justify-between gap-2 overflow-hidden">
            {data.map((point, index) => (
              <div
                key={`${point.label}-label-${index}`}
                className="min-w-0 text-center"
              >
                <p className="truncate text-[11px] text-muted-foreground">
                  {point.label}
                </p>
                <p className="mt-1 text-xs font-semibold text-foreground">
                  {point.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Values represent processed {unit}; analytical aggregation is
            supplied by the dashboard data source.
          </p>
        </div>
      )}
    </section>
  );
}
