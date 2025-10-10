"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const featuredProjects = [
    {
      title: "CDC – NBS Modernization",
      subtitle: "Transforming public health data systems through HCD.",
      image: "/images/cdc-nbs-modernization-hero.jpg",
      link: "/projects/cdc-nbs-modernization",
    },
    {
      title: "CMS – Identity Management Modernization",
      subtitle: "Streamlining secure access for healthcare data systems.",
      image: "/images/cms-identity-management-hero.jpg",
      link: "/projects/cms-identity-management",
    },
    {
      title: "Arrow Digital – UX Discovery Process",
      subtitle: "Building a user-centered design culture within a dev-focused firm.",
      image: "/images/arrow-digital-hero.jpg",
      link: "/projects/arrow-digital-ux-discovery",
    },
  ];

  return (
    <main className="bg-black text-zinc-100">
      {/* === Hero === */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* === Animated Background Gradient === */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-fuchsia-500/10 to-blue-500/10 animate-gradient" />

        {/* === Overlay to Soften Contrast === */}
        <div className="absolute inset-0 bg-black/70" />

        {/* === Hero Content === */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Henry Tavarez</h1>
          <h2 className="text-xl text-zinc-400 mb-6">
            UX Designer & Product Design Lead
          </h2>
          <p className="text-zinc-300 max-w-2xl mb-8 leading-relaxed">
            Designing clarity and impact at enterprise scale. I help organizations
            transform complexity into clarity through human-centered design.
          </p>

          <button
            onClick={() => {
              if (typeof window !== "undefined" && window.botpress) {
                window.botpress.open();
                window.botpress.sendMessage?.(
                  "Hi! Can you tell me more about Henry’s work?"
                );
              }
            }}
            className="rounded-xl px-8 py-4 bg-amber-500 hover:bg-amber-600 transition text-lg font-medium"
          >
            Chat with my AI Assistant
          </button>
        </div>
      </section>


      {/* === Featured Projects === */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((proj) => (
            <Link
              href={proj.link}
              key={proj.title}
              className="group block bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500 transition"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold text-amber-400">{proj.title}</h3>
                <p className="text-sm text-zinc-400 italic">{proj.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="text-amber-500 hover:text-amber-400 transition font-medium"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* === About Preview === */}
      <section className="bg-zinc-950 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Design Philosophy</h2>
        <p className="text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          I believe good design creates clarity. My work focuses on simplifying
          complex systems, aligning technology and human needs, and building
          experiences that scale with empathy and precision.
        </p>
        <Link
          href="/about"
          className="inline-block mt-8 text-amber-500 hover:text-amber-400 transition font-medium"
        >
          Read More →
        </Link>
      </section>

      {/* === Contact CTA === */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-zinc-400 mb-6">
          I’m always open to discussing design leadership, UX strategy, and
          system design.
        </p>
        <div className="space-x-4">
          <Link
            href="/contact"
            className="rounded-lg px-6 py-3 bg-amber-500 hover:bg-amber-600 transition font-medium"
          >
            Contact Me
          </Link>
          <Link
            href="https://www.linkedin.com/in/henrytavarez/"
            target="_blank"
            className="rounded-lg px-6 py-3 border border-amber-500 hover:bg-amber-500 hover:text-black transition font-medium"
          >
            LinkedIn
          </Link>
        </div>
      </section>
    </main>
  );
}
