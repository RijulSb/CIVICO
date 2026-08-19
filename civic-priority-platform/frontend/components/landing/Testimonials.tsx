const perspectives = [
  {
    label: "For citizens",
    title: "Make your concern visible.",
    description:
      "Share what your community needs and contribute directly to the collective picture of development priorities.",
  },
  {
    label: "For communities",
    title: "Turn scattered concerns into signals.",
    description:
      "Understand recurring issues across locations and see which needs are emerging across the community.",
  },
  {
    label: "For decision-makers",
    title: "Plan with clearer evidence.",
    description:
      "Use structured community intelligence to understand needs, compare priorities, and support development planning.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Built around people
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            One platform, different perspectives.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            CIVICO connects the people who raise development needs with the
            communities where those needs emerge and the decision-makers who
            must act on them.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {perspectives.map((perspective) => (
            <article
              key={perspective.label}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {perspective.label}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-slate-950">
                {perspective.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {perspective.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
