// src/theme/glacialDepth.ts
// Glacial Depth Theme — Tailwind v4 Compatible
// Provides motion tokens and easy access to CSS variable values

export const glacialDepth = {
  colors: {
    bg: "var(--color-bg)",
    bgAlt: "var(--color-bg-alt)",
    footer: "var(--color-footer)",
    text: "var(--color-text)",
    textMuted: "var(--color-text-muted)",
    accent: "var(--color-accent)",
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
      /** 🆕 Editorial rhythm for narrative pages */
    editorial: "56px",
    editorialSm: "48px",
  },

  motion: {
    fast: {
      duration: 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
    medium: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
    slow: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },

  shadows: {
    soft: "0 4px 20px rgba(0, 0, 0, 0.04)",
    medium: "0 6px 24px rgba(0, 0, 0, 0.08)",
  },
};


