"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { glacialDepth } from "@/theme/glacialDepth";
import { useEffect } from "react";

export default function PageTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const key = pathname.split("/")[1] || "home";
  const { scrollYProgress } = useScroll();


  // === Background motion setup ===
  const hueShift = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const bgGradient = useTransform(
    hueShift,
    (h) =>
      `linear-gradient(180deg, hsl(${210 + h}, 30%, 95%) 0%, hsl(${
        210 + h
      }, 25%, 92%) 100%)`
  );
  const smoothBg = useSpring(bgGradient, { stiffness: 50, damping: 25, mass: 0.5 });

  const pulseOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.45]);
  const smoothPulse = useSpring(pulseOpacity, { stiffness: 40, damping: 20, mass: 0.5 });

  const transition = {
    duration: glacialDepth.motion.medium.duration,
    ease: glacialDepth.motion.medium.ease,
  };

  useEffect(() => {
    document.body.style.transition = "background-color 0.5s ease-out";
  }, []);

  return (
    <>
      {/* === Static Background (persists between routes) === */}
      <motion.div
        style={{ background: smoothBg }}
        className="fixed inset-0 -z-20 transition-colors"
      />
      <motion.div
        style={{
          opacity: smoothPulse,
          background: `radial-gradient(ellipse at 50% 110%, rgba(122,140,168,0.25) 0%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="fixed inset-0 -z-10 pointer-events-none"
      />

      {/* === Page transition wrapper === */}

        <motion.div
          key={key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={transition}
          className="text-text font-sans overflow-x-hidden relative"
        >
          {children}
        </motion.div>

    </>
  );
}

