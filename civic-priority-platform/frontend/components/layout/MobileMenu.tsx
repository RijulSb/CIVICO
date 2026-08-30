"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Home,
  LayoutDashboard,
  MapPinned,
  FileText,
  ClipboardList,
  Lock,
  LogIn,
  LogOut,
  ShieldCheck,
  User,
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
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/authContext";

interface MobileMenuProps {
  children: React.ReactNode;
}

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ElementType;
  adminOnly?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Maps",
    href: "/maps",
    icon: MapPinned,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    adminOnly: true,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: ClipboardList,
    adminOnly: true,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: FileText,
    adminOnly: true,
  },
];

export default function MobileMenu({ children }: MobileMenuProps) {
  const pathname = usePathname();
  const { user, isAuthenticated, isAdmin, signOut } = useAuth();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="left" className="flex w-80 flex-col px-0 bg-white">
        {/* Header */}
        <SheetHeader className="border-b border-gray-200 px-6 pb-5">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black font-bold text-white">
                C
              </div>

              <div>
                <p className="font-semibold text-black">CIVICO</p>
                <p className="text-xs font-normal text-gray-500">
                  People's Priorities
                </p>
              </div>
            </SheetTitle>

            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close Menu"
                className="rounded-lg text-gray-600 hover:bg-gray-100 hover:text-black"
              >
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Navigation */}
        <nav
          className="flex-1 space-y-1 px-4 py-6"
          aria-label="Mobile Navigation"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isLocked = item.adminOnly && !isAdmin;

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <SheetClose key={item.href} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-150",
                    active
                      ? "bg-slate-100 text-slate-900 border border-slate-200/80 shadow-xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("h-5 w-5", active ? "text-slate-900" : "text-slate-400")} />
                    <span>{item.label}</span>
                  </div>

                  {isLocked && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      <Lock className="h-2.5 w-2.5" />
                      Locked
                    </span>
                  )}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <Separator />

        {/* Bottom Auth Section */}
        <div className="p-4 space-y-3">
          {isAuthenticated ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-slate-500" />
                  <span className="font-bold text-slate-900">
                    {user?.full_name || user?.username}
                  </span>
                </div>
                <span className="capitalize font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {user?.role}
                </span>
              </div>

              <SheetClose asChild>
                <button
                  onClick={signOut}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  Sign Out
                </button>
              </SheetClose>
            </div>
          ) : (
            <SheetClose asChild>
              <Link
                href="/auth"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-black py-2.5 text-xs font-bold text-white hover:bg-slate-800"
              >
                <LogIn className="h-3.5 w-3.5" />
                Sign In / Register
              </Link>
            </SheetClose>
          )}

          <p className="text-center text-[10px] leading-relaxed text-gray-400">
            Secure AI-powered constituency development platform.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
