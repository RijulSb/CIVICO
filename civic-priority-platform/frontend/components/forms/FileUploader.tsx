"use client";

/**
 * FileUploader — generic single-file picker with drag-and-drop and inline
 * size validation. No upload logic here — it only hands the parent a
 * validated File via onFileSelect; what happens to it (preview, POST) is
 * the parent's job.
 */

import * as React from "react";
import { Paperclip, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { extractGeoFromImageFile } from "@/lib/utils/exifLocation";

export interface FileUploaderProps {
  /** e.g. "image/*", "audio/*" */
  accept: string;
  maxSizeMB: number;
  file: File | null;
  onFileSelect: (file: File | null) => void;
  onExifExtracted?: (coords: { lat: number; lng: number } | null) => void;
  label: string;
    hint?: string;
  emptyLabel?: string;
  removeLabel?: string;
  tooLargeLabel?: string;
  disabled?: boolean;

  className?: string;
}

export function FileUploader({
  accept,
  maxSizeMB,
  file,
  onFileSelect,
  onExifExtracted,
  label,
    hint,
  emptyLabel = "Choose a file or drag it here",
  removeLabel = "Remove file",
  tooLargeLabel = "File is too large.",
  disabled = false,

  className = "",
}: FileUploaderProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const inputId = React.useId();

  async function validateAndSet(candidate: File | null) {
    if (!candidate) {
      onFileSelect(null);
      onExifExtracted?.(null);
      setError(null);
      return;
    }
    if (candidate.size > maxSizeMB * 1024 * 1024) {
            setError(`${tooLargeLabel} (${maxSizeMB}MB)`);

      return;
    }
    setError(null);
    onFileSelect(candidate);

    if (candidate.type.startsWith("image/") && onExifExtracted) {
      const coords = await extractGeoFromImageFile(candidate);
      onExifExtracted(coords ? { lat: coords.latitude, lng: coords.longitude } : null);
    }
  }


  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    validateAndSet(e.dataTransfer.files?.[0] ?? null);
  }

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="mb-2 block text-sm font-medium text-[#1B2A4A]"
      >
        {label}
      </label>

      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`flex cursor-pointer items-center gap-3 rounded-md border border-dashed p-3 text-sm transition ${
          isDragging
            ? "border-[#1B2A4A] bg-[#1B2A4A]/5"
            : "border-slate-300 bg-slate-50"
        } ${disabled ? "cursor-not-allowed opacity-50" : "hover:border-[#1B2A4A]/50"}`}
      >
        <Paperclip
          className="h-4 w-4 shrink-0 text-slate-400"
          aria-hidden="true"
        />
        <span className="min-w-0 flex-1 truncate text-slate-600">
          {file
            ? file.name
                        : `${emptyLabel} — up to ${maxSizeMB}MB`}

        </span>
        {file && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              validateAndSet(null);
            }}
                        aria-label={removeLabel}

            className="h-6 w-6 shrink-0 text-slate-400 hover:text-red-600"
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        disabled={disabled}
        onChange={(e) => validateAndSet(e.target.files?.[0] ?? null)}
        className="sr-only"
      />

      {error ? (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      ) : (
        hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>
      )}
    </div>
  );
}

export default FileUploader;
