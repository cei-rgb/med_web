"use client";

import { run } from "node:test";
import { FormEvent, useState } from "react";

type PatientRecord = {
    name: string;
    age: string;
    sex: string;
    symptoms: string;
    conditions: string;
    allergies: string;
    medications: string;
    notes: string;
};

const emptyRecord: PatientRecord = {
    name: "",
    age: "",
    sex: "",
    symptoms: "",
    conditions: "",
    allergies: "",
    medications: "",
    notes: "",
};

export default function IntakePage() {
    const [form, setForm] = useState<PatientRecord>(emptyRecord);
    const [record, setRecord] = useState<PatientRecord | null>(null);

    function updateField(field: keyof PatientRecord, value: string) {
        setForm((current) => ({
            ...current,
            [field]: value,
        }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setRecord(form);
    }

    return (
        <main className="min-h-screen bg-background px-6 py-12 text-foreground">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10">
                    <p className="mb-3 text-sm font-medium text-muted-foreground">
                        MEDLENS / PATIENT INTAKE
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight">
                        Patient information
                    </h1>

                    <p className="mt-3 max-w-2xl text-muted-foreground">
                        Enter information provided by the patient. This information will
                        be clearly distinguished from information later extracted by AI.
                    </p>
                </header>

                <div className="grid gap-8 lg:grid-cols-2">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border bg-card p-6 shadow-sm"
                    >
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold">Patient intake</h2>
                            <p className="mt-1 text-sm text-muted-foreground">
                                All fields below are user-provided.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <Field
                                label="Name / identifier"
                                value={form.name}
                                onChange={(value) => updateField("name", value)}
                                placeholder="Patient name or identifier"
                            />

                            <div className="grid gap-5 sm:grid-cols-2">
                                <Field
                                    label="Age"
                                    type="number"
                                    value={form.age}
                                    onChange={(value) => updateField("age", value)}
                                    placeholder="Age"
                                />

                                <div>
                                    <label
                                        htmlFor="sex"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Sex
                                    </label>

                                    <select
                                        id="sex"
                                        value={form.sex}
                                        onChange={(event) =>
                                            updateField("sex", event.target.value)
                                        }
                                        className="w-full rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2"
                                    >
                                        <option value="">Select</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Intersex">Intersex</option>
                                        <option value="Prefer not to say">
                                            Prefer not to say
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <TextArea
                                label="Symptoms / concerns"
                                value={form.symptoms}
                                onChange={(value) => updateField("symptoms", value)}
                                placeholder="Information provided by the patient..."
                            />

                            <TextArea
                                label="Existing medical conditions"
                                value={form.conditions}
                                onChange={(value) => updateField("conditions", value)}
                                placeholder="Known conditions or history..."
                            />

                            <TextArea
                                label="Known allergies"
                                value={form.allergies}
                                onChange={(value) => updateField("allergies", value)}
                                placeholder="Known allergies..."
                            />

                            <TextArea
                                label="Current medications"
                                value={form.medications}
                                onChange={(value) => updateField("medications", value)}
                                placeholder="Current medications..."
                            />

                            <TextArea
                                label="Additional notes"
                                value={form.notes}
                                onChange={(value) => updateField("notes", value)}
                                placeholder="Anything else provided by the patient..."
                            />

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-foreground px-4 py-3 font-medium text-background transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                Create patient record
                            </button>
                        </div>
                    </form>

                    <section
                        aria-labelledby="record-heading"
                        className="rounded-2xl border bg-card p-6 shadow-sm"
                    >
                        <div className="mb-6 flex items-start justify-between gap-4">
                            <div>
                                <h2 id="record-heading" className="text-xl font-semibold">
                                    Structured patient record
                                </h2>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Review information before processing medical reports.
                                </p>
                            </div>

                            <span className="whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium">
                                USER-PROVIDED
                            </span>
                        </div>

                        {record ? (
                            <div className="space-y-5">
                                <RecordSection
                                    title="Patient Information"
                                    value={`${record.name || "Not provided"}${record.age ? ` · ${record.age} years` : ""
                                        }${record.sex ? ` · ${record.sex}` : ""}`}
                                />

                                <RecordSection
                                    title="Symptoms / Concerns"
                                    value={record.symptoms || "Not provided"}
                                />

                                <RecordSection
                                    title="Conditions & History"
                                    value={record.conditions || "Not provided"}
                                />

                                <RecordSection
                                    title="Allergies"
                                    value={record.allergies || "Not provided"}
                                />

                                <RecordSection
                                    title="Medications"
                                    value={record.medications || "Not provided"}
                                />

                                <RecordSection
                                    title="Additional Notes"
                                    value={record.notes || "Not provided"}
                                />
                            </div>
                        ) : (
                            <div className="rounded-xl border border-dashed p-8 text-center">
                                <p className="font-medium">No patient record yet</p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Complete the intake form to create the structured record.
                                </p>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
}

function Field({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
}) {
    const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium">
                {label}
            </label>

            <input
                id={id}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2"
            />
        </div>
    );
}

function TextArea({
    label,
    value,
    onChange,
    placeholder,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}) {
    const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium">
                {label}
            </label>

            <textarea
                id={id}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                rows={3}
                className="w-full resize-y rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2"
            />
        </div>
    );
}

function RecordSection({
    title,
    value,
}: {
    title: string;
    value: string;
}) {
    return (
        <div className="border-b pb-4 last:border-0">
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{value}</p>
        </div>
    );
}