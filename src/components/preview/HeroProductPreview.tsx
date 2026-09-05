"use client";

import React, { useState } from "react";
import {
  mockPatientOverview,
  mockLabResults,
  mockMedicalSchedule,
  mockInformationConflict,
} from "@/data/mockData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  FileText,
  Activity,
  Calendar,
  AlertTriangle,
  FileCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

type ActiveTab = "all" | "labs" | "schedule" | "conflicts";

export const HeroProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");
  const [selectedResultId, setSelectedResultId] = useState<string>("lab-01");

  const selectedResult =
    mockLabResults.find((r) => r.id === selectedResultId) || mockLabResults[0];

  return (
    <div
      id="hero-preview"
      className="w-full rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-5 shadow-xl shadow-slate-200/50 transition-all"
    >
      {/* Mini App Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          </div>
          <div className="h-4 w-px bg-slate-200" aria-hidden="true" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xs text-slate-900 sm:text-sm">
                Patient Dossier #{mockPatientOverview.patientCode}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 border border-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Verified Active
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Synced {mockPatientOverview.lastUpdated}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex gap-1 border-b border-slate-100 pb-2 overflow-x-auto text-xs sm:text-sm">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
            activeTab === "all"
              ? "bg-slate-900 text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          Overview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("labs")}
          className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
            activeTab === "labs"
              ? "bg-slate-900 text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          Lab Results ({mockPatientOverview.labResultsCount})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("schedule")}
          className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
            activeTab === "schedule"
              ? "bg-slate-900 text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          Schedule ({mockPatientOverview.upcomingAppointmentsCount})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("conflicts")}
          className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-colors ${
            activeTab === "conflicts"
              ? "bg-amber-700 text-white"
              : "text-amber-800 bg-amber-50 hover:bg-amber-100"
          }`}
        >
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Conflicts (1)</span>
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div className="mt-3.5 grid grid-cols-3 gap-2 sm:gap-3">
        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 sm:p-3 transition-colors hover:border-slate-200">
          <div className="flex items-center gap-1.5 text-slate-500">
            <FileText className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-wider">Reports</span>
          </div>
          <div className="mt-1 text-lg sm:text-2xl font-bold tracking-tight text-slate-900">
            {mockPatientOverview.reportsCount}
          </div>
          <span className="text-[10px] text-slate-500">Indexed & traceable</span>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 sm:p-3 transition-colors hover:border-slate-200">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Activity className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-wider">Lab Results</span>
          </div>
          <div className="mt-1 text-lg sm:text-2xl font-bold tracking-tight text-slate-900">
            {mockPatientOverview.labResultsCount}
          </div>
          <span className="text-[10px] text-slate-500">Standardized units</span>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 sm:p-3 transition-colors hover:border-slate-200">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Calendar className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-wider">Appointments</span>
          </div>
          <div className="mt-1 text-lg sm:text-2xl font-bold tracking-tight text-slate-900">
            {mockPatientOverview.upcomingAppointmentsCount}
          </div>
          <span className="text-[10px] text-slate-500">Upcoming schedule</span>
        </div>
      </div>

      {/* Main Preview Grid */}
      <div className="mt-3.5 grid grid-cols-1 gap-3.5 lg:grid-cols-12">
        {/* Left column: Lab Results & Conflict Card (7 cols) */}
        <div className="space-y-3 lg:col-span-7">
          {/* Lab Results Table / List */}
          {(activeTab === "all" || activeTab === "labs") && (
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Activity className="h-4 w-4 text-slate-700" aria-hidden="true" />
                  <h2 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Extracted Lab Results
                  </h2>
                </div>
                <span className="text-[11px] text-slate-500">
                  Select row to inspect provenance
                </span>
              </div>

              <div className="mt-2.5 space-y-2">
                {mockLabResults.slice(0, 3).map((item) => {
                  const isSelected = item.id === selectedResultId;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedResultId(item.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedResultId(item.id);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      className={`cursor-pointer rounded-lg border p-2.5 transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-50/40 ring-1 ring-emerald-400"
                          : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs sm:text-sm text-slate-900">
                              {item.testName}
                            </span>
                            <StatusBadge status={item.status} size="sm" />
                          </div>
                          <div className="mt-1 flex items-baseline gap-1.5">
                            <span className="text-base sm:text-lg font-bold text-slate-900">
                              {item.value}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              {item.unit}
                            </span>
                            <span className="text-[11px] text-slate-400 ml-1">
                              • Ref: {item.referenceRange}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                            {item.sourceFile}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Conflict Detection Card */}
          {(activeTab === "all" || activeTab === "conflicts") && (
            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3.5 shadow-xs">
              <div className="flex items-start gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <h3 className="font-semibold text-xs sm:text-sm text-amber-950">
                      {mockInformationConflict.title}
                    </h3>
                    <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase text-amber-900 border border-amber-300">
                      Review required
                    </span>
                  </div>

                  <div className="mt-2 space-y-1.5 text-xs text-amber-900/90">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-700 min-w-[90px]">
                        Patient record:
                      </span>
                      <span className="rounded bg-white/80 px-1.5 py-0.5 font-medium text-amber-950 border border-amber-200/80">
                        {mockInformationConflict.patientRecordFact}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-700 min-w-[90px]">
                        Report mention:
                      </span>
                      <span className="rounded bg-white/80 px-1.5 py-0.5 font-medium text-amber-950 border border-amber-200/80">
                        {mockInformationConflict.reportMention}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2.5 text-[11px] text-amber-800/80 italic">
                    Note: Does not assert a definitive clinical reaction. Flagged strictly for clinical verification by medical staff.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right column: Provenance Inspector & Medical Schedule (5 cols) */}
        <div className="space-y-3 lg:col-span-5">
          {/* Provenance Box */}
          <div className="rounded-xl border border-slate-200 bg-slate-900 text-slate-100 p-3.5 shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <FileCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-slate-200">
                  Source Provenance
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                {selectedResult.extractionMethod}
              </span>
            </div>

            <div className="mt-2.5 space-y-2 text-xs">
              <div className="rounded-lg bg-slate-800/80 p-2 border border-slate-700/60">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Document:</span>
                  <span className="font-mono text-slate-200">
                    {selectedResult.sourceFile}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Location:</span>
                  <span className="font-mono text-slate-200">
                    Page {selectedResult.sourcePage} • Table 2, Row 4
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Extraction Confidence:</span>
                  <span className="font-mono text-emerald-300 font-semibold">
                    {selectedResult.confidenceScore}%
                  </span>
                </div>
              </div>

              <div className="rounded-md border border-slate-700 bg-slate-950 p-2 text-[11px]">
                <p className="text-slate-400">Source snippet:</p>
                <p className="mt-1 font-mono text-slate-200">
                  &quot;{selectedResult.testName.toUpperCase()} ... {selectedResult.value} {selectedResult.unit} (Ref: {selectedResult.referenceRange})&quot;
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span>Direct PDF link verified</span>
                <span className="text-emerald-400 font-medium flex items-center gap-0.5">
                  <CheckCircle2 className="h-3 w-3" /> Traceable
                </span>
              </div>
            </div>
          </div>

          {/* Medical Schedule */}
          {(activeTab === "all" || activeTab === "schedule") && (
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Medical Schedule
                  </h3>
                </div>
                <span className="text-[11px] font-medium text-indigo-600">
                  Next 30 Days
                </span>
              </div>

              <div className="mt-2.5 space-y-2">
                {mockMedicalSchedule.slice(0, 2).map((sched) => (
                  <div
                    key={sched.id}
                    className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50/60 p-2.5 text-xs"
                  >
                    <div className="rounded-md bg-white border border-slate-200 px-2 py-1 text-center min-w-[54px] shadow-2xs">
                      <span className="block text-[10px] font-semibold uppercase text-slate-500">
                        {sched.dateString.split(" ")[0]}
                      </span>
                      <span className="block text-sm font-bold text-slate-900">
                        {sched.dateString.split(" ")[1]}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-semibold text-slate-900 truncate">
                          {sched.title}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
                          {sched.time}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-600 truncate">
                        {sched.providerOrFacility}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
