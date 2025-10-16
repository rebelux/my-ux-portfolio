"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { variants } from "@/theme/motionVariants";

interface MotionGroupProps {
  children: ReactNode;
  delay?: number;
}

export default function MotionGroup({ children, delay = 0 }: MotionGroupProps) {
  return (
    <motion.div
      variants={variants.staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
