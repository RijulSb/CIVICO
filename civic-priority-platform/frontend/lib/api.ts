import type {
  AuthTokenResponse,
  DashboardResponse,
  HotspotListResponse,
  HotspotRequest,
  MapFeatureCollection,
  PortfolioCreate,
  PortfolioResponse,
  RankingRequest,
  RankingResponse,
  SignInPayload,
  SignUpPayload,
  SubmissionRequest,
  SubmissionResponse,
  UserProfile,
} from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const API_PREFIX = `${API_BASE}/api/v1`;

function getStoredToken(): string | null {
  if (typeof window !== "undefined") {
    try {
      return localStorage.getItem("civico_token");
    } catch {
      return null;
    }
  }
  return null;
}

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const isFormData =
    typeof FormData !== "undefined" && options?.body instanceof FormData;
  const token = getStoredToken();
  const res = await fetch(url, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API call failed: ${res.status} ${res.statusText} - ${errorText}`);
  }

  return res.json() as Promise<T>;
}

// ---------------------------------------------------------------------------
// Authentication API Methods
// ---------------------------------------------------------------------------

export async function apiSignUp(payload: SignUpPayload): Promise<AuthTokenResponse> {
  return fetchJson<AuthTokenResponse>(`${API_PREFIX}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function apiSignIn(payload: SignInPayload): Promise<AuthTokenResponse> {
  return fetchJson<AuthTokenResponse>(`${API_PREFIX}/auth/signin`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function apiGetMe(token?: string): Promise<UserProfile> {
  return fetchJson<UserProfile>(`${API_PREFIX}/auth/me`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
}

// ---------------------------------------------------------------------------
// Intake & Domain API Methods
// ---------------------------------------------------------------------------

export async function createSubmission(
  payload: SubmissionRequest
): Promise<SubmissionResponse> {
  if (payload.audio_file || payload.video_file || payload.photo_file) {
    const formData = new FormData();
    formData.append("constituency", payload.constituency || "khordha");
    formData.append("language", payload.language);
    formData.append("submission_type", payload.submission_type);
    if (payload.full_name) formData.append("full_name", payload.full_name);
    if (payload.email) formData.append("email", payload.email);
    if (payload.phone) formData.append("phone", payload.phone);
    if (payload.consent != null) formData.append("consent", String(payload.consent));
    formData.append("content", payload.content);
    formData.append("ward", payload.location.ward);
    formData.append("block", payload.location.block);
    if (payload.location.latitude != null) formData.append("latitude", String(payload.location.latitude));
    if (payload.location.longitude != null) formData.append("longitude", String(payload.location.longitude));
    if (payload.custom_location_text) formData.append("custom_location_text", payload.custom_location_text);
    if (payload.gps_accuracy_m != null) formData.append("gps_accuracy_m", String(payload.gps_accuracy_m));
    if (payload.gps_timestamp) formData.append("gps_timestamp", payload.gps_timestamp);
    if (payload.consent != null) formData.append("consent", String(payload.consent));
    if (payload.audio_url) formData.append("audio_url", payload.audio_url);
    if (payload.photo_url) formData.append("photo_url", payload.photo_url);
    if (payload.category) formData.append("category", payload.category);
    if (payload.citizen_id) formData.append("citizen_id", payload.citizen_id);
    if (payload.audio_file) formData.append("audio", payload.audio_file, "civico-voice.webm");
    if (payload.video_file) formData.append("video", payload.video_file, "civico-video.webm");
    if (payload.photo_file) formData.append("photo", payload.photo_file, "civico-photo.jpg");

    return fetchJson<SubmissionResponse>(`${API_PREFIX}/submissions`, {
      method: "POST",
      body: formData,
    });
  }

  const jsonPayload: SubmissionRequest = { ...payload };
  delete jsonPayload.audio_file;
  delete jsonPayload.video_file;
  delete jsonPayload.photo_file;
  return fetchJson<SubmissionResponse>(`${API_PREFIX}/submissions`, {
    method: "POST",
    body: JSON.stringify(jsonPayload),
  });
}

export async function getSubmission(submissionId: string): Promise<SubmissionResponse> {
  return fetchJson<SubmissionResponse>(`${API_PREFIX}/submissions/${submissionId}`);
}

export async function getSubmissions(
  constituency: string = "khordha",
  limit: number = 50
): Promise<SubmissionResponse[]> {
  try {
    return await fetchJson<SubmissionResponse[]>(
      `${API_PREFIX}/submissions?constituency=${encodeURIComponent(constituency)}&limit=${limit}`
    );
  } catch (err) {
    console.warn("Backend submissions list failed, falling back to empty:", err);
    return [];
  }
}

export async function getDashboard(
  constituency: string = "khordha"
): Promise<DashboardResponse> {
  try {
    return await fetchJson<DashboardResponse>(
      `${API_PREFIX}/dashboard?constituency=${encodeURIComponent(constituency)}`
    );
  } catch (err) {
    console.warn("Backend unavailable, returning fallback dashboard data:", err);
    return getFallbackDashboard(constituency);
  }
}

export async function generateHotspots(
  payload: HotspotRequest = {}
): Promise<HotspotListResponse> {
  try {
    return await fetchJson<HotspotListResponse>(`${API_PREFIX}/hotspots`, {
      method: "POST",
      body: JSON.stringify({ constituency: "khordha", ...payload }),
    });
  } catch (err) {
    console.warn("Backend unavailable, returning fallback hotspots:", err);
    return {
      constituency: payload.constituency || "khordha",
      hotspots: getFallbackHotspots(),
    };
  }
}

export async function generateRanking(
  payload: RankingRequest = {}
): Promise<RankingResponse> {
  try {
    return await fetchJson<RankingResponse>(`${API_PREFIX}/ranking`, {
      method: "POST",
      body: JSON.stringify({ constituency: "khordha", ...payload }),
    });
  } catch (err) {
    console.warn("Backend unavailable, returning fallback ranking:", err);
    return {
      constituency: payload.constituency || "khordha",
      projects: getFallbackProjects(),
      scoring_weights: {
        population_impact: 0.4,
        urgency: 0.3,
        cost_effectiveness: 0.2,
        alignment_with_plans: 0.1,
      },
    };
  }
}

export async function createPortfolio(
  payload: PortfolioCreate
): Promise<PortfolioResponse> {
  try {
    return await fetchJson<PortfolioResponse>(`${API_PREFIX}/portfolios`, {
      method: "POST",
      headers: {
        "Idempotency-Key": `port_${Date.now()}`,
      },
      body: JSON.stringify({ constituency: "khordha", ...payload }),
    });
  } catch (err) {
    console.warn("Backend unavailable, returning fallback portfolio:", err);
    const projects = getFallbackProjects().slice(0, 3);
    const budget = payload.budget;
    const reservePct = payload.constraints?.reserve_percent ?? 5;
    const netBudget = Math.floor(budget * (1 - reservePct / 100));
    const reserveAmount = budget - netBudget;
    const spend = projects.reduce((acc, p) => acc + p.estimated_cost, 0);
    return {
      portfolio_id: `fallback-${Date.now()}`,
      constituency: payload.constituency || "khordha",
      budget,
      net_budget: netBudget,
      reserve_amount: reserveAmount,
      spend,
      selected_projects: projects,
      total_benefit: projects.reduce((acc, p) => acc + p.score, 0),
      constraints: payload.constraints ?? { reserve_percent: reservePct },
      status: "heuristic_fallback",
      solver_status: "heuristic_fallback",
      fallback_reason: "Backend is unavailable. Results are from a greedy heuristic.",
    };
  }
}

export async function getMapIssues(): Promise<MapFeatureCollection> {
  try {
    return await fetchJson<MapFeatureCollection>(`${API_PREFIX}/maps/issues`);
  } catch (err) {
    return { type: "FeatureCollection", features: [] };
  }
}

export async function getMapHotspots(): Promise<MapFeatureCollection> {
  try {
    return await fetchJson<MapFeatureCollection>(`${API_PREFIX}/maps/hotspots`);
  } catch (err) {
    return { type: "FeatureCollection", features: [] };
  }
}

export interface WardContextRecord {
  ward_id: string;
  ward_name?: string;
  city_name: string;
  zone_name: string;
  area_sq_km: number;
  population_thousands: number;
  male_population_thousands: number;
  female_population_thousands: number;
  children_population_thousands: number;
  youth_population_thousands: number;
}

export async function getWardsContext(): Promise<WardContextRecord[]> {
  try {
    return await fetchJson<WardContextRecord[]>(`${API_PREFIX}/context/wards`);
  } catch (err) {
    return [
      { ward_id: "Ward 1", ward_name: "Chandrasekharpur", city_name: "Khordha", zone_name: "North", area_sq_km: 4.2, population_thousands: 8.2, male_population_thousands: 4.2, female_population_thousands: 4.0, children_population_thousands: 1.1, youth_population_thousands: 2.3 },
      { ward_id: "Ward 2", ward_name: "Patia", city_name: "Khordha", zone_name: "North", area_sq_km: 3.8, population_thousands: 7.4, male_population_thousands: 3.8, female_population_thousands: 3.6, children_population_thousands: 0.9, youth_population_thousands: 2.1 },
      { ward_id: "Ward 3", ward_name: "Jaydev Vihar", city_name: "Khordha", zone_name: "Central", area_sq_km: 5.1, population_thousands: 9.1, male_population_thousands: 4.6, female_population_thousands: 4.5, children_population_thousands: 1.3, youth_population_thousands: 2.8 },
      { ward_id: "Ward 4", ward_name: "Acharya Vihar", city_name: "Khordha", zone_name: "Central", area_sq_km: 2.9, population_thousands: 6.8, male_population_thousands: 3.5, female_population_thousands: 3.3, children_population_thousands: 0.8, youth_population_thousands: 1.9 },
      { ward_id: "Ward 5", ward_name: "Saheed Nagar", city_name: "Khordha", zone_name: "Central", area_sq_km: 6.0, population_thousands: 11.2, male_population_thousands: 5.8, female_population_thousands: 5.4, children_population_thousands: 1.6, youth_population_thousands: 3.4 },
      { ward_id: "Ward 8", ward_name: "Bhauma Nagar", city_name: "Khordha", zone_name: "South", area_sq_km: 4.5, population_thousands: 7.6, male_population_thousands: 3.9, female_population_thousands: 3.7, children_population_thousands: 1.0, youth_population_thousands: 2.2 },
    ];
  }
}

// ---------------------------------------------------------------------------
// Fallbacks for client resilience during local dev / build
// ---------------------------------------------------------------------------

function getFallbackHotspots() {
  return [
    {
      ward: "Ward 5",
      theme: "road_repair",
      submission_count: 42,
      latitude: 20.1874,
      longitude: 85.6178,
      radius: 500,
    },
    {
      ward: "Ward 3",
      theme: "school_infrastructure",
      submission_count: 28,
      latitude: 20.1921,
      longitude: 85.6241,
      radius: 500,
    },
    {
      ward: "Ward 8",
      theme: "health_clinic",
      submission_count: 19,
      latitude: 20.1798,
      longitude: 85.6089,
      radius: 500,
    },
  ];
}

function getFallbackProjects() {
  return [
    {
      project_id: "proj_001",
      theme: "road_repair",
      ward: "Ward 5",
      score: 87.5,
      population_impact_score: 90,
      urgency_score: 85,
      cost_effectiveness_score: 80,
      alignment_score: 75,
      social_impact: "Saves 12,000 commute hours/day for 11,200 residents in Ward 5",
      economic_impact: "ROI: 2.5x — generates 50 local jobs, reduces transport cost 30%",
      estimated_cost: 12000000,
    },
    {
      project_id: "proj_002",
      theme: "school_infrastructure",
      ward: "Ward 3",
      score: 81.2,
      population_impact_score: 85,
      urgency_score: 78,
      cost_effectiveness_score: 82,
      alignment_score: 70,
      social_impact: "Improves learning outcomes for 9,100 students in Ward 3",
      economic_impact: "ROI: 3.1x — boosts enrolment 15%, reduces dropout 20%",
      estimated_cost: 8000000,
    },
    {
      project_id: "proj_003",
      theme: "health_clinic",
      ward: "Ward 8",
      score: 76.8,
      population_impact_score: 75,
      urgency_score: 80,
      cost_effectiveness_score: 70,
      alignment_score: 80,
      social_impact: "Reduces OOP medical expenditure for 7,600 residents in Ward 8",
      economic_impact: "ROI: 1.8x — reduces disease burden, generates 20 healthcare jobs",
      estimated_cost: 15000000,
    },
  ];
}

function getFallbackDashboard(constituency: string): DashboardResponse {
  return {
    constituency,
    total_submissions: 145,
    hotspots: getFallbackHotspots(),
    top_projects: getFallbackProjects(),
    user_submissions: [
      {
        submission_id: "sub_001",
        status: "processed",
        theme: "road_repair",
        confidence: 0.92,
        message: "Submission processed.",
      },
    ],
  };
}
