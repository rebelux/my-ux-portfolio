"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionButton from "@/components/ui/MotionButton";
import { askAIAbout } from "@/lib/askAI"

interface SelectedWorkProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export default function SelectedWorkFrosted({
  title,
  subtitle,
  image,
  href,
}: SelectedWorkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl bg-[--color-card]/60 backdrop-blur-sm shadow-[0_4px_14px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <Link href={href}>
        <div className="p-6">
          <h3 className="font-serif text-2xl mb-2 text-[--color-text]">
            {title}
          </h3>
          <p className="text-[--color-text-muted] leading-relaxed">
            {subtitle}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
