"use client";

import * as React from "react";
import { Sparkles, SlidersHorizontal, RotateCcw, CheckCircle2 } from "lucide-react";

export interface ShapFeature {
  id: string;
  name: string;
  contributionPercent: number;
  description: string;
}

export function ShapMatrixVisualizer() {
  const [features] = React.useState<ShapFeature[]>([
    {
      id: "shap-urgency",
      name: "Citizen Urgency Index",
      contributionPercent: 34.2,
      description: "Frequency & sentiment severity of voice/text reports.",
    },
    {
      id: "shap-pop",
      name: "Population Impact Density",
      contributionPercent: 28.4,
      description: "Census census block density within 500m radius.",
    },
    {
      id: "shap-deficit",
      name: "Historical Infra Deficit",
      contributionPercent: 21.8,
      description: "Years elapsed since last CAPEX repair allocation.",
    },
    {
      id: "shap-vuln",
      name: "Socio-Economic Vulnerability",
      contributionPercent: 15.6,
      description: "BPL household concentration & healthcare accessibility.",
    },
  ]);

  const [sensitivityWeights, setSensitivityWeights] = React.useState({
    urgencyWeight: 1.0,
    densityWeight: 1.0,
    deficitWeight: 1.0,
  });

  const handleSliderChange = (key: keyof typeof sensitivityWeights, val: number) => {
    setSensitivityWeights((prev) => ({ ...prev, [key]: val }));
  };

  const resetWeights = () => {
    setSensitivityWeights({ urgencyWeight: 1.0, densityWeight: 1.0, deficitWeight: 1.0 });
  };

  const totalScore = Math.min(
    100,
    Math.round(
      features.reduce((acc, f) => acc + f.contributionPercent, 0) *
        (sensitivityWeights.urgencyWeight * 0.4 +
          sensitivityWeights.densityWeight * 0.35 +
          sensitivityWeights.deficitWeight * 0.25)
    )
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm font-sans transition-all duration-300 hover:shadow-md">
      {/* Box Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-black/50 uppercase tracking-widest">
            <Sparkles className="h-4 w-4 text-black" />
            <span>03 — XAI SHAP Matrix</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0a0a0a]">
            Feature Importance Matrix
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Shapley Value breakdown explaining AI model scoring
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-mono text-xs font-semibold text-black">
          <CheckCircle2 className="h-3.5 w-3.5 text-black" />
          <span>Explainable AI Verified</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SHAP Score Card */}
        <div className="rounded-xl border border-gray-200 bg-black text-white p-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
              SHAP Explained Score
            </span>
            <h3 className="mt-2 text-4xl font-bold tracking-tight text-white">
              {totalScore} <span className="text-lg font-normal text-gray-400">/ 100</span>
            </h3>
            <p className="mt-2 font-mono text-xs text-gray-300 leading-relaxed">
              Transparent priority weighting backed by empirical demographic & complaint data.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/20 font-mono text-xs text-gray-400">
            <span>Framework: TreeSHAP v0.42</span>
          </div>
        </div>

        {/* Feature Contribution Bars */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-gray-500">
            <span>Feature Contribution Breakdown</span>
            <span>SHAP Impact</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat) => (
              <div key={feat.id} className="rounded-xl border border-gray-200 bg-gray-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#0a0a0a]">
                  <span>{feat.name}</span>
                  <span className="font-mono text-black">+{feat.contributionPercent}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                  <div
                    style={{ width: `${feat.contributionPercent * 2.5}%` }}
                    className="h-full rounded-full bg-black"
                  />
                </div>
                <p className="font-mono text-[11px] text-gray-500">{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Sensitivity Simulation Sliders */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-black uppercase tracking-wider">
                <SlidersHorizontal className="h-4 w-4 text-black" />
                <span>Sensitivity Simulation</span>
              </div>
              <button
                type="button"
                onClick={resetWeights}
                className="flex items-center gap-1 font-mono text-xs text-gray-500 hover:text-black font-semibold"
              >
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <div className="flex justify-between font-mono text-xs text-gray-600">
                  <span>Urgency Multiplier:</span>
                  <span className="font-bold text-black">{sensitivityWeights.urgencyWeight.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.05"
                  value={sensitivityWeights.urgencyWeight}
                  onChange={(e) => handleSliderChange("urgencyWeight", parseFloat(e.target.value))}
                  className="h-1.5 w-full accent-black cursor-pointer mt-1"
                />
              </div>

              <div>
                <div className="flex justify-between font-mono text-xs text-gray-600">
                  <span>Density Multiplier:</span>
                  <span className="font-bold text-black">{sensitivityWeights.densityWeight.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.05"
                  value={sensitivityWeights.densityWeight}
                  onChange={(e) => handleSliderChange("densityWeight", parseFloat(e.target.value))}
                  className="h-1.5 w-full accent-black cursor-pointer mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapMatrixVisualizer;
