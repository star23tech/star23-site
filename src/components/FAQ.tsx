"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We primarily work with small and medium-sized businesses across a wide range of industries—including home services, professional services, retail, and local trades. If you have fewer than 50 employees and need better technology, we're built for you.",
  },
  {
    q: "Do you build new websites or improve existing ones?",
    a: "Both. We can build a new website from the ground up or improve an existing one—updating the design, improving performance, adding functionality, or fixing technical issues. We start by understanding what the site needs to accomplish.",
  },
  {
    q: "Can you help with SEO and Google Business Profile?",
    a: "Yes. We handle technical SEO, local search optimization, and Google Business Profile setup and management. Showing up in local search results is often one of the highest-ROI things a small business can do.",
  },
  {
    q: "Do you build custom software?",
    a: "Yes. We build custom business applications—job trackers, quoting tools, client portals, internal dashboards, and more. These are purpose-built solutions designed to fit how your business actually operates, not how a generic platform expects you to work.",
  },
  {
    q: "What types of automation do you offer?",
    a: "We build workflow automations that connect your tools, reduce repetitive manual steps, and improve response times. Common examples include lead follow-up sequences, appointment confirmations, job status notifications, and data sync between systems.",
  },
  {
    q: "What is missed-call recovery?",
    a: "Missed-call recovery is an automated system that engages customers who call your business but don't reach anyone. When a call goes unanswered, the system automatically sends a text or email to the caller—keeping them engaged and giving you a chance to respond before they contact a competitor.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the contact form below or email us directly at contact@star23tech.com. We'll schedule a short discovery call to understand your business, discuss your goals, and determine what makes sense to tackle first.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">FAQ</span>
          <h2 className="section-title mb-4">
            Common <span className="text-red-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Straightforward answers to what we're asked most often.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-sm overflow-hidden
                         hover:border-navy/30 transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left
                           focus:outline-none focus:ring-2 focus:ring-navy focus:ring-inset"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-navy pr-4 text-sm md:text-base">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === i
                      ? "bg-red-600 text-white rotate-45"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
