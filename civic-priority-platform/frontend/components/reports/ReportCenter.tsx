"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileDown,
  FileText,
  Loader2,
  Settings2,
  Upload,
} from "lucide-react";
import Link from "next/link";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const API_PREFIX = `${API_BASE}/api/v1`;

type OutputFormat = "pdf" | "csv";
type ReportLanguage = "en" | "hi" | "or";

const REPORT_LANGUAGES: Record<ReportLanguage, { label: string; title: string; status: string; generated: string; selector: string; preview: string }> = {
  en: { label: "English", title: "Khordha Development Priority Decision Brief", status: "Draft recommendation - requires authority review", generated: "Generate Decision Brief", selector: "Report language", preview: "Report Preview" },
  hi: { label: "हिंदी", title: "खोरधा विकास प्राथमिकता निर्णय संक्षेप", status: "प्रारूप अनुशंसा - प्राधिकरण की समीक्षा आवश्यक", generated: "निर्णय संक्षेप बनाएँ", selector: "रिपोर्ट भाषा", preview: "रिपोर्ट पूर्वावलोकन" },
  or: { label: "ଓଡ଼ିଆ", title: "ଖୋର୍ଦ୍ଧା ବିକାଶ ପ୍ରାଥମିକତା ନିଷ୍ପତ୍ତି ସଂକ୍ଷିପ୍ତ", status: "ଖସଡ଼ା ସୁପାରିଶ - କର୍ତ୍ତୃପକ୍ଷଙ୍କ ସମୀକ୍ଷା ଆବଶ୍ୟକ", generated: "ନିଷ୍ପତ୍ତି ସଂକ୍ଷିପ୍ତ ପ୍ରସ୍ତୁତ କରନ୍ତୁ", selector: "ରିପୋର୍ଟ ଭାଷା", preview: "ରିପୋର୍ଟ ପୂର୍ବାବଲୋକନ" },
};

type SourceRun = {
  runId: string;
  createdAt: string;
  budget: number;
  selectedProjectCount: number;
  totalCost: number;
  totalBenefit: number;
  status: "completed";
};

type PreviewProject = {
  priority: number;
  projectId: string;
  title: string;
  ward: string;
  estimatedCost: number;
  timelineMonths: number;
  benefitScore: number;
  selectionReason: string;
  evidence: {
    submissionCount: number;
    affectedPopulation: number;
    voiceReports: number;
    photoReports: number;
  };
  whySelected: string[];
};

type PreviewPayload = {
  runId: string;
  constituency: string;
  status: string;
  summary: {
    budget: number;
    totalAllocated: number;
    remainingBudget: number;
    selectedProjectCount: number;
    wardCoverage: number;
    totalWards: number;
    timelineMonths: number;
    totalBenefit: number;
  };
  selectedProjects: PreviewProject[];
  constraintValidation: Array<{
    label: string;
    status: "passed" | "failed";
    message: string;
  }>;
  provenance: string[];
};

type ReportHistoryItem = {
  reportId: string;
  title: string;
  portfolioRun: string;
  createdAt: string;
  status: string;
  format: OutputFormat;
  downloadUrl: string;
  language?: ReportLanguage;
};

type ReportSettings = {
  title: string;
  format: OutputFormat;
  includeHotspotMap: boolean;
  includeRejectedProjects: boolean;
  includeCitizenEvidence: boolean;
};

const API_KEY = process.env.NEXT_PUBLIC_CIVICO_API_KEY || (process.env.NODE_ENV === "development" ? "dev" : "");
const REQUEST_TIMEOUT_MS = 15000;

const DEFAULT_SETTINGS: ReportSettings = {
  title: "Khordha Development Priority Decision Brief",
  format: "pdf",
  includeHotspotMap: true,
  includeRejectedProjects: false,
  includeCitizenEvidence: true,
};

function inr(value: number) {
  return `Rs ${(value / 10000000).toFixed(1)} Cr`;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          ...(API_KEY ? { "X-API-Key": API_KEY } : {}),
          ...(options?.headers ?? {}),
        },
      });
      if (!response.ok) throw new Error(await response.text());
      return (await response.json()) as T;
    } catch (error) {
      lastError = error;
      if (attempt < 2) await new Promise((resolve) => window.setTimeout(resolve, 300 * 2 ** attempt));
    } finally {
      window.clearTimeout(timeout);
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Request failed");
}

function SummaryTile({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-[#171817]/12 bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-[#171817]/50">
        {label}
      </p>
      <p className="mt-2 text-2xl font-black text-[#171817]">{value}</p>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex min-h-11 items-center justify-between gap-3 rounded-lg border border-[#171817]/12 bg-white px-3 py-2 text-sm font-semibold text-[#171817]">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4 accent-[#171817]"
      />
    </label>
  );
}

export default function ReportCenter() {
  const [runs, setRuns] = useState<SourceRun[]>([]);
  const [selectedRunId, setSelectedRunId] = useState("");
  const [language, setLanguage] = useState<ReportLanguage>("en");
  const [preview, setPreview] = useState<PreviewPayload | null>(null);
  const [history, setHistory] = useState<ReportHistoryItem[]>([]);
  const [settings, setSettings] = useState<ReportSettings>(DEFAULT_SETTINGS);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");
  const [generatedReport, setGeneratedReport] = useState<ReportHistoryItem | null>(
    null,
  );

  const copy = REPORT_LANGUAGES[language];

  const selectedRun = useMemo(
    () => runs.find((run) => run.runId === selectedRunId) ?? null,
    [runs, selectedRunId],
  );

  const loadHistory = useCallback(async () => {
    const reports = await fetchJson<ReportHistoryItem[]>(
      `${API_PREFIX}/reports?constituency=khordha`,
    );
    setHistory(reports);
  }, []);

  const loadPreview = useCallback(async (runId: string, selectedLanguage: ReportLanguage) => {
    const payload = await fetchJson<PreviewPayload>(
      `${API_PREFIX}/reports/preview?runId=${encodeURIComponent(runId)}&language=${selectedLanguage}`,
    );
    setPreview(payload);
  }, []);

  const loadInitialData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const source = await fetchJson<{ runs: SourceRun[] }>(
        `${API_PREFIX}/reports/source-runs?constituency=khordha`,
      );
      setRuns(source.runs);
      const latestRun = source.runs[0];
      if (latestRun) {
        setSelectedRunId(latestRun.runId);
        await loadPreview(latestRun.runId, language);
      }
      await loadHistory();
    } catch {
      setError(
        "No report-ready portfolio yet. Run portfolio optimization after defining wards, candidate projects, budget, and constraints.",
      );
    } finally {
      setLoading(false);
    }
  }, [language, loadHistory, loadPreview]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadInitialData();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [loadInitialData]);

  async function handleRunChange(runId: string) {
    setSelectedRunId(runId);
    setGeneratedReport(null);
    setError("");
    try {
      await loadPreview(runId, language);
    } catch {
      setError("The selected optimization run is incomplete or unavailable.");
    }
  }

  async function handleCsvUpload(file: File | null) {
    if (!file) return;
    setUploading(true);
    setError("");
    setUploadMessage("");
    setGeneratedReport(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(`${API_PREFIX}/reports/upload-source`, {
        method: "POST",
        headers: API_KEY ? { "X-API-Key": API_KEY } : undefined,
        body: formData,
      });
      if (!response.ok) throw new Error(await response.text());
      const payload = (await response.json()) as {
        run: SourceRun;
        preview: PreviewPayload;
      };
      setRuns((current) => [
        payload.run,
        ...current.filter((run) => run.runId !== payload.run.runId),
      ]);
      setSelectedRunId(payload.run.runId);
      setPreview(payload.preview);
      setUploadMessage(
        `${file.name} loaded. Reports will use this uploaded priorities CSV.`,
      );
    } catch {
      setError(
        "Could not read this CSV. Upload the allocation plan CSV exported from Priorities.",
      );
    } finally {
      setUploading(false);
    }
  }

  async function generateBrief() {
    if (!selectedRunId) return;
    setGenerating(true);
    setError("");
    try {
      const response = await fetchJson<{
        reportId: string;
        format: OutputFormat;
        createdAt: string;
        downloadUrl: string;
      }>(`${API_PREFIX}/reports`, {
        method: "POST",
        body: JSON.stringify({
          runId: selectedRunId,
          title: settings.title,
          format: settings.format,
          includeHotspotMap: settings.includeHotspotMap,
          includeRejectedProjects: settings.includeRejectedProjects,
          includeCitizenEvidence: settings.includeCitizenEvidence,
          language,
        }),
      });
      const item: ReportHistoryItem = {
        reportId: response.reportId,
        title: settings.title,
        portfolioRun: selectedRunId,
        createdAt: response.createdAt,
        status: "Draft",
        format: response.format,
        downloadUrl: response.downloadUrl,
      };
      setGeneratedReport(item);
      await loadHistory();
    } catch {
      setError(
        "We could not generate this report. The selected optimization run is incomplete or its project data is unavailable.",
      );
    } finally {
      setGenerating(false);
    }
  }

  function downloadUrl(item: ReportHistoryItem, format = item.format) {
    return `${API_BASE}${item.downloadUrl}?format=${format}`;
  }

  const reportReady = Boolean(selectedRun && preview);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="flex flex-wrap items-start justify-between gap-4 rounded-lg border border-[#171817]/15 bg-white p-5 shadow-sm">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#e25a45]">
            Reports
          </p>
                      <h1 className="mt-2 text-3xl font-black text-[#171817]">
            {copy.title}

          </h1>
          <p className="mt-2 max-w-3xl text-sm text-[#171817]/60">
            Turn the latest recommended portfolio into a review-ready plan for
            officials to preview, download, and retrieve from history.
          </p>
        </div>

        <button
          type="button"
          onClick={generateBrief}
          disabled={!reportReady || generating}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#171817] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e25a45] disabled:cursor-not-allowed disabled:bg-[#171817]/35 sm:w-auto"
        >
          {generating ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FileText className="h-4 w-4" />
          )}
          {copy.generated}
        </button>
      </section>

      {error && (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="font-bold text-amber-900">{error}</p>
          <Link
            href="/priorities"
            className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#171817] underline underline-offset-2"
          >
            Go to Priorities <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      )}

      <section className="flex flex-wrap items-center gap-3 rounded-lg border border-[#171817]/15 bg-white p-4 shadow-sm">
        <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-dashed border-[#171817]/30 bg-slate-50 px-4 text-sm font-bold text-[#171817] hover:border-[#171817]">
          {uploading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Upload className="h-4 w-4" />
          )}
          Upload Priorities CSV
          <input
            type="file"
            accept=".csv,text/csv"
            disabled={uploading}
            onChange={(event) => {
              handleCsvUpload(event.target.files?.[0] ?? null);
              event.currentTarget.value = "";
            }}
            className="sr-only"
          />
        </label>

        <label className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#171817]/20 bg-white px-3 text-sm font-bold text-[#171817]">
          <span>{copy.selector}</span>
          <select
            value={language}
            onChange={(event) => {
              const nextLanguage = event.target.value as ReportLanguage;
              setLanguage(nextLanguage);
              setSettings((current) => ({ ...current, title: REPORT_LANGUAGES[nextLanguage].title }));
            }}
            className="bg-transparent py-2 outline-none"
            aria-label={copy.selector}
          >
            {(Object.keys(REPORT_LANGUAGES) as ReportLanguage[]).map((item) => (
              <option key={item} value={item}>{REPORT_LANGUAGES[item].label}</option>
            ))}
          </select>
        </label>

        <select
          value={selectedRunId}
          onChange={(event) => handleRunChange(event.target.value)}
          disabled={loading || runs.length === 0}
          className="min-h-11 min-w-[260px] rounded-lg border border-[#171817]/20 bg-white px-3 py-2 text-sm font-bold text-[#171817]"
        >
          {runs.length === 0 ? (
            <option>No completed run</option>
          ) : (
            runs.map((run) => (
              <option key={run.runId} value={run.runId}>
                Latest completed run - {run.runId}
              </option>
            ))
          )}
        </select>

        <div className="inline-flex min-h-11 overflow-hidden rounded-lg border border-[#171817]/20">
          {(["pdf", "csv"] as OutputFormat[]).map((format) => (
            <button
              key={format}
              type="button"
              onClick={() => setSettings((current) => ({ ...current, format }))}
              className={`px-4 text-sm font-bold uppercase ${
                settings.format === format
                  ? "bg-[#171817] text-white"
                  : "bg-white text-[#171817]/65"
              }`}
            >
              {format}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSettingsOpen((value) => !value)}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#171817]/20 bg-white px-4 text-sm font-bold text-[#171817]"
        >
          <Settings2 className="h-4 w-4" />
          Settings
        </button>

        {uploadMessage && (
          <p className="basis-full text-xs font-semibold text-emerald-700">
            {uploadMessage}
          </p>
        )}
      </section>

      {settingsOpen && (
        <section className="grid gap-3 rounded-lg border border-[#171817]/15 bg-white p-4 shadow-sm md:grid-cols-2">
          <label className="md:col-span-2">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#171817]/50">
              Report title
            </span>
            <input
              value={settings.title}
              onChange={(event) =>
                setSettings((current) => ({
                  ...current,
                  title: event.target.value,
                }))
              }
              className="min-h-11 w-full rounded-lg border border-[#171817]/20 px-3 text-sm font-semibold outline-none"
            />
          </label>
          <Toggle
            label="Include hotspot map"
            checked={settings.includeHotspotMap}
            onChange={(value) =>
              setSettings((current) => ({ ...current, includeHotspotMap: value }))
            }
          />
          <Toggle
            label="Include rejected proposals"
            checked={settings.includeRejectedProjects}
            onChange={(value) =>
              setSettings((current) => ({
                ...current,
                includeRejectedProjects: value,
              }))
            }
          />
          <Toggle
            label="Include citizen evidence quotes"
            checked={settings.includeCitizenEvidence}
            onChange={(value) =>
              setSettings((current) => ({
                ...current,
                includeCitizenEvidence: value,
              }))
            }
          />
        </section>
      )}

      {loading ? (
        <section className="rounded-lg border border-[#171817]/15 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 text-[#171817]">
            <Loader2 className="h-5 w-5 animate-spin" />
            <div>
              <p className="font-black">Preparing your Decision Brief</p>
              <p className="text-sm text-[#171817]/55">
                Collecting selected projects, verifying constraints, and
                summarizing citizen evidence.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="grid gap-6 lg:grid-cols-[minmax(280px,0.75fr)_minmax(520px,1.25fr)]">
          <aside className="space-y-4">
            <div className="rounded-lg border border-[#171817]/15 bg-white p-5 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#e25a45]">
                Report Summary
              </p>
              {preview ? (
                <div className="mt-4 grid gap-3">
                  <SummaryTile label="Budget" value={inr(preview.summary.budget)} />
                  <SummaryTile
                    label="Recommended allocation"
                    value={inr(preview.summary.totalAllocated)}
                  />
                  <SummaryTile
                    label="Selected projects"
                    value={preview.summary.selectedProjectCount}
                  />
                  <SummaryTile
                    label="Coverage"
                    value={`${preview.summary.wardCoverage} wards`}
                  />
                  <SummaryTile
                    label="Created from"
                    value={preview.runId.replace("run_", "Run #")}
                  />
                </div>
              ) : (
                <p className="mt-3 text-sm text-[#171817]/55">
                  No optimized portfolio is available yet.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={generateBrief}
              disabled={!reportReady || generating}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#171817] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e25a45] disabled:cursor-not-allowed disabled:bg-[#171817]/35"
            >
              {generating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FileText className="h-4 w-4" />
              )}
              {copy.generated}
            </button>
          </aside>

          <article className="rounded-lg border border-[#171817]/15 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#e25a45]">
                  {copy.preview}
                </p>
                <h2 className="mt-1 text-2xl font-black text-[#171817]">
                  {copy.title}
                </h2>
                <p className="mt-1 text-sm font-semibold text-amber-700">
                  {copy.status}
                </p>
              </div>
              {generatedReport && (
                <div className="flex flex-wrap gap-2">
                  <a
                    href={downloadUrl(generatedReport, "pdf")}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#171817]/20 px-4 text-sm font-bold text-[#171817]"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  <a
                    href={downloadUrl(generatedReport, "csv")}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#171817]/20 px-4 text-sm font-bold text-[#171817]"
                  >
                    <FileDown className="h-4 w-4" />
                    Download CSV
                  </a>
                </div>
              )}
            </div>

            {preview ? (
              <div className="mt-6 space-y-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  <SummaryTile
                    label="Planning budget"
                    value={inr(preview.summary.budget)}
                  />
                  <SummaryTile
                    label="Unallocated reserve"
                    value={inr(preview.summary.remainingBudget)}
                  />
                  <SummaryTile
                    label="Timeline"
                    value={`${preview.summary.timelineMonths} months`}
                  />
                </div>

                <p className="rounded-lg bg-slate-50 p-4 text-sm text-[#171817]/70">
                  This portfolio maximizes citizen-demand-weighted public benefit
                  while respecting budget, timeline, geographic coverage, and
                  project dependency constraints.
                </p>

                <div>
                  <h3 className="mb-3 text-lg font-black text-[#171817]">
                    Recommended projects
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-[#171817]/12">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wider text-[#171817]/55">
                        <tr>
                          <th className="px-3 py-3">Priority</th>
                          <th className="px-3 py-3">Project</th>
                          <th className="px-3 py-3">Ward</th>
                          <th className="px-3 py-3">Cost</th>
                          <th className="px-3 py-3">Expected Benefit</th>
                          <th className="px-3 py-3">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#171817]/10">
                        {preview.selectedProjects.slice(0, 6).map((project) => (
                          <tr key={project.projectId}>
                            <td className="px-3 py-3 font-bold">
                              {project.priority}
                            </td>
                            <td className="px-3 py-3 font-semibold">
                              {project.title}
                            </td>
                            <td className="px-3 py-3">{project.ward}</td>
                            <td className="px-3 py-3">
                              {inr(project.estimatedCost)}
                            </td>
                            <td className="px-3 py-3">
                              {project.evidence.affectedPopulation.toLocaleString()}{" "}
                              residents
                            </td>
                            <td className="px-3 py-3">
                              {project.timelineMonths} months
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-black text-[#171817]">
                    Why these projects were selected
                  </h3>
                  <div className="space-y-3">
                    {preview.selectedProjects.slice(0, 3).map((project) => (
                      <section
                        key={project.projectId}
                        className="rounded-lg border border-[#171817]/12 p-4"
                      >
                        <h4 className="font-black text-[#171817]">
                          Priority {project.priority}: {project.title}
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-[#171817]/65">
                          {project.whySelected.map((reason) => (
                            <li key={reason}>- {reason}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-black text-[#171817]">
                    Portfolio validation
                  </h3>
                  <div className="grid gap-2">
                    {preview.constraintValidation.map((item) => (
                      <div
                        key={item.label}
                        className="flex gap-2 rounded-lg bg-slate-50 p-3 text-sm text-[#171817]/70"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>
                          <strong className="text-[#171817]">{item.label}:</strong>{" "}
                          {item.message}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-lg bg-slate-50 p-8 text-center">
                <p className="font-black text-[#171817]">
                  No optimized portfolio is available yet.
                </p>
                <Link
                  href="/priorities"
                  className="mt-3 inline-flex items-center gap-1 font-bold text-[#171817] underline underline-offset-2"
                >
                  Go to Priorities <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </article>
        </section>
      )}

      <section className="rounded-lg border border-[#171817]/15 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#e25a45]">
              Report History
            </p>
            <h2 className="text-xl font-black text-[#171817]">
              Recent decision briefs
            </h2>
          </div>
        </div>

        {history.length === 0 ? (
          <p className="rounded-lg bg-slate-50 p-4 text-sm text-[#171817]/55">
            Generated reports will appear here as immutable historical snapshots.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-[#171817]/10 text-xs uppercase tracking-wider text-[#171817]/50">
                <tr>
                  <th className="py-3 pr-3">Report</th>
                  <th className="py-3 pr-3">Portfolio Run</th>
                  <th className="py-3 pr-3">Created</th>
                  <th className="py-3 pr-3">Status</th>
                  <th className="py-3 pr-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#171817]/10">
                {history.map((item) => (
                  <tr key={item.reportId}>
                    <td className="py-3 pr-3 font-semibold text-[#171817]">
                      {item.title}
                      <span className="block text-xs text-[#171817]/45">
                        {item.reportId}
                      </span>
                    </td>
                    <td className="py-3 pr-3">{item.portfolioRun}</td>
                    <td className="py-3 pr-3">{formatDate(item.createdAt)}</td>
                    <td className="py-3 pr-3">{item.status}</td>
                    <td className="py-3 pr-3">
                      <div className="flex gap-2">
                        <a
                          href={downloadUrl(item, "pdf")}
                          className="font-bold underline underline-offset-2"
                        >
                          PDF
                        </a>
                        <a
                          href={downloadUrl(item, "csv")}
                          className="font-bold underline underline-offset-2"
                        >
                          CSV
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
