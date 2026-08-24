export type SubmissionLanguage = "odia" | "hindi" | "english" | "hinglish";
export type SubmissionType = "voice" | "text" | "photo";
export type SubmissionStatus = "pending" | "processed" | "rejected";

export interface SubmissionLocation {
  ward: string;
  block: string;
  latitude: number;
  longitude: number;
}

export interface SubmissionRequest {
  constituency?: string;
  language: SubmissionLanguage;
  submission_type: SubmissionType;
  content: string;
  audio_url?: string;
  photo_url?: string;
  location: SubmissionLocation;
  category?: string;
  citizen_id?: string;
}

export interface SubmissionResponse {
  submission_id: string;
  status: SubmissionStatus;
  theme?: string;
  confidence?: number;
  message: string;
}

export interface HotspotItem {
  ward: string;
  theme: string;
  submission_count: number;
  latitude: number;
  longitude: number;
  radius: number;
}

export interface HotspotRequest {
  constituency?: string;
  theme?: string;
}

export interface HotspotListResponse {
  hotspots: HotspotItem[];
  constituency: string;
}

export interface ScoringWeights {
  population_impact: number;
  urgency: number;
  cost_effectiveness: number;
  alignment_with_plans: number;
}

export interface RankedProject {
  project_id: string;
  theme: string;
  ward: string;
  score: number;
  population_impact_score: number;
  urgency_score: number;
  cost_effectiveness_score: number;
  alignment_score: number;
  social_impact: string;
  economic_impact: string;
  estimated_cost: number;
}

export interface RankingRequest {
  constituency?: string;
  budget?: number;
}

export interface RankingResponse {
  projects: RankedProject[];
  scoring_weights: ScoringWeights;
  constituency: string;
}

export interface PortfolioConstraints {
  geographical: string[];
  timeline: string[];
  administrative: string[];
}

export interface PortfolioCreate {
  constituency?: string;
  budget: number;
  constraints?: PortfolioConstraints;
}

export interface PortfolioResponse {
  portfolio_id: string;
  constituency: string;
  budget: number;
  selected_projects: RankedProject[];
  total_benefit: number;
  constraints: PortfolioConstraints;
  status: string;
}

export interface DashboardResponse {
  hotspots: HotspotItem[];
  top_projects: RankedProject[];
  user_submissions: SubmissionResponse[];
  constituency: string;
  total_submissions: number;
}

export interface MapFeature {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: Record<string, any>;
}

export interface MapFeatureCollection {
  type: "FeatureCollection";
  features: MapFeature[];
}
