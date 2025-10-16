"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { motionTokens } from "@/theme/motionTokens";

interface MotionButtonProps {
  href?: string; // optional for onClick-only buttons
  children: React.ReactNode;
  className?: string;
  variant?: "accent" | "outline" | "secondary";
  onClick?: () => void; // ✅ added support
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset"; // ✅ add this line
  fullWidth?: boolean; // ✅ NEW
}


export default function MotionButton({
  href,
  children,
  className,
  variant = "accent",
  size,
  onClick,
  type = "button",
  fullWidth = false, // ✅ NEW
}: MotionButtonProps) {
  const base =
    "inline-block rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    accent: "bg-accent text-white hover:bg-accent-hover shadow-sm",
    outline: "border border-accent text-accent hover:bg-accent/5",
    secondary:
      "bg-[--color-surface] text-[--color-text] hover:bg-[--color-surface-hover]",
  };
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const content = (
    <motion.div
      whileHover={{
        scale: motionTokens.hover.scale,
        boxShadow: motionTokens.hover.shadow,
        transition: {
          duration: motionTokens.durations.medium,
          ease: motionTokens.easings.out,
        },
      }}
      whileTap={{
        scale: motionTokens.tap.scale,
        transition: {
          duration: motionTokens.durations.fast,
          ease: motionTokens.easings.inOut,
        },
      }}
    >
      <span className={clsx(base, variants[variant], sizeClasses[size || "md"], className)}>{children}</span>
    </motion.div>
  );

  // ✅ Determine if href is external (absolute URL)
  const isExternal =
    href && (href.startsWith("http://") || href.startsWith("https://"));

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={fullWidth ? "block w-full cursor-pointer" : "cursor-pointer"}>
      {content}
    </button>
  );
}
