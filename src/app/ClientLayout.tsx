// src/app/ClientLayout.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import PageTransitionLayout from "@/components/PageTransitionLayout";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segmentKey = pathname.split("/")[1] || "home";

  return (
    <AnimatePresence mode="sync" initial={false}>
      <motion.div
        key={segmentKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <PageTransitionLayout>{children}</PageTransitionLayout>
      </motion.div>
    </AnimatePresence>
  );
}


