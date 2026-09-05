import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CoreFeatures } from "@/components/sections/CoreFeatures";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ResponsibleAISection } from "@/components/sections/ResponsibleAISection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <CoreFeatures />
        <FeatureShowcase />
        <TimelineSection />
        <ResponsibleAISection />
        <CredibilitySection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
