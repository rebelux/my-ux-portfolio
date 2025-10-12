"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredProjects = [
    {
      title: "CDC – NBS Modernization",
      subtitle: "Modernizing public health data systems through human-centered design.",
      image: "/images/cdc-nbs-modernization-hero.jpg",
      link: "/projects/cdc-nbs-modernization",
    },
    {
      title: "CMS – Identity Management Modernization",
      subtitle: "Improving secure access to healthcare systems through usability and accessibility.",
      image: "/images/cms-identity-management-hero.jpg",
      link: "/projects/cms-identity-management",
    },
    {
      title: "Arrow Digital – UX Discovery Process",
      subtitle: "Establishing a repeatable design process that shaped company-wide transformation.",
      image: "/images/arrow-digital-hero.jpg",
      link: "/projects/arrow-digital-ux-discovery",
    },
  ];

  return (
    <main className="bg-black text-zinc-100">
      {/* === Hero === */}
     <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I’m <span className="text-amber-500">Henry Tavarez</span>.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
            I design enterprise experiences that turn complexity into clarity and measurable impact.
          </p>

          <motion.button
            onClick={() => {
              if (typeof window !== "undefined" && window.botpress) {
                window.botpress.open();
                window.botpress.sendMessage?.(
                  "Hi! Can you tell me more about Henry’s work?"
                );
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl px-8 py-4 bg-amber-500 hover:bg-amber-600 transition text-lg font-medium"
          >
            Chat with my AI Assistant
          </motion.button>
        </motion.div>
      </section>



      {/* === About / Introduction === */}
      <section className="bg-zinc-950 py-24 px-6 text-center border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-6">
          I’m a UX Designer and Product Design Lead with over two decades of experience 
          bridging design, technology, and strategy.
        </p>
        <p className="text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          My work focuses on simplifying complexity—translating the needs of users, engineers, and 
          business leaders into cohesive, human-centered solutions that scale. My work focuses on 
          simplifying complexity—translating the needs of users, engineers, and business leaders into 
          cohesive, human-centered solutions that scale.
        </p>
        <Link
          href="/about"
          className="inline-block mt-8 text-amber-500 hover:text-amber-400 transition font-medium"
        >
          Learn More →
        </Link>
      </section>

      {/* === Featured Projects === */}
      <section className="max-w-6xl mx-auto px-6 py-24">
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

      {/* === AI Assistant Invite === */}
      <section className="bg-zinc-950 py-24 px-6 text-center border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">Meet My AI Portfolio Assistant</h2>
        <p className="text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Curious about my work or design approach?
          My AI Assistant can walk you through my projects, philosophy, and process — all trained 
          from my own portfolio.
        </p>

        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.botpress) {
              window.botpress.open();
              window.botpress.sendMessage?.(
                "Hi! I'd like to learn more about Henry’s design philosophy."
              );
            }
          }}
          className="rounded-xl px-8 py-4 bg-amber-500 hover:bg-amber-600 transition text-lg font-medium"
        >
          Chat Now
        </button>
      </section>

      {/* === Contact CTA === */}
      <section className="py-20 text-center border-t border-zinc-800">
        <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-zinc-400 mb-6">
          I’m always open to conversations about design leadership, UX strategy, and how design 
          drives transformation at scale.
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
