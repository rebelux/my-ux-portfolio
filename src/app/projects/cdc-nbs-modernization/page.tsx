"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";
import Image from "next/image";
import FullWidthImage from "@/components/FullWidthImage";

export default function CdcNbsModernizationPage() {
  return (
    <main className="editorial bg-[--color-bg] text-[--color-text]">
      {/* === Hero Section === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren} animate="visible">
            <motion.h1
            variants={variants.fadeUp}
            initial={false}          // 👈 prevents double “hidden” state
            animate="visible"        // 👈 animate immediately instead of waiting for scroll
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-center leading-tight mb-6"
            >
            CDC: Modernizing Disease Surveillance for Faster Outbreak Response
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
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
        <MotionSection variants={variants.staggerChildren} delay={0.1}>
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
            <p>
                The CDC&rsquo;s National Electronic Disease Surveillance System Base System (NBS) helps 
                state, tribal, local, and territorial health departments track, investigate, and 
                manage infectious disease cases across the country. During high-volume outbreaks 
                like COVID-19, epidemiologists struggled to find, triage, and update cases quickly 
                enough to keep up with real-time reporting demands.
            </p>
            <p>
                CDC partnered with our team to modernize NBS in a secure, cloud-based environment 
                built for rapid case triage and collaboration between public health workers during 
                outbreak response. As UX Design Lead, I guided the human-centered design process 
                from discovery through validation and created a reusable design system aligned with 
                USWDS and Section 508 standards.
            </p>

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

         <p>Of the many challenges during this project, a recent one was related to case management. 
            Public health users rely on a feature for this called <strong>Queues</strong> as their gateway to 
            records inside NBS. Multiple queues support different workflows:</p>
    

        <ul className="list-disc pl-6">
        <li><strong>DRR</strong> queue for reviewing lab or case reports that were not auto-processed by the rules engine</li>
        <li><strong>Open Investigations</strong> queue for cases still in progress</li>
        <li><strong>DRSA</strong> queue for reports missing jurisdiction data</li>
        </ul>

        <p>Research identified several critical issues:</p>

        <ul className="list-disc pl-6">
        <li>Limited data visibility forced users to open each record before knowing what action to take</li>
        <li>A cap of 100 records meant large parts of their workload were hidden</li>
        <li>Filters reset when navigating back from a record, causing repetitive rework</li>
        <li>Slow load times stalled triage during peak case periods</li>
        </ul>
        <p>Every minute lost to navigation and delays was a minute not spent confirming cases or taking 
            action to protect the public.</p>
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
            <p>We shadowed epidemiologists as they worked through daily lab loads and saw them 
                juggling spreadsheets, sticky notes, and multiple browser tabs just to keep track of 
                what to review next.</p>

            <p>From this fieldwork, we uncovered key opportunities:</p>

            <ul className="list-disc pl-6">
            <li>Make queue data tables show more critical data up front so users could triage faster</li>
            <li>Allow configurable views so each disease program saw what mattered to them</li>
            <li>Use a search index to load queues faster and display the full workload beyond 100 records</li>
            </ul>

            <p>Testing showed that missing data elements such as <em>Associated Investigation</em> or <em>Notification 
                Status</em> made or broke triage speed. So we elevated additional data elements like these into 
                queue tables to cut unnecessary clicks.</p>

            <p>We built reusable queue data table templates and filtering patterns into the design system so teams 
                modernizing other features could drop them in without redesigning core workflows.</p>
            </motion.div>
        </MotionSection>
      </Section>

      <FullWidthImage
        src="/images/cdc-screen-hero-layered.png"
        alt="A collection of NBS screens showing the variety of ways the design system was implemented."
        />

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
                <p>The improvements delivered clear, measurable impact:</p>
            <ul className="list-disc pl-6">
                <li>
                78 percent faster case management workflows
                </li>
                <li>
                Work that once took hours was completed in less than half the time
                </li>
                <li>
                User satisfaction improved from 5.6 to 8.4 on a 1–10 scale
                </li>
                <li>Increased confidence and adoption of the modernized platform across jurisdictions</li>
            </ul>

            <p>One epidemiologist told us, “I can finally keep up.”</p>
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
                When a system gets out of the way, public health professionals can focus on stopping 
                outbreaks, not clicking through screens. The biggest win for me was hearing users say 
                they were finally keeping up with their caseload. Faster review means faster action, 
                and that keeps people safer.
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
