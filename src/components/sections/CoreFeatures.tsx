import React from "react";
import {
  FileText,
  FileCheck,
  Scale,
  Compass,
  AlertTriangle,
  UserCheck,
  History,
  Calendar,
  Sparkles,
} from "lucide-react";

export const CoreFeatures: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: "Structured Patient Records",
      description:
        "Consolidates fragmented clinical reports, lab panels, and consult notes into an organized, unified patient ledger.",
    },
    {
      icon: FileCheck,
      title: "Medical Report Processing",
      description:
        "Parses multi-page clinical and laboratory PDFs to extract key parameters, test dates, and relevant medical findings.",
    },
    {
      icon: Scale,
      title: "Reference-Range Awareness",
      description:
        "Preserves the exact reference intervals printed on the originating lab report instead of applying generic population defaults.",
    },
    {
      icon: Compass,
      title: "Source & Provenance",
      description:
        "Every extracted data point directly links to its source document, page number, and original text snippet for complete traceability.",
    },
    {
      icon: AlertTriangle,
      title: "Conflict Detection",
      description:
        "Highlights cross-document discrepancies—such as conflicting allergy entries or medication mentions across separate visits.",
    },
    {
      icon: UserCheck,
      title: "Human Verification",
      description:
        "Ensures all flags and discrepancies are presented for review by the patient and qualified healthcare professionals.",
    },
    {
      icon: History,
      title: "Medical Timeline",
      description:
        "Maps historical doctor visits, hospital encounters, and diagnostic tests into an ordered chronological timeline.",
    },
    {
      icon: Calendar,
      title: "Medical Schedule",
      description:
        "Maintains upcoming consultations, required follow-ups, and laboratory tests with fasting or prep reminders.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Summary",
      description:
        "Synthesizes complex, lengthy medical dossiers into clear, structured overviews for appointment preparation without diagnosing.",
    },
  ];

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-16 sm:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            System Capabilities
          </span>
          <h2
            id="features-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Core Features
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Engineered to structure health information with rigorous provenance, source awareness, and human verification at every step.
          </p>
        </div>

        {/* 9-Grid Layout */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
