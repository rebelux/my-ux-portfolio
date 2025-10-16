// src/theme/motionTokens.ts
type EasingSafe = [number, number, number, number] | "easeIn" | "easeOut" | "easeInOut";

export const motionTokens = {
  durations: { micro: 0.15, fast: 0.25, medium: 0.3, base: 0.4, slow: 0.6, slower: 0.8 },
  easings: {
    standard: "easeInOut" as const,
    in: "easeIn" as EasingSafe,
    out: "easeOut" as EasingSafe,
    inOut: "easeInOut" as EasingSafe,
  },
  stagger: 0.15,
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


