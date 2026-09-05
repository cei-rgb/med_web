"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { HeroProductPreview } from "@/components/preview/HeroProductPreview";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-slate-50/50 pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200/60"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Copy and Actions */}
          <div className="lg:col-span-5 text-left">
            {/* Trust badge pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>Traceable Medical Information Architecture</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]"
            >
              Your medical information is scattered.{" "}
              <span className="text-slate-900 block sm:inline">
                <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-1 underline-offset-4">
                  {siteConfig.name}
                </span>{" "}
                brings it together.
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#hero-preview"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs transition-all hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                See How It Works
              </a>
            </div>

            {/* Core Trust Pillars Checklist */}
            <div className="mt-8 border-t border-slate-200/80 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Core System Principles
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Source-aware:</strong> Every extracted data point links directly to its original document and page.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Human verification:</strong> Flags cross-record conflicts for review rather than making assumptions.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Does not invent missing information:</strong> Uncertainty and unstated fields are clearly identified.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Miniature Patient Dashboard */}
          <div className="lg:col-span-7">
            <HeroProductPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
