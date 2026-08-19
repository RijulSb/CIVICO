const faqs = [
  {
    question: "What is CIVICO?",
    answer:
      "CIVICO is a civic development planning platform that brings citizen feedback, spatial context, and AI-assisted analysis together to help identify and prioritize community development needs.",
  },
  {
    question: "How can I report a development issue?",
    answer:
      "Use the Report an Issue section to submit a concern with relevant details. Depending on the available inputs, you can provide text, photographs, voice, and location information.",
  },
  {
    question: "What happens after I submit a report?",
    answer:
      "Your submission can be processed and organized alongside other community inputs. CIVICO is designed to identify themes, recurring concerns, geographic patterns, and emerging priorities from this information.",
  },
  {
    question: "Can I explore issues in my area?",
    answer:
      "Yes. The Explore section is designed to provide a spatial view of community issues and development signals, helping users understand where concerns are concentrated.",
  },
  {
    question: "How are community priorities identified?",
    answer:
      "CIVICO combines citizen feedback with thematic, geographic, and contextual signals to help surface recurring and significant development needs.",
  },
  {
    question: "Who is CIVICO designed for?",
    answer:
      "CIVICO connects citizens, communities, and decision-makers. Citizens can contribute feedback, communities can understand emerging needs, and decision-makers can use structured intelligence to support development planning.",
  },
];

export default function FAQ() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Frequently Asked Questions
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Questions about CIVICO?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            A quick overview of how the platform works and how its different
            parts connect.
          </p>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-base font-semibold text-slate-950">
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl font-light text-slate-500 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <p className="mt-3 max-w-3xl pr-8 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
