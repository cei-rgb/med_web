export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  principle: string;
  disclaimer: string;
  navLinks: { label: string; href: string }[];
  footerLinks: {
    product: { label: string; href: string }[];
    legalAndTrust: { label: string; href: string }[];
  };
}

/**
 * Global site configuration.
 * Change `name` here to update the brand across the entire application.
 */
export const siteConfig: SiteConfig = {
  name: "MedLens",
  shortName: "MedLens",
  tagline: "Your medical information is scattered. MedLens brings it together.",
  description:
    "Organize medical reports, lab results, medical history, appointments, and important information into one structured, reviewable patient record.",
  principle:
    "AI organizes medical information; it does not replace professional medical judgment.",
  disclaimer:
    "MedLens is an information organization and record-structuring tool. It does not provide medical diagnoses, clinical advice, or treatment plans. All extracted values, reference ranges, and flagged conflicts require review by qualified healthcare professionals.",
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Showcase", href: "#showcase" },
    { label: "Timeline", href: "#timeline" },
    { label: "Responsible AI", href: "#responsible-ai" },
  ],
  footerLinks: {
    product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Timeline", href: "#timeline" },
      { label: "Security & Performance", href: "#credibility" },
    ],
    legalAndTrust: [
      { label: "Responsible AI", href: "#responsible-ai" },
      { label: "Privacy Commitment", href: "#credibility" },
      { label: "Accessibility Statement", href: "#credibility" },
      { label: "Contact", href: "mailto:support@medlens.example" },
    ],
  },
};
