"use client";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <section className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8">Résumé</h1>
        <p className="text-zinc-400 mb-12">
          Here’s a concise overview of my professional experience, leadership background, and core
          design skills. A downloadable PDF version is available below.
        </p>

        {/* === Professional Experience === */}
        <section className="text-left space-y-12">
          <h2 className="text-2xl font-bold border-b border-zinc-800 pb-4 mb-8">
            Professional Experience
          </h2>

          {/* === CDW === */}
          <div>
            <h3 className="text-amber-500 text-xl font-semibold">UX Lead</h3>
            <p className="text-zinc-400">CDW-G — 2022–Present</p>
            <p className="text-zinc-300 leading-relaxed mt-2 mb-4">
              Leading UX design initiatives for the modernization of the CDC’s National Disease
              Surveillance (NBS) platform—enhancing usability, scalability, and accessibility across
              public health agencies nationwide.
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>
                Designed and governed the NBS design system using the U.S. Web Design System (USWDS)
                as a foundation.
              </li>
              <li>
                Facilitated co-creation workshops with public health users nationwide to inform and
                validate design direction.
              </li>
              <li>
                Partnered with stakeholders to define requirements and deliver measurable design
                outcomes.
              </li>
              <li>
                Mentored UX designers, reinforcing a strong Human-Centered Design (HCD) practice
                grounded in collaboration and iteration.
              </li>
            </ul>
          </div>

          {/* === C-HIT === */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-amber-500 text-xl font-semibold">
              Human-Centered Design Lead
            </h3>
            <p className="text-zinc-400">C-HIT — 2021–2022</p>
            <p className="text-zinc-300 leading-relaxed mt-2 mb-4">
              Led HCD efforts for CMS’s Identity Management modernization, advocating for
              user-centered design and accessible, efficient workflows for internal and external
              users.
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Championed a research-based, user-focused approach across product teams.</li>
              <li>
                Collaborated directly with business owners and engineers to align goals, define
                requirements, and ensure implementation met both user and technical needs.
              </li>
              <li>
                Guided implementation of a design system aligned with USWDS standards within an
                Agile (SAFe) environment.
              </li>
            </ul>
          </div>

          {/* === Rebel UX === */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-amber-500 text-xl font-semibold">
              Founder & Head of User Experience
            </h3>
            <p className="text-zinc-400">Rebel UX — 2018–2021</p>
            <p className="text-zinc-300 leading-relaxed mt-2 mb-4">
              Founded and led a UX consultancy focused on designing human-centered products and
              services for startups, government agencies, and enterprise clients.
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>
                Built scalable design systems (USWDS, Material) for federal and enterprise software
                projects.
              </li>
              <li>
                Partnered with clients including PwC, CMS, Total Wine, and AAMC on end-to-end UX
                strategy and design execution.
              </li>
            </ul>
          </div>

          {/* === Arrow Digital (Partner) === */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-amber-500 text-xl font-semibold">Partner, User Experience</h3>
            <p className="text-zinc-400">Arrow Digital (Acquired by Cognizant) — 2016–2018</p>
            <p className="text-zinc-300 leading-relaxed mt-2 mb-4">
              Oversaw Arrow Digital’s UX practice, driving vision, methodology, and client strategy
              for large-scale digital initiatives.
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>
                Scaled the UX team into a mature practice generating over $3M in annual revenue.
              </li>
              <li>
                Led UX strategy for PwC’s financial software suite—representing over $10M in annual
                revenue.
              </li>
              <li>
                Mentored senior associates, codifying Arrow’s UX delivery model and leadership
                culture.
              </li>
              <li>
                Oversaw major digital initiatives for Cracker Barrel, GL Homes, Hilton, and In Touch
                Ministries.
              </li>
            </ul>
          </div>

          {/* === Arrow Digital (Creative Director) === */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-amber-500 text-xl font-semibold">Creative Director</h3>
            <p className="text-zinc-400">Arrow Digital — 2011–2015</p>
            <p className="text-zinc-300 leading-relaxed mt-2 mb-4">
              Led a multidisciplinary team of designers and UX professionals to deliver interactive
              web and enterprise solutions from concept to completion.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Introduced user-centered design principles to the firm’s development process,
              significantly improving interface quality and client outcomes.
            </p>
          </div>

          {/* === Early Roles === */}
          <div className="border-t border-zinc-800 pt-8 space-y-4">
            <h3 className="text-amber-500 text-xl font-semibold">Earlier Roles</h3>
            <div>
              <p className="text-zinc-300">
                <strong>UX Lead / Senior Associate</strong> — Arrow Digital • 2010–2011
              </p>
              <p className="text-zinc-400">
                Led discovery, design, and implementation for enterprise clients such as Hilton and
                PwC; introduced UX processes that improved project scoping and delivery.
              </p>
            </div>
            <div>
              <p className="text-zinc-300">
                <strong>User Interface Architect</strong> — ResumeSponge • 2010
              </p>
              <p className="text-zinc-400">
                Built scalable front-end architecture and interactive prototypes to accelerate design
                iteration and testing.
              </p>
            </div>
            <div>
              <p className="text-zinc-300">
                <strong>Senior Interaction Designer</strong> — Campus Management Corp • 2008–2010
              </p>
              <p className="text-zinc-400">
                Designed and implemented accessible, web-based interfaces for enterprise education
                software, ensuring 508 compliance and scalability.
              </p>
            </div>
            <div>
              <p className="text-zinc-300">
                <strong>Interactive Art Director</strong> — Extinction Level • 2005–2010
              </p>
              <p className="text-zinc-400">
                Led creative for digital campaigns and experiences for brands such as Nike, BMW
                Mini, Virgin Atlantic, and CareerBuilder.
              </p>
            </div>
          </div>
        </section>

        {/* === Core Skills === */}
        <section className="mt-16 text-left border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
          <p className="text-zinc-300">
            UX Strategy · Research & Synthesis · Design Systems (USWDS) · Accessibility (Section
            508) · Prototyping · Workshop Facilitation · Leadership & Mentorship · Stakeholder
            Collaboration · Agile Delivery · Figma · Miro
          </p>
        </section>

        {/* === Education === */}
        <section className="mt-16 text-left border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-bold mb-4">Education & Military</h2>
          <div>
            <p className="text-zinc-300 font-semibold">
              Art Institute of Fort Lauderdale
            </p>
            <p className="text-zinc-400 mb-4">B.S. — Interactive Media Design, 2005</p>
          </div>
          <div>
            <p className="text-zinc-300 font-semibold">United States Marine Corps</p>
            <p className="text-zinc-400">Communications</p>
          </div>
        </section>

        {/* === PDF Download === */}
        <div className="mt-16 text-center">
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

      {/* === Chat CTA === */}
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
