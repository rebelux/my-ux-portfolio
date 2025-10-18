"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MotionSection from "@/components/layout/MotionSection";
import MotionButton from "@/components/ui/MotionButton";
import Section from "@/components/layout/Section";
import { variants } from "@/theme/motionVariants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwprrqoq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 7000);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  return (
    <main className="editorial bg-[--color-bg] text-[--color-text]">
      {/* === Header === */}
      <Section container density="editorial" className="section--editorial-alt">
      <MotionSection variants={variants.fadeUp} className="text-center max-w-3xl mx-auto">
        <motion.h1
            variants={variants.fadeUp}
            className="text-4xl md:text-5xl font-serif text-[--color-text]"
            >Contact</motion.h1>
        <motion.p
            variants={variants.fadeUp}
            className="text-[--color-text-muted] leading-relaxed"
        >
            Have a question, collaboration idea, or want to chat about design leadership or UX
          strategy? Send me a message — I’d love to connect.
        </motion.p>
      </MotionSection>
      </Section>

     <Section container density="editorial" className="section--editorial-alt">
      <MotionSection variants={variants.fadeUp} className="max-w-xl mx-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl bg-[color:var(--color-card)]/70 backdrop-blur-md border border-[color:var(--color-border)] px-4 py-3 focus:border-[color:var(--color-accent)] outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl bg-[color:var(--color-card)]/70 backdrop-blur-md border border-[color:var(--color-border)] px-4 py-3 focus:border-[color:var(--color-accent)] outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl bg-[color:var(--color-card)]/70 backdrop-blur-md border border-[color:var(--color-border)] px-4 py-3 focus:border-[color:var(--color-accent)] outline-none transition"
              ></textarea>
            </div>

            <MotionButton
                type="submit"
                variant="accent"
                className="w-full justify-center py-3 text-base"
                fullWidth
                >
                Send Message
            </MotionButton>

            {error && (
              <p className="text-red-500 text-sm mt-4 text-center">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        ) : (
          <motion.div
            className="text-[--color-accent] font-medium mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Thanks for reaching out! I’ll get back to you soon.
          </motion.div>
        )}
    </MotionSection>
    </Section>

    <Section container density="editorial" className="section--editorial" fadeTo="footer">
      {/* === Chat CTA === */}
      <MotionSection
        variants={variants.fadeUp}
        className="text-center bg-[--color-bg-alt]"
      >
        <motion.p variants={variants.fadeUp} className="text-[--color-text-muted] mb-6 max-w-2xl mx-auto">
          Prefer a quicker chat? My AI Assistant can answer questions about my work, projects, or
          design approach — instantly.
        </motion.p>
        <MotionButton
            variant="accent"
            onClick={() => {
                if (typeof window !== "undefined" && window.botpress) {
                window.botpress.open();
                window.botpress.sendMessage?.("Hi! I’d like to contact Henry.");
                }
            }}
            >
            Chat with My AI Assistant
        </MotionButton>
      </MotionSection>
      </Section>
    </main>
  );
}
