import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDC – NBS Modernization | Henry Tavarez – UX Design Lead",
  description:
    "Transforming public health data systems through human-centered design. Learn how Henry Tavarez led UX modernization for the CDC’s National Disease Surveillance platform to improve usability, accessibility, and scalability.",
  openGraph: {
    title: "CDC – NBS Modernization | Henry Tavarez – UX Design Lead",
    description:
      "Transforming public health data systems through human-centered design. See how Henry Tavarez led UX modernization for the CDC’s NBS platform, enhancing usability, accessibility, and impact.",
    url: "https://my-ux-portfolio-beta.vercel.app/projects/cdc-nbs-modernization",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/images/cdc-nbs-modernization-hero.jpg",
        width: 1200,
        height: 630,
        alt: "CDC – NBS Modernization Case Study",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function CDCLocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
