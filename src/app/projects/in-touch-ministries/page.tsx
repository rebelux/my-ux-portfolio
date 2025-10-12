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

export default function InTouchMinistriesPage() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <article className="max-w-4xl w-full space-y-12">
        {/* === Hero === */}
        <CaseStudyHero
          title="In Touch Ministries"
          subtitle="Creating a unified, mobile-optimized experience for a global digital ministry."
          imageUrl="/images/in-touch-ministries-hero.jpg"
        />

        {/* === Meta === */}
        <section className="text-sm text-zinc-400 text-center">
          <p>
            <strong>Project Type:</strong> Mobile App & Website ·{" "}
            <strong>Client:</strong> In Touch Ministries
          </p>
          <p>
            <strong>Company:</strong> Arrow Digital ·{" "}
            <strong>Timeline:</strong> 2014 – 2016
          </p>
          <p>
            <strong>Focus:</strong> Redesigning In Touch Ministries’ digital ecosystem to support modern web, mobile, and publishing experiences within a unified design framework.
          </p>
        </section>

        {/* === Overview === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            In Touch Ministries wanted a complete digital refresh—one that honored its legacy while
            enabling the flexibility and reach of modern media. What began as a website redesign
            evolved into a larger initiative: integrating an online magazine, developing a new web
            application, and designing reusable components to create a cohesive experience across all
            of In Touch’s platforms.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The goal was to unify their brand and technology stack while maintaining creative freedom
            for each department. This required designing a scalable system that could adapt to the
            ministry’s diverse audiences and growing content strategy.
          </p>
        </section>

        {/* === Challenge & Approach === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Challenge & Approach</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            The existing digital ecosystem was fragmented, with separate experiences for the main
            website, magazine, and mobile content. To bridge these gaps, we developed a component-based
            design language that provided consistency while still allowing visual expression for key
            brand areas.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Mobile optimization was a major priority. We analyzed user behavior and discovered that a
            large portion of the audience accessed content on weekends via mobile devices. This insight
            drove the creation of new mobile-first features and an app experience that encouraged
            continuous engagement.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            For the magazine integration, we collaborated with the IT and editorial teams to design a
            seamless digital reading experience. The result allowed the magazine to retain its unique
            identity while functioning as part of the main site’s ecosystem.
          </p>
        </section>

        {/* === Impact === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Impact</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Unified web, app, and publication experiences under a single design system.</li>
            <li>Increased mobile engagement and content accessibility.</li>
            <li>Streamlined collaboration across internal teams (IT, editorial, design).</li>
            <li>Established scalable design patterns for future expansion.</li>
          </ul>
        </section>

        {/* === Key Skills === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Skills Demonstrated</h2>
          <p className="text-zinc-300 leading-relaxed">
            UX Strategy · Responsive Design · Component-Based Systems · Collaboration · Mobile Design · Product Thinking · Digital Publishing Integration
          </p>
        </section>

        {/* === Reflection === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-zinc-300 leading-relaxed">
            This project reinforced the importance of designing for both scalability and storytelling.
            By unifying In Touch’s digital properties, we gave their teams a flexible design system
            that continues to serve new audiences while maintaining the integrity of their message and
            brand.
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
            onClick={() => askAIAbout("In Touch Ministries")}
            className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition text-sm"
          >
            Ask My AI Assistant
          </button>
        </div>
      </article>
    </main>
  );
}
