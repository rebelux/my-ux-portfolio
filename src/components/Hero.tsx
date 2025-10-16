"use client";

import { motion } from "framer-motion";
import { glacialDepth } from "@/theme/glacialDepth";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[--color-bg] text-[--color-text] overflow-hidden px-6">
      {/* soft gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[--color-bg]/10 via-transparent to-[--color-bg-alt]/40" />

      {/* hero heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: glacialDepth.motion.medium.duration,
          ease: glacialDepth.motion.medium.ease,
        }}
        className="font-serif text-center leading-tight text-5xl sm:text-6xl md:text-7xl text-[--color-text]"
      >
        Crafting Clarity from Complexity
      </motion.h1>

      {/* hero subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: glacialDepth.motion.slow.duration,
          ease: glacialDepth.motion.slow.ease,
          delay: 0.2,
        }}
        className="mt-6 max-w-2xl text-center font-sans text-lg sm:text-xl text-[--color-text-muted]"
      >
        I design systems, interfaces, and experiences that make enterprise software feel human.
      </motion.p>
    </section>
  );
}
