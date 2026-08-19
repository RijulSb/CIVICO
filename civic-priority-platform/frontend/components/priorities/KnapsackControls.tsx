"use client";

import * as React from "react";
import {
  Sliders,
  IndianRupee,
  Calendar,
  Percent,
  Link as LinkIcon,
  Play,
  RotateCcw,
  Sparkles,
  Layers,
  Info,
} from "lucide-react";

export interface ProjectDependency {
  id: string;
  prerequisiteId: string;
  prerequisiteTitle: string;
  targetId: string;
  targetTitle: string;
  status: "Satisfied" | "Pending Prerequisite";
}

export interface KnapsackControlsProps {
  totalBudgetCr: number;
  maxRegionalCapPercent: number;
  timelineMonths: number;
  onBudgetChange: (val: number) => void;
  onRegionalCapChange: (val: number) => void;
  onTimelineChange: (val: number) => void;
  onRunOptimization: () => void;
  isOptimizing?: boolean;
}

export function KnapsackControls({
  totalBudgetCr,
  maxRegionalCapPercent,
  timelineMonths,
  onBudgetChange,
  onRegionalCapChange,
  onTimelineChange,
  onRunOptimization,
  isOptimizing = false,
}: KnapsackControlsProps) {
  const [dependencies] = React.useState<ProjectDependency[]>([
    {
      id: "dep-1",
      prerequisiteId: "proj-402",
      prerequisiteTitle: "Road Expansion #402 (Janpath Corridor)",
      targetId: "proj-102",
      targetTitle: "Vocational School #102 (Ward 14)",
      status: "Satisfied",
    },
    {
      id: "dep-2",
      prerequisiteId: "proj-301",
      prerequisiteTitle: "Main Water Culvert #301",
      targetId: "proj-205",
      targetTitle: "Bio-Sanitation Plant #205",
      status: "Pending Prerequisite",
    },
  ]);

  return (
    <aside className="flex h-full w-full flex-col border-r border-[#171817]/15 bg-[#eeede9] font-sans">
      {/* Executive Sub-Header */}
      <div className="border-b border-[#171817]/15 bg-[#171817] p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-[#e25a45] uppercase tracking-wider">
            <Sliders className="h-4 w-4 animate-pulse" />
            <span>Knapsack Solver • Finance View</span>
          </div>
          <span className="rounded-full bg-[#e25a45] px-2.5 py-0.5 font-mono text-[10px] font-bold text-white">
            0/1 KNAPSACK
          </span>
        </div>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-white">
          Optimization Constraints
        </h2>
        <p className="font-mono text-xs text-white/60">
          Set CAPEX limits & dependency links for portfolio selection
        </p>
      </div>

      {/* Main Sliders & Control Panel */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* Dynamic Constraint Slider 1: Total Budget (₹ Cr) */}
        <div className="rounded-xl border border-[#171817]/20 bg-white p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs font-bold text-[#171817]">
              <IndianRupee className="h-4 w-4 text-[#e25a45]" />
              <span>Total Available CAPEX Budget</span>
            </label>
            <span className="font-mono text-sm font-bold text-[#e25a45]">
              ₹ {totalBudgetCr} Cr
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            value={totalBudgetCr}
            onChange={(e) => onBudgetChange(parseFloat(e.target.value))}
            className="h-2 w-full accent-[#e25a45] cursor-pointer"
          />
          <div className="flex justify-between font-mono text-[11px] text-[#777872]">
            <span>Min: ₹ 5 Cr</span>
            <span>Max: ₹ 100 Cr</span>
          </div>
        </div>

        {/* Dynamic Constraint Slider 2: Max Regional Cap (%) */}
        <div className="rounded-xl border border-[#171817]/20 bg-white p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs font-bold text-[#171817]">
              <Percent className="h-4 w-4 text-[#3b82f6]" />
              <span>Max Regional Expenditure Cap</span>
            </label>
            <span className="font-mono text-sm font-bold text-[#3b82f6]">
              {maxRegionalCapPercent}% Per Ward
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            step="5"
            value={maxRegionalCapPercent}
            onChange={(e) => onRegionalCapChange(parseFloat(e.target.value))}
            className="h-2 w-full accent-[#3b82f6] cursor-pointer"
          />
          <div className="flex justify-between font-mono text-[11px] text-[#777872]">
            <span>Equity Floor: 10%</span>
            <span>Ceiling: 60%</span>
          </div>
        </div>

        {/* Dynamic Constraint Slider 3: Timeline Deadline (Months) */}
        <div className="rounded-xl border border-[#171817]/20 bg-white p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs font-bold text-[#171817]">
              <Calendar className="h-4 w-4 text-[#10b981]" />
              <span>Execution Timeline Deadline</span>
            </label>
            <span className="font-mono text-sm font-bold text-[#10b981]">
              {timelineMonths} Months
            </span>
          </div>
          <input
            type="range"
            min="6"
            max="36"
            step="3"
            value={timelineMonths}
            onChange={(e) => onTimelineChange(parseInt(e.target.value))}
            className="h-2 w-full accent-[#10b981] cursor-pointer"
          />
          <div className="flex justify-between font-mono text-[11px] text-[#777872]">
            <span>Fast-track: 6 Mo</span>
            <span>Multi-Year: 36 Mo</span>
          </div>
        </div>

        {/* Project Dependency Builder */}
        <div className="rounded-xl border border-[#171817]/20 bg-white p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-[#171817]">
              <LinkIcon className="h-4 w-4 text-[#e25a45]" />
              <span>Project Dependency Builder</span>
            </div>
            <span className="font-mono text-[10px] font-bold text-[#777872]">
              2 Active Rules
            </span>
          </div>
          <div className="space-y-2">
            {dependencies.map((dep) => (
              <div
                key={dep.id}
                className="rounded-lg bg-[#f4f3ef] p-2.5 border border-[#171817]/10 font-mono text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#171817]">{dep.prerequisiteTitle}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${
                      dep.status === "Satisfied"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {dep.status}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#777872]">
                  <span>↳ Must precede:</span>
                  <strong className="text-[#171817]">{dep.targetTitle}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Execute Optimization Button Footer */}
      <div className="border-t border-[#171817]/15 bg-[#e2e1db] p-4">
        <button
          type="button"
          onClick={onRunOptimization}
          disabled={isOptimizing}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#e25a45] text-white font-semibold text-base shadow-md transition hover:bg-[#d44833] active:scale-[0.99] disabled:opacity-50"
        >
          {isOptimizing ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <>
              <Play className="h-5 w-5 fill-current" />
              <span>Run Knapsack Optimizer</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

export default KnapsackControls;
