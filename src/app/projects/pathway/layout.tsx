import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pathway - Student Gudance Platform | Henry Tavarez – UX Design Lead",
  description:
    "Designing a student development system for high school guidance.",
  openGraph: {
    title: "Pathway - Student Gudance Platform | Henry Tavarez – UX Design Lead",
    description:
      "Designing a student development system for high school guidance.",
    url: "https://www.henrytavarez.com/projects/pathway",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/images/pathway-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pathway - Student Gudance Platform",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function PathwayLocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
