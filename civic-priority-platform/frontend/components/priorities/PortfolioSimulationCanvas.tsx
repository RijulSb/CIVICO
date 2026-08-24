"use client";

import * as React from "react";
import {
  Briefcase,
  TrendingUp,
  Users,
  IndianRupee,
  CheckCircle2,
  AlertCircle,
  BarChart2,
  Layers,
  ArrowRightLeft,
  Sparkles,
  FileCheck,
  Sliders,
  ShieldCheck,
} from "lucide-react";

export interface OptimizedProject {
  id: string;
  code: string;
  title: string;
  category: string;
  costCr: number;
  livesAffected: number;
  priorityScore: number;
  ward: string;
  selectedPlanA: boolean;
  selectedPlanB: boolean;
  displacedProjectCode?: string;
}

const mockProjects: OptimizedProject[] = [
  {
    id: "proj-1",
    code: "PROJ-101",
    title: "Ward 14 Drinking Water & Pipeline Replacement",
    category: "Water & Sanitation",
    costCr: 12.5,
    livesAffected: 38400,
    priorityScore: 94,
    ward: "Ward 14",
    selectedPlanA: true,
    selectedPlanB: true,
  },
  {
    id: "proj-2",
    code: "PROJ-102",
    title: "Janpath Corridor Smart Mobility & Pothole Repair",
    category: "Roads & Mobility",
    costCr: 18.0,
    livesAffected: 62000,
    priorityScore: 91,
    ward: "Ward 08",
    selectedPlanA: true,
    selectedPlanB: false,
  },
  {
    id: "proj-3",
    code: "PROJ-103",
    title: "Unit 3 Bio-Sanitation Plant & Waste Grid",
    category: "Sanitation",
    costCr: 8.5,
    livesAffected: 24500,
    priorityScore: 84,
    ward: "Ward 03",
    selectedPlanA: true,
    selectedPlanB: true,
  },
  {
    id: "proj-4",
    code: "PROJ-104",
    title: "Patia Primary Health Center Modernization",
    category: "Healthcare",
    costCr: 14.0,
    livesAffected: 41000,
    priorityScore: 78,
    ward: "Ward 01",
    selectedPlanA: false,
    selectedPlanB: true,
  },
  {
    id: "proj-5",
    code: "PROJ-105",
    title: "Green Canopy & Urban Park Infrastructure",
    category: "Environment",
    costCr: 6.0,
    livesAffected: 18000,
    priorityScore: 68,
    ward: "Ward 22",
    selectedPlanA: false,
    selectedPlanB: false,
    displacedProjectCode: "PROJ-105 Evicted by Knapsack Solver to stay in Budget",
  },
];

export function PortfolioSimulationCanvas() {
  const [activePlan, setActivePlan] = React.useState<"planA" | "planB" | "compare">("compare");
  const [activeConstraintScenario, setActiveConstraintScenario] = React.useState<"baseline" | "strict_equity">("baseline");

  // Plan A Metrics
  const planAProjects = mockProjects.filter((p) => p.selectedPlanA);
  const planACost = planAProjects.reduce((sum, p) => sum + p.costCr, 0);
  const planALives = planAProjects.reduce((sum, p) => sum + p.livesAffected, 0);

  // Plan B Metrics
  const planBProjects = mockProjects.filter((p) => p.selectedPlanB);
  const planBCost = planBProjects.reduce((sum, p) => sum + p.costCr, 0);
  const planBLives = planBProjects.reduce((sum, p) => sum + p.livesAffected, 0);

  return (
    <div className="flex h-full w-full flex-col bg-[#f4f3ef] font-sans">
      {/* Simulation Header */}
      <div className="flex items-center justify-between border-b border-[#171817]/15 bg-[#171817] p-4 text-white">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#e25a45] uppercase tracking-wider">
            <Briefcase className="h-4 w-4 animate-pulse" />
            <span>Simulation Canvas • Optimization Constraint Sandbox</span>
          </div>
          <h2 className="mt-1 text-lg font-bold tracking-tight text-white">
            Portfolio Allocation & Tradeoff Analysis (Ward Level)
          </h2>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 rounded-xl bg-white/10 p-1 font-mono text-xs text-white">
          <button
            type="button"
            onClick={() => setActivePlan("planA")}
            className={`rounded-lg px-3 py-1.5 font-semibold transition cursor-pointer ${
              activePlan === "planA" ? "bg-[#e25a45] text-white" : "text-white/70 hover:bg-white/10"
            }`}
          >
            Plan A (Max Impact)
          </button>
          <button
            type="button"
            onClick={() => setActivePlan("planB")}
            className={`rounded-lg px-3 py-1.5 font-semibold transition cursor-pointer ${
              activePlan === "planB" ? "bg-[#3b82f6] text-white" : "text-white/70 hover:bg-white/10"
            }`}
          >
            Plan B (Equity Weighted)
          </button>
          <button
            type="button"
            onClick={() => setActivePlan("compare")}
            className={`rounded-lg px-3 py-1.5 font-semibold transition cursor-pointer ${
              activePlan === "compare" ? "bg-white text-[#171817]" : "text-white/70 hover:bg-white/10"
            }`}
          >
            <ArrowRightLeft className="h-3.5 w-3.5 inline mr-1" />
            Compare Optimization Constraints
          </button>
        </div>
      </div>

      {/* Main Sandbox Canvas */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Compare Optimization Constraints Panel */}
        {activePlan === "compare" && (
          <div className="rounded-2xl border border-[#171817]/20 bg-white p-5 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#171817] uppercase tracking-wider">
                <Sliders className="h-4 w-4 text-[#e25a45]" />
                <span>Compare Optimization Constraints (Plan A vs Plan B)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> PuLP ILP Solver Active
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {/* Plan A Column */}
              <div className="rounded-xl border border-[#e25a45]/30 bg-[#eeede9]/50 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#e25a45] uppercase tracking-wider">
                    Plan A: Maximum Citizen Impact
                  </span>
                  <span className="rounded bg-[#e25a45] px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                    OPTIMAL IMPACT
                  </span>
                </div>

                <div className="space-y-1 font-mono text-[11px] text-[#777872] bg-white p-2.5 rounded-lg border border-slate-200">
                  <p>• CAPEX Limit: <strong className="text-[#171817]">₹ 45.0 Cr</strong></p>
                  <p>• Regional Equity Cap: <strong className="text-[#171817]">35% max / ward</strong></p>
                  <p>• Max Ward Projects: <strong className="text-[#171817]">3 per ward</strong></p>
                </div>

                <div className="grid grid-cols-2 gap-2 font-mono text-xs bg-white p-3 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-[#777872] text-[10px]">CAPEX Spent</span>
                    <p className="font-bold text-[#171817] text-base">₹ {planACost.toFixed(1)} Cr</p>
                  </div>
                  <div>
                    <span className="text-[#777872] text-[10px]">Lives Affected</span>
                    <p className="font-bold text-[#e25a45] text-base">{planALives.toLocaleString()}</p>
                  </div>
                </div>

                <p className="font-mono text-xs text-[#777872]">
                  Efficiency Metric: <strong className="text-[#171817]">₹ {( (planACost * 10000000) / planALives ).toFixed(0)} / Person Affected</strong>
                </p>
              </div>

              {/* Plan B Column */}
              <div className="rounded-xl border border-[#3b82f6]/30 bg-[#eeede9]/50 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#3b82f6] uppercase tracking-wider">
                    Plan B: Regional Equity Weighted
                  </span>
                  <span className="rounded bg-[#3b82f6] px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                    EQUITY BALANCED
                  </span>
                </div>

                <div className="space-y-1 font-mono text-[11px] text-[#777872] bg-white p-2.5 rounded-lg border border-slate-200">
                  <p>• CAPEX Limit: <strong className="text-[#171817]">₹ 35.0 Cr</strong></p>
                  <p>• Regional Equity Cap: <strong className="text-[#171817]">25% max / ward</strong></p>
                  <p>• Max Ward Projects: <strong className="text-[#171817]">2 per ward</strong></p>
                </div>

                <div className="grid grid-cols-2 gap-2 font-mono text-xs bg-white p-3 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-[#777872] text-[10px]">CAPEX Spent</span>
                    <p className="font-bold text-[#171817] text-base">₹ {planBCost.toFixed(1)} Cr</p>
                  </div>
                  <div>
                    <span className="text-[#777872] text-[10px]">Lives Affected</span>
                    <p className="font-bold text-[#3b82f6] text-base">{planBLives.toLocaleString()}</p>
                  </div>
                </div>

                <p className="font-mono text-xs text-[#777872]">
                  Efficiency Metric: <strong className="text-[#171817]">₹ {( (planBCost * 10000000) / planBLives ).toFixed(0)} / Person Affected</strong>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Project Selection & Allocation Matrix List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-[#777872]">
            <span>Candidate Capital Projects ({mockProjects.length}) — Ward Allocation</span>
            <span>Knapsack Selection Matrix</span>
          </div>

          {mockProjects.map((proj) => {
            const isPlanA = proj.selectedPlanA;
            const isPlanB = proj.selectedPlanB;
            return (
              <div
                key={proj.id}
                className="rounded-xl border border-[#171817]/15 bg-white p-4 shadow-sm space-y-3 transition hover:border-[#171817]/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#777872]">
                      <span className="font-bold text-[#171817]">{proj.code}</span>
                      <span>• {proj.ward}</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700">
                        {proj.category}
                      </span>
                    </div>
                    <h3 className="mt-1 text-base font-bold text-[#171817]">{proj.title}</h3>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-lg font-bold text-[#e25a45]">₹ {proj.costCr} Cr</span>
                    <p className="text-[11px] text-[#777872]">Estimated CAPEX</p>
                  </div>
                </div>

                {proj.displacedProjectCode && (
                  <div className="rounded-lg bg-amber-50 border border-amber-200 p-2 font-mono text-[10px] text-amber-900 flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>Tradeoff Note: {proj.displacedProjectCode}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 font-mono text-xs">
                  <div className="flex items-center gap-4 text-[#777872]">
                    <span>Lives Affected: <strong className="text-[#171817]">{proj.livesAffected.toLocaleString()}</strong></span>
                    <span>Priority Score: <strong className="text-[#e25a45]">{proj.priorityScore}/100</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                        isPlanA ? "bg-[#e25a45] text-white" : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      Plan A {isPlanA ? "✓" : "—"}
                    </span>
                    <span
                      className={`rounded px-2.5 py-1 text-[11px] font-bold ${
                        isPlanB ? "bg-[#3b82f6] text-white" : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      Plan B {isPlanB ? "✓" : "—"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Canvas Footer */}
      <div className="border-t border-[#171817]/15 bg-[#e2e1db] p-3 font-mono text-xs text-[#777872] flex items-center justify-between">
        <span>Optimization Algorithm: Branch & Bound 0/1 Knapsack (PuLP ILP Engine)</span>
        <button
          type="button"
          className="flex items-center gap-1 font-bold text-[#171817] hover:text-[#e25a45] transition cursor-pointer"
        >
          <FileCheck className="h-4 w-4 text-[#e25a45]" />
          <span>Formally Sanction Portfolio Allocation</span>
        </button>
      </div>
    </div>
  );
}

export default PortfolioSimulationCanvas;
