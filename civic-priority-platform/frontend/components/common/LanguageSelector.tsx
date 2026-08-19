"use client";

import * as React from "react";

export interface LanguageOption<T extends string = string> {
  code: T;
  label: string;
  nativeLabel?: string;
}

export interface LanguageSelectorProps<T extends string = string> {
  languages: readonly LanguageOption<T>[];
  value: T;
  onChange: (code: T) => void;
  disabled?: boolean;
  className?: string;
}

export function LanguageSelector<T extends string = string>({
  languages,
  value,
  onChange,
  disabled = false,
  className = "",
}: LanguageSelectorProps<T>) {
  return (
    <div
      role="group"
      aria-label="Choose language"
      className={`inline-flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1 font-sans ${className}`}
    >
      {languages.map((lang) => {
        const active = value === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onChange(lang.code)}
            disabled={disabled}
            aria-pressed={active}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
              active
                ? "bg-black text-white shadow-sm"
                : "text-black hover:bg-gray-200/70"
            }`}
          >
            {lang.nativeLabel && (
              <span>{lang.nativeLabel}</span>
            )}
            <span className={active ? "opacity-80" : "opacity-60"}>
              ({lang.label})
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSelector;
