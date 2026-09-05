import React from "react";
import { siteConfig } from "@/config/site";
import { UploadCloud, Cpu, CheckSquare, Shield } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Upload",
      tagline: "Upload medical reports and records.",
      description:
        "Import clinical PDFs, lab results, discharge papers, or prior visit records. Data stays organized in your private workspace.",
      icon: UploadCloud,
      subpoints: [
        "PDFs, digital clinical summaries & lab sheets",
        "Preserves original documents unchanged",
        "Secure document indexing",
      ],
      previewBadge: "Original Files Intact",
    },
    {
      number: "02",
      title: "Structure",
      tagline: "Extract relevant information into a structured patient record.",
      description:
        "Information is parsed into categorized lab panels, appointments, timelines, and medications with lab-specific reference ranges preserved.",
      icon: Cpu,
      subpoints: [
        "Normalizes test names & units",
        "Retains exact source-provided reference ranges",
        "Does not invent unprovided data",
      ],
      previewBadge: "Data Structuring Engine",
    },
    {
      number: "03",
      title: "Review",
      tagline:
        "Review sources, identify conflicts, and understand the available information more clearly.",
      description:
        "Verify extracted data against original documents, view highlighted cross-record discrepancies, and bring an organized record to your clinical appointments.",
      icon: CheckSquare,
      subpoints: [
        "1-click provenance trace back to source page",
        "Discrepancies surfaced for clinical review",
        "Exportable chronological summary",
      ],
      previewBadge: "Human Clinical Verification",
    },
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Simple, Transparent Workflow
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            How {siteConfig.name} Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A three-step architecture designed to organize fragmented documents into a traceable, reviewable patient record.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-300">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-2xs">
                      <Icon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-emerald-800">
                      &quot;{step.tagline}&quot;
                    </p>
                  </div>

                  {/* Body description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>

                  {/* Sub-bullet points */}
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                    {step.subpoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer badge */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                    <Shield className="h-3 w-3 text-slate-500" aria-hidden="true" />
                    {step.previewBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
