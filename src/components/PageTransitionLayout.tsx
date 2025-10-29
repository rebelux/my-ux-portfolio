// src/components/layout/PageTransitionLayout.tsx
"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { glacialDepth } from "@/theme/glacialDepth";

export default function PageTransitionLayout({ children }: { children: React.ReactNode }) {
  // Defer animated backgrounds to the client to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // SSR-safe static gradient fallback (no motion values on the server)
  const staticBg = useMemo(
    () => `linear-gradient(180deg, hsl(210,30%,95%) 0%, hsl(210,25%,92%) 100%)`,
    []
  );

  // Client-only motion values
  const { scrollYProgress } = useScroll();
  const hueShift = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const bgGradient = useTransform(
    hueShift,
    (h) => `linear-gradient(180deg, hsl(${210 + h},30%,95%) 0%, hsl(${210 + h},25%,92%) 100%)`
  );
  const smoothBg = useSpring(bgGradient, { stiffness: 50, damping: 25, mass: 0.5 });
  const pulseOpacity = useSpring(useTransform(scrollYProgress, [0, 1], [0.3, 0.45]), {
    stiffness: 40, damping: 20, mass: 0.5,
  });

  const pageTransition = {
    duration: glacialDepth.motion.medium.duration,
    ease: glacialDepth.motion.medium.ease,
  };

  return (
    <>
      {/* SSR-safe static background always rendered */}
      <div className="fixed inset-0 -z-30 transition-colors" style={{ background: staticBg }} />

      {/* Animated backgrounds only after mount to avoid SSR/CSR mismatch */}
      {mounted && (
        <>
          <motion.div
            style={{ background: smoothBg }}
            className="fixed inset-0 -z-20 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            aria-hidden
          />
          <motion.div
            style={{
              opacity: pulseOpacity,
              background:
                "radial-gradient(ellipse at 50% 110%, rgba(122,140,168,0.25) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="fixed inset-0 -z-10 pointer-events-none"
            aria-hidden
          />
        </>
      )}

      {/* Page content wrapper — no keys here, motion handled by ClientLayout */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={pageTransition}
        className="pt-20 relative overflow-x-hidden"
      >
        {children}
      </motion.div>
    </>
  );
}
