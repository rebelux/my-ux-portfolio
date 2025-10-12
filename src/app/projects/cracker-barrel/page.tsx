"use client";
import Link from "next/link";
import CaseStudyHero from "@/components/CaseStudyHero";

// === Botpress-safe helper ===
function askAIAbout(projectTitle: string) {
  if (typeof window === "undefined" || !window.botpress) return;

  const text = `Tell me about the ${projectTitle} project.`;
  let sent = false;

  const trySend = () => {
    if (sent) return;
    sent = true;
    window.botpress?.sendMessage?.(text);
  };

  window.botpress.open();
  window.botpress.on?.("webchat:ready", trySend);
  window.botpress.on?.("webchat:opened", trySend);
  setTimeout(trySend, 300);
}

export default function CrackerBarrelPage() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <article className="max-w-4xl w-full space-y-12">
        {/* === Hero === */}
        <CaseStudyHero
          title="Cracker Barrel"
          subtitle="Modernizing a legacy brand’s digital experience while preserving its charm."
          imageUrl="/images/cracker-barrel-hero.jpg"
        />

        {/* === Meta === */}
        <section className="text-sm text-zinc-400 text-center">
          <p>
            <strong>Project Type:</strong> Mobile App & Website ·{" "}
            <strong>Client:</strong> Cracker Barrel Old Country Store
          </p>
          <p>
            <strong>Company:</strong> Arrow Digital ·{" "}
            <strong>Timeline:</strong> 2015 – 2017
          </p>
          <p>
            <strong>Focus:</strong> Refreshing Cracker Barrel’s digital presence while maintaining its traditional brand identity and expanding its online engagement.
          </p>
        </section>

        {/* === Overview === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Cracker Barrel wanted to modernize its online experience without losing the nostalgic,
            rustic warmth that defines the brand. The challenge was to blend modern usability and 
            responsiveness with a design language deeply rooted in its country heritage.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Our team recreated the feel of their physical stores digitally by using textured materials, 
            warm tones, and familiar visual motifs like wood grain and chalkboard surfaces. We also 
            partnered with Cracker Barrel to restructure their content and data models for over 600 locations, 
            enabling personalized menus and store information based on location and user preferences.
          </p>
        </section>

        {/* === Innovation Section === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Beyond the Redesign</h2>
          <p className="text-zinc-300 leading-relaxed">
            During our collaboration, we explored ways to extend Cracker Barrel’s in-store experience 
            through digital engagement. One of our concepts was an AR-based “antique hunt” that invited 
            guests to explore the country store to find virtual collectibles and earn rewards. This idea 
            strengthened the connection between Cracker Barrel’s physical spaces and its digital brand.
          </p>
        </section>

        {/* === Key Skills === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Skills Demonstrated</h2>
          <p className="text-zinc-300 leading-relaxed">
            UX Strategy · Brand Experience Design · UI Design · Prototyping · Client Workshops · Cross-Disciplinary Collaboration
          </p>
        </section>

        {/* === Reflection === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-zinc-300 leading-relaxed">
            This project was a reminder that great UX is not just about modernization—it’s about respecting 
            heritage while creating meaningful ways for users to connect with a brand. By merging tradition 
            with technology, we helped Cracker Barrel extend its hospitality into the digital space.
          </p>
        </section>

        {/* === Footer === */}
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          <Link
            href="/projects"
            className="text-amber-500 hover:text-amber-400 transition"
          >
            ← Back to Projects
          </Link>
          <button
            onClick={() => askAIAbout("Cracker Barrel")}
            className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition text-sm"
          >
            Ask My AI Assistant
          </button>
        </div>
      </article>
    </main>
  );
}
