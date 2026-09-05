import React from "react";
import { siteConfig } from "@/config/site";
import {
  FileText,
  Activity,
  Calendar,
  Pill,
  Clock,
  UserCheck,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Check,
} from "lucide-react";

export const ProblemSection: React.FC = () => {
  const fragmentedSources = [
    {
      icon: FileText,
      name: "Medical Reports",
      example: "Hospital discharge PDFs, clinical summaries, imaging reports",
      problem: "Trapped in unstructured text and multi-page PDFs",
    },
    {
      icon: Activity,
      name: "Laboratory Results",
      example: "CBC, metabolic panels, lipid profiles across multiple labs",
      problem: "Inconsistent formats, differing units, buried reference ranges",
    },
    {
      icon: Clock,
      name: "Previous Records",
      example: "Historical visits from prior physicians or out-of-network clinics",
      problem: "Often inaccessible or lost during provider transitions",
    },
    {
      icon: AlertCircle,
      name: "Symptoms & Notes",
      example: "Recorded onset dates, severity notes, daily symptom logs",
      problem: "Siloed in personal apps or forgotten before consultations",
    },
    {
      icon: Pill,
      name: "Medications",
      example: "Current prescriptions, dosage adjustments, past reactions",
      problem: "Discrepancies between pharmacy records and discharge sheets",
    },
    {
      icon: Calendar,
      name: "Appointments",
      example: "Follow-up visits, diagnostic imaging, recurring blood draws",
      problem: "Split across hospital portals, reminder emails, and cards",
    },
    {
      icon: UserCheck,
      name: "Patient-Provided Information",
      example: "Self-reported allergies, family history, lifestyle context",
      problem: "Frequently overlooked or repeatedly re-entered",
    },
  ];

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="py-16 sm:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            The Healthcare Fragmentation Gap
          </span>
          <h2
            id="problem-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Medical information shouldn&apos;t have to be pieced together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            When you visit a doctor, prepare for surgery, or manage a chronic condition, critical data is scattered across separate portals, paper faxes, and clinical silos.
          </p>
        </div>

        {/* Visual Transformation: Fragmented Sources -> Structured Dossier */}
        <div className="mt-14 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Scattered Sources (5 cols) */}
            <div className="space-y-3 lg:col-span-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Fragmented & Siloed Sources
                </span>
                <span className="text-xs text-rose-700 font-medium">
                  Disconnected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {fragmentedSources.slice(0, 5).map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200 bg-white p-3 shadow-2xs transition-all hover:border-slate-300"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-700">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-slate-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate">
                            {item.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-1 text-center">
                <span className="text-xs text-slate-500 font-medium">
                  + symptoms, appointments, and patient-provided history
                </span>
              </div>
            </div>

            {/* Middle: Convergence Flow Icon (2 cols) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-2xs">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="mt-2 text-xs font-semibold text-slate-700">
                {siteConfig.name} Engine
              </span>
              <span className="text-[11px] text-slate-500">
                Extracts & traces
              </span>
              <div className="mt-3 text-emerald-600" aria-hidden="true">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>

            {/* Right: Unified Structured Patient Record (5 cols) */}
            <div className="rounded-xl border border-emerald-300 bg-white p-5 shadow-sm lg:col-span-5">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Unified Patient Record
                    </h3>
                    <p className="text-[11px] text-emerald-700 font-medium">
                      Traceable • Structured • Reviewable
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  Single Source
                </span>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50/70 p-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Chronological Medical Timeline
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Consolidates consultations, labs, and imaging across years into a unified sequence.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50/70 p-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Source Reference Ranges
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Lab values preserve their lab-specific reference intervals and units.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50/70 p-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Conflict & Allergy Vigilance
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Cross-document discrepancies are brought forward for clinician and patient review.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50/70 p-2.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Audit-Ready Provenance
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Every statement maps to the exact source PDF and page number with confidence metrics.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
