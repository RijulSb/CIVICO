"use client";

import Link from "next/link";
import { LogIn, LogOut, Menu, ShieldCheck, UserCheck } from "lucide-react";

import Navigation from "./Navigation";

import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { useAuth } from "@/lib/authContext";

export default function Header() {
  const { user, isAuthenticated, isAdmin, isCivilian, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md text-black font-sans">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Branding */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-lg font-bold text-white shadow-sm">
            C
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="text-base font-extrabold tracking-tight text-[#0a0a0a]">
              CIVICO
            </span>

            <span className="font-mono text-xs text-gray-500 font-medium">
              People's Priorities
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navigation />

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="hidden sm:flex items-center gap-2">
              {isAdmin ? (
                <div className="flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-bold text-violet-900">
                  <ShieldCheck className="h-3.5 w-3.5 text-violet-600" />
                  <span>Admin · Khordha Command</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Civilian · {user?.username}</span>
                </div>
              )}

              <button
                onClick={signOut}
                title="Sign out of CIVICO"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:bg-red-50 hover:border-red-200 hover:text-red-700"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-900 bg-black px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span>Sign In</span>
            </Link>
          )}

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <MobileMenu>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-black hover:bg-gray-100"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </MobileMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
