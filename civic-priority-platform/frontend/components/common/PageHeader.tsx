"use client";

/**
 * PageHeader — consistent top-of-page block: optional back-link, small
 * eyebrow label, H1 title, one-line description, and a right-aligned
 * actions slot (e.g. a ThemeToggle or a page-specific button).
 * Generalized from the hardcoded header in page.tsx so /map, /rankings,
 * and /portfolio don't each hand-roll their own.
 *
 * No backend logic — purely layout and copy, all passed in by the parent.
 */

import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** e.g. { href: "/", label: "Back to submissions" } for a sub-page. */
  back?: { href: string; label?: string };
  /** Right-aligned slot — e.g. <ThemeToggle /> or a "Refresh" button. */
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  back,
  actions,
  className = "",
}: PageHeaderProps) {
  return (
    <header
      className={`flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between ${className}`}
    >
      <div className="flex flex-col gap-2">
        {back && (
          <Link
            href={back.href}
            className="mb-1 inline-flex w-fit items-center gap-1 text-xs font-medium text-slate-500 transition hover:text-[#1B2A4A]"
          >
            <ArrowLeft className="h-3 w-3" aria-hidden="true" />
            {back.label ?? "Back"}
          </Link>
        )}

        {eyebrow && (
          <span className="w-fit rounded-full bg-[#E0A32C]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8a6414]">
            {eyebrow}
          </span>
        )}

        <h1 className="text-2xl font-semibold text-[#1B2A4A] sm:text-3xl">
          {title}
        </h1>

        {description && (
          <p className="max-w-prose text-sm text-slate-600">{description}</p>
        )}
      </div>

      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </header>
  );
}

export default PageHeader;
