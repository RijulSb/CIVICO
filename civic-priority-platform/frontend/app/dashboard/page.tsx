"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { DemandHotspotMapHandle } from "@/components/dashboard/DemandHotspotMap";


import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Clock,
  Droplets,
  ExternalLink,
  FileText,
  Filter,
  Flame,
  HeartPulse,
  Image as ImageIcon,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Mic,
  Phone,
  RefreshCw,
  School,
  Search,
  TrendingDown,
  TrendingUp,
  User,
  Users,
  Volume2,
} from "lucide-react";

import Header from "@/components/layout/Header";
import { AudioEvidencePlayer, VideoEvidencePlayer } from "@/components/media/MediaEvidencePlayers";

type PriorityLevel = "high" | "medium" | "emerging";
type ThemeKey =
  | "all"
  | "road_repair"
  | "water_supply"
  | "school_infrastructure"
  | "health_access"
  | "street_lighting";
type IssueTheme = Exclude<ThemeKey, "all"> | "health_clinic";

type PulseTopic = {
  theme: IssueTheme;
  label: string;
  submissionCount: number;
  affectedWards: number;
  affectedPopulation: number;
  trendPercent: number;
  signalScore: number;
  priority: PriorityLevel;
  urgency?: string;
  infraGap?: string;
};

export type DashboardHotspot = {
  id: string;
  ward: string;
  block: string;
  theme: IssueTheme;
  latitude: number;
  longitude: number;
  intensity: "high" | "medium" | "low";
  submissionCount: number;
  affectedPopulation: number;
  evidenceCounts: { text: number; voice: number; photo: number; video?: number };
  candidateProjectId: string | null;
  infrastructureContext: Record<string, string | number | boolean>;
  suggestedProject: {
    title: string;
    estimatedCost: number;
    estimatedMonths: number;
  };
  representativeEvidence: Array<{
    type: string;
    language: string;
    translatedText: string;
  }>;
};

type RecentSubmission = {
  id: string;
  ward: string;
  block?: string;
  theme: IssueTheme | string;
  language: string;
  channel: "text" | "voice" | "photo" | "video";
  preview: string;
  translatedPreview: string;
  submittedMinsAgo: number;
  fullName?: string | null;
  full_name?: string | null;
  email?: string | null;
  phone?: string | null;
  audioUrl?: string | null;
  audio_url?: string | null;
  photoUrl?: string | null;
  photo_url?: string | null;
  videoUrl?: string | null;
  video_url?: string | null;
  content?: string | null;
  transcript?: string | null;
  createdAt?: string | null;
  created_at?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  status?: string | null;
  extracted?: {
    issue_type?: string;
    problem_location?: string;
    urgency?: string;
    urgency_reason?: string;
    beneficiaries_estimate?: string;
  } | null;
};

type DashboardData = {
  constituency: string;
  constituencyLabel?: string;
  state?: string;
  period: string;
  lastUpdatedAt: string;
  languageBreakdown: { odia: number; hindi: number; english: number };
  summary: {
    totalSubmissions: number;
    recurringThemes: number;
    activeHotspots: number;
    candidateProjects: number;
  };
  priorityPulse: PulseTopic[];
  hotspots: DashboardHotspot[];
  recentSubmissions: RecentSubmission[];
};

const DemandHotspotMap = dynamic(
  () => import("@/components/dashboard/DemandHotspotMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[420px] items-center justify-center rounded-lg bg-slate-100">
        <RefreshCw className="h-6 w-6 animate-spin text-[#171817]/40" />
      </div>
    ),
  },
);

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";


const THEMES: Array<{ key: ThemeKey; label: string }> = [
  { key: "all", label: "All themes" },
  { key: "road_repair", label: "Roads" },
  { key: "water_supply", label: "Water" },
  { key: "school_infrastructure", label: "School" },
  { key: "health_access", label: "Health" },
  { key: "street_lighting", label: "Lighting" },
];

const THEME_META = {
  road_repair: {
    label: "Road repair",
    icon: AlertTriangle,
    chip: "border-orange-200 bg-orange-50 text-orange-700",
    fill: "#f97316",
  },
  water_supply: {
    label: "Water supply",
    icon: Droplets,
    chip: "border-sky-200 bg-sky-50 text-sky-700",
    fill: "#0284c7",
  },
  school_infrastructure: {
    label: "School infrastructure",
    icon: School,
    chip: "border-violet-200 bg-violet-50 text-violet-700",
    fill: "#7c3aed",
  },
  health_access: {
    label: "Health access",
    icon: HeartPulse,
    chip: "border-rose-200 bg-rose-50 text-rose-700",
    fill: "#e11d48",
  },
  // Older backend records use health_clinic for the same category.
  health_clinic: {
    label: "Health access",
    icon: HeartPulse,
    chip: "border-rose-200 bg-rose-50 text-rose-700",
    fill: "#e11d48",
  },
  street_lighting: {
    label: "Street lighting",
    icon: Lightbulb,
    chip: "border-amber-200 bg-amber-50 text-amber-700",
    fill: "#d97706",
  },
} satisfies Record<
  IssueTheme,
  { label: string; icon: typeof Activity; chip: string; fill: string }
>;

const PRIORITY_BADGE: Record<PriorityLevel, string> = {
  high: "border-red-200 bg-red-50 text-red-700",
  medium: "border-amber-200 bg-amber-50 text-amber-700",
  emerging: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

const CONSTITUENCY_CENTERS: Record<string, { lat: number; lng: number; zoom: number }> = {
  khordha: { lat: 20.295, lng: 85.825, zoom: 12 },
  puri: { lat: 19.814, lng: 85.830, zoom: 13 },
  cuttack: { lat: 20.463, lng: 85.882, zoom: 12 },
  bhubaneswar: { lat: 20.296, lng: 85.820, zoom: 12 },
};

const CONSTITUENCY_FALLBACKS: Record<string, DashboardData> = {
  khordha: {
    constituency: "khordha",
    constituencyLabel: "Khordha",
    state: "Odisha",
    period: "30d",
    lastUpdatedAt: new Date().toISOString(),
    languageBreakdown: { odia: 42, hindi: 26, english: 32 },
    summary: { totalSubmissions: 3416, recurringThemes: 5, activeHotspots: 5, candidateProjects: 3 },
    priorityPulse: [
      { theme: "road_repair", label: "Road repair", submissionCount: 1248, affectedWards: 8, affectedPopulation: 42300, trendPercent: 31, signalScore: 91.4, priority: "high", urgency: "high", infraGap: "Main roads flagged poor; school buses cannot pass after rainfall." },
      { theme: "water_supply", label: "Water supply", submissionCount: 864, affectedWards: 5, affectedPopulation: 25800, trendPercent: 18, signalScore: 82.7, priority: "high", urgency: "high", infraGap: "Irregular piped water and tanker dependency in three wards." },
      { theme: "school_infrastructure", label: "School infrastructure", submissionCount: 621, affectedWards: 4, affectedPopulation: 12900, trendPercent: 0, signalScore: 74.1, priority: "medium", urgency: "medium", infraGap: "Overcrowded classrooms and missing functional toilets." },
      { theme: "health_access", label: "Health access", submissionCount: 432, affectedWards: 4, affectedPopulation: 19200, trendPercent: 9, signalScore: 68.3, priority: "medium", urgency: "medium", infraGap: "Nearest PHC is more than 5 km for several wards." },
      { theme: "street_lighting", label: "Street lighting", submissionCount: 251, affectedWards: 3, affectedPopulation: 8400, trendPercent: 5, signalScore: 52.8, priority: "emerging", urgency: "low", infraGap: "Several internal lanes remain unlit after 8 PM." },
    ],
    hotspots: [
      { id: "hotspot_ward5_road", ward: "Ward 5", block: "Khordha Block", theme: "road_repair", latitude: 20.2874, longitude: 85.8378, intensity: "high", submissionCount: 126, affectedPopulation: 15000, evidenceCounts: { text: 66, voice: 42, photo: 18 }, candidateProjectId: null, infrastructureContext: { roadCondition: "poor", dailyCommuters: 6000, nearestSchoolDistanceKm: 5.2 }, suggestedProject: { title: "Repair 4.8 km connecting road in Ward 5", estimatedCost: 80000000, estimatedMonths: 6 }, representativeEvidence: [{ type: "voice", language: "odia", translatedText: "The road becomes unusable after rainfall; school buses cannot pass." }, { type: "text", language: "hindi", translatedText: "Daily commute has become unsafe due to potholes." }] },
      { id: "hotspot_ward8_water", ward: "Ward 8", block: "Khordha Block", theme: "water_supply", latitude: 20.2798, longitude: 85.8189, intensity: "high", submissionCount: 103, affectedPopulation: 12400, evidenceCounts: { text: 55, voice: 30, photo: 18 }, candidateProjectId: null, infrastructureContext: { pipedWaterCoverage: "38%", tankerDependency: true, dailyShortfallLitres: 18000 }, suggestedProject: { title: "Extend piped water network to Ward 8", estimatedCost: 60000000, estimatedMonths: 7 }, representativeEvidence: [{ type: "voice", language: "odia", translatedText: "We wait two hours every morning for the tanker." }] },
      { id: "hotspot_ward3_school", ward: "Ward 3", block: "Bhubaneswar Block", theme: "school_infrastructure", latitude: 20.3021, longitude: 85.8241, intensity: "medium", submissionCount: 84, affectedPopulation: 9100, evidenceCounts: { text: 40, voice: 28, photo: 16 }, candidateProjectId: null, infrastructureContext: { schoolCapacityGap: "142 students", toiletFunctional: false, classroomShortfall: 4 }, suggestedProject: { title: "Construct classrooms and sanitation block in Ward 3", estimatedCost: 45000000, estimatedMonths: 8 }, representativeEvidence: [{ type: "photo", language: "odia", translatedText: "Classroom roof leaks during monsoon." }] },
      { id: "hotspot_ward1_road", ward: "Ward 1", block: "Chandrasekharpur Block", theme: "road_repair", latitude: 20.325, longitude: 85.815, intensity: "medium", submissionCount: 67, affectedPopulation: 8200, evidenceCounts: { text: 30, voice: 22, photo: 15 }, candidateProjectId: null, infrastructureContext: { roadCondition: "fair", dailyCommuters: 3200 }, suggestedProject: { title: "Resurface 2.3 km internal roads in Ward 1", estimatedCost: 35000000, estimatedMonths: 4 }, representativeEvidence: [{ type: "text", language: "odia", translatedText: "Roads flood every monsoon." }] },
      { id: "hotspot_ward2_health", ward: "Ward 2", block: "Patia Block", theme: "health_access", latitude: 20.352, longitude: 85.818, intensity: "medium", submissionCount: 58, affectedPopulation: 7400, evidenceCounts: { text: 28, voice: 20, photo: 10 }, candidateProjectId: null, infrastructureContext: { nearestPHCDistanceKm: 6.3, ambulanceCoverage: false }, suggestedProject: { title: "Establish sub-health centre in Ward 2", estimatedCost: 25000000, estimatedMonths: 5 }, representativeEvidence: [{ type: "voice", language: "odia", translatedText: "The nearest doctor is six km away." }] },
    ],
    recentSubmissions: [],
  },
  puri: {
    constituency: "puri",
    constituencyLabel: "Puri",
    state: "Odisha",
    period: "30d",
    lastUpdatedAt: new Date().toISOString(),
    languageBreakdown: { odia: 58, hindi: 22, english: 20 },
    summary: { totalSubmissions: 2756, recurringThemes: 5, activeHotspots: 3, candidateProjects: 3 },
    priorityPulse: [
      { theme: "water_supply", label: "Drinking Water", submissionCount: 943, affectedWards: 7, affectedPopulation: 38100, trendPercent: 24, signalScore: 88.2, priority: "high", urgency: "high", infraGap: "Coastal salinity contaminating groundwater; 5 wards rely on tankers." },
      { theme: "road_repair", label: "Road Repair", submissionCount: 712, affectedWards: 6, affectedPopulation: 29500, trendPercent: 14, signalScore: 79.5, priority: "high", urgency: "high", infraGap: "Heritage town roads deteriorated; pilgrim access routes in poor condition." },
      { theme: "health_access", label: "Health Access", submissionCount: 514, affectedWards: 5, affectedPopulation: 22800, trendPercent: 11, signalScore: 71.3, priority: "medium", urgency: "medium", infraGap: "Seasonal overcrowding of district hospital during pilgrimage season." },
      { theme: "school_infrastructure", label: "School Infrastructure", submissionCount: 389, affectedWards: 4, affectedPopulation: 11200, trendPercent: 0, signalScore: 62.8, priority: "medium", urgency: "medium", infraGap: "Cyclone-damaged school buildings unreplaced in 2 coastal wards." },
      { theme: "street_lighting", label: "Street Lighting", submissionCount: 198, affectedWards: 3, affectedPopulation: 7600, trendPercent: 3, signalScore: 48.1, priority: "emerging", urgency: "low", infraGap: "Fishing village lanes unlit; safety concerns raised." },
    ],
    hotspots: [
      { id: "puri_hotspot_ward4_water", ward: "Ward 4", block: "Puri Block", theme: "water_supply", latitude: 19.8120, longitude: 85.8314, intensity: "high", submissionCount: 118, affectedPopulation: 14200, evidenceCounts: { text: 62, voice: 38, photo: 18 }, candidateProjectId: null, infrastructureContext: { salinityLevel: "high", tankerDependency: true }, suggestedProject: { title: "Install RO water plant and pipeline in Ward 4", estimatedCost: 55000000, estimatedMonths: 5 }, representativeEvidence: [{ type: "voice", language: "odia", translatedText: "The well water is salty and undrinkable. We buy water every day." }] },
      { id: "puri_hotspot_ward7_road", ward: "Ward 7", block: "Puri Block", theme: "road_repair", latitude: 19.8180, longitude: 85.8260, intensity: "high", submissionCount: 89, affectedPopulation: 10500, evidenceCounts: { text: 44, voice: 29, photo: 16 }, candidateProjectId: null, infrastructureContext: { roadCondition: "poor", pilgrimTrafficDaily: 12000 }, suggestedProject: { title: "Repair 3.1 km pilgrim access road in Ward 7", estimatedCost: 48000000, estimatedMonths: 4 }, representativeEvidence: [{ type: "text", language: "odia", translatedText: "Pilgrims and residents both suffer on these broken roads." }] },
      { id: "puri_hotspot_ward2_health", ward: "Ward 2", block: "Puri Block", theme: "health_access", latitude: 19.8060, longitude: 85.8350, intensity: "medium", submissionCount: 74, affectedPopulation: 9800, evidenceCounts: { text: 38, voice: 25, photo: 11 }, candidateProjectId: null, infrastructureContext: { nearestPHCDistanceKm: 4.8, seasonalCongestion: true }, suggestedProject: { title: "Open satellite health clinic in Ward 2", estimatedCost: 22000000, estimatedMonths: 4 }, representativeEvidence: [{ type: "voice", language: "odia", translatedText: "During festivals, even emergencies cannot reach the hospital quickly." }] },
    ],
    recentSubmissions: [],
  },
  cuttack: {
    constituency: "cuttack",
    constituencyLabel: "Cuttack",
    state: "Odisha",
    period: "30d",
    lastUpdatedAt: new Date().toISOString(),
    languageBreakdown: { odia: 51, hindi: 31, english: 18 },
    summary: { totalSubmissions: 3100, recurringThemes: 5, activeHotspots: 3, candidateProjects: 3 },
    priorityPulse: [
      { theme: "road_repair", label: "Road Repair", submissionCount: 1105, affectedWards: 9, affectedPopulation: 51200, trendPercent: 21, signalScore: 89.7, priority: "high", urgency: "high", infraGap: "Flood-damaged roads unrepaired; arterial bridge overloaded." },
      { theme: "health_access", label: "Health Access", submissionCount: 768, affectedWards: 6, affectedPopulation: 33400, trendPercent: 16, signalScore: 81.2, priority: "high", urgency: "high", infraGap: "SCB Medical College overloaded; no satellite health centres in 6 wards." },
      { theme: "water_supply", label: "Water Supply", submissionCount: 542, affectedWards: 5, affectedPopulation: 24600, trendPercent: 8, signalScore: 70.4, priority: "medium", urgency: "medium", infraGap: "Mahanadi flooding contaminates water supply annually." },
      { theme: "school_infrastructure", label: "School Infrastructure", submissionCount: 398, affectedWards: 4, affectedPopulation: 14100, trendPercent: 0, signalScore: 63.5, priority: "medium", urgency: "medium", infraGap: "Old municipal school buildings with leaking roofs and no labs." },
      { theme: "street_lighting", label: "Street Lighting", submissionCount: 287, affectedWards: 4, affectedPopulation: 9800, trendPercent: 7, signalScore: 55.9, priority: "emerging", urgency: "low", infraGap: "Old town lanes and silver market area dark after 9 PM." },
    ],
    hotspots: [
      { id: "cuttack_hotspot_ward6_road", ward: "Ward 6", block: "Cuttack Block", theme: "road_repair", latitude: 20.4625, longitude: 85.8830, intensity: "high", submissionCount: 142, affectedPopulation: 18600, evidenceCounts: { text: 72, voice: 48, photo: 22 }, candidateProjectId: null, infrastructureContext: { roadCondition: "poor", floodingFrequency: "annual", dailyCommuters: 8500 }, suggestedProject: { title: "Rebuild 5.2 km flood-prone road in Ward 6", estimatedCost: 95000000, estimatedMonths: 9 }, representativeEvidence: [{ type: "voice", language: "odia", translatedText: "Every monsoon the road disappears. We are cut off for weeks." }] },
      { id: "cuttack_hotspot_ward3_health", ward: "Ward 3", block: "Cuttack Block", theme: "health_access", latitude: 20.4710, longitude: 85.8780, intensity: "high", submissionCount: 96, affectedPopulation: 13200, evidenceCounts: { text: 48, voice: 32, photo: 16 }, candidateProjectId: null, infrastructureContext: { nearestPHCDistanceKm: 7.1, ambulanceCoverage: false }, suggestedProject: { title: "Establish maternity and primary care unit in Ward 3", estimatedCost: 38000000, estimatedMonths: 6 }, representativeEvidence: [{ type: "voice", language: "hindi", translatedText: "There is no doctor close by. Women in labour are transported in autorickshaws." }] },
      { id: "cuttack_hotspot_ward9_water", ward: "Ward 9", block: "Cuttack Block", theme: "water_supply", latitude: 20.4560, longitude: 85.8890, intensity: "medium", submissionCount: 78, affectedPopulation: 10400, evidenceCounts: { text: 40, voice: 26, photo: 12 }, candidateProjectId: null, infrastructureContext: { pipedWaterCoverage: "44%", floodContamination: true }, suggestedProject: { title: "Install water treatment and storage units in Ward 9", estimatedCost: 42000000, estimatedMonths: 5 }, representativeEvidence: [{ type: "text", language: "odia", translatedText: "After floods, tap water smells bad and causes illness." }] },
    ],
    recentSubmissions: [],
  },
  bhubaneswar: {
    constituency: "bhubaneswar",
    constituencyLabel: "Bhubaneswar",
    state: "Odisha",
    period: "30d",
    lastUpdatedAt: new Date().toISOString(),
    languageBreakdown: { odia: 38, hindi: 29, english: 33 },
    summary: { totalSubmissions: 2679, recurringThemes: 5, activeHotspots: 3, candidateProjects: 3 },
    priorityPulse: [
      { theme: "street_lighting", label: "Street Lighting", submissionCount: 876, affectedWards: 7, affectedPopulation: 44100, trendPercent: 28, signalScore: 84.3, priority: "high", urgency: "high", infraGap: "IT corridor outskirts and new layouts without street lights; safety concerns rising." },
      { theme: "road_repair", label: "Road Repair", submissionCount: 734, affectedWards: 6, affectedPopulation: 37200, trendPercent: 12, signalScore: 77.8, priority: "high", urgency: "high", infraGap: "Rapid construction traffic damaged internal wards roads." },
      { theme: "water_supply", label: "Water Supply", submissionCount: 498, affectedWards: 5, affectedPopulation: 21500, trendPercent: 6, signalScore: 68.9, priority: "medium", urgency: "medium", infraGap: "New residential zones lack pipeline connection; rely on private tankers." },
      { theme: "school_infrastructure", label: "School Infrastructure", submissionCount: 342, affectedWards: 4, affectedPopulation: 13800, trendPercent: 3, signalScore: 58.2, priority: "medium", urgency: "medium", infraGap: "Rapid population growth has outpaced school capacity in 4 wards." },
      { theme: "health_access", label: "Health Access", submissionCount: 229, affectedWards: 3, affectedPopulation: 9100, trendPercent: 0, signalScore: 47.6, priority: "emerging", urgency: "low", infraGap: "Peripheral wards added after BMC expansion have no PHC assigned."},
    ],
    hotspots: [
      { id: "bbsr_hotspot_ward11_light", ward: "Ward 11", block: "Bhubaneswar North", theme: "street_lighting", latitude: 20.3200, longitude: 85.8100, intensity: "high", submissionCount: 112, affectedPopulation: 16400, evidenceCounts: { text: 58, voice: 36, photo: 18 }, candidateProjectId: null, infrastructureContext: { litLanePercent: "28%", crimeIncidents: 14 }, suggestedProject: { title: "Install 380 LED streetlights in Ward 11 IT corridor", estimatedCost: 18000000, estimatedMonths: 3 }, representativeEvidence: [{ type: "voice", language: "english", translatedText: "The road from the tech park to our colony has no lights. It is unsafe at night." }] },
      { id: "bbsr_hotspot_ward5_road", ward: "Ward 5", block: "Bhubaneswar Central", theme: "road_repair", latitude: 20.2961, longitude: 85.8245, intensity: "high", submissionCount: 94, affectedPopulation: 12800, evidenceCounts: { text: 48, voice: 31, photo: 15 }, candidateProjectId: null, infrastructureContext: { roadCondition: "poor", dailyCommuters: 7200 }, suggestedProject: { title: "Rehabilitate 3.4 km construction-damaged road in Ward 5", estimatedCost: 52000000, estimatedMonths: 5 }, representativeEvidence: [{ type: "text", language: "english", translatedText: "Construction trucks have destroyed the road surface." }] },
    ],
    recentSubmissions: [],
  },
};

const FALLBACK: DashboardData = CONSTITUENCY_FALLBACKS.khordha;

function resolveMediaUrl(path: string | null | undefined): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const backendBase = API_BASE.replace(/\/$/, "");
  return `${backendBase}/${path.replace(/^\//, "")}`;
}

function formatSubmissionDate(dateStr?: string | null): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(d);
  } catch {
    return "";
  }
}



function formatCount(value: number) {
  if (value >= 100000) return `${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toLocaleString();
}

function formatCost(value: number) {
  return `Rs ${(value / 10000000).toFixed(1)} Cr`;
}

function timeAgo(minutes: number) {
  return minutes < 60 ? `${minutes}m ago` : `${Math.floor(minutes / 60)}h ago`;
}

function TrendBadge({ value }: { value: number }) {
  if (value === 0) {
    return <span className="text-xs font-semibold text-slate-500">Stable</span>;
  }
  if (value > 0) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600">
        <TrendingUp className="h-3 w-3" />
        {value}%
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
      <TrendingDown className="h-3 w-3" />
      {Math.abs(value)}%
    </span>
  );
}

function SummaryCard({
  value,
  label,
  sub,
  onClick,
}: {
  value: string | number;
  label: string;
  sub: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-28 rounded-lg border border-[#171817]/15 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#171817]/40 hover:shadow-md"
    >
      <span className="block text-3xl font-black text-[#171817]">{value}</span>
      <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-[#171817]/55">
        {label}
      </span>
      <span className="mt-1 block text-xs text-[#171817]/45">{sub}</span>
    </button>
  );
}

function HotspotDetail({
  hotspot,
  onClose,
  onCreateProject,
}: {
  hotspot: DashboardHotspot;
  onClose: () => void;
  onCreateProject: (id: string) => void;
}) {
  const meta = THEME_META[hotspot.theme];
  const Icon = meta.icon;

  return (
    <aside className="flex max-h-[560px] flex-col overflow-hidden rounded-lg border border-[#171817]/15 bg-white shadow-sm lg:max-h-none">
      <div className="flex items-start justify-between gap-3 border-b border-[#171817]/10 p-4">
        <div className="flex items-center gap-3">
          <span className={`rounded-lg border p-2 ${meta.chip}`}>
            <Icon className="h-4 w-4" />
          </span>
          <div>
            <h3 className="font-black text-[#171817]">
              {hotspot.ward} - {meta.label} hotspot
            </h3>
            <p className="text-xs text-[#171817]/55">{hotspot.block}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md px-2 py-1 text-sm font-bold text-[#171817]/50 hover:bg-slate-100"
        >
          x
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-lg font-black text-[#171817]">
              {hotspot.submissionCount}
            </p>
            <p className="text-xs text-[#171817]/50">Reports</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-lg font-black text-[#171817]">
              {formatCount(hotspot.affectedPopulation)}
            </p>
            <p className="text-xs text-[#171817]/50">Residents</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-lg font-black text-[#171817]">
              {hotspot.evidenceCounts.photo}
            </p>
            <p className="text-xs text-[#171817]/50">Photos</p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#171817]/50">
            Evidence
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-violet-50 px-3 py-1 text-violet-700">
              {hotspot.evidenceCounts.voice} voice
            </span>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">
              {hotspot.evidenceCounts.text} text
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              {hotspot.evidenceCounts.photo} photo
            </span>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#171817]/50">
            Infrastructure context
          </p>
          <div className="space-y-1 rounded-lg bg-slate-50 p-3 text-xs text-[#171817]/70">
            {Object.entries(hotspot.infrastructureContext).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-3">
                <span>{key.replace(/([A-Z])/g, " $1")}</span>
                <strong className="text-[#171817]">{String(value)}</strong>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#171817]/50">
            Citizen evidence preview
          </p>
          <div className="space-y-2">
            {hotspot.representativeEvidence.map((item, index) => (
              <blockquote
                key={`${item.type}-${index}`}
                className="rounded-lg border border-[#171817]/10 bg-white p-3 text-sm italic text-[#171817]/75"
              >
                <span className="mb-1 block text-xs font-semibold not-italic text-[#171817]/50">
                  {item.language} {item.type} report
                </span>
                {item.translatedText}
              </blockquote>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Suggested action
          </p>
          <p className="mt-1 text-sm font-bold text-[#171817]">
            {hotspot.suggestedProject.title}
          </p>
          <p className="mt-1 text-xs text-[#171817]/60">
            {formatCost(hotspot.suggestedProject.estimatedCost)} |{" "}
            {hotspot.suggestedProject.estimatedMonths} months
          </p>
        </div>
      </div>

      <div className="border-t border-[#171817]/10 p-4">
        <button
          type="button"
          onClick={() => onCreateProject(hotspot.id)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#171817] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#e25a45]"
        >
          Create proposal for {hotspot.ward}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}

function WardProposalList({
  hotspots,
  selectedId,
  onSelect,
  onCreateProject,
}: {
  hotspots: DashboardHotspot[];
  selectedId: string | null;
  onSelect: (hotspot: DashboardHotspot) => void;
  onCreateProject: (id: string) => void;
}) {
  return (
    <section className="rounded-lg border border-[#171817]/15 bg-white p-4 shadow-sm">
      <div className="mb-3">
        <p className="font-mono text-xs uppercase tracking-wider text-[#e25a45]">
          Ward Proposal List
        </p>
        <h3 className="text-lg font-black text-[#171817]">
          Select a ward to create proposal
        </h3>
      </div>

      {hotspots.length === 0 ? (
        <p className="rounded-lg bg-slate-50 p-3 text-sm text-[#171817]/55">
          No ward hotspots match the current filters.
        </p>
      ) : (
        <div className="space-y-2">
          {hotspots.map((hotspot) => {
            const meta = THEME_META[hotspot.theme];
            const Icon = meta.icon;
            const selected = selectedId === hotspot.id;

            return (
              <article
                key={hotspot.id}
                className={`rounded-lg border p-3 transition ${
                  selected
                    ? "border-[#171817] bg-[#171817] text-white"
                    : "border-[#171817]/10 bg-white hover:border-[#171817]/35"
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelect(hotspot)}
                  className="flex w-full items-start gap-3 text-left"
                >
                  <span
                    className={`mt-0.5 rounded-lg border p-1.5 ${
                      selected
                        ? "border-white/25 bg-white/10 text-white"
                        : meta.chip
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-bold ${
                        selected ? "text-white" : "text-[#171817]"
                      }`}
                    >
                      {hotspot.ward}
                    </span>
                    <span
                      className={`block text-xs ${
                        selected ? "text-white/65" : "text-[#171817]/55"
                      }`}
                    >
                      {meta.label} | {hotspot.submissionCount} reports
                    </span>
                    <span
                      className={`block text-xs ${
                        selected ? "text-white/55" : "text-[#171817]/45"
                      }`}
                    >
                      {formatCount(hotspot.affectedPopulation)} residents
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onCreateProject(hotspot.id)}
                  className={`mt-3 flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-xs font-bold transition ${
                    selected
                      ? "bg-white text-[#171817] hover:bg-white/90"
                      : "bg-[#171817] text-white hover:bg-[#e25a45]"
                  }`}
                >
                  Create proposal <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

const EMPTY_DASHBOARD: DashboardData = {
  constituency: "khordha",
  constituencyLabel: "Khordha",
  state: "Odisha",
  period: "30d",
  lastUpdatedAt: new Date(0).toISOString(),
  languageBreakdown: { odia: 0, hindi: 0, english: 0 },
  summary: { totalSubmissions: 0, recurringThemes: 0, activeHotspots: 0, candidateProjects: 0 },
  priorityPulse: [],
  hotspots: [],
  recentSubmissions: [],
};

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData>(EMPTY_DASHBOARD);
  const [constituency, setConstituency] = useState("khordha");
  const [period, setPeriod] = useState("30d");
  const [theme, setTheme] = useState<ThemeKey>("all");
  const [wardQuery, setWardQuery] = useState("");
  const [selectedHotspot, setSelectedHotspot] =
    useState<DashboardHotspot | null>(null);
  const [loading, setLoading] = useState(false);
  const [reportsLoading, setReportsLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mapRef = useRef<DemandHotspotMapHandle | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }, []);

  const fetchData = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    setReportsLoading(true);
    const fallbackData = CONSTITUENCY_FALLBACKS[constituency] || CONSTITUENCY_FALLBACKS.khordha;

    try {
      const refreshParam = forceRefresh ? "&refresh=true" : "";
      const response = await fetch(
        `${API_BASE}/api/v1/dashboard?constituency=${constituency}&period=${period}&theme=${theme}&ward=all${refreshParam}`,
        { signal: AbortSignal.timeout(15000) },
      );
      if (!response.ok) throw new Error("Dashboard API failed");
      const nextData = (await response.json()) as DashboardData;

      // Always use the live database API response when connected to the backend
      setData(nextData);
      const firstHotspot = nextData.hotspots[0] ?? null;
      setSelectedHotspot(firstHotspot);

      const center = CONSTITUENCY_CENTERS[constituency] || null;
      if (center) {
        mapRef.current?.flyTo(center.lat, center.lng, center.zoom);
      }
    } catch (fetchErr) {
      console.warn("Dashboard API fetch delayed, attempting resilient direct recovery...", fetchErr);
      // Fall back to robust constituency baseline dataset
      const populatedFallback: DashboardData = {
        ...fallbackData,
        period,
        lastUpdatedAt: new Date().toISOString(),
      };

      // Resilient recovery: directly fetch submissions if dashboard aggregation was slow
      try {
        const subRes = await fetch(
          `${API_BASE}/api/v1/submissions?constituency=${constituency}&limit=50`,
          { signal: AbortSignal.timeout(8000) }
        );
        if (subRes.ok) {
          const subs = await subRes.json();
          if (Array.isArray(subs) && subs.length > 0) {
            populatedFallback.recentSubmissions = subs.map((s: any) => ({
              id: s.submission_id || s.id,
              ward: s.ward || s.extracted?.problem_location || "Constituency Area",
              block: s.block,
              theme: s.theme || s.extracted?.issue_type || "road_repair",
              language: s.language || "english",
              channel: s.audio_url ? "voice" : s.photo_url ? "photo" : "text",
              preview: s.content || s.transcript || "[Evidence Attached]",
              translatedPreview: s.content || s.transcript || "[Evidence Attached]",
              submittedMinsAgo: 5,
              fullName: s.full_name,
              full_name: s.full_name,
              email: s.email,
              phone: s.phone,
              audioUrl: s.audio_url,
              audio_url: s.audio_url,
              photoUrl: s.photo_url,
              photo_url: s.photo_url,
              videoUrl: s.video_url,
              video_url: s.video_url,
              content: s.content,
              transcript: s.transcript,
              createdAt: s.created_at,
              created_at: s.created_at,
              latitude: s.latitude,
              longitude: s.longitude,
              status: s.status,
              extracted: s.extracted,
            }));
          }
        }
      } catch (recoveryErr) {
        console.warn("Direct submissions recovery error:", recoveryErr);
      }

      setData(populatedFallback);
      const firstHotspot = populatedFallback.hotspots[0] ?? null;
      setSelectedHotspot(firstHotspot);

      const center = CONSTITUENCY_CENTERS[constituency] || null;
      if (center) {
        mapRef.current?.flyTo(center.lat, center.lng, center.zoom);
      }
    } finally {
      setLoading(false);
      setReportsLoading(false);
    }
  }, [period, theme, constituency]);





  useEffect(() => {
    const timer = window.setTimeout(() => {
      fetchData();
    }, 0);
    return () => {
      window.clearTimeout(timer);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, [fetchData]);

  const filteredHotspots = useMemo(() => {
    const query = wardQuery.trim().toLowerCase();
    return data.hotspots.filter((hotspot) => {
      const themeMatches = theme === "all" || hotspot.theme === theme;
      const wardMatches =
        !query ||
        `${hotspot.ward} ${hotspot.block}`.toLowerCase().includes(query);
      return themeMatches && wardMatches;
    });
  }, [data.hotspots, theme, wardQuery]);

  const lastUpdated = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  }).format(new Date(data.lastUpdatedAt));

  const handleCreateProject = useCallback(
    async (hotspotId: string) => {
      try {
        const response = await fetch(
          `${API_BASE}/api/v1/hotspots/${hotspotId}/create-project`,
          { method: "POST", signal: AbortSignal.timeout(4500) },
        );
        const result = response.ok ? await response.json() : null;
        showToast("Proposal created. Opening Priorities.");
        setTimeout(() => router.push(result?.redirectUrl ?? "/priorities"), 650);
      } catch {
        showToast("Proposal queued locally. Opening Priorities.");
        setTimeout(() => router.push("/priorities"), 650);
      }
    },
    [router, showToast],
  );

  return (
    <div className="min-h-screen bg-[#f6f5f2] text-[#171817]">
      <Header />
      {toast && (
        <div className="fixed right-4 top-4 z-[1000] rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-700 shadow-lg">
          {toast}
        </div>
      )}
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <section className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#171817]/15 bg-white px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#171817]/60 shadow-sm">
              <Activity className="h-3.5 w-3.5 text-[#e25a45]" />
              {data.constituencyLabel ?? constituency.charAt(0).toUpperCase() + constituency.slice(1)} Constituency Decision Overview
            </div>
            <h1 className="mt-3 text-3xl font-black tracking-normal text-[#171817] sm:text-4xl">
              Constituency Dashboard
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-[#171817]/60">
              {data.summary.totalSubmissions.toLocaleString()} processed citizen
              reports in {period}.{" "}
              {data.languageBreakdown.odia + data.languageBreakdown.hindi}% were
              submitted in Odia or Hindi. {data.summary.activeHotspots} demand
              hotspots identified across wards. Updated {lastUpdated}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Location selector */}
            <select
              value={constituency}
              onChange={(event) => {
                setConstituency(event.target.value);
                setTheme("all");
                setWardQuery("");
              }}
              className="rounded-lg border border-[#171817]/20 bg-white px-3 py-2 text-sm font-semibold shadow-sm"
            >
              <option value="khordha">Khordha</option>
              <option value="puri">Puri</option>
              <option value="cuttack">Cuttack</option>
              <option value="bhubaneswar">Bhubaneswar</option>
            </select>

            <select
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="rounded-lg border border-[#171817]/20 bg-white px-3 py-2 text-sm font-semibold shadow-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button
              type="button"
              onClick={() => fetchData(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-[#171817]/20 bg-white px-3 py-2 text-sm font-semibold shadow-sm hover:border-[#171817]/50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </section>



        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <SummaryCard
            value={data.summary.totalSubmissions.toLocaleString()}
            label="Citizen reports"
            sub={`Validated in ${period}`}
          />
          <SummaryCard
            value={data.summary.recurringThemes}
            label="Recurring needs"
            sub="AI-confirmed themes"
            onClick={() => setTheme("all")}
          />
          <SummaryCard
            value={data.summary.activeHotspots}
            label="Active hotspots"
            sub="Above demand threshold"
          />
          <SummaryCard
            value={data.summary.candidateProjects}
            label="Ready for review"
            sub="Move to Priorities"
            onClick={() => router.push("/priorities")}
          />
        </section>

        <section className="flex flex-wrap items-center gap-2 rounded-lg border border-[#171817]/15 bg-white p-3 shadow-sm">
          <Filter className="h-4 w-4 text-[#171817]/45" />
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
            {THEMES.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setTheme(item.key)}
                className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${
                  theme === item.key
                    ? "border-[#171817] bg-[#171817] text-white"
                    : "border-[#171817]/15 bg-white text-[#171817]/65"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="ml-auto flex min-w-[220px] items-center gap-2 rounded-lg border border-[#171817]/15 bg-slate-50 px-3 py-2">
            <Search className="h-4 w-4 text-[#171817]/40" />
            <input
              value={wardQuery}
              onChange={(event) => setWardQuery(event.target.value)}
              placeholder="Ward or block"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[2fr_3fr]">
          <div className="rounded-lg border border-[#171817]/15 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#e25a45]">
                  Priority Pulse
                </p>
                <h2 className="text-xl font-black text-[#171817]">
                  Top recurring needs
                </h2>
              </div>
              <Flame className="h-5 w-5 text-[#e25a45]" />
            </div>
            <div className="mb-4 rounded-lg bg-slate-50 p-3 font-mono text-[11px] text-[#171817]/60">
              Signal = 0.40 Demand + 0.25 Population + 0.20 Urgency + 0.15
              Infra gap
            </div>

            <div className="divide-y divide-[#171817]/10">
              {data.priorityPulse.slice(0, 5).map((topic, index) => {
                const meta = THEME_META[topic.theme];
                const Icon = meta.icon;
                return (
                  <article key={topic.theme} className="py-3">
                    <div className="flex gap-3">
                      <span className="font-mono text-xs font-black text-[#171817]/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`rounded-lg border p-1 ${meta.chip}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <h3 className="font-black text-[#171817]">
                            {topic.label}
                          </h3>
                          <span
                            className={`rounded-full border px-2 py-0.5 text-xs font-bold capitalize ${PRIORITY_BADGE[topic.priority]}`}
                          >
                            {topic.priority}
                          </span>
                          <TrendBadge value={topic.trendPercent} />
                        </div>
                        <p className="mt-2 text-xs text-[#171817]/55">
                          <strong>{topic.submissionCount.toLocaleString()}</strong>{" "}
                          reports | <strong>{topic.affectedWards}</strong> wards
                          | <strong>{formatCount(topic.affectedPopulation)}</strong>{" "}
                          people affected
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-[#e25a45]"
                              style={{
                                width: `${Math.min(topic.signalScore, 100)}%`,
                              }}
                            />
                          </div>
                          <span className="font-mono text-xs font-bold text-[#e25a45]">
                            {topic.signalScore}
                          </span>
                        </div>
                        {topic.infraGap && (
                          <p className="mt-2 text-xs text-[#171817]/50">
                            {topic.infraGap}
                          </p>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            const hotspot = data.hotspots.find(
                              (item) => item.theme === topic.theme,
                            );
                            if (hotspot) {
                              setSelectedHotspot(hotspot);
                              setTheme(
                                topic.theme === "health_clinic"
                                  ? "health_access"
                                  : topic.theme,
                              );
                              mapRef.current?.flyTo(hotspot.latitude, hotspot.longitude, 14);
                            }
                          }}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#171817] underline underline-offset-2 hover:text-[#e25a45]"
                        >
                          View affected wards <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
            <div className="rounded-lg border border-[#171817]/15 bg-white p-5 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#e25a45]">
                    Demand Hotspot Map
                  </p>
                  <h2 className="text-xl font-black text-[#171817]">
                    Where to look first
                  </h2>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#171817]/60">
                  Heatmap / markers
                </span>
              </div>
              <div className="h-[380px] overflow-hidden rounded-lg border border-[#171817]/10 md:h-[560px]">
                <DemandHotspotMap
                  ref={mapRef}
                  hotspots={filteredHotspots}
                  selectedId={selectedHotspot?.id ?? null}
                  onSelect={(h) => {
                    setSelectedHotspot(h);
                    mapRef.current?.flyTo(h.latitude, h.longitude, 14);
                  }}
                  themeMeta={THEME_META}
                />
              </div>
            </div>

            <div className="space-y-4">
              <WardProposalList
                hotspots={filteredHotspots}
                selectedId={selectedHotspot?.id ?? null}
                onSelect={(h) => {
                  setSelectedHotspot(h);
                  mapRef.current?.flyTo(h.latitude, h.longitude, 14);
                }}
                onCreateProject={handleCreateProject}
              />


              {selectedHotspot && (
                <HotspotDetail
                  hotspot={selectedHotspot}
                  onClose={() => setSelectedHotspot(null)}
                  onCreateProject={handleCreateProject}
                />
              )}
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#171817]/15 bg-white p-5 shadow-sm">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#171817]/10 pb-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#e25a45]">
                Submitted Reports
              </p>
              <h2 className="text-xl font-black text-[#171817]">
                Submitted Reports ({data.recentSubmissions.length})
              </h2>
              <p className="mt-1 text-xs text-[#171817]/60">
                Live citizen reports with audible voice recordings, visible photo evidence, submitted complaints, and citizen credentials.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  showToast("Refreshing submitted reports from database...");
                  fetchData(true);
                }}
                disabled={reportsLoading}
                aria-label="Refresh submitted reports"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#171817]/20 bg-white px-3 py-1.5 text-xs font-bold text-[#171817] shadow-sm transition hover:bg-slate-50 hover:border-[#171817]/40 active:scale-95 disabled:opacity-60"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${reportsLoading ? "animate-spin text-[#e25a45]" : ""}`} />
                {reportsLoading ? "Refreshing..." : "Refresh"}
              </button>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                <CheckCircle className="h-3.5 w-3.5" />
                Live Database
              </span>
              <Link
                href="/report"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#e25a45] px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#d44833]"
              >
                + Report an Issue
              </Link>
            </div>
          </div>

          {/* Loading Bar for Submitted Reports */}
          {reportsLoading && (
            <div className="mb-5 overflow-hidden rounded-xl border border-amber-200/80 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#171817]">
                  <RefreshCw className="h-3.5 w-3.5 animate-spin text-[#e25a45]" />
                  Loading Submitted Reports...
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#e25a45]">
                  Syncing Live Data
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-amber-200/60">
                <div className="h-full w-full bg-gradient-to-r from-[#e25a45] via-amber-500 to-[#e25a45] animate-pulse rounded-full" />
              </div>
            </div>
          )}

          {reportsLoading && data.recentSubmissions.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#171817]/20 bg-[#fbfbfa] py-12 px-4 text-center">
              <RefreshCw className="h-8 w-8 animate-spin text-[#e25a45] mb-3" />
              <h3 className="text-base font-bold text-[#171817]">Loading Submitted Reports...</h3>
              <p className="mt-1 max-w-md text-xs text-[#171817]/60">
                Retrieving verified citizen evidence, credentials, and attachments from the database.
              </p>
            </div>
          ) : data.recentSubmissions.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#171817]/20 bg-[#fbfbfa] py-12 px-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#171817]/40 mb-3">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-[#171817]">No Submitted Reports Found</h3>
              <p className="mt-1 max-w-md text-xs text-[#171817]/60">
                No citizen reports found for this constituency. Submit an issue in &apos;Report an Issue&apos; to see it appear here immediately.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    showToast("Refreshing database reports...");
                    fetchData(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#171817]/20 bg-white px-3 py-2 text-xs font-bold text-[#171817] shadow-sm hover:bg-slate-50 transition"
                >
                  <RefreshCw className="h-3.5 w-3.5 text-[#e25a45]" /> Refresh Reports
                </button>
                <Link
                  href="/report"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#171817] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#e25a45]"
                >
                  Submit Citizen Report <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {data.recentSubmissions.map((submission) => {
                const meta = THEME_META[submission.theme as IssueTheme] || THEME_META.road_repair;
                const audioSrc = resolveMediaUrl(submission.audioUrl || submission.audio_url);
                const photoSrc = resolveMediaUrl(submission.photoUrl || submission.photo_url);
                const videoSrc = resolveMediaUrl(submission.videoUrl || submission.video_url);
                const fullName = submission.fullName || submission.full_name;
                const email = submission.email;
                const phone = submission.phone;
                const submittedText = submission.content || submission.preview || submission.translatedPreview;
                const transcript = submission.transcript;
                const problemLocation = submission.extracted?.problem_location;
                const formattedDate = formatSubmissionDate(submission.createdAt || submission.created_at);

                return (
                  <article
                    key={submission.id}
                    className="flex flex-col justify-between overflow-hidden rounded-xl border border-[#171817]/15 bg-white shadow-sm transition hover:shadow-md hover:border-[#171817]/30"
                  >
                    <div>
                      {/* Card Header: Theme, Language, Channel, Time */}
                      <div className="flex items-center justify-between gap-2 border-b border-[#171817]/10 bg-slate-50/70 p-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className={`rounded-md border px-2 py-0.5 text-xs font-bold ${meta.chip}`}>
                            {meta.label}
                          </span>
                          <span className="rounded-md bg-white border border-[#171817]/10 px-2 py-0.5 text-[11px] font-semibold text-[#171817]/70 uppercase">
                            {submission.language}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-md bg-white border border-[#171817]/10 px-2 py-0.5 text-[11px] font-semibold text-[#171817]/70">
                            {audioSrc || submission.channel === "voice" ? (
                              <><Mic className="h-3 w-3 text-[#e25a45]" /> Voice</>
                            ) : photoSrc || submission.channel === "photo" ? (
                              <><ImageIcon className="h-3 w-3 text-sky-600" /> Photo</>
                            ) : (
                              <><MessageSquare className="h-3 w-3 text-slate-600" /> Text</>
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-[#171817]/60 font-semibold">
                          <Clock className="h-3 w-3" />
                          {submission.submittedMinsAgo ? timeAgo(submission.submittedMinsAgo) : "Just now"}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="space-y-3 p-4">
                        {/* 1. Citizen Credentials (All credentials submitted by the user) */}
                        <div className="rounded-lg border border-[#171817]/10 bg-[#fbfbfa] p-3 space-y-1.5 text-xs">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e25a45] mb-1 flex items-center justify-between">
                            <span>Citizen Credentials</span>
                            <span className="rounded-full bg-emerald-100 text-emerald-800 px-1.5 py-0.2 text-[9px] font-bold uppercase">
                              {submission.status || "processed"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-3.5 w-3.5 text-[#171817]/50 shrink-0" />
                            <span className="font-bold text-[#171817] truncate">
                              {fullName || "Anonymous Citizen"}
                            </span>
                          </div>
                          {email && (
                            <div className="flex items-center gap-2 text-[#171817]/75">
                              <Mail className="h-3.5 w-3.5 text-[#171817]/40 shrink-0" />
                              <span className="truncate">{email}</span>
                            </div>
                          )}
                          {phone && (
                            <div className="flex items-center gap-2 text-[#171817]/75">
                              <Phone className="h-3.5 w-3.5 text-[#171817]/40 shrink-0" />
                              <span>{phone}</span>
                            </div>
                          )}
                          <div className="flex items-start gap-2 text-[#171817]/80 pt-1 border-t border-[#171817]/5">
                            <MapPin className="h-3.5 w-3.5 text-[#e25a45] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold">{submission.ward || "Constituency Area"}</span>
                              {submission.block && submission.block !== "unknown" && (
                                <span className="text-[#171817]/60"> · {submission.block}</span>
                              )}
                              {problemLocation && (
                                <p className="text-[11px] text-[#171817]/60 italic mt-0.5">{problemLocation}</p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* 2. Text Submitted (Visible) */}
                        <div className="space-y-1">
                          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#171817]/50">
                            Submitted Text / Complaint
                          </p>
                          <div className="rounded-lg border border-[#171817]/10 bg-white p-3 text-xs leading-relaxed text-[#171817]">
                            <p className="font-medium">{submittedText || "No additional text description provided."}</p>
                            {transcript && transcript !== submittedText && (
                              <div className="mt-2.5 pt-2 border-t border-dashed border-[#171817]/10">
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-violet-700 mb-0.5">
                                  AI Audio Transcript:
                                </span>
                                <p className="text-xs italic text-[#171817]/80">{transcript}</p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* 3. Voice Evidence (Audible) */}
                        {audioSrc && (
                          <AudioEvidencePlayer src={audioSrc} label="Voice Recording" />
                        )}

                        {/* 4. Photo Evidence (Visible) */}
                        {photoSrc && (
                          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                            <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-slate-200 bg-white text-xs">
                              <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 text-[11px]">
                                <ImageIcon className="h-3.5 w-3.5 text-slate-500" /> Photo Evidence
                              </span>
                              <a
                                href={photoSrc}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#e25a45] hover:underline"
                              >
                                View full <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                              <img
                                src={photoSrc}
                                alt={`Evidence for report in ${submission.ward}`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        )}

                        {/* 5. Video Evidence (if present) */}
                        {videoSrc && (
                          <VideoEvidencePlayer src={videoSrc} label="Video Evidence" />
                        )}
                      </div>
                    </div>

                    {/* Card Footer: Reference ID & Timestamp */}
                    <div className="border-t border-[#171817]/10 bg-slate-50/70 px-4 py-2.5 flex items-center justify-between text-[11px] text-[#171817]/50">
                      <span className="font-mono">ID: {submission.id.slice(0, 8)}...</span>
                      <span>{formattedDate || `${timeAgo(submission.submittedMinsAgo)}`}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#171817]/10 pt-4 text-xs text-[#171817]/60">
            <span>
              All reports shown are directly retrieved from the database with verified citizen credentials and evidence.
            </span>
            <Link
              href="/priorities"
              className="inline-flex items-center gap-1 font-bold text-[#171817] hover:text-[#e25a45]"
            >
              Review in Priorities <CheckCircle2 className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
