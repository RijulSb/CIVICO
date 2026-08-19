"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import KnapsackControls from "@/components/priorities/KnapsackControls";
import {
  ArrowUpRight,
  FileSpreadsheet,
  IndianRupee,
  ShieldCheck,
  Sliders,
} from "lucide-react";

const PortfolioSimulationCanvas = dynamic(
  () => import("@/components/priorities/PortfolioSimulationCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#f4f3ef]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#171817]/20 border-t-[#e25a45]" />
      </div>
    ),
  },
);

export default function Dashboard4BudgetingWorkbench() {
  const [totalBudgetCr, setTotalBudgetCr] = React.useState(45);
  const [maxRegionalCapPercent, setMaxRegionalCapPercent] = React.useState(35);
  const [timelineMonths, setTimelineMonths] = React.useState(18);
  const [isOptimizing, setIsOptimizing] = React.useState(false);

  const handleRunOptimization = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f6f5f2] text-[#171817] font-sans">
      <Header />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-10 border-b border-[#171817]/15 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#171817]/15 bg-white px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#171817]/70 shadow-sm">
              <Sliders className="h-3.5 w-3.5 text-[#e25a45]" />
              Finance optimization workspace
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-[#171817]/20 bg-white px-4 py-2 text-sm font-semibold text-[#171817] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#171817] hover:shadow-md"
              >
                <FileSpreadsheet className="h-4 w-4 text-[#e25a45]" />
                Export Excel
              </button>

              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/20 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <ShieldCheck className="h-4 w-4" />
                0/1 Knapsack Active
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.28em] text-[#171817]/60 lg:text-left">
                Dashboard 4 - Finance View
              </p>
              <h1 className="text-center text-5xl font-black uppercase leading-[0.95] tracking-normal text-[#202020] sm:text-6xl lg:text-left lg:text-7xl">
                Portfolio Optimization & Budgeting Workbench
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-[#171817]/65 lg:mx-0 lg:text-left">
                Policy directors and budget allocation committees can tune CAPEX
                constraints, compare portfolio scenarios, and sanction a practical
                allocation plan from one calm workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#171817]/50">
                  Active Budget
                </span>
                <IndianRupee className="h-5 w-5 text-[#e25a45]" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-black text-[#171817]">
                    {totalBudgetCr} Cr
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#171817]/50">
                    CAPEX
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#171817]">
                    {timelineMonths} Mo
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#171817]/50">
                    Timeline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <article className="overflow-hidden rounded-2xl border border-[#171817]/15 bg-white shadow-sm transition duration-200 hover:shadow-md">
            <div className="flex flex-col gap-4 border-b border-[#171817]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#e25a45]">
                  Section 01
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-normal text-[#171817]">
                  Optimization Constraints
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#171817]/60">
                Budget, equity cap, timeline, and dependency controls are grouped
                into a focused input box so the working model is easy to adjust.
              </p>
            </div>

            <div className="h-[720px] overflow-hidden bg-[#eeede9]">
              <KnapsackControls
                totalBudgetCr={totalBudgetCr}
                maxRegionalCapPercent={maxRegionalCapPercent}
                timelineMonths={timelineMonths}
                onBudgetChange={setTotalBudgetCr}
                onRegionalCapChange={setMaxRegionalCapPercent}
                onTimelineChange={setTimelineMonths}
                onRunOptimization={handleRunOptimization}
                isOptimizing={isOptimizing}
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[#171817]/15 bg-white shadow-sm transition duration-200 hover:shadow-md">
            <div className="flex flex-col gap-4 border-b border-[#171817]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#e25a45]">
                  Section 02
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-normal text-[#171817]">
                  Portfolio Allocation Sandbox
                </h2>
              </div>
              <button
                type="button"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#171817] px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#e25a45] hover:shadow-md"
              >
                Compare Scenarios
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="h-[760px] overflow-hidden bg-[#f4f3ef]">
              <PortfolioSimulationCanvas />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
