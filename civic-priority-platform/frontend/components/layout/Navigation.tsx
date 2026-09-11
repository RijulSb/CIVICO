"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  MapPinned,
  FileText,
  ClipboardList,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Map", href: "/maps", icon: MapPinned },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Portfolio", href: "/portfolio", icon: ClipboardList },
  { label: "Reports", href: "/reports", icon: FileText },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary Navigation" className="hidden items-center gap-2 lg:flex">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            title={item.label}
            className={cn(
              "group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
              isActive
                ? "bg-[#171817] !text-white shadow-sm"
                : "bg-transparent !text-[#171817] hover:bg-gray-100 hover:!text-[#171817]",
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isActive ? "scale-110 !text-white" : "!text-[#171817] group-hover:scale-105",
              )}
            />
            <span className={cn(isActive ? "!text-white font-bold" : "!text-[#171817]")}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
