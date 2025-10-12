import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Henry Tavarez – UX Design Lead",
  description:
    "Get in touch with Henry Tavarez — UX Design Lead specializing in enterprise-scale experience design. Reach out for collaborations, UX strategy discussions, or to connect with his AI Assistant.",
  openGraph: {
    title: "Contact | Henry Tavarez – UX Design Lead",
    description:
      "Contact Henry Tavarez to discuss UX leadership, enterprise design systems, or collaboration opportunities.",
    url: "https://my-ux-portfolio-beta.vercel.app/contact",
    siteName: "Henry Tavarez Portfolio",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Henry Tavarez",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
