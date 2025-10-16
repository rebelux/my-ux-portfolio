import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import PageTransitionLayout from "@/components/PageTransitionLayout";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ backgroundColor: "#E9EBEC" }}>
      <head>
        {/* Botpress v3.3 script */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"
          strategy="afterInteractive"
        />
        <style>{`
          #webchat .bpWebchat {
            position: unset;
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
          }
          #webchat .bpFab {
            display: none;
          }
        `}</style>
      </head>

      {/* ✅ Updated background + text colors for Tailwind v4 */}
      <body className="bg-[--color-bg] text-[--color-text] font-sans transition-colors duration-500">
        {/* === Global Navigation (Responsive) === */}
        <NavBar />

        {/* === Main Content === */}
        <main className="pt-20 min-h-[calc(100vh-5rem)] bg-[--color-bg] text-[--color-text] transition-colors">
          <PageTransitionLayout>{children}</PageTransitionLayout>
        </main>

        {/* === Botpress Chat Container === */}
        <div
          id="webchat"
          className="fixed bottom-6 right-6 w-[420px] h-[560px] hidden"
        ></div>

        {/* === Botpress Init Script === */}
        <Script id="botpress-init" strategy="afterInteractive">
          {`
            function initializeBotpress() {
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
            }
            initializeBotpress();
          `}
        </Script>
      </body>
    </html>
  );
}
