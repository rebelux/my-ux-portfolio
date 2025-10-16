"use client";

import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";
import { glacialDepth } from "@/theme/glacialDepth";

export default function AboutSection() {
  return (
    <section className="section bg-[--color-bg] text-text">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <FadeInSection>
          <h2 className="font-serif text-[48px] mb-8 leading-tight">
            Designing with Depth and Clarity
          </h2>
        </FadeInSection>

        {/* Statement */}
        <FadeInSection delay={0.1}>
          <motion.p
            className="font-sans text-[18px] text-text/80 leading-relaxed max-w-3xl mx-auto"
            transition={{
              duration: glacialDepth.motion.slow.duration,
              ease: glacialDepth.motion.slow.ease,
            }}
          >
            I’m a UX design lead focused on modernizing complex public health systems —
            where legacy data, high stakes, and human impact converge.  
            My approach blends systems thinking, behavioral insight, and visual restraint,
            bringing structure and empathy to massive technical landscapes.
          </motion.p>
        </FadeInSection>

        {/* Accent Line */}
        <FadeInSection delay={0.3}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{
              duration: glacialDepth.motion.medium.duration,
              ease: glacialDepth.motion.medium.ease,
            }}
            className="h-[2px] bg-accent mx-auto mt-10"
          />
        </FadeInSection>

        {/* Skills Snapshot */}
        <FadeInSection delay={0.5}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 text-left sm:text-center">
            <div>
              <h3 className="font-serif text-[22px] mb-2 text-accent">Leadership</h3>
              <p className="font-sans text-[16px] text-text/80">
                Mentoring designers and guiding UX strategy for large-scale modernization initiatives.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[22px] mb-2 text-accent">Systems</h3>
              <p className="font-sans text-[16px] text-text/80">
                Building design systems that unify accessibility, efficiency, and brand integrity.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[22px] mb-2 text-accent">Craft</h3>
              <p className="font-sans text-[16px] text-text/80">
                Blending research, motion, and aesthetics to create experiences that feel inevitable.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
