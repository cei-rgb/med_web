type ComparisonTableProps = {
    previous: {
        test: string;
        value: string;
        unit: string;
    }[];
    current: {
        test: string;
        value: string;
        unit: string;
    }[];
};

export default function ComparisonTable({
    previous,
    current,
}: ComparisonTableProps) {
    return (
        <section className="mt-8" aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="text-2xl font-semibold">
                Previous vs Current
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
                Comparison is based on extracted report values.
            </p>

            <div className="mt-4 overflow-x-auto rounded-xl border">
                <table className="w-full text-left text-sm">
                    <thead className="border-b">
                        <tr>
                            <th className="p-4">Parameter</th>
                            <th className="p-4">Previous</th>
                            <th className="p-4">Current</th>
                            <th className="p-4">Change</th>
                        </tr>
                    </thead>

                    <tbody>
                        {current.map((item) => {
                            const old = previous.find(
                                (previousItem) => previousItem.test === item.test
                            );

                            const oldValue = old ? Number(old.value) : null;
                            const currentValue = Number(item.value);

                            const change =
                                oldValue !== null ? currentValue - oldValue : null;

                            return (
                                <tr key={item.test} className="border-b last:border-0">
                                    <td className="p-4 font-medium">{item.test}</td>

                                    <td className="p-4">
                                        {old ? `${old.value} ${old.unit}` : "Not available"}
                                    </td>

                                    <td className="p-4">
                                        {item.value} {item.unit}
                                    </td>

                                    <td className="p-4 font-medium">
                                        {change === null
                                            ? "—"
                                            : `${change > 0 ? "+" : ""}${change.toFixed(1)}`}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}