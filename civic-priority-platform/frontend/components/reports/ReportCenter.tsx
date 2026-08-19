"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFeedback } from "@/components/feedback/FeedbackHub";
// import { LineChart, BarChart } from "@/components/ui/chart"; // or Recharts

const reportFormSchema = z.object({
  areaId: z.string().min(1, "Area is required"),
  period: z.enum(["7d", "30d", "90d", "custom"]),
  reportType: z.enum(["summary", "theme", "hotspot", "portfolio"]),
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
});

type ReportFormValues = z.infer<typeof reportFormSchema>;

type ReportSnapshot = {
  id: string;
  areaName: string;
  periodLabel: string;
  reportType: "summary" | "theme" | "hotspot" | "portfolio";
  totalComplaints: number;
  topThemes: { theme: string; count: number }[];
  topHotspots: { name: string; theme: string; count: number }[];
  trendSeries: { date: string; count: number }[];
};

type ExportJobStatus = "idle" | "pending" | "ready" | "failed";

export default function ReportCenter() {
  const { showSuccess, showError, showInfo } = useFeedback();

  const [report, setReport] = useState<ReportSnapshot | null>(null);
  const [loadingReport, setLoadingReport] = useState(false);

  const [exportStatus, setExportStatus] = useState<ExportJobStatus>("idle");
  const [exportFormat, setExportFormat] = useState<
    "pdf" | "csv" | "json" | null
  >(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const form = useForm<ReportFormValues>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      areaId: "",
      period: "30d",
      reportType: "summary",
      fromDate: "",
      toDate: "",
    },
  });

  const areaId = form.watch("areaId");
  const period = form.watch("period");

  // Simple rule: show date pickers only for "custom"
  const isCustomPeriod = period === "custom";

  async function onGenerateReport(data: ReportFormValues) {
    setLoadingReport(true);
    setReport(null);
    setExportStatus("idle");
    setDownloadUrl(null);

    try {
      const res = await fetch("/api/reports/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to load report");
      }

      const snapshot: ReportSnapshot = await res.json();
      setReport(snapshot);
      showSuccess("Report generated successfully.");
    } catch (e) {
      showError("Failed to generate report. Please try again.");
      console.error(e);
    } finally {
      setLoadingReport(false);
    }
  }

  async function requestExport(format: "pdf" | "csv" | "json") {
    if (!report) {
      showError("Generate a report before exporting.");
      return;
    }

    setExportFormat(format);
    setExportStatus("pending");
    setDownloadUrl(null);

    try {
      const res = await fetch("/api/reports/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportId: report.id,
          format,
          // You can also pass areaId/period/reportType again if your backend prefers.
        }),
      });

      if (!res.ok) {
        throw new Error("Export request failed");
      }

      const { jobId } = await res.json();

      showInfo("Export started. We’ll notify you when it’s ready.");

      // Simple polling; replace with WebSocket if you have it.
      let attempts = 0;
      const maxAttempts = 60; // e.g., 30 seconds with 500ms interval
      const poll = async () => {
        attempts += 1;
        const statusRes = await fetch(`/api/reports/export/${jobId}/status`);
        const statusData = await statusRes.json();

        if (statusData.status === "completed") {
          setExportStatus("ready");
          setDownloadUrl(statusData.downloadUrl);
          showSuccess(
            `Your ${format.toUpperCase()} report is ready to download.`,
          );
          return;
        }

        if (statusData.status === "failed") {
          setExportStatus("failed");
          showError("Export failed. Please try again.");
          return;
        }

        if (attempts < maxAttempts) {
          setTimeout(poll, 500);
        } else {
          setExportStatus("failed");
          showError("Export is taking too long. Please try again later.");
        }
      };

      poll();
    } catch (e) {
      setExportStatus("failed");
      showError("Export request failed. Please try again.");
      console.error(e);
    }
  }

  async function onSubmitReportFeedback(payload: {
    rating: "yes" | "no";
    comment?: string;
  }) {
    if (!report) return;
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetType: "report",
          targetId: report.id,
          rating: payload.rating,
          comment: payload.comment,
        }),
      });

      if (!res.ok) throw new Error("Feedback submit failed");

      showSuccess("Thanks! Your feedback has been recorded.");
    } catch {
      showError("Failed to send feedback. Please try again.");
    }
  }

  return (
    <div className="space-y-6">
      {/* 1. Report configuration form */}
      <Card>
        <CardHeader>
          <CardTitle>Configure Report</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onGenerateReport)}
            className="grid gap-4 md:grid-cols-4"
          >
            <div className="md:col-span-1">
              <label className="mb-1 block text-sm">Area</label>
              <Controller
                name="areaId"
                control={form.control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Populate from your areas/constituencies */}
                      <SelectItem value="area-1">Ward 1</SelectItem>
                      <SelectItem value="area-2">Ward 2</SelectItem>
                      <SelectItem value="area-3">Ward 3</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {form.formState.errors.areaId && (
                <p className="mt-1 text-xs text-red-600">
                  {form.formState.errors.areaId.message}
                </p>
              )}
            </div>

            <div className="md:col-span-1">
              <label className="mb-1 block text-sm">Period</label>
              <Controller
                name="period"
                control={form.control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="90d">Last 90 days</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="md:col-span-1">
              <label className="mb-1 block text-sm">Report Type</label>
              <Controller
                name="reportType"
                control={form.control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="summary">Summary</SelectItem>
                      <SelectItem value="theme">Theme-wise</SelectItem>
                      <SelectItem value="hotspot">Hotspot-wise</SelectItem>
                      <SelectItem value="portfolio">
                        Portfolio Proposal
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="flex items-end">
              <Button type="submit" disabled={loadingReport}>
                {loadingReport ? "Generating..." : "Generate Preview"}
              </Button>
            </div>

            {isCustomPeriod && (
              <>
                <div>
                  <label className="mb-1 block text-sm">From</label>
                  <input
                    type="date"
                    className="w-full rounded-md border px-2 py-1"
                    {...form.register("fromDate")}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm">To</label>
                  <input
                    type="date"
                    className="w-full rounded-md border px-2 py-1"
                    {...form.register("toDate")}
                  />
                </div>
              </>
            )}
          </form>
        </CardContent>
      </Card>

      {/* 2. Report preview card */}
      {loadingReport && (
        <Card>
          <CardContent className="flex items-center justify-center p-8">
            <p>Generating report…</p>
          </CardContent>
        </Card>
      )}

      {!loadingReport && report && (
        <Card>
          <CardHeader>
            <CardTitle>
              {report.areaName} – {report.periodLabel} ({report.reportType})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <StatBlock
                label="Total Complaints"
                value={report.totalComplaints}
              />
              <StatBlock
                label="Top Theme"
                value={report.topThemes[0]?.theme ?? "—"}
                sub={report.topThemes[0]?.count.toString()}
              />
              <StatBlock
                label="Top Hotspot"
                value={report.topHotspots[0]?.name ?? "—"}
                sub={`${report.topHotspots[0]?.count} issues`}
              />
            </div>

            {/* Simple trend chart placeholder */}
            <div>
              <h4 className="mb-2 text-sm font-medium">Trend (last period)</h4>
              <div className="h-40 rounded-md border bg-muted/30 p-4">
                {/* Replace with real chart component */}
                <p className="text-sm text-muted-foreground">
                  Trend chart goes here (e.g., Recharts line/bar).
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-sm font-medium">Top Themes</h4>
                <ul className="space-y-1 text-sm">
                  {report.topThemes.map((t) => (
                    <li key={t.theme} className="flex justify-between">
                      <span>{t.theme}</span>
                      <span className="font-medium">{t.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-medium">Top Hotspots</h4>
                <ul className="space-y-1 text-sm">
                  {report.topHotspots.map((h) => (
                    <li key={h.name} className="flex justify-between">
                      <span>{h.name}</span>
                      <span className="font-medium">
                        {h.count} ({h.theme})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Export controls */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm">Export:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => requestExport("pdf")}
                disabled={exportStatus === "pending"}
              >
                PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => requestExport("csv")}
                disabled={exportStatus === "pending"}
              >
                CSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => requestExport("json")}
                disabled={exportStatus === "pending"}
              >
                JSON
              </Button>

              {exportStatus === "pending" && (
                <span className="text-sm text-muted-foreground">
                  Preparing {exportFormat?.toUpperCase()} export…
                </span>
              )}

              {exportStatus === "ready" && downloadUrl && (
                <a
                  href={downloadUrl}
                  className="text-sm font-medium underline"
                  download
                >
                  Download {exportFormat?.toUpperCase()}
                </a>
              )}

              {exportStatus === "failed" && (
                <span className="text-sm text-red-600">
                  Export failed. Try again.
                </span>
              )}
            </div>

            {/* 4. Quick feedback on report */}
            <ReportFeedbackCard onSubmit={onSubmitReportFeedback} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function StatBlock({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="rounded-md border p-4">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {sub && <div className="text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}

function ReportFeedbackCard({
  onSubmit,
}: {
  onSubmit: (payload: { rating: "yes" | "no"; comment?: string }) => void;
}) {
  const [rating, setRating] = useState<"yes" | "no" | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!rating) return;
    setLoading(true);
    await onSubmit({ rating, comment: comment.trim() || undefined });
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border bg-muted/30 p-4 text-sm">
        Thank you! Your feedback on this report has been recorded.
      </div>
    );
  }

  return (
    <div className="rounded-md border p-4">
      <h4 className="mb-2 text-sm font-medium">Was this report useful?</h4>
      <div className="mb-3 flex gap-2">
        <Button
          variant={rating === "yes" ? "default" : "outline"}
          size="sm"
          onClick={() => setRating("yes")}
        >
          Yes
        </Button>
        <Button
          variant={rating === "no" ? "default" : "outline"}
          size="sm"
          onClick={() => setRating("no")}
        >
          No
        </Button>
      </div>

      {rating && (
        <>
          <textarea
            className="mb-2 w-full rounded-md border p-2 text-sm"
            rows={3}
            placeholder="What should we improve? (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button size="sm" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending…" : "Send feedback"}
          </Button>
        </>
      )}
    </div>
  );
}
