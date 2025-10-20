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
            When I joined Arrow Digital as the first UX Designer, we were about 13 people, mostly engineers and 
            project managers. The work was technically solid, but we didn’t have a clear 
            way to connect what we built to what users actually needed or to the business strategy.
          </p>
          <p>
            Over the next seven years, I helped grow that into a real human-centered practice. 
            I introduced a repeatable UX discovery process that changed how we scoped projects, 
            collaborated with clients, and measured value. We scaled the UX team and helped the 
            company grow past 200 people.
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
          <p>There was no formal UX practice. Projects were driven by technical requirements with 
            little user input. That led to engineer-first solutions that missed real workflows, 
            inconsistent outcomes, and rework during build. Scoping was fuzzy, so projects often 
            grew mid-development. The fix was clear: add a structured UX process that aligned design, 
            engineering, and business from day one.</p>

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
           Creating the UX Discovery Process
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
           I designed a <strong>UX Discovery Framework</strong> that became the start of every project. Using 
           best practices from Design Thinking and Human-Centered Design, the framework focused on four 
           dimensions: problem framing, user understanding, stakeholder alignment, and contextual research.
          </p>

          <h3>1. Problem Framing</h3>

          <p>We defined the core challenge before any design work. That gave engineers and 
            stakeholders a shared view of the problem.</p>

          <h3>2. User Understanding</h3>
          <p>We ran interviews, surveys, and contextual mapping to uncover behavior, motivation, and pain points. 
            This moved us from shipping features to solving problems.</p>

          <h3>3. Stakeholder Alignment</h3>
          <p>
            We used workshops and kickoffs to align expectations, vision, and success measures 
            early. That trust up front reduced churn later.
          </p>

          <h3>4. Contextual Research</h3>
          <p>
            We looked at competitors and the market to place each product in context. That 
            surfaced differentiation and informed direction.
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
            We built the discovery work into proposals, planning, and design delivery, 
            so every engagement started with evidence and empathy. Clients got clearer 
            scopes. Developers worked from validated requirements. Designers grounded 
            solutions in real needs. Quality went up. So did our reputation.
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
            <p>Results showed up in operations and in the numbers. We cut rework and 
              build waste. Client retention improved. We added standard deliverables 
              like wireframing, usability testing, and content design. Win rates and 
              deal size grew. The company scaled from 12 to 200+, with a UX team of 
              about 15. The maturity helped position Arrow Digital for acquisition by Cognizant in 2018.</p>
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
            Creating a UX practice is not just design. It is changing how an org thinks. By weaving 
            discovery, research, and collaboration into every phase, we built more than a process. We built a culture.
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
