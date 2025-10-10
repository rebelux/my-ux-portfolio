"use client";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <section className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8">Résumé</h1>
        <p className="text-zinc-400 mb-12">
          Here&rsquo;s a concise overview of my experience and skills. A full PDF
          résumé is available below.
        </p>

        {/* === Experience placeholder === */}
        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              UX Lead
            </h2>
            <p className="text-zinc-400">
              CDW-G • 2022 – Present
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              Leading UX design initiatives for the modernization of the NBS surveillance tool in
                collaboration with the Centers for Disease Control and Prevention (CDC).</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Designed, managed, and governed the design system for the NBS Modernized
                application, utilizing the US Web Design System (USWDS) as a foundation.</li>
                <li>Facilitated co-creation workshops with users from public health departments
                nationwide to inform and advance the design of NBS.</li>
                <li>Collaborated closely with clients and stakeholders to elicit, document, and ideate on
                requirements and deliverables.</li>
                <li>Provided mentorship to a team of UX Designers, guiding them through our Human-
                Centered Design (HCD) methodology by oﬀering design and UX expertise and review.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              Human Centered Design Lead
            </h2>
            <p className="text-zinc-400">
              C-HIT • 2021 – 2022
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              Led HCD processes for the Identity Management team serving the US Centers for
                Medicare and Medicaid Services (CMS).</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Focused on advocating change towards a user-centric research based environment.</li>
                <li>Interface directly with the customer and business owners to gather, analyze, validate
                and document functional, business and user requirements.</li>
                <li>Support development staﬀ and SMEs to ensure requirements meet specifications and
                client expectations.</li>
                <li>Assist with implementation of a design system for their IDM Portal application based
                on the US Web Design System (USWDS).</li>
                <li>Operate within an Agile environment (SAFe).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              Founder/Head of User Experience
            </h2>
            <p className="text-zinc-400">
              Rebel UX • 2018 – 2021
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              Founded a user experience design consultancy in Washington, DC with the goal to
                design great digital products, apps and experiences for its customers. Provided user
                experience, interface design and product strategy services.</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Implemented design systems (USWDS, Material) for government agencies and
                enterprise software projects.</li>
                <li>Consulted with small startups, government agencies and Fortune 500 companies
                such as PwC, Total Wine, Crossover, Centers for Medicare and Medicaid Services
                (CMS) and Association of American Medical Colleges (AAMC)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              Partner, User Experience
            </h2>
            <p className="text-zinc-400">
              Arrow Digital (Acquired by Cognizant) • 2016 – 2018
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              In my capacity as Partner of User Experience at Arrow Digital, I oversaw the User
                Experience practice and worked with clients to develop their vision, objectives and
                digital roadmaps - before working with Arrow&rsquo;s project teams to ensure their vision was
                met. At every point in the client&rsquo;s experience, it was my goal to create a unique and
                delightful experience by infusing Arrow&rsquo;s expertise and values across all clients,
                products, services, and interpersonal interactions.</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Grew small UX team into a successful practice area responsible for $3 million in
                annual billable revenue.</li>
                <li>Led the overall UX strategy for all financial tech software projects with largest client,
                PwC, which accounted for over $10 million in annual revenue.</li>
                <li>Scaled UX methodologies and mentored senior associates to manage multiple work
                streams across consumer and enterprise clients while adhering to Arrow&rsquo;s standards
                and values.</li>
                <li>Oversaw major digital projects for Cracker Barrel, GL Homes, Hilton and In Touch
                Ministries.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              Creative Director
            </h2>
            <p className="text-zinc-400">
              Arrow Digital (Acquired by Cognizant) • 2011 – 2015
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              As the Creative Director, I led a team of very talented web designers and UX
                professionals. This multi-disciplinary leadership role revolved around leading the design
                of highly interactive web and enterprise solutions from concept to completion as well as
                translating business goals and user needs into UX strategies.</p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              By infusing UCD methodology into the very successful software development life-cycle
                here at Arrow, I was able to increase the quality of the user interfaces for both the web
                design and enterprise software portions of our business.</p>
          </div>
          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              UX Lead / Senior Associate
            </h2>
            <p className="text-zinc-400">
              Arrow Digital (Acquired by Cognizant) • 2010 – 2011
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              Led the user experience discovery, research, design, and implementation of several
                projects for a wide variety of clients including Hilton, PwC, and Virginia Credit Union.</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Designed the default skin and template used for version 6 of DotNetNuke&rsquo;s Content
                Management System which had been downloaded and used over 330K times in the
                first 6 months.</li>
                <li>Implemented a UX discovery process which allowed the company to better scope
                projects and implement higher quality designs that better met the client&rsquo;s objectives.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              User Interface Architect
            </h2>
            <p className="text-zinc-400">
              ResumeSponge • 2010
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              Led all front-end architecture and development. At ResumeSponge, my focus was to
                implement interactive design interfaces, and architect front-end coding practices to
                ensure growth and scalability. Collaborated with outside agency to test designs and
                iterate on interfaces.</p>
          </div>
          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              Senior Interaction Designer
            </h2>
            <p className="text-zinc-400">
              Camous Management Corp • 2008 – 2010
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              Established a signature brand and UI for the company&rsquo;s corporate web site. Developed
                the framework used for creating both the UI prototypes and the future architecture of
                their software presentation layer. Designed and developed the full design system for the
                UI of the entire suite of products as they transition from legacy desktop software into
                web applications. Use of semantic web standards and progressive enhancement
                techniques have added increased usability, accessibility and made the applications 508
                compliant, making the software available to additional institutions and markets.</p>
          </div>
          <div>
            <h2 className="text-amber-500 text-xl font-semibold">
              Interactive Art Director
            </h2>
            <p className="text-zinc-400">
              Extinction Level • 2005 – 2010
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4 mt-2 ">
              Extinction Level is an interactive media design firm. Led projects to created websites,
                flash applications and other design projects for various companies such as Crispin
                Porter + Bogusky, Wieden+Kennedy, Slim Jim, Volkswagen, BMW Mini Cooper,
                CareerBuilder.com, Nike, Virgin Atlantic and eDiets.com.</p>
          </div>
        </div>

        {/* === Skills placeholder === */}
        <section className="mt-12 text-left">
          <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
          <p className="text-zinc-300">
            User Research · Prototyping · Wireframing · Design Systems (USWDS) · Accessibility (508) · UX Strategy · Stakeholder Management · Cross-Functional Collaboration · Leadership & Mentorship · Co-Creation Workshops · Agile · Figma · Miro
            </p>
        </section>
        <section className="mt-12 text-left">
            <h2 className="text-2xl font-bold mb-4">Education & Military</h2>
            <div>
                <p className="text-zinc-300">
                    <strong>Art Institute of Fort Lauderdale</strong>
                </p>
                <p className="text-zinc-400 mb-4">
                B.S. - Interactive Media Design • 2005
                </p>
            </div>
            <div>
                <p className="text-zinc-300">
                    <strong>United States Marine Corp</strong>
                </p>
                <p className="text-zinc-400 mb-4">
                Communications
                </p>
            </div>
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
