"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";

export default function CMSIdentityManagement() {
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
            CMS – Identity Management Modernization
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Streamlining secure access for healthcare data systems through human-centered design.
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
                CMS&rsquo;s Identity Management (IDM) platform serves as the secure entry point for vendors
            and partners connecting to CMS data systems. The existing platform was outdated,
            inefficient, and difficult for both internal staff and external partners to navigate.
            As <strong>UX Design Lead</strong>, I led the redesign of this critical system,
            applying Human-Centered Design (HCD) principles to improve onboarding, enhance
            usability, and align the interface with the{" "}
            <strong>U.S. Web Design System (USWDS)</strong> standards.
            </p>
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
              The original IDM process was cumbersome for users and administrators alike. Key
            challenges included:
            </p>
            <ul className="list-disc pl-6">
              <li>Long, complex onboarding forms for new vendors.</li>
            <li>Inconsistent workflows between internal and external users.</li>
            <li>Accessibility and compliance gaps.</li>
            <li>Limited visibility into user status and request progress.</li>
            </ul>
             <p>
            The goal was to reduce friction in the onboarding process, increase transparency, and
            create a more accessible experience that scaled across user roles.
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
             I applied a collaborative and research-driven design process to uncover pain points and
            deliver solutions that balanced security, usability, and compliance.
            </p>
            <h3>Discovery & Co-Creation</h3>
          <p>
            Conducted <strong>co-creation workshops</strong> with internal CMS employees to
            document workflows, map user pain points, and identify redundant steps. These sessions
            provided a shared understanding of inefficiencies and opportunities for improvement.
          </p>

          <h3>Collaboration with Product & Engineering</h3>
          <p>
            Partnered with business analysts to refine user stories and clarify requirements.
            Collaborated closely with engineers to ensure all interface components followed{" "}
            <strong>USWDS</strong> guidelines and were built to specification.
          </p>

          <h3>Design & Prototyping</h3>
          <p>
            Created wireframes and high-fidelity prototypes for improved task flows such as vendor
            registration, identity verification, and access management. Tested designs with internal
            staff and external vendors to validate usability and accessibility.
          </p>

          <h3>Usability Testing & Accessibility</h3>
          <p>
            Performed recorded usability sessions to identify workflow gaps and refine interactions.
            Each screen was reviewed for Section 508 compliance, ensuring accessibility standards
            were met for all users.
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
            Outcomes & Impact
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <ul className="list-disc pl-6">
            <li>Streamlined vendor onboarding with simplified workflows.</li>
            <li>Reduced redundant steps and form fields for CMS employees.</li>
            <li>Improved accessibility and consistency through USWDS standards.</li>
            <li>Delivered clearer communication between internal teams and external partners.</li>
          </ul>
          <p>
            The modernization effort improved day-to-day operations and laid the groundwork for
            scalable, accessible system upgrades across CMS.
          </p>
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
            <p>This project reaffirmed the importance of empathy and collaboration in enterprise 
                UX. By aligning design with both technical infrastructure and user needs, we 
                delivered a solution that improved workflow efficiency and accessibility—without 
                compromising security or compliance.</p>
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
