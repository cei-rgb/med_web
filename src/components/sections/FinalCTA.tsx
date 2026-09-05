import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white"
    >
      {/* Subtle geometric background grid */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#33415520_1px,transparent_1px),linear-gradient(to_bottom,#33415520_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Ready for Reviewable Health Records</span>
          </div>

          <h2
            id="cta-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Your medical information, organized.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
            Bring reports, results, history, appointments, and schedules together in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/workspace"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-all hover:bg-emerald-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Traceable to source PDFs • Non-diagnostic architecture • Human-verified
          </p>
        </div>
      </div>
    </section>
  );
};
