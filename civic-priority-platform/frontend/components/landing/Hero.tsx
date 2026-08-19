import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
            People's Priorities · CIVICO
          </p>

          <h1
            className="text-4xl font-semibold tracking-tight text-slate-200
           sm:text-5xl lg:text-6xl"
          >
            Your voice.
            <br />
            Your community.
            <br />
            <span className="text-slate-500">
              Better development decisions.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            CIVICO brings citizen feedback, location-based information, and AI
            analysis together to help communities communicate their needs and
            help decision-makers understand what matters most.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/report"
              className="inline-flex items-center justify-center rounded-lg bg-slate-200 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-500"
            >
              Report an Issue
            </Link>

            <Link
              href="/explore"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Explore Your Area
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Citizen Voice
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-500">
                Collect community needs in one place.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-950">
                AI Analysis
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-500">
                Identify themes, patterns, and emerging needs.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-950">
                Actionable Priorities
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-500">
                Turn collective signals into planning insight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
