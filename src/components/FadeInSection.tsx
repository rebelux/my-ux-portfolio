"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { glacialDepth } from "@/theme/glacialDepth";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: glacialDepth.motion.medium.duration,
        ease: glacialDepth.motion.medium.ease as any,
        delay,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
