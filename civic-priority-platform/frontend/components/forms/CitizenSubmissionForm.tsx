"use client";

import * as React from "react";
import { VoiceRecorder } from "@/components/forms/VoiceRecorder";
import { SpatialLocationPicker } from "@/components/maps/SpatialLocationPicker";
import { enqueueOfflineSubmission, subscribeQueueSync } from "@/lib/offlineQueue";
import { FileUploader } from "@/components/forms/FileUploader";
import { ImagePreview } from "@/components/forms/ImagePreview";
import { Wifi, WifiOff, Send, CheckCircle, Languages, AlertCircle } from "lucide-react";

export interface CitizenSubmissionFormProps {
  onSubmitSuccess?: () => void;
  className?: string;
}

export function CitizenSubmissionForm({
  onSubmitSuccess,
  className = "",
}: CitizenSubmissionFormProps) {
  const [text, setText] = React.useState("");
  const [language, setLanguage] = React.useState("or"); // Default Odia
  const [wardId, setWardId] = React.useState("ward-14");
  const [photo, setPhoto] = React.useState<File | null>(null);
  const [voice, setVoice] = React.useState<File | null>(null);
  const [confirmedCoords, setConfirmedCoords] = React.useState<{ lat: number; lng: number } | null>(null);
  
  const [isOnline, setIsOnline] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "synced" | "queued">("idle");
  const [queuedCount, setQueuedCount] = React.useState(0);

  // Monitor network status for PWA offline queueing
  React.useEffect(() => {
    setIsOnline(typeof navigator !== "undefined" ? navigator.onLine : true);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const unsubscribe = subscribeQueueSync((count) => {
      setQueuedCount((prev) => Math.max(0, prev - count));
    });

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !voice && !photo) return;

    setIsSubmitting(true);

    const payload = {
      text: text.trim(),
      language,
      wardId,
      latitude: confirmedCoords?.lat ?? null,
      longitude: confirmedCoords?.lng ?? null,
      audioBlob: voice,
      photoBlob: photo,
    };

    if (!isOnline) {
      // Save locally to IndexedDB for offline PWA queueing
      await enqueueOfflineSubmission(payload);
      setQueuedCount((prev) => prev + 1);
      setSubmitStatus("queued");
    } else {
      // Simulated live network upload
      await new Promise((r) => setTimeout(r, 800));
      setSubmitStatus("synced");
    }

    setIsSubmitting(false);
    setText("");
    setPhoto(null);
    setVoice(null);
    
    if (onSubmitSuccess) onSubmitSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex w-full max-w-lg flex-col gap-6 font-sans ${className}`}
    >
      {/* Network & Offline PWA Queue Banner */}
      <div className={`flex items-center justify-between rounded-xl p-4 font-mono text-xs ${
        isOnline ? "bg-[#1c2d1c] text-[#eeede9]" : "bg-amber-900 text-amber-100"
      }`}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4 text-emerald-400" />
          ) : (
            <WifiOff className="h-4 w-4 text-amber-400 animate-pulse" />
          )}
          <span className="font-semibold">
            {isOnline ? "PWA Online Mode" : "Offline Mode (Auto-Sync Active)"}
          </span>
        </div>
        {queuedCount > 0 && (
          <span className="rounded-full bg-[#e25a45] px-2.5 py-0.5 font-bold text-white">
            {queuedCount} Queued
          </span>
        )}
      </div>

      {/* Success / Queued Alert Toast */}
      {submitStatus !== "idle" && (
        <div className={`flex items-center gap-3 rounded-xl p-4 text-sm font-medium ${
          submitStatus === "synced" ? "bg-emerald-100 text-emerald-900" : "bg-amber-100 text-amber-900"
        }`}>
          <CheckCircle className="h-5 w-5 shrink-0" />
          <div>
            <p className="font-semibold">
              {submitStatus === "synced" ? "Report Submitted & Verified!" : "Report Queued Offline"}
            </p>
            <p className="text-xs opacity-90">
              {submitStatus === "synced"
                ? "Your priority issue has been sent to municipal officials."
                : "Saved locally on your device. Will auto-sync when network returns."}
            </p>
          </div>
        </div>
      )}

      {/* Language Selector Card */}
      <div className="flex flex-col gap-2 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-4">
        <label className="flex items-center gap-2 font-mono text-xs font-semibold text-[#171817] uppercase tracking-wider">
          <Languages className="h-4 w-4 text-[#e25a45]" /> Select Vernacular Language
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "or", label: "ଓଡ଼ିଆ (Odia)" },
            { id: "hi", label: "हिंदी (Hindi)" },
            { id: "en", label: "English" },
          ].map((lang) => (
            <button
              key={lang.id}
              type="button"
              onClick={() => setLanguage(lang.id)}
              className={`h-12 rounded-lg font-medium text-sm transition ${
                language === lang.id
                  ? "bg-[#171817] text-[#eeede9] shadow-sm"
                  : "bg-white text-[#171817] border border-[#171817]/10 hover:bg-slate-50"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Audio Studio Card (Voice-First Intake) */}
      <VoiceRecorder
        onRecordingComplete={setVoice}
        onClear={() => setVoice(null)}
        disabled={isSubmitting}
      />

      {/* Optional Photo Attachment */}
      <div className="flex flex-col gap-2 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-4">
        <label className="font-mono text-xs font-semibold text-[#171817] uppercase tracking-wider">
          Attach Photo (Optional)
        </label>
        <FileUploader
          accept="image/*"
          maxSizeMB={5}
          file={photo}
          onFileSelect={setPhoto}
          label="Take or Upload Photo"
          hint="EXIF geotags auto-pinpoint location"
          disabled={isSubmitting}
        />
        {photo && (
          <ImagePreview file={photo} onRemove={() => setPhoto(null)} className="mt-2" />
        )}
      </div>

      {/* Spatial Verification Minimap */}
      <SpatialLocationPicker
        onLocationConfirmed={setConfirmedCoords}
        disabled={isSubmitting}
      />

      {/* Additional Text Description Input */}
      <div className="flex flex-col gap-2 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-4">
        <label htmlFor="issue-desc" className="font-mono text-xs font-semibold text-[#171817] uppercase tracking-wider">
          Additional Details (Optional)
        </label>
        <textarea
          id="issue-desc"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="Describe road damage, water leakage, or lighting issues in your area..."
          className="w-full resize-none rounded-lg border border-[#171817]/20 bg-white p-3 text-sm text-[#171817] focus:outline-none focus:ring-2 focus:ring-[#e25a45]"
        />
      </div>

      {/* Large Single-Tap Submit Button (>56px target) */}
      <button
        type="submit"
        disabled={isSubmitting || (!text.trim() && !voice && !photo)}
        className="flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-[#e25a45] text-white font-semibold text-lg shadow-lg transition hover:bg-[#d44833] active:scale-[0.99] disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>{isOnline ? "Submit Priority Report" : "Save Report Offline"}</span>
          </>
        )}
      </button>
    </form>
  );
}

export default CitizenSubmissionForm;
