"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { glacialDepth } from "@/theme/glacialDepth";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: glacialDepth.motion.medium.duration,
        ease: glacialDepth.motion.medium.ease as any,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[--color-bg]/70"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-[22px] sm:text-[24px] font-serif tracking-tight text-[--color-text] hover:text-[--color-accent] transition-all duration-300"
        >
          Henry Tavarez
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-sans text-[16px] text-[--color-text]">
          {navLinks.map((link) => (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                className="hover:text-[--color-accent] transition-all duration-300"
              >
                {link.label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[--color-accent]/60 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-[--color-text] hover:text-[--color-accent] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: glacialDepth.motion.medium.duration,
              ease: glacialDepth.motion.medium.ease as any,
            }}
            className="md:hidden bg-[--color-bg-alt] border-t border-[--color-border] backdrop-blur-sm shadow-soft"
          >
            <ul className="flex flex-col items-center py-6 space-y-4 font-sans text-[18px] text-[--color-text]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[--color-accent] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
