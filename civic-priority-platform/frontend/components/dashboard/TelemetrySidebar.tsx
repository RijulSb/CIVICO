"use client";

import * as React from "react";
import {
  Activity,
  AlertTriangle,
  Flame,
  Globe2,
  TrendingUp,
  Layers,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Clock,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

export interface SentimentTickerItem {
  id: string;
  originalText: string;
  translatedText: string;
  sourceLanguage: "Odia" | "Hindi" | "English";
  sentiment: "Urgent" | "Infrastructural Deficit" | "Anomalous/Spam" | "Community Need";
  ward: string;
  timestamp: string;
  score: number;
}

export interface PerceptionVsRealityItem {
  id: string;
  title: string;
  citizenReported: string;
  citizenCount: number;
  municipalFact: string;
  discrepancyStatus: "Action Gap" | "Communication Gap" | "Verified Issue";
  urgency: "High" | "Critical" | "Medium";
}

const mockTickerItems: SentimentTickerItem[] = [
  {
    id: "tick-1",
    originalText: "ୱାର୍ଡ ୧୪ରେ ପାଣି ପାଇପ୍ ଫାଟିଯାଇଛି, ଗତ ୩ ଦିନ ହେବ ପାଣି ମିଳୁନାହିଁ।",
    translatedText: "Water pipe burst in Ward 14, no water supply for past 3 days.",
    sourceLanguage: "Odia",
    sentiment: "Urgent",
    ward: "Ward 14 (Saheed Nagar)",
    timestamp: "2 mins ago",
    score: 94,
  },
  {
    id: "tick-2",
    originalText: "मुख्य मार्ग पर स्ट्रीट लाइट 2 हफ्तों से बंद है। दुर्घटना का खतरा है।",
    translatedText: "Streetlights on main road out for 2 weeks. Severe accident hazard.",
    sourceLanguage: "Hindi",
    sentiment: "Infrastructural Deficit",
    ward: "Ward 08 (Jaydev Vihar)",
    timestamp: "7 mins ago",
    score: 82,
  },
  {
    id: "tick-3",
    originalText: "Garbage collection truck hasn't visited Unit 4 market for 48 hours.",
    translatedText: "Garbage collection truck hasn't visited Unit 4 market for 48 hours.",
    sourceLanguage: "English",
    sentiment: "Infrastructural Deficit",
    ward: "Ward 22 (Bhauma Nagar)",
    timestamp: "12 mins ago",
    score: 76,
  },
  {
    id: "tick-4",
    originalText: "Win a free smartphone by clicking this link emergency service!",
    translatedText: "[FLAGGED SPAM] Win free smartphone link broadcast.",
    sourceLanguage: "English",
    sentiment: "Anomalous/Spam",
    ward: "Ward 01 (Chandrasekharpur)",
    timestamp: "18 mins ago",
    score: 12,
  },
];

const mockDiscrepancies: PerceptionVsRealityItem[] = [
  {
    id: "disc-1",
    title: "Ward 14 Drinking Water Supply",
    citizenReported: "Acute Water Crisis (92 Citizen Reports)",
    citizenCount: 92,
    municipalFact: "3 Water Tankers Deployed Yesterday (BMC Log)",
    discrepancyStatus: "Action Gap",
    urgency: "Critical",
  },
  {
    id: "disc-2",
    title: "Janpath Traffic & Pothole Grid",
    citizenReported: "Hazardous Road Cavity (148 Complaints)",
    citizenCount: 148,
    municipalFact: "PWD Repair Tender Approved #8821",
    discrepancyStatus: "Communication Gap",
    urgency: "High",
  },
  {
    id: "disc-3",
    title: "Unit 3 Substation Grid Failure",
    citizenReported: "Power Outages (64 Reports)",
    citizenCount: 64,
    municipalFact: "Grid Maintenance Active — ETA 45 Mins",
    discrepancyStatus: "Verified Issue",
    urgency: "Medium",
  },
];

const sentimentBadgeStyles: Record<SentimentTickerItem["sentiment"], string> = {
  Urgent: "bg-red-500/15 text-red-700 border-red-500/30",
  "Infrastructural Deficit": "bg-amber-500/15 text-amber-800 border-amber-500/30",
  "Anomalous/Spam": "bg-slate-200 text-slate-700 border-slate-300",
  "Community Need": "bg-blue-500/15 text-blue-800 border-blue-500/30",
};

export function TelemetrySidebar() {
  const [activeTab, setActiveTab] = React.useState<"sentiment" | "discrepancy">("sentiment");
  const [tickerIndex, setTickerIndex] = React.useState(0);

  // Auto-scroll simulation for real-time sentiment stream
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % mockTickerItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="flex h-full w-full flex-col border-r border-[#171817]/15 bg-[#eeede9] font-sans">
      {/* Sidebar Executive Header */}
      <div className="border-b border-[#171817]/15 p-4 bg-[#1c2d1c] text-[#eeede9]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-[#e25a45] uppercase tracking-wider">
            <Activity className="h-4 w-4 animate-pulse" />
            <span>Executive Telemetry</span>
          </div>
          <span className="rounded-full bg-[#e25a45] px-2.5 py-0.5 font-mono text-[10px] font-bold text-white">
            LIVE STREAM
          </span>
        </div>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
          Civic Intelligence Feed
        </h2>
        <p className="font-mono text-xs text-white/70">
          Target: District Collectors & Municipal Leaders
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 border-b border-[#171817]/15 bg-[#e2e1db]">
        <button
          type="button"
          onClick={() => setActiveTab("sentiment")}
          className={`flex items-center justify-center gap-2 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition ${
            activeTab === "sentiment"
              ? "border-b-2 border-[#e25a45] bg-[#eeede9] text-[#171817]"
              : "text-[#777872] hover:text-[#171817]"
          }`}
        >
          <Globe2 className="h-3.5 w-3.5" />
          <span>Real-Time Ticker</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("discrepancy")}
          className={`flex items-center justify-center gap-2 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition ${
            activeTab === "discrepancy"
              ? "border-b-2 border-[#e25a45] bg-[#eeede9] text-[#171817]"
              : "text-[#777872] hover:text-[#171817]"
          }`}
        >
          <ShieldAlert className="h-3.5 w-3.5" />
          <span>Reality Checks</span>
        </button>
      </div>

      {/* Tab Panel Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {activeTab === "sentiment" ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs text-[#777872]">
              <span>Vernacular Intake & Sentiment Translation</span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <Sparkles className="h-3 w-3" /> Indic-Whisper Active
              </span>
            </div>

            {/* Featured Live Highlight Box */}
            <div className="rounded-xl border border-[#e25a45]/40 bg-white p-4 shadow-sm relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 h-1.5 w-full bg-[#e25a45]" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-[#e25a45] uppercase tracking-wider">
                  Featured Live Stream #{mockTickerItems[tickerIndex].id}
                </span>
                <span className="font-mono text-[11px] text-[#777872]">
                  {mockTickerItems[tickerIndex].timestamp}
                </span>
              </div>
              <p className="mt-2 text-xs font-serif italic text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200">
                "{mockTickerItems[tickerIndex].originalText}"
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-[#171817]">
                <ChevronRight className="h-4 w-4 text-[#e25a45] shrink-0" />
                <span>{mockTickerItems[tickerIndex].translatedText}</span>
              </div>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold ${
                    sentimentBadgeStyles[mockTickerItems[tickerIndex].sentiment]
                  }`}
                >
                  {mockTickerItems[tickerIndex].sentiment}
                </span>
                <span className="font-mono text-xs text-[#171817]">
                  Priority Score: <strong className="text-[#e25a45]">{mockTickerItems[tickerIndex].score}/100</strong>
                </span>
              </div>
            </div>

            {/* Streaming List */}
            <div className="space-y-2.5 pt-2">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#777872]">
                Recent Intake Stream
              </h3>
              {mockTickerItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setTickerIndex(idx)}
                  className={`cursor-pointer rounded-lg border p-3 transition ${
                    tickerIndex === idx
                      ? "border-[#171817] bg-white shadow-sm"
                      : "border-[#171817]/10 bg-[#f4f3ef] hover:border-[#171817]/30"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#777872]">{item.ward}</span>
                    <span className="font-mono text-[10px] text-[#777872]">{item.sourceLanguage}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#171817] line-clamp-2">
                    {item.translatedText}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span className={`px-2 py-0.5 rounded border ${sentimentBadgeStyles[item.sentiment]}`}>
                      {item.sentiment}
                    </span>
                    <span className="font-mono text-[#777872]">{item.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Perception vs Reality Indicator Cards */
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs text-[#777872]">
              <span>Ground Truth vs. Perception Discrepancies</span>
              <span className="font-semibold text-[#e25a45]">3 Anomalies</span>
            </div>

            {mockDiscrepancies.map((disc) => (
              <div
                key={disc.id}
                className="rounded-xl border border-[#171817]/20 bg-white p-4 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#171817]">{disc.title}</h4>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold ${
                      disc.discrepancyStatus === "Action Gap"
                        ? "bg-red-100 text-red-800"
                        : disc.discrepancyStatus === "Communication Gap"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {disc.discrepancyStatus}
                  </span>
                </div>

                {/* Citizen Perception Side */}
                <div className="rounded-lg bg-red-50/70 p-2.5 border border-red-200/50">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-700">
                    Citizen Perception
                  </span>
                  <p className="text-xs font-semibold text-red-950 mt-0.5">
                    {disc.citizenReported}
                  </p>
                </div>

                {/* Municipal Reality Side */}
                <div className="rounded-lg bg-emerald-50/70 p-2.5 border border-emerald-200/50">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    Municipal Reality Data
                  </span>
                  <p className="text-xs font-semibold text-emerald-950 mt-0.5">
                    {disc.municipalFact}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 font-mono text-xs text-[#777872]">
                  <span>Urgency: <strong className="text-[#171817]">{disc.urgency}</strong></span>
                  <button
                    type="button"
                    className="text-[#e25a45] hover:underline font-semibold text-[11px]"
                  >
                    Dispatch Verification →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar Footer Metrics */}
      <div className="border-t border-[#171817]/15 bg-[#e2e1db] p-3 font-mono text-xs text-[#777872] flex items-center justify-between">
        <span>Ward Coverage: 45/45</span>
        <span className="text-[#171817] font-semibold">AI Confidence 98.4%</span>
      </div>
    </aside>
  );
}

export default TelemetrySidebar;
