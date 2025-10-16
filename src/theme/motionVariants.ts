// src/theme/motionVariants.ts
import { Variants } from "framer-motion";
import { motionTokens } from "./motionTokens";

export const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.durations.base,
        ease: motionTokens.easings.out,
      },
    },
  },

  /** 👇 Add this one — container for sequencing child animations */
  staggerChildren: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },

  /** Existing ones you already have */
  scaleIn: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: motionTokens.durations.fast,
        ease: motionTokens.easings.out,
      },
    },
  },
};
