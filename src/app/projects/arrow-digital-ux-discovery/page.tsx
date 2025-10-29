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
        <MotionSection variants={variants.staggerChildren} animate="visible">
            <motion.h1
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-center leading-tight mb-6"
            >
            Arrow Digital: Building a UX Practice from the Ground Up
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Building a user-centered design discipline that reshaped how the company delivered software.
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
            Overview
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
            When I joined Arrow Digital, the company was a small engineering-led consultancy. The 
            team delivered technically strong solutions, but requirements focused on system capabilities 
            rather than the people using them.
          </p>
          <p>
            Over the next seven years, I built a human-centered design practice that changed how we 
            scoped, designed, and delivered software. We grew from one junior graphic designer to a 
            team of about 15 designers who were embedded in every major engagement. UX became part of 
            our proposal strategy, our delivery lifecycle, and our identity in the market.
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
          <p>Without structured discovery, teams struggled to anticipate user needs early. That led to:</p>
          <ul className="list-disc pl-6">
            <li>Scope changes late in development</li>
            <li>Rework that pushed budgets and timelines</li>
            <li>Solutions that missed key workflow realities</li>
          </ul>
          <p>To scale confidently, we needed a repeatable UX process that aligned user needs with technical strategy from the start.</p>

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
            I introduced a UX Discovery Framework grounded in Design Thinking and Human-Centered Design. This focused 
            on the <strong>Empathize</strong> and <strong>Define</strong> phases where the foundation of every product is set.
          </p>
          <p>Discovery emphasized four dimensions:</p>
          <div className="grid md:grid-cols-16 gap-4 items-start my-12">
          <p className="col-span-4 h-full rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-center">
            <Image
                src="/images/problem-framing.svg"
                alt="Problem Framing"
                width={48}
                height={48}
                className="m-auto pb-2"
                />
            <strong>Problem Framing</strong><br />Define the core challenge before any design work
          </p>

          <p className="col-span-4 h-full rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-center">
            <Image
                src="/images/user-understanding.svg"
                alt="User Understanding"
                width={48}
                height={48}
                className="m-auto pb-2"
                />
              <strong>User Understanding</strong><br />Learn who we serve and why
            </p>

          <p className="col-span-4 h-full rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-center">
            <Image
                src="/images/stakeholder-alignment.svg"
                alt="Stakeholder Alignment"
                width={48}
                height={48}
                className="m-auto pb-2"
                />
            <strong>Stakeholder Alignment</strong><br />Build shared clarity on goals and success
          </p>

          <p className="col-span-4 h-full rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-center">
            <Image
                src="/images/contextual-research.svg"
                alt="Contextual Research"
                width={48}
                height={48}
                className="m-auto pb-2"
                />
            <strong>Contextual Research</strong><br />Understand the environment and market around the product
          </p>
          </div>

          <p>To operationalize the process, I built a library of reusable tools and templates 
            including interview guides, stakeholder maps, co-creation workshop materials, 
            heuristic evaluation worksheets, comparative analysis formats, and discovery checklists. 
            These helped teams communicate insights clearly and take smarter action faster.</p>

          <p>Engineering was involved early. We reviewed workflows and technical constraints together so solutions 
            landed cleanly and rework was rare.</p>

            </motion.div>
        </MotionSection>
      </Section>

      {/* === A Practice That Scaled === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            A Practice That Scaled
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

          <p>As the process proved its value, demand grew quickly:</p>
          <ul className="list-disc pl-6">
              <li>The design team expanded to roughly 15 UX practitioners</li>
              <li>UX became 20 percent of overall project budgets</li>
              <li>Discovery was included in every major proposal and engagement</li>
              <li>Four designers I mentored moved into senior or manager roles</li>
              <li>Our SDLC grew more complete and mature as UX became standard</li>
          </ul>

        <p>Engineers began referencing UX workflows in planning. Product managers aligned 
          vision through design. Sales featured UX to win competitive work.</p>
        <p>UX became how Arrow Digital delivered.</p>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Outcomes === */}
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
            <p>With better discovery and alignment:</p>
            <ul className="list-disc pl-6">
              <li>Late-stage scope changes dropped significantly</li>
              <li>Projects stayed on budget and delivered with fewer surprises</li>
              <li>Project sizes grew 5 to 10 times, driven by stronger strategic collaboration</li>
              <li>Clients brought us in earlier and trusted us with more complex challenges</li>
            </ul>


            <p>One client told us they selected Arrow because we understood both the technology and the people relying on it.</p>

            <p>This credibility contributed to the company&rsquo;s growth from 12 to more than 200 employees and played a role in 
              Arrow Digital&rsquo;s acquisition by Cognizant.</p>
            </motion.div>
        </MotionSection>
      </Section>

      {/* === Key Skills === */}
      {/* <Section container density="editorial"  className="section--editorial">
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
      </Section> */}

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
            Building a UX discipline inside a fast-growing engineering organization taught me that design leadership 
            is not just about screens. It is about shaping processes, developing people, and building systems that 
            help teams deliver solutions that work in the real world.</p>

            <p>The most rewarding outcome was seeing UX become something everyone owned.</p>
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
