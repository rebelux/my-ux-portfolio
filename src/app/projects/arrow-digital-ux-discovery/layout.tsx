import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arrow Digital – UX Discovery Process | Henry Tavarez – UX Design Lead",
  description:
    "Transforming a development-focused company into a user-centered design practice. Learn how Henry Tavarez built and scaled a UX discovery framework that reshaped process, delivery, and culture at Arrow Digital.",
  openGraph: {
    title: "Arrow Digital – UX Discovery Process | Henry Tavarez – UX Design Lead",
    description:
      "Discover how Henry Tavarez established a UX Discovery Process that helped Arrow Digital grow from 12 to over 200 employees and positioned it for acquisition.",
    url: "https://my-ux-portfolio-beta.vercel.app/projects/arrow-digital-ux-discovery",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/images/arrow-digital-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Arrow Digital – UX Discovery Process Case Study",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function ArrowLocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
