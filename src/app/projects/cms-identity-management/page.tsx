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

export default function CMSIdentityManagement() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <article className="max-w-4xl w-full space-y-12">
        {/* === Header === */}
        <CaseStudyHero
            title="CMS – Identity Management Modernization"
            subtitle="Streamlining secure access for healthcare data systems through human-centered design."
            imageUrl="/images/cms-identity-management-hero.jpg"
        />


        {/* === Meta === */}
        <section className="text-sm text-zinc-400 text-center">
          <p>
            <strong>Role:</strong> UX Design Lead ·{" "}
            <strong>Client:</strong> Centers for Medicare and Medicaid Services (CMS)
          </p>
          <p>
            <strong>Company:</strong> C-HIT · <strong>Timeline:</strong> 2021 – 2022
          </p>
          <p>
            <strong>Focus:</strong> Modernizing the Identity Management system to improve
            efficiency, accessibility, and usability for internal CMS staff and external vendors.
          </p>
        </section>

        {/* === Overview === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-zinc-300 leading-relaxed">
            CMS’s Identity Management (IDM) platform serves as the secure entry point for vendors
            and partners connecting to CMS data systems. The existing platform was outdated,
            inefficient, and difficult for both internal staff and external partners to navigate.
            As <strong>UX Design Lead</strong>, I led the redesign of this critical system,
            applying Human-Centered Design (HCD) principles to improve onboarding, enhance
            usability, and align the interface with the{" "}
            <strong>U.S. Web Design System (USWDS)</strong> standards.
          </p>
        </section>

        {/* === Challenge === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            The original IDM process was cumbersome for users and administrators alike. Key
            challenges included:
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Long, complex onboarding forms for new vendors.</li>
            <li>Inconsistent workflows between internal and external users.</li>
            <li>Accessibility and compliance gaps.</li>
            <li>Limited visibility into user status and request progress.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            The goal was to reduce friction in the onboarding process, increase transparency, and
            create a more accessible experience that scaled across user roles.
          </p>
        </section>

        {/* === Approach === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            I applied a collaborative and research-driven design process to uncover pain points and
            deliver solutions that balanced security, usability, and compliance.
          </p>

          <h3 className="text-xl font-semibold mb-2">Discovery & Co-Creation</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Conducted <strong>co-creation workshops</strong> with internal CMS employees to
            document workflows, map user pain points, and identify redundant steps. These sessions
            provided a shared understanding of inefficiencies and opportunities for improvement.
          </p>

          <h3 className="text-xl font-semibold mb-2">Collaboration with Product & Engineering</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Partnered with business analysts to refine user stories and clarify requirements.
            Collaborated closely with engineers to ensure all interface components followed{" "}
            <strong>USWDS</strong> guidelines and were built to specification.
          </p>

          <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Created wireframes and high-fidelity prototypes for improved task flows such as vendor
            registration, identity verification, and access management. Tested designs with internal
            staff and external vendors to validate usability and accessibility.
          </p>

          <h3 className="text-xl font-semibold mb-2">Usability Testing & Accessibility</h3>
          <p className="text-zinc-300 leading-relaxed">
            Performed recorded usability sessions to identify workflow gaps and refine interactions.
            Each screen was reviewed for Section 508 compliance, ensuring accessibility standards
            were met for all users.
          </p>
        </section>

        {/* === Outcomes === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Outcomes & Impact</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Streamlined vendor onboarding with simplified workflows.</li>
            <li>Reduced redundant steps and form fields for CMS employees.</li>
            <li>Improved accessibility and consistency through USWDS standards.</li>
            <li>Delivered clearer communication between internal teams and external partners.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            The modernization effort improved day-to-day operations and laid the groundwork for
            scalable, accessible system upgrades across CMS.
          </p>
        </section>

        {/* === Key Skills === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Skills Demonstrated</h2>
          <p className="text-zinc-300 leading-relaxed">
            Human-Centered Design (HCD) · Design Systems (USWDS) · Accessibility & Section 508
            Compliance · Prototyping & Usability Testing · Cross-Functional Collaboration · Agile
            Product Development · Workshop Facilitation
          </p>
        </section>

        {/* === Reflection === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-zinc-300 leading-relaxed">
            This project reaffirmed the importance of empathy and collaboration in enterprise UX. By
            aligning design with both technical infrastructure and user needs, we delivered a
            solution that improved workflow efficiency and accessibility—without compromising
            security or compliance.
          </p>
        </section>

        {/* === Footer === */}
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          <Link href="/projects" className="text-amber-500 hover:text-amber-400 transition">
            ← Back to Projects
          </Link>
          <button
            onClick={() => askAIAbout("CMS – Identity Management Modernization")}
            className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition text-sm"
            >
            Ask My AI Assistant
            </button>

        </div>
      </article>
    </main>
  );
}
