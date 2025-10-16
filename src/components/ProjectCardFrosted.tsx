"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionButton from "@/components/ui/MotionButton";
import { askAIAbout } from "@/lib/askAI"

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export default function ProjectCardFrosted({
  title,
  subtitle,
  image,
  href,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full flex flex-col relative rounded-2xl bg-[--color-card]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
    <div className="flex-1">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl mb-2 text-[--color-text]">
          {title}
        </h3>
        <p className="text-[--color-text-muted] leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
    {/* === Actions === */}
    <div className="flex justify-between items-center p-6 border-t border-[color:var(--color-border)]">
      <Link
        href={href}
        className="text-amber-500 hover:text-amber-400 transition text-sm font-medium"
      >
        Read Case Study →
      </Link>

      <MotionButton
          variant="accent"
          className="rounded-sm text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition"
          size="sm"
          onClick={() => askAIAbout(title)}
          aria-label="Ask my AI assistant about the ${title} project"
        >
          Ask AI
        </MotionButton>
    </div>
    </motion.div>
  );
}
