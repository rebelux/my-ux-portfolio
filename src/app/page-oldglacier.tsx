/* "use client"; 

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
{/* === Hero Section (Refined Hierarchy) === 
<section className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-32 pb-24 md:pb-28 bg-[--color-bg]">
  {/* Headline 
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

  {/* Subheading 
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    className="text-[--color-text-muted] text-lg md:text-[1.25rem] leading-relaxed max-w-2xl mb-10"
  >
    I’m <span className="name-highlight text-[--color-accent] font-medium">Henry Tavarez</span>, a UX design lead focused on modernizing complex systems and helping teams turn strategy into seamless user experiences.
  </motion.p>

  {/* CTA 
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  >
    <MotionButton href="" variant="accent">
            Chat with my AI Assistant
          </MotionButton>
  </motion.div>

  {/* Ambient glow 
  <motion.div
    className="absolute top-[65%] left-[50%] w-[500px] h-[500px] rounded-full blur-[160px] bg-[--color-accent]/10 -z-10"
    animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
  />
  {/* Hero → About fade handoff 
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[--color-bg-alt] pointer-events-none" />

</section>

*/