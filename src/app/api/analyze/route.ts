import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { report } = await request.json();

        if (!report || typeof report !== "string") {
            return NextResponse.json(
                { error: "Report text is required." },
                { status: 400 }
            );
        }

        const findings = [];

        const hb = report.match(
            /(?:hemoglobin|hb|hgb)\s*[:\-]?\s*(\d+(?:\.\d+)?)/i
        );

        const wbc = report.match(
            /(?:wbc|white blood cells?)\s*[:\-]?\s*(\d+(?:\.\d+)?)/i
        );

        if (hb) {
            const value = Number(hb[1]);

            findings.push({
                test: "Hemoglobin",
                value: hb[1],
                unit: "g/dL",
                status: value < 12 ? "LOW" : value > 15 ? "HIGH" : "NORMAL",
                source: "Current Report",
            });
        }

        if (wbc) {
            const value = Number(wbc[1]);

            findings.push({
                test: "WBC",
                value: wbc[1],
                unit: "×10⁹/L",
                status: value < 4 ? "LOW" : value > 11 ? "HIGH" : "NORMAL",
                source: "Current Report",
            });
        }

        const conflict =
            /penicillin allergy/i.test(report) &&
            /amoxicillin/i.test(report);

        const summary = [
            "This summary organizes information found in the provided report.",
            ...findings.map(
                (f) =>
                    `${f.test} is ${f.value} ${f.unit} and is ${f.status.toLowerCase()} based on the reference information provided.`
            ),
            ...(conflict
                ? ["A potential allergy-related medication conflict requires human review."]
                : []),
            "This is not a diagnosis or treatment recommendation. A qualified healthcare professional should review the results.",
        ].join("\n\n");

        return NextResponse.json({
            success: true,
            findings,
            analysis: summary,
            reviewRequired: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Unable to process report." },
            { status: 500 }
        );
    }
}