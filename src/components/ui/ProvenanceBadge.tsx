import React from "react";
import { InformationOrigin, VerificationStatus, ProvenanceMeta } from "@/types/provenance";
import { User, Sparkles, Cpu, Check, Clock, Edit3, X, FileText } from "lucide-react";

interface ProvenanceBadgeProps {
  provenance: ProvenanceMeta;
  showSource?: boolean;
  className?: string;
}

export const ProvenanceBadge: React.FC<ProvenanceBadgeProps> = ({
  provenance,
  showSource = true,
  className = "",
}) => {
  const { origin, verificationStatus, sourceDocument, sourcePage, confidenceScore } = provenance;

  // Origin label & style
  const renderOrigin = () => {
    switch (origin) {
      case "USER_PROVIDED":
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-sky-800 border border-sky-200">
            <User className="h-3 w-3 text-sky-600" aria-hidden="true" />
            <span>User-provided</span>
          </span>
        );
      case "AI_EXTRACTED":
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-800 border border-indigo-200">
            <Sparkles className="h-3 w-3 text-indigo-600" aria-hidden="true" />
            <span>AI extracted</span>
            {typeof confidenceScore === "number" && (
              <span className="text-indigo-600 font-normal">({confidenceScore}%)</span>
            )}
          </span>
        );
      case "AI_GENERATED":
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-purple-50 px-2 py-0.5 text-[11px] font-semibold text-purple-800 border border-purple-200">
            <Cpu className="h-3 w-3 text-purple-600" aria-hidden="true" />
            <span>AI generated</span>
          </span>
        );
    }
  };

  // Verification status label & style
  const renderStatus = () => {
    switch (verificationStatus) {
      case "VERIFIED":
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800 border border-emerald-200">
            <Check className="h-3 w-3 text-emerald-600 font-bold" aria-hidden="true" />
            <span>Verified</span>
          </span>
        );
      case "EDITED":
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-800 border border-blue-200">
            <Edit3 className="h-3 w-3 text-blue-600" aria-hidden="true" />
            <span>Edited</span>
          </span>
        );
      case "REJECTED":
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-medium text-rose-800 border border-rose-200">
            <X className="h-3 w-3 text-rose-600 font-bold" aria-hidden="true" />
            <span>Rejected</span>
          </span>
        );
      case "UNVERIFIED":
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-900 border border-amber-300">
            <Clock className="h-3 w-3 text-amber-600" aria-hidden="true" />
            <span>Unverified</span>
          </span>
        );
    }
  };

  return (
    <div className={`inline-flex flex-wrap items-center gap-1.5 ${className}`}>
      {renderOrigin()}
      {renderStatus()}

      {showSource && sourceDocument && (
        <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-mono">
          <FileText className="h-3 w-3 text-slate-400" aria-hidden="true" />
          <span>
            {sourceDocument}
            {sourcePage ? ` • p.${sourcePage}` : ""}
          </span>
        </span>
      )}
    </div>
  );
};
