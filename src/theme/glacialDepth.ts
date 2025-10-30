// src/theme/glacialDepth.ts
// Glacial Depth Theme — Tailwind v4 Compatible + Back-Compat motion.variants
import type { Easing, Variants } from "framer-motion";

// ---- Types for motion tokens
type EasingSafe = [number, number, number, number] | "easeIn" | "easeOut" | "easeInOut";
interface MotionSpeed {
  duration: number;
  ease: Easing; // typed easing (no "as any" needed)
}
interface MotionBlock {
  fast: MotionSpeed;
  medium: MotionSpeed;
  slow: MotionSpeed;
  variants: {
    fadeUp: Variants;
    fadeIn: Variants;
    slideUp: Variants;
  };
}

// ---- Theme object
export const glacialDepth: {
  colors: Record<string, string>;
  type: { serif: string; sans: string };
  spacing: Record<string, string>;
  motion: MotionBlock;
  shadows: { soft: string; medium: string };
} = {
  colors: {
    bg: "var(--color-bg)",
    bgAlt: "var(--color-bg-alt)",
    footer: "var(--color-footer)",
    text: "var(--color-text)",
    textMuted: "var(--color-text-muted)",
    accent: "var(--color-accent)",
    accentHover: "var(--color-accent-hover)",
    border: "var(--color-border)",
    card: "var(--color-card)",
  },

  type: {
    serif: "var(--font-serif)",
    sans: "var(--font-sans)",
  },

  spacing: {
    xs: "var(--space-xs)",
    sm: "var(--space-sm)",
    md: "var(--space-md)",
    lg: "var(--space-lg)",
    xl: "var(--space-xl)",
    section: "var(--space-section)",
    sectionSm: "var(--space-section-sm)",
    // editorial rhythm used on About/Resume flows
    editorial: "56px",
    editorialSm: "48px",
  },

  // Motion speeds + built-in variants (for back-compat)
  motion: {
    fast: {
      duration: 0.15,
      ease: [0.25, 0.1, 0.25, 1] as EasingSafe,
    },
    medium: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as EasingSafe,
    },
    slow: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as EasingSafe,
    },

    // Keep simple, theme-wide variants so existing code like
    // glacialDepth.motion.variants.fadeUp keeps working.
    variants: {
      fadeUp: {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      },
      slideUp: {
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      },
    },
  },

  shadows: {
    soft: "0 4px 20px rgba(0, 0, 0, 0.04)",
    medium: "0 6px 24px rgba(0, 0, 0, 0.08)",
  },
};
