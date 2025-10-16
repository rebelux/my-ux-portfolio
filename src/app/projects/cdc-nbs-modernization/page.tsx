"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";

export default function CdcNbsModernizationPage() {
  return (
    <main className="editorial bg-[--color-bg] text-[--color-text]">
      {/* === Hero Section === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h1
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-center leading-tight mb-6"
            >
            CDC — NBS Modernization
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Reimagining national disease surveillance workflows through a
            human-centered modernization of the National Electronic Disease
            Surveillance System (NEDSS) Base System.
            </motion.p>
        </MotionSection>
      </Section>

      {/* === Project Overview === */}
      <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Project Overview
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
                The CDC’s National Electronic Disease Surveillance System (NEDSS)
                Base System (NBS) is a cornerstone of U.S. public health reporting,
                helping states and jurisdictions track infectious disease cases and
                trends. However, the system’s decades-old interface and data
                workflows hindered efficiency and scalability, especially during
                critical outbreak response scenarios.
            </p>
            <p>
                Our team partnered with the CDC to redesign NBS from the ground up —
                focusing on the modernized architecture, user experience, and
                long-term sustainability across all state and local public health
                programs.
            </p>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Approach === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Approach
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
                We conducted extensive discovery sessions with epidemiologists,
                case investigators, and surveillance coordinators across multiple
                jurisdictions to understand the nuanced challenges of disease
                surveillance workflows.
            </p>
            <ul className="list-disc pl-6">
                <li>
                Developed user journey maps and service blueprints to visualize
                data flow between systems and users.
                </li>
                <li>
                Identified high-friction processes such as duplicate case
                resolution, patient search, and HL7 message ingestion.
                </li>
                <li>
                Collaborated closely with engineers to align UX decisions with
                evolving architecture based on modular microservices and FHIR data
                models.
                </li>
            </ul>
            <p>
                This iterative collaboration between CDC, state users, and our
                design-engineering team ensured that modernization decisions were
                validated by real-world needs, not assumptions.
            </p>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Impact === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Impact
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
                The modernization effort has already led to measurable improvements
                in workflow efficiency and data quality:
            </p>
            <ul className="list-disc pl-6">
                <li>
                Reduced case deduplication time by over 60% through improved
                patient search and record matching algorithms.
                </li>
                <li>
                Streamlined HL7 message ingestion pipelines, reducing backlog
                delays from days to hours.
                </li>
                <li>
                Established a design system and modular UI library to ensure
                future extensibility and brand consistency across CDC programs.
                </li>
            </ul>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Outcomes === */}
      <Section container density="editorial"  className="section--editorial relative overflow-hidden" fadeTo="footer">
        <MotionSection variants={variants.staggerChildren}>
            {/* Ambient Glow Behind Section */}
            <motion.div
            className="absolute top-[20%] left-[40%] w-[600px] h-[600px] rounded-full blur-[180px] bg-[--color-accent]/10 -z-10"
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
            />

            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Outcomes
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
                Beyond improving system performance and usability, NBS Modernization
                established a scalable design foundation for the future of disease
                surveillance in the United States.
            </p>
            <p>
                The lessons learned from this effort are informing modernization
                initiatives across other CDC programs and partner systems —
                creating a more unified, responsive, and resilient public health
                data infrastructure.
            </p>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Footer CTA === */}
      <Section className="section--editorial" variant="default" fadeTo="footer">
        <MotionSection variants={variants.staggerChildren}>
            <div className="max-w-5xl mx-auto flex justify-between items-center px-6">

            <Link
                href="/projects"
                className="text-[--color-accent] hover:opacity-80 transition font-medium"
            >
                ← Back to Projects
            </Link>
            <MotionButton
                variant="accent"
                onClick={() => askAIAbout('CDC – NBS Modernization')}
                aria-label="Ask my AI assistant about the CDC NBS Modernization project"
            >
                Ask My AI Assistant
            </MotionButton>
            </div>
        </MotionSection>
      </Section>
    </main>
  );
}
