import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé | Henry Tavarez – UX Design Lead",
  description:
    "View the professional résumé of Henry Tavarez, a UX Design Lead with 20+ years of experience in enterprise software, public sector modernization, and design leadership.",
  openGraph: {
    title: "Résumé | Henry Tavarez – UX Design Lead",
    description:
      "Explore the career history, leadership experience, and design expertise of Henry Tavarez — UX Design Lead specializing in enterprise-scale transformation.",
    url: "https://my-ux-portfolio-beta.vercel.app/resume",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/images/og-resume.jpg",
        width: 1200,
        height: 630,
        alt: "Résumé of Henry Tavarez",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
