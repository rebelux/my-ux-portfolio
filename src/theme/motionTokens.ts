// src/theme/motionTokens.ts
type EasingSafe = [number, number, number, number] | "easeIn" | "easeOut" | "easeInOut";
import type { Easing } from "framer-motion";

interface MotionDurations {
  micro: number;
  fast: number;
  medium: number;
  base: number;
  slow: number;
  slower: number;
}

interface MotionEasings {
  in: Easing;
  out: Easing;
  inOut: Easing;
  standard: Easing;
}

interface MotionStagger {
  micro: number;
  short: number;
  medium: number;
  long: number;
}

interface MotionTransforms {
  slightLift: {
    y: number;
    opacity: number;
  };
  slideUp: {
    y: number;
    opacity: number;
  };
  [key: string]: any; // optional catch-all for future transforms
}

interface MotionHover {
  scale: number;
  shadow: string;
  [key: string]: any; // allows safe future hover variants
}

interface MotionTap {
  scale: number;
  [key: string]: any; // allows safe future hover variants
}

interface MotionTokens {
  durations: MotionDurations;
  easings: MotionEasings;
  stagger: MotionStagger;
  transforms: MotionTransforms;
  hover: MotionHover;
  tap: MotionTap;
}



export const motionTokens: MotionTokens = {
  durations: { micro: 0.15, fast: 0.25, medium: 0.3, base: 0.4, slow: 0.6, slower: 0.8 },
  easings: {
    standard: "easeInOut" as const,
    in: "easeIn" as EasingSafe,
    out: "easeOut" as EasingSafe,
    inOut: "easeInOut" as EasingSafe,
  },
  stagger: { micro: 0.05, short: 0.1, medium: 0.2, long: 0.4 },
  transforms: {
    slightLift: { y: 20, opacity: 0 },
    slideUp: { y: 40, opacity: 0 },
  },
  hover: {
    scale: 1.04,
    shadow: "0 8px 20px rgba(255,255,255,0.15)",
  },
  tap: {
    scale: 0.97,
  },
};


