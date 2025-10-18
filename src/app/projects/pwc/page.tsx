"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";
import FullWidthImage from "@/components/FullWidthImage";
import Image from "next/image";

export default function PwCPage() {
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
            PwC – Enterprise Application Suite
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Driving design consistency and efficiency across a global software ecosystem.
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
            PwC, the world’s largest professional services firm, invested heavily in building
            internal software to support its global workforce of auditors, tax specialists, and
            consultants. Our team partnered with PwC over several years to design and deliver more
            than two dozen enterprise applications—each critical to daily operations and client
            service delivery.
          </p>
          <p>
            As <strong>Partner and Head of UX</strong> at Arrow Digital, I guided the overall design
            strategy, led cross-functional teams, and developed a scalable design system to unify the
            experience across this extensive suite of tools.
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
            With more than 20 internally built applications—each owned by different product teams—
            PwC faced challenges around consistency, usability, and development efficiency.
          </p>
          <ul className="list-disc pl-6">
            <li>Inconsistent interfaces and interaction patterns across tools.</li>
            <li>Fragmented workflows that caused redundant effort and confusion.</li>
            <li>Design debt accumulated from parallel development timelines.</li>
            <li>Lack of unified accessibility or branding standards.</li>
          </ul>
          <p>
            We needed to step back and create a cohesive foundation—a shared system that would scale
            across products and teams worldwide.
          </p>
            </motion.div>

            <Image
                src="/images/pwc-ds.png"
                alt="Various components prepared for PwC enterprise apps"
                width={1600}
                height={900}
                className="w-full h-auto mt-16"
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
            By developing a consistent design system and framework, we dramatically reduced
            time-to-market and improved product quality. Dashboards and reporting tools became more
            intuitive, allowing accountants and consultants to focus on insights rather than
            navigation.
          </p>
          <ul className="list-disc pl-6">
            <li>Created a scalable component library for all PwC digital products.</li>
            <li>Reduced redundant UI design and front-end development by over 40%.</li>
            <li>Improved usability testing scores across multiple product lines.</li>
            <li>Established long-term UX governance and brand consistency globally.</li>
          </ul>
            </motion.div>
        </MotionSection>
      </Section>

      <FullWidthImage
        src="/images/pwc-dashboards.jpg"
        alt="A collection of PwC dashboards showing the variety of ways the design system was implemented."
        />

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
            UX Strategy · Design Systems · Leadership & Mentorship · Enterprise UX · UI Design ·
            Stakeholder Alignment · Agile Collaboration
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
            This project highlighted the value of systems thinking in enterprise UX. A unified design
            language doesn’t just improve visual consistency—it transforms how teams collaborate,
            scale, and deliver value. Establishing a shared design system allowed PwC’s global teams
            to move faster and deliver with greater confidence and cohesion.
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
                onClick={() => askAIAbout('PwC')}
                aria-label="Ask my AI assistant about the PwC project"
            >
                Ask My AI Assistant
            </MotionButton>
            </div>
        </MotionSection>
      </Section>
    </main>
  );
}

