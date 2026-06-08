export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--gray-50)" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(to right, var(--navy), var(--red))" }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title mb-4">
          Start a <span className="text-red-600">Conversation</span>
        </h2>
        <div className="w-12 h-1 bg-red-600 mb-6 mx-auto" />
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Tell us about your business and what you're trying to improve.
          We'll follow up with a short call to understand what makes sense
          to tackle first.
        </p>

        <a href="mailto:contact@star23tech.com" className="btn-primary inline-flex">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          contact@star23tech.com
        </a>

        <div className="mt-12 grid grid-cols-3 max-w-sm mx-auto gap-4">
          {[
            ["Fast", "Response"],
            ["SMB", "Focused"],
            ["No", "Bloat"],
          ].map(([top, bottom]) => (
            <div
              key={top}
              className="text-center border border-gray-200 rounded-sm py-4 px-2 bg-white"
            >
              <p className="font-display text-lg font-bold text-navy">{top}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{bottom}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
