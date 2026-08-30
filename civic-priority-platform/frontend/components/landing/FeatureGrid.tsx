"use client";

import Link from "next/link";
import { Lock, ShieldAlert } from "lucide-react";
import { useAuth } from "@/lib/authContext";

const features = [
  {
    title: "Report an Issue",
    description:
      "Submit a development concern using text, photos, voice, and location context.",
    href: "/report",
    action: "Submit a report",
    adminOnly: false,
  },
  {
    title: "Explore Your Area",
    description:
      "Explore development issues and community signals through a spatial view of your area.",
    href: "/explore",
    action: "Open explorer",
    adminOnly: false,
  },
  {
    title: "Community Priorities",
    description:
      "Discover the issues and development needs emerging as priorities across communities.",
    href: "/priorities",
    action: "View priorities",
    adminOnly: true,
  },
  {
    title: "Portfolio Optimizer",
    description:
      "Integer linear programming engine that balances budget envelopes and multi-ward equity.",
    href: "/portfolio",
    action: "Open portfolio",
    adminOnly: true,
  },
  {
    title: "Development Dashboard",
    description:
      "Access structured development intelligence, trends, and constituency-level insights.",
    href: "/dashboard",
    action: "Open dashboard",
    adminOnly: true,
  },
  {
    title: "Report Center",
    description:
      "View generated reports and access structured outputs for analysis and decision-making.",
    href: "/reports",
    action: "Open reports",
    adminOnly: true,
  },
];

export default function FeatureGrid() {
  const { isAdmin } = useAuth();

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            CIVICO Platform
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            One platform for the complete development planning cycle.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            From collecting citizen voices to understanding community priorities
            and generating development intelligence, each part of CIVICO has a
            dedicated workspace.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const isLocked = feature.adminOnly && !isAdmin;

            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="group relative flex min-h-48 flex-col rounded-2xl border border-slate-200 p-6 transition-all hover:border-slate-400 hover:bg-slate-50 hover:shadow-md"
              >
                {isLocked && (
                  <div className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                    <Lock className="h-3 w-3 text-amber-600" />
                    <span>Requires admin key!</span>
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-950 flex items-center justify-between">
                    <span>{feature.title}</span>
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>

                <span className="mt-6 text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-800 flex items-center gap-1">
                  {feature.action} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
