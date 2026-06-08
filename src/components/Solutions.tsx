const solutions = [
  {
    number: "01",
    title: "Missed-Call Recovery",
    summary: "Don't lose customers to voicemail.",
    detail:
      "Automated follow-up systems that engage missed callers immediately via text, email, or a callback trigger—giving you a second chance to capture business before they move on.",
    tags: ["Automation", "AI", "SMS"],
  },
  {
    number: "02",
    title: "Workflow Automation",
    summary: "Stop doing the same thing twice.",
    detail:
      "Connect your business tools and automate repetitive tasks. Scheduling, notifications, data entry, and handoffs that happen automatically so your team can focus on higher-value work.",
    tags: ["Automation", "Integration", "Efficiency"],
  },
  {
    number: "03",
    title: "Lead Management",
    summary: "Track every opportunity.",
    detail:
      "A structured system for capturing, organizing, and following up on incoming inquiries. Know exactly where every lead stands and what the next step is—without relying on memory or sticky notes.",
    tags: ["CRM", "Pipeline", "Follow-up"],
  },
  {
    number: "04",
    title: "Custom Business Applications",
    summary: "Software that fits how you work.",
    detail:
      "Generic software rarely fits the way a specific business operates. We build purpose-built tools—job trackers, quoting tools, client portals, scheduling apps—designed around your actual workflow.",
    tags: ["Custom Dev", "Software", "Tools"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="section-label">Featured Solutions</span>
          <h2 className="section-title mb-4">
            Built to Solve{" "}
            <span className="text-red-600">Real Problems</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            These are the solutions we deploy most often for small businesses
            looking to operate more efficiently and respond faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.number}
              className="group relative border border-gray-200 rounded-sm p-8 overflow-hidden
                         hover:border-navy/40 hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-6 font-display text-7xl font-extrabold select-none
                               opacity-5 group-hover:opacity-10 transition-opacity text-navy"
              >
                {sol.number}
              </span>

              <div
                className="inline-block w-1 h-8 mb-5"
                style={{ background: "var(--red)" }}
              />
              <h3 className="font-display text-2xl font-bold text-navy mb-1">
                {sol.title}
              </h3>
              <p className="text-sm font-semibold text-red-600 mb-3">
                {sol.summary}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {sol.detail}
              </p>
              <div className="flex flex-wrap gap-2">
                {sol.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-sm bg-gray-100 text-gray-600 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
