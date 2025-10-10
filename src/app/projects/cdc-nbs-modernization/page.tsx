"use client";

import Link from "next/link";
import CaseStudyHero from "@/components/CaseStudyHero";

// top of file (after imports)
function askAIAbout(projectTitle: string) {
  if (typeof window === "undefined" || !window.botpress) return;

  const text = `Tell me about the ${projectTitle} case study.`;
  let sent = false;

  const trySend = () => {
    if (sent) return;
    sent = true;
    window.botpress?.sendMessage?.(text);
  };

  // Open chat, then try to send once it's ready/open.
  window.botpress.open();
  window.botpress.on?.("webchat:ready", trySend);
  window.botpress.on?.("webchat:opened", trySend);

  // Fallback in case events have already fired
  setTimeout(trySend, 300);
}

export default function CDCNbsModernization() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <article className="max-w-4xl w-full space-y-12">
        {/* === Header === */}
        <CaseStudyHero
            title="CDC – NBS Modernization"
            subtitle="Transforming public health data systems through human-centered design."
            imageUrl="/images/cdc-nbs-modernization-hero.jpg"
        />


        {/* === Meta === */}
        <section className="text-sm text-zinc-400 text-center">
          <p>
            <strong>Role:</strong> UX Design Lead ·{" "}
            <strong>Client:</strong> Centers for Disease Control and Prevention (CDC)
          </p>
          <p>
            <strong>Company:</strong> CDW (Public Sector Cloud Practice) ·{" "}
            <strong>Timeline:</strong> 2022 – Present
          </p>
          <p>
            <strong>Focus:</strong> Modernizing the National Disease Surveillance (NBS)
            platform to enhance usability, scalability, and accessibility.
          </p>
        </section>

        {/* === Overview === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-zinc-300 leading-relaxed">
            The CDC partnered with CDW to modernize its disease surveillance infrastructure,
            migrating legacy systems to a cloud-based platform that could better serve public
            health professionals across the U.S. As <strong>UX Design Lead</strong>, I was
            responsible for driving the human-centered design (HCD) process, leading discovery
            and co-creation with public health users, and building a scalable design system
            aligned with federal standards.
          </p>
        </section>

        {/* === The Challenge === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            The existing NBS platform was built on outdated technology that limited speed,
            flexibility, and collaboration. Public health professionals faced challenges such as:
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Slow data ingestion and limited real-time analytics.</li>
            <li>Complex and inconsistent workflows across jurisdictions.</li>
            <li>Accessibility gaps and non-compliance with Section 508.</li>
            <li>Fragmented systems that slowed response during health emergencies.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            Our goal was to deliver a <strong>secure, accessible, and intuitive</strong> cloud
            platform that improved efficiency and supported timely public health decisions.
          </p>
        </section>

        {/* === My Approach === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            I led an iterative, research-driven design process grounded in empathy and collaboration.
          </p>

          <h3 className="text-xl font-semibold mb-2">User Research & Discovery</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            We conducted <strong>user interviews, surveys, and contextual inquiries</strong> with
            health professionals from state, tribal, local, and territorial (STLT) agencies. These
            sessions uncovered critical pain points around navigation, data entry, and cross-agency
            communication.
          </p>

          <h3 className="text-xl font-semibold mb-2">Co-Creation & Ideation</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            I facilitated <strong>co-creation workshops</strong> where users, stakeholders, and
            product teams worked together to reimagine workflows and validate design concepts.
            Outputs included early sketches, task flows, and Miro-based prototypes that informed
            design priorities.
          </p>

          <h3 className="text-xl font-semibold mb-2">Iterative Design & Testing</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Using Figma and USWDS components, I developed interactive prototypes to test new
            patterns for patient search, record filtering, and data visualization. Designs were
            validated through multiple feedback loops with subject-matter experts and refined based
            on usability insights.
          </p>

          <h3 className="text-xl font-semibold mb-2">Design System Leadership</h3>
          <p className="text-zinc-300 leading-relaxed">
            The project required expanding and customizing the{" "}
            <strong>U.S. Web Design System (USWDS)</strong> to support complex enterprise use cases.
            I partnered closely with front-end engineers to create new components, ensure
            accessibility compliance, and maintain visual consistency across modules.
          </p>
        </section>

        {/* === Outcomes === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Outcomes & Impact</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Streamlined workflows reduced search and entry times for case records.</li>
            <li>Consistent, accessible design improved usability for a diverse workforce.</li>
            <li>Real-time data visualization enabled faster outbreak detection and response.</li>
            <li>Positive user feedback confirmed improved clarity and task efficiency.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            Beyond interface improvements, the project established a repeatable UX framework for
            future CDC modernization efforts.
          </p>
        </section>

        {/* === Key Skills === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Skills Demonstrated</h2>
          <p className="text-zinc-300 leading-relaxed">
            Design Systems (USWDS) · Accessibility & Section 508 Compliance · Co-Creation &
            Facilitation · User Research & Synthesis · Prototyping & Iterative Design · Stakeholder
            Collaboration · Cross-Functional Alignment
          </p>
        </section>

        {/* === Reflection === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-zinc-300 leading-relaxed">
            This project reinforced the power of human-centered design in government systems. By
            involving users throughout the process, we built not just a tool—but a platform that
            empowers public health professionals to act quickly, confidently, and collaboratively
            in moments that matter most.
          </p>
        </section>

        {/* === Back link + Chat CTA === */}
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          <Link
            href="/projects"
            className="text-amber-500 hover:text-amber-400 transition"
          >
            ← Back to Projects
          </Link>
            <button
                onClick={() => askAIAbout("CDC – NBS Modernization")}
                className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition text-sm"
                >
                Ask My AI Assistant
            </button>

        </div>
      </article>
    </main>
  );
}
