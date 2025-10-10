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
          I’m a UX Designer and Product Design Lead with over two decades of experience
          bridging design, technology, and strategy. My work focuses on simplifying
          complexity—translating the needs of users, engineers, and business leaders
          into cohesive, human-centered solutions that scale.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          I began my career as a web designer and developer in 2002, where I learned to
          blend aesthetics with functionality and communicate seamlessly with engineering
          teams. In 2008, I transitioned fully into UX and have since led design initiatives
          across industries such as public health, higher education, finance, and enterprise
          technology. I’ve built design practices from the ground up, led modernization
          efforts for federal agencies, and shaped design systems that have become the
          foundation for large-scale transformation.
        </p>

        {/* === Design Philosophy === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Philosophy</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            My design philosophy is rooted in the idea that good design creates clarity. I
            believe in removing friction, surfacing what matters, and designing systems that
            empower people to do their best work. For me, design is both empathetic and
            analytical—it’s about understanding human needs and balancing them with technical
            and organizational realities.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            I often describe my work as “designing clarity and impact at enterprise scale.”
            That means creating solutions that don’t just look good but perform under the
            complexity of real-world systems—solutions that are usable, accessible, and
            aligned with measurable business outcomes.
          </p>
        </section>

        {/* === How I Work === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">How I Work</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Collaboration is at the center of everything I do. Whether it’s engineers,
            product managers, or stakeholders, I make it a point to speak their language.
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>
              <strong>With engineers:</strong> I engage early, discussing technical
              constraints and opportunities.
            </li>
            <li>
              <strong>With product managers:</strong> I co-own the vision and align on
              goals, metrics, and value.
            </li>
            <li>
              <strong>With stakeholders:</strong> I connect design to business impact—
              translating usability into measurable results like adoption, efficiency, and
              retention.
            </li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            I believe the best outcomes come from openness and iteration. My process
            combines research, co-creation, prototyping, and validation—using workshops,
            design systems, and data to drive decisions.
          </p>
        </section>

        {/* === Leadership & Mentorship === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Leadership & Mentorship</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            As a leader, I focus on clarity, growth, and empowerment. I mentor designers
            through hands-on feedback and structured guidance, helping them navigate both
            creative and organizational challenges. I see mentorship as a conversation, not
            a hierarchy—a chance to build confidence through collaboration and curiosity.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            My teams know that feedback flows both ways and that our shared goal is to
            create meaningful, user-centered outcomes that make an impact.
          </p>
        </section>

        {/* === Defining Success === */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Defining Success</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            I define success through outcomes, not deliverables. It’s not about producing
            wireframes or prototypes—it’s about improving how people experience products.
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>A task that took ten clicks now takes three.</li>
            <li>A design decision aligns perfectly with a business goal.</li>
            <li>A user feels confident, not confused.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-4">
            That’s the kind of clarity I strive to design every day.
          </p>
        </section>

        {/* === Let’s Connect === */}
        <section className="text-center mt-12 space-y-4">
          <p className="text-zinc-400">
            I’m always open to conversations about design leadership, systems thinking,
            and the evolving role of UX in enterprise environments.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/henrytavarez/"
              target="_blank"
              className="text-amber-500 hover:text-amber-400"
            >
              Connect on LinkedIn
            </Link>
            <Link
              href="/contact"
              className="text-amber-500 hover:text-amber-400"
            >
              Contact Me
            </Link>
          </div>
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
