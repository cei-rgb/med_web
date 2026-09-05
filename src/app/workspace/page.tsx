"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PatientIntakeFormState } from "@/types/patientRecord";
import { defaultSampleIntake } from "@/data/mockReportData";
import { PatientIntakeForm } from "@/components/workspace/PatientIntakeForm";
import { StructuredPatientRecordView } from "@/components/workspace/StructuredPatientRecordView";
import {
  ArrowLeft,
  FileSpreadsheet,
  FileEdit,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

export default function WorkspacePage() {
  const [intakeData, setIntakeData] = useState<PatientIntakeFormState>(defaultSampleIntake);
  const [activeTab, setActiveTab] = useState<"record" | "intake">("record");
  const [hasGeneratedRecord, setHasGeneratedRecord] = useState(true);

  const handleIntakeSubmit = (data: PatientIntakeFormState) => {
    setIntakeData(data);
    setHasGeneratedRecord(true);
    setActiveTab("record");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Workspace Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors"
              aria-label="Back to landing page"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Landing Page</span>
            </Link>

            <div className="h-5 w-px bg-slate-200" aria-hidden="true" />

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-bold">
                <svg
                  className="h-4 w-4 text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </div>
              <span className="font-bold text-base text-slate-900">
                {siteConfig.name} <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full ml-1">Workspace</span>
              </span>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("record")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-semibold transition-all ${
                activeTab === "record"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={activeTab === "record"}
            >
              <FileSpreadsheet className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Structured Record</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("intake")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-semibold transition-all ${
                activeTab === "intake"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={activeTab === "intake"}
            >
              <FileEdit className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Intake Form</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="flex-1 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Context Banner */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-slate-900">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-slate-700 font-medium">Patient Workspace</span>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-slate-900 truncate">
                  {intakeData.patientNameOrId || "New Patient"}
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-200/70 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                <ShieldCheck className="h-3 w-3 text-emerald-600" aria-hidden="true" />
                Session Encrypted • Traceability Active
              </span>
            </div>
          </div>

          {/* Conditional View Rendering */}
          {activeTab === "intake" ? (
            <section aria-labelledby="intake-section-heading">
              <h1 id="intake-section-heading" className="sr-only">
                Patient Intake Form
              </h1>
              <PatientIntakeForm
                initialData={intakeData}
                onSubmit={handleIntakeSubmit}
              />
            </section>
          ) : (
            <section aria-labelledby="record-section-heading">
              <h1 id="record-section-heading" className="sr-only">
                Structured Patient Record
              </h1>
              <StructuredPatientRecordView
                intakeData={intakeData}
                onEditIntake={() => setActiveTab("intake")}
              />
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} Patient Workspace. Structured Information Record.
          </p>
          <p className="text-[11px] text-slate-400">
            Non-Diagnostic System • AI organizes health information; it does not replace clinical judgment.
          </p>
        </div>
      </footer>
    </div>
  );
}
