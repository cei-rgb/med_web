import { ProvenanceMeta, ProvenancedField } from "./provenance";
import { LabStatus } from "./medical";

/**
 * Raw intake form values submitted by the user.
 */
export interface PatientIntakeFormState {
  patientNameOrId: string;
  age: number | string;
  sex: "Female" | "Male" | "Other" | "Prefer not to disclose" | "";
  symptoms: string;
  existingConditions: string;
  knownAllergies: string;
  currentMedications: string;
  additionalNotes: string;
}

/**
 * Report file metadata and processing stages.
 */
export type PipelineStage =
  | "Report Upload"
  | "AI Extraction"
  | "Validation"
  | "Normalization"
  | "Reference Range Analysis"
  | "Conflict Detection"
  | "Clarification Questions"
  | "Human Review"
  | "AI Summary";

export interface ReportDocument {
  id: string;
  fileName: string;
  uploadDate: string;
  pageCount: number;
  fileSize: string;
  currentStage: PipelineStage;
  provenance: ProvenanceMeta;
}

/**
 * Structured Lab Result with strict source provenance and source-defined reference ranges.
 */
export interface StructuredLabResult {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  referenceRange: string;
  status: LabStatus;
  sourceDocument: string;
  sourcePage: number;
  confidenceScore?: number;
  provenance: ProvenanceMeta;
}

/**
 * Information conflict between user intake and extracted reports.
 */
export interface InformationConflictItem {
  id: string;
  title: string;
  intakeAssertion: string;
  reportAssertion: string;
  sourceDocument: string;
  sourcePage?: number;
  status: "Review required" | "Pending clinical verification" | "Resolved";
  recommendation: string;
  provenance: ProvenanceMeta;
}

/**
 * Schedule item for patient appointments and testing.
 */
export interface WorkspaceScheduleItem {
  id: string;
  date: string; // e.g., "Sept 12"
  time: string; // e.g., "10:30 AM"
  title: string;
  specialistOrFacility?: string;
  preparationInstructions?: string;
  provenance: ProvenanceMeta;
}

/**
 * Chronological timeline event.
 */
export interface WorkspaceTimelineEvent {
  id: string;
  date: string; // e.g. "January 2026"
  category: "Lab Test" | "Doctor Appointment" | "Medical Report" | "Follow-up";
  title: string;
  source?: string;
  provenance: ProvenanceMeta;
}

/**
 * Unified patient record combining user-provided intake with extracted data.
 */
export interface StructuredPatientRecord {
  patientInfo: {
    nameOrId: ProvenancedField<string>;
    age: ProvenancedField<number | string>;
    sex: ProvenancedField<string>;
  };
  symptoms: ProvenancedField<string>;
  existingConditions: ProvenancedField<string>;
  allergies: ProvenancedField<string>;
  medications: ProvenancedField<string>;
  additionalNotes: ProvenancedField<string>;
  reports: ReportDocument[];
  labResults: StructuredLabResult[];
  conflicts: InformationConflictItem[];
  schedule: WorkspaceScheduleItem[];
  timeline: WorkspaceTimelineEvent[];
}
