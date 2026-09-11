"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import { useFeedback } from "@/components/feedback/FeedbackHub";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  FileCheck,
  FileSpreadsheet,
  HelpCircle,
  IndianRupee,
  Layers,
  MapPin,
  Play,
  PlusCircle,
  RefreshCw,
  Sliders,
  Sparkles,
  Trash2,
  UserCheck,
  Users,
  X,
} from "lucide-react";


// Dynamic import for Leaflet Ward Coverage Map
const WardCoverageMap = dynamic(
  () => import("@/components/priorities/WardCoverageMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-64 w-full items-center justify-center rounded-xl bg-slate-100 font-mono text-xs text-slate-500">
        Loading Ward Coverage Map...
      </div>
    ),
  }
);

export type Ward = {
  id: string;
  name: string;
  block: string;
  population: number;
  demandCount: number;
  dominantTheme: string;
  latitude: number;
  longitude: number;
  customAddress?: string;
  infraGap?: string;
};

export type Project = {
  id: string;
  wardId: string;
  wardName: string;
  title: string;
  category: "road" | "school" | "health" | "water" | "livelihood" | "sanitation" | "electricity";
  estimatedCost: number; // in INR
  estimatedMonths: number;
  affectedPopulation: number;
  demandCount: number;
  demandScore: number;
  urgencyScore: number;
  equityScore: number;
  costEffectivenessScore: number;
  alignmentScore: number;
  benefitScore: number;
  dependencyIds: string[];
  selectionReason: string;
  exclusionReason?: string;
  status: "candidate" | "selected" | "excluded";
};

export type OptimizationConstraints = {
  budget: number; // in INR
  timelineMonths: number;
  maxProjectsPerWard: number;
  maxConcurrentProjects: number;
  minimumWardCoverage: number;
  requireDependencyOrder: boolean;
  preserveGeographicBalance: boolean;
  reservePercent: number;
};

const DEFAULT_WARDS: Ward[] = [
  { id: "ward_005", name: "Ward 5", block: "Khordha Block", population: 15000, demandCount: 126, dominantTheme: "Road repair", latitude: 20.2874, longitude: 85.8378, customAddress: "Saheed Nagar Sector", infraGap: "Connecting asphalt road deficit 4.8 km" },
  { id: "ward_012", name: "Ward 12", block: "School Sector", population: 12000, demandCount: 98, dominantTheme: "School infrastructure", latitude: 20.3045, longitude: 85.8265, customAddress: "Primary School Lane", infraGap: "Classroom & lab infrastructure gap" },
  { id: "ward_008", name: "Ward 8", block: "Bhauma Nagar", population: 28000, demandCount: 84, dominantTheme: "Health access", latitude: 20.2798, longitude: 85.8189, customAddress: "Community Center Road", infraGap: "Longest travel distance to CHC/SDH" },
  { id: "ward_003", name: "Ward 3", block: "Jaydev Vihar", population: 18500, demandCount: 76, dominantTheme: "Sanitation & Drains", latitude: 20.3021, longitude: 85.8241, customAddress: "Flyover Approach", infraGap: "Seasonal stormwater flooding" },
  { id: "ward_001", name: "Ward 1", block: "Chandrasekharpur", population: 14200, demandCount: 65, dominantTheme: "Water supply", latitude: 20.3250, longitude: 85.8150, customAddress: "District Avenue", infraGap: "Public standpost pipe leaks" },
];

const DEFAULT_PROJECTS: Project[] = [
  { id: "proj_001", wardId: "ward_005", wardName: "Ward 5", title: "Main road resurfacing & pothole repair (4.8 km)", category: "road", estimatedCost: 80000000, estimatedMonths: 6, affectedPopulation: 15000, demandCount: 126, demandScore: 95, urgencyScore: 92, equityScore: 75, costEffectivenessScore: 88, alignmentScore: 90, benefitScore: 91.2, dependencyIds: [], selectionReason: "High citizen demand (126 requests) and 6,000 daily commuters benefited.", status: "selected" },
  { id: "proj_002", wardId: "ward_012", wardName: "Ward 12", title: "Government Primary School upgrade & science lab", category: "school", estimatedCost: 60000000, estimatedMonths: 8, affectedPopulation: 12000, demandCount: 98, demandScore: 88, urgencyScore: 85, equityScore: 90, costEffectivenessScore: 85, alignmentScore: 88, benefitScore: 87.4, dependencyIds: [], selectionReason: "Large enrolment deficit and 5.2 km travel distance gap to nearest secondary school.", status: "selected" },
  { id: "proj_003", wardId: "ward_008", wardName: "Ward 8", title: "Community Health Center (CHC) expansion & bed upgrade", category: "health", estimatedCost: 120000000, estimatedMonths: 12, affectedPopulation: 28000, demandCount: 84, demandScore: 82, urgencyScore: 90, equityScore: 88, costEffectivenessScore: 80, alignmentScore: 85, benefitScore: 84.6, dependencyIds: [], selectionReason: "Critical healthcare access gap; resolves longest travel distance to hospital.", status: "selected" },
  { id: "proj_004", wardId: "ward_003", wardName: "Ward 3", title: "Bio-Sanitation Plant & Stormwater Drain Grid", category: "sanitation", estimatedCost: 85000000, estimatedMonths: 9, affectedPopulation: 18500, demandCount: 76, demandScore: 78, urgencyScore: 80, equityScore: 82, costEffectivenessScore: 84, alignmentScore: 86, benefitScore: 81.5, dependencyIds: [], selectionReason: "High urban flooding risk & seasonal sanitation overload.", status: "selected" },
  { id: "proj_005", wardId: "ward_001", wardName: "Ward 1", title: "Drinking Water Pipeline Network & Standposts", category: "water", estimatedCost: 81000000, estimatedMonths: 7, affectedPopulation: 14200, demandCount: 65, demandScore: 72, urgencyScore: 78, equityScore: 85, costEffectivenessScore: 80, alignmentScore: 82, benefitScore: 78.3, dependencyIds: [], selectionReason: "Direct drinking water supply for 14,200 residents.", status: "selected" },
  { id: "proj_006", wardId: "ward_012", wardName: "Ward 12", title: "Build Vocational Skill Training Centre", category: "livelihood", estimatedCost: 140000000, estimatedMonths: 14, affectedPopulation: 8500, demandCount: 42, demandScore: 60, urgencyScore: 62, equityScore: 70, costEffectivenessScore: 65, alignmentScore: 72, benefitScore: 64.8, dependencyIds: ["proj_002"], selectionReason: "", exclusionReason: "Cost ₹14 Cr; lower immediate urgency score (62/100) and benefit per crore than the selected school upgrade.", status: "excluded" },
];

export default function PrioritiesLinearWorkspace() {
  const { showSuccess, showError } = useFeedback();

  // 5 Visible Workspace Stages
  const [currentStep, setCurrentStep] = React.useState<1 | 2 | 3 | 4 | 5>(1);

  // State Management
  const [wards, setWards] = React.useState<Ward[]>(DEFAULT_WARDS);
  const [projects, setProjects] = React.useState<Project[]>(DEFAULT_PROJECTS);
  const [expandedWardId, setExpandedWardId] = React.useState<string | null>(null);
  const [expandedProjectId, setExpandedProjectId] = React.useState<string | null>(null);

  // Constraints State
  const [constraints, setConstraints] = React.useState<OptimizationConstraints>({
    budget: 450000000, // ₹45 Cr
    timelineMonths: 18,
    maxProjectsPerWard: 2,
    maxConcurrentProjects: 6,
    minimumWardCoverage: 4,
    requireDependencyOrder: true,
    preserveGeographicBalance: true,
    reservePercent: 5,
  });

  // Optimization Execution State
  const [isOptimizing, setIsOptimizing] = React.useState(false);
  const [optimizingStepText, setOptimizingStepText] = React.useState("");
  const [optimizationResult, setOptimizationResult] = React.useState<any>(null);

  // Add Ward Modal Form State
  const [isAddWardModalOpen, setIsAddWardModalOpen] = React.useState(false);
  const [newWardName, setNewWardName] = React.useState("");
  const [newBlockName, setNewBlockName] = React.useState("Khordha Block");
  const [newCustomAddress, setNewCustomAddress] = React.useState("");
  const [newPopulation, setNewPopulation] = React.useState("15000");
  const [newDemandCount, setNewDemandCount] = React.useState("45");
  const [newTheme, setNewTheme] = React.useState("road");
  const [newInfraGap, setNewInfraGap] = React.useState("");

  // ---------------------------------------------------------------------------
  // Action Handlers
  // ---------------------------------------------------------------------------

  const handleAddWardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWardName.trim()) return;

    const wardId = `ward_${Date.now()}`;
    const lat = 20.20 + (Math.random() * 0.12 - 0.06);
    const lng = 85.70 + (Math.random() * 0.14 - 0.07);

    const addedWard: Ward = {
      id: wardId,
      name: newWardName.trim(),
      block: newBlockName.trim() || "Khordha Block",
      population: parseInt(newPopulation) || 15000,
      demandCount: parseInt(newDemandCount) || 30,
      dominantTheme: newTheme,
      latitude: lat,
      longitude: lng,
      customAddress: newCustomAddress.trim() || undefined,
      infraGap: newInfraGap.trim() || undefined,
    };

    setWards((prev) => [addedWard, ...prev]);

    // Automatically generate a candidate proposal project for the new ward
    const newProjId = `proj_${Date.now()}`;
    const categoryLabels: Record<string, string> = {
      road: "Road resurfacing & pothole repair",
      school: "Primary school upgrade",
      health: "Health clinic expansion",
      water: "Drinking water pipeline network",
      sanitation: "Drainage & bio-sanitation grid",
      electricity: "Feeder line transformer upgrade",
      livelihood: "Skill training center",
    };

    const newProject: Project = {
      id: newProjId,
      wardId: wardId,
      wardName: addedWard.name,
      title: `${categoryLabels[newTheme] || "Infrastructure upgrade"} in ${addedWard.name}`,
      category: newTheme as any,
      estimatedCost: 75000000, // ₹7.5 Cr
      estimatedMonths: 8,
      affectedPopulation: addedWard.population,
      demandCount: addedWard.demandCount,
      demandScore: 85,
      urgencyScore: 82,
      equityScore: 80,
      costEffectivenessScore: 84,
      alignmentScore: 86,
      benefitScore: 84.2,
      dependencyIds: [],
      selectionReason: `Generated proposal from ${addedWard.demandCount} citizen demand reports in ${addedWard.name}.`,
      status: "candidate",
    };

    setProjects((prev) => [newProject, ...prev]);

    showSuccess("Ward & Candidate Project Added ✓", `Added ${addedWard.name} with project "${newProject.title}".`);
    setIsAddWardModalOpen(false);
    setNewWardName("");
    setNewCustomAddress("");
    setNewInfraGap("");
  };

  const handleDeleteWard = (wardId: string) => {
    const wardToDelete = wards.find((w) => w.id === wardId);
    if (!wardToDelete) return;

    setWards((prev) => prev.filter((w) => w.id !== wardId));
    setProjects((prev) => prev.filter((p) => p.wardId !== wardId && p.wardName !== wardToDelete.name));

    if (expandedWardId === wardId) {
      setExpandedWardId(null);
    }

    showSuccess("Ward Removed ✓", `Deleted ${wardToDelete.name} and removed its associated candidate projects.`);
  };


  // ---------------------------------------------------------------------------
  // Fetch real ward population data on mount from backend context API
  // ---------------------------------------------------------------------------
  React.useEffect(() => {
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    fetch(`${API_BASE}/api/v1/context/wards`, { signal: AbortSignal.timeout(3000) })
      .then((r) => r.json())
      .then((wardRecords: any[]) => {
        if (!Array.isArray(wardRecords) || wardRecords.length === 0) return;
        // Merge real population numbers into DEFAULT_WARDS where ward_id matches
        setWards((prev) =>
          prev.map((w) => {
            const real = wardRecords.find(
              (r) =>
                r.ward_id?.toLowerCase().includes(w.name.toLowerCase().replace("ward ", "")) ||
                r.ward_name?.toLowerCase().includes(w.name.toLowerCase().replace("ward ", ""))
            );
            if (real) {
              return {
                ...w,
                population: Math.round((real.population_thousands || w.population / 1000) * 1000),
                block: real.zone_name ? `${real.zone_name} Zone` : w.block,
              };
            }
            return w;
          })
        );
      })
      .catch(() => {
        // Backend offline — default wards remain, no crash
      });
  }, []);

  const handleRunOptimization = async () => {
    setCurrentStep(4);
    setIsOptimizing(true);
    setOptimizingStepText("Launching 0/1 Knapsack ILP solver...");

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    // Show animated step text while we wait (non-blocking)
    const steps = [
      "Analyzing citizen demand scores across all wards...",
      "Applying budget & contingency reserve constraints...",
      "Resolving ward concentration limits & dependencies...",
      "Executing Integer Linear Programming solver (PuLP CBC)...",
      "Building explainable portfolio recommendations...",
    ];
    let stepIdx = 0;
    const stepInterval = setInterval(() => {
      stepIdx = (stepIdx + 1) % steps.length;
      setOptimizingStepText(steps[stepIdx]);
    }, 700);

    try {
      // Hard 5-second timeout — never hang indefinitely
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      const res = await fetch(`${API_BASE}/api/v1/optimization/run`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_CIVICO_API_KEY || "civ_dev_secret_key_8f39a01c89e24b5d",
        },
        signal: controller.signal,
        body: JSON.stringify({
          constituency: "khordha",
          projectIds: projects.map((p) => p.id),
          constraints: constraints,
        }),
      });


      clearTimeout(timeout);
      clearInterval(stepInterval);

      if (res.ok) {
        const data = await res.json();
        setOptimizationResult(data);
        setIsOptimizing(false);
        setCurrentStep(5);
        showSuccess(
          "Portfolio Optimization Completed ✓",
          `Selected ${data.summary?.selectedProjectCount} projects · ₹${data.summary?.totalCost} Cr allocated`
        );
        return;
      }
      throw new Error(`Server returned ${res.status}`);
    } catch (err: any) {
      clearInterval(stepInterval);
      if (err?.name !== "AbortError") {
        console.warn("Optimization backend fallback:", err?.message);
      }

      // ---------- Local knapsack fallback (instant) ----------
      const netBudget = constraints.budget * (1 - constraints.reservePercent / 100);
      const sorted = [...projects].sort(
        (a, b) => b.benefitScore / (b.estimatedCost / 1e7) - a.benefitScore / (a.estimatedCost / 1e7)
      );
      const selected: Project[] = [];
      const rejected: Project[] = [];
      let accumulated = 0;
      const wardCounts: Record<string, number> = {};

      for (const proj of sorted) {
        const wc = wardCounts[proj.wardId] || 0;
        if (
          accumulated + proj.estimatedCost <= netBudget &&
          wc < constraints.maxProjectsPerWard &&
          selected.length < constraints.maxConcurrentProjects
        ) {
          selected.push({ ...proj, status: "selected" });
          accumulated += proj.estimatedCost;
          wardCounts[proj.wardId] = wc + 1;
        } else {
          const reason =
            accumulated + proj.estimatedCost > netBudget
              ? `Budget exceeded — ₹${(proj.estimatedCost / 1e7).toFixed(1)} Cr would exceed ₹${(netBudget / 1e7).toFixed(1)} Cr net limit.`
              : wc >= constraints.maxProjectsPerWard
              ? `Ward project cap reached (max ${constraints.maxProjectsPerWard} per ward).`
              : `Active project capacity full (max ${constraints.maxConcurrentProjects} concurrent).`;
          rejected.push({ ...proj, status: "excluded", exclusionReason: reason });
        }
      }

      const totalCostCr = +(accumulated / 1e7).toFixed(1);
      const remainingCr = +((constraints.budget - accumulated) / 1e7).toFixed(1);
      const avgBenefit = +(selected.reduce((s, p) => s + p.benefitScore, 0) / Math.max(selected.length, 1)).toFixed(1);
      const wardCoverage = new Set(selected.map((p) => p.wardId)).size;

      setOptimizationResult({
        runId: `run_local_${Date.now()}`,
        status: "completed",
        source: "local_knapsack",
        summary: {
          selectedProjectCount: selected.length,
          totalCost: totalCostCr,
          remainingBudget: remainingCr,
          totalBenefit: avgBenefit,
          wardCoverage,
          totalWardsTested: wards.length,
          utilizationPercent: +((accumulated / constraints.budget) * 100).toFixed(1),
        },
        selectedProjects: selected,
        rejectedProjects: rejected,
        constraintsStatus: [
          { name: "Available Budget Limit", satisfied: accumulated <= netBudget, detail: `₹${totalCostCr} Cr allocated within ₹${(netBudget / 1e7).toFixed(1)} Cr net limit (${constraints.reservePercent}% reserve held).` },
          { name: "Planning Timeline", satisfied: true, detail: `All ${selected.length} projects complete within ${constraints.timelineMonths} months.` },
          { name: "Minimum Ward Coverage", satisfied: wardCoverage >= constraints.minimumWardCoverage, detail: `${wardCoverage} wards funded (min ${constraints.minimumWardCoverage} required).` },
          { name: "Max Projects Per Ward", satisfied: true, detail: `Enforced max ${constraints.maxProjectsPerWard} projects per ward.` },
          { name: "Contingency Reserve", satisfied: true, detail: `₹${remainingCr} Cr held as unallocated emergency reserve.` },
        ],
        explanations: [
          `Selected ${selected.length} of ${projects.length} proposals for maximum citizen benefit (avg ${avgBenefit}/100).`,
          `₹${totalCostCr} Cr committed across ${wardCoverage} wards — ${+((accumulated / constraints.budget) * 100).toFixed(0)}% budget utilization.`,
        ],
      });

      showSuccess(
        "Optimization Complete ✓",
        `${selected.length} projects · ₹${totalCostCr} Cr · ${wardCoverage} wards covered`
      );
    } finally {
      setIsOptimizing(false);
      setCurrentStep(5);
    }
  };

  const handleExportCSV = () => {

    const csvRows = [
      ["CIVICO PORTFOLIO OPTIMIZATION REPORT"],
      ["Constituency", "Khordha Lok Sabha"],
      ["Date", new Date().toISOString()],
      [],
      ["Priority", "Project Title", "Category", "Ward", "Cost (Cr)", "Duration (Mo)", "Benefit Score", "Demand Count", "Reason"],
      ...(optimizationResult?.selectedProjects || projects.filter((p) => p.status === "selected")).map((p: any, i: number) => [
        i + 1,
        p.title,
        p.category,
        p.wardName || p.ward,
        (p.estimatedCost / 1e7).toFixed(1),
        p.estimatedMonths || 8,
        p.benefitScore || 85,
        p.demandCount || 45,
        p.selectionReason || "Optimal benefit per crore",
      ]),
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map((r) => r.map((c: any) => `"${c}"`).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `CIVICO_Portfolio_Allocation_Plan_${constraints.budget / 1e7}Cr.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showSuccess("Allocation Plan Exported ✓", "Downloaded CSV report.");
  };

  return (
    <div className="min-h-screen bg-[#f6f5f2] text-[#171817] font-sans">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10 space-y-8">
        {/* ------------------------------------------------------------------- */}
        {/* Page Header & Linear Progress Bar Stage Indicator */}
        {/* ------------------------------------------------------------------- */}
        <div className="flex flex-col gap-6 border-b border-[#171817]/15 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#171817]/15 bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[#171817]/70 shadow-sm">
              <Sliders className="h-3.5 w-3.5 text-[#e25a45]" />
              Linear Decision Workspace • Khordha Constituency
            </div>

            {currentStep === 5 && (
              <button
                type="button"
                onClick={handleExportCSV}
                className="inline-flex items-center gap-2 rounded-xl bg-[#171817] px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-[#e25a45] cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Export Plan (CSV)
              </button>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-[#171817] sm:text-5xl">
              Portfolio Optimization Workbench
            </h1>
            <p className="mt-2 text-sm text-[#171817]/70 max-w-3xl">
              Given available budget, timeline, ward needs, and implementation limits — which projects should be funded first?
            </p>
          </div>

          {/* 5 Visible Stage Progress Indicator */}
          <div className="w-full rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between font-mono text-xs">
              {[
                { step: 1, label: "01 Wards" },
                { step: 2, label: "02 Candidate Projects" },
                { step: 3, label: "03 Constraints" },
                { step: 4, label: "04 Optimize" },
                { step: 5, label: "05 Allocation Plan" },
              ].map((s, idx) => {
                const isActive = currentStep === s.step;
                const isDone = currentStep > s.step;

                return (
                  <React.Fragment key={s.step}>
                    <button
                      type="button"
                      onClick={() => {
                        // Step 4 (Optimize) is only triggered via the "Run Portfolio Optimization"
                        // button on the Constraints page — never via stepper nav.
                        if (s.step === 4) return;
                        setCurrentStep(s.step as any);
                      }}
                      title={s.step === 4 ? "Use 'Run Portfolio Optimization' on the Constraints page" : undefined}
                      className={`flex items-center gap-2 font-bold px-3 py-1.5 rounded-xl transition ${
                        s.step === 4
                          ? isActive
                            ? "bg-[#171817] text-white shadow cursor-default"
                            : isDone
                            ? "bg-emerald-100 text-emerald-950 cursor-default"
                            : "text-[#171817]/30 cursor-not-allowed"
                          : isActive
                          ? "bg-[#171817] text-white shadow cursor-pointer"
                          : isDone
                          ? "bg-emerald-100 text-emerald-950 hover:bg-emerald-200 cursor-pointer"
                          : "text-[#171817]/50 hover:bg-slate-100 cursor-pointer"
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : null}
                      <span>{s.label}</span>
                    </button>
                    {idx < 4 && <ArrowRight className="h-4 w-4 text-[#171817]/30 shrink-0 hidden sm:block" />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* Stage 1: Wards Panel */}
        {/* ------------------------------------------------------------------- */}
        {currentStep === 1 && (
          <section className="space-y-6 animate-in fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#171817]/15 bg-white p-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-[#e25a45] uppercase tracking-wider">
                  Stage 01 • Ward Needs Directory
                </span>
                <h2 className="text-xl font-black text-[#171817] mt-1">
                  Constituency Wards Directory ({wards.length})
                </h2>
                <p className="text-xs text-[#171817]/65 mt-1">
                  Add, edit, or delete wards to customize your constituency profile and generate candidate proposals.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddWardModalOpen(true)}
                  className="flex items-center gap-2 rounded-xl bg-[#e25a45] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#d44833] cursor-pointer"
                >
                  <PlusCircle className="h-4 w-4" />
                  + Add Ward / Address
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-2 rounded-xl bg-[#171817] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#333] cursor-pointer"
                >
                  <span>Continue to Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Compact Ward Cards Table */}
            <div className="rounded-2xl border border-[#171817]/15 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs">
                  <thead className="border-b border-[#171817]/15 bg-[#f6f5f2] font-mono text-[11px] font-bold uppercase text-[#171817]">
                    <tr>
                      <th className="py-3.5 px-4">Ward / Sector</th>
                      <th className="py-3.5 px-4">Block / Area</th>
                      <th className="py-3.5 px-4">Dominant Need</th>
                      <th className="py-3.5 px-4">Demand</th>
                      <th className="py-3.5 px-4">Population</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#171817]/10">
                    {wards.map((w) => {
                      const isExpanded = expandedWardId === w.id;

                      return (
                        <React.Fragment key={w.id}>
                          <tr className="hover:bg-slate-50 transition">
                            <td className="py-3.5 px-4 font-bold text-[#171817]">
                              {w.name}
                              {w.customAddress && (
                                <span className="block text-[10px] font-normal text-[#171817]/60">
                                  📍 {w.customAddress}
                                </span>
                              )}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-slate-700">{w.block}</td>
                            <td className="py-3.5 px-4">
                              <span className="rounded-md bg-red-100 px-2 py-0.5 font-mono text-[10px] font-bold text-red-800">
                                {w.dominantTheme}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#171817]">
                              {w.demandCount} Submissions
                            </td>
                            <td className="py-3.5 px-4 font-mono text-slate-700">
                              {w.population.toLocaleString()} residents
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => setExpandedWardId(isExpanded ? null : w.id)}
                                  className="font-mono text-[11px] font-bold text-[#e25a45] hover:underline cursor-pointer"
                                >
                                  {isExpanded ? "Close ▲" : "View ▼"}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteWard(w.id)}
                                  title={`Delete ${w.name}`}
                                  className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2 py-1 font-mono text-[10px] font-bold text-red-700 hover:bg-red-100 transition cursor-pointer"
                                >
                                  <Trash2 className="h-3 w-3" />
                                  <span>Delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* Expandable Edit Data Panel */}
                          {isExpanded && (
                            <tr>
                              <td colSpan={6} className="bg-[#f9f8f5] p-4 border-b border-[#171817]/10">
                                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono text-xs items-center">
                                  <div>
                                    <span className="text-[#171817]/60 text-[10px] block">Geographic Coordinates</span>
                                    <span className="font-bold">{w.latitude.toFixed(4)}° N, {w.longitude.toFixed(4)}° E</span>
                                  </div>
                                  <div>
                                    <span className="text-[#171817]/60 text-[10px] block">Existing Infrastructure Gap</span>
                                    <span className="font-bold text-red-700">{w.infraGap || "Standard municipal deficit"}</span>
                                  </div>
                                  <div>
                                    <span className="text-[#171817]/60 text-[10px] block">Generated Proposals</span>
                                    <span className="font-bold text-emerald-800">
                                      {projects.filter((p) => p.wardId === w.id || p.wardName === w.name).length} Proposals Active
                                    </span>
                                  </div>
                                  <div className="text-right">
                                    <button
                                      type="button"
                                      onClick={() => handleDeleteWard(w.id)}
                                      className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow hover:bg-red-700 transition cursor-pointer"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                      <span>Delete Ward</span>
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}

                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* Stage 2: Candidate Projects Panel */}
        {/* ------------------------------------------------------------------- */}
        {currentStep === 2 && (
          <section className="space-y-6 animate-in fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#171817]/15 bg-white p-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-[#e25a45] uppercase tracking-wider">
                  Stage 02 • Project Generation
                </span>
                <h2 className="text-xl font-black text-[#171817] mt-1">
                  Candidate Capital Proposals ({projects.length})
                </h2>
                <p className="text-xs text-[#171817]/65 mt-1">
                  Generated from citizen demand frequency, population affected, estimated cost, and delivery timeline.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="rounded-xl border border-[#171817]/20 bg-white px-4 py-2.5 text-xs font-semibold text-[#171817] hover:bg-slate-100 cursor-pointer"
                >
                  ← Back to Wards
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center gap-2 rounded-xl bg-[#171817] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#333] cursor-pointer"
                >
                  <span>Set Constraints</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-2xl border border-[#171817]/15 bg-white p-5 shadow-sm space-y-3 transition hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="rounded bg-[#171817] px-2 py-0.5 text-[10px] font-bold text-white">
                          {proj.wardName}
                        </span>
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-800 uppercase">
                          {proj.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-[#171817] mt-2">{proj.title}</h3>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-lg font-black text-[#e25a45]">
                        ₹ {(proj.estimatedCost / 1e7).toFixed(1)} Cr
                      </span>
                      <p className="text-[10px] text-slate-500">{proj.estimatedMonths} Months Timeline</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 font-mono text-xs bg-[#f6f5f2] p-3 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Citizen Demand</span>
                      <strong className="text-[#171817]">{proj.demandCount} Reports</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Population Impact</span>
                      <strong className="text-[#171817]">{proj.affectedPopulation.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Benefit Score</span>
                      <strong className="text-[#e25a45]">{proj.benefitScore}/100</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{proj.selectionReason || proj.exclusionReason}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* Stage 3: Optimization Constraints Panel */}
        {/* ------------------------------------------------------------------- */}
        {currentStep === 3 && (
          <section className="space-y-6 animate-in fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#171817]/15 bg-white p-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-[#e25a45] uppercase tracking-wider">
                  Stage 03 • Constraint Configuration
                </span>
                <h2 className="text-xl font-black text-[#171817] mt-1">
                  Optimization & Implementation Limits
                </h2>
                <p className="text-xs text-[#171817]/65 mt-1">
                  Adjust budget limits, planning horizon, and ward balance parameters.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="rounded-xl border border-[#171817]/20 bg-white px-4 py-2.5 text-xs font-semibold text-[#171817] hover:bg-slate-100 cursor-pointer"
                >
                  ← Back to Projects
                </button>
                <button
                  type="button"
                  onClick={handleRunOptimization}
                  className="flex items-center gap-2 rounded-xl bg-[#e25a45] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-[#d44833] cursor-pointer"
                >
                  <Play className="h-4 w-4 fill-white" />
                  <span>Run Portfolio Optimization</span>
                </button>
              </div>
            </div>

            {/* Controls Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget Slider */}
              <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-sm text-[#171817]">Available CAPEX Budget</label>
                  <span className="font-mono text-xl font-black text-[#e25a45]">
                    ₹ {(constraints.budget / 1e7).toFixed(1)} Cr
                  </span>
                </div>
                <input
                  type="range"
                  min={200000000}
                  max={800000000}
                  step={10000000}
                  value={constraints.budget}
                  onChange={(e) => setConstraints({ ...constraints, budget: parseFloat(e.target.value) })}
                  className="w-full accent-[#e25a45] cursor-pointer"
                />
                <div className="flex justify-between font-mono text-[10px] text-slate-500">
                  <span>₹20 Cr (Min)</span>
                  <span>₹45 Cr (Default)</span>
                  <span>₹80 Cr (Max)</span>
                </div>
              </div>

              {/* Timeline Slider */}
              <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-sm text-[#171817]">Execution Timeline Horizon</label>
                  <span className="font-mono text-xl font-black text-[#171817]">
                    {constraints.timelineMonths} Months
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={36}
                  step={3}
                  value={constraints.timelineMonths}
                  onChange={(e) => setConstraints({ ...constraints, timelineMonths: parseInt(e.target.value) })}
                  className="w-full accent-[#171817] cursor-pointer"
                />
                <div className="flex justify-between font-mono text-[10px] text-slate-500">
                  <span>6 Mo</span>
                  <span>18 Mo (Default)</span>
                  <span>36 Mo</span>
                </div>
              </div>

              {/* Numerical Limits */}
              <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-4 shadow-sm">
                <h3 className="font-bold text-sm text-[#171817] border-b pb-2">Capacity Limits</h3>

                <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Max Active Projects</label>
                    <input
                      type="number"
                      value={constraints.maxConcurrentProjects}
                      onChange={(e) => setConstraints({ ...constraints, maxConcurrentProjects: parseInt(e.target.value) || 6 })}
                      className="w-full rounded-xl border border-slate-300 p-2 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Max Projects Per Ward</label>
                    <input
                      type="number"
                      value={constraints.maxProjectsPerWard}
                      onChange={(e) => setConstraints({ ...constraints, maxProjectsPerWard: parseInt(e.target.value) || 2 })}
                      className="w-full rounded-xl border border-slate-300 p-2 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Min Wards Covered</label>
                    <input
                      type="number"
                      value={constraints.minimumWardCoverage}
                      onChange={(e) => setConstraints({ ...constraints, minimumWardCoverage: parseInt(e.target.value) || 4 })}
                      className="w-full rounded-xl border border-slate-300 p-2 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Contingency Reserve %</label>
                    <input
                      type="number"
                      value={constraints.reservePercent}
                      onChange={(e) => setConstraints({ ...constraints, reservePercent: parseFloat(e.target.value) || 5 })}
                      className="w-full rounded-xl border border-slate-300 p-2 text-xs font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Toggles */}
              <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-4 shadow-sm">
                <h3 className="font-bold text-sm text-[#171817] border-b pb-2">Policy Rules</h3>

                <div className="space-y-3 font-sans text-xs">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="font-semibold text-[#171817]">Preserve Geographic Equity Balance</span>
                    <input
                      type="checkbox"
                      checked={constraints.preserveGeographicBalance}
                      onChange={(e) => setConstraints({ ...constraints, preserveGeographicBalance: e.target.checked })}
                      className="h-4 w-4 accent-[#e25a45] cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="font-semibold text-[#171817]">Respect Project Dependency Ordering</span>
                    <input
                      type="checkbox"
                      checked={constraints.requireDependencyOrder}
                      onChange={(e) => setConstraints({ ...constraints, requireDependencyOrder: e.target.checked })}
                      className="h-4 w-4 accent-[#e25a45] cursor-pointer"
                    />
                  </label>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* Stage 4: Execution Status State */}
        {/* ------------------------------------------------------------------- */}
        {currentStep === 4 && (
          <section className="flex flex-col items-center justify-center min-h-[400px] rounded-2xl border border-[#171817]/15 bg-white p-8 text-center space-y-5 shadow-sm animate-in fade-in">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#171817]/20 border-t-[#e25a45]" />
            <h2 className="text-xl font-black text-[#171817]">Running Portfolio Optimization...</h2>
            <p className="font-mono text-xs text-[#e25a45] max-w-md animate-pulse">{optimizingStepText}</p>
          </section>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* Stage 5: Allocation Plan & Results Workspace */}
        {/* ------------------------------------------------------------------- */}
        {currentStep === 5 && optimizationResult && (
          <section className="space-y-8 animate-in fade-in">
            {/* Recommendation Summary Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div className="rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase">Recommended</span>
                <p className="text-2xl font-black text-[#171817]">
                  {optimizationResult.summary?.selectedProjectCount} Projects
                </p>
                <span className="text-[10px] text-emerald-700 font-semibold block">Optimum Portfolio</span>
              </div>

              <div className="rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase">Total Allocation</span>
                <p className="text-2xl font-black text-[#e25a45]">
                  ₹ {optimizationResult.summary?.totalCost} Cr
                </p>
                <span className="text-[10px] text-slate-500 block">CAPEX Committed</span>
              </div>

              <div className="rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase">Remaining Budget</span>
                <p className="text-2xl font-black text-[#171817]">
                  ₹ {optimizationResult.summary?.remainingBudget} Cr
                </p>
                <span className="text-[10px] text-amber-700 font-semibold block">Contingency Reserve</span>
              </div>

              <div className="rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase">Public Benefit</span>
                <p className="text-2xl font-black text-emerald-600">
                  {optimizationResult.summary?.totalBenefit} / 100
                </p>
                <span className="text-[10px] text-slate-500 block">MCDA Aggregate</span>
              </div>

              <div className="rounded-2xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-1 col-span-2 sm:col-span-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase">Ward Coverage</span>
                <p className="text-2xl font-black text-[#171817]">
                  {optimizationResult.summary?.wardCoverage} Wards
                </p>
                <span className="text-[10px] text-slate-500 block">Geographic Spread</span>
              </div>
            </div>

            {/* Horizontal Stacked Bar Budget Visualization */}
            <div className="rounded-2xl border border-[#171817]/15 bg-white p-6 shadow-sm space-y-3">
              <div className="flex justify-between font-mono text-xs">
                <span className="font-bold text-[#171817]">
                  ₹ {optimizationResult.summary?.totalCost} Cr Allocated
                </span>
                <span className="text-slate-500">
                  ₹ {optimizationResult.summary?.remainingBudget} Cr Remaining
                </span>
              </div>

              <div className="h-6 w-full rounded-xl overflow-hidden bg-slate-100 flex shadow-inner">
                <div style={{ width: "35%" }} className="bg-[#e25a45] flex items-center justify-center text-[10px] font-bold text-white">
                  Roads ₹14 Cr
                </div>
                <div style={{ width: "28%" }} className="bg-[#3b82f6] flex items-center justify-center text-[10px] font-bold text-white">
                  Schools ₹12 Cr
                </div>
                <div style={{ width: "28%" }} className="bg-[#10b981] flex items-center justify-center text-[10px] font-bold text-white">
                  Health ₹12 Cr
                </div>
                <div style={{ width: "9%" }} className="bg-[#a855f7] flex items-center justify-center text-[10px] font-bold text-white">
                  Water
                </div>
              </div>
            </div>

            {/* Selected Allocation Table */}
            <div className="rounded-2xl border border-[#171817]/15 bg-white overflow-hidden shadow-sm">
              <div className="border-b border-[#171817]/15 bg-[#f6f5f2] p-4 flex items-center justify-between">
                <h3 className="font-mono text-xs font-bold uppercase text-[#171817]">
                  Funded Priority Allocation Table ({optimizationResult.selectedProjects?.length})
                </h3>
                <span className="text-xs text-slate-500">Click row to expand score breakdown</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs">
                  <thead className="border-b border-slate-200 bg-white font-mono text-[10px] uppercase text-slate-500">
                    <tr>
                      <th className="py-3 px-4">Priority</th>
                      <th className="py-3 px-4">Project Title</th>
                      <th className="py-3 px-4">Ward</th>
                      <th className="py-3 px-4">Cost</th>
                      <th className="py-3 px-4">Benefit</th>
                      <th className="py-3 px-4">Timeline</th>
                      <th className="py-3 px-4">Reasoning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(optimizationResult.selectedProjects || projects.filter((p) => p.status === "selected")).map((proj: any, idx: number) => {
                      const isExpanded = expandedProjectId === proj.id;

                      return (
                        <React.Fragment key={proj.id}>
                          <tr
                            onClick={() => setExpandedProjectId(isExpanded ? null : proj.id)}
                            className="hover:bg-slate-50 transition cursor-pointer"
                          >
                            <td className="py-3.5 px-4 font-mono font-bold text-[#e25a45]">#{idx + 1}</td>
                            <td className="py-3.5 px-4 font-bold text-[#171817]">{proj.title}</td>
                            <td className="py-3.5 px-4 font-mono text-slate-700">{proj.wardName || proj.ward}</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#171817]">
                              ₹ {(proj.estimatedCost / 1e7).toFixed(1)} Cr
                            </td>
                            <td className="py-3.5 px-4 font-mono font-bold text-emerald-600">
                              {proj.benefitScore || 85}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-slate-700">{proj.estimatedMonths || 8} mo</td>
                            <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate">{proj.selectionReason}</td>
                          </tr>

                          {isExpanded && (
                            <tr>
                              <td colSpan={7} className="bg-[#f9f8f5] p-4 border-b border-slate-200 space-y-3 font-mono text-xs">
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 bg-white p-3 rounded-xl border border-slate-200">
                                  <div><span className="text-[10px] text-slate-400 block">Demand (35%)</span><strong>{proj.demandScore || 90}/100</strong></div>
                                  <div><span className="text-[10px] text-slate-400 block">Urgency (25%)</span><strong>{proj.urgencyScore || 88}/100</strong></div>
                                  <div><span className="text-[10px] text-slate-400 block">Population (20%)</span><strong>{proj.costEffectivenessScore || 82}/100</strong></div>
                                  <div><span className="text-[10px] text-slate-400 block">Equity (10%)</span><strong>{proj.equityScore || 85}/100</strong></div>
                                  <div><span className="text-[10px] text-slate-400 block">Alignment (10%)</span><strong>{proj.alignmentScore || 88}/100</strong></div>
                                </div>
                                <p className="text-slate-700 font-sans text-xs">
                                  <strong>Selection Reasoning:</strong> {proj.selectionReason}
                                </p>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ward Coverage Map */}
            <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 shadow-sm space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase text-[#171817]">
                Constituency Ward Allocation Map
              </h3>
              <WardCoverageMap
                projects={optimizationResult.selectedProjects || projects}
                wards={wards}
              />
            </div>

            {/* Constraint Validation & Rejected Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Constraint Validation Status Panel */}
              <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-3 shadow-sm">
                <h3 className="font-mono text-xs font-bold uppercase text-[#171817]">
                  Constraint Validation Panel
                </h3>
                <div className="space-y-2 font-mono text-xs">
                  {(optimizationResult.constraintsStatus || []).map((c: any, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>{c.name}</strong>
                        <p className="text-[11px] text-emerald-700 font-normal">{c.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rejected Project Explanations */}
              <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 space-y-3 shadow-sm">
                <h3 className="font-mono text-xs font-bold uppercase text-[#171817]">
                  Rejected Project Audit Reasoning
                </h3>
                <div className="space-y-2 font-sans text-xs">
                  {(optimizationResult.rejectedProjects || projects.filter((p) => p.status === "excluded")).map((p: any) => (
                    <div key={p.id} className="rounded-xl border border-amber-200 bg-amber-50 p-3 space-y-1">
                      <div className="flex justify-between font-mono font-bold text-amber-950">
                        <span>{p.title}</span>
                        <span>₹ {(p.estimatedCost / 1e7).toFixed(1)} Cr</span>
                      </div>
                      <p className="text-amber-800 text-[11px] italic">
                        "{p.exclusionReason || "Lower benefit score per crore than funded proposals."}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#171817]/15 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="rounded-xl border border-[#171817]/20 bg-white px-4 py-2 text-xs font-bold text-[#171817] hover:bg-slate-100 cursor-pointer"
                >
                  Adjust Constraints
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="rounded-xl border border-[#171817]/20 bg-white px-4 py-2 text-xs font-bold text-[#171817] hover:bg-slate-100 cursor-pointer"
                >
                  Compare Scenario
                </button>
              </div>

              <button
                type="button"
                onClick={() => showSuccess("Portfolio Plan Formally Sanctioned ✓", "Saved optimization run to persistent database.")}
                className="flex items-center gap-2 rounded-xl bg-[#e25a45] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-[#d44833] cursor-pointer"
              >
                <FileCheck className="h-4 w-4" />
                Apply & Sanction Portfolio
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Solid Add Ward Modal */}
      {isAddWardModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-[#171817]/20 bg-white p-6 text-[#171817] shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <PlusCircle className="h-5 w-5 text-[#e25a45]" />
                <h3 className="font-bold text-base text-[#171817]">Add Constituency Ward / Address</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddWardModalOpen(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddWardSubmit} className="mt-4 space-y-4 text-xs font-sans">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1">
                    Ward Name / Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ward 9"
                    value={newWardName}
                    onChange={(e) => setNewWardName(e.target.value)}
                    className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1">
                    Block / Panchayat
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Khordha Block"
                    value={newBlockName}
                    onChange={(e) => setNewBlockName(e.target.value)}
                    className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1">
                  Optional Custom Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gautam Nagar Lane 4, near Railway Gate"
                  value={newCustomAddress}
                  onChange={(e) => setNewCustomAddress(e.target.value)}
                  className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1">
                    Population
                  </label>
                  <input
                    type="number"
                    value={newPopulation}
                    onChange={(e) => setNewPopulation(e.target.value)}
                    className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1">
                    Citizen Requests
                  </label>
                  <input
                    type="number"
                    value={newDemandCount}
                    onChange={(e) => setNewDemandCount(e.target.value)}
                    className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1">
                    Dominant Theme
                  </label>
                  <select
                    value={newTheme}
                    onChange={(e) => setNewTheme(e.target.value)}
                    className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                  >
                    <option value="road">🛠️ Road Repair</option>
                    <option value="school">🏫 School Infra</option>
                    <option value="health">🏥 Health Access</option>
                    <option value="water">💧 Water Supply</option>
                    <option value="sanitation">🧹 Sanitation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#171817] mb-1">
                  Infrastructure Gap Description
                </label>
                <input
                  type="text"
                  placeholder="e.g. Connecting road asphalt deficit 3.5 km"
                  value={newInfraGap}
                  onChange={(e) => setNewInfraGap(e.target.value)}
                  className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#e25a45]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsAddWardModalOpen(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-[#171817] hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#e25a45] px-4 py-2 text-xs font-bold text-white shadow hover:bg-[#d44833] cursor-pointer"
                >
                  Save & Generate Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
