"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { askAIAbout } from "@/lib/askAI"
import Section from "@/components/layout/Section";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import { variants } from "@/theme/motionVariants";
import Image from "next/image";
//import CaseStudyImage from "@/components/CaseStudyImage";

export default function InTouchMinistriesPage() {
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
            In Touch Ministries
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Creating a unified, mobile-optimized experience for a global digital ministry.
            </motion.p>
        </MotionSection>
      </Section>

      {/* === Project Overview === */}
      <Section container density="editorial" className="section--editorial pb-0" fadeTo="footer">
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
            In Touch Ministries wanted a complete digital refresh—one that honored its legacy while
            enabling the flexibility and reach of modern media. What began as a website redesign
            evolved into a larger initiative: integrating an online magazine, developing a new web
            application, and designing reusable components to create a cohesive experience across all
            of In Touch’s platforms.
          </p>
          <p>
            The goal was to unify their brand and technology stack while maintaining creative freedom
            for each department. This required designing a scalable system that could adapt to the
            ministry’s diverse audiences and growing content strategy.
          </p>
            </motion.div>

             <Image
                src="/images/itm-laptop.png"
                alt="Responsove view of redesigned In Touch Ministries site"
                width={1600}
                height={900}
                className="w-full h-auto mt-16"
                />
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
            Challenge & Approach
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>
            The existing digital ecosystem was fragmented, with separate experiences for the main
            website, magazine, and mobile content. To bridge these gaps, we developed a component-based
            design language that provided consistency while still allowing visual expression for key
            brand areas.
          </p>
          <p>
            Mobile optimization was a major priority. We analyzed user behavior and discovered that a
            large portion of the audience accessed content on weekends via mobile devices. This insight
            drove the creation of new mobile-first features and an app experience that encouraged
            continuous engagement.
          </p>
          <p>
            For the magazine integration, we collaborated with the IT and editorial teams to design a
            seamless digital reading experience. The result allowed the magazine to retain its unique
            identity while functioning as part of the main site’s ecosystem.
          </p>
            </motion.div>
        </MotionSection>
      </Section>

            {/* === Challenge & Approach === */}
            <Section container density="editorial" className="section--editorial">
              <MotionSection variants={variants.staggerChildren}>
            
                <div className="grid md:grid-cols-16 gap-10 items-start">
                  {/* Left column: your existing overview text */}
                  <motion.div
                    variants={variants.fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="col-span-9 space-y-4 text-[--color-text-muted]"
                  >
                    <motion.h2
                        variants={variants.fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        >
                        Challenge & Approach
                        </motion.h2>
                    {/* keep your real paragraphs here unchanged */}
                    <p>
                        The existing digital ecosystem was fragmented, with separate experiences for the main
                        website, magazine, and mobile content. To bridge these gaps, we developed a component-based
                        design language that provided consistency while still allowing visual expression for key
                        brand areas.
                    </p>
                    <p>
                        Mobile optimization was a major priority. We analyzed user behavior and discovered that a
                        large portion of the audience accessed content on weekends via mobile devices. This insight
                        drove the creation of new mobile-first features and an app experience that encouraged
                        continuous engagement.
                    </p>
                    <p>
                        For the magazine integration, we collaborated with the IT and editorial teams to design a
                        seamless digital reading experience. The result allowed the magazine to retain its unique
                        identity while functioning as part of the main site’s ecosystem.
                    </p>

                    <motion.h2
                        variants={variants.fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-16"
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
                        <ul className="list-disc pl-6">
                            <li>Unified web, app, and publication experiences under a single design system.</li>
                            <li>Increased mobile engagement and content accessibility.</li>
                            <li>Streamlined collaboration across internal teams (IT, editorial, design).</li>
                            <li>Established scalable design patterns for future expansion.</li>
                        </ul>
                        </motion.div>

                         <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16"
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
            UX Strategy · Responsive Design · Component-Based Systems · Collaboration · Mobile Design · Product Thinking · Digital Publishing Integration
          </p>
            </motion.div>
                    </motion.div>

                   
                    
            <div className="col-span-7">
                  <Image
                    src="/images/itm-mobile.png"
                    alt="Responsiove view of In Touch redesign"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                    />

                    <Image
                    src="/images/itm-blog.png"
                    alt="Magazine integration"
                    width={1600}
                    height={900}
                    className="w-full h-auto mt-16"
                    />
            </div>
            </div>
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
            This project reinforced the importance of designing for both scalability and storytelling.
            By unifying In Touch’s digital properties, we gave their teams a flexible design system
            that continues to serve new audiences while maintaining the integrity of their message and
            brand.
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
                onClick={() => askAIAbout('In Touch Ministries')}
                aria-label="Ask my AI assistant about the In Touch Ministries project"
            >
                Ask My AI Assistant
            </MotionButton>
            </div>
        </MotionSection>
      </Section>
    </main>
  );
}

