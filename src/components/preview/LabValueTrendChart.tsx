"use client";

import React, { useState } from "react";
import { mockHistoricalHemoglobin } from "@/data/mockData";
import { Activity, Info, Table as TableIcon, LineChart as ChartIcon } from "lucide-react";

export const LabValueTrendChart: React.FC = () => {
  const [viewMode, setViewMode] = useState<"chart" | "table">("chart");
  const data = mockHistoricalHemoglobin;

  // Chart coordinate math
  // Values: 11.0 to 15.5 scale
  const minVal = 10.5;
  const maxVal = 15.5;
  const chartHeight = 160;
  const chartWidth = 420;
  const paddingX = 45;
  const paddingY = 25;

  const getY = (val: number) => {
    const ratio = (val - minVal) / (maxVal - minVal);
    return chartHeight - paddingY - ratio * (chartHeight - 2 * paddingY);
  };

  const getX = (idx: number) => {
    return paddingX + (idx / (data.length - 1)) * (chartWidth - 2 * paddingX);
  };

  const refLowY = getY(12.0);
  const refHighY = getY(15.0);

  // SVG polyline points
  const pointsString = data
    .map((d, i) => `${getX(i)},${getY(d.value)}`)
    .join(" ");

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-100 text-emerald-800">
            <Activity className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Hemoglobin Historical Record
            </h4>
            <p className="text-[11px] text-slate-500">
              Unit: g/dL • Ref Range: 12.0 – 15.0 g/dL
            </p>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs">
          <button
            type="button"
            onClick={() => setViewMode("chart")}
            className={`flex items-center gap-1 rounded-md px-2 py-1 font-medium transition-colors ${
              viewMode === "chart"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
            aria-pressed={viewMode === "chart"}
          >
            <ChartIcon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Chart</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-1 rounded-md px-2 py-1 font-medium transition-colors ${
              viewMode === "table"
                ? "bg-white text-slate-900 shadow-2xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
            aria-pressed={viewMode === "table"}
          >
            <TableIcon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Table</span>
          </button>
        </div>
      </div>

      {/* Chart View */}
      {viewMode === "chart" ? (
        <div className="mt-3">
          <div className="relative w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-auto max-h-48 overflow-visible"
              role="img"
              aria-label="Line chart showing Hemoglobin values over four recorded timepoints: Jan 2026 at 12.8, Mar 2026 at 12.1, Jun 2026 at 11.6, and Sep 2026 at 11.2."
            >
              {/* Reference Range Shaded Band */}
              <rect
                x={paddingX}
                y={refHighY}
                width={chartWidth - 2 * paddingX}
                height={refLowY - refHighY}
                fill="#ecfdf5"
                opacity="0.85"
              />
              <line
                x1={paddingX}
                y1={refHighY}
                x2={chartWidth - paddingX}
                y2={refHighY}
                stroke="#10b981"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1={paddingX}
                y1={refLowY}
                x2={chartWidth - paddingX}
                y2={refLowY}
                stroke="#10b981"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* Reference labels on right */}
              <text
                x={chartWidth - paddingX + 5}
                y={refHighY + 3}
                fill="#059669"
                fontSize="9"
                fontWeight="500"
              >
                15.0 (Upper Ref)
              </text>
              <text
                x={chartWidth - paddingX + 5}
                y={refLowY + 3}
                fill="#059669"
                fontSize="9"
                fontWeight="500"
              >
                12.0 (Lower Ref)
              </text>

              {/* Data Trend Line */}
              <polyline
                fill="none"
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={pointsString}
              />

              {/* Data Points */}
              {data.map((d, i) => {
                const cx = getX(i);
                const cy = getY(d.value);
                const isBelow = d.value < 12.0;

                return (
                  <g key={d.date}>
                    {/* Vertical grid line */}
                    <line
                      x1={cx}
                      y1={paddingY}
                      x2={cx}
                      y2={chartHeight - paddingY}
                      stroke="#f1f5f9"
                      strokeWidth="1"
                    />

                    {/* Circle Node */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="4.5"
                      fill={isBelow ? "#d97706" : "#0f172a"}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />

                    {/* Value label */}
                    <text
                      x={cx}
                      y={cy - 8}
                      textAnchor="middle"
                      fill={isBelow ? "#b45309" : "#0f172a"}
                      fontSize="11"
                      fontWeight="bold"
                    >
                      {d.value}
                    </text>

                    {/* Date label at bottom */}
                    <text
                      x={cx}
                      y={chartHeight - 8}
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="10"
                      fontWeight="500"
                    >
                      {d.displayDate}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span>Light green area marks source laboratory reference interval (12.0–15.0 g/dL)</span>
            </div>
          </div>
        </div>
      ) : (
        /* Accessible Table Fallback */
        <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-left text-xs">
            <caption className="sr-only">Historical recorded values for Hemoglobin</caption>
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th scope="col" className="px-3 py-2">Date</th>
                <th scope="col" className="px-3 py-2">Recorded Value</th>
                <th scope="col" className="px-3 py-2">Source Reference</th>
                <th scope="col" className="px-3 py-2">Document</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {data.map((row) => (
                <tr key={row.date} className="hover:bg-slate-50/50">
                  <td className="px-3 py-2 font-medium">{row.displayDate}</td>
                  <td className="px-3 py-2 font-bold">
                    {row.value} {row.unit}{" "}
                    {row.value < 12.0 && (
                      <span className="text-amber-700 font-semibold ml-1">(Below reference)</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-slate-600">
                    {row.referenceLow}–{row.referenceHigh} {row.unit}
                  </td>
                  <td className="px-3 py-2 font-mono text-[11px] text-slate-500">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Non-Diagnostic Disclaimer Alert */}
      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50/80 p-2.5 flex items-start gap-2 text-[11px] text-slate-600">
        <Info className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
        <p>
          <strong>Non-diagnostic visualization:</strong> Data points reflect factual historical values extracted from source documents. MedLens does not draw medical conclusions, interpret trend significance, or formulate diagnostic assertions.
        </p>
      </div>
    </div>
  );
};
