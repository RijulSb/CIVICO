"use client";

import { cn } from "@/lib/utils";

export type PriorityItem = {
  id: string;
  title: string;
  category: string;
  location: string;
  priorityScore: number;
  supportingReports: number;
  description?: string;
};

type PrioritiesProps = {
  items: PriorityItem[];
  loading?: boolean;
  className?: string;
};

function PrioritySkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
      <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
      <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-muted" />
      <div className="mt-6 h-3 w-1/2 animate-pulse rounded bg-muted" />
    </div>
  );
}

export default function Priorities({
  items,
  loading = false,
  className,
}: PrioritiesProps) {
  return (
    <section
      aria-labelledby="priorities-heading"
      className={cn("w-full", className)}
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Community intelligence
        </p>

        <h1
          id="priorities-heading"
          className="mt-2 text-3xl font-semibold tracking-tight text-foreground"
        >
          Community Priorities
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Understand which development needs are emerging as the most
          significant across communities.
        </p>
      </div>

      {loading ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <PrioritySkeleton key={index} />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border bg-muted/20 px-6 py-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No community priorities available
          </p>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Priorities will appear here once sufficient civic submissions and
            supporting signals have been processed.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.category} · {item.location}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-xl font-bold text-foreground">
                    {item.priorityScore}
                  </p>

                  <p className="text-[11px] text-muted-foreground">
                    Priority score
                  </p>
                </div>
              </div>

              {item.description && (
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              )}

              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">
                  Supported by{" "}
                  <span className="font-semibold text-foreground">
                    {item.supportingReports}
                  </span>{" "}
                  community reports
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
