"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";
import Image from "next/image";

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
            Surveillance System Base System (NBS).
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
                The CDC’s National Electronic Disease Surveillance System Base System (NBS) helps state, 
                tribal, local, and territorial health departments track and manage infectious disease cases 
                across the country. Over time, its aging workflows and interfaces slowed response and made 
                scaling difficult—especially during large-scale outbreaks like COVID-19.
            </p>
            <p>
                CDC partnered with our team at CDW to modernize NBS, moving it into a secure, cloud-based 
                environment built for flexibility and speed.
            </p>

            <p>
                As UX Design Lead, I guided the human-centered design (HCD) process end to end. That included 
                discovery, stakeholder workshops, usability testing, and building a scalable design system 
                based on USWDS and Section 508 standards.</p>

            </motion.div>
        </MotionSection>
      </Section>

      {/* === The Challenge === */}
      <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            The Challenge
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >

         <p>The existing surveillance system was a mix of aging technologies and complex data flows that 
        made daily work slow and error-prone. Public health users needed a platform that was modern, 
        intuitive, and adaptable to rapid-response scenarios.</p>

        <p>Key issues included:</p>

        <ul className="list-disc pl-6">
        <li>Fragmented workflows: Each jurisdiction used a slightly different process, causing data inconsistencies.</li>
        <li>Inefficient case investigation tools: Users spent hours searching or manually reconciling duplicate records.</li>
        <li>Accessibility gaps: The system wasn’t fully compliant with Section 508, limiting usability for assistive tech users.</li>
        <li>Technical silos: Different agencies had difficulty sharing and analyzing cross-jurisdictional data.</li>
        </ul>
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
            <p>We started with empathy-driven research, meeting users where they worked—state and local 
                public health offices. We observed real case investigations, data entry pain points, and 
                collaboration hurdles between teams.</p>

            <p>From there, we co-created workflows and prototypes directly with epidemiologists, data analysts, 
                and program managers. These working sessions helped us design around real conditions rather 
                than assumptions.</p>

            <p>We validated early ideas through usability testing across multiple jurisdictions and device 
                types. Each test cycle improved efficiency and reduced cognitive load for core tasks like 
                case searches and data imports.</p>

            <p>Finally, we built a reusable design system to keep the platform consistent and accessible.
                It included flexible components, color contrast guidance, and interaction patterns tailored 
                for dense data screens.</p>
            </motion.div>

            <Image
                src="/images/cdc-sitemap.png"
                alt="A portion of the information architecture of the system."
                width={1600}
                height={900}
                className="w-full h-auto mt-16 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />
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
            Outcomes
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <ul className="list-disc pl-6">
                <li>
                Simplified the case investigation flow, reducing redundant data entry.
                </li>
                <li>
                Increased user confidence in record accuracy through clear error states and validation patterns.
                </li>
                <li>
                Established a shared design system used across multiple modernization tracks at CDC.
                </li>
                <li>Strengthened collaboration between UX, engineering, and CDC teams which reduced handoff gaps and ensured compliance.</li>
            </ul>
            </motion.div>

            <Image
                src="/images/cdc-screen-hero.png"
                alt="A couple screen examples for Patient Search and Queues"
                width={1600}
                height={900}
                className="w-full h-auto mt-16"
                />
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
            Reflection
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
                Working with public health professionals reinforced that design’s biggest 
                impact often comes from removing friction, not adding polish. By keeping users 
                involved throughout, we helped transform an outdated system into a platform 
                that supports faster, more confident decisions during real health crises.
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
