"use client";

import React, { useState } from "react";
import { PatientIntakeFormState, StructuredPatientRecord } from "@/types/patientRecord";
import {
  mockStructuredLabResults,
  mockWorkspaceSchedule,
  mockWorkspaceTimeline,
  mockWorkspaceConflicts,
  mockIndexedReports,
  futurePipelineStages,
} from "@/data/mockReportData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProvenanceBadge } from "@/components/ui/ProvenanceBadge";
import {
  User,
  HeartPulse,
  History,
  AlertTriangle,
  Pill,
  FileText,
  Activity,
  Calendar,
  Clock,
  Layers,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  ArrowLeft,
  FileCheck,
  Stethoscope,
  Info,
} from "lucide-react";

interface StructuredPatientRecordViewProps {
  intakeData: PatientIntakeFormState;
  onEditIntake: () => void;
}

export const StructuredPatientRecordView: React.FC<StructuredPatientRecordViewProps> = ({
  intakeData,
  onEditIntake,
}) => {
  const [pipelineExpanded, setPipelineExpanded] = useState(false);

  // Check if conflict should be surfaced
  // If user entered penicillin allergy, surface the conflict warning card
  const hasPenicillinAllergy =
    intakeData.knownAllergies.toLowerCase().includes("penicillin");

  return (
    <div className="space-y-8">
      {/* Top Banner & Control Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white font-bold text-base">
            {intakeData.patientNameOrId.slice(0, 2).toUpperCase() || "PT"}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">
                {intakeData.patientNameOrId || "Patient Record"}
              </h2>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 border border-emerald-200">
                Active Dossier
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Structured Record • Last synced: Just now • Review Mode
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onEditIntake}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Edit Intake</span>
          </button>
        </div>
      </div>

      {/* Future-Ready Architecture: Processing Pipeline Overview */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Future Processing Pipeline Boundaries
            </span>
          </div>
          <button
            type="button"
            onClick={() => setPipelineExpanded(!pipelineExpanded)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900"
            aria-expanded={pipelineExpanded}
          >
            <span>{pipelineExpanded ? "Hide Pipeline Stages" : "View 9 Pipeline Stages"}</span>
            {pipelineExpanded ? (
              <ChevronUp className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>

        {pipelineExpanded && (
          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="text-xs text-slate-600 mb-3">
              Architectural boundary specification for upcoming ingestion & reconciliation engine:
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {futurePipelineStages.map((stage, idx) => (
                <React.Fragment key={stage}>
                  <span
                    className={`rounded-lg px-2.5 py-1 font-medium border ${
                      idx < 5
                        ? "bg-white text-slate-800 border-slate-200 shadow-2xs"
                        : "bg-slate-100 text-slate-500 border-slate-200/60"
                    }`}
                  >
                    <span className="text-slate-400 mr-1 font-mono">{idx + 1}.</span>
                    {stage}
                  </span>
                  {idx < futurePipelineStages.length - 1 && (
                    <span className="text-slate-300 font-bold" aria-hidden="true">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-slate-500 italic">
              Note: Pipeline boundaries are modular. Real AI ingestion will plug into this interface without altering the data contract.
            </p>
          </div>
        )}
      </div>

      {/* Conflict Detection Alert Card (Requirement 8) */}
      {(hasPenicillinAllergy || mockWorkspaceConflicts.length > 0) && (
        <div
          role="alert"
          className="rounded-2xl border-2 border-amber-300 bg-amber-50/80 p-5 sm:p-6 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-200 text-amber-900 shadow-2xs">
              <ShieldAlert className="h-5 w-5" aria-hidden="true" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-bold text-amber-950 flex items-center gap-1.5">
                  <span>⚠ Information conflict detected</span>
                </h3>
                <span className="rounded-md bg-amber-200/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-950 border border-amber-300">
                  Status: Review required
                </span>
              </div>

              {/* Side-by-side discrepancy review */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-amber-200 bg-white p-3.5 shadow-2xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Patient Intake Entry
                    </span>
                    <ProvenanceBadge
                      provenance={{
                        origin: "USER_PROVIDED",
                        verificationStatus: "UNVERIFIED",
                      }}
                      showSource={false}
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {intakeData.knownAllergies || "Penicillin listed as an allergy"}
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white p-3.5 shadow-2xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Report Mention
                    </span>
                    <ProvenanceBadge
                      provenance={{
                        origin: "AI_EXTRACTED",
                        verificationStatus: "UNVERIFIED",
                        sourceDocument: "Discharge_Summary_Aug2026.pdf",
                        sourcePage: 2,
                      }}
                      showSource={true}
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Amoxicillin mentioned in medication records
                  </p>
                </div>
              </div>

              <div className="mt-3.5 flex items-start gap-2 rounded-lg bg-amber-100/70 p-2.5 text-xs text-amber-950">
                <Info className="h-4 w-4 text-amber-800 shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  <strong>Clinical Notice:</strong> MedLens surfaces this conflict for human clinical reconciliation. The system does not assert clinical contraindications or determine which record is accurate.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Patient Intake Sections (1 to 6) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Section 1: Patient Information */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-slate-700" aria-hidden="true" />
              <h3 className="text-sm font-bold text-slate-900">
                1. Patient Information
              </h3>
            </div>
            <ProvenanceBadge
              provenance={{
                origin: "USER_PROVIDED",
                verificationStatus: "VERIFIED",
              }}
              showSource={false}
            />
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <dt className="text-slate-500 font-medium">Identifier / Name</dt>
              <dd className="mt-1 font-bold text-slate-900 truncate">
                {intakeData.patientNameOrId || "Not provided"}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <dt className="text-slate-500 font-medium">Age</dt>
              <dd className="mt-1 font-bold text-slate-900">
                {intakeData.age ? `${intakeData.age} yrs` : "Not provided"}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <dt className="text-slate-500 font-medium">Sex</dt>
              <dd className="mt-1 font-bold text-slate-900">
                {intakeData.sex || "Not provided"}
              </dd>
            </div>
          </dl>
        </div>

        {/* Section 2: Symptoms / Concerns */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-rose-600" aria-hidden="true" />
              <h3 className="text-sm font-bold text-slate-900">
                2. Symptoms & Concerns
              </h3>
            </div>
            <ProvenanceBadge
              provenance={{
                origin: "USER_PROVIDED",
                verificationStatus: "UNVERIFIED",
              }}
              showSource={false}
            />
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-800 leading-relaxed border border-slate-100">
            {intakeData.symptoms || "No symptoms entered during intake."}
          </div>
        </div>

        {/* Section 3: Conditions & History */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <History className="h-4 w-4 text-indigo-600" aria-hidden="true" />
              <h3 className="text-sm font-bold text-slate-900">
                3. Conditions & History
              </h3>
            </div>
            <ProvenanceBadge
              provenance={{
                origin: "USER_PROVIDED",
                verificationStatus: "UNVERIFIED",
              }}
              showSource={false}
            />
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-800 leading-relaxed border border-slate-100">
            {intakeData.existingConditions || "No existing medical conditions specified."}
          </div>
        </div>

        {/* Section 4: Allergies */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" aria-hidden="true" />
              <h3 className="text-sm font-bold text-slate-900">
                4. Allergies & Adverse Reactions
              </h3>
            </div>
            <ProvenanceBadge
              provenance={{
                origin: "USER_PROVIDED",
                verificationStatus: "UNVERIFIED",
              }}
              showSource={false}
            />
          </div>

          <div className="mt-4 rounded-xl bg-amber-50/50 p-3.5 text-xs font-medium text-amber-950 leading-relaxed border border-amber-200/80">
            {intakeData.knownAllergies || "No known drug or environmental allergies reported."}
          </div>
        </div>

        {/* Section 5: Medications */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Pill className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              <h3 className="text-sm font-bold text-slate-900">
                5. Current Medications
              </h3>
            </div>
            <ProvenanceBadge
              provenance={{
                origin: "USER_PROVIDED",
                verificationStatus: "UNVERIFIED",
              }}
              showSource={false}
            />
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-800 leading-relaxed border border-slate-100">
            {intakeData.currentMedications || "No active prescriptions or medications entered."}
          </div>
        </div>

        {/* Section 6: Additional Notes */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-600" aria-hidden="true" />
              <h3 className="text-sm font-bold text-slate-900">
                6. Additional Notes
              </h3>
            </div>
            <ProvenanceBadge
              provenance={{
                origin: "USER_PROVIDED",
                verificationStatus: "UNVERIFIED",
              }}
              showSource={false}
            />
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-800 leading-relaxed border border-slate-100">
            {intakeData.additionalNotes || "No additional patient notes provided."}
          </div>
        </div>
      </div>

      {/* Section 7: Medical Reports */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <FileCheck className="h-4 w-4 text-slate-700" aria-hidden="true" />
            <h3 className="text-sm font-bold text-slate-900">
              7. Medical Reports (3 Indexed)
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Auditable file artifacts
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {mockIndexedReports.map((doc) => (
            <div
              key={doc.id}
              className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 text-xs transition-colors hover:border-slate-300"
            >
              <div className="flex items-start justify-between gap-1">
                <span className="font-mono font-bold text-slate-900 truncate">
                  {doc.fileName}
                </span>
                <span className="text-[10px] text-slate-400 shrink-0">
                  {doc.fileSize}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span>{doc.pageCount} pages</span>
                <span>{doc.uploadDate}</span>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between">
                <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-700">
                  {doc.currentStage}
                </span>
                <ProvenanceBadge provenance={doc.provenance} showSource={false} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 8: Laboratory Results (Requirement 6) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <h3 className="text-sm font-bold text-slate-900">
              8. Laboratory Results
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Reference intervals extracted directly from source lab reports
          </span>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <caption className="sr-only">Extracted laboratory results table with provenance</caption>
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th scope="col" className="px-3.5 py-2.5">Test Name</th>
                <th scope="col" className="px-3.5 py-2.5">Extracted Value</th>
                <th scope="col" className="px-3.5 py-2.5">Status</th>
                <th scope="col" className="px-3.5 py-2.5">Source Reference Range</th>
                <th scope="col" className="px-3.5 py-2.5">Document Origin</th>
                <th scope="col" className="px-3.5 py-2.5">Provenance & Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {mockStructuredLabResults.map((lab) => (
                <tr key={lab.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-3.5 py-3 font-semibold text-slate-900">
                    {lab.testName}
                  </td>
                  <td className="px-3.5 py-3">
                    <span className="text-sm font-bold text-slate-900">
                      {lab.value}
                    </span>{" "}
                    <span className="text-slate-500 font-medium">{lab.unit}</span>
                  </td>
                  <td className="px-3.5 py-3">
                    <StatusBadge status={lab.status} size="sm" />
                  </td>
                  <td className="px-3.5 py-3 font-medium text-slate-700">
                    {lab.referenceRange}
                  </td>
                  <td className="px-3.5 py-3 font-mono text-[11px] text-slate-600">
                    {lab.sourceDocument} • p.{lab.sourcePage}
                  </td>
                  <td className="px-3.5 py-3">
                    <ProvenanceBadge provenance={lab.provenance} showSource={false} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-[11px] text-slate-500 italic">
          * Reference ranges are strictly extracted from source documents. MedLens does not invent or substitute reference ranges.
        </p>
      </div>

      {/* Section 9: Medical Schedule (Requirement 3) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-indigo-600" aria-hidden="true" />
            <h3 className="text-sm font-bold text-slate-900">
              9. Medical Schedule (Upcoming Appointments & Tests)
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Organizational schedule only • Non-prescriptive
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockWorkspaceSchedule.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-4 shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-white border border-slate-200 px-2 py-1 text-xs font-bold text-indigo-900 shadow-2xs">
                    {item.date} • {item.time}
                  </span>
                  <ProvenanceBadge provenance={item.provenance} showSource={false} />
                </div>

                <h4 className="mt-3 font-bold text-sm text-slate-900">
                  {item.title}
                </h4>

                {item.specialistOrFacility && (
                  <p className="mt-1 text-xs text-slate-600 font-medium">
                    {item.specialistOrFacility}
                  </p>
                )}

                {item.preparationInstructions && (
                  <div className="mt-2.5 rounded bg-white p-2 text-[11px] text-slate-700 border border-slate-200">
                    <span className="font-semibold text-slate-900">Prep:</span>{" "}
                    {item.preparationInstructions}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-mono">
                Source: {item.provenance.sourceDocument}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 10: Timeline (Requirement 4) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <h3 className="text-sm font-bold text-slate-900">
              10. Medical Timeline (Chronological History)
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Jan 2026 – Sep 2026
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {mockWorkspaceTimeline.map((evt) => (
            <div
              key={evt.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs transition-colors hover:border-slate-300"
            >
              <div className="flex items-center gap-3">
                <span className="rounded bg-white border border-slate-200 px-2.5 py-1 font-mono font-bold text-slate-800 min-w-[120px] text-center shadow-2xs">
                  {evt.date}
                </span>
                <div>
                  <span className="font-bold text-sm text-slate-900">
                    {evt.title}
                  </span>
                  <span className="ml-2 rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                    {evt.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 sm:pt-0">
                {evt.source && (
                  <span className="font-mono text-[11px] text-slate-500">
                    {evt.source}
                  </span>
                )}
                <ProvenanceBadge provenance={evt.provenance} showSource={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
