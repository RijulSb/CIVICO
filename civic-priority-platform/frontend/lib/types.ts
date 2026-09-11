export type SubmissionLanguage = "odia" | "hindi" | "english" | "hinglish";
export type SubmissionType = "voice" | "text" | "photo" | "video";
export type SubmissionStatus = "pending" | "processed" | "rejected";

export type SolverStatus =
  | "optimal"
  | "feasible"
  | "infeasible"
  | "unbounded"
  | "timeout"
  | "error"
  | "heuristic_fallback"
  | "empty";

export interface SubmissionLocation {
  ward: string;
  block: string;
  latitude?: number;
  longitude?: number;
  accuracy_m?: number;
  timestamp?: string;
  custom_text?: string;
}

export interface SubmissionRequest {
  constituency?: string;
  language: SubmissionLanguage;
  submission_type: SubmissionType;
  content: string;
  audio_url?: string;
  audio_file?: Blob;
  video_file?: Blob;
  photo_file?: Blob;
  photo_url?: string;
  location: SubmissionLocation;
  custom_location_text?: string;
  gps_accuracy_m?: number;
  gps_timestamp?: string;
  consent?: boolean;
  category?: string;
  citizen_id?: string;
  full_name?: string;
  email?: string;
  phone?: string;
}

export interface SubmissionAIResult {
  formatted_text?: Record<string, string | null>;
  transcript?: string | null;
  extracted?: {
    issue_type: string;
    problem_location: string;
    coordinates?: { lat: number; lng: number };
    urgency: "low" | "medium" | "high";
    urgency_reason: string;
    beneficiaries_estimate: string;
  };
}

export interface SubmissionResponse extends SubmissionAIResult {
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

// ---------------------------------------------------------------------------
// Portfolio — typed, machine-enforceable constraints (matches backend schema)
// ---------------------------------------------------------------------------

export interface ProjectDependency {
  project_id: string;
  prerequisite_project_id: string;
}

export interface WardBudget {
  ward: string;
  minimum?: number;
  maximum?: number | null;
}

export interface PortfolioConstraints {
  reserve_percent?: number;
  min_wards?: number;
  max_projects_per_ward?: number | null;
  max_projects_per_theme?: Record<string, number>;
  min_projects_per_theme?: Record<string, number>;
  ward_budgets?: WardBudget[];
  dependencies?: ProjectDependency[];
  mandatory_project_ids?: string[];
  forbidden_project_ids?: string[];
  allow_heuristic_fallback?: boolean;
  solver_time_limit_seconds?: number;
  solver_mip_gap?: number;
}

export interface SolverWeights {
  version?: string;
  population_impact?: number;
  urgency?: number;
  cost_effectiveness?: number;
  alignment?: number;
}

export interface ConstraintCheck {
  code: string;
  label: string;
  passed: boolean;
  actual: unknown;
  limit: unknown;
}

export interface ConstraintExplanation {
  code: string;
  label: string;
  formula: string;
  parameters: Record<string, unknown>;
  enforced: boolean;
}

export interface PortfolioCreate {
  constituency?: string;
  budget: number;
  constraints?: PortfolioConstraints;
  weights?: SolverWeights;
}

export interface PortfolioResponse {
  portfolio_id: string;
  constituency: string;

  // Budget accounting
  budget: number;
  net_budget?: number;
  reserve_amount?: number;
  spend?: number;

  // Selected projects
  selected_projects: RankedProject[];
  total_benefit: number;

  // Solver metadata
  status: string;
  solver_status?: SolverStatus | string;
  objective_value?: number;
  mip_gap?: number | null;
  solve_seconds?: number | null;
  fallback_reason?: string | null;
  weights?: SolverWeights | null;

  // Audit
  constraints: PortfolioConstraints;
  constraint_checks?: ConstraintCheck[];
  constraint_explanations?: ConstraintExplanation[];
}

export interface DashboardRecentSubmission {
  id: string;
  ward: string;
  theme: string;
  language?: string;
  channel?: SubmissionType;
  preview?: string;
  translatedPreview?: string;
  submittedMinsAgo?: number;
}

export interface DashboardResponse {
  hotspots: HotspotItem[];
  top_projects: RankedProject[];
  user_submissions?: SubmissionResponse[];
  recentSubmissions?: DashboardRecentSubmission[];
  constituency: string;
  total_submissions?: number;
  dataSource?: "live" | "fallback" | string;
}

export interface MapFeature {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: Record<string, unknown>;
}

export interface MapFeatureCollection {
  type: "FeatureCollection";
  features: MapFeature[];
}

// ---------------------------------------------------------------------------
// Authentication & RBAC Types (PARAKRAM 1.0)
// ---------------------------------------------------------------------------

export type UserRole = "civilian" | "admin";

export interface UserProfile {
  id: string;
  full_name: string;
  username: string;
  email: string;
  phone: string;
  role: UserRole;
  email_verified?: boolean;
  phone_verified?: boolean;
  consent?: boolean;
  created_at: string;
}

export interface AuthTokenResponse {
  access_token: string;
  token_type: string;
  user: UserProfile;
}

export interface SignUpPayload {
  full_name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  consent: boolean;
}

export interface SignInPayload {
  email_or_phone: string;
  password: string;
  remember_me?: boolean;
}
