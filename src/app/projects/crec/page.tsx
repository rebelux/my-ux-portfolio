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

export default function CRECPage() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <article className="max-w-4xl w-full space-y-12">
        {/* === Hero === */}
        <CaseStudyHero
          title="Central Electric Cooperative (CREC)"
          subtitle="Turning complex energy data into actionable insights."
          imageUrl="/images/crec-hero.jpg"
        />

        {/* === Meta === */}
        <section className="text-sm text-zinc-400 text-center">
          <p>
            <strong>Project Type:</strong> Mobile App & Web Application ·{" "}
            <strong>Client:</strong> Central Electric Cooperative (CREC)
          </p>
          <p>
            <strong>Company:</strong> Arrow Digital ·{" "}
            <strong>Timeline:</strong> 2016 – 2018
          </p>
          <p>
            <strong>Focus:</strong> Designing real-time data visualization tools and mobile access for operational teams managing power distribution and outage response.
          </p>
        </section>

        {/* === Overview === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Central Electric Cooperative (CREC) serves more than 20,000 meters across Oklahoma.
            The organization wanted to leverage its data more effectively to improve operational
            awareness and enhance service delivery. Our team was tasked with designing a suite of
            digital tools that could translate raw energy data into actionable insights.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Working closely with engineers and field technicians, we built an interactive Energy
            Dashboard that visualized real-time grid performance, outages, and forecasts.
            The design emphasized clarity, accessibility, and rapid comprehension—helping both
            operations center staff and field teams respond faster and more effectively.
          </p>
        </section>

        {/* === Impact === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Impact</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            The new system provided a unified operational view across CREC’s teams, displayed
            prominently on a 26-screen video wall in their operations center. Field techs accessed
            the same data through tablet and mobile views, ensuring that insights were shared in
            real time.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The project not only improved situational awareness but also increased efficiency,
            safety, and cross-team collaboration by bringing complex energy data into a
            human-centered interface.
          </p>
        </section>

        {/* === Key Skills === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Skills Demonstrated</h2>
          <p className="text-zinc-300 leading-relaxed">
            Data Visualization · UX Design · UI Design · Design Strategy · Cross-Functional Collaboration · Research & Field Observation
          </p>
        </section>

        {/* === Reflection === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-zinc-300 leading-relaxed">
            CREC was one of those rare projects where design literally illuminated understanding.
            By visualizing complex data and ensuring access from the field to the control room, we
            turned information into insight—and insight into action.
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
            onClick={() => askAIAbout("Central Electric Cooperative")}
            className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition text-sm"
          >
            Ask My AI Assistant
          </button>
        </div>
      </article>
    </main>
  );
}
