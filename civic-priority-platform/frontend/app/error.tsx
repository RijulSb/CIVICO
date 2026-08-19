"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <section className="mx-auto flex max-w-lg flex-col items-center gap-6 px-8 text-center">
        <div className="rounded-full bg-destructive/10 p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-destructive"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M5.455 19h13.09c1.54 0 2.502-1.667
              1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464
              0L3.723 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Something went wrong</h1>

          <p className="text-muted-foreground">
            We could not load this page. Please try again.
          </p>
        </div>

        <button
          onClick={reset}
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Try Again
        </button>
      </section>
    </main>
  );
}
