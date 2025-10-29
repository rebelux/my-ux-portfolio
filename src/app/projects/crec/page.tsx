"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";
import Image from "next/image";
import CaseStudyImage from "@/components/CaseStudyImage";

export default function CRECPage() {
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
            Central Electric Cooperative (CREC)
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Turning complex energy data into actionable insights.
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
            <p>
            Central Electric Cooperative (CREC) serves more than 20,000 meters across Oklahoma.
            The organization wanted to leverage its data more effectively to improve operational
            awareness and enhance service delivery. Our team was tasked with designing a suite of
            digital tools that could translate raw energy data into actionable insights.
          </p>
          <p>
            Working closely with engineers and field technicians, we built an interactive Energy
            Dashboard that visualized real-time grid performance, outages, and forecasts.
            The design emphasized clarity, accessibility, and rapid comprehension—helping both
            operations center staff and field teams respond faster and more effectively.
          </p>
            </motion.div>

            <Image
                src="/images/crec-dashboard-full.jpg"
                alt="26 monitors that shows charts, graphs, and data from the Energy Dashboard alongside other critical information such as weather forecasts, etc."
                width={1600}
                height={900}
                className="w-full h-auto mt-16"
                />
        </MotionSection>
      </Section>

      {/* === Impact === */}
      <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
      
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left column: your existing overview text */}
            <motion.div
              variants={variants.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 text-[--color-text-muted]"
            >
              <motion.h2
                  variants={variants.fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  >
                  Impact
                  </motion.h2>
              {/* keep your real paragraphs here unchanged */}
              <p>
            The new system provided a unified operational view across CREC’s teams, displayed
            prominently on a 26-screen video wall in their operations center. Field techs accessed
            the same data through tablet and mobile views, ensuring that insights were shared in
            real time.
          </p>
          <p>
            The project not only improved situational awareness but also increased efficiency,
            safety, and cross-team collaboration by bringing complex energy data into a
            human-centered interface.
          </p>
            </motion.div>
      
            {/* Right column: the image */}
            <CaseStudyImage
              src="/images/crec-mobile.png"
              alt="CREC Field Ipad App"
              className=""
            />
      
          </div>
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
            Data Visualization · UX Design · UI Design · Design Strategy · Cross-Functional Collaboration · Research & Field Observation
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
            CREC was one of those rare projects where design literally illuminated understanding.
            By visualizing complex data and ensuring access from the field to the control room, we
            turned information into insight—and insight into action.
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
                onClick={() => askAIAbout('Central Electric Cooperative (CREC)')}
                aria-label="Ask my AI assistant about the Central Electric Cooperative (CREC) project"
            >
                Ask My AI Assistant
            </MotionButton>
            </div>
        </MotionSection>
      </Section>
    </main>
  );
}

