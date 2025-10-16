"use client";
import Link from "next/link";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import Section from "@/components/layout/Section";
import { motion } from "framer-motion";
import { variants } from "@/theme/motionVariants";
import { askAIAbout } from "@/lib/askAI"

export default function ResumePage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={variants.fadeUp}
      transition={{ duration: 0.8 }}
      className="editorial bg-[--color-bg] text-[--color-text]"
    >
      <Section container density="editorial" className="section--editorial">
        <MotionSection variants={variants.staggerChildren} className="text-center">
        <motion.h1
            variants={variants.fadeUp}
            className="text-4xl md:text-5xl font-serif text-[--color-text]"
            >Résumé</motion.h1>
        <motion.p
            variants={variants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-center text-[--color-text-muted] max-w-2xl mx-auto mb-16 leading-relaxed"
          >
          Here’s a concise overview of my professional experience, leadership background, and core
          design skills. A downloadable PDF version is available below.
        </motion.p>
        </MotionSection>
        {/* ✅ Add this ambient glow behind header */}
        <motion.div
            className="absolute top-[30%] left-1/2 w-[500px] h-[500px] -translate-x-1/2 rounded-full blur-[140px] bg-[--color-accent]/10 -z-10"
            animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
        />
      </Section>

        {/* === Professional Experience === */}
        <Section container density="editorial" className="section--editorial-alt">
                <MotionSection variants={variants.staggerChildren}>
          <motion.h2 
          variants={variants.fadeUp} 
          className="border-b border-[color:var(--color-border)] pb-4 mb-8">
            Professional Experience
          </motion.h2>

          {/* === CDW === */}
          <motion.div variants={variants.fadeUp}>
            <h3>UX Lead</h3>
            <p className="text-[--color-text-muted]">CDW-G — 2022–Present</p>
            <p className="text-[--color-text] leading-relaxed mt-2 mb-4">
              Leading UX design initiatives for the modernization of the CDC’s National Disease
              Surveillance (NBS) platform—enhancing usability, scalability, and accessibility across
              public health agencies nationwide.
            </p>
            <ul className="list-disc pl-6">
              <li>
                Designed and governed the NBS design system using the U.S. Web Design System (USWDS)
                as a foundation.
              </li>
              <li>
                Facilitated co-creation workshops with public health users nationwide to inform and
                validate design direction.
              </li>
              <li>
                Partnered with stakeholders to define requirements and deliver measurable design
                outcomes.
              </li>
              <li>
                Mentored UX designers, reinforcing a strong Human-Centered Design (HCD) practice
                grounded in collaboration and iteration.
              </li>
            </ul>
          </motion.div>

          {/* === C-HIT === */}
          <motion.div 
            variants={variants.fadeUp} 
            className="border-t border-[color:var(--color-border)] mt-8">
            <h3 className="text-xl font-semibold">
              Human-Centered Design Lead
            </h3>
            <p className="text-[--color-text-muted]">C-HIT — 2021–2022</p>
            <p className=" leading-relaxed mt-2 mb-4">
              Led HCD efforts for CMS’s Identity Management modernization, advocating for
              user-centered design and accessible, efficient workflows for internal and external
              users.
            </p>
            <ul className="list-disc pl-6">
              <li>Championed a research-based, user-focused approach across product teams.</li>
              <li>
                Collaborated directly with business owners and engineers to align goals, define
                requirements, and ensure implementation met both user and technical needs.
              </li>
              <li>
                Guided implementation of a design system aligned with USWDS standards within an
                Agile (SAFe) environment.
              </li>
            </ul>
          </motion.div>

          {/* === Rebel UX === */}
          <motion.div 
            variants={variants.fadeUp} 
            className="border-t border-[color:var(--color-border)] mt-8">
            <h3 className="text-xl font-semibold">
              Founder & Head of User Experience
            </h3>
            <p className="text-[--color-text-muted]">Rebel UX — 2018–2021</p>
            <p className=" leading-relaxed mt-2 mb-4">
              Founded and led a UX consultancy focused on designing human-centered products and
              services for startups, government agencies, and enterprise clients.
            </p>
            <ul className="list-disc pl-6">
              <li>
                Built scalable design systems (USWDS, Material) for federal and enterprise software
                projects.
              </li>
              <li>
                Partnered with clients including PwC, CMS, Total Wine, and AAMC on end-to-end UX
                strategy and design execution.
              </li>
            </ul>
          </motion.div>

          {/* === Arrow Digital (Partner) === */}
          <motion.div 
            variants={variants.fadeUp} 
            className="border-t border-[color:var(--color-border)] mt-8">
            <h3 className="text-xl font-semibold">Partner, User Experience</h3>
            <p className="text-[--color-text-muted]">Arrow Digital (Acquired by Cognizant) — 2016–2018</p>
            <p className=" leading-relaxed mt-2 mb-4">
              Oversaw Arrow Digital’s UX practice, driving vision, methodology, and client strategy
              for large-scale digital initiatives.
            </p>
            <ul className="list-disc pl-6">
              <li>
                Scaled the UX team into a mature practice generating over $3M in annual revenue.
              </li>
              <li>
                Led UX strategy for PwC’s financial software suite—representing over $10M in annual
                revenue.
              </li>
              <li>
                Mentored senior associates, codifying Arrow’s UX delivery model and leadership
                culture.
              </li>
              <li>
                Oversaw major digital initiatives for Cracker Barrel, GL Homes, Hilton, and In Touch
                Ministries.
              </li>
            </ul>
          </motion.div>

          {/* === Arrow Digital (Creative Director) === */}
          <motion.div 
            variants={variants.fadeUp} 
            className="border-t border-[color:var(--color-border)] mt-8">
            <h3 className="text-xl font-semibold">Creative Director</h3>
            <p className="text-[--color-text-muted]">Arrow Digital — 2011–2015</p>
            <p className=" leading-relaxed mt-2 mb-4">
              Led a multidisciplinary team of designers and UX professionals to deliver interactive
              web and enterprise solutions from concept to completion.
            </p>
            <p className=" leading-relaxed">
              Introduced user-centered design principles to the firm’s development process,
              significantly improving interface quality and client outcomes.
            </p>
          </motion.div>

          {/* === Early Roles === */}
          <motion.div 
            variants={variants.fadeUp} 
            className="border-t border-b border-[color:var(--color-border)] mt-8 pb-8 space-y-4">
            <h3 className="text-xl font-semibold">Earlier Roles</h3>
            <div>
              <p className="">
                <strong>UX Lead / Senior Associate</strong> — Arrow Digital • 2010–2011
              </p>
              <p className="text-[--color-text-muted]">
                Led discovery, design, and implementation for enterprise clients such as Hilton and
                PwC; introduced UX processes that improved project scoping and delivery.
              </p>
            </div>
            <div>
              <p className="">
                <strong>User Interface Architect</strong> — ResumeSponge • 2010
              </p>
              <p className="text-[--color-text-muted]">
                Built scalable front-end architecture and interactive prototypes to accelerate design
                iteration and testing.
              </p>
            </div>
            <div>
              <p className="">
                <strong>Senior Interaction Designer</strong> — Campus Management Corp • 2008–2010
              </p>
              <p className="text-[--color-text-muted]">
                Designed and implemented accessible, web-based interfaces for enterprise education
                software, ensuring 508 compliance and scalability.
              </p>
            </div>
            <div>
              <p className="">
                <strong>Interactive Art Director</strong> — Extinction Level • 2005–2010
              </p>
              <p className="text-[--color-text-muted]">
                Led creative for digital campaigns and experiences for brands such as Nike, BMW
                Mini, Virgin Atlantic, and CareerBuilder.
              </p>
            </div>
          </motion.div>
        <motion.div 
            variants={variants.fadeUp} 
            className="border-b border-[color:var(--color-border)] mt-8 pb-8 space-y-4">
         <motion.h2 
          variants={variants.fadeUp}>Core Skills</motion.h2>
          <p>
            UX Strategy · Research & Synthesis · Design Systems (USWDS) · Accessibility (Section
            508) · Prototyping · Workshop Facilitation · Leadership & Mentorship · Stakeholder
            Collaboration · Agile Delivery · Figma · Miro
          </p>
          </motion.div>
        <motion.div 
            variants={variants.fadeUp} 
            className="border-b border-[color:var(--color-border)] mt-8 pb-8 space-y-4">
          <motion.h2 
          variants={variants.fadeUp}>Education & Military</motion.h2>
          <div>
            <p className="font-semibold">
              Art Institute of Fort Lauderdale
            </p>
            <p className="mb-4">B.S. — Interactive Media Design, 2005</p>
          </div>
          <div>
            <p className="font-semibold">United States Marine Corps</p>
            <p>Communications</p>
          </div>
           {/* === PDF Download === */}
        </motion.div>
        <motion.p 
            variants={variants.fadeUp} 
            className="mt-8 mb-4 text-center">
          Want to learn more about my professional experience?
        </motion.p>
         <motion.div variants={variants.scaleIn} className="flex justify-center gap-4 flex-wrap">
            <MotionButton
            variant="accent"
            onClick={() => askAIAbout('Henry&apos;s Professional Experience')}
            aria-label="Ask my AI assistant about the CMS Identity Management Modernization project"
        >
            Ask My AI Assistant
        </MotionButton>
            <MotionButton
            variant="outline"
            href="/files/Henry-Tavarez-Resume.pdf"
            aria-label="Download my résumé"
        >
            Download Résumé (PDF)
        </MotionButton>

           
        </motion.div>
        </MotionSection>
      </Section>   
    </motion.main>
  );
}
