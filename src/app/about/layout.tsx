import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Henry Tavarez | UX Design Lead & Product Designer",
  description:
    "Learn about Henry Tavarez — UX Design Lead and Product Designer with 20+ years of experience bridging design, technology, and strategy to create clarity and impact at enterprise scale.",
  openGraph: {
    title: "About Henry Tavarez | UX Design Lead & Product Designer",
    description:
      "Discover Henry’s design philosophy and approach — focused on simplifying complexity, empowering teams, and designing clarity at scale.",
    url: "https://my-ux-portfolio-beta.vercel.app/about",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Henry Tavarez",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
