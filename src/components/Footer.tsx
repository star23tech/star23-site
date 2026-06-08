export default function Footer() {
  return (
    <footer style={{ background: "var(--gray-900)" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9">
                <img
                  src="/logo.png"
                  alt="Star 23 Technologies"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-white tracking-wide">
                  STAR <span className="text-red-500">23</span>
                </span>
                <span className="block font-display text-xs text-gray-400 tracking-[0.15em] uppercase">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 italic max-w-xs text-center md:text-left">
              Practical technology solutions for small business.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2 text-sm text-gray-400">
            {[
              ["Services", "#services"],
              ["Solutions", "#solutions"],
              ["Process", "#process"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p>© {new Date().getFullYear()} Star 23 Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://star23tech.com"
              className="hover:text-gray-300 transition-colors"
            >
              star23tech.com
            </a>
            <span>·</span>
            <a
              href="mailto:contact@star23tech.com"
              className="hover:text-gray-300 transition-colors"
            >
              contact@star23tech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
