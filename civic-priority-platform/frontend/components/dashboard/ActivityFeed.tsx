"use client";

import { cn } from "@/lib/utils";

export type ActivityEvent = {
  id: string;
  type:
    | "submission"
    | "analysis"
    | "priority"
    | "government"
    | "research"
    | "scheme";
  title: string;
  description: string;
  timestamp: string;
  location?: string;
};

type ActivityFeedProps = {
  events: ActivityEvent[];
  loading?: boolean;
  limit?: number;
  className?: string;
};

const eventLabels: Record<ActivityEvent["type"], string> = {
  submission: "Submission",
  analysis: "Analysis",
  priority: "Priority",
  government: "Government",
  research: "Research",
  scheme: "Scheme",
};

const eventStyles: Record<ActivityEvent["type"], string> = {
  submission: "bg-muted text-foreground",
  analysis: "bg-blue-100 text-blue-700",
  priority: "bg-amber-100 text-amber-700",
  government: "bg-emerald-100 text-emerald-700",
  research: "bg-purple-100 text-purple-700",
  scheme: "bg-indigo-100 text-indigo-700",
};

function formatTimestamp(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function ActivitySkeleton() {
  return (
    <div className="flex gap-3 px-1 py-4">
      <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-muted" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-40 animate-pulse rounded bg-muted" />
        <div className="h-3 w-full animate-pulse rounded bg-muted" />
        <div className="h-3 w-24 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}

export default function ActivityFeed({
  events,
  loading = false,
  limit = 8,
  className,
}: ActivityFeedProps) {
  const visibleEvents = events.slice(0, limit);

  return (
    <section
      aria-labelledby="activity-feed-heading"
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-sm",
        className,
      )}
    >
      <header className="mb-2">
        <h2
          id="activity-feed-heading"
          className="text-base font-semibold text-foreground"
        >
          Activity Feed
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Recent changes across civic intelligence and prioritization.
        </p>
      </header>

      {loading ? (
        <div>
          {Array.from({ length: 5 }).map((_, index) => (
            <ActivitySkeleton key={index} />
          ))}
        </div>
      ) : visibleEvents.length === 0 ? (
        <div className="mt-4 rounded-lg border border-dashed border-border bg-muted/20 px-4 py-8 text-center">
          <p className="text-sm font-medium text-foreground">
            No recent activity
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            New submissions and analytical updates will appear here.
          </p>
        </div>
      ) : (
        <ol className="mt-2">
          {visibleEvents.map((event, index) => (
            <li key={event.id} className="relative flex gap-3">
              {index < visibleEvents.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-9 h-[calc(100%-8px)] w-px bg-border"
                />
              )}

              <div
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  eventStyles[event.type],
                )}
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-current" />
              </div>

              <article className="min-w-0 flex-1 pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                      eventStyles[event.type],
                    )}
                  >
                    {eventLabels[event.type]}
                  </span>

                  <time
                    dateTime={event.timestamp}
                    className="text-[11px] text-muted-foreground"
                  >
                    {formatTimestamp(event.timestamp)}
                  </time>
                </div>

                <h3 className="mt-2 text-sm font-medium text-foreground">
                  {event.title}
                </h3>

                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  {event.description}
                </p>

                {event.location && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {event.location}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
