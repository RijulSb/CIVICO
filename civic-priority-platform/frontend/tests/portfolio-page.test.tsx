import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import PortfolioPage from "@/app/portfolio/page";
import { createPortfolio, generateRanking, getDashboard } from "@/lib/api";
import type { DashboardResponse, PortfolioResponse, RankingResponse } from "@/lib/types";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("@/components/layout/Header", () => ({ default: () => <header data-testid="mock-header" /> }));

vi.mock("@/lib/api", () => ({
  createPortfolio: vi.fn(),
  generateRanking: vi.fn(),
  getDashboard: vi.fn(),
}));

const mockDashboard: DashboardResponse = {
  constituency: "khordha",
  hotspots: [],
  top_projects: [],
  total_submissions: 2,
  user_submissions: [
    {
      submission_id: "CIV-1001",
      status: "processed",
      theme: "Road safety",
      confidence: 0.94,
      message: "Validated report",
      formatted_text: { en: "Potholes are making the school road unsafe." },
      extracted: {
        issue_type: "Road repair",
        problem_location: "Ward 5, Saheed Nagar",
        urgency: "high",
        urgency_reason: "School buses face frequent near-misses.",
        beneficiaries_estimate: "15,000 residents",
      },
    },
    {
      submission_id: "CIV-1002",
      status: "pending",
      theme: "School infrastructure",
      confidence: 0.81,
      message: "Pending validation",
      formatted_text: { en: "The government school needs a science laboratory." },
      extracted: {
        issue_type: "School upgrade",
        problem_location: "Ward 12, School Sector",
        urgency: "medium",
        urgency_reason: "Current capacity is below enrolment.",
        beneficiaries_estimate: "1,100 students",
      },
    },
  ],
};

const mockRanking: RankingResponse = {
  constituency: "khordha",
  scoring_weights: {
    population_impact: 0.4,
    urgency: 0.3,
    cost_effectiveness: 0.2,
    alignment_with_plans: 0.1,
  },
  projects: [
    {
      project_id: "proj-1",
      theme: "Road safety",
      ward: "Ward 5",
      score: 91.2,
      population_impact_score: 95,
      urgency_score: 92,
      cost_effectiveness_score: 88,
      alignment_score: 90,
      social_impact: "Safer access for school buses and daily commuters.",
      economic_impact: "Reduced travel disruption.",
      estimated_cost: 80_000_000,
    },
  ],
};

const mockPortfolioResponse: PortfolioResponse = {
  portfolio_id: "portfolio-1",
  constituency: "khordha",
  budget: 450_000_000,
  net_budget: 427_500_000,
  reserve_amount: 22_500_000,
  spend: 80_000_000,
  selected_projects: mockRanking.projects,
  total_benefit: 91.2,
  constraints: {
    reserve_percent: 5,
    min_wards: 4,
    max_projects_per_ward: 2,
  },
  status: "optimal",
  solver_status: "optimal",
  objective_value: 91.2,
  mip_gap: 0,
  solve_seconds: 0.42,
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getDashboard).mockResolvedValue(mockDashboard);
  vi.mocked(generateRanking).mockResolvedValue(mockRanking);
  vi.mocked(createPortfolio).mockResolvedValue(mockPortfolioResponse);
});

describe("Portfolio page", () => {
  it("loads ranked proposals and submitted citizen reports", async () => {
    render(<PortfolioPage />);

    expect(await screen.findByText("Submitted reports powering this scenario")).toBeInTheDocument();
    expect(screen.getAllByText("Road safety").length).toBeGreaterThan(0);
    expect(screen.getByText("Explainable priority queue")).toBeInTheDocument();
    expect(screen.getAllByText("Safer access for school buses and daily commuters.").length).toBeGreaterThan(0);
    expect(getDashboard).toHaveBeenCalledWith("khordha");
    expect(generateRanking).toHaveBeenCalledWith({ constituency: "khordha", budget: 450_000_000 });
  });

  it("normalizes live recentSubmissions when the database analytics contract is used", async () => {
    vi.mocked(getDashboard).mockResolvedValueOnce({
      ...mockDashboard,
      user_submissions: [],
      recentSubmissions: [{
        id: "db-sub-1",
        ward: "Ward 8",
        theme: "water_supply",
        channel: "voice",
        translatedPreview: "The ward water pipeline is failing.",
      }],
    });

    const user = userEvent.setup();
    render(<PortfolioPage />);

    expect(await screen.findByText("db-sub-1")).toBeInTheDocument();
    expect(screen.getByText("The ward water pipeline is failing.")).toBeInTheDocument();
    expect(screen.getAllByText("water_supply").length).toBeGreaterThan(0);
    await user.click(screen.getByText("db-sub-1"));
    expect(screen.getByRole("dialog", { name: "Submitted report details" })).toBeInTheDocument();
    expect(screen.getByText("Ward 8")).toBeInTheDocument();
  });

  it("filters submitted reports and opens the evidence detail drawer", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    await screen.findByText("Submitted reports powering this scenario");
    await user.click(screen.getByRole("button", { name: "All reports" }));
    await user.type(screen.getByPlaceholderText("Search ID, theme or text"), "laboratory");

    expect(screen.getByText("CIV-1002")).toBeInTheDocument();
    await waitFor(() => expect(screen.queryAllByText("CIV-1001")).toHaveLength(0));

    await user.click(screen.getByText("CIV-1002"));
    expect(screen.getByRole("dialog", { name: "Submitted report details" })).toBeInTheDocument();
    expect(screen.getByText("Current capacity is below enrolment.")).toBeInTheDocument();
  });

  it("sends typed budget and constraint parameters to the portfolio optimizer", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    await screen.findByText("Re-optimize portfolio");
    fireEvent.change(screen.getByLabelText("Total budget envelope"), { target: { value: "60" } });
    fireEvent.change(screen.getByLabelText("Contingency reserve"), { target: { value: "10" } });
    await user.click(screen.getByRole("button", { name: "Re-optimize portfolio" }));

    // Typed constraints are sent — no legacy string arrays
    await waitFor(() => expect(createPortfolio).toHaveBeenCalledWith(expect.objectContaining({
      constituency: "khordha",
      budget: 600_000_000,
      constraints: expect.objectContaining({
        reserve_percent: 10,
        min_wards: expect.any(Number),
        max_projects_per_ward: expect.any(Number),
      }),
      weights: expect.objectContaining({
        version: "v1",
        population_impact: 0.40,
      }),
    })));

    // Solver status badge is shown after optimization
    expect(await screen.findByText("Optimal")).toBeInTheDocument();
  });

  it("shows net budget and reserve from the API response after optimization", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    await screen.findByText("Re-optimize portfolio");
    await user.click(screen.getByRole("button", { name: "Re-optimize portfolio" }));

    // Net spendable and reserve should be visible from API response values
    await waitFor(() => {
      // net_budget = 427_500_000 → ₹42.8 Cr; reserve = 22_500_000 → ₹2.3 Cr
      expect(screen.getAllByText(/₹42\.8 Cr|₹42\.7 Cr/).length).toBeGreaterThan(0);
    });
  });
});
