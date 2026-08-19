"use client";

import * as React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MultiLayerGisStudio from "@/components/reports/MultiLayerGisStudio";
import KnowledgeGraphVisualizer from "@/components/reports/KnowledgeGraphVisualizer";
import ShapMatrixVisualizer from "@/components/reports/ShapMatrixVisualizer";
import { Database, FileDown, Sparkles, ArrowDown } from "lucide-react";

export default function Dashboard3DataFusionStudio() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white font-sans selection:bg-black selection:text-white">
      {/* Sticky Header Navbar */}
      <Header />

      {/* Sub-Header Executive Hero Banner (Boxed White Component) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10 text-black shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-gray-500">
              <Database className="h-4 w-4 text-black" />
              <span>Dashboard 03 — Data Analyst View</span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0a0a0a]">
              Data Fusion & XAI Studio
            </h1>
            <p className="mt-2 text-base text-gray-600 max-w-2xl leading-relaxed">
              Minimalist verification environment for Urban Planners, Data Scientists & Field Auditors. Trace spatial vector layers, asset topologies, and explainable AI metrics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs shrink-0">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-black bg-black px-5 py-3 text-white font-semibold shadow transition hover:bg-gray-800"
            >
              <FileDown className="h-4 w-4" />
              <span>Export Audit Logs (JSON)</span>
            </button>
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-black font-semibold">
              <Sparkles className="h-4 w-4 text-black" />
              <span>XAI Engine Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Scrollable Content Container — Well-Spaced White Boxed Modules */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Box 1: Multi-Layer GIS Studio */}
        <section id="layer-studio">
          <MultiLayerGisStudio />
        </section>

        {/* Box 2: Knowledge Graph Visualizer */}
        <section id="knowledge-graph">
          <KnowledgeGraphVisualizer />
        </section>

        {/* Box 3: SHAP Transparency Matrix */}
        <section id="shap-matrix">
          <ShapMatrixVisualizer />
        </section>
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
