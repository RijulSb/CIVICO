"use client";

import Link from "next/link";
import { Lock, LogIn, LogOut, ShieldCheck } from "lucide-react";
import { useAuth } from "@/lib/authContext";

const navigation = [
  { label: "Explore", href: "/explore", adminOnly: false },
  { label: "Priorities", href: "/priorities", adminOnly: true },
  { label: "Dashboard", href: "/dashboard", adminOnly: true },
  { label: "Portfolio", href: "/portfolio", adminOnly: true },
  { label: "Reports", href: "/reports", adminOnly: true },
];

export default function Navbar() {
  const { user, isAuthenticated, isAdmin, signOut } = useAuth();

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="CIVICO home"
        >
          <span className="text-xl font-bold tracking-tight text-slate-950">
            CIVICO
          </span>
        </Link>

        {/* Primary navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => {
            const isLocked = item.adminOnly && !isAdmin;
            return (
              <Link
                key={item.href}
                href={item.href}
                title={isLocked ? `${item.label} (Requires admin key!)` : item.label}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                <span>{item.label}</span>
                {isLocked && <Lock className="h-3 w-3 text-amber-600 opacity-80" />}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              {isAdmin ? (
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-xs font-bold text-violet-900">
                  <ShieldCheck className="h-3 w-3 text-violet-600" />
                  Admin
                </span>
              ) : (
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {user?.username}
                </span>
              )}

              <button
                onClick={signOut}
                title="Sign out"
                className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100"
            >
              <LogIn className="h-3.5 w-3.5" />
              Sign In
            </Link>
          )}

          {/* Primary citizen action */}
          <Link
            href="/report"
            className="rounded-lg bg-emerald-700 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-emerald-800"
          >
            Report an Issue
          </Link>
        </div>
      </nav>
    </header>
  );
}
