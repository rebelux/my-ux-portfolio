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

export default function PwCPage() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <article className="max-w-4xl w-full space-y-12">
        {/* === Hero === */}
        <CaseStudyHero
          title="PwC – Enterprise Application Suite"
          subtitle="Driving design consistency and efficiency across a global software ecosystem."
          imageUrl="/images/pwc-hero.jpg"
        />

        {/* === Meta === */}
        <section className="text-sm text-zinc-400 text-center">
          <p>
            <strong>Project Type:</strong> Enterprise Web Application Suite ·{" "}
            <strong>Client:</strong> PwC (PricewaterhouseCoopers)
          </p>
          <p>
            <strong>Company:</strong> Arrow Digital ·{" "}
            <strong>Role:</strong> Partner & Head of UX
          </p>
          <p>
            <strong>Focus:</strong> Creating a unified design system and strategy across dozens of
            enterprise applications used by global auditing, tax, and consulting teams.
          </p>
        </section>

        {/* === Overview === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            PwC, the world’s largest professional services firm, invested heavily in building
            internal software to support its global workforce of auditors, tax specialists, and
            consultants. Our team partnered with PwC over several years to design and deliver more
            than two dozen enterprise applications—each critical to daily operations and client
            service delivery.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            As <strong>Partner and Head of UX</strong> at Arrow Digital, I guided the overall design
            strategy, led cross-functional teams, and developed a scalable design system to unify the
            experience across this extensive suite of tools.
          </p>
        </section>

        {/* === Challenge === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            With more than 20 internally built applications—each owned by different product teams—
            PwC faced challenges around consistency, usability, and development efficiency.
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Inconsistent interfaces and interaction patterns across tools.</li>
            <li>Fragmented workflows that caused redundant effort and confusion.</li>
            <li>Design debt accumulated from parallel development timelines.</li>
            <li>Lack of unified accessibility or branding standards.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            We needed to step back and create a cohesive foundation—a shared system that would scale
            across products and teams worldwide.
          </p>
        </section>

        {/* === Impact === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Impact</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            By developing a consistent design system and framework, we dramatically reduced
            time-to-market and improved product quality. Dashboards and reporting tools became more
            intuitive, allowing accountants and consultants to focus on insights rather than
            navigation.
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Created a scalable component library for all PwC digital products.</li>
            <li>Reduced redundant UI design and front-end development by over 40%.</li>
            <li>Improved usability testing scores across multiple product lines.</li>
            <li>Established long-term UX governance and brand consistency globally.</li>
          </ul>
        </section>

        {/* === Key Skills === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Skills Demonstrated</h2>
          <p className="text-zinc-300 leading-relaxed">
            UX Strategy · Design Systems · Leadership & Mentorship · Enterprise UX · UI Design ·
            Stakeholder Alignment · Agile Collaboration
          </p>
        </section>

        {/* === Reflection === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-zinc-300 leading-relaxed">
            This project highlighted the value of systems thinking in enterprise UX. A unified design
            language doesn’t just improve visual consistency—it transforms how teams collaborate,
            scale, and deliver value. Establishing a shared design system allowed PwC’s global teams
            to move faster and deliver with greater confidence and cohesion.
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
            onClick={() => askAIAbout("PwC")}
            className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition text-sm"
          >
            Ask My AI Assistant
          </button>
        </div>
      </article>
    </main>
  );
}
