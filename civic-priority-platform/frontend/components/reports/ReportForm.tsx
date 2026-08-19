"use client";

/**
 * CIVICO — Citizen Submission Page (Challenge Module 1)
 *
 * Endpoints (match backend/app/routers/submissions.py exactly, nothing else
 * is assumed): POST /submissions (multipart), GET /submissions.
 *
 * Latency strategy: optimistic cache insert on submit (citizen sees the row
 * before the server responds), no forced refetch on success (patch cache
 * instead, consistent with staleTime/refetchOnMount in providers.tsx),
 * async AI classification is never awaited client-side (status starts
 * "processing").
 */

import * as React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// --- Config -----------------------------------------------------------

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी (Hindi)" },
  { code: "reg", label: "Regional language" }, // swap per constituency
] as const;

const MAX_PHOTO_MB = 5;
const MAX_VOICE_MB = 10;

// Multiple examples per language, cycled one at a time in the textarea —
// keeps the multilingual selector meaningful (real examples per language,
// not a translated label over a fixed English hint) and shows the range of
// issue types the platform actually accepts.
const PLACEHOLDER_EXAMPLES: Record<LanguageCode, string[]> = {
  en: [
    "The road near the primary school in Ward 5 has been flooded for two weeks.",
    "Ward 8 still has no health clinic — the nearest one is 12km away.",
    "Streetlights on Market Road have been out for over a month.",
  ],
  hi: [
    "वार्ड 5 के प्राथमिक विद्यालय के पास की सड़क दो हफ्तों से जलमग्न है।",
    "वार्ड 8 में अभी भी कोई स्वास्थ्य केंद्र नहीं है — निकटतम केंद्र 12 किमी दूर है।",
    "मार्केट रोड की स्ट्रीट लाइटें एक महीने से अधिक समय से बंद हैं।",
  ],
  reg: [
    "Describe the issue in your own language — this field accepts any script.",
    "Mention a landmark or ward number so the location is clear.",
    "Voice notes work too if typing is difficult.",
  ],
};

// --- Types (mirrors backend/app/models/submission.py) ------------------

type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];
type SubmissionStatus = "processing" | "classified" | "failed";

interface Submission {
  id: string;
  text: string;
  language: string;
  ward_id: string | null;
  latitude: number | null;
  longitude: number | null;
  theme: string | null;
  status: SubmissionStatus;
  created_at: string;
  has_photo: boolean;
  has_voice: boolean;
}

interface FormState {
  text: string;
  language: LanguageCode;
  wardId: string;
  photo: File | null;
  voice: File | null;
  latitude: number | null;
  longitude: number | null;
}

const initialFormState: FormState = {
  text: "",
  language: "en",
  wardId: "",
  photo: null,
  voice: null,
  latitude: null,
  longitude: null,
};

// --- API layer (move to lib/api.ts if a second page needs these) -------

async function fetchSubmissions(): Promise<Submission[]> {
  const res = await fetch(`${API_BASE}/submissions`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Failed to load submissions (${res.status})`);
  const data: { items: Submission[] } = await res.json();
  return data.items;
}

async function postSubmission(form: FormState): Promise<Submission> {
  const body = new FormData();
  body.append("text", form.text.trim());
  body.append("language", form.language);
  if (form.wardId) body.append("ward_id", form.wardId);
  if (form.latitude !== null) body.append("latitude", String(form.latitude));
  if (form.longitude !== null) body.append("longitude", String(form.longitude));
  if (form.photo) body.append("photo", form.photo);
  if (form.voice) body.append("voice", form.voice);

  const res = await fetch(`${API_BASE}/submissions`, { method: "POST", body });
  if (!res.ok)
    throw new Error(
      (await res.text().catch(() => "")) || `Submission failed (${res.status})`,
    );
  return res.json();
}

// --- Validation (precise, not exhaustive) -------------------------------

function validateForm(form: FormState): string | null {
  const text = form.text.trim();
  if (text.length === 0)
    return "Describe the issue before submitting. A few words is enough.";
  if (text.length > 2000)
    return "Description is too long. Keep it under 2000 characters.";
  if (form.photo && form.photo.size > MAX_PHOTO_MB * 1024 * 1024)
    return `Photo is larger than ${MAX_PHOTO_MB}MB.`;
  if (form.voice && form.voice.size > MAX_VOICE_MB * 1024 * 1024)
    return `Voice note is larger than ${MAX_VOICE_MB}MB.`;
  return null;
}

// --- Geolocation (optional; deny/unsupported must never block submission) -

function useOptionalGeolocation(
  onCoords: (coords: { lat: number; lng: number }) => void,
) {
  const [status, setStatus] = React.useState<
    "idle" | "locating" | "granted" | "denied" | "unsupported"
  >("idle");

  const request = React.useCallback(() => {
    if (!("geolocation" in navigator)) return setStatus("unsupported");
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Fire the update directly from this callback — it's already the
        // "external system changed" event, so no separate effect is needed
        // to re-mirror it into form state afterward.
        onCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setStatus("granted");
      },
      () => setStatus("denied"),
      { timeout: 8000, maximumAge: 60_000 },
    );
  }, [onCoords]);

  return { status, request };
}

// --- Rotating placeholder (Perplexity-style example cycling) -------------
//
// The native HTML `placeholder` attribute can't be animated, so this
// renders a decorative overlay instead and hides the real placeholder.
// Only runs while `enabled` (i.e. the field is empty) and stands still if
// the user has reduced-motion turned on.

function useRotatingPlaceholder(
  examples: string[],
  enabled: boolean,
  intervalMs = 3200,
) {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const examplesRef = React.useRef(examples);

  // Keep the ref in sync with the latest `examples` — done in an effect,
  // not render, because writing to a ref during render is unsafe (React
  // may render a component more than once before committing, and each
  // discarded render would still mutate the ref).
  React.useEffect(() => {
    examplesRef.current = examples;
  }, [examples]);

  // Reset to the first example when the example set changes (e.g. the
  // citizen switches language). Adjusted directly during render — React's
  // documented pattern for "reset state when a prop changes" — rather than
  // via an effect calling setState synchronously, which triggers an extra
  // render/commit cycle and the cascading-render warning.
  const [prevExamples, setPrevExamples] = React.useState(examples);
  if (examples !== prevExamples) {
    setPrevExamples(examples);
    setIndex(0);
    setVisible(true);
  }

  React.useEffect(() => {
    if (!enabled) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stay on the first example, no motion
    }
    const cycle = window.setInterval(() => {
      setVisible(false); // fade out
      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % examplesRef.current.length);
        setVisible(true); // fade the next example in
      }, 250);
    }, intervalMs);
    return () => window.clearInterval(cycle);
  }, [enabled, intervalMs]);

  return { text: examples[index] ?? "", visible };
}

// --- Page ----------------------------------------------------------------

export default function SubmissionPage() {
  const queryClient = useQueryClient();
  const [form, setForm] = React.useState<FormState>(initialFormState);
  const [validationError, setValidationError] = React.useState<string | null>(
    null,
  );
  const geo = useOptionalGeolocation((coords) =>
    setForm((prev) => ({
      ...prev,
      latitude: coords.lat,
      longitude: coords.lng,
    })),
  );
  const rotatingPlaceholder = useRotatingPlaceholder(
    PLACEHOLDER_EXAMPLES[form.language],
    form.text.length === 0,
  );

  const submissionsQuery = useQuery({
    queryKey: ["submissions"],
    queryFn: fetchSubmissions,
    // Poll while anything is still being classified server-side; stop the
    // moment nothing is pending, so idle screens don't keep polling forever.
    refetchInterval: (query) => {
      const data = query.state.data as Submission[] | undefined;
      const stillProcessing =
        data?.some((item) => item.status === "processing") ?? false;
      return stillProcessing ? 3000 : false;
    },
  });

  const submitMutation = useMutation({
    mutationFn: postSubmission,
    onMutate: async (pendingForm) => {
      await queryClient.cancelQueries({ queryKey: ["submissions"] });
      const previous = queryClient.getQueryData<Submission[]>(["submissions"]);
      const optimisticEntry: Submission = {
        id: `pending-${Date.now()}`,
        text: pendingForm.text.trim(),
        language: pendingForm.language,
        ward_id: pendingForm.wardId || null,
        latitude: pendingForm.latitude,
        longitude: pendingForm.longitude,
        theme: null,
        status: "processing",
        created_at: new Date().toISOString(),
        has_photo: Boolean(pendingForm.photo),
        has_voice: Boolean(pendingForm.voice),
      };
      queryClient.setQueryData<Submission[]>(["submissions"], (old) => [
        optimisticEntry,
        ...(old ?? []),
      ]);
      return { previous, optimisticId: optimisticEntry.id };
    },
    onError: (_err, _form, context) => {
      if (context?.previous)
        queryClient.setQueryData(["submissions"], context.previous);
    },
    onSuccess: (serverSubmission, _form, context) => {
      queryClient.setQueryData<Submission[]>(["submissions"], (old) =>
        (old ?? []).map((item) =>
          item.id === context?.optimisticId ? serverSubmission : item,
        ),
      );
      setForm(initialFormState);
    },
  });

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, text: e.target.value }));
    if (validationError) setValidationError(null);
  }

  function handleFileChange(
    field: "photo" | "voice",
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setForm((prev) => ({ ...prev, [field]: e.target.files?.[0] ?? null }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const error = validateForm(form);
    if (error) return setValidationError(error);
    setValidationError(null);
    submitMutation.mutate(form);
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12 sm:px-6">
      <PageHeader />

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-[#1B2A4A]/15 bg-white shadow-sm"
        aria-label="Report a development issue"
      >
        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <LanguageSelector
            value={form.language}
            onChange={(code) =>
              setForm((prev) => ({ ...prev, language: code }))
            }
          />

          <div>
            <label
              htmlFor="issue-text"
              className="mb-2 block text-sm font-medium text-[#1B2A4A]"
            >
              What needs attention?
            </label>
            <div className="relative">
              <textarea
                id="issue-text"
                value={form.text}
                onChange={handleTextChange}
                rows={4}
                placeholder=""
                className="w-full resize-none rounded-md border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition focus:border-[#1B2A4A] focus:ring-2 focus:ring-[#1B2A4A]/20"
              />
              {form.text.length === 0 && (
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-3 right-3 top-3 text-sm text-slate-400 transition-all duration-300 ${
                    rotatingPlaceholder.visible
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-1 opacity-0"
                  }`}
                >
                  {rotatingPlaceholder.text}
                </div>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Type in any of the languages above, or attach a voice note instead
              — you don&apos;t need to write anything if speaking is easier.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FileField
              id="photo-upload"
              label="Add a photo (optional)"
              accept="image/*"
              file={form.photo}
              onChange={(e) => handleFileChange("photo", e)}
              hint={`Up to ${MAX_PHOTO_MB}MB`}
            />
            <FileField
              id="voice-upload"
              label="Add a voice note (optional)"
              accept="audio/*"
              file={form.voice}
              onChange={(e) => handleFileChange("voice", e)}
              hint={`Up to ${MAX_VOICE_MB}MB`}
            />
          </div>

          <LocationField
            wardId={form.wardId}
            onWardChange={(id) => setForm((prev) => ({ ...prev, wardId: id }))}
            geoStatus={geo.status}
            hasCoords={form.latitude !== null}
            onUseLocation={geo.request}
          />

          {validationError && (
            <p
              role="alert"
              className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
            >
              {validationError}
            </p>
          )}
          {submitMutation.isError && (
            <p
              role="alert"
              className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
            >
              Something went wrong sending this — nothing was lost, your draft
              is still here. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={submitMutation.isPending}
            className="inline-flex items-center justify-center rounded-md bg-[#1B2A4A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243a63] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitMutation.isPending ? "Sending…" : "Submit"}
          </button>
        </div>
      </form>

      <RecentSubmissions
        submissions={submissionsQuery.data}
        isLoading={submissionsQuery.isLoading}
        isError={submissionsQuery.isError}
      />
    </div>
  );
}

// --- Presentational subcomponents (single-use; split out only if reused) -

function PageHeader() {
  return (
    <header className="flex flex-col gap-2">
      <span className="w-fit rounded-full bg-[#E0A32C]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8a6414]">
        Ward-level intake
      </span>
      <h1 className="text-2xl font-semibold text-[#1B2A4A] sm:text-3xl">
        Report a development issue
      </h1>
      <p className="max-w-prose text-sm text-slate-600">
        Every submission is read, grouped by theme, and weighed alongside
        population and infrastructure data before it reaches officials. Nothing
        is discarded — issues without enough support to rank highly are still
        recorded and visible.
      </p>
    </header>
  );
}

function LanguageSelector({
  value,
  onChange,
}: {
  value: LanguageCode;
  onChange: (code: LanguageCode) => void;
}) {
  return (
    <div role="group" aria-label="Choose language">
      <span className="mb-2 block text-sm font-medium text-[#1B2A4A]">
        Language
      </span>
      <div className="flex flex-wrap gap-2">
        {SUPPORTED_LANGUAGES.map((lang) => {
          const active = value === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => onChange(lang.code)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active
                  ? "border-[#1B2A4A] bg-[#1B2A4A] text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-[#1B2A4A]/50"
              }`}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FileField({
  id,
  label,
  accept,
  file,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  accept: string;
  file: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-[#1B2A4A]"
      >
        {label}
      </label>
      <input
        id={id}
        type="file"
        accept={accept}
        onChange={onChange}
        className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200"
      />
      <p className="mt-1 text-xs text-slate-500">
        {file ? `Selected: ${file.name}` : hint}
      </p>
    </div>
  );
}

function LocationField({
  wardId,
  onWardChange,
  geoStatus,
  hasCoords,
  onUseLocation,
}: {
  wardId: string;
  onWardChange: (id: string) => void;
  geoStatus: "idle" | "locating" | "granted" | "denied" | "unsupported";
  hasCoords: boolean;
  onUseLocation: () => void;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#1B2A4A]">Location</p>
          <p className="text-xs text-slate-500">
            Optional — helps place your issue on the ward map, but your
            submission is recorded either way.
          </p>
        </div>
        <button
          type="button"
          onClick={onUseLocation}
          disabled={geoStatus === "locating"}
          className="shrink-0 rounded-md border border-[#1B2A4A]/30 px-3 py-2 text-xs font-semibold text-[#1B2A4A] transition hover:bg-white disabled:opacity-60"
        >
          {geoStatus === "locating" ? "Locating…" : "Use my location"}
        </button>
      </div>

      {geoStatus === "denied" && (
        <p className="mt-2 text-xs text-amber-700">
          Location wasn&apos;t shared — pick your ward below instead.
        </p>
      )}
      {geoStatus === "unsupported" && (
        <p className="mt-2 text-xs text-amber-700">
          This device doesn&apos;t support automatic location — pick your ward
          below.
        </p>
      )}
      {hasCoords && (
        <p className="mt-2 text-xs text-emerald-700">Location attached.</p>
      )}

      <label
        htmlFor="ward-select"
        className="mb-1 mt-3 block text-xs font-medium text-slate-600"
      >
        Ward (optional if location is attached)
      </label>
      <select
        id="ward-select"
        value={wardId}
        onChange={(e) => onWardChange(e.target.value)}
        className="w-full rounded-md border border-slate-300 bg-white p-2 text-sm text-slate-900"
      >
        <option value="">Select a ward…</option>
        {/* Populate from backend/data/wards.geojson at build time, or add a
            GET /wards endpoint if the ward count grows past a hardcoded list —
            not added here since it isn't in the current router set. */}
      </select>
    </div>
  );
}

function RecentSubmissions({
  submissions,
  isLoading,
  isError,
}: {
  submissions: Submission[] | undefined;
  isLoading: boolean;
  isError: boolean;
}) {
  const hasProcessing =
    submissions?.some((item) => item.status === "processing") ?? false;

  return (
    <section aria-label="Recent submissions" className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Recent submissions
        </h2>
        {hasProcessing && (
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E0A32C]"
              aria-hidden="true"
            />
            updating
          </span>
        )}
      </div>

      {isLoading && (
        <div className="space-y-2" aria-live="polite" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-14 animate-pulse rounded-md bg-slate-100"
            />
          ))}
        </div>
      )}

      {isError && (
        <p className="text-sm text-red-700">
          Couldn&apos;t load recent submissions right now. Your own submission
          above is still safe.
        </p>
      )}

      {!isLoading && !isError && submissions?.length === 0 && (
        <p className="text-sm text-slate-500">
          No submissions yet for this constituency. Be the first to report an
          issue.
        </p>
      )}

      {!isLoading && !isError && submissions && submissions.length > 0 && (
        <ul className="flex flex-col gap-2">
          {submissions.slice(0, 8).map((item) => (
            <li
              key={item.id}
              className="flex items-start justify-between gap-4 rounded-md border border-slate-200 bg-white p-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm text-slate-800">{item.text}</p>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  #{item.id.slice(0, 8)} · {item.ward_id ?? "ward unspecified"}
                </p>
              </div>
              <StatusBadge status={item.status} theme={item.theme} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function StatusBadge({
  status,
  theme,
}: {
  status: SubmissionStatus;
  theme: string | null;
}) {
  if (status === "processing") {
    return (
      <span className="shrink-0 rounded-full bg-[#E0A32C]/15 px-2.5 py-1 text-xs font-medium text-[#8a6414]">
        Processing
      </span>
    );
  }
  if (status === "failed") {
    return (
      <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
        Retry needed
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
      {theme ?? "Classified"}
    </span>
  );
}
