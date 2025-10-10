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


export default function ArrowDigitalDiscovery() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <article className="max-w-4xl w-full space-y-12">
        {/* === Header === */}
        <CaseStudyHero
            title="Arrow Digital – Building a UX Discovery Process"
            subtitle="Transforming a development-focused company into a user-centered design practice."
            imageUrl="/images/arrow-digital-hero.jpg"
        />


        {/* === Meta === */}
        <section className="text-sm text-zinc-400 text-center">
          <p>
            <strong>Role:</strong> Senior Associate → Creative Director → Partner, UX Practice Lead
          </p>
          <p>
            <strong>Company:</strong> Arrow Digital · <strong>Timeline:</strong> 2011 – 2018
          </p>
          <p>
            <strong>Focus:</strong> Establishing and scaling a UX Discovery Process to integrate
            user-centered design into software development.
          </p>
        </section>

        {/* === Overview === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-zinc-300 leading-relaxed">
            When I joined Arrow Digital, it was a small software boutique of about 12 employees—
            mostly engineers and project managers. The company produced technically sound
            solutions, but lacked a structured approach to understanding user needs or aligning
            designs with business strategy.
          </p>
          <p className="text-zinc-300 leading-relaxed mt-4">
            Over seven years, I helped evolve that environment into a mature, human-centered design
            practice. By introducing a repeatable UX discovery process, I transformed how the
            company scoped projects, collaborated with clients, and delivered value—eventually
            scaling our UX team and contributing to the company&rsquo;s growth to over 200 employees.
          </p>
        </section>

        {/* === Opportunity === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Opportunity</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            At the time, Arrow Digital had no formal UX practice. Projects were driven by technical
            requirements, often with minimal user input. This led to:
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>
              <strong>Engineer-focused solutions</strong> that overlooked real user workflows.
            </li>
            <li>
              <strong>Inconsistent client outcomes</strong> and rework during implementation.
            </li>
            <li>
              <strong>Inefficient scoping</strong> due to unclear requirements expanding mid-project.
            </li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            The opportunity was clear: establish a structured UX process that aligned design,
            development, and business goals from day one.
          </p>
        </section>

        {/* === Creating the Process === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Creating the UX Discovery Process</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            To address these challenges, I designed and implemented a{" "}
            <strong>UX Discovery Framework</strong> that became the foundation of every project.
            The process focused on four key dimensions:
          </p>

          <h3 className="text-xl font-semibold mb-2">1. Problem Framing</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Defined and articulated the core challenge before design began. This ensured every team
            member—from engineers to stakeholders—shared a unified understanding of the problem we
            were solving.
          </p>

          <h3 className="text-xl font-semibold mb-2">2. User Understanding</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Introduced user research methods such as <strong>interviews, surveys, and contextual
            mapping</strong> to uncover user behaviors, motivations, and pain points. These insights
            shifted the focus from building features to solving meaningful problems.
          </p>

          <h3 className="text-xl font-semibold mb-2">3. Stakeholder Alignment</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Facilitated workshops and kickoff sessions to align client expectations, project vision,
            and success metrics early in the process. This collaborative approach built trust and
            reduced misalignment later in development.
          </p>

          <h3 className="text-xl font-semibold mb-2">4. Contextual Research</h3>
          <p className="text-zinc-300 leading-relaxed">
            Encouraged competitive and market analysis to position each product strategically within
            its domain. This helped identify differentiation opportunities and guided product
            direction.
          </p>
        </section>

        {/* === Process in Action === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Process in Action</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            The UX Discovery Process became the backbone of Arrow Digital&rsquo;s project lifecycle. We
            incorporated it into <strong>proposal development, planning sessions, and design
            delivery</strong>, ensuring every engagement started with empathy and evidence.
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Clients gained clearer, evidence-based project scopes.</li>
            <li>Developers had validated requirements and fewer late-stage changes.</li>
            <li>Designers produced solutions grounded in real user needs.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            The process not only improved project quality but also enhanced the company&rsquo;s reputation
            for delivering thoughtful, high-impact solutions.
          </p>
        </section>

        {/* === Organizational Impact === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Organizational Impact</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Reduced rework and development waste, saving time and cost.</li>
            <li>Improved client satisfaction and retention through consistent outcomes.</li>
            <li>Expanded service offerings—wireframing, usability testing, and content design became standard deliverables.</li>
            <li>Higher win rates on proposals and larger project contracts.</li>
            <li>Company growth from 12 to over 200 employees with a 15-person UX team.</li>
            <li>Positioned Arrow Digital for acquisition by Cognizant in 2018.</li>
          </ul>
        </section>

        {/* === Leadership & Legacy === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Leadership & Legacy</h2>
          <p className="text-zinc-300 leading-relaxed">
            As Partner and UX Practice Lead, I focused on scaling both people and process. I
            mentored designers, developed reusable frameworks, and represented UX in executive
            discussions. The team culture emphasized{" "}
            <strong>collaboration, curiosity, and continuous improvement</strong>—values that became
            embedded in Arrow Digital&rsquo;s identity.
          </p>
        </section>

        {/* === Key Skills === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Skills Demonstrated</h2>
          <p className="text-zinc-300 leading-relaxed">
            UX Strategy & Process Design · Leadership & Mentorship · Stakeholder Management ·
            Research & Facilitation · Cross-Functional Collaboration · Business Development
            Alignment · Team Building
          </p>
        </section>

        {/* === Reflection === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-zinc-300 leading-relaxed">
            This experience taught me that creating a UX practice isn&rsquo;t just about design—it&rsquo;s about
            changing how an organization thinks. By integrating discovery, research, and
            collaboration into every phase of work, we built more than a process; we built a culture
            of design thinking that elevated the company&rsquo;s entire delivery model.
          </p>
        </section>

        {/* === Footer === */}
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          <Link href="/projects" className="text-amber-500 hover:text-amber-400 transition">
            ← Back to Projects
          </Link>
          <button
            onClick={() => askAIAbout("Arrow Digital – Building a UX Discovery Process")}
            className="rounded-xl px-6 py-3 bg-amber-500 hover:bg-amber-600 transition text-sm"
            >
            Ask My AI Assistant
            </button>

        </div>
      </article>
    </main>
  );
}
