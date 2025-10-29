// src/components/layout/MotionSection.tsx
"use client";

import React from "react";
import { motion, type Variants, type TargetAndTransition, type VariantLabels } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";
import { motionTokens } from "@/theme/motionTokens";
import { variants as motionVariants } from "@/theme/motionVariants";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  viewport?: { once?: boolean; amount?: number };
  initial?: TargetAndTransition | VariantLabels; // ← narrowed type
  whileInView?: TargetAndTransition | VariantLabels; // ← narrowed type
  animate?: TargetAndTransition | VariantLabels; // ← narrowed type
}

export default function MotionSection({
  children,
  className,
  delay = 0,
  variants = motionVariants.fadeUp,
  viewport,
  initial = "hidden",
  whileInView = "visible",
  animate,
}: MotionSectionProps) {
  return (
    <motion.section
      className={clsx("relative z-10", className)}
      initial={initial}
      // Spread conditionally: if animate is defined, use it; otherwise whileInView
      {...(animate ? { animate } : { whileInView })}
      variants={variants}
      transition={{
        duration: motionTokens.durations.slow,
        delay,
        ease: motionTokens.easings.out,
      }}
      viewport={viewport ?? { once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
