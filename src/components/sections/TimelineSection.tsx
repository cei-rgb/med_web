import React from "react";
import { mockTimelineEvents } from "@/data/mockData";
import { LabValueTrendChart } from "@/components/preview/LabValueTrendChart";
import {
  Calendar,
  Activity,
  FileText,
  Clock,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

export const TimelineSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Lab Test":
        return Activity;
      case "Appointment":
        return Stethoscope;
      case "Report":
        return FileText;
      case "Follow-up":
      default:
        return Calendar;
    }
  };

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="py-16 sm:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Chronological Care History
          </span>
          <h2
            id="timeline-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Medical Timeline & Historical Tracking
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Track encounters, diagnostic reports, and recorded lab values across time in a unified, chronological sequence.
          </p>
        </div>

        {/* 2-Column Layout: Timeline + Lab Trend Chart */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Chronological Patient Events (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Clock className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Patient Care Encounters (2026)
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  4 events recorded
                </span>
              </div>

              {/* Vertical timeline items */}
              <div className="mt-6 relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {mockTimelineEvents.map((evt) => {
                  const Icon = getCategoryIcon(evt.category);
                  return (
                    <div key={evt.id} className="relative group">
                      {/* Timeline Dot/Icon */}
                      <div className="absolute -left-6 sm:-left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-white shadow-2xs">
                        <Icon className="h-3 w-3 text-emerald-300" aria-hidden="true" />
                      </div>

                      {/* Event Card */}
                      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs transition-all group-hover:border-slate-300 group-hover:shadow-xs">
                        <div className="flex flex-wrap items-center justify-between gap-1.5">
                          <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-bold text-slate-800">
                            {evt.date}
                          </span>
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 border border-emerald-200">
                            {evt.category}
                          </span>
                        </div>

                        <h4 className="mt-2 text-sm font-bold text-slate-900">
                          {evt.title}
                        </h4>

                        <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                          {evt.details}
                        </p>

                        {evt.sourceName && (
                          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                            <span className="truncate font-mono">
                              Source: {evt.sourceName}
                            </span>
                            <span className="text-emerald-700 font-medium shrink-0">
                              Indexed
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Historical Lab-Value Trend Visualization (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <LabValueTrendChart />

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-xs text-slate-600">
              <h4 className="font-semibold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                Preserving Context Across Visits
              </h4>
              <p className="mt-1.5 leading-relaxed text-slate-600">
                Medical information is most useful when seen in context. By plotting documented lab figures chronologically alongside the reference intervals provided on original test sheets, patients and physicians can review historical continuity during consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
