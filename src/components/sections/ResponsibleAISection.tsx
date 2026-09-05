import React from "react";
import { siteConfig } from "@/config/site";
import {
  ShieldAlert,
  FileCheck2,
  UserCheck2,
  Scale,
  SearchCode,
  AlertCircle,
  Stethoscope,
} from "lucide-react";

export const ResponsibleAISection: React.FC = () => {
  const trustPillars = [
    {
      icon: Stethoscope,
      title: "AI-Assisted, Not a Doctor Replacement",
      description:
        "The system organizes, indexes, and surfaces medical records. It never provides diagnoses, writes prescriptions, or dictates clinical treatment plans.",
    },
    {
      icon: FileCheck2,
      title: "Source-Aware Extraction",
      description:
        "Every extracted finding, lab measurement, and date links directly to its source document and page number with verifiable confidence metrics.",
    },
    {
      icon: UserCheck2,
      title: "Human Verification Prioritized",
      description:
        "All structured summaries and surfaced flags are designed for human review, empowering patients and clinicians to verify facts collaboratively.",
    },
    {
      icon: Scale,
      title: "Report-Specific Reference Ranges",
      description:
        "Normal and abnormal ranges are extracted directly from the originating laboratory sheet, respecting differing assay methodologies.",
    },
    {
      icon: SearchCode,
      title: "Does Not Invent Missing Information",
      description:
        "Unstated parameters or incomplete records are never guessed or filled in synthetically. Missing data and extraction uncertainty are clearly identified.",
    },
    {
      icon: AlertCircle,
      title: "Uncertainty & Conflict Surfacing",
      description:
        "When two records present differing facts—such as conflicting allergy notes or dosage records—the discrepancy is immediately brought forward.",
    },
  ];

  return (
    <section
      id="responsible-ai"
      aria-labelledby="responsible-ai-heading"
      className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Trust & Clinical Integrity
          </span>
          <h2
            id="responsible-ai-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Responsible AI Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Healthcare requires absolute transparency. Here is how our architecture maintains patient safety, clinical boundaries, and data truth.
          </p>
        </div>

        {/* Central Product Principle Callout */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-emerald-300 bg-white p-6 sm:p-8 shadow-xs text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Foundational Principle
          </span>
          <blockquote className="mt-2 text-lg sm:text-xl font-bold text-slate-900">
            &ldquo;{siteConfig.principle}&rdquo;
          </blockquote>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            {siteConfig.name} is engineered strictly as an information organization system. We treat health documents with clinical reverence, leaving diagnostic judgment where it belongs: with qualified medical professionals.
          </p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Icon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
