"use client";

import { FormEvent, useState } from "react";
import { ImagePlus, Loader2, MapPin, X } from "lucide-react";

import { useCivicMap } from "../MapProvider";

const ISSUE_CATEGORIES = [
  "Roads",
  "Water",
  "Education",
  "Health",
  "Sanitation",
  "Electricity",
  "Transport",
  "Other",
];

interface SubmissionPinFormProps {
  onSubmitted?: () => void;
}

export default function SubmissionPinForm({
  onSubmitted,
}: SubmissionPinFormProps) {
  const { pinLocation, setPinMode, setPinLocation } = useCivicMap();

  const [category, setCategory] = useState("");

  const [description, setDescription] = useState("");

  const [photo, setPhoto] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  if (!pinLocation) {
    return null;
  }

  const closeForm = () => {
    setPinLocation(null);
    setPinMode(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!category || !description.trim()) {
      setError("Please select a category and describe the issue.");

      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("category", category);
      formData.append("description", description.trim());

      formData.append("latitude", String(pinLocation.lat));

      formData.append("longitude", String(pinLocation.lng));

      if (photo) {
        formData.append("photo", photo);
      }

      const response = await fetch("/api/submissions", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission request failed");
      }

      closeForm();
      onSubmitted?.();

      setCategory("");
      setDescription("");
      setPhoto(null);
    } catch {
      setError("Unable to submit your report. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="absolute bottom-4 right-4 z-[1100] w-[min(92vw,400px)] rounded-xl border bg-background shadow-xl">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />

          <h2 className="font-semibold">Report an issue</h2>
        </div>

        <button
          type="button"
          onClick={closeForm}
          aria-label="Close submission form"
          className="rounded-md p-1.5 hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className="rounded-lg bg-muted p-3 text-xs">
          <p className="font-medium">Selected location</p>

          <p className="mt-1 text-muted-foreground">
            {pinLocation.lat.toFixed(5)}, {pinLocation.lng.toFixed(5)}
          </p>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="issue-category" className="text-sm font-medium">
            Issue category
          </label>

          <select
            id="issue-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a category</option>

            {ISSUE_CATEGORIES.map((item) => (
              <option key={item} value={item.toLowerCase()}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="issue-description" className="text-sm font-medium">
            Describe the issue
          </label>

          <textarea
            id="issue-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Tell us what is happening here..."
            rows={4}
            className="w-full resize-none rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="issue-photo" className="text-sm font-medium">
            Photo
            <span className="ml-1 font-normal text-muted-foreground">
              (optional)
            </span>
          </label>

          <label
            htmlFor="issue-photo"
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed px-3 py-3 text-sm text-muted-foreground hover:bg-muted"
          >
            <ImagePlus className="h-4 w-4" />

            <span>{photo ? photo.name : "Attach a photo"}</span>
          </label>

          <input
            id="issue-photo"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(event) => setPhoto(event.target.files?.[0] ?? null)}
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}

          {submitting ? "Submitting..." : "Submit issue"}
        </button>
      </form>
    </div>
  );
}
