type ClarificationQuestionsProps = {
    questions: string[];
};

export default function ClarificationQuestions({
    questions,
}: ClarificationQuestionsProps) {
    return (
        <section aria-labelledby="clarification-heading" className="mt-8">
            <h2 id="clarification-heading" className="text-2xl font-semibold">
                Clarification questions
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
                These questions identify information that may need clarification.
            </p>

            <div className="mt-4 space-y-3">
                {questions.map((question, index) => (
                    <div key={question} className="rounded-xl border bg-card p-4">
                        <span className="mr-2 font-medium">{index + 1}.</span>
                        {question}
                    </div>
                ))}
            </div>
        </section>
    );
}