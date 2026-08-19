"use client";

/**
 * SearchBar — large, centered submission input for citizen reports.
 *
 * Pure presentational + interaction component: it holds its own draft text
 * and validation state, but has no fetch/API logic of its own. The parent
 * decides what onSubmit actually does (e.g. POST to /api/submit) — this
 * keeps the component reusable across the submission page, a future kiosk
 * view, or a modal, without duplicating network code.
 *
 * Requires shadcn/ui components not installed by default:
 *   npx shadcn add button tooltip
 * And lucide-react for icons:
 *   npm install lucide-react
 */

import * as React from "react";
import { ArrowUp, Camera, Loader2, Mic, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// --- Props -----------------------------------------------------------

export interface SearchBarProps {
  /** Called with the trimmed text when a valid submission is made. */
  onSubmit: (text: string) => void | Promise<void>;
  /** Mic button clicked — parent owns any actual recording logic. */
  onVoiceClick?: () => void;
  /** Camera button clicked — parent owns any actual capture logic. */
  onCameraClick?: () => void;
  /** Paperclip button clicked — parent owns any actual file-picker logic. */
  onAttachmentClick?: () => void;
  /** True while the parent's submit handler is in flight. */
  isLoading?: boolean;
  /** Disables the whole component (e.g. offline, rate-limited). */
  disabled?: boolean;
  placeholder?: string;
  /** Below this length, submission is blocked — too little to act on. */
  minLength?: number;
  /** Hard ceiling — matches typical backend payload limits. */
  maxLength?: number;
  className?: string;
}

const DEFAULT_MIN_LENGTH = 10;
const DEFAULT_MAX_LENGTH = 1000;

// --- Component ---------------------------------------------------------

export function SearchBar({
  onSubmit,
  onVoiceClick,
  onCameraClick,
  onAttachmentClick,
  isLoading = false,
  disabled = false,
  placeholder = "Describe a development issue in your ward…",
  minLength = DEFAULT_MIN_LENGTH,
  maxLength = DEFAULT_MAX_LENGTH,
  className = "",
}: SearchBarProps) {
  const [text, setText] = React.useState("");
  const [attemptedSubmit, setAttemptedSubmit] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Composition guard: while an IME is mid-composition (common for many
  // Indic and CJK input methods), Enter confirms a character choice, not
  // "submit". Firing submit here would cut off half-typed text.
  const isComposingRef = React.useRef(false);

  const trimmedLength = text.trim().length;
  const isTooShort = trimmedLength > 0 && trimmedLength < minLength;
  const isEmpty = trimmedLength === 0;
  const isAtLimit = text.length >= maxLength;
  const canSubmit = !isEmpty && !isTooShort && !disabled && !isLoading;

  const showLengthError = attemptedSubmit && (isEmpty || isTooShort);

  // Auto-grow the textarea with content, capped by max-h in the className
  // below — keeps a one-line question from looking like a giant empty box
  // while still expanding for longer descriptions.
  React.useEffect(() => {
    const node = textareaRef.current;
    if (!node) return;
    node.style.height = "auto";
    node.style.height = `${node.scrollHeight}px`;
  }, [text]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    if (attemptedSubmit) setAttemptedSubmit(false);
  }

  async function handleSubmit() {
    setAttemptedSubmit(true);
    if (!canSubmit) return;
    await onSubmit(text.trim());
    setText("");
    setAttemptedSubmit(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Shift+Enter -> newline (default textarea behavior, do nothing extra).
    // Enter alone -> submit, unless an IME composition is in progress.
    if (e.key === "Enter" && !e.shiftKey && !isComposingRef.current) {
      e.preventDefault();
      void handleSubmit();
    }
  }

  const counterColor = isAtLimit
    ? "text-red-600"
    : text.length > maxLength * 0.9
      ? "text-amber-600"
      : "text-slate-400";

  return (
    <TooltipProvider delayDuration={300}>
      <div className={`mx-auto w-full max-w-2xl ${className}`}>
        <div
          className={`rounded-2xl border bg-white shadow-sm transition ${
            showLengthError
              ? "border-red-400 ring-2 ring-red-100"
              : "border-slate-200 focus-within:border-[#1B2A4A] focus-within:ring-2 focus-within:ring-[#1B2A4A]/15"
          }`}
        >
          <label htmlFor="civic-search-bar" className="sr-only">
            Describe a development issue
          </label>
          <textarea
            id="civic-search-bar"
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => (isComposingRef.current = true)}
            onCompositionEnd={() => (isComposingRef.current = false)}
            disabled={disabled || isLoading}
            maxLength={maxLength}
            rows={1}
            placeholder={placeholder}
            aria-describedby="civic-search-bar-hint"
            aria-invalid={showLengthError}
            className="max-h-52 w-full resize-none bg-transparent px-5 pt-4 text-base leading-relaxed text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
          />

          {/* Action row: attach / camera / mic on the left, counter + submit on the right. */}
          <div className="flex items-center justify-between gap-2 px-3 pb-3 pt-2">
            <div className="flex items-center gap-1">
              <IconButton
                icon={Paperclip}
                label="Attach a file"
                onClick={onAttachmentClick}
                disabled={disabled || isLoading}
              />
              <IconButton
                icon={Camera}
                label="Attach a photo"
                onClick={onCameraClick}
                disabled={disabled || isLoading}
              />
              <IconButton
                icon={Mic}
                label="Record a voice note"
                onClick={onVoiceClick}
                disabled={disabled || isLoading}
              />
            </div>

            <div className="flex items-center gap-3">
              <span
                id="civic-search-bar-hint"
                className={`hidden text-xs tabular-nums sm:inline ${counterColor}`}
                aria-live="polite"
              >
                {text.length}/{maxLength}
              </span>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    size="icon"
                    onClick={() => void handleSubmit()}
                    disabled={!canSubmit}
                    aria-label={isLoading ? "Submitting" : "Submit report"}
                    className="h-9 w-9 shrink-0 rounded-full bg-[#1B2A4A] text-white hover:bg-[#243a63] disabled:opacity-40"
                  >
                    {isLoading ? (
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowUp className="h-4 w-4" aria-hidden="true" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  {isLoading ? "Sending…" : "Submit (Enter)"}
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Validation / hint line — reserves space so the layout doesn't
            jump when the message appears. */}
        <p
          role={showLengthError ? "alert" : undefined}
          className={`mt-2 min-h-[1rem] px-1 text-xs ${
            showLengthError ? "text-red-600" : "text-slate-400"
          }`}
        >
          {showLengthError
            ? isEmpty
              ? "Describe the issue before submitting."
              : `Add a bit more detail — at least ${minLength} characters.`
            : "Enter to submit, Shift+Enter for a new line."}
        </p>
      </div>
    </TooltipProvider>
  );
}

// --- Small icon-button wrapper with a tooltip and consistent a11y label --

function IconButton({
  icon: Icon,
  label,
  onClick,
  disabled,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClick}
          disabled={disabled || !onClick}
          aria-label={label}
          className="h-9 w-9 rounded-full text-slate-500 hover:bg-slate-100 hover:text-[#1B2A4A] disabled:opacity-30"
        >
          <Icon className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">{label}</TooltipContent>
    </Tooltip>
  );
}

export default SearchBar;
