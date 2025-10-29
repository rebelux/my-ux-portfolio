"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";
import Image from "next/image";

export default function CMSIdentityManagement() {
  return (
    <main className="editorial bg-[--color-bg] text-[--color-text]">
      {/* === Hero Section === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren} animate="visible">
            <motion.h1
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-center leading-tight mb-6"
            >
            CMS – Identity Management Modernization
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Streamlining secure access for healthcare data systems at the Centers for Medicare & Medicaid Services (CMS) through human-centered design.
            </motion.p>
        </MotionSection>
      </Section>

      {/* === Project Overview === */}
      <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Project Overview
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >

            <p>The Centers for Medicare & Medicaid Services (CMS) Identity Management (IDM) platform is the gateway for thousands of external partners and 
            vendors. Due to fragmented development initiatives, over time, the interface and processes to manage roles and onboard new vendors became confusing, dated, and difficult for both 
            CMS staff and partner organizations to navigate.</p>

            <p>As UX Design Lead, I guided a full redesign through a human-centered design process. The goal was to 
            simplify onboarding, improve usability, and align the experience with modern federal standards like 
            USWDS and Section 508.</p>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Challenge === */}
      <Section container density="editorial"  className="section--editorial">
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
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
              The existing system created friction at every step:
            </p>
            <ul className="list-disc pl-6">
              <li>Long and unclear registration workflows.</li>
            <li>Duplicate or missing information fields.</li>
            <li>Limited visibility into request status.</li>
            <li>Inconsistent interface patterns across pages.</li>
            <li>Accessibility issues that blocked some users entirely</li>
            </ul>

             <p>
            The result was frustration for both partners and CMS staff, leading to support backlogs and wasted time.
          </p>
            </motion.div>

            <Image
                src="/images/cms-identity-management-hero.png"
                alt="A portion of the information architecture of the system."
                width={1600}
                height={900}
                className="w-full h-auto mt-16 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />
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
            My Approach
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
             We began with stakeholder interviews and user sessions that mapped pain points across 
             multiple roles—vendors, CMS administrators, and access approvers.
            </p>
          <p>
            Using those insights, we restructured the entire onboarding experience. The redesign prioritized 
            clarity and predictability over aesthetic overhaul. Each step focused on making sure users knew 
            what to expect, what information they needed, and where they stood in the process.
          </p>

          <p>
            We prototyped multiple task flows and tested them with real users, refining layout, language, 
            and logic based on feedback. The final design matched USWDS components and met Section 508 
            compliance standards.
          </p>
          <p>
            Collaboration was key. We held weekly working sessions with developers, product owners, and 
            security stakeholders to ensure technical feasibility and compliance alignment as we went.
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
            <li>Streamlined registration and approval flows reduced completion time for new accounts.</li>
            <li>Standardized interface patterns and improved consistency across applications.</li>
            <li>Accessibility compliance ensured full keyboard and screen-reader support.</li>
            <li>CMS staff gained clearer visibility into approval queues, reducing duplicate requests and help desk volume.</li>
          </ul>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Key Skills === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Key Skills Demonstrated
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
            Human-Centered Design (HCD) · Design Systems (USWDS) · Accessibility & Section 508
            Compliance · Prototyping & Usability Testing · Cross-Functional Collaboration · Agile
            Product Development · Workshop Facilitation
          </p>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Reflection === */}
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
            <p>The CMS IDM project reminded me that great UX often means simplifying what already exists, 
              not reinventing it. By bringing users and technical teams together early, we reduced complexity 
              and built trust. The new experience feels not only more modern, but also more transparent and 
              respectful of users’ time.</p>
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
                onClick={() => askAIAbout('CMS – Identity Management Modernization')}
                aria-label="Ask my AI assistant about the CMS Identity Management Modernization project"
            >
                Ask My AI Assistant
            </MotionButton>
            </div>
        </MotionSection>
      </Section>
    </main>
  );
}
