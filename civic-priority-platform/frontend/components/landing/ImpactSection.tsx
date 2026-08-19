import Link from "next/link";

const outcomes = [
  {
    title: "Understand the community",
    description:
      "Bring fragmented citizen feedback together so recurring concerns and shared needs become easier to understand.",
  },
  {
    title: "See where needs concentrate",
    description:
      "Combine community signals with geographic context to identify areas where development concerns are concentrated.",
  },
  {
    title: "Prioritize what matters",
    description:
      "Turn recurring needs and contextual signals into structured priorities that can support development planning.",
  },
  {
    title: "Plan with better intelligence",
    description:
      "Give decision-makers a clearer view of community needs before allocating attention and resources.",
  },
];

export default function ImpactSection() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              From voices to intelligence
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              See the bigger picture behind individual requests.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              A development concern rarely exists in isolation. CIVICO is
              designed to connect citizen feedback with thematic, geographic,
              and contextual information so that collective needs can be
              understood more clearly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/priorities"
                className="inline-flex items-center justify-center rounded-lg bg-slate-200 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-500"
              >
                View Community Priorities
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Open Dashboard
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="rounded-xl border border-slate-200 p-5"
              >
                <h3 className="text-base font-semibold text-slate-950">
                  {outcome.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
