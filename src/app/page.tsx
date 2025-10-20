"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/layout/Section";
import MotionButton from "@/components/ui/MotionButton";
import ProjectCardFrosted from "@/components/ProjectCardFrosted";
import { featuredProjects } from "@/data/featuredProjects";
import MotionSection from "@/components/layout/MotionSection";
import MotionGroup from "@/components/layout/MotionGroup";
import { variants } from "@/theme/motionVariants";
//import Image from "next/image";

import "./test.css";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden text-[--color-text] bg-[--color-bg]">

      {/* === HERO === */}
      <Section variant="gradient" id="hero" hasGlow>
        <MotionSection>
          <MotionGroup>
            <motion.h1
              variants={variants.fadeUp}
              className="font-serif text-[2rem] md:text-[3.25rem] leading-[1.15] text-[--color-text] font-light tracking-tight mb-4 max-w-3xl mx-auto text-center"
            >
              Crafting clarity from complexity.
            </motion.h1>

            <motion.p
              variants={variants.fadeUp}
              className="text-[--color-text-muted] text-lg md:text-[1.25rem] leading-relaxed max-w-2xl mx-auto mb-10 text-center"
            >
              I&apos;m <span className="text-[--color-accent] font-medium">Henry Tavarez</span>, 
              a UX design lead focused on modernizing complex systems and helping teams 
              turn strategy into seamless user experiences.
            </motion.p>

            <motion.div 
              variants={variants.scaleIn} 
              className="flex justify-center">
              <MotionButton
                variant="accent"
                className="px-8 py-3 rounded-lg text-white font-medium shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition"
                onClick={() => {
                    if (typeof window !== "undefined" && window.botpress) {
                    window.botpress.open();
                    }
                }}
              >
                Chat with my AI Assistant
              </MotionButton>
            </motion.div>
          </MotionGroup>
        </MotionSection>
      </Section>

      {/* === ABOUT === */}
      <Section 
        variant="gradient" 
        id="about" 
        hasGlow 
        backgroundImage="/images/ht-full-bg-transparent.png"
        backgroundSize="contain"
        backgroundPosition="bottom center"
        disableBackgroundOnMobile
        fadeTo="footer">
        <MotionSection delay={0.1}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <motion.h2
                variants={variants.fadeUp}
                className="text-3xl md:text-4xl font-serif mb-8 text-[--color-text]"
              >
                About Me
              </motion.h2>
              <motion.div variants={variants.fadeUp}>
                <p className="text-[--color-text-muted] leading-relaxed mb-6">
                  I’m a UX Designer and Product Design Lead with more than 20 years 
                  of experience connecting design, technology, and strategy.
                </p>
                <p className="text-[--color-text-muted] leading-relaxed mb-8">
                 My work is about making complex things simple. I translate the 
                 needs of users, engineers, and business leaders into practical, 
                 human-centered solutions that scale.

                </p>

                

                <Link
                  href="/about"
                  className="inline-block text-[--color-accent] font-medium hover:opacity-80 transition"
                >
                  Learn More →
                </Link>
              </motion.div>
            </div>

            {/*<motion.div
              variants={variants.scaleIn}
              className="bg-[--color-card] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] aspect-[4/3] overflow-hidden">
                <Image
                    src="/images/ht-crop.jpg"
                    alt="A picture of Henry Tavarez"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
            </motion.div>*/}
          </div>
        </MotionSection>
      </Section>

      {/* === FEATURED PROJECTS === */}
      <Section variant="gradient" fadeTo="bg-alt" id="projects" hasGlow>
        <MotionSection delay={0.3}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              variants={variants.fadeUp}
              className="text-3xl md:text-4xl font-serif text-center text-[--color-text]"
            >
              Featured Projects
            </motion.h2>

            {/* Offset grid */}
            <div className="mt-16 md:mt-24 grid gap-8 md:gap-10 lg:grid-cols-12">
              {/* Left card */}
              <motion.div 
                variants={variants.fadeUp} 
                className="lg:col-span-6 lg:pr-6 order-1 flex justify-center lg:justify-end">
                <div className="lg:translate-y-6">
                  <ProjectCardFrosted {...featuredProjects[0]} />
                </div>
              </motion.div>

              {/* Right card */}
              <motion.div 
                variants={variants.fadeUp} 
                className="lg:col-span-6 lg:pl-6 order-2 flex justify-center lg:justify-start">
                <div className="lg:-translate-y-4">
                  <ProjectCardFrosted {...featuredProjects[1]} />
                </div>
              </motion.div>

              {/* Centered card */}
              <motion.div 
                variants={variants.fadeUp} 
                className="lg:col-span-12 order-3 mt-12 lg:mt-16 flex justify-center">
                <div className="lg:w-2/3">
                  <ProjectCardFrosted {...featuredProjects[2]} />
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={variants.fadeUp} 
              className="text-center mt-20">
              <Link
                href="/projects"
                className="text-[--color-accent] hover:opacity-80 transition font-medium"
              >
                View All Projects →
              </Link>
            </motion.div>
          </div>
        </MotionSection>
      </Section>

      {/* === AI ASSISTANT === */}
      <Section variant="alt" fadeTo="footer" id="assistant" hasGlow>
        <MotionSection delay={0.5}>
          <motion.h2
            variants={variants.fadeUp}
            className="text-3xl md:text-4xl font-serif text-center mb-6 text-[--color-text]"
          >
            Meet My AI Portfolio Assistant
          </motion.h2>

          <motion.p 
            variants={variants.fadeUp} 
            className="max-w-2xl mx-auto text-[--color-text-muted] leading-relaxed text-center mb-12">
            Curious about my work or design approach? My AI Assistant can walk
            you through my projects, philosophy, and process and it&rsquo;s all trained from
            my own portfolio.
          </motion.p>

          <motion.div 
            variants={variants.scaleIn} 
            className="flex justify-center">
            <MotionButton
              variant="accent"
              className="px-8 py-3 rounded-lg text-white font-medium shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition"
              onClick={() => {
                    if (typeof window !== "undefined" && window.botpress) {
                    window.botpress.open();
                    }
                }}
            >
              Chat Now
            </MotionButton>
          </motion.div>
        </MotionSection>
      </Section>

      {/* === CONNECT === */}
      <Section variant="default" fadeTo="footer" id="contact" hasGlow>
        <MotionSection delay={0.7}>
          <motion.h2
            variants={variants.fadeUp} 
            className="text-3xl md:text-4xl font-serif text-center mb-6 text-[--color-text]"
          >
            Let’s Connect
          </motion.h2>

          <motion.p 
            variants={variants.fadeUp} 
            className="max-w-2xl mx-auto text-[--color-text-muted] leading-relaxed text-center mb-12">
            I’m always open to conversations about design leadership, UX strategy,
            and how design drives transformation at scale.
          </motion.p>

          <motion.div variants={variants.scaleIn} className="flex justify-center gap-4 flex-wrap">
            <MotionButton
              href="/contact"
              variant="accent"
              className="px-8 py-3 rounded-lg text-white font-medium shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition"
            >
              Contact Me
            </MotionButton>

            <MotionButton
              href="https://www.linkedin.com/in/henrytavarez/"
              variant="outline"
              className="px-8 py-3 rounded-lg border border-[--color-accent]/50 text-[--color-accent] font-medium hover:bg-[--color-accent]/10 transition"
            >
              LinkedIn
            </MotionButton>
          </motion.div>
        </MotionSection>
      </Section>
    </main>
  );
}
