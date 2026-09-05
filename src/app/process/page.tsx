"use client";

import { useState } from "react";
import ComparisonTable from "@/components/comparison/ComparisonTable";
import AISummary from "@/components/summary/AISummary";
import ClarificationQuestions from "@/clarification/ClarificationQuestions";

type LabResult = {
    test: string;
    value: string;
    unit: string;
    referenceRange: string;
    status: "LOW" | "NORMAL" | "HIGH" | "UNKNOWN";
    source: string;
    verified?: boolean;
};

type Conflict = {
    title: string;
    recordInfo: string;
    reportInfo: string;
    status: "Review required" | "Resolved";
};

export default function ProcessPage() {
    const [aiSummary, setAiSummary] = useState("");
    const [report, setReport] = useState("");
    const [results, setResults] = useState<LabResult[]>([]);

    async function processReport() {
        if (!report.trim()) {
            return;
        }

        const extracted: LabResult[] = [];

        const response = await fetch("/api/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                report: report,
            }),
        });

        const data = await response.json();

        console.log("AI analysis response:", data);

        if (data.analysis) {
            setAiSummary(data.analysis);
        }

        const lines = report.split("\n");

        for (const line of lines) {
            const hemoglobin = line.match(/hemoglobin|hb|hgb/i);
            const wbc = line.match(/wbc|white blood cells?/i);

            if (hemoglobin) {
                const match = line.match(/(\d+(?:\.\d+)?)\s*(g\/dL)?/i);

                if (match) {
                    const value = Number(match[1]);

                    extracted.push({
                        test: "Hemoglobin",
                        value: match[1],
                        unit: match[2] || "g/dL",
                        referenceRange: "12.0–15.0 g/dL",
                        status:
                            value < 12
                                ? "LOW"
                                : value > 15
                                    ? "HIGH"
                                    : "NORMAL",
                        source: "Current Report",
                    });
                }
            }

            if (wbc) {
                const match = line.match(/(\d+(?:\.\d+)?)/i);

                if (match) {
                    const value = Number(match[1]);

                    extracted.push({
                        test: "WBC",
                        value: match[1],
                        unit: "×10⁹/L",
                        referenceRange: "4.0–11.0 ×10⁹/L",
                        status:
                            value < 4
                                ? "LOW"
                                : value > 11
                                    ? "HIGH"
                                    : "NORMAL",
                        source: "Current Report",
                    });
                }
            }
        }

        setResults(extracted);
    }

    const conflicts: Conflict[] = [
        {
            title: "Information conflict detected",
            recordInfo: "Penicillin allergy documented in patient record",
            reportInfo: "Amoxicillin mentioned in current report",
            status: "Review required",
        },
    ];
    const clarificationQuestions = [
        "When did the reported symptoms begin?",
        "Are there any previous medical reports available for comparison?",
        "Can the source report date be confirmed?",
    ];

    return (
        <main className="min-h-screen bg-background px-6 py-12 text-foreground">
            <ClarificationQuestions
                questions={[
                    "When did the reported symptoms begin?",
                    "Are there any previous medical reports available for comparison?",
                    "Can the source report date be confirmed?",
                ]}
            />
            <ComparisonTable
                previous={[
                    {
                        test: "Hemoglobin",
                        value: "11.1",
                        unit: "g/dL",
                    },
                    {
                        test: "WBC",
                        value: "7.2",
                        unit: "×10⁹/L",
                    },
                ]}
                current={[
                    {
                        test: "Hemoglobin",
                        value: "11.2",
                        unit: "g/dL",
                    },
                    {
                        test: "WBC",
                        value: "8.1",
                        unit: "×10⁹/L",
                    },
                ]}
            />
            <div className="mx-auto max-w-5xl">
                <header className="mb-8">
                    <p className="text-sm font-medium text-muted-foreground">
                        MEDLENS / REPORT PROCESSING
                    </p>

                    <h1 className="mt-2 text-4xl font-semibold">
                        Process a medical report
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        Paste report text below to organize available laboratory
                        information. Extracted information remains traceable to the
                        provided report.
                    </p>
                </header>

                <section className="rounded-2xl border bg-card p-6 shadow-sm">
                    <label htmlFor="report" className="mb-2 block font-medium">
                        Medical report text
                    </label>

                    <textarea
                        id="report"
                        value={report}
                        onChange={(e) => setReport(e.target.value)}
                        rows={12}
                        placeholder={`Example:

Hemoglobin: 11.2 g/dL
WBC: 8.1 ×10⁹/L`}
                        className="w-full rounded-xl border bg-background p-4 outline-none focus:ring-2"
                    />

                    <button
                        onClick={processReport}
                        className="mt-4 rounded-lg bg-foreground px-5 py-3 font-medium text-background hover:opacity-90 focus:outline-none focus:ring-2"
                    >
                        Extract information
                    </button>
                </section>

                <section className="mt-8" aria-labelledby="results-heading">
                    <div className="mb-4">
                        <h2 id="results-heading" className="text-2xl font-semibold">
                            Structured laboratory results
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            AI-extracted information should be reviewed before being treated
                            as verified.
                        </p>
                    </div>
                    <div className="mb-6 rounded-xl border p-5">
                        <div className="flex items-center gap-2">
                            <span aria-hidden="true">⚠</span>
                            <h3 className="font-semibold">{conflicts[0].title}</h3>
                        </div>

                        <p className="mt-3 text-sm">
                            <strong>Patient record:</strong> {conflicts[0].recordInfo}
                        </p>

                        <p className="mt-2 text-sm">
                            <strong>Current report:</strong> {conflicts[0].reportInfo}
                        </p>

                        <p className="mt-3 text-sm font-medium">
                            Status: {conflicts[0].status}
                        </p>
                    </div>
                    {results.length === 0 ? (
                        <div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
                            No results extracted yet.
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {results.map((result) => (
                                <article
                                    key={result.test}
                                    className="rounded-xl border bg-card p-5"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <h3 className="text-lg font-semibold">{result.test}</h3>

                                        <span className="rounded-full border px-3 py-1 text-sm font-medium">
                                            {result.status === "LOW" && "LOW ↓"}
                                            {result.status === "NORMAL" && "NORMAL ✓"}
                                            {result.status === "HIGH" && "HIGH ↑"}
                                            {result.status === "UNKNOWN" && "UNKNOWN ?"}
                                        </span>
                                    </div>

                                    <p className="mt-4 text-2xl font-semibold">
                                        {result.value}{" "}
                                        <span className="text-base font-normal">
                                            {result.unit}
                                        </span>
                                    </p>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Reference range: {result.referenceRange}
                                    </p>

                                    <div className="mt-4 rounded-lg border p-3 text-sm">
                                        <strong>Source:</strong> {result.source}
                                        <br />
                                        <strong>Origin:</strong> AI extracted
                                        <br />
                                        <strong>Verification:</strong>{" "}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setResults((current) =>
                                                    current.map((item) =>
                                                        item.test === result.test
                                                            ? { ...item, verified: true }
                                                            : item
                                                    )
                                                );
                                            }}
                                            className="mt-3 rounded-lg border px-3 py-2 font-medium hover:bg-muted"
                                        >
                                            {result.verified ? "Verified ✓" : "Verify"}
                                        </button>




                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
                <section className="mt-8" aria-labelledby="clarification-heading">
                    <h2 id="clarification-heading" className="text-2xl font-semibold">
                        Clarification questions
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        These questions identify information that may need clarification.
                    </p>

                    <div className="mt-4 space-y-3">
                        {clarificationQuestions.map((question, index) => (
                            <div key={question} className="rounded-xl border bg-card p-4">
                                <span className="mr-2 font-medium">{index + 1}.</span>
                                {question}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
            <AISummary summary={aiSummary}
            />
        </main>
    );
}