"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <section className="max-w-4xl w-full space-y-12">
        {/* === Header === */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold">About Henry Tavarez</h1>
          <h2 className="text-xl italic text-amber-500">
            Designing clarity and impact at enterprise scale.
          </h2>
        </header>

        {/* === Intro === */}
        <p className="text-zinc-300 leading-relaxed">
          I&rsquo;m a UX Designer and Product Design Lead with over two decades of experience bridging 
          design, technology, and strategy. My work centers on simplifying complexity — translating 
          the needs of users, engineers, and business leaders into cohesive, human-centered solutions that scale.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          I began my career in 2002 as a web designer and developer, where I learned to balance aesthetics 
          with functionality and collaborate seamlessly with engineering teams. Since 2008, I&rsquo;ve led design 
          initiatives across public health, higher education, finance, and enterprise technology — building 
          design practices from the ground up, modernizing legacy systems, and shaping design systems that 
          drive transformation at scale.
        </p>

        {/* === Design Philosophy === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Philosophy</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            I believe good design creates clarity. It removes friction, surfaces what matters, and builds 
            systems that empower people to do their best work.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            For me, design is both empathetic and analytical — it&rsquo;s about understanding human needs while 
            balancing technical and organizational realities. I often describe my work as <em>designing clarity 
            and impact at enterprise scale</em> — creating solutions that don&rsquo;t just look good, but perform beautifully 
            within the complexity of real-world systems.
          </p>
        </section>

        {/* === How I Work === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">How I Work</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Collaboration sits at the center of everything I do. Whether it&rsquo;s engineers, product managers, or 
            stakeholders, I make it a point to speak their language.
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>
              <strong>With engineers</strong>, I engage early to explore technical opportunities and constraints.
            </li>
            <li>
              <strong>With product managers</strong>, I co-own the vision and align on goals, metrics, and value.
            </li>
            <li>
              <strong>With stakeholders</strong>, I connect design decisions to measurable business 
              outcomes — translating usability into adoption, efficiency, and retention.
            </li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            I believe the best outcomes come from openness and iteration. My process blends research, 
            co-creation, prototyping, and validation — using workshops, design systems, and data to inform 
            decisions that scale.
          </p>
        </section>

        {/* === Leadership & Mentorship === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Leadership & Mentorship</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            As a leader, I focus on clarity, growth, and empowerment. I mentor designers through hands-on 
            feedback and structured guidance, helping them navigate both creative and organizational challenges.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            I see mentorship as a conversation, not a hierarchy — a chance to build confidence through 
            collaboration and curiosity. My teams know that feedback flows both ways, and that our shared 
            goal is to create meaningful, user-centered outcomes that make an impact.
          </p>
        </section>

        {/* === Defining Success === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Defining Success</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            I define success through outcomes, not deliverables. It&rsquo;s not about producing wireframes or 
            prototypes — it&rsquo;s about improving how people experience products.
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>A task that once took ten clicks now takes three.</li>
            <li>A design decision perfectly aligns with a business goal.</li>
            <li>A user feels confident, not confused.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            That&rsquo;s the kind of clarity I strive to design every day.
          </p>
        </section>

        {/* === Let’s Connect === */}
        <section className="text-center mt-12 space-y-4">
            <p className="text-zinc-400">
                I&rsquo;m always open to conversations about design leadership, systems thinking,
                and the evolving role of UX in enterprise environments.
                You can connect with me on&nbsp;
                <Link
                href="https://www.linkedin.com/in/henrytavarez/"
                target="_blank"
                className="text-amber-500 hover:text-amber-400"
                >
                LinkedIn
                </Link>
                &nbsp;or reach out&nbsp;
                <Link
                href="/contact"
                className="text-amber-500 hover:text-amber-400"
                >
                here
                </Link>
                .
            </p>
            </section>

        {/* === Optional Chat CTA === */}
        <section className="mt-16 text-center">
          <p className="text-zinc-400 mb-4">
            Want to learn more about my design philosophy?
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
      </section>
    </main>
  );
}
