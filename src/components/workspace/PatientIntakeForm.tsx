"use client";

import React, { useState } from "react";
import { PatientIntakeFormState } from "@/types/patientRecord";
import { defaultSampleIntake, emptyIntakeState } from "@/data/mockReportData";
import { User, AlertCircle, Sparkles, RotateCcw, ArrowRight, ShieldCheck, Check } from "lucide-react";

interface PatientIntakeFormProps {
  initialData?: PatientIntakeFormState;
  onSubmit: (data: PatientIntakeFormState) => void;
}

export const PatientIntakeForm: React.FC<PatientIntakeFormProps> = ({
  initialData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<PatientIntakeFormState>(
    initialData || defaultSampleIntake
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccessFeedback, setIsSuccessFeedback] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientNameOrId.trim()) {
      newErrors.patientNameOrId = "Patient name or identifier is required.";
    }

    if (!formData.age) {
      newErrors.age = "Age is required.";
    } else if (Number(formData.age) <= 0 || Number(formData.age) > 130) {
      newErrors.age = "Please enter a valid age between 1 and 130.";
    }

    if (!formData.sex) {
      newErrors.sex = "Please select an option for sex.";
    }

    if (!formData.symptoms.trim()) {
      newErrors.symptoms = "Please describe symptoms or reason for record intake.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccessFeedback(true);
      onSubmit(formData);
    }
  };

  const handlePrefillSample = () => {
    setFormData(defaultSampleIntake);
    setErrors({});
  };

  const handleReset = () => {
    setFormData(emptyIntakeState);
    setErrors({});
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header with Title and Classification Callout */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Clinical Onboarding
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
              Patient Intake Form
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrefillSample}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors"
            >
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>Load Sample Patient</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors"
              title="Clear all fields"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Provenance Classification Notice */}
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50/80 p-3.5 text-xs text-sky-950 flex items-start gap-2.5">
          <User className="h-4 w-4 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-0.5">
            <p className="font-bold">
              Provenance Notice: All information in this form is classified as <span className="underline decoration-sky-400 font-extrabold">User-provided</span>.
            </p>
            <p className="text-sky-900/90 leading-relaxed">
              MedLens strictly separates patient self-reported data from AI-extracted laboratory findings. User-entered statements are never treated as AI-generated inferences.
            </p>
          </div>
        </div>
      </div>

      {/* Intake Form */}
      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-6">
        {/* Row 1: Name/ID, Age, Sex */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
          {/* Patient Name / Identifier */}
          <div className="sm:col-span-6">
            <label
              htmlFor="patientNameOrId"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Patient Name / Identifier <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="patientNameOrId"
              name="patientNameOrId"
              value={formData.patientNameOrId}
              onChange={(e) =>
                setFormData({ ...formData, patientNameOrId: e.target.value })
              }
              aria-required="true"
              aria-invalid={!!errors.patientNameOrId}
              aria-describedby={errors.patientNameOrId ? "err-name" : undefined}
              placeholder="e.g. Jane Doe or PT-8821"
              className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                errors.patientNameOrId
                  ? "border-rose-300 bg-rose-50/30"
                  : "border-slate-300 bg-white"
              }`}
            />
            {errors.patientNameOrId && (
              <p id="err-name" className="mt-1 flex items-center gap-1 text-xs text-rose-600" role="alert">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{errors.patientNameOrId}</span>
              </p>
            )}
          </div>

          {/* Age */}
          <div className="sm:col-span-3">
            <label
              htmlFor="age"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Age <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              aria-required="true"
              aria-invalid={!!errors.age}
              aria-describedby={errors.age ? "err-age" : undefined}
              min="1"
              max="130"
              placeholder="e.g. 46"
              className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                errors.age ? "border-rose-300 bg-rose-50/30" : "border-slate-300 bg-white"
              }`}
            />
            {errors.age && (
              <p id="err-age" className="mt-1 flex items-center gap-1 text-xs text-rose-600" role="alert">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{errors.age}</span>
              </p>
            )}
          </div>

          {/* Sex */}
          <div className="sm:col-span-3">
            <label
              htmlFor="sex"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Sex <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  sex: e.target.value as PatientIntakeFormState["sex"],
                })
              }
              aria-required="true"
              aria-invalid={!!errors.sex}
              aria-describedby={errors.sex ? "err-sex" : undefined}
              className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                errors.sex ? "border-rose-300 bg-rose-50/30" : "border-slate-300 bg-white"
              }`}
            >
              <option value="">Select sex</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
              <option value="Prefer not to disclose">Prefer not to disclose</option>
            </select>
            {errors.sex && (
              <p id="err-sex" className="mt-1 flex items-center gap-1 text-xs text-rose-600" role="alert">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{errors.sex}</span>
              </p>
            )}
          </div>
        </div>

        {/* Symptoms / Concerns */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="symptoms"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Symptoms / Concerns <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <span className="text-[11px] text-slate-500">Patient-described reason for review</span>
          </div>
          <textarea
            id="symptoms"
            name="symptoms"
            rows={3}
            value={formData.symptoms}
            onChange={(e) =>
              setFormData({ ...formData, symptoms: e.target.value })
            }
            aria-required="true"
            aria-invalid={!!errors.symptoms}
            aria-describedby={errors.symptoms ? "err-symptoms" : undefined}
            placeholder="Describe current symptoms, onset, severity, or general concerns..."
            className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
              errors.symptoms ? "border-rose-300 bg-rose-50/30" : "border-slate-300 bg-white"
            }`}
          />
          {errors.symptoms && (
            <p id="err-symptoms" className="mt-1 flex items-center gap-1 text-xs text-rose-600" role="alert">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{errors.symptoms}</span>
            </p>
          )}
        </div>

        {/* Existing Medical Conditions */}
        <div>
          <label
            htmlFor="existingConditions"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Existing Medical Conditions
          </label>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Previously diagnosed conditions, surgical history, or chronic illnesses.
          </p>
          <textarea
            id="existingConditions"
            name="existingConditions"
            rows={2}
            value={formData.existingConditions}
            onChange={(e) =>
              setFormData({ ...formData, existingConditions: e.target.value })
            }
            placeholder="e.g. Hypertension (2021), Asthma, Type 2 Diabetes..."
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        {/* Known Allergies */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="knownAllergies"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Known Allergies & Adverse Reactions
            </label>
            <span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200">
              Critical Safety Field
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Drug allergies, food allergies, or specific severe reactions (e.g. Penicillin hives).
          </p>
          <textarea
            id="knownAllergies"
            name="knownAllergies"
            rows={2}
            value={formData.knownAllergies}
            onChange={(e) =>
              setFormData({ ...formData, knownAllergies: e.target.value })
            }
            placeholder="e.g. Penicillin (anaphylaxis/hives), Sulfa drugs, Latex..."
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        {/* Current Medications */}
        <div>
          <label
            htmlFor="currentMedications"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Current Medications & Dosages
          </label>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Prescriptions, over-the-counter medications, and supplements currently taken.
          </p>
          <textarea
            id="currentMedications"
            name="currentMedications"
            rows={2}
            value={formData.currentMedications}
            onChange={(e) =>
              setFormData({ ...formData, currentMedications: e.target.value })
            }
            placeholder="e.g. Lisinopril 10mg daily, Vitamin D3 2000 IU..."
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label
            htmlFor="additionalNotes"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Additional Notes
          </label>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Relevant family history, upcoming specialist referrals, or context for your healthcare provider.
          </p>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={2}
            value={formData.additionalNotes}
            onChange={(e) =>
              setFormData({ ...formData, additionalNotes: e.target.value })
            }
            placeholder="Any additional details or context..."
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <span>Encrypted local workspace session • No data sold</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            <span>Generate Structured Record</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
};
