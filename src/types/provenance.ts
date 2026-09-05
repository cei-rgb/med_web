/**
 * Provenance & Verification Data Model for MedLens.
 * Distinguishes the exact source of medical information and its review state.
 */

export type InformationOrigin = "USER_PROVIDED" | "AI_EXTRACTED" | "AI_GENERATED";

export type VerificationStatus = "UNVERIFIED" | "VERIFIED" | "EDITED" | "REJECTED";

export interface ProvenanceMeta {
  origin: InformationOrigin;
  verificationStatus: VerificationStatus;
  sourceDocument?: string;
  sourcePage?: number;
  confidenceScore?: number;
  timestamp?: string;
  verifiedBy?: string;
  verificationNote?: string;
}

export interface ProvenancedField<T> {
  value: T;
  provenance: ProvenanceMeta;
}
