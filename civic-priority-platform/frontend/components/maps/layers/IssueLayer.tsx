"use client";

import { useMemo } from "react";

import { IssueMarker } from "@/components/maps/markers/IssueMarker";
import {
  useCivicMap,
  type ThemeFilter,
  type MapTheme,
} from "@/components/maps/MapProvider";

export type IssueSource = "citizen" | "news" | "grievance";

export interface CivicIssue {
  id: string;

  latitude: number;
  longitude: number;

  title: string;
  description?: string;

  theme: MapTheme;
  source: IssueSource;

  createdAt: string;

  status?: "open" | "in_progress" | "resolved";
}

interface IssueLayerProps {
  issues?: CivicIssue[];
}

const DEFAULT_ISSUES: CivicIssue[] = [
  {
    id: "issue-001",
    latitude: 20.298,
    longitude: 85.826,
    title: "Damaged road near residential area",
    description: "Residents reported potholes and unsafe road conditions.",
    theme: "roads",
    source: "citizen",
    createdAt: "2026-08-02T09:30:00Z",
    status: "open",
  },
  {
    id: "issue-002",
    latitude: 20.291,
    longitude: 85.818,
    title: "Irregular water supply",
    description: "Households reported inconsistent water availability.",
    theme: "water",
    source: "grievance",
    createdAt: "2026-07-28T11:15:00Z",
    status: "in_progress",
  },
  {
    id: "issue-003",
    latitude: 20.306,
    longitude: 85.811,
    title: "School infrastructure concern",
    description: "Local residents highlighted infrastructure requirements.",
    theme: "education",
    source: "citizen",
    createdAt: "2026-07-22T14:20:00Z",
    status: "open",
  },
];

function isWithinTimeRange(
  createdAt: string,
  timeRange: "7d" | "30d" | "90d" | "custom",
): boolean {
  if (timeRange === "custom") {
    return true;
  }

  const days = timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : 90;
  const issueDate = new Date(createdAt).getTime();
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;

  return issueDate >= cutoff;
}

export default function IssueLayer({
  issues = DEFAULT_ISSUES,
}: IssueLayerProps) {
  const {
    filters: { themeFilter, timeRange, sourceFilter },
    layers,
  } = useCivicMap();

  const visibleIssues = useMemo(() => {
    if (!layers.showIssues) {
      return [];
    }

    return issues.filter((issue) => {
      const matchesTheme = themeFilter === "all" || issue.theme === themeFilter;
      const matchesSource =
        sourceFilter === "all" || issue.source === sourceFilter;
      const matchesTime = isWithinTimeRange(issue.createdAt, timeRange);

      return matchesTheme && matchesSource && matchesTime;
    });
  }, [issues, themeFilter, timeRange, sourceFilter, layers.showIssues]);

  return (
    <>
      {visibleIssues.map((issue) => (
        <IssueMarker key={issue.id} issue={issue} />
      ))}
    </>
  );
}
