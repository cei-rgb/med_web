import React from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  FileText,
  AlertTriangle,
  Calendar,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";

export const FeatureShowcase: React.FC = () => {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Interactive Product Components
          </span>
          <h2
            id="showcase-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for Clinical Traceability
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real product UI components designed to ensure you never lose context, source evidence, or upcoming care schedules.
          </p>
        </div>

        {/* 3 Showcase Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Card A: SOURCE & PROVENANCE */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div>
              {/* Product Component Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-100 text-emerald-800">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Source & Provenance
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-[11px] font-mono text-slate-600">
                  CBC_Report.pdf
                </span>
              </div>

              {/* Realistic Extracted Data UI */}
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Biomarker
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Hemoglobin
                    </h3>
                  </div>
                  <StatusBadge status="LOW" size="sm" />
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    11.2
                  </span>
                  <span className="text-sm font-semibold text-slate-600">
                    g/dL
                  </span>
                </div>

                <div className="mt-2 text-xs font-medium text-slate-500">
                  Report Reference: <span className="font-semibold text-slate-700">12–15 g/dL</span>
                </div>
              </div>

              {/* Provenance Audit Snippet */}
              <div className="mt-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40 p-3.5 text-xs">
                <div className="flex items-center justify-between text-[11px] text-emerald-900 font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                    AI extracted
                  </span>
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-bold text-emerald-800">
                    Confidence: 97%
                  </span>
                </div>

                <div className="mt-2 rounded bg-white/90 p-2 text-[11px] text-slate-700 border border-emerald-100 font-mono">
                  Source: <strong>CBC_Report.pdf</strong> • Page 1
                </div>

                <p className="mt-2 text-[10px] text-slate-500 italic">
                  Exact bounding coordinates stored. One click highlights original scan.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Auditable data chain</span>
              <span className="text-emerald-700 font-medium">Verified Origin</span>
            </div>
          </div>

          {/* Card B: CONFLICT DETECTION */}
          <div className="flex flex-col justify-between rounded-2xl border border-amber-200 bg-white p-5 sm:p-6 shadow-sm">
            <div>
              {/* Product Component Header */}
              <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-100 text-amber-900">
                    <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-950">
                    Conflict Detection
                  </span>
                </div>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-300">
                  Review Required
                </span>
              </div>

              {/* Warning Card */}
              <div className="mt-4 rounded-xl border border-amber-200/90 bg-amber-50/70 p-4">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                  <ShieldAlert className="h-4 w-4 text-amber-700 shrink-0" aria-hidden="true" />
                  <h4>Information conflict</h4>
                </div>

                <div className="mt-3 space-y-2.5 text-xs">
                  <div className="rounded-lg bg-white p-2.5 border border-amber-200/80 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Patient record:
                    </span>
                    <p className="font-semibold text-slate-900 mt-0.5">
                      Penicillin listed as allergy
                    </p>
                  </div>

                  <div className="rounded-lg bg-white p-2.5 border border-amber-200/80 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Report:
                    </span>
                    <p className="font-semibold text-slate-900 mt-0.5">
                      Amoxicillin listed
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-amber-200/60 pt-2.5 text-xs">
                  <span className="font-medium text-amber-950">Status:</span>
                  <span className="font-bold text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded">
                    Needs human review
                  </span>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
                Flags potential discrepancy without asserting a clinical diagnostic judgment. Prompts human review before next clinical visit.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Cross-document safety</span>
              <span className="text-amber-800 font-medium">Pending Review</span>
            </div>
          </div>

          {/* Card C: MEDICAL SCHEDULE */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div>
              {/* Product Component Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-100 text-indigo-800">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Medical Schedule
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700 border border-indigo-200">
                  Upcoming
                </span>
              </div>

              {/* Schedule List UI */}
              <div className="mt-4 space-y-3">
                {/* Event 1 */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 transition-colors hover:border-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white border border-slate-200 px-2.5 py-1.5 text-center min-w-[62px] shadow-2xs">
                      <span className="block text-[10px] font-bold uppercase text-indigo-700">
                        Sept
                      </span>
                      <span className="block text-xl font-extrabold text-slate-900 leading-none mt-0.5">
                        12
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        Doctor Appointment
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                        <Clock className="h-3 w-3 text-slate-400" aria-hidden="true" />
                        <span>10:30 AM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 transition-colors hover:border-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white border border-slate-200 px-2.5 py-1.5 text-center min-w-[62px] shadow-2xs">
                      <span className="block text-[10px] font-bold uppercase text-emerald-700">
                        Sept
                      </span>
                      <span className="block text-xl font-extrabold text-slate-900 leading-none mt-0.5">
                        18
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        Blood Test
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                        <Clock className="h-3 w-3 text-slate-400" aria-hidden="true" />
                        <span>8:00 AM • Fasting required</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
                Connects lab draw dates with follow-up appointments so you know when prep steps are due and when test results will be discussed.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Coordinated calendar</span>
              <span className="text-indigo-700 font-medium">Synced Agenda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
