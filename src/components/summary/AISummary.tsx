type AISummaryProps = {
    summary: string;
};

export default function AISummary({ summary }: AISummaryProps) {
    return (
        <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">
                AI-GENERATED
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
                Patient-friendly summary
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                This summary is generated from the provided report and requires human
                review. It is not a diagnosis or treatment recommendation.
            </p>

            <div className="mt-5 whitespace-pre-line text-sm leading-6">
                {summary || "Run report analysis to generate a summary."}
            </div>
        </section>
    );
}