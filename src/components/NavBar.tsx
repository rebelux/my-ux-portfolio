"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { glacialDepth } from "@/theme/glacialDepth";
import { Menu, X } from "lucide-react";

const MotionLink = motion(Link);

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Scroll-driven values (home page only)
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.3]);          // 0 → 0.8
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.2]);      // 0 → 0.3
  const textColor = useTransform(scrollY, [0, 80], ["#ffffff", glacialDepth.colors.accent]);

  // Convert numeric motion values to CSS-ready strings (no `.to()` use)
  const bgColorMV = useTransform(bgOpacity, (o: number) => `rgba(249, 249, 251, ${o})`);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: glacialDepth.motion.medium.duration,
        ease: glacialDepth.motion.medium.ease,
      }}
      className={clsx("fixed top-0 left-0 right-0 z-50")}
      style={{
        // Background:
        backgroundColor: isHome
          ? bgColorMV
          : `${glacialDepth.colors.bg}cc`, // always frosted elsewhere
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",

        // Shadow:
        boxShadow: useTransform(
          shadowOpacity,
          (s: number) => `0 4px 10px rgba(0,0,0,${s})`
        ),
      }}
    >

      
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <MotionLink
          href="/"
          className={clsx(
            "font-serif text-[22px] sm:text-[24px] tracking-tight font-medium transition-colors hover:text-[--color-accent]"
          )}
          style={isHome ? { color: textColor } : { color: glacialDepth.colors.accent }}
        >
          Henry Tavarez
        </MotionLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 font-sans text-[16px]">
          {navLinks.map((link) => (
            <li key={link.href} className="group relative">
              <MotionLink
                href={link.href}
                className="transition-colors hover:text-[--color-accent]"
                style={isHome ? { color: textColor } : { color: glacialDepth.colors.accent }}
              >
                {link.label}
              </MotionLink>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[--color-accent]/60 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <motion.button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden transition-colors hover:text-[--color-accent]"
          style={isHome ? { color: textColor } : { color: glacialDepth.colors.text }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: glacialDepth.motion.medium.duration,
              ease: glacialDepth.motion.medium.ease,
            }}
            className={clsx(
              "md:hidden border-t backdrop-blur-sm shadow-soft border-[--color-border]",
              "bg-[--color-bg]/85"
            )}
          >
            <ul className="flex flex-col items-center py-6 space-y-4 font-sans text-[18px] text-[--color-text]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <MotionLink
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="transition-colors hover:text-[--color-accent]"
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
