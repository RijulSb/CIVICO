"use client";

/**
 * ImagePreview — thumbnail + remove control for a selected image File.
 *
 * The object URL is created with useMemo (a pure computation keyed on
 * `file`), not useState+useEffect — that sidesteps the same "setState
 * synchronously within an effect" issue fixed in ThemeToggle.tsx. Cleanup
 * still needs an effect (revoking the URL is a real side effect on an
 * external system, the browser's Blob URL registry), but that effect only
 * runs a cleanup function — it never calls setState itself.
 */

import * as React from "react";
import { ImageOff, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ImagePreviewProps {
  file: File | null;
  onRemove: () => void;
  disabled?: boolean;
  className?: string;
}

export function ImagePreview({
  file,
  onRemove,
  disabled = false,
  className = "",
}: ImagePreviewProps) {
  const [failed, setFailed] = React.useState(false);

  const previewUrl = React.useMemo(
    () => (file ? URL.createObjectURL(file) : null),
    [file],
  );

  // Cleanup-only effect — revokes the previous URL when `file` changes or
  // the component unmounts. No setState call anywhere in this effect.
  React.useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  if (!file) return null;

  return (
    <div
      className={`relative inline-flex items-center gap-3 rounded-md border border-slate-200 bg-white p-2 ${className}`}
    >
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded bg-slate-100">
        {previewUrl && !failed ? (
          // eslint-disable-next-line @next/next/no-img-element -- object URLs aren't valid next/image input
          <img
            src={previewUrl}
            alt={`Preview of ${file.name}`}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-300">
            <ImageOff className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-slate-700">
          {file.name}
        </p>
        <p className="text-[11px] text-slate-400">
          {(file.size / (1024 * 1024)).toFixed(1)}MB
        </p>
      </div>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onRemove}
        disabled={disabled}
        aria-label="Remove photo"
        className="h-6 w-6 shrink-0 text-slate-400 hover:text-red-600"
      >
        <X className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}

export default ImagePreview;
