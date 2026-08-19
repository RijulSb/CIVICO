import TelemetrySidebar from "@/components/dashboard/TelemetrySidebar";
import GeospatialCanvas from "@/components/dashboard/GeospatialCanvas";
import Header from "@/components/layout/Header";
import {
  Activity,
  ArrowUpRight,
  FileSpreadsheet,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

export default function CivicIntelligenceCommandCenter() {
  return (
    <div className="min-h-screen bg-[#f6f5f2] text-[#171817] font-sans">
      <Header />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-10 border-b border-[#171817]/15 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#171817]/15 bg-white px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#171817]/70 shadow-sm">
              <Activity className="h-3.5 w-3.5 text-[#e25a45]" />
              Live executive workspace
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-[#171817]/20 bg-white px-4 py-2 text-sm font-semibold text-[#171817] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#171817] hover:shadow-md"
              >
                <FileSpreadsheet className="h-4 w-4 text-[#e25a45]" />
                Export PDF
              </button>

              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/20 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <ShieldCheck className="h-4 w-4" />
                System Online
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.28em] text-[#171817]/60 lg:text-left">
                Dashboard 2 - Executive View
              </p>
              <h1 className="text-center text-5xl font-black uppercase leading-[0.95] tracking-normal text-[#202020] sm:text-6xl lg:text-left lg:text-7xl">
                Civic Intelligence Command Center
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-[#171817]/65 lg:mx-0 lg:text-left">
                District collectors, MPs, MLAs, and municipal commissioners get a
                clean operational view of live citizen intake, reality checks, and
                spatial priority clusters.
              </p>
            </div>

            <div className="rounded-2xl border border-[#171817]/15 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#171817]/50">
                  Monitoring
                </span>
                <RadioTower className="h-5 w-5 text-[#e25a45]" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-black text-[#171817]">45</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#171817]/50">
                    Wards
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#171817]">98.4%</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#171817]/50">
                    AI Confidence
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
                  Civic Telemetry Feed
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#171817]/60">
                Live vernacular intake and perception checks remain fully
                interactive, now separated into their own readable operations box.
              </p>
            </div>

            <div className="h-[680px] overflow-hidden bg-[#eeede9] sm:h-[720px]">
              <TelemetrySidebar />
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[#171817]/15 bg-white shadow-sm transition duration-200 hover:shadow-md">
            <div className="flex flex-col gap-4 border-b border-[#171817]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#e25a45]">
                  Section 02
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-normal text-[#171817]">
                  Spatial Priority Cluster Engine
                </h2>
              </div>
              <button
                type="button"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#171817] px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#e25a45] hover:shadow-md"
              >
                Explore Clusters
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="h-[720px] overflow-hidden bg-[#121814]">
              <GeospatialCanvas />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
