"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "alt" | "gradient";
  fadeTo?: "bg" | "bg-alt" | "footer" | "none";
  hasGlow?: boolean;
  density?: "default" | "editorial";
  container?: boolean;
  containerClassName?: string;

  /** Background image or pattern */
  backgroundImage?: string;
  backgroundRepeat?: "repeat" | "no-repeat";
  backgroundSize?: "cover" | "contain" | "auto";
  backgroundPosition?: string;

  /** 🆕 Disable background on mobile */
  disableBackgroundOnMobile?: boolean;
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
  backgroundImage,
  backgroundRepeat = "no-repeat",
  backgroundSize = "cover",
  backgroundPosition = "center",
  disableBackgroundOnMobile = false,
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

  // background style for desktop
  const backgroundStyle: CSSProperties | undefined = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat,
        backgroundSize,
        backgroundPosition,
      }
    : undefined;

  return (
    <section
      id={id}
      style={backgroundStyle}
      className={clsx(
        baseClass,
        density === "editorial" && "section--editorial",
        "w-full relative overflow-hidden",
        disableBackgroundOnMobile && "bg-none-mobile",
        className
      )}
    >
      {fadeTo !== "none" && <div className={fadeClass} />}

      <motion.div
        key={id || Math.random()} // ensures re-animation on route change
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={clsx(
          "relative z-10 px-6 sm:px-8",
          container && "mx-auto max-w-5xl",
          containerClassName
        )}
      >
        {children}
      </motion.div>

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
