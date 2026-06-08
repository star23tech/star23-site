const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Practical Solutions",
    body: "No bloated systems. No unnecessary complexity. Every recommendation is grounded in what actually helps a business operate better.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Small Business Focus",
    body: "We work specifically with small and medium-sized businesses. We understand the constraints, the decision-making dynamics, and what ROI looks like at this scale.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Technical Execution",
    body: "We build it ourselves. No handoffs to outsourced development teams. Direct technical ownership means faster delivery and tighter quality control.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Long-Term Improvement",
    body: "The goal isn't just to deliver a project—it's to improve how your business operates. We measure outcomes and refine based on what's working.",
  },
];

export default function WhyStar23() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10"
        style={{
          background: "var(--red)",
          borderRadius: "50%",
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="section-label" style={{ borderColor: "rgba(200,16,46,0.4)", background: "rgba(200,16,46,0.1)", color: "#f87171" }}>
              Why Star 23
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Technology That Works{" "}
              <span className="text-red-400">for You</span>
            </h2>
            <div className="w-12 h-1 bg-red-600 mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We focus on technology that helps businesses operate better,
              respond faster, and present themselves more professionally online.
            </p>
            <p className="text-gray-400 leading-relaxed">
              No bloated systems. No unnecessary complexity. Just practical
              solutions that fit how small businesses actually work—and improve
              over time as your needs evolve.
            </p>
          </div>

          {/* Right: Value blocks */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-sm p-6
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-red-400 mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
