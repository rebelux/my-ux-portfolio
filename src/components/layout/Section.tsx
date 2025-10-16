"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "alt" | "gradient";
  fadeTo?: "bg" | "bg-alt" | "footer" | "none";
  hasGlow?: boolean;
  /** 🆕 tighter vertical rhythm for editorial pages */
  density?: "default" | "editorial";
  /** 🆕 wrap children in a centered container while background stays full-bleed */
  container?: boolean;
  containerClassName?: string;
}

export default function Section({
  children,
  id,
  className = "",
  variant = "default",
  fadeTo = "none",
  hasGlow = true,
  density = "default",
  container = false,
  containerClassName,
}: SectionProps) {
  const baseClass =
    variant === "alt"
      ? "section-alt"
      : variant === "gradient"
      ? "section-gradient"
      : "section";

  const fadeClass =
    fadeTo === "bg"
      ? "section-fade section-fade-to-bg"
      : fadeTo === "bg-alt"
      ? "section-fade section-fade-to-bg-alt"
      : fadeTo === "footer"
      ? "section-fade section-fade-to-footer"
      : "";

  return (
    <section
      id={id}
      className={clsx(
        baseClass,
        density === "editorial" && "section--editorial", // 🆕 tighter spacing
        "w-full relative overflow-hidden",                // ensure full-bleed background/gradients
        className
      )}
    >
      {/* soft fade transition */}
      {fadeTo !== "none" && <div className={fadeClass} />}

      {/* motion wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={clsx("relative z-10", container && "mx-auto max-w-5xl px-6 md:px-8", containerClassName)}
      >
        {children}
      </motion.div>

      {/* ambient glow */}
      {hasGlow && (
        <motion.div
          className="section-glow"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
      )}
    </section>
  );
}
