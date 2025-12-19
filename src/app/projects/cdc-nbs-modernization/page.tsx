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
            The CDC’s National Electronic Disease Surveillance System (NBS) supports state, 
            tribal, local, and territorial health departments in managing infectious disease 
            cases during routine operations and national outbreaks.
            </motion.p>
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
            className="grid gap-8 md:gap-10 lg:grid-cols-12 flex-wrap leading-relaxed space-y-4"
            >
                <div className="lg:col-span-3 rounded-2xl mb-8 p-6 bg-[#aebacf]/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-[1.2rem] text-white">
                <strong>78% faster case management</strong>
                </div>
                <div className="lg:col-span-3 rounded-2xl mb-8 p-6 bg-[white]/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                Case review time cut by more than 50%
                </div>
                <div className="lg:col-span-3 rounded-2xl mb-8 p-6 bg-[white]/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                User satisfaction increased from 5.6 → 8.4
                </div>
                <div className="lg:col-span-3 rounded-2xl mb-8 p-6 bg-[white]/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                Increased adoption across jurisdictions during peak outbreaks
                </div>
          
            </motion.div>

            <p><strong>Role: UX Design Lead</strong><br />
            I led human-centered discovery and design from early research through validation, 
            partnering with CDC stakeholders, engineers, and public health practitioners to 
            modernize core case-management workflows.</p>
            

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

         <p>During high-volume outbreaks, epidemiologists rely on NBS to quickly identify, triage, 
          and act on incoming case reports. As caseloads surged, the system’s core case-management 
          workflows became a bottleneck, slowing review and increasing the risk of delayed or missed 
          follow-up during critical response windows.</p>

          <p>NBS uses multiple queues to support different stages of case review, including automated 
            lab reports, active investigations, and cases missing jurisdictional data. These queues 
            are the primary decision surfaces for public health users, determining what gets reviewed, 
            when, and by whom.</p>
    

        <ul className="list-disc pl-6">
        <li><strong>DRR</strong> queue for reviewing lab or case reports that were not auto-processed by the rules engine</li>
        <li><strong>Open Investigations</strong> queue for cases still in progress</li>
        <li><strong>DRSA</strong> queue for reports missing jurisdiction data</li>
        </ul>

        <p>Research identified several compounding issues that increased cognitive load and slowed decision-making:</p>

        <ul className="list-disc pl-6">
        <li>Epidemiologists often had to open individual records to understand urgency, delaying triage during peak caseloads</li>
        <li>Large queues of 100+ records made it difficult to prioritize work and track progress</li>
        <li>Filters resetting between views forced repeated setup and rework</li>
        <li>SSlow load times interrupted review during time-sensitive response periods</li>
        </ul>
        <p>Every delay in navigation or rework translated directly into time not spent confirming cases, 
          coordinating follow-up, or containing outbreaks. Improving speed and clarity in these workflows 
          was not just a usability concern, but a public health imperative.</p>
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
            <p>We partnered closely with epidemiologists and public health staff, shadowing them as they 
              worked through daily lab reports and case queues during both routine operations and outbreak 
              response. This firsthand observation revealed how much of their time was spent navigating 
              spreadsheets, sticky notes, and multiple browser tabs just to keep track of what needed 
              attention next.</p>
            <p>Rather than redesigning workflows wholesale, we focused on reducing friction at the point of 
              decision. We prioritized surfacing the most critical information directly within queue views so 
              users could assess urgency without opening individual records.</p>

            <p>This led to several targeted design decisions:</p>

            <ul className="list-disc pl-6">
            <li>Elevating key data points such as notification status and associated investigations to support faster triage</li>
            <li>Introducing configurable queue views to reflect how different disease programs prioritize work</li>
            <li>Improving performance and search indexing so large queues remained usable at scale</li>
            </ul>

            <p>We translated these patterns into reusable queue templates and filtering behaviors within the 
              design system, allowing other teams modernizing NBS features to adopt the same approach without 
              reworking core workflows.</p>
            </motion.div>
        </MotionSection>
      </Section>

      <FullWidthImage
        src="/images/cdc-screen-hero-layered.webp"
        alt="A collection of NBS screens showing the variety of ways the design system was implemented."
        />


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
