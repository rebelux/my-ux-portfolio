"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionButton from "@/components/ui/MotionButton";

interface SelectedWorkFrostedProps {
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
}: SelectedWorkFrostedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full flex items-stretch relative rounded-2xl bg-[--color-card]/80 backdrop-blur-md 
                 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden 
                 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
    >
      {/* Thumbnail with hover zoom and shimmer pulse */}
      <div className="relative w-40 min-h-[8rem] flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="160px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Animated shimmer overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[--color-accent]/25 to-transparent"
          whileHover={{
            opacity: [0.3, 0.5, 0.3],
            backgroundPositionX: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 2.4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center flex-1 p-6 md:p-8">
        <h3 className="font-serif text-lg md:text-xl text-[--color-text] mb-1">
          {title}
        </h3>
        <p className="text-[--color-text-muted] mb-4 text-sm leading-snug">
          {subtitle}
        </p>
        <Link href={href}>
          <MotionButton variant="outline" size="sm" className="self-start">
            View Project
          </MotionButton>
        </Link>
      </div>
    </motion.div>
  );
}
