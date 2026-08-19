"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  LayoutDashboard,
  MapPinned,
  FileText,
  ClipboardList,
  Settings,
  LogIn,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import LanguageSelector from "@/components/common/LanguageSelector";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                               Mobile Menu                                  */
/* -------------------------------------------------------------------------- */
/*
    PURPOSE
    ------------------------------------------------------------------
    Mobile navigation drawer for the CIVICO platform.

    RESPONSIBILITIES
    ------------------------------------------------------------------
    • Responsive navigation
    • Language selector
    • Authentication entry
    • Close on navigation
    • Accessible mobile navigation

    DOES NOT
    ------------------------------------------------------------------
    • Authenticate users
    • Fetch backend data
    • Store state globally
    • Call APIs
    • Handle permissions

    Future Integrations
    ------------------------------------------------------------------
    • Supabase Authentication
    • Zustand User Store
    • Notification Center
    • User Profile
    • Role-based Navigation
*/
/* -------------------------------------------------------------------------- */

interface MobileMenuProps {
  children: React.ReactNode;
}

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Maps",
    href: "/maps",
    icon: MapPinned,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    label: "My Requests",
    href: "/submissions",
    icon: ClipboardList,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function MobileMenu({ children }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="left" className="flex w-80 flex-col px-0">
        {/* -------------------------------------------------------- */}
        {/* Header */}
        {/* -------------------------------------------------------- */}

        <SheetHeader className="border-b px-6 pb-5">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
                C
              </div>

              <div>
                <p className="font-semibold">CIVICO</p>

                <p className="text-xs font-normal text-muted-foreground">
                  People's Priorities
                </p>
              </div>
            </SheetTitle>

            <SheetClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close Menu">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* -------------------------------------------------------- */}
        {/* Navigation */}
        {/* -------------------------------------------------------- */}

        <nav
          className="flex-1 space-y-1 px-4 py-6"
          aria-label="Mobile Navigation"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <SheetClose key={item.href} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                    "hover:bg-muted",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />

                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <Separator />

        {/* -------------------------------------------------------- */}
        {/* Bottom Controls */}
        {/* -------------------------------------------------------- */}

        <div className="space-y-5 p-6">
          {/* Language */}

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Language
            </p>

            <LanguageSelector
              languages={[
                { code: "or", label: "Odia", nativeLabel: "ଓଡ଼ିଆ" },
                { code: "hi", label: "Hindi", nativeLabel: "हिंदी" },
                { code: "en", label: "English", nativeLabel: "English" },
              ]}
              value="or"
              onChange={() => {}}
            />
          </div>

          {/* Authentication */}

          <Button className="w-full justify-center gap-2" variant="default">
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>

          {/* Trust */}

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Secure AI-powered constituency development platform.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
