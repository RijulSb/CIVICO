import type {
  DashboardResponse,
  HotspotListResponse,
  HotspotRequest,
  MapFeatureCollection,
  PortfolioCreate,
  PortfolioResponse,
  RankingRequest,
  RankingResponse,
  SubmissionRequest,
  SubmissionResponse,
} from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const API_PREFIX = `${API_BASE}/api/v1`;

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
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
// API Methods
// ---------------------------------------------------------------------------

export async function createSubmission(
  payload: SubmissionRequest
): Promise<SubmissionResponse> {
  return fetchJson<SubmissionResponse>(`${API_PREFIX}/submissions`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getSubmission(submissionId: string): Promise<SubmissionResponse> {
  return fetchJson<SubmissionResponse>(`${API_PREFIX}/submissions/${submissionId}`);
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
    return {
      portfolio_id: `fallback-${Date.now()}`,
      constituency: payload.constituency || "khordha",
      budget: payload.budget,
      selected_projects: projects,
      total_benefit: projects.reduce((acc, p) => acc + p.score, 0),
      constraints: payload.constraints || {
        geographical: ["Max 3 projects per ward"],
        timeline: ["Roads before building construction"],
        administrative: ["Capacity cap active"],
      },
      status: "optimized",
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
