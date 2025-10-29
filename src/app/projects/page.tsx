"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/layout/MotionSection";
import Section from "@/components/layout/Section";
import ProjectCardFrosted from "@/components/ProjectCardFrosted";
import SelectedWorkFrosted from "@/components/SelectedWorkFrosted";
import { variants } from "@/theme/motionVariants";
import { featuredProjects } from "@/data/featuredProjects";
import { selectedWork } from "@/data/selectedWork";

export default function ProjectsPage() {
  return (
    <main className="bg-[--color-bg] text-[--color-text] overflow-x-hidden">
      <Section variant="default" fadeTo="bg" hasGlow className="py-20 md:py-24">
        <MotionSection variants={variants.staggerChildren} animate="visible">
          {/* Page Title */}
          <motion.h1
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-center mb-6"
          >
            Projects
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-center text-[--color-text-muted] max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            A selection of case studies showcasing my work in UX design, systems thinking, and 
            organizational transformation. Each project demonstrates how design can create clarity, 
            efficiency, and measurable impact at scale.
          </motion.p>

            <motion.h2
            variants={variants.fadeUp}
            className="text-center"
            >
            Featured Projects
            </motion.h2>
          {/* Project Grid */}
          <motion.div
            variants={variants.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.45 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6 items-stretch"
          >            
            {featuredProjects.map((proj, i) => (
              <motion.div 
                key={proj.title} 
                variants={variants.fadeUp} 
                transition={{ delay: 0.55 + i * 0.1 }}
                className="flex"
                >
                <ProjectCardFrosted
                  title={proj.title}
                  subtitle={proj.subtitle}
                  image={proj.image}
                  href={proj.href}
                />
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </Section>

      <Section variant="alt" fadeTo="footer" hasGlow className="py-20 md:py-24">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            className="text-center"
            >
            Selected Work
            </motion.h2>
          {/* Project Grid */}
          <motion.div
            variants={variants.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.45 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto px-6"
          >            
            {selectedWork.map((proj, i) => (
              <motion.div 
                key={proj.title} 
                variants={variants.fadeUp} 
                transition={{ delay: 0.55 + i * 0.1 }}
                >
                <SelectedWorkFrosted
                  title={proj.title}
                  subtitle={proj.subtitle}
                  image={proj.image}
                  href={proj.href}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Ambient Glow */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none"
            animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
          />
        </MotionSection>
      </Section>
    </main>
  );
}
