import {
  PatientIntakeFormState,
  StructuredLabResult,
  WorkspaceScheduleItem,
  WorkspaceTimelineEvent,
  InformationConflictItem,
  ReportDocument,
  PipelineStage,
} from "@/types/patientRecord";

/**
 * Default sample patient intake for instant demo testing.
 */
export const defaultSampleIntake: PatientIntakeFormState = {
  patientNameOrId: "Eleanor Vance (ID: PT-9024)",
  age: 46,
  sex: "Female",
  symptoms:
    "Persistent fatigue over past 3 weeks, mild shortness of breath on exertion, occasional dizziness upon standing.",
  existingConditions:
    "Mild essential hypertension (diagnosed 2021), seasonal allergic rhinitis.",
  knownAllergies:
    "Penicillin (severe hives and facial swelling reported in 2019).",
  currentMedications:
    "Lisinopril 10mg once daily oral; Cetirizine 10mg as needed for seasonal allergies.",
  additionalNotes:
    "Patient recently relocated from previous clinic. Has brought copies of prior CBC and metabolic panels for clinical reconciliation.",
};

/**
 * Empty initial intake state.
 */
export const emptyIntakeState: PatientIntakeFormState = {
  patientNameOrId: "",
  age: "",
  sex: "",
  symptoms: "",
  existingConditions: "",
  knownAllergies: "",
  currentMedications: "",
  additionalNotes: "",
};

/**
 * Extracted laboratory results adhering strictly to prompt specifications.
 * Reference ranges originate solely from the source report.
 */
export const mockStructuredLabResults: StructuredLabResult[] = [
  {
    id: "lab-hgb",
    testName: "Hemoglobin",
    value: 11.2,
    unit: "g/dL",
    referenceRange: "12–15 g/dL",
    status: "LOW",
    sourceDocument: "CBC_Report.pdf",
    sourcePage: 1,
    confidenceScore: 97,
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "CBC_Report.pdf",
      sourcePage: 1,
      confidenceScore: 97,
      timestamp: "2026-09-02T08:14:00Z",
    },
  },
  {
    id: "lab-wbc",
    testName: "White Blood Cells (WBC)",
    value: 8.1,
    unit: "×10⁹/L",
    referenceRange: "4–11 ×10⁹/L",
    status: "NORMAL",
    sourceDocument: "CBC_Report.pdf",
    sourcePage: 1,
    confidenceScore: 99,
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "CBC_Report.pdf",
      sourcePage: 1,
      confidenceScore: 99,
      timestamp: "2026-09-02T08:14:00Z",
    },
  },
  {
    id: "lab-plt",
    testName: "Platelets",
    value: 245,
    unit: "×10⁹/L",
    referenceRange: "150–450 ×10⁹/L",
    status: "NORMAL",
    sourceDocument: "CBC_Report.pdf",
    sourcePage: 1,
    confidenceScore: 98,
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "CBC_Report.pdf",
      sourcePage: 1,
      confidenceScore: 98,
      timestamp: "2026-09-02T08:14:00Z",
    },
  },
  {
    id: "lab-glu",
    testName: "Fasting Glucose",
    value: 94,
    unit: "mg/dL",
    referenceRange: "70–99 mg/dL",
    status: "NORMAL",
    sourceDocument: "Metabolic_Panel.pdf",
    sourcePage: 2,
    confidenceScore: 96,
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "Metabolic_Panel.pdf",
      sourcePage: 2,
      confidenceScore: 96,
      timestamp: "2026-08-15T09:30:00Z",
    },
  },
];

/**
 * Mock medical schedule items.
 */
export const mockWorkspaceSchedule: WorkspaceScheduleItem[] = [
  {
    id: "sched-1",
    date: "Sept 12",
    time: "10:30 AM",
    title: "Doctor Appointment",
    specialistOrFacility: "Dr. Sarah Vance • Primary Care Suite 402",
    preparationInstructions: "Bring complete current prescription and OTC supplement list.",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "Appointment_Confirmation_Sep2026.pdf",
      sourcePage: 1,
      confidenceScore: 95,
    },
  },
  {
    id: "sched-2",
    date: "Sept 18",
    time: "8:00 AM",
    title: "Blood Test",
    specialistOrFacility: "LabCorp Outpatient Center • Suite 110",
    preparationInstructions: "Fasting required (8 hours prior). Water permitted.",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "Lab_Order_CBC_CMP.pdf",
      sourcePage: 1,
      confidenceScore: 98,
    },
  },
  {
    id: "sched-3",
    date: "Oct 02",
    time: "2:15 PM",
    title: "Follow-up",
    specialistOrFacility: "Internal Medicine Outpatient Clinic",
    preparationInstructions: "Review repeat hemoglobin values and evaluate symptoms.",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "Discharge_Summary_Aug2026.pdf",
      sourcePage: 3,
      confidenceScore: 94,
    },
  },
];

/**
 * Mock medical timeline events.
 */
export const mockWorkspaceTimeline: WorkspaceTimelineEvent[] = [
  {
    id: "tl-jan",
    date: "January 2026",
    category: "Lab Test",
    title: "Blood Test",
    source: "Routine_Annual_Labs_2026.pdf",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "VERIFIED",
      sourceDocument: "Routine_Annual_Labs_2026.pdf",
      sourcePage: 1,
    },
  },
  {
    id: "tl-feb",
    date: "February 2026",
    category: "Doctor Appointment",
    title: "Doctor Appointment",
    source: "Clinical_Encounter_Feb2026.pdf",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "VERIFIED",
      sourceDocument: "Clinical_Encounter_Feb2026.pdf",
      sourcePage: 1,
    },
  },
  {
    id: "tl-mar",
    date: "March 2026",
    category: "Medical Report",
    title: "Medical Report",
    source: "Abdominal_Ultrasound_Mar2026.pdf",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "VERIFIED",
      sourceDocument: "Abdominal_Ultrasound_Mar2026.pdf",
      sourcePage: 2,
    },
  },
  {
    id: "tl-sep-lab",
    date: "September 2026",
    category: "Lab Test",
    title: "Blood Test",
    source: "CBC_Report.pdf",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "CBC_Report.pdf",
      sourcePage: 1,
    },
  },
  {
    id: "tl-sep-fup",
    date: "September 2026",
    category: "Follow-up",
    title: "Follow-up",
    source: "Care_Plan_Sep2026.pdf",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "Care_Plan_Sep2026.pdf",
      sourcePage: 2,
    },
  },
];

/**
 * Cross-document conflict example.
 */
export const mockWorkspaceConflicts: InformationConflictItem[] = [
  {
    id: "conf-penicillin",
    title: "Information conflict detected",
    intakeAssertion: "Penicillin allergy reported by patient (severe hives)",
    reportAssertion: "Amoxicillin 500mg listed in previous discharge medications",
    sourceDocument: "Discharge_Summary_Aug2026.pdf",
    sourcePage: 2,
    status: "Review required",
    recommendation:
      "Cross-document discrepancy flagged. Amoxicillin is a penicillin-class antibiotic. MedLens does not infer clinical intent or override records; clinician review is required.",
    provenance: {
      origin: "AI_GENERATED",
      verificationStatus: "UNVERIFIED",
      sourceDocument: "Discharge_Summary_Aug2026.pdf",
      sourcePage: 2,
      confidenceScore: 92,
    },
  },
];

/**
 * Mock indexed reports.
 */
export const mockIndexedReports: ReportDocument[] = [
  {
    id: "doc-cbc",
    fileName: "CBC_Report.pdf",
    uploadDate: "Sep 02, 2026",
    pageCount: 3,
    fileSize: "1.4 MB",
    currentStage: "Reference Range Analysis",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
    },
  },
  {
    id: "doc-metabolic",
    fileName: "Metabolic_Panel.pdf",
    uploadDate: "Aug 15, 2026",
    pageCount: 4,
    fileSize: "2.1 MB",
    currentStage: "Validation",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
    },
  },
  {
    id: "doc-discharge",
    fileName: "Discharge_Summary_Aug2026.pdf",
    uploadDate: "Aug 20, 2026",
    pageCount: 5,
    fileSize: "3.2 MB",
    currentStage: "Conflict Detection",
    provenance: {
      origin: "AI_EXTRACTED",
      verificationStatus: "UNVERIFIED",
    },
  },
];

/**
 * Defined processing stages for future pipeline orchestration.
 */
export const futurePipelineStages: PipelineStage[] = [
  "Report Upload",
  "AI Extraction",
  "Validation",
  "Normalization",
  "Reference Range Analysis",
  "Conflict Detection",
  "Clarification Questions",
  "Human Review",
  "AI Summary",
];
