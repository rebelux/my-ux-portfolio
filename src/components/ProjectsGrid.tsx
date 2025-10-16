"use client";

import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import Link from "next/link";
import { glacialDepth } from "@/theme/glacialDepth";

const projects = [
  {
    title: "CDC NBS Modernization",
    slug: "cdc-modernization",
    description:
      "Redesigning public health data workflows — from patient search to deduplication — to support nationwide disease surveillance modernization.",
    image: "/images/projects/cdc-thumb.jpg",
  },
  {
    title: "Arrow Digital Process Hub",
    slug: "arrow-digital",
    description:
      "A human-centered workflow framework that streamlined approvals and reporting across a multi-agency health organization.",
    image: "/images/projects/arrow-thumb.jpg",
  },
  {
    title: "Public Health Design System",
    slug: "design-system",
    description:
      "Establishing a unified design language for 508 compliance and rapid delivery across state implementations.",
    image: "/images/projects/system-thumb.jpg",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="section bg-bgAlt text-text">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInSection>
          <h2 className="text-center font-serif text-[48px] mb-12">
            Selected Work
          </h2>
        </FadeInSection>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInSection key={project.slug} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{
                  duration: glacialDepth.motion.fast.duration,
                  ease: glacialDepth.motion.fast.ease,
                }}
                className="rounded-2xl overflow-hidden shadow-sm bg-card border border-[--color-border] hover:shadow-md transition-all"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-[24px] mb-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[16px] text-text/80">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
