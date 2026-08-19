"use client";

/**
 * ThemeToggle — light/dark mode switch.
 *
 * Requires:
 *   npm install next-themes
 * And a <ThemeProvider attribute="class"> wrapping the app — NOT yet
 * present in providers.tsx as of this file's creation. Without it, this
 * component renders but clicking does nothing (useTheme has no provider
 * to talk to). See the integration note in the accompanying message.
 *
 * Also assumes tailwind.config has `darkMode: "class"` — the icon
 * transition below relies on Tailwind's `dark:` variant, which only
 * activates when next-themes toggles a `class="dark"` on <html>.
 */

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface ThemeToggleProps {
  className?: string;
}

// Detects "has this hydrated on the client yet" without setState in an
// effect. useSyncExternalStore is the React-native way to read a value
// that legitimately differs between server and client render (here: no
// subscription needed, since this flag only ever flips once and React
// re-renders after hydration on its own) — it's built for exactly this,
// unlike a useEffect+setState mount flag.
function useIsClient() {
  return React.useSyncExternalStore(
    () => () => {}, // no external events to subscribe to
    () => true, // client snapshot: always true once this code runs in the browser
    () => false, // server snapshot: never true during SSR
  );
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  // next-themes can't know the real theme during server render (it lives
  // in localStorage, client-only). Rendering a neutral placeholder until
  // the client snapshot is available avoids a hydration mismatch on the
  // icon/aria-label.
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <div
        aria-hidden="true"
        className={`h-9 w-9 rounded-full bg-transparent ${className}`}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  function toggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`relative h-9 w-9 rounded-full text-slate-500 hover:bg-slate-100 hover:text-[#1B2A4A] dark:hover:bg-slate-800 ${className}`}
          >
            <Sun
              aria-hidden="true"
              className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
            />
            <Moon
              aria-hidden="true"
              className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {isDark ? "Light mode" : "Dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ThemeToggle;
