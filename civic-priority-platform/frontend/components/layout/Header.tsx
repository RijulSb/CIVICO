"use client";

import Link from "next/link";
import { Menu, UserCircle2 } from "lucide-react";

import Navigation from "./Navigation";

import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";


/* -------------------------------------------------------------------------- */
/*                               Header Component                             */
/* -------------------------------------------------------------------------- */
/*
  Purpose
  -------
  Global application header shared across the platform.

  Responsibilities
  ----------------
  ✓ Display CIVICO branding
  ✓ Desktop navigation
  ✓ Language selector
  ✓ Authentication entry point
  ✓ Mobile navigation trigger

  Does NOT
  --------
  ✗ Authenticate users
  ✗ Fetch backend data
  ✗ Manage sessions
  ✗ Execute business logic
  ✗ Call APIs

  Notes
  -----
  Authentication will later be connected through:
      Supabase Auth

  User information will eventually come from:
      Zustand + React Query

  Mobile navigation is delegated to:
      MobileMenu.tsx

  This component should remain lightweight and render immediately.
*/
/* -------------------------------------------------------------------------- */

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md text-black font-sans">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ---------------------------------------------------------- */}
        {/* Logo + Branding */}
        {/* ---------------------------------------------------------- */}

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

        {/* ---------------------------------------------------------- */}
        {/* Desktop Navigation */}
        {/* ---------------------------------------------------------- */}

        <Navigation />

        {/* ---------------------------------------------------------- */}
        {/* Right Controls (Linear Row) */}
        {/* ---------------------------------------------------------- */}

        <div className="flex items-center gap-3">
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
