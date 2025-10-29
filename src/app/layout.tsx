import "./globals.css";

// src/app/layout.tsx
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import Footer from "@/components/layout/Footer";
// If your NavBar lives here, keep this import:
import NavBar from "@/components/NavBar";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* SSR-safe fallback background color to avoid flashes pre-hydration */}
      <body className="bg-[--color-bg] text-[--color-text]">
        {/* Keep your NavBar here if that’s how your app is wired */}
        <NavBar />
        <ClientLayout>{children}</ClientLayout>

        {/* === Botpress Chat Container === */}
        <div
          id="webchat"
          className="fixed bottom-6 right-6 w-[420px] h-[560px] hidden"
        ></div>

        <Footer />
      </body>
      <Analytics />
      {/* Botpress v3.3 script */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"
          strategy="afterInteractive"
        />
      {/* === Botpress Init Script === */}
        <Script id="botpress-init" strategy="afterInteractive">
          {`
            window.initializeBotpress = function () {
              if (window.botpress && typeof window.botpress.init === "function") {
                window.botpress.init({
                  botId: "0d1251e2-411d-4cbd-a0f8-3302266afb9f",
                  configuration: {
                    version: "v2",
                    botName: "Henry’s UX Portfolio Assistant",
                    botDescription: "Discover Henry’s UX journey — ask me about his design philosophy or key projects.",
                    color: "#7A8CA8",
                    variant: "solid",
                    headerVariant: "glass",
                    themeMode: "light",
                    fontFamily: "Inter",
                    radius: 4,
                    feedbackEnabled: false,
                    footer: "[⚡ by Botpress](https://botpress.com/?from=webchat)",
                    soundEnabled: false,
                    proactiveMessageEnabled: false,
                  },
                  clientId: "4c7013bc-fc0a-4e19-ad82-c9a54129c8b6",
                  selector: "#webchat"
                });
              } else {
                setTimeout(initializeBotpress, 500);
              }
            };
            window.initializeBotpress();
          `}
        </Script>
    </html>
  );
}
