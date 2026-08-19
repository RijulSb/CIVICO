"use client";

import {
  ArrowLeft,
  ExternalLink,
  FileText,
  MapPin,
  Users,
  X,
} from "lucide-react";

import { useCivicMap } from "../MapProvider";
import TimelineChart from "@/components/maps/panels/TimelineChart";

export interface ClusterDetail {
  id: string;
  title?: string;
  totalIssues: number;
  dominantTheme?: string;
  themes?: string[];
  timeRange?: string;
  priorityScore?: number;
  impactEstimate?: string;
  affectedPopulation?: number;
  timeline?: {
    date: string;
    count: number;
    theme?: string;
  }[];
  submissions?: {
    id: string;
    text: string;
    source?: string;
    timestamp?: string;
  }[];
}

interface ClusterDetailPanelProps {
  cluster?: ClusterDetail | null;
  onClose?: () => void;
}

export default function ClusterDetailPanel({
  cluster,
  onClose,
}: ClusterDetailPanelProps) {
  const { selectedClusterId, clearSelection } = useCivicMap();

  if (!selectedClusterId || !cluster) {
    return null;
  }

  const closePanel = () => {
    clearSelection();
    onClose?.();
  };

  return (
    <aside className="absolute right-0 top-0 z-[1100] flex h-full w-full max-w-md flex-col border-l bg-background shadow-xl">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />

          <div>
            <h2 className="font-semibold">
              {cluster.title ?? "Hotspot details"}
            </h2>

            <p className="text-xs text-muted-foreground">
              {cluster.totalIssues} reported issues
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={closePanel}
          aria-label="Close hotspot details"
          className="rounded-md p-2 hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Issues" value={cluster.totalIssues} />

          <StatCard
            label="Priority"
            value={
              typeof cluster.priorityScore === "number"
                ? `${Math.round(cluster.priorityScore * 100)}%`
                : "—"
            }
          />

          <StatCard label="Impact" value={cluster.impactEstimate ?? "—"} />

          <StatCard
            label="Affected"
            value={
              cluster.affectedPopulation
                ? cluster.affectedPopulation.toLocaleString()
                : "—"
            }
          />
        </div>

        <section className="mt-6 space-y-3">
          <SectionTitle title="Issue profile" />

          {cluster.dominantTheme && (
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">Dominant theme</p>

              <p className="mt-1 font-medium capitalize">
                {cluster.dominantTheme}
              </p>
            </div>
          )}

          {cluster.timeRange && (
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">Time range</p>

              <p className="mt-1 font-medium">{cluster.timeRange}</p>
            </div>
          )}

          {cluster.themes && cluster.themes.length > 0 && (
            <div className="rounded-lg border p-3">
              <p className="mb-2 text-xs text-muted-foreground">
                Related themes
              </p>

              <div className="flex flex-wrap gap-2">
                {cluster.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs capitalize"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {cluster.timeline && cluster.timeline.length > 0 && (
          <section className="mt-6 space-y-3">
            <SectionTitle title="Issue trend" />

            <TimelineChart data={cluster.timeline} />
          </section>
        )}

        {cluster.submissions && cluster.submissions.length > 0 && (
          <section className="mt-6 space-y-3">
            <SectionTitle title="Representative submissions" />

            <div className="space-y-3">
              {cluster.submissions.map((submission) => (
                <article key={submission.id} className="rounded-lg border p-3">
                  <p className="text-sm">{submission.text}</p>

                  <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
                    {submission.source && (
                      <span className="capitalize">{submission.source}</span>
                    )}

                    {submission.timestamp && (
                      <span>{submission.timestamp}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="border-t p-4">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <FileText className="h-4 w-4" />
            Export report
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            Create proposal
          </button>
        </div>
      </div>
    </aside>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>

      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h3 className="text-sm font-semibold">{title}</h3>;
}
