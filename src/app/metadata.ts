// src/app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henry Tavarez | UX Designer & Product Design Lead",
  description:
    "UX Designer and Product Design Lead helping organizations turn complexity into clarity through human-centered design and scalable systems.",
  openGraph: {
    title: "Henry Tavarez | UX Designer & Product Design Lead",
    description:
      "UX Designer and Product Design Lead helping organizations turn complexity into clarity through human-centered design and scalable systems.",
    url: "https://my-ux-portfolio-beta.vercel.app",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Henry Tavarez UX Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Tavarez | UX Designer & Product Design Lead",
    description:
      "UX Designer and Product Design Lead helping organizations turn complexity into clarity through human-centered design and scalable systems.",
    creator: "@eLevel",
  },
};