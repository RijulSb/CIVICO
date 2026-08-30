"use client";

import * as React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  KeyRound,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  User,
} from "lucide-react";
import { useAuth } from "@/lib/authContext";

interface LockedOverlayProps {
  pageTitle: string;
  pageDescription?: string;
  children?: React.ReactNode;
}

export default function LockedOverlay({
  pageTitle,
  pageDescription,
  children,
}: LockedOverlayProps) {
  const { user, isAdmin, isAuthenticated, isCivilian, unlockWithAdminKey } = useAuth();
  const [adminKey, setAdminKey] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminKey.trim()) {
      setError("Please enter the official Admin Key.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await unlockWithAdminKey(adminKey.trim());
      setSuccess(true);
    } catch (err: any) {
      const msg = err instanceof Error ? err.message : "Invalid admin key.";
      if (msg.includes("403") || msg.includes("whitelist")) {
        setError("This account is not on the authorized official email whitelist. Only designated administrators can unlock this console.");
      } else {
        setError("Invalid Admin Key. Please check the secret and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // If user is already verified admin, render children unobstructed
  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-emerald-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        {/* Header Badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-400">
            <ShieldAlert className="h-4 w-4" /> Requires admin key!
          </div>

          <div className="font-mono text-xs text-slate-500 uppercase">
            PARAKRAM 1.0 SECURE GATE
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {pageTitle}
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {pageDescription ||
            "Constituency prioritization, portfolio budgeting, and decision intelligence consoles are restricted to authorized planning officials."}
        </p>

        {/* User Identity Status */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300">
                <User className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Active Session</div>
                <div className="text-sm font-bold text-white">
                  {isAuthenticated ? user?.full_name || user?.username : "Guest / Civilian"}
                </div>
              </div>
            </div>

            <span className="rounded-full bg-emerald-950/80 border border-emerald-700/50 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 capitalize">
              {user?.role || "Civilian"}
            </span>
          </div>

          {isCivilian && (
            <p className="mt-3 text-xs text-slate-400 border-t border-slate-800/80 pt-2.5">
              Civilian accounts have full access to <Link href="/report" className="text-emerald-400 underline font-semibold">Report an Issue</Link> and <Link href="/explore" className="text-emerald-400 underline font-semibold">Explore Your Area</Link>. Official consoles require verified admin credentials.
            </p>
          )}
        </div>

        {/* Inline Admin Key Unlock Form */}
        <form onSubmit={handleUnlock} className="mt-6 space-y-4">
          <div>
            <label htmlFor="adminKeyInput" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Enter Admin Key to Unlock
            </label>
            <div className="relative mt-2">
              <KeyRound className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
              <input
                id="adminKeyInput"
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter secret official admin key"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
              <AlertTriangle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Access granted! Loading executive console...</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !adminKey.trim()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <ShieldCheck className="h-4 w-4" />
            )}
            Unlock Planning Console
          </button>
        </form>

        {/* Alternate Actions */}
        <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <Link
            href="/auth"
            className="font-semibold text-emerald-400 hover:text-emerald-300 hover:underline"
          >
            {isAuthenticated ? "Sign in with another official account →" : "Sign in to CIVICO →"}
          </Link>

          <Link
            href="/"
            className="text-slate-400 hover:text-white"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
