"use client"; 

function ProjectCardFrosted({
  title,
  subtitle,
  image,
  href,
  className = "",
}: {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group block p-8 md:p-10 project-card overflow-hidden ${className}`}
    >
      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-bg] via-[--color-bg]/10 to-transparent" />
      </div>
      <div className="p-7 sm:p-8">
        <h3 className="font-serif text-2xl text-[--color-text] mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-[--color-text-muted] font-sans text-[15px] leading-relaxed">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { glacialDepth } from "@/theme/glacialDepth";
import MotionButton from "@/components/ui/MotionButton";

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
    <main className="bg-[--color-bg] text-[--color-text] font-sans">
{/* === Hero Section (Refined Hierarchy) === */}
<section className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-32 pb-24 md:pb-28 bg-[--color-bg]">
  {/* Headline */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="font-serif text-[2rem] md:text-[3.25rem] leading-[1.15] text-[--color-text] font-light tracking-tight mb-4 max-w-3xl"
  >
    <span className="block text-[--color-text]">
      Crafting clarity from complexity.
    </span>
  </motion.h1>

  {/* Subheading */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    className="text-[--color-text-muted] text-lg md:text-[1.25rem] leading-relaxed max-w-2xl mb-10"
  >
    I’m <span className="name-highlight text-[--color-accent] font-medium">Henry Tavarez</span>, a UX design lead focused on modernizing complex systems and helping teams turn strategy into seamless user experiences.
  </motion.p>

  {/* CTA */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  >
    <MotionButton href="" variant="accent">
            Chat with my AI Assistant
          </MotionButton>
  </motion.div>

  {/* Ambient glow */}
  <motion.div
    className="absolute top-[65%] left-[50%] w-[500px] h-[500px] rounded-full blur-[160px] bg-[--color-accent]/10 -z-10"
    animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
  />
  {/* Hero → About fade handoff */}
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[--color-bg-alt] pointer-events-none" />

</section>




{/* === About Section === */}
<section className="section-gradient pt-20 md:pt-28 pb-24 md:pb-32 px-6 relative z-10">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
    {/* Left column */}
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-serif text-[--color-text] mb-8"
      >
        About Me
      </motion.h2>

      <p className="text-[--color-text-muted] leading-relaxed mb-6">
        I&apos;m a UX Designer and Product Design Lead with over two decades of experience bridging design, technology, and strategy.
      </p>
      <p className="text-[--color-text-muted] leading-relaxed mb-8">
        My work focuses on simplifying complexity—translating the needs of users, engineers, and business leaders into cohesive, human-centered solutions that scale.
      </p>

      <Link
        href="/about"
        className="inline-block text-[--color-accent] font-medium hover:opacity-80 transition"
      >
        Learn More →
      </Link>
    </div>

    {/* Right column */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-[--color-card] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] aspect-[4/3]"
    />
  </div>
  {/* About → Projects fade handoff */}
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[--color-bg]" />
</section>


      {/* === Featured Projects (Offset) === */}
      <section className="relative z-10 section-alt overflow-hidden pt-28 md:pt-36">
        {/* soft top wash instead of hard border */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[--color-bg-alt] via-[--color-bg]/40 to-[--color-bg]/80" />
        
        <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4x1 font-serif text-center text-[--color-text]"
        >
          Featured Projects
        </motion.h2>

        {/* Offset grid (non-overlapping, visually staggered) */}
        <div className="mt-16 md:mt-24 grid gap-8 md:gap-10 lg:grid-cols-12">
          {/* Left card */}
          <div className="lg:col-span-6 lg:pr-6 order-1 flex justify-center lg:justify-end">
            <div className="lg:translate-y-6">
              <ProjectCardFrosted
                title={featuredProjects[0].title}
                subtitle={featuredProjects[0].subtitle}
                image={featuredProjects[0].image}
                href={featuredProjects[0].link}
              />
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-6 lg:pl-6 order-2 flex justify-center lg:justify-start">
            <div className="lg:-translate-y-4">
              <ProjectCardFrosted
                title={featuredProjects[1].title}
                subtitle={featuredProjects[1].subtitle}
                image={featuredProjects[1].image}
                href={featuredProjects[1].link}
              />
            </div>
          </div>

          {/* Bottom centered card */}
          <div className="lg:col-span-12 order-3 mt-12 lg:mt-16 flex justify-center">
            <div className="lg:w-2/3">
              <ProjectCardFrosted
                title={featuredProjects[2].title}
                subtitle={featuredProjects[2].subtitle}
                image={featuredProjects[2].image}
                href={featuredProjects[2].link}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <Link href="/projects" className="text-[--color-accent] hover:opacity-80 transition font-medium">
            View All Projects →
          </Link>
        </div>
      </div>
        {/* ambient glow */}
        <motion.div
          className="absolute top-[45%] left-[55%] w-[600px] h-[600px] rounded-full blur-[160px] bg-[--color-accent]/10 -z-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
        {/* Projects → AI Assistant fade handoff */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[--color-bg-alt]" />

      </section>



{/* === AI Assistant Section === */}
<section className="z-10 section-gradient py-24 md:py-32 text-center px-6 relative overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-3xl md:text-4xl font-serif text-[--color-text] mb-8"
  >
    Meet My AI Portfolio Assistant
  </motion.h2>

  <p className="max-w-2xl mx-auto text-[--color-text-muted] leading-relaxed mb-12">
    Curious about my work or design approach? My AI Assistant can walk you through my projects, philosophy, and process — all trained from my own portfolio.
  </p>

  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <MotionButton href="" variant="accent">
            Chat Now
          </MotionButton>
  </motion.div>

  {/* Ambient glow */}
  <motion.div
    className="absolute top-[50%] left-[60%] w-[500px] h-[500px] rounded-full blur-[160px] bg-[--color-accent]/10 -z-10"
    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
    transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
  />
  {/* AI Assistant → Connect fade handoff */}
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[--color-bg]" />
</section>



{/* === Let's Connect Section === */}
<section className="section-gradient py-24 md:py-32 text-center px-6 relative overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-3xl md:text-4xl font-serif text-[--color-text] mb-6"
  >
    Let’s Connect
  </motion.h2>

  <p className="max-w-2xl mx-auto text-[--color-text-muted] leading-relaxed mb-12">
    I’m always open to conversations about design leadership, UX strategy, and how design drives transformation at scale.
  </p>

  {/* CTA Buttons */}
  <div className="flex justify-center gap-4 flex-wrap">
          <MotionButton href="/contact" variant="accent">
            Contact Me
          </MotionButton>


          <MotionButton
            href="https://www.linkedin.com/in/henrytavarez/"
            variant="outline"
          >
            LinkedIn
          </MotionButton>
  </div>

  {/* Ambient glow */}
  <motion.div
    className="absolute top-[40%] left-[55%] w-[500px] h-[500px] rounded-full blur-[160px] bg-[--color-accent]/10 -z-10"
    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
    transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
  />
  {/* Connect → Footer fade handoff */}
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[--color-footer]" />

</section>


    </main>
  );
}
