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

export default function PathwayPage() {
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
            Pathway: Designing a Student Development System for High School Guidance
            </motion.h1>
            <motion.p
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-[--color-text-muted] max-w-3xl mx-auto"
            >
            Pathway is an early-stage student development system designed to support reflection and 
            decision-making before high-stakes academic choices occur.<br /><br />

            Role: Product Strategy, UX Design, System Architecture
            </motion.p>
        </MotionSection>
      </Section>

      {/* === The Problem === */}
      <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren} delay={0.1}>
            <motion.h2
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            The Problem: Who Gets Missed
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial={false}
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>High school asks students to make long-term decisions before helping them build 
              the skills needed to make those decisions well.</p>

            <p>By the time students are choosing courses, committing to activities, or thinking 
              about college or post-graduation paths, many of those choices are already constrained. 
              Interests were never named. Tradeoffs were never examined. Decisions accumulated quietly, 
              often by default.</p>

            <p>Guidance systems are largely designed to respond to visible signals. Students who struggle 
              academically receive intervention. Students who excel receive sustained attention and 
              planning support. A large middle group moves forward without friction, but also without 
              much direction.</p>

            <p>These students are rarely in crisis. They meet expectations. They stay on track. 
              As a result, they receive minimal proactive guidance around why they are making certain 
              choices or how those choices connect over time.</p>

            <p>When misalignment surfaces, it usually happens late. Counselors hear things like “I’m 
              only doing this because it was expected” or “I don’t really know what I’m interested in.” At 
              that point, flexibility is limited and conversations shift from exploration to course correction.</p>

            <p>This is not a motivation problem. It is a development problem.</p>

            <Image
                src="/images/pathway-guidance-attention-distribution.png"
                alt="Where Guidance Attention Goes Over Time"
                width={1200}
                height={600}
                className="w-full h-auto mt-8 mb-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />

            <p>Pathway began as an attempt to design for this gap by supporting student development 
              earlier, when reflection is low-stakes and decisions are still flexible.</p>

            </motion.div>
        </MotionSection>
      </Section>

      {/* === Design Principles === */}
      <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Design Principles
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >

        <p>These principles guided the structure and sequencing of Pathway. They reflect deliberate
           tradeoffs rather than abstract ideals.</p>

         <p><strong>Design for development, not outcomes</strong><br />
          Pathway does not optimize for test scores, college admissions, or performance metrics. 
          It focuses on helping students build the underlying skills required to make decisions they 
          understand and can explain, before stakes are high.</p>

          <p><strong>Sequence before scale</strong><br />
          Information delivered at the wrong time creates anxiety and shallow decisions. Milestones 
          are sequenced based on developmental readiness rather than institutional timelines, delaying 
          high-stakes planning until students have language for themselves.</p>

          <p><strong>Treat reflection as persistent data</strong><br />
          Student reflections are not one-off exercises. They accumulate over time and are revisited as 
          context for future decisions. This allows insight to compound rather than reset each year.</p>

          <p><strong>Use AI to support reasoning, not replace it</strong><br />
          AI is intentionally constrained. It reflects patterns, asks contextual questions, and surfaces 
          inconsistencies, but does not recommend paths or make decisions on a student’s behalf.</p>

          <p><strong>Shift effort earlier to reduce downstream pressure</strong><br />
          The system is designed to do more work before guidance meetings occur. This allows conversations 
          to start with shared context instead of information gathering, reducing last-minute course correction.</p>

            </motion.div>

        </MotionSection>
      </Section>

      {/* === System Overview === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            System Overview
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>Pathway is structured as a longitudinal system rather than a collection of features.</p>

            <p>At its core are three connected layers: a milestone framework, a persistent student profile, 
              and a contextual AI reasoning layer. Each layer supports development over time instead of 
              one-off interactions.</p>

            <p>Milestones define moments where students are asked to reflect or make decisions. The student 
              profile acts as the system’s memory, accumulating context across years. AI operates on top of 
              this context to support reasoning without overriding student or counselor judgment.</p>

            <p>This structure allows guidance conversations to build on prior thinking rather than start 
              from scratch, and it creates continuity across grades without forcing linear progress.</p>

             <Image
                src="/images/pathway-system-architecture.png"
                alt="Pathway System Architecture"
                width={1200}
                height={935}
                className="w-full h-auto mt-8 mb-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />

            </motion.div>
        </MotionSection>
      </Section>

      {/* === UI === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            From System to Interface
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>Pathway’s interface translates its underlying system into a calm, legible experience for 
              students navigating uncertainty over time.</p>

              <Image
                src="/images/pathway-single-screen-hero.webp"
                alt="Pathway Example Dashboard"
                width={1600}
                height={1048}
                className="w-full h-auto mt-8 mb-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />

            <p>This view centers the student’s current context while keeping past reflection and future milestones 
            visible without demanding action. Progress is expressed spatially rather than sequentially, reinforcing 
            that revisiting earlier thinking is expected, not corrective.</p>

            <p>The interface prioritizes orientation, reflection, and continuity over task completion. Its role is 
            to support thinking in motion, not to rush students toward outcomes before they are ready.</p>

            </motion.div>
        </MotionSection>
      </Section>

      {/* === Deep Dive: The Milestone Model === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Deep Dive: The Milestone Model
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
                <p>The milestone model reframes guidance around moments where students are implicitly 
                  asked to make decisions, rather than tasks to complete.</p>

                <p>A milestone only qualifies if it maps to a real student decision. Naming interests. 
                  Building habits. Choosing whether to deepen involvement. If a step did not clearly 
                  support student reasoning, it was excluded.</p>

                <p>Milestones are sequenced across grades based on developmental readiness. Early 
                  milestones emphasize exploration and normalization of uncertainty. Later milestones 
                  introduce planning once students have language for themselves.</p>

                <p>To avoid checklist behavior, milestones are revisitable. Inputs are expected to 
                  change over time. Completion marks a moment in context, not a final state.</p>

                <p>Several elements were intentionally excluded early on, including GPA targets, 
                  rankings, and optimization language. These tend to narrow thinking before students 
                  have sufficient context to interpret them.</p>

                <Image
                src="/images/pathway-developmental-focus.png"
                alt="Developmental Focus By Grade"
                width={1200}
                height={550}
                className="w-full h-auto mt-8 mb-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />

                <p>This approach allows students to build self-understanding before being asked to 
                  optimize outcomes, and it gives counselors a clearer picture of how student thinking 
                  evolves over time.</p>
            </motion.div>

        </MotionSection>
      </Section>

      {/* === Deep Dive: Orbital as a Mental Model === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Deep Dive: Orbital as a Mental Model
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
                <p>Orbital emerged from a failure in linear progress models.</p>

                <p>In early prototypes, progress was represented using familiar patterns such as 
                  checklists, step-based flows, and timelines. These models implied forward motion 
                  toward a fixed end state. They worked well for compliance tasks, but poorly for development.</p>

                <p>Students interpreted unfinished or revisited items as falling behind. Returning to 
                  earlier milestones felt like regression, even when it reflected healthy reevaluation. 
                  This effect was most pronounced for students who were unsure but not struggling. The 
                  interface unintentionally added pressure where none was needed.</p>

                <p>Orbital reframes progress as movement around a center rather than toward an endpoint. 
                  Past, present, and future milestones remain visible at the same time. Revisiting earlier 
                  milestones feels expected rather than corrective.</p>

                <p>This model communicates that growth is cyclical, reflection is ongoing, and progress 
                  does not require constant forward motion. Those ideas align directly with Pathway’s 
                  development-first stance.</p>

                <p>Orientation is handled implicitly through visual hierarchy rather than instruction. 
                  The student’s current context anchors the experience. Past milestones recede without 
                  disappearing. Future milestones remain visible without demanding action.</p>

                <Image
                src="/images/pathway-orbital-wireframe.png"
                alt="Orbital Progress Model"
                width={1200}
                height={595}
                className="w-full h-auto mt-8 mb-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />

                <p>The model communicates that growth is cyclical, uncertainty is normal, and 
                  progress does not require constant forward motion. This aligns the interface 
                  with the system’s development-first stance.</p>

            </motion.div>

        </MotionSection>
      </Section>

      {/* === Deep Dive: AI as a Reasoning Layer === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            Deep Dive: AI as a Reasoning Layer
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
                <p>AI in Pathway is intentionally constrained.</p>

                <p>Rather than generating recommendations or prescribing paths, the AI operates as a 
                  reasoning layer that works only in the presence of student context. Its role is to 
                  help students think through their own inputs over time, not to decide on their behalf.</p>

                <p>The AI draws from the persistent student profile to surface patterns, reflect prior 
                  inputs, and ask clarifying questions. Its behavior changes based on where a student 
                  is in their development, avoiding premature guidance or optimization.</p>

                <p>This design avoids common failure modes seen in educational AI, including generic 
                  advice, overconfidence, and loss of student agency. The system does not rank options, 
                  predict outcomes, or suggest “best” paths.</p>

                <Image
                src="/images/pathway-ai-flow.png"
                alt="AI-Supported Reflection Flow"
                width={1200}
                height={595}
                className="w-full h-auto mt-8 mb-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />

                <p>By treating AI as a support for reflection rather than an engine for decisions, 
                  Pathway preserves trust with both students and counselors while still reducing 
                  cognitive load during moments of uncertainty.</p>

            </motion.div>

        </MotionSection>
      </Section>

      {/* === What This Work Validated === */}
      <Section container density="editorial"  className="section--editorial">
        <MotionSection variants={variants.staggerChildren}>
            <motion.h2
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
            >
            What This Work Validated
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>Working through Pathway clarified several assumptions about student guidance and 
              where existing systems fall short.</p>

            <p>Students engage more readily when reflection happens before stakes appear. Low-pressure 
              prompts around interests, habits, and tradeoffs produced more thoughtful responses than 
              late-stage planning conversations that assume clarity already exists.</p>

            <p>Reflection compounds when treated as persistent data. When students could revisit earlier 
              inputs, they began to notice patterns in their own thinking rather than treating each year 
              as a reset. That continuity changed how later decisions were framed and discussed.</p>

            <p>Linear progress models introduce unnecessary pressure for students who are unsure but not 
              struggling. Representing growth as revisitable reduced anxiety around “falling behind” and 
              made reevaluation feel normal rather than corrective.</p>

            <p>AI earned trust through restraint. When positioned as a reasoning aid rather than an authority, 
              it supported student thinking without displacing counselor judgment or student agency.</p>

            <p>Most importantly, guidance breakdowns were less about motivation or effort and more about 
              timing. When support arrives after decisions have already hardened, even good advice feels reactive.</p>

            </motion.div>

        </MotionSection>
      </Section>

      {/* === What’s Still Open === */}
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
            What’s Still Open
            </motion.h2>
            <motion.div
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[--color-text-muted] leading-relaxed space-y-4"
            >
            <p>Pathway is still an early-stage system, and several questions remain intentionally unresolved.</p>

            <p>The right balance between structure and autonomy needs continued testing. Too much structure 
              risks turning reflection into compliance. Too little risks leaving students unsure of how to engage.</p>

            <p>Counselor interaction models require further exploration. The system is designed to reduce 
              cognitive load, but how counselors want to enter, interpret, and act on student context varies widely.</p>

            <p>Accessibility and cognitive load across different student profiles remain open areas. 
              Orbital performs well conceptually, but it will need testing across diverse learning styles 
              and accessibility needs.</p>

            <p>AI boundaries will need ongoing calibration. As context deepens, the line between helpful 
              reflection and unintended influence requires constant attention.</p>

            <p>Finally, outcomes must be measured longitudinally. The true impact of early development work 
              only becomes visible years later, which requires patience, iteration, and humility about what 
              can be claimed early.</p>
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
                onClick={() => askAIAbout('Pathway - Student Gudance Platform"')}
                aria-label="Ask my AI assistant about the Pathway project"
            >
                Ask My AI Assistant
            </MotionButton>
            </div>
        </MotionSection>
      </Section>
    </main>
  );
}
