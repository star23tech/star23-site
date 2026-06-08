const problems = [
  {
    icon: "⚠",
    problem: "Outdated Website",
    detail:
      "First impressions matter. An old or broken site signals that your business may not be reliable or active.",
  },
  {
    icon: "📉",
    problem: "Weak Online Visibility",
    detail:
      "If you're not showing up in local search results, customers looking for your services are finding your competitors instead.",
  },
  {
    icon: "📞",
    problem: "Missed Customer Inquiries",
    detail:
      "Every unanswered call or unread message is a potential job lost. Most customers won't call twice.",
  },
  {
    icon: "🔄",
    problem: "Manual Processes",
    detail:
      "Time spent on repetitive administrative tasks is time not spent on the work that actually generates revenue.",
  },
  {
    icon: "📊",
    problem: "Spreadsheet-Heavy Workflows",
    detail:
      "Managing customers and jobs across disconnected spreadsheets creates errors, delays, and unnecessary frustration.",
  },
  {
    icon: "🎯",
    problem: "Poor Lead Tracking",
    detail:
      "Without a system, leads fall through the cracks. Jobs go unquoted and follow-ups never happen.",
  },
  {
    icon: "🐌",
    problem: "Slow Customer Follow-Up",
    detail:
      "Customers expect fast responses. Delayed follow-up reduces close rates and damages your reputation.",
  },
];

export default function Problems() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--gray-50)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="section-label">Common Challenges</span>
          <h2 className="section-title mb-4">
            Business Problems{" "}
            <span className="text-red-600">We Solve</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Most small businesses face the same operational pain points.
            Recognizing them is the first step toward fixing them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="bg-white border-l-4 p-6 rounded-r-sm shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderLeftColor: "var(--red)" }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-display text-lg font-bold text-navy mb-2">
                {item.problem}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
