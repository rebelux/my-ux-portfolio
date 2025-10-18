// src/components/layout/Footer.tsx
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full text-center py-8 text-[--color-text-muted] footer"
    >
      © {new Date().getFullYear()} Henry Tavarez. All rights reserved.
    </motion.footer>
  );
}
