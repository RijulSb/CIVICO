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
import { getReportCopy, type ReportUILanguage } from "@/lib/reportI18n";

export type IntakeLanguage = ReportUILanguage;

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
  const [language, setLanguage] = React.useState<IntakeLanguage>("english");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [video, setVideo] = React.useState<File | null>(null);
  const [wardId] = React.useState("");
  const [photo, setPhoto] = React.useState<File | null>(null);
  const [exifGeotag, setExifGeotag] = React.useState<{ lat: number; lng: number } | null>(null);

  const [voice, setVoice] = React.useState<File | null>(null);
  const [confirmedLocation, setConfirmedLocation] =
    React.useState<ConfirmedLocation | null>(null);

  // Keep the first render identical on the server and client. Browser network
  // state is populated in the effect below after hydration completes.
  const [isOnline, setIsOnline] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "processing" | "synced" | "queued"
  >("idle");
  const [error, setError] = React.useState("");
  const [queuedCount, setQueuedCount] = React.useState(0);
  const [result, setResult] = React.useState<Awaited<ReturnType<typeof createSubmission>> | null>(null);
  const ui = getReportCopy(language);
  const statusCopy = { english: { online: "PWA Online Mode", offline: "Offline Mode — Auto-Sync Active", queued: "queued" }, hindi: { online: "PWA ऑनलाइन मोड", offline: "ऑफलाइन मोड — ऑटो-सिंक सक्रिय", queued: "कतार में" }, odia: { online: "PWA ଅନଲାଇନ ମୋଡ", offline: "ଅଫଲାଇନ ମୋଡ — ଅଟୋ-ସିଙ୍କ ସକ୍ରିୟ", queued: "ଅପେକ୍ଷାରେ" } }[language];

  React.useEffect(() => {
    setIsOnline(navigator.onLine);
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
    setVideo(null);
    setConfirmedLocation(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setConsent(false);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!text.trim() && !voice && !photo && !video) {
      setError(
        ui.validationEvidence,
      );
      return;
    }
    if (text.trim().length > 1500) {
      setError(ui.validationLength);
      return;
    }
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError(ui.validationContact);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(ui.validationEmail);
      return;
    }
    if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, ""))) {
      setError(ui.validationPhone);
      return;
    }
    if (!confirmedLocation && !text.trim()) {
      setError(ui.validationLocation);
      return;
    }
    if (!consent) {
      setError(ui.validationConsent);
      return;
    }

    setIsSubmitting(true);
    const offlinePayload = {
      text: text.trim(),
      language: languageToLegacyCode[language],
      wardId,
      latitude: confirmedLocation?.lat ?? null,
      longitude: confirmedLocation?.lng ?? null,
      customLocationText: confirmedLocation?.customText ?? "",
      audioBlob: voice,
      photoBlob: photo,
      videoBlob: video,
      fullName,
      email,
      phone,
    };

    try {
      if (!isOnline) {
        await enqueueOfflineSubmission(offlinePayload);
        setQueuedCount((previous) => previous + 1);
        setSubmitStatus("queued");
      } else {
        const response = await createSubmission({
          constituency: "khordha",
          language,
          submission_type: voice ? "voice" : video ? "video" : photo ? "photo" : "text",
          content: text.trim() || (voice ? "[Voice Evidence Attached]" : video ? "[Video Evidence Attached]" : "[Photo Evidence Attached]"),
          audio_file: voice || undefined,
          photo_file: photo || undefined,
          video_file: video || undefined,
          full_name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          location: {
            ward: wardId || "unknown",
            block: "unknown",
            latitude: confirmedLocation?.lat ?? 20.2961,
            longitude: confirmedLocation?.lng ?? 85.8245,
            accuracy_m: confirmedLocation?.accuracyMeters,
            timestamp: confirmedLocation?.capturedAt,
            custom_text: confirmedLocation?.customText || text.trim(),
          },
          custom_location_text: confirmedLocation?.customText || text.trim(),
          gps_accuracy_m: confirmedLocation?.accuracyMeters,
          gps_timestamp: confirmedLocation?.capturedAt,
          consent,

        });
        setSubmitStatus("processing");
        await new Promise<void>((resolve) => window.setTimeout(resolve, 2000));
        setSubmitStatus("synced");
        setResult(response);
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
      className={`mx-auto flex w-full max-w-2xl flex-col gap-5 font-sans text-[#171817] sm:gap-7 ${className}`}
    >
      <fieldset className="rounded-xl border border-black/10 bg-white/70 p-4">
        <legend className="px-1 text-xs font-semibold uppercase tracking-[0.12em]">{getReportCopy(language).details}</legend>
        <div className="mt-3 grid gap-3">
          <input aria-label={ui.name} required value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder={getReportCopy(language).name} className="rounded-lg border border-black/15 bg-white px-3 py-3" disabled={isSubmitting} />
          <input aria-label={ui.email} required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={getReportCopy(language).email} className="rounded-lg border border-black/15 bg-white px-3 py-3" disabled={isSubmitting} />
          <input aria-label={ui.phone} required inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder={getReportCopy(language).phone} className="rounded-lg border border-black/15 bg-white px-3 py-3" disabled={isSubmitting} />
        </div>
      </fieldset>
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
            {isOnline ? statusCopy.online : statusCopy.offline}
          </span>
        </div>
        {queuedCount > 0 && (
          <span className="shrink-0 rounded-full bg-[#e25a45] px-2.5 py-1 font-bold text-white">
            {queuedCount} {statusCopy.queued}
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
            <p className="font-semibold">{ui.processing}</p>
            <p className="text-xs text-white/70">{ui.processingHint}
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
            <p className="font-semibold">{ui.accepted}</p>
            <p className="text-xs leading-5 opacity-90">{ui.acceptedHint}
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
            <p className="font-semibold">{ui.queued}</p>
            <p className="text-xs leading-5 opacity-90">{ui.queuedHint}
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
          <Languages className="h-4 w-4 text-[#e25a45]" /> {ui.language}
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
          {ui.language} · {languageOptions.find((option) => option.id === language)?.label}
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
                      {ui.photo}{" "}

          <span className="font-normal normal-case text-[#777872]">
                          ({ui.optional})

          </span>
        </label>
        <FileUploader
          accept="image/*"
          maxSizeMB={5}
          file={photo}
          onFileSelect={setPhoto}
          onExifExtracted={setExifGeotag}
          label={ui.photoLabel}
          hint={ui.photoHint}
          emptyLabel={ui.file.choose}
          removeLabel={ui.file.remove}
          tooLargeLabel={ui.file.tooLarge}
          disabled={isSubmitting}
        />
        {photo && (
          <ImagePreview
            file={photo}
            onRemove={() => {
              setPhoto(null);
              setExifGeotag(null);
            }}
            className="mt-2"
          />
        )}
      </section>

      <section className="flex flex-col gap-2 rounded-xl border border-[#171817]/20 bg-[#f4f3ef] p-3 sm:p-4" aria-labelledby="video-label">
        <label id="video-label" className="font-mono text-xs font-semibold uppercase tracking-wider text-[#171817]">{ui.video} <span className="font-normal normal-case text-[#777872]">({ui.optional})</span></label>
        <FileUploader accept="video/*" maxSizeMB={25} file={video} onFileSelect={setVideo} label={ui.videoLabel} hint={ui.videoHint} emptyLabel={ui.file.choose} removeLabel={ui.file.remove} tooLargeLabel={ui.file.tooLarge} disabled={isSubmitting} />
      </section>

      <SpatialLocationPicker
        language={language}
        exifGeotag={exifGeotag}
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
            {ui.additional}{" "}
            <span className="font-normal normal-case text-[#777872]">
              ({ui.optional})
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
          placeholder={ui.descriptionPlaceholder}
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

      <label className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/70 p-3 text-sm">
        <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} disabled={isSubmitting} className="mt-1 h-4 w-4" />
        <span>{getReportCopy(language).consent}</span>
      </label>
<button
        type="submit"
        disabled={
          isSubmitting ||
          !consent ||
          (!text.trim() && !voice && !photo &&
          !video)
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
                        ? ui.submitting
            : isOnline
              ? ui.submit
              : ui.offlineSubmit
}
        </span>
      </button>
      {result && (
        <section role="status" aria-live="polite" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
          <p className="font-semibold">{getReportCopy(language).accepted}</p>
          <p className="mt-1 text-xs">{ui.reference}: {result.submission_id}</p>
          {result.formatted_text && <p className="mt-3 leading-6">{result.formatted_text[languageToLegacyCode[language]] ?? Object.values(result.formatted_text)[0]}</p>}
          {result.transcript && <div className="mt-3"><p className="font-semibold">{ui.transcript}</p><p className="mt-1 leading-6">{result.transcript}</p></div>}
          {result.extracted && <dl className="mt-3 grid gap-1 text-xs"><div><dt className="inline font-semibold">{ui.issue}: </dt><dd className="inline">{result.extracted.issue_type}</dd></div><div><dt className="inline font-semibold">{ui.exactLocation}: </dt><dd className="inline">{result.extracted.problem_location}</dd></div><div><dt className="inline font-semibold">{ui.urgency}: </dt><dd className="inline">{result.extracted.urgency} — {result.extracted.urgency_reason}</dd></div><div><dt className="inline font-semibold">{ui.beneficiaries}: </dt><dd className="inline">{result.extracted.beneficiaries_estimate}</dd></div></dl>}
        </section>
      )}
    </form>
  );
}

export default CitizenSubmissionForm;
