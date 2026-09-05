import React from "react";
import { Lock, Eye, Zap, ShieldCheck } from "lucide-react";

export const CredibilitySection: React.FC = () => {
  const pillars = [
    {
      icon: Lock,
      title: "Security",
      statement: "Designed with privacy and secure handling of sensitive information in mind.",
      details: [
        "Zero API keys or credentials exposed to client-side code",
        "Architecture structured for end-to-end data isolation",
        "Document retention policies with patient-controlled access",
      ],
    },
    {
      icon: Eye,
      title: "Accessibility",
      statement: "Designed for keyboard navigation, screen readers, readable contrast, and responsive use.",
      details: [
        "Visible focus rings & semantic HTML throughout",
        "Dual-signal status badges (symbols + high-contrast text)",
        "Strict respect for user reduced-motion preferences",
      ],
    },
    {
      icon: Zap,
      title: "Performance",
      statement: "Built with performance-focused Next.js patterns and lightweight UI.",
      details: [
        "Zero bulky graphics libraries or unneeded client bundles",
        "Next.js App Router server components where possible",
        "Fast initial paint and responsive layout scaling",
      ],
    },
  ];

  return (
    <section
      id="credibility"
      aria-labelledby="credibility-heading"
      className="py-16 sm:py-20 bg-white border-b border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Technical Foundations
          </span>
          <h2
            id="credibility-heading"
            className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
          >
            Engineering Standards
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Built with deliberate focus on privacy, comprehensive accessibility, and modern performance standards.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/40 p-6 shadow-2xs"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Icon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-800">
                  &quot;{item.statement}&quot;
                </p>

                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-3 text-xs text-slate-600">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
