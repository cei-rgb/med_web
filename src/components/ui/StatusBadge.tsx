import React from "react";
import { LabStatus } from "@/types/medical";

interface StatusBadgeProps {
  status: LabStatus;
  size?: "sm" | "md";
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = "md",
  className = "",
}) => {
  const sizeClasses =
    size === "sm"
      ? "px-2 py-0.5 text-xs gap-1 font-medium"
      : "px-2.5 py-1 text-xs gap-1.5 font-semibold";

  switch (status) {
    case "LOW":
      return (
        <span
          className={`inline-flex items-center rounded-full border border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-950/60 dark:text-amber-200 ${sizeClasses} ${className}`}
          aria-label={`Status: Low`}
        >
          <span className="font-bold select-none text-amber-700 dark:text-amber-300" aria-hidden="true">
            ↓
          </span>
          <span>LOW</span>
        </span>
      );

    case "NORMAL":
      return (
        <span
          className={`inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 ${sizeClasses} ${className}`}
          aria-label={`Status: Normal`}
        >
          <span className="font-bold select-none text-emerald-700 dark:text-emerald-300" aria-hidden="true">
            ✓
          </span>
          <span>NORMAL</span>
        </span>
      );

    case "HIGH":
      return (
        <span
          className={`inline-flex items-center rounded-full border border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-700 dark:bg-rose-950/60 dark:text-rose-200 ${sizeClasses} ${className}`}
          aria-label={`Status: High`}
        >
          <span className="font-bold select-none text-rose-700 dark:text-rose-300" aria-hidden="true">
            ↑
          </span>
          <span>HIGH</span>
        </span>
      );

    case "UNKNOWN":
    default:
      return (
        <span
          className={`inline-flex items-center rounded-full border border-slate-300 bg-slate-100 text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 ${sizeClasses} ${className}`}
          aria-label={`Status: Unknown`}
        >
          <span className="font-bold select-none text-slate-500" aria-hidden="true">
            ?
          </span>
          <span>UNKNOWN</span>
        </span>
      );
  }
};
