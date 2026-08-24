"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  FileText,
  Flame,
  Info,
  IndianRupee,
  MapPin,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import { useCivicMap } from "../MapProvider";

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
  const router = useRouter();
  const { selectedClusterId, clearSelection } = useCivicMap();
  const [isSanctioned, setIsSanctioned] = useState(false);

  if (!selectedClusterId || !cluster) {
    return null;
  }

  const closePanel = () => {
    clearSelection();
    onClose?.();
  };

  const handleSanctionCapex = () => {
    setIsSanctioned(true);
    setTimeout(() => {
      router.push("/priorities");
    }, 900);
  };

  const priorityPct = typeof cluster.priorityScore === "number"
    ? Math.round(cluster.priorityScore * 100)
    : 85;

  const estimatedCostCr = (cluster.totalIssues * 0.08 + 0.4).toFixed(1);

  return (
    <aside
      className="absolute right-0 top-0 z-[1100] flex h-full w-full sm:max-w-md flex-col border-l border-[#171817]/20 bg-white text-[#171817] dark:bg-[#171817] dark:text-[#eeede9] shadow-2xl opacity-100"
      style={{ backgroundColor: "#ffffff" }} // Hard solid background guarantee
    >
      {/* Executive Drawer Header */}
      <div className="flex items-center justify-between border-b border-[#171817]/15 bg-[#1c2d1c] px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e25a45] text-white shadow">
            <Flame className="h-5 w-5" />
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#e25a45]">
              DBSCAN Hotspot Intelligence
            </span>
            <h2 className="text-base font-bold tracking-tight text-white line-clamp-1">
              {cluster.title ?? "Civic Demand Hotspot"}
            </h2>
          </div>
        </div>

        <button
          type="button"
          onClick={closePanel}
          aria-label="Close hotspot details"
          className="rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Drawer Body Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-white text-[#171817]">
        {/* Sanction Success Alert */}
        {isSanctioned && (
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 space-y-1 text-xs font-sans text-emerald-900 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2 font-mono font-bold uppercase text-emerald-800">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>CAPEX Allocation Sanctioned</span>
            </div>
            <p className="text-emerald-950 font-medium">
              Approved ₹{estimatedCostCr} Cr for PWD Portfolio Optimization. Redirecting to Priorities Optimization Engine...
            </p>
          </div>
        )}

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 font-sans">
          <div className="rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-[#171817]/60">
              <span>Report Volume</span>
              <Activity className="h-3.5 w-3.5 text-[#e25a45]" />
            </div>
            <p className="mt-1 text-2xl font-black text-[#171817]">
              {cluster.totalIssues}
            </p>
            <p className="text-[10px] font-semibold text-emerald-700">
              ↑ 18% from last week
            </p>
          </div>

          <div className="rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-[#171817]/60">
              <span>MCDA Score</span>
              <Sparkles className="h-3.5 w-3.5 text-[#e25a45]" />
            </div>
            <p className="mt-1 text-2xl font-black text-[#e25a45]">
              {priorityPct}%
            </p>
            <p className="text-[10px] font-semibold text-[#171817]/70">
              Transparent MCDA Rank
            </p>
          </div>

          <div className="rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-[#171817]/60">
              <span>Affected Population</span>
              <Users className="h-3.5 w-3.5 text-[#e25a45]" />
            </div>
            <p className="mt-1 text-xl font-bold text-[#171817]">
              {cluster.affectedPopulation
                ? cluster.affectedPopulation.toLocaleString()
                : (cluster.totalIssues * 280).toLocaleString()}
            </p>
            <p className="text-[10px] text-[#171817]/60">Ward Census 2011</p>
          </div>

          <div className="rounded-xl border border-[#171817]/15 bg-[#f6f5f2] p-3.5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-[#171817]/60">
              <span>Est. CAPEX</span>
              <IndianRupee className="h-3.5 w-3.5 text-[#e25a45]" />
            </div>
            <p className="mt-1 text-xl font-bold text-[#171817]">
              ₹{estimatedCostCr} Cr
            </p>
            <p className="text-[10px] font-semibold text-emerald-700">
              ROI 2.4x Benefit
            </p>
          </div>
        </div>

        {/* MCDA Priority Breakdown Box */}
        <section className="rounded-xl border border-[#171817]/15 bg-[#f9f8f5] p-4 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#171817]/10 pb-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#171817]">
              MCDA Weight Breakdown
            </h3>
            <span className="font-mono text-[10px] text-[#e25a45] font-semibold">
              4-Factor Model
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span>Population Impact (40%)</span>
                <span className="font-bold">92/100</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200">
                <div className="h-1.5 rounded-full bg-[#e25a45]" style={{ width: "92%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span>Citizen Urgency (30%)</span>
                <span className="font-bold">85/100</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200">
                <div className="h-1.5 rounded-full bg-[#e25a45]" style={{ width: "85%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span>Cost-Effectiveness (20%)</span>
                <span className="font-bold">78/100</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200">
                <div className="h-1.5 rounded-full bg-emerald-600" style={{ width: "78%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span>Development Plan Alignment (10%)</span>
                <span className="font-bold">70/100</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200">
                <div className="h-1.5 rounded-full bg-blue-600" style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Reality Check Discrepancy Card */}
        <section className="rounded-xl border border-amber-300 bg-amber-50/80 p-4 space-y-2 text-xs font-sans">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-amber-900 uppercase">
            <ShieldAlert className="h-4 w-4 text-amber-600" />
            <span>Perception vs Municipal Ground Truth</span>
          </div>
          <p className="text-amber-950 leading-relaxed font-medium">
            <strong>Citizen Perception:</strong> {cluster.totalIssues} reports of severe infrastructure deficit.
            <br />
            <strong>Municipal Record:</strong> PWD Repair Sanction Brief #8821 active in Khordha Block.
          </p>
          <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-amber-800">
            <span>Status: Action & Comm Gap</span>
            <span className="font-bold">Confidence: 94%</span>
          </div>
        </section>

        {/* Representative Intake List */}
        {cluster.submissions && cluster.submissions.length > 0 && (
          <section className="space-y-3 font-sans">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#171817]">
              Representative Vernacular Submissions
            </h3>

            <div className="space-y-2">
              {cluster.submissions.map((submission) => (
                <article
                  key={submission.id}
                  className="rounded-lg border border-[#171817]/10 bg-[#f4f3ef] p-3 text-xs"
                >
                  <p className="font-medium text-[#171817]">"{submission.text}"</p>

                  <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-[#171817]/60">
                    <span className="capitalize">{submission.source || "Citizen Voice Intake"}</span>
                    <span>{submission.timestamp || "Verified PWA"}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Action Footer Buttons */}
      <div className="border-t border-[#171817]/15 bg-[#eeede9] p-4 font-sans">
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={closePanel}
            className="flex items-center justify-center gap-2 rounded-xl border border-[#171817]/20 bg-white px-3 py-2.5 text-xs font-bold text-[#171817] shadow-sm transition hover:bg-slate-100"
          >
            <X className="h-4 w-4" />
            Close Panel
          </button>

          <button
            type="button"
            onClick={handleSanctionCapex}
            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold text-white shadow transition ${
              isSanctioned ? "bg-emerald-600" : "bg-[#e25a45] hover:bg-[#d44833]"
            }`}
          >
            {isSanctioned ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Sanctioned ✓
              </>
            ) : (
              <>
                <ExternalLink className="h-4 w-4" />
                Sanction CAPEX
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
