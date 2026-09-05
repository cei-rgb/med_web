export type LabStatus = "LOW" | "NORMAL" | "HIGH" | "UNKNOWN";

export interface LabResult {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  status: LabStatus;
  referenceRange: string;
  sourceFile: string;
  sourcePage: number;
  extractionMethod: "AI extracted" | "Direct digital import" | "User provided";
  confidenceScore?: number;
  category: "Hematology" | "Metabolic" | "Lipids" | "Urinalysis";
  timestamp: string;
}

export interface MedicalScheduleItem {
  id: string;
  dateString: string; // e.g., "Sept 12"
  fullDate: string;   // e.g., "2026-09-12"
  title: string;      // e.g., "Doctor Appointment"
  time: string;       // e.g., "10:30 AM"
  providerOrFacility: string;
  notes?: string;
  type: "appointment" | "test" | "procedure" | "consultation";
}

export interface InformationConflict {
  id: string;
  title: string;
  patientRecordFact: string;
  reportMention: string;
  sourceDocument: string;
  sourcePage: number;
  status: "Needs human review" | "Pending clinical verification";
  note: string;
}

export interface PatientOverview {
  patientCode: string;
  reportsCount: number;
  labResultsCount: number;
  upcomingAppointmentsCount: number;
  lastUpdated: string;
}

export interface TimelineEvent {
  id: string;
  date: string; // e.g. "Jan 2026"
  title: string;
  category: "Lab Test" | "Appointment" | "Report" | "Follow-up";
  sourceName?: string;
  details: string;
}

export interface HistoricalLabPoint {
  date: string;
  displayDate: string;
  value: number;
  unit: string;
  referenceLow: number;
  referenceHigh: number;
  source: string;
}
