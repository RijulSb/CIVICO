"use client";

import * as React from "react";
import {
  AlertCircle,
  CheckCircle,
  Languages,
  Send,
  Wifi,
  WifiOff,
} from "lucide-react";

import { VoiceRecorder } from "@/components/forms/VoiceRecorder";
import {
  SpatialLocationPicker,
  type ConfirmedLocation,
} from "@/components/maps/SpatialLocationPicker";
import { FileUploader } from "@/components/forms/FileUploader";
import { ImagePreview } from "@/components/forms/ImagePreview";
import { createSubmission } from "@/lib/api";
import {
  enqueueOfflineSubmission,
  subscribeQueueSync,
} from "@/lib/offlineQueue";

export type IntakeLanguage = "odia" | "hindi" | "english";

export interface CitizenSubmissionFormProps {
  onSubmitSuccess?: () => void;
  className?: string;
}

const languageOptions: Array<{ id: IntakeLanguage; label: string }> = [
  { id: "odia", label: "ଓଡ଼ିଆ (Odia)" },
  { id: "hindi", label: "हिंदी (Hindi)" },
  { id: "english", label: "English" },
];

const languageToLegacyCode: Record<IntakeLanguage, string> = {
  odia: "or",
  hindi: "hi",
  english: "en",
};

export function CitizenSubmissionForm({
  onSubmitSuccess,
  className = "",
}: CitizenSubmissionFormProps) {
  const [text, setText] = React.useState("");
  const [language, setLanguage] = React.useState<IntakeLanguage>("odia");
  const [wardId] = React.useState("ward-14");
  const [photo, setPhoto] = React.useState<File | null>(null);
  const [voice, setVoice] = React.useState<File | null>(null);
  const [confirmedLocation, setConfirmedLocation] =
    React.useState<ConfirmedLocation | null>(null);
  const [isOnline, setIsOnline] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "processing" | "synced" | "queued"
  >("idle");
  const [error, setError] = React.useState("");
  const [queuedCount, setQueuedCount] = React.useState(0);

  React.useEffect(() => {
    setIsOnline(typeof navigator !== "undefined" ? navigator.onLine : true);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    const unsubscribe = subscribeQueueSync((count) =>
      setQueuedCount((previous) => Math.max(0, previous - count)),
    );
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      unsubscribe();
    };
  }, []);

  const clearForm = () => {
    setText("");
    setPhoto(null);
    setVoice(null);
    setConfirmedLocation(null);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!text.trim() && !voice && !photo) {
      setError(
        "Add a short description, voice note, or photo before submitting.",
      );
      return;
    }
    if (text.trim().length > 1500) {
      setError("Keep the description under 1,500 characters.");
      return;
    }
    if (!confirmedLocation) {
      setError(
        "Choose or detect a location, then confirm it before submitting.",
      );
      return;
    }

    setIsSubmitting(true);
    const offlinePayload = {
      text: text.trim(),
      language: languageToLegacyCode[language],
      wardId,
      latitude: confirmedLocation.lat,
      longitude: confirmedLocation.lng,
      audioBlob: voice,
      photoBlob: photo,
    };

    try {
      if (!isOnline) {
        await enqueueOfflineSubmission(offlinePayload);
        setQueuedCount((previous) => previous + 1);
        setSubmitStatus("queued");
      } else {
        await createSubmission({
          constituency: "khordha",
          language,
          submission_type: voice ? "voice" : photo ? "photo" : "text",
          content:
            text.trim() ||
            (voice
              ? "[Voice Recording Attached]"
              : "[Photo Evidence Attached]"),
          location: {
            ward: wardId,
            block: "Khordha Block",
            latitude: confirmedLocation.lat,
            longitude: confirmedLocation.lng,
          },
        });
        setSubmitStatus("processing");
        await new Promise<void>((resolve) => window.setTimeout(resolve, 2000));
        setSubmitStatus("synced");
      }
      onSubmitSuccess?.();
      clearForm();
    } catch (submissionError) {
      console.error("Submission failed:", submissionError);
      try {
        await enqueueOfflineSubmission(offlinePayload);
        setQueuedCount((previous) => previous + 1);
        setSubmitStatus("queued");
        setError(
          "The server was unavailable. Your report is saved locally and will retry when online.",
        );
      } catch {
        setError(
          "Unable to submit or save this report. Keep the form open and try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex w-full max-w-lg flex-col gap-4 font-sans sm:gap-6 ${className}`}
    >
      <div
        className={`flex min-h-12 items-center justify-between gap-3 rounded-xl px-3 py-3 font-mono text-[11px] sm:px-4 ${isOnline ? "bg-[#1c2d1c] text-[#eeede9]" : "bg-amber-900 text-amber-100"}`}
      >
        <div className="flex min-w-0 items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4 shrink-0 text-emerald-400" />
          ) : (
            <WifiOff className="h-4 w-4 shrink-0 animate-pulse text-amber-400" />
          )}
          <span className="truncate font-semibold">
            {isOnline ? "PWA Online Mode" : "Offline Mode — Auto-Sync Active"}
          </span>
        </div>
        {queuedCount > 0 && (
          <span className="shrink-0 rounded-full bg-[#e25a45] px-2.5 py-1 font-bold text-white">
            {queuedCount} queued
          </span>
        )}
      </div>

      {submitStatus === "processing" && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-3 rounded-xl bg-[#171817] p-4 text-sm font-medium text-white"
        >
          <span
            className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white/30 border-t-[#e25a45]"
            aria-hidden="true"
          />
          <div>
            <p className="font-semibold">Processing your request…</p>
            <p className="text-xs text-white/70">
              Your report was accepted and is being marked for review.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "synced" && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-start gap-3 rounded-xl bg-emerald-100 p-4 text-sm font-medium text-emerald-900"
        >
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">Your request has been submitted.</p>
            <p className="text-xs leading-5 opacity-90">
              Your issue has been marked for review and will be considered in
              CIVICO’s priority planning.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "queued" && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-start gap-3 rounded-xl bg-amber-100 p-4 text-sm font-medium text-amber-900"
        >
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">Report saved for sync.</p>
            <p className="text-xs leading-5 opacity-90">
              It has not been submitted to the server yet and will retry when
              the connection returns.
            </p>
          </div>
        </div>
      )}

      <section
        className="flex flex-col gap-3 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-3 sm:p-4"
        aria-labelledby="language-label"
      >
        <label
          id="language-label"
          className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#171817]"
        >
          <Languages className="h-4 w-4 text-[#e25a45]" /> Select intake
          language
        </label>
        <div className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-3">
          {languageOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={language === option.id}
              onClick={() => setLanguage(option.id)}
              className={`min-h-12 rounded-lg px-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#e25a45] ${language === option.id ? "bg-[#171817] text-[#eeede9] shadow-sm" : "border border-[#171817]/10 bg-white text-[#171817] hover:bg-slate-50"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="text-[11px] leading-4 text-[#777872]">
          This choice affects typed and voice intake metadata only. The rest of
          the platform remains unchanged.
        </p>
      </section>

      <VoiceRecorder
        language={language}
        onRecordingComplete={setVoice}
        onClear={() => setVoice(null)}
        disabled={isSubmitting}
      />

      <section
        className="flex flex-col gap-2 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-3 sm:p-4"
        aria-labelledby="photo-label"
      >
        <label
          id="photo-label"
          className="font-mono text-xs font-semibold uppercase tracking-wider text-[#171817]"
        >
          Attach photo{" "}
          <span className="font-normal normal-case text-[#777872]">
            (optional)
          </span>
        </label>
        <FileUploader
          accept="image/*"
          maxSizeMB={5}
          file={photo}
          onFileSelect={setPhoto}
          label="Take or upload photo"
          hint="Photo is stored as supporting evidence"
          disabled={isSubmitting}
        />
        {photo && (
          <ImagePreview
            file={photo}
            onRemove={() => setPhoto(null)}
            className="mt-2"
          />
        )}
      </section>

      <SpatialLocationPicker
        language={language}
        onLocationConfirmed={setConfirmedLocation}
        disabled={isSubmitting}
      />

      <section
        className="flex flex-col gap-2 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-3 sm:p-4"
        aria-labelledby="details-label"
      >
        <div className="flex items-center justify-between gap-2">
          <label
            id="details-label"
            htmlFor="issue-desc"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-[#171817]"
          >
            Additional details{" "}
            <span className="font-normal normal-case text-[#777872]">
              (optional)
            </span>
          </label>
          <span className="font-mono text-[10px] text-[#777872]">
            {text.length}/1500
          </span>
        </div>
        <textarea
          id="issue-desc"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={4}
          maxLength={1500}
          placeholder="Describe the road, water, school, lighting, or sanitation issue..."
          className="w-full resize-y rounded-lg border border-[#171817]/20 bg-white p-3 text-sm text-[#171817] outline-none focus:border-[#e25a45] focus:ring-2 focus:ring-[#e25a45]/30"
        />
      </section>

      {error && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={
          isSubmitting ||
          !confirmedLocation ||
          (!text.trim() && !voice && !photo)
        }
        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#e25a45] px-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#d44833] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:h-16 sm:text-lg"
      >
        {isSubmitting ? (
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <Send className="h-5 w-5" />
        )}
        <span>
          {isSubmitting
            ? "Submitting…"
            : isOnline
              ? "Submit Priority Report"
              : "Save Report Offline"}
        </span>
      </button>
    </form>
  );
}

export default CitizenSubmissionForm;
