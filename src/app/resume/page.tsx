"use client";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <section className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8">Résumé</h1>
        <p className="text-zinc-400 mb-12">
          Here’s a concise overview of my experience and skills. A full PDF
          résumé is available below.
        </p>

        {/* === Experience placeholder === */}
        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              Senior UX Designer
            </h2>
            <p className="text-zinc-400">
              Large National Pharmaceutical Company • 2020 – Present
            </p>
            <p className="mt-2 text-zinc-300">
              Leading design initiatives for enterprise data products, focusing
              on usability, accessibility, and system-level UX strategy.
            </p>
          </div>

          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              UX Consultant
            </h2>
            <p className="text-zinc-400">
              Regional Technology Consulting Firm • 2017 – 2020
            </p>
            <p className="mt-2 text-zinc-300">
              Delivered end-to-end UX for web and mobile applications across
              multiple industries, collaborating closely with development teams.
            </p>
          </div>

          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              Product Designer
            </h2>
            <p className="text-zinc-400">
              Startup Software Company • 2014 – 2017
            </p>
            <p className="mt-2 text-zinc-300">
              Designed core user flows and interfaces for SaaS platforms,
              contributing to product-market fit and visual brand identity.
            </p>
          </div>
        </div>

        {/* === Skills placeholder === */}
        <section className="mt-12 text-left">
          <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
          <p className="text-zinc-300">
            UX Research • Interaction Design • Design Systems • Accessibility • Prototyping • Information Architecture • Figma • Usability Testing • Stakeholder Workshops
          </p>
        </section>

        {/* === Download link placeholder === */}
        <div className="mt-12">
          <Link
            href="/files/Henry-Tavarez-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition"
          >
            Download Résumé (PDF)
          </Link>
        </div>
      </section>

      {/* === Optional Chat CTA === */}
      <section className="mt-16 text-center">
        <p className="text-zinc-400 mb-4">
          Want to learn more about my professional experience?
        </p>
        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.botpress) {
              window.botpress.open();
            }
          }}
          className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition"
        >
          Ask my AI Assistant
        </button>
      </section>
    </main>
  );
}
