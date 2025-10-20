"use client";

import Link from "next/link";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import Section from "@/components/layout/Section";
import { motion } from "framer-motion";
import { variants } from "@/theme/motionVariants";

export default function AboutPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={variants.fadeUp}
      transition={{ duration: 0.8 }}
      className="editorial bg-[--color-bg] text-[--color-text]"
    >
    {/* === Header === */}
    <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
        <header className="text-center space-y-3">
            <motion.h1
            variants={variants.fadeUp}
            className="text-4xl md:text-5xl font-serif text-[--color-text]"
            >
            About Henry Tavarez
            </motion.h1>
            <motion.h2
            variants={variants.fadeUp}
            className="text-xl italic text-[--color-accent]"
            >
            Designing clarity and impact at enterprise scale.
            </motion.h2>
        </header>
        </MotionSection>
    </Section>

    {/* === Intro === */}
    <Section container density="editorial" className="section--editorial-alt">
        <MotionSection variants={variants.staggerChildren}>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed"
        >
            I’m a UX Designer and Product Design Lead with more than 20 years of experience 
            connecting design, technology, and strategy. My work centers on simplifying complexity, 
            translating the needs of users, engineers, and business leaders into cohesive, human-centered 
            solutions that scale.
        </motion.p>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed mt-6"
        >
            I began my career in 2002 as a web designer and developer, learning how to balance aesthetics 
            with functionality and collaborate seamlessly with engineering teams. Since 2008, I’ve led 
            design initiatives across public health, higher education, finance, and enterprise technology—building 
            design practices from the ground up, modernizing legacy systems, and shaping design systems that 
            support transformation at scale.
        </motion.p>
        </MotionSection>
    </Section>

    {/* === Design Philosophy === */}
    <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
        <motion.h2
            variants={variants.fadeUp}
            className="text-3xl mb-4 font-serif text-[--color-text]"
        >
            Design Philosophy
        </motion.h2>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed mb-4"
        >
            I believe good design creates clarity. It removes friction, highlights
             what matters, and builds systems that help people do their best work.
        </motion.p>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed"
        >
            For me, design is both empathetic and analytical. It’s about understanding 
            human needs while balancing technical and organizational realities. I often 
            describe my approach as <em>designing for clarity and impact at enterprise scale</em>. It means creating 
            solutions that don’t just look good but perform beautifully in the complexity of real-world systems.

            
        </motion.p>
        </MotionSection>
    </Section>

    {/* === How I Work === */}
    <Section container density="editorial" className="section--editorial-alt">
        <MotionSection variants={variants.staggerChildren}>
        <motion.h2
            variants={variants.fadeUp}
            className="text-3xl mb-4 font-serif text-[--color-text]"
        >
            How I Work
        </motion.h2>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed mb-4"
        >
            Collaboration sits at the center of everything I do. Whether I’m working 
            with engineers, product managers, or stakeholders, I make it a point to speak their language.
        </motion.p>
        <motion.ul
            variants={variants.fadeUp}
            className="list-disc list-inside space-y-2 text-[--color-text-muted]"
        >
            <li>
            <strong>With engineers</strong>, I engage early to explore
            technical opportunities and constraints.
            </li>
            <li>
            <strong>With product managers</strong>, I co-own the vision and
            align on goals, metrics, and value.
            </li>
            <li>
            <strong>With stakeholders</strong>, I connect design decisions to measurable outcomes, 
            translating usability into adoption, efficiency, and retention.
            </li>
        </motion.ul>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed mt-4"
        >
            I believe the best outcomes come from openness and iteration. My
            process blends research, co-creation, prototyping, and validation and I use workshops, 
            design systems, and data to inform decisions that scale.
        </motion.p>
        </MotionSection>
    </Section>

    {/* === Leadership & Mentorship === */}
    <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
        <motion.h2
            variants={variants.fadeUp}
            className="text-3xl mb-4 font-serif text-[--color-text]"
        >
            Leadership & Mentorship
        </motion.h2>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed mb-4"
        >
            As a leader, I focus on clarity, growth, and empowerment. I mentor
            designers through hands-on feedback and structured guidance,
            helping them navigate both creative and organizational challenges.
        </motion.p>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed"
        >
            I see mentorship as a conversation, not a hierarchy. It's a chance to
            build confidence through collaboration and curiosity. My teams know
            that feedback flows both ways, and that our shared goal is to create
            meaningful, user-centered outcomes that make an impact.
        </motion.p>
        </MotionSection>
    </Section>

    {/* === Defining Success === */}
    <Section container density="editorial" className="section--editorial-alt" fadeTo="footer">
        <MotionSection variants={variants.staggerChildren}>
        <motion.h2
            variants={variants.fadeUp}
            className="text-3xl mb-4 font-serif text-[--color-text]"
        >
            Defining Success
        </motion.h2>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed mb-4"
        >
            I define success through outcomes, not deliverables. It’s not about producing 
            wireframes or prototypes; it’s about improving how people experience products.
        </motion.p>
        <motion.ul
            variants={variants.fadeUp}
            className="list-disc list-inside space-y-2 text-[--color-text-muted]"
        >
            <li>A task that once took ten clicks now takes three.</li>
            <li>A design decision perfectly aligns with a business goal.</li>
            <li>A user feels confident instead of confused.</li>
        </motion.ul>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed mt-4"
        >
            That’s the kind of clarity I strive to design every day.
        </motion.p>
        </MotionSection>
    </Section>

    {/* === Let’s Connect === */}
    <Section container density="editorial" className="section--editorial" variant="default" fadeTo="footer">
        <MotionSection variants={variants.staggerChildren}>
        <motion.div variants={variants.fadeUp} className="text-center space-y-4 mb-4">
            <p className="text-[--color-text-muted]">
            I’m always open to conversations about design leadership, systems
            thinking, and the evolving role of UX in enterprise environments.
            You can connect with me on{" "}
            <Link
                href="https://www.linkedin.com/in/henrytavarez/"
                target="_blank"
                className="text-[--color-accent] hover:opacity-80"
            >
                LinkedIn
            </Link>{" "}
            or reach out{" "}
            <Link href="/contact" className="text-[--color-accent] hover:opacity-80">
                here
            </Link>
            .
            </p>
        </motion.div>
        </MotionSection>

        <MotionSection variants={variants.fadeUp}>
        <div className="text-center">
            <p className="text-[--color-text-muted] mb-4">
            Want to learn more about my design philosophy?
            </p>
            <MotionButton
            variant="accent"
            className="px-6 py-3 rounded-xl font-medium"
            onClick={() => {
                if (typeof window !== "undefined" && window.botpress) {
                window.botpress.open();
                }
            }}
            >
            Ask my AI Assistant
            </MotionButton>
        </div>
        </MotionSection>
    </Section>
    </motion.main>
  );
}
