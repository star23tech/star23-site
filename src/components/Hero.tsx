export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--navy-dark)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal accent bar */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, var(--red) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label mb-6">
              SMB Technology Partner
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none mb-6">
              Technology
              <br />
              Solutions for
              <br />
              <span className="text-red-500">Small Business</span>
            </h1>

            <div className="w-12 h-1 bg-red-600 mb-6" />

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg mb-10">
              Star 23 Technologies helps small and medium-sized businesses build
              better websites, improve online visibility, automate workflows, and
              use practical software to operate more efficiently.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary"
              >
                Start a Conversation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="btn-outline-white"
              >
                View Services
              </button>
            </div>

            {/* Credibility row */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                ["Websites", "Custom-built"],
                ["Automation", "AI-powered"],
                ["SEO", "Local-focused"],
              ].map(([title, sub]) => (
                <div key={title}>
                  <p className="font-display text-2xl font-bold text-white">
                    {title}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide uppercase">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                style={{ background: "var(--red)", transform: "scale(0.8)" }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img
                  src="/logo.png"
                  alt="Star 23 Technologies"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
