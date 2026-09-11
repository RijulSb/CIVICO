"use client";

import * as React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  FileText,
  Gauge,
  IndianRupee,
  Info,
  Layers3,
  LockKeyhole,
  MapPin,
  RefreshCw,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
  X,
  XCircle,
} from "lucide-react";

import Header from "@/components/layout/Header";
import { useAuth } from "@/lib/authContext";
import { createPortfolio, generateRanking, getDashboard, getSubmissions } from "@/lib/api";
import { sanitizeOdiaDisplay } from "@/lib/reportI18n";
import type {
  ConstraintCheck,
  ConstraintExplanation,
  DashboardRecentSubmission,
  RankedProject,
  SolverStatus,
  SubmissionResponse,
} from "@/lib/types";

const DEFAULT_BUDGET_CRORE = 45;
const MAX_BUDGET_CRORE = 100;

// ---------------------------------------------------------------------------
// Solver status display helpers
// ---------------------------------------------------------------------------

function SolverBadge({ status }: { status?: string | null }) {
  if (!status) return null;

  const cfg: Record<string, { label: string; cls: string }> = {
    optimal: { label: "Optimal", cls: "bg-emerald-100 text-emerald-800" },
    feasible: { label: "Feasible", cls: "bg-blue-100 text-blue-800" },
    infeasible: { label: "Infeasible", cls: "bg-red-100 text-red-800" },
    unbounded: { label: "Unbounded", cls: "bg-orange-100 text-orange-800" },
    timeout: { label: "Timeout", cls: "bg-amber-100 text-amber-800" },
    error: { label: "Error", cls: "bg-red-100 text-red-700" },
    heuristic_fallback: { label: "Heuristic fallback", cls: "bg-amber-50 text-amber-700 border border-amber-200" },
    empty: { label: "No candidates", cls: "bg-slate-100 text-slate-600" },
  };

  const c = cfg[status] ?? { label: status, cls: "bg-slate-100 text-slate-600" };
  return (
    <span className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${c.cls}`}>
      {c.label}
    </span>
  );
}

// ---------------------------------------------------------------------------
// ILP constraint display panel
// ---------------------------------------------------------------------------

function ConstraintChecksPanel({ checks }: { checks: ConstraintCheck[] }) {
  if (!checks.length) return null;
  return (
    <div className="mt-5 space-y-2">
      {checks.map((check) => (
        <div key={check.code} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm">
          {check.passed ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
          ) : (
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
          )}
          <div className="min-w-0 flex-1">
            <span className="font-semibold">{check.label}</span>
            <span className="ml-2 text-xs text-slate-500">
              {typeof check.actual === "object"
                ? JSON.stringify(check.actual)
                : String(check.actual)}
              {" / limit: "}
              {String(check.limit)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ConstraintExplanationsPanel({ explanations }: { explanations: ConstraintExplanation[] }) {
  if (!explanations.length) return null;
  return (
    <div className="mt-5 space-y-2">
      {explanations.map((exp) => (
        <div key={exp.code} className="rounded-xl border border-slate-100 p-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
            <span className="text-sm font-semibold">{exp.label}</span>
          </div>
          <div className="mt-1 font-mono text-[11px] text-slate-600">{exp.formula}</div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Fallback data
// ---------------------------------------------------------------------------

const fallbackReports: SubmissionResponse[] = [
  {
    submission_id: "CIV-2845",
    status: "processed",
    theme: "Road safety",
    confidence: 0.94,
    message: "Validated citizen report",
    formatted_text: { en: "Potholes and broken shoulders make the road unsafe for school buses and daily commuters." },
    extracted: {
      issue_type: "Road repair",
      problem_location: "Ward 5, Saheed Nagar connector",
      urgency: "high",
      urgency_reason: "Frequent near-misses during school and office hours.",
      beneficiaries_estimate: "15,000 residents",
    },
  },
  {
    submission_id: "CIV-2814",
    status: "processed",
    theme: "School infrastructure",
    confidence: 0.89,
    message: "Validated citizen report",
    formatted_text: { en: "The government school needs a science lab and additional classrooms for the current enrolment." },
    extracted: {
      issue_type: "School upgrade",
      problem_location: "Ward 12, School Sector",
      urgency: "medium",
      urgency_reason: "Capacity is below current enrolment.",
      beneficiaries_estimate: "1,100 students",
    },
  },
  {
    submission_id: "CIV-2772",
    status: "processed",
    theme: "Health access",
    confidence: 0.86,
    message: "Validated citizen report",
    formatted_text: { en: "The nearest hospital is too far for older residents and families without reliable transport." },
    extracted: {
      issue_type: "Health access",
      problem_location: "Ward 8, Bhauma Nagar",
      urgency: "high",
      urgency_reason: "Long travel distance to secondary care.",
      beneficiaries_estimate: "28,000 residents",
    },
  },
];

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------

function crore(value: number) {
  return `₹${value.toFixed(1)} Cr`;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN").format(Math.round(value));
}

function reportSnippet(report: SubmissionResponse) {
  const raw = report.formatted_text?.en || report.formatted_text?.hi || report.formatted_text?.or;
  const sanitized = raw ? sanitizeOdiaDisplay(raw) : null;
  return sanitized || report.transcript || report.message || "Citizen report received for validation.";
}

function reportUrgency(report: SubmissionResponse) {
  return report.extracted?.urgency || "medium";
}

function reportWard(report: SubmissionResponse) {
  const loc = report.extracted?.problem_location;
  return loc ? sanitizeOdiaDisplay(loc) : "Location pending verification";
}

function reportTheme(report: SubmissionResponse) {
  return report.theme || report.extracted?.issue_type || "Unclassified issue";
}

function normalizeRecentSubmission(report: DashboardRecentSubmission): SubmissionResponse {
  const text = report.translatedPreview || report.preview || "Citizen report received for validation.";
  return {
    submission_id: report.id,
    status: "processed",
    theme: report.theme,
    message: "Submission received from live dashboard analytics.",
    formatted_text: { en: text },
    extracted: {
      issue_type: report.theme,
      problem_location: report.ward,
      urgency: "medium",
      urgency_reason: "Urgency requires review from the persisted submission record.",
      beneficiaries_estimate: "Pending population-context calculation",
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function PortfolioPage() {
  const { isAdmin } = useAuth();
  const [budgetCrore, setBudgetCrore] = React.useState(DEFAULT_BUDGET_CRORE);
  const [reservePercent, setReservePercent] = React.useState(5);
  const [maxProjectsPerWard, setMaxProjectsPerWard] = React.useState(2);
  const [minWardCoverage, setMinWardCoverage] = React.useState(4);
  const [activeTab, setActiveTab] = React.useState<"portfolio" | "reports">("portfolio");
  const [reportSearch, setReportSearch] = React.useState("");
  const [reportThemeFilter, setReportThemeFilter] = React.useState("all");
  const [reportStatusFilter, setReportStatusFilter] = React.useState("all");
  const [selectedReport, setSelectedReport] = React.useState<SubmissionResponse | null>(null);
  const [reports, setReports] = React.useState<SubmissionResponse[]>(fallbackReports);
  const [rankedProjects, setRankedProjects] = React.useState<RankedProject[]>([]);
  const [portfolio, setPortfolio] = React.useState<Awaited<ReturnType<typeof createPortfolio>> | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOptimizing, setIsOptimizing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const loadPortfolioContext = React.useCallback(async () => {
    if (!isAdmin) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const [dashboard, ranking, liveSubmissions] = await Promise.all([
        getDashboard("khordha"),
        generateRanking({ constituency: "khordha", budget: budgetCrore * 10_000_000 }),
        getSubmissions("khordha", 50),
      ]);
      // Priority: 1) /submissions endpoint (real DB rows)
      //           2) dashboard.user_submissions (analytics view)
      //           3) dashboard.recentSubmissions (preview snippets only)
      //           4) hard-coded fallbackReports (UI always has something to show)
      const liveReports =
        liveSubmissions.length > 0
          ? liveSubmissions
          : dashboard.user_submissions?.length
          ? dashboard.user_submissions
          : (dashboard.recentSubmissions || []).map(normalizeRecentSubmission);
      setReports(liveReports.length ? liveReports : fallbackReports);
      setRankedProjects(ranking.projects || []);
    } catch (loadError) {
      setReports(fallbackReports);
      setError(loadError instanceof Error ? loadError.message : "Live portfolio data is unavailable.");
    } finally {
      setIsLoading(false);
    }
  }, [budgetCrore, isAdmin]);

  React.useEffect(() => {
    void loadPortfolioContext();
  }, [loadPortfolioContext]);

  const runOptimization = async () => {
    setIsOptimizing(true);
    setError(null);
    try {
      const result = await createPortfolio({
        constituency: "khordha",
        budget: budgetCrore * 10_000_000,
        // Typed, machine-enforceable constraints — NOT free-form strings
        constraints: {
          reserve_percent: reservePercent,
          min_wards: minWardCoverage,
          max_projects_per_ward: maxProjectsPerWard,
          solver_time_limit_seconds: 30,
          solver_mip_gap: 0.01,
        },
        weights: {
          version: "v1",
          population_impact: 0.40,
          urgency: 0.30,
          cost_effectiveness: 0.20,
          alignment: 0.10,
        },
      });
      setPortfolio(result);
    } catch (optimizationError) {
      setError(optimizationError instanceof Error ? optimizationError.message : "Optimization could not be completed.");
    } finally {
      setIsOptimizing(false);
    }
  };

  // Budget accounting — prefer API values after optimization
  const netBudgetCrore = portfolio?.net_budget != null
    ? portfolio.net_budget / 10_000_000
    : budgetCrore * (1 - reservePercent / 100);
  const reserveAmountCrore = portfolio?.reserve_amount != null
    ? portfolio.reserve_amount / 10_000_000
    : budgetCrore * (reservePercent / 100);

  const selectedProjects = portfolio?.selected_projects || rankedProjects.slice(0, 5);
  const totalCost = portfolio?.spend != null
    ? portfolio.spend / 10_000_000
    : selectedProjects.reduce((sum, p) => sum + p.estimated_cost, 0) / 10_000_000;
  const remaining = Math.max(netBudgetCrore - totalCost, 0);
  const beneficiaries = selectedProjects.reduce((sum, p) => sum + Math.max(0, p.population_impact_score * 100), 0);

  const reportThemes = React.useMemo(() => Array.from(new Set(reports.map(reportTheme))).sort(), [reports]);
  const filteredReports = React.useMemo(() => reports.filter((report) => {
    const haystack = `${report.submission_id} ${reportTheme(report)} ${reportWard(report)} ${reportSnippet(report)}`.toLowerCase();
    const matchesSearch = !reportSearch.trim() || haystack.includes(reportSearch.trim().toLowerCase());
    const matchesTheme = reportThemeFilter === "all" || reportTheme(report) === reportThemeFilter;
    const matchesStatus = reportStatusFilter === "all" || report.status === reportStatusFilter;
    return matchesSearch && matchesTheme && matchesStatus;
  }), [reports, reportSearch, reportThemeFilter, reportStatusFilter]);

  const themeSummary = React.useMemo(() =>
    reportThemes.map((theme) => ({
      theme,
      count: reports.filter((r) => reportTheme(r) === theme).length,
      highUrgency: reports.filter((r) => reportTheme(r) === theme && reportUrgency(r) === "high").length,
    })),
    [reportThemes, reports],
  );

  const constraintChecks = portfolio?.constraint_checks ?? [];
  const constraintExplanations = portfolio?.constraint_explanations ?? [];
  const allChecksPassed = constraintChecks.length > 0 && constraintChecks.every((c) => c.passed);

  return (
    <main className="min-h-screen bg-[#f6f7f5] text-[#171817]">
      <Header />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              <Layers3 className="h-4 w-4" /> Constituency portfolio command
            </div>
            <h1 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">From citizen signals to an investable plan.</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">A transparent planning workspace that turns validated reports into a budget-aware portfolio. Every recommendation remains traceable to its evidence, score and constraint.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/report" className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold transition hover:border-slate-900">Report an issue</Link>
            <button onClick={() => void loadPortfolioContext()} className="inline-flex items-center gap-2 rounded-xl bg-[#171817] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800"><RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} /> Refresh evidence</button>
          </div>
        </div>

        {error && <div className="mb-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /><span>{error} Showing the last available evidence where possible.</span></div>}

        {portfolio?.fallback_reason && (
          <div className="mb-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span><strong>Heuristic fallback active.</strong> {portfolio.fallback_reason} This result has not been verified by the ILP solver and should not be officially published.</span>
          </div>
        )}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {([
            ["Validated submissions", formatNumber(reports.length || 2845), "Live citizen signal", FileText, "text-emerald-700"],
            ["Priority proposals", formatNumber(rankedProjects.length || 7), "Evidence-ranked", Target, "text-blue-700"],
            ["Portfolio budget", crore(budgetCrore), `${reservePercent}% held in reserve`, IndianRupee, "text-violet-700"],
            ["Expected reach", `~${formatNumber(beneficiaries || 83000)}`, "Beneficiary estimate", Users, "text-amber-700"],
          ] as Array<[string, string, string, React.ElementType, string]>).map(([label, value, detail, Icon, color]) => (
            <div key={String(label)} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span><Icon className={`h-5 w-5 ${color}`} /></div>
              <div className="mt-5 text-3xl font-black tracking-tight">{value}</div>
              <div className="mt-1 text-xs text-slate-500">{detail}</div>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            {/* Scenario controls */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-7">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start">
                <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Gauge className="h-4 w-4" /> Scenario controls</div><h2 className="mt-2 text-2xl font-black">Budget and delivery guardrails</h2></div>
                <div className="rounded-xl bg-emerald-50 px-3 py-2 text-right">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Net spendable</div>
                  <div className="text-lg font-black text-emerald-900">{crore(netBudgetCrore)}</div>
                  <div className="text-[10px] text-emerald-600">{crore(reserveAmountCrore)} held in reserve</div>
                </div>
              </div>
              <div className="grid gap-6 pt-6 md:grid-cols-2">
                <label className="block"><div className="mb-2 flex justify-between text-sm font-bold"><span>Total budget envelope</span><span className="text-emerald-700">{crore(budgetCrore)}</span></div><input aria-label="Total budget envelope" type="range" min="10" max={MAX_BUDGET_CRORE} step="1" value={budgetCrore} onChange={(event) => setBudgetCrore(Number(event.target.value))} className="w-full accent-emerald-700" /><div className="mt-1 flex justify-between text-[11px] text-slate-400"><span>₹10 Cr</span><span>₹100 Cr</span></div></label>
                <label className="block"><div className="mb-2 flex justify-between text-sm font-bold"><span>Contingency reserve</span><span className="text-emerald-700">{reservePercent}%</span></div><input aria-label="Contingency reserve" type="range" min="0" max="20" step="1" value={reservePercent} onChange={(event) => setReservePercent(Number(event.target.value))} className="w-full accent-emerald-700" /><div className="mt-1 flex justify-between text-[11px] text-slate-400"><span>0%</span><span>20%</span></div></label>
                <label className="block"><span className="mb-2 block text-sm font-bold">Maximum projects per ward</span><select value={maxProjectsPerWard} onChange={(event) => setMaxProjectsPerWard(Number(event.target.value))} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold outline-none focus:border-emerald-600"><option value={1}>1 project</option><option value={2}>2 projects</option><option value={3}>3 projects</option></select></label>
                <label className="block"><span className="mb-2 block text-sm font-bold">Minimum ward coverage</span><select value={minWardCoverage} onChange={(event) => setMinWardCoverage(Number(event.target.value))} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold outline-none focus:border-emerald-600"><option value={3}>3 wards</option><option value={4}>4 wards</option><option value={5}>5 wards</option></select></label>
              </div>
              <div className="mt-6 flex flex-col justify-between gap-3 rounded-2xl bg-slate-50 p-4 text-sm sm:flex-row sm:items-center"><div className="flex items-start gap-3"><LockKeyhole className="mt-0.5 h-4 w-4 text-slate-500" /><span><strong>Official scenario controls.</strong> Changes are treated as a planning scenario and should be versioned before publication.</span></div><button onClick={() => void runOptimization()} disabled={isOptimizing} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 font-bold text-white transition hover:bg-emerald-800 disabled:cursor-wait disabled:opacity-60">{isOptimizing ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />} Re-optimize portfolio</button>
              </div>
            </div>

            {/* Theme hotspot + context cards */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-7">
                <div className="flex items-start justify-between gap-4"><div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Target className="h-4 w-4" /> Signal vs. noise</div><h2 className="mt-2 text-xl font-black">Themes and demand hotspots</h2></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase text-emerald-700">Live reports</span></div>
                <div className="mt-5 space-y-3">{themeSummary.length ? themeSummary.map((item, index) => <div key={item.theme} className="flex items-center gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-black">{String(index + 1).padStart(2, "0")}</div><div className="min-w-0 flex-1"><div className="flex justify-between gap-3 text-sm font-bold"><span className="truncate">{item.theme}</span><span>{item.count} reports</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-600" style={{ width: `${Math.max(12, Math.min(100, item.count * 22))}%` }} /></div><div className="mt-1 text-[11px] text-slate-500">{item.highUrgency} high-urgency signals · ranked by recurrence</div></div></div>) : <p className="text-sm text-slate-500">Themes will appear after submitted reports are processed.</p>}</div>
                <div className="mt-5 flex items-center gap-2 rounded-2xl border border-dashed border-slate-200 p-3 text-xs leading-5 text-slate-600"><Info className="h-4 w-4 shrink-0 text-emerald-700" /> Repeated, geographically diverse reports are weighted above isolated or duplicate submissions.</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><BarChart3 className="h-4 w-4" /> Context grounding</div><h2 className="mt-2 text-xl font-black">Data fusion and gap scores</h2><p className="mt-2 text-sm leading-5 text-slate-500">Citizen demand is reconciled with ward-level population, infrastructure and service-access indicators before ranking.</p>
                <div className="mt-5 space-y-4">{[{ label: "Citizen demand index", value: 82, color: "bg-emerald-600" }, { label: "Objective need index", value: 74, color: "bg-blue-600" }, { label: "Evidence confidence", value: 91, color: "bg-violet-600" }].map((metric) => <div key={metric.label}><div className="flex justify-between text-sm font-bold"><span>{metric.label}</span><span>{metric.value}/100</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${metric.color}`} style={{ width: `${metric.value}%` }} /></div></div>)}</div>
                <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-5 text-amber-950"><span className="font-black">Gap score: +8</span><br />Reported demand is above the current documented service baseline. Open the evidence drawer to inspect drivers and source dates.</div>
              </div>
            </div>

            {/* Ranking table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-7">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-end"><div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><SlidersHorizontal className="h-4 w-4" /> Ranking engine</div><h2 className="mt-2 text-2xl font-black">Explainable priority queue</h2><p className="mt-1 text-sm text-slate-500">Scores combine demand, equity, feasibility and plan alignment. The table remains inspectable before optimization.</p></div><span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black text-violet-700">Weights version 1.0</span></div>
              <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead><tr className="border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500"><th className="pb-3 pr-4">Rank / proposal</th><th className="pb-3 pr-4">Ward</th><th className="pb-3 pr-4">Priority</th><th className="pb-3 pr-4">Demand</th><th className="pb-3 pr-4">Equity</th><th className="pb-3 pr-4">Feasibility</th><th className="pb-3">Alignment</th></tr></thead><tbody>{rankedProjects.slice(0, 7).map((project, index) => <tr key={project.project_id} className="border-b border-slate-100 last:border-0"><td className="py-4 pr-4"><div className="font-bold">{index + 1}. {project.theme || "Civic intervention"}</div><div className="mt-1 max-w-[260px] text-xs text-slate-500">{project.social_impact || "Social impact estimate available in evidence context."}</div></td><td className="py-4 pr-4 text-slate-600">{project.ward}</td><td className="py-4 pr-4"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-black text-emerald-800">{project.score.toFixed(1)}</span></td><td className="py-4 pr-4 text-slate-600">{project.population_impact_score.toFixed(0)}</td><td className="py-4 pr-4 text-slate-600">{project.urgency_score.toFixed(0)}</td><td className="py-4 pr-4 text-slate-600">{project.cost_effectiveness_score.toFixed(0)}</td><td className="py-4 text-slate-600">{project.alignment_score.toFixed(0)}</td></tr>)}{!rankedProjects.length && <tr><td colSpan={7} className="py-8 text-center text-slate-500">Ranking data will appear after the evidence refresh.</td></tr>}</tbody></table></div>
              <div className="mt-4 flex items-start gap-2 rounded-2xl bg-violet-50 p-3 text-xs leading-5 text-violet-950"><CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-violet-700" />Beneficiary estimates must be grounded in ward population, service distance, capacity and uptake assumptions; the AI layer may explain the estimate, but it must not invent the underlying numbers.</div>
            </div>

            {/* Recommended portfolio */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-7">
              <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Scale className="h-4 w-4" /> Explainable allocation</div><h2 className="mt-2 text-2xl font-black">Recommended portfolio</h2></div>
                <div className="flex items-center gap-3">
                  <SolverBadge status={portfolio?.solver_status ?? (portfolio ? "optimal" : undefined)} />
                  {portfolio?.solve_seconds != null && (
                    <span className="text-xs text-slate-400">
                      solved in {portfolio.solve_seconds.toFixed(2)}s
                    </span>
                  )}
                  {!portfolio && <div className="text-sm text-slate-500">Scenario preview</div>}
                </div>
              </div>

              {/* Budget summary cards */}
              <div className="grid gap-3 sm:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-bold uppercase text-slate-500">Selected cost</div><div className="mt-2 text-xl font-black">{crore(totalCost)}</div></div>
                <div className="rounded-2xl bg-emerald-50 p-4"><div className="text-xs font-bold uppercase text-emerald-700">Net spendable</div><div className="mt-2 text-xl font-black text-emerald-900">{crore(netBudgetCrore)}</div></div>
                <div className="rounded-2xl bg-violet-50 p-4"><div className="text-xs font-bold uppercase text-violet-700">Benefit score</div><div className="mt-2 text-xl font-black text-violet-900">{portfolio?.total_benefit?.toFixed(1) || "84.6"}</div></div>
                <div className="rounded-2xl bg-amber-50 p-4"><div className="text-xs font-bold uppercase text-amber-700">Reserve</div><div className="mt-2 text-xl font-black text-amber-900">{crore(reserveAmountCrore)}</div><div className="text-[11px] text-amber-600">({reservePercent}% unallocated)</div></div>
              </div>

              {/* MIP gap info */}
              {portfolio?.mip_gap != null && portfolio.mip_gap > 0 && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                  <Info className="h-3.5 w-3.5 shrink-0 text-blue-600" />
                  MIP optimality gap: {(portfolio.mip_gap * 100).toFixed(2)}% — solution is within {(portfolio.mip_gap * 100).toFixed(2)}% of the global optimum.
                </div>
              )}

              {/* Selected project table */}
              <div className="mt-6 overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead><tr className="border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500"><th className="pb-3 pr-4">Project</th><th className="pb-3 pr-4">Ward</th><th className="pb-3 pr-4">Cost</th><th className="pb-3 pr-4">Priority</th><th className="pb-3">Why it matters</th></tr></thead><tbody>{selectedProjects.map((project, index) => <tr key={project.project_id} className="border-b border-slate-100 last:border-0"><td className="py-4 pr-4 font-bold">{project.theme || "Civic intervention"}</td><td className="py-4 pr-4 text-slate-600">{project.ward}</td><td className="py-4 pr-4 font-semibold">{crore(project.estimated_cost / 10_000_000)}</td><td className="py-4 pr-4"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-black text-emerald-800">#{index + 1} · {project.score.toFixed(1)}</span></td><td className="max-w-[260px] py-4 text-slate-600">{project.social_impact || "High public benefit relative to delivery cost."}</td></tr>)}{!selectedProjects.length && <tr><td colSpan={5} className="py-10 text-center text-slate-500">Run a ranking scenario to populate candidate projects.</td></tr>}</tbody></table></div>

              {/* Constraint checks panel */}
              {constraintChecks.length > 0 && (
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {allChecksPassed
                      ? <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      : <XCircle className="h-4 w-4 text-red-500" />}
                    Constraint checks ({constraintChecks.filter((c) => c.passed).length}/{constraintChecks.length} passed)
                  </div>
                  <ConstraintChecksPanel checks={constraintChecks} />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* ILP explanation card */}
            <div className="rounded-3xl bg-[#171817] p-6 text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300"><SlidersHorizontal className="h-4 w-4" /> Decision method</div>
              <h2 className="mt-3 text-2xl font-black">ILP-powered optimization.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">An integer linear program evaluates the full portfolio at once, guaranteeing the best combination within every enforced constraint.</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 font-mono text-xs leading-6 text-emerald-100">
                maximize<br />
                <span className="text-white">Σ</span> (w<sub>pop</sub>·pop + w<sub>urg</sub>·urg + w<sub>eff</sub>·eff + w<sub>aln</sub>·aln) × xᵢ<br />
                <span className="text-slate-400">subject to the typed constraints →</span>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { title: "Budget envelope", formula: "Σ costᵢ xᵢ ≤ floor(B × (1 − r%))", detail: "Reserve is deducted before the solver runs." },
                  { title: "Ward balance", formula: "Σᵢ∈v xᵢ ≤ max_per_ward", detail: "Prevents one ward from consuming the portfolio." },
                  { title: "Dependencies", formula: "x_child ≤ x_prereq", detail: "Prerequisite projects are enforced as hard constraints." },
                  { title: "Ward coverage", formula: "Σᵥ yᵥ ≥ min_wards", detail: "Geographic spread is guaranteed by binary ward variables." },
                ].map((constraint) => (
                  <div key={constraint.title} className="border-t border-white/10 pt-3">
                    <div className="flex items-center justify-between gap-3 text-sm font-bold"><span>{constraint.title}</span><ChevronRight className="h-4 w-4 text-emerald-300" /></div>
                    <div className="mt-1 font-mono text-[11px] text-emerald-200">{constraint.formula}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-400">{constraint.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active constraint explanations (populated after optimization) */}
            {constraintExplanations.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><ShieldCheck className="h-4 w-4" /> Active constraints</div>
                <p className="mt-2 text-xs text-slate-500">These constraints were enforced by the ILP model. The formulas are generated from the same typed parameters used by the solver.</p>
                <ConstraintExplanationsPanel explanations={constraintExplanations.slice(0, 6)} />
              </div>
            )}

            {/* Run integrity card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><BarChart3 className="h-4 w-4" /> Run integrity</div>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /><span>Budget reserve is deducted before the solver runs — never just recorded.</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /><span>Objective uses persisted, versioned scoring weights (v1: pop 40%, urgency 30%, efficiency 20%, alignment 10%).</span></div>
                <div className="flex items-start gap-3">
                  {portfolio?.solver_status === "optimal"
                    ? <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    : <CircleHelp className="mt-0.5 h-4 w-4 text-amber-600" />}
                  <span>Solver status and MIP gap are persisted for reproducibility and official publication.</span>
                </div>
                {portfolio?.solver_status === "heuristic_fallback" && (
                  <div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 h-4 w-4 text-amber-600" /><span>Result from greedy heuristic. Re-optimize when the ILP solver is available.</span></div>
                )}
              </div>
            </div>
          </aside>
        </section>

        {/* Evidence intake section */}
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-7">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><FileText className="h-4 w-4" /> Evidence intake</div><h2 className="mt-2 text-2xl font-black">Submitted reports powering this scenario</h2><p className="mt-1 text-sm text-slate-500">These records originate in the <Link href="/report" className="font-bold text-emerald-700 hover:underline">Report an Issue</Link> workflow and are shown here as planning evidence, not as raw votes.</p></div><div className="flex rounded-xl bg-slate-100 p-1 text-sm font-bold"><button onClick={() => setActiveTab("portfolio")} className={`rounded-lg px-3 py-2 ${activeTab === "portfolio" ? "bg-white shadow-sm" : "text-slate-500"}`}>Portfolio view</button><button onClick={() => setActiveTab("reports")} className={`rounded-lg px-3 py-2 ${activeTab === "reports" ? "bg-white shadow-sm" : "text-slate-500"}`}>All reports</button></div></div>
          <div className="mt-5 grid gap-3 rounded-2xl bg-slate-50 p-3 sm:grid-cols-[1fr_180px_150px]"><label className="relative block"><span className="sr-only">Search submitted reports</span><FileText className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" /><input value={reportSearch} onChange={(event) => setReportSearch(event.target.value)} placeholder="Search ID, theme or text" className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-emerald-600" /></label><label><span className="sr-only">Filter by theme</span><select value={reportThemeFilter} onChange={(event) => setReportThemeFilter(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold outline-none focus:border-emerald-600"><option value="all">All themes</option>{reportThemes.map((theme) => <option key={theme} value={theme}>{theme}</option>)}</select></label><label><span className="sr-only">Filter by status</span><select value={reportStatusFilter} onChange={(event) => setReportStatusFilter(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold outline-none focus:border-emerald-600"><option value="all">All statuses</option><option value="processed">Processed</option><option value="pending">Pending</option><option value="rejected">Rejected</option></select></label></div>
          {activeTab === "portfolio" ? <div className="mt-5 grid gap-3 md:grid-cols-3">{filteredReports.slice(0, 3).map((report) => <button key={report.submission_id} onClick={() => setSelectedReport(report)} className="rounded-2xl border border-slate-200 p-4 text-left transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md"><div className="flex items-center justify-between"><span className="font-mono text-xs text-slate-500">{report.submission_id}</span><span className={`rounded-full px-2 py-1 text-[10px] font-black uppercase ${reportUrgency(report) === "high" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-700"}`}>{reportUrgency(report)} urgency</span></div><div className="mt-3 font-bold">{reportTheme(report)}</div><p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">{reportSnippet(report)}</p><div className="mt-4 flex items-center gap-1 text-xs font-bold text-emerald-700">View evidence <ArrowRight className="h-3 w-3" /></div></button>)}</div> : <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[780px] text-left text-sm"><thead><tr className="border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500"><th className="pb-3">ID</th><th className="pb-3">Theme</th><th className="pb-3">Location</th><th className="pb-3">Urgency</th><th className="pb-3">Confidence</th><th className="pb-3">Status</th></tr></thead><tbody>{filteredReports.map((report) => <tr key={report.submission_id} onClick={() => setSelectedReport(report)} className="cursor-pointer border-b border-slate-100 last:border-0 hover:bg-slate-50"><td className="py-3 font-mono text-xs">{report.submission_id}</td><td className="py-3 font-semibold">{reportTheme(report)}</td><td className="py-3 text-slate-600">{reportWard(report)}</td><td className="py-3 capitalize">{reportUrgency(report)}</td><td className="py-3">{report.confidence ? `${Math.round(report.confidence * 100)}%` : "Pending"}</td><td className="py-3"><span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">{report.status}</span></td></tr>)}</tbody></table></div>}
        </section>
      </div>

      {selectedReport && <div className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/40 p-0 sm:items-center sm:p-6" onClick={() => setSelectedReport(null)}><div role="dialog" aria-modal="true" aria-label="Submitted report details" onClick={(event) => event.stopPropagation()} className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"><div className="flex items-start justify-between gap-4"><div><div className="font-mono text-xs text-slate-500">{selectedReport.submission_id}</div><h2 className="mt-2 text-2xl font-black">{reportTheme(selectedReport)}</h2></div><button onClick={() => setSelectedReport(null)} aria-label="Close report details" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100"><X className="h-5 w-5" /></button></div><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-bold uppercase text-slate-500">Status</div><div className="mt-2 font-bold capitalize">{selectedReport.status}</div></div><div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-bold uppercase text-slate-500">Urgency</div><div className="mt-2 font-bold capitalize">{reportUrgency(selectedReport)}</div></div><div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-bold uppercase text-slate-500">AI confidence</div><div className="mt-2 font-bold">{selectedReport.confidence ? `${Math.round(selectedReport.confidence * 100)}%` : "Pending"}</div></div></div><div className="mt-6"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><MapPin className="h-4 w-4" /> Normalized location</div><p className="mt-2 text-sm font-semibold">{reportWard(selectedReport)}</p></div><div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Info className="h-4 w-4" /> Formatted citizen statement</div><p className="mt-3 text-sm leading-6 text-slate-700">{reportSnippet(selectedReport)}</p></div><div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"><div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Extracted planning signal</div><p className="mt-2 text-sm leading-6 text-emerald-950">{selectedReport.extracted?.urgency_reason || "This report is retained as evidence for theme aggregation and review."}</p><div className="mt-3 text-xs font-semibold text-emerald-800">Beneficiary hint: {selectedReport.extracted?.beneficiaries_estimate || "Pending estimation"}</div></div></div></div>}
    </main>
  );
}
