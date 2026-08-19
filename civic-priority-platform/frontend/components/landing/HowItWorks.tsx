const steps = [
  {
    number: "01",
    title: "Citizens speak",
    description:
      "People share development concerns through text, photos, voice, and location-aware submissions.",
  },
  {
    number: "02",
    title: "CIVICO understands",
    description:
      "AI organizes incoming feedback into themes, locations, urgency, and relevant community signals.",
  },
  {
    number: "03",
    title: "Patterns emerge",
    description:
      "Individual submissions are combined to reveal recurring needs, spatial hotspots, and collective priorities.",
  },
  {
    number: "04",
    title: "Decisions improve",
    description:
      "Structured intelligence helps decision-makers prioritize interventions and plan development more effectively.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            How CIVICO works
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            From individual voices to collective priorities.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            CIVICO connects the citizen feedback cycle with the intelligence
            needed for better constituency development planning.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number}>
              <span className="text-sm font-semibold text-slate-400">
                {step.number}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
