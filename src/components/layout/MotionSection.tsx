// src/components/layout/MotionSection.tsx
"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";
import { motionTokens } from "@/theme/motionTokens";
import { variants as motionVariants } from "@/theme/motionVariants";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function MotionSection({
  children,
  className,
  delay = 0,
  variants,
}: MotionSectionProps) {
  return (
    <motion.section
      className={clsx("relative z-10", className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionTokens.durations.slow,
        delay,
        // Cast to satisfy Framer's Easing type (cubic-bezier tuple)
        ease: motionTokens.easings.out,
      }}
      viewport={{ once: true, amount: 0.25 }}
      variants={variants ?? motionVariants.fadeUp}
    >
      {children}
    </motion.section>
  );
}
