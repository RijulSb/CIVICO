"use client";

import { cn } from "@/lib/utils";

export type RecentSubmission = {
  id: string;
  title: string;
  category: string;
  location: string;
  severity: "low" | "medium" | "high" | "critical";
  estimatedCost?: string;
  priorityScore?: number;
  submittedAt: string;
};

type RecentSubmissionsProps = {
  submissions: RecentSubmission[];
  loading?: boolean;
  onSelect?: (submission: RecentSubmission) => void;
  className?: string;
};

const severityStyles: Record<RecentSubmission["severity"], string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-orange-100 text-orange-700",
  critical: "bg-red-100 text-red-700",
};

function SubmissionSkeleton() {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border p-4 last:border-0">
      <div className="min-w-0 flex-1 space-y-2">
        <div className="h-4 w-48 animate-pulse rounded bg-muted" />
        <div className="h-3 w-32 animate-pulse rounded bg-muted" />
      </div>
      <div className="h-6 w-16 animate-pulse rounded bg-muted" />
    </div>
  );
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function RecentSubmissions({
  submissions,
  loading = false,
  onSelect,
  className,
}: RecentSubmissionsProps) {
  return (
    <section
      aria-labelledby="recent-submissions-heading"
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      <header className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <h2
            id="recent-submissions-heading"
            className="text-base font-semibold text-foreground"
          >
            Recent Submissions
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Latest civic problems entering the decision pipeline.
          </p>
        </div>

        <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
          {loading ? "Loading" : `${submissions.length} recent`}
        </span>
      </header>

      <div>
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <SubmissionSkeleton key={index} />
          ))
        ) : submissions.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <p className="text-sm font-medium text-foreground">
              No recent submissions
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              New processed citizen issues will appear here.
            </p>
          </div>
        ) : (
          submissions.map((submission) => (
            <button
              key={submission.id}
              type="button"
              onClick={() => onSelect?.(submission)}
              disabled={!onSelect}
              className={cn(
                "flex w-full items-center gap-4 border-b border-border p-4 text-left last:border-0",
                "transition-colors hover:bg-muted/40",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                !onSelect && "cursor-default",
              )}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate text-sm font-medium text-foreground">
                    {submission.title}
                  </p>

                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize",
                      severityStyles[submission.severity],
                    )}
                  >
                    {submission.severity}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span>{submission.category}</span>
                  <span>{submission.location}</span>
                  <span>{formatDate(submission.submittedAt)}</span>
                </div>
              </div>

              <div className="shrink-0 text-right">
                {submission.estimatedCost && (
                  <p className="text-sm font-semibold text-foreground">
                    {submission.estimatedCost}
                  </p>
                )}

                {typeof submission.priorityScore === "number" && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Priority {submission.priorityScore}
                  </p>
                )}
              </div>
            </button>
          ))
        )}
      </div>
    </section>
  );
}
