import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS – Identity Management Modernization | Henry Tavarez – UX Design Lead",
  description:
    "Streamlining secure access for healthcare data systems through human-centered design. Learn how Henry Tavarez led UX modernization for CMS’s Identity Management platform to improve onboarding, accessibility, and efficiency.",
  openGraph: {
    title: "CMS – Identity Management Modernization | Henry Tavarez – UX Design Lead",
    description:
      "Discover how Henry Tavarez applied Human-Centered Design to modernize CMS’s Identity Management system — enhancing usability, accessibility, and Section 508 compliance for internal and external users.",
    url: "https://my-ux-portfolio-beta.vercel.app/projects/cms-identity-management",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/images/cms-identity-management-hero.jpg",
        width: 1200,
        height: 630,
        alt: "CMS – Identity Management Modernization Case Study",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function CMSLocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
