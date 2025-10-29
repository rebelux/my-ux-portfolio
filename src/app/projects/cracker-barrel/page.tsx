"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import CaseStudyImage from "@/components/CaseStudyImage";
import { variants } from "@/theme/motionVariants";
import Image from "next/image";

export default function CrackerBarrelPage() {
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
            Cracker Barrel
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Modernizing a legacy brand’s digital experience while preserving its charm.
            </motion.p>
        </MotionSection>
      </Section>

{/* === Project Overview === */}
<Section container density="editorial" className="section--editorial">
  <MotionSection variants={variants.staggerChildren}>

    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Left column: your existing overview text */}
      <motion.div
        variants={variants.fadeUp}
        initial={false}
            animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-4 text-[--color-text-muted]"
      >
        <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
            Project Overview
            </motion.h2>
        {/* keep your real paragraphs here unchanged */}
        <p>Cracker Barrel wanted to modernize its online experience 
            without losing the nostalgic, rustic warmth that defines the 
            brand. The challenge was to blend modern usability and responsiveness
             with a design language deeply rooted in its country heritage.</p>
        <p>Our team recreated the feel of their physical stores digitally by 
            using textured materials, warm tones, and familiar visual motifs 
            like wood grain and chalkboard surfaces. We also partnered with 
            Cracker Barrel to restructure their content and data models for 
            over 600 locations, enabling personalized menus and store information 
            based on location and user preferences.</p>
      </motion.div>

      {/* Right column: the image */}
      <CaseStudyImage
        src="/images/cb-brand-laptop.png"
        alt="Cracker Barrel website redesign overview"
        aspect="4/3"
        className=""
      />

    </div>
  </MotionSection>
</Section>



      {/* === Beyond === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>

            <Image
                    src="/images/cb-data-transparent.png"
                    alt="Screens using data from store-wide CRM"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />


            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16"
            >
            Beyond the Redesign
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p className="mb-16">
            During our collaboration, we explored ways to extend Cracker Barrel’s in-store experience 
            through digital engagement. One of our concepts was an AR-based “antique hunt” that invited 
            guests to explore the country store to find virtual collectibles and earn rewards. This idea 
            strengthened the connection between Cracker Barrel’s physical spaces and its digital brand.
          </p>
            </motion.div>

                <Image
                    src="/images/cb-mobile-transparent.png"
                    alt="AR-based concept developed for Cracker Barrel"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />

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
            UX Strategy · Brand Experience Design · UI Design · Prototyping · Client Workshops · Cross-Disciplinary Collaboration
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
            This project was a reminder that great UX is not just about modernization—it’s about respecting 
            heritage while creating meaningful ways for users to connect with a brand. By merging tradition 
            with technology, we helped Cracker Barrel extend its hospitality into the digital space.
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
                onClick={() => askAIAbout('Cracker Barrel')}
                aria-label="Ask my AI assistant about the Cracker Barrel project"
            >
                Ask My AI Assistant
            </MotionButton>
            </div>
        </MotionSection>
      </Section>
    </main>
  );
}

