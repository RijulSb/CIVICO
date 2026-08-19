"use client";

/**
 * SubmitButton — the submit control shared across submission surfaces.
 * Pure visual state driven by props — no backend logic, no knowledge of
 * what "submit" actually does.
 */

import * as React from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SubmitButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  label?: string;
  loadingLabel?: string;
  /** "submit": relies on a parent <form>'s onSubmit. "button": calls onClick directly. */
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
}

export function SubmitButton({
  isLoading = false,
  disabled = false,
  label = "Submit",
  loadingLabel = "Sending…",
  type = "submit",
  onClick,
  className = "",
}: SubmitButtonProps) {
  return (
    <Button
      type={type}
      onClick={type === "button" ? onClick : undefined}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#1B2A4A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243a63] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          {loadingLabel}
        </>
      ) : (
        <>
          <Send className="h-4 w-4" aria-hidden="true" />
          {label}
        </>
      )}
    </Button>
  );
}

export default SubmitButton;
