import React from "react";
import { siteConfig } from "@/config/site";
import { Info } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-2xs">
                <svg
                  className="h-4 w-4 text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              Structuring scattered healthcare reports, laboratory panels, and appointments into a unified, traceable, and reviewable patient record.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span>System Status: Fully Operational (Mock Demo Mode)</span>
            </div>
          </div>

          {/* Product Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Product Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Legal Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Trust & Compliance
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#responsible-ai"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  Responsible AI Principles
                </a>
              </li>
              <li>
                <a
                  href="#credibility"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#credibility"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#credibility"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@medlens.example"
                  className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer Banner */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
          <div className="flex items-start gap-2.5">
            <Info className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-800">
                Medical Disclaimer
              </p>
              <p className="leading-relaxed text-slate-600">
                {siteConfig.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & accessibility note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built for patient transparency.
          </p>
          <div className="flex items-center gap-4">
            <span>WCAG 2.1 AA Compliant</span>
            <span>•</span>
            <span>Non-Diagnostic System</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
