"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";
import Image from "next/image";

export default function ArrowDigitalDiscovery() {
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
            Arrow Digital – Building a UX Discovery Process
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Transforming a development-focused company into a user-centered design practice.
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
            Overview
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
            When I joined Arrow Digital, it was a small software boutique of about 12 employees—
            mostly engineers and project managers. The company produced technically sound
            solutions, but lacked a structured approach to understanding user needs or aligning
            designs with business strategy.
          </p>
          <p>
            Over seven years, I helped evolve that environment into a mature, human-centered design
            practice. By introducing a repeatable UX discovery process, I transformed how the
            company scoped projects, collaborated with clients, and delivered value—eventually
            scaling our UX team and contributing to the company&rsquo;s growth to over 200 employees.
          </p>
            </motion.div>

        </MotionSection>
      </Section>

      {/* === Opportunity === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            The Opportunity
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
          <p>
            At the time, Arrow Digital had no formal UX practice. Projects were driven by technical
            requirements, often with minimal user input. This led to:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Engineer-focused solutions</strong> that overlooked real user workflows.
            </li>
            <li>
              <strong>Inconsistent client outcomes</strong> and rework during implementation.
            </li>
            <li>
              <strong>Inefficient scoping</strong> due to unclear requirements expanding mid-project.
            </li>
          </ul>
          <p>
            The opportunity was clear: establish a structured UX process that aligned design,
            development, and business goals from day one.
          </p>
            </motion.div>

            <Image
                src="/images/arrow-process.png"
                alt="Various components prepared for PwC enterprise apps"
                width={1600}
                height={900}
                className="w-full h-auto mt-16"
                />
        </MotionSection>
      </Section>

      {/* === Creating the Process === */}
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
            To address these challenges, I designed and implemented a{" "}
            <strong>UX Discovery Framework</strong> that became the foundation of every project.
            The process focused on four key dimensions:
          </p>

          <h3>1. Problem Framing</h3>
          <p>
            Defined and articulated the core challenge before design began. This ensured every team
            member—from engineers to stakeholders—shared a unified understanding of the problem we
            were solving.
          </p>

          <h3>2. User Understanding</h3>
          <p>
            Introduced user research methods such as <strong>interviews, surveys, and contextual
            mapping</strong> to uncover user behaviors, motivations, and pain points. These insights
            shifted the focus from building features to solving meaningful problems.
          </p>

          <h3>3. Stakeholder Alignment</h3>
          <p>
            Facilitated workshops and kickoff sessions to align client expectations, project vision,
            and success metrics early in the process. This collaborative approach built trust and
            reduced misalignment later in development.
          </p>

          <h3>4. Contextual Research</h3>
          <p>
            Encouraged competitive and market analysis to position each product strategically within
            its domain. This helped identify differentiation opportunities and guided product
            direction.
          </p>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Process in Action === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Process in Action
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
            The UX Discovery Process became the backbone of Arrow Digital&rsquo;s project lifecycle. We
            incorporated it into <strong>proposal development, planning sessions, and design
            delivery</strong>, ensuring every engagement started with empathy and evidence.
          </p>
          <ul className="list-disc pl-6">
            <li>Clients gained clearer, evidence-based project scopes.</li>
            <li>Developers had validated requirements and fewer late-stage changes.</li>
            <li>Designers produced solutions grounded in real user needs.</li>
          </ul>
          <p>
            The process not only improved project quality but also enhanced the company&rsquo;s reputation
            for delivering thoughtful, high-impact solutions.
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
            Organizational Impact
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <ul className="list-disc pl-6">
            <li>Reduced rework and development waste, saving time and cost.</li>
            <li>Improved client satisfaction and retention through consistent outcomes.</li>
            <li>Expanded service offerings—wireframing, usability testing, and content design became standard deliverables.</li>
            <li>Higher win rates on proposals and larger project contracts.</li>
            <li>Company growth from 12 to over 200 employees with a 15-person UX team.</li>
            <li>Positioned Arrow Digital for acquisition by Cognizant in 2018.</li>
          </ul>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Leadership ===
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Process in Action
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
            As Partner and UX Practice Lead, I focused on scaling both people and process. I
            mentored designers, developed reusable frameworks, and represented UX in executive
            discussions. The team culture emphasized{" "}
            <strong>collaboration, curiosity, and continuous improvement</strong>—values that became
            embedded in Arrow Digital&rsquo;s identity.
          </p>
            </motion.div>
        </MotionSection>
      </Section> */}

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
            UX Strategy & Process Design · Leadership & Mentorship · Stakeholder Management ·
            Research & Facilitation · Cross-Functional Collaboration · Business Development
            Alignment · Team Building
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
           <p>
            This experience taught me that creating a UX practice isn&rsquo;t just about design—it&rsquo;s about
            changing how an organization thinks. By integrating discovery, research, and
            collaboration into every phase of work, we built more than a process; we built a culture
            of design thinking that elevated the company&rsquo;s entire delivery model.
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
                onClick={() => askAIAbout('Arrow Digital – Building a UX Discovery Process')}
                aria-label="Ask my AI assistant about the Arrow Digital – Building a UX Discovery Process project"
            >
                Ask My AI Assistant
            </MotionButton>
            </div>
        </MotionSection>
      </Section>
    </main>
  );
}
