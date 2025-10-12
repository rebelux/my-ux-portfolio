import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Henry Tavarez – UX Design Lead",
  description:
    "A collection of UX case studies and design system initiatives led by Henry Tavarez. Explore enterprise-scale projects for CDC, CMS, and Arrow Digital.",
  openGraph: {
    title: "Projects | Henry Tavarez – UX Design Lead",
    description:
      "Explore UX design and product strategy case studies by Henry Tavarez, including large-scale transformations for CDC, CMS, and enterprise organizations.",
    url: "https://my-ux-portfolio-beta.vercel.app/projects",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/images/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "UX Design Projects by Henry Tavarez",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
