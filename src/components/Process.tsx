const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand before building",
    body: "We start by understanding your business goals, current systems, existing website or tools, and the specific workflows that need improvement. No assumptions. No generic audits.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build",
    subtitle: "Execute with precision",
    body: "We create the website, software, automation, or digital solution—built to spec, tested against real business requirements, and delivered on a clear timeline.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Improve",
    subtitle: "Refine based on results",
    body: "After launch, we track what's working and make adjustments based on usage, feedback, and measurable outcomes. The goal is sustained improvement—not a one-time delivery.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24" style={{ background: "var(--gray-50)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">How We Work</span>
          <h2 className="section-title mb-4">
            A Clear Process,{" "}
            <span className="text-red-600">Every Time</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Simple, transparent, and focused on outcomes. No surprises.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 opacity-20"
            style={{
              background: "linear-gradient(to right, var(--navy), var(--red), var(--navy))",
              margin: "0 12%",
            }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Step header */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10"
                    style={{
                      background: i === 1 ? "var(--red)" : "var(--navy)",
                      color: "white",
                    }}
                  >
                    {step.icon}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold
                                 flex items-center justify-center text-white"
                      style={{ background: i === 1 ? "var(--navy)" : "var(--red)" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span className="font-display text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-1">
                    Step {step.number}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">{step.subtitle}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-sm p-6 shadow-sm">
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
