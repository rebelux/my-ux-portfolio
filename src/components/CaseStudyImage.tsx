// src/components/case-study/CaseStudyImage.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { variants } from "@/theme/motionVariants";

interface CaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "4/3" | "16/9" | "square"; // visual ratio only
  className?: string;                  // let pages control placement
  priority?: boolean;
}

export default function CaseStudyImage({
  src,
  alt,
  caption,
  //aspect = "16/9",
  className = "",
  //priority = false,
}: CaseStudyImageProps) {
  /*const aspectClasses =
    aspect === "4/3"
      ? "aspect-[4/3]"
      : aspect === "square"
      ? "aspect-square"
      : "aspect-video";*/

  return (
    <motion.figure
      variants={variants.fadeUp}
      className={`group ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
<div
  className={`relative w-screen overflow-hidden left-1/2 right-1/2 -translate-x-1/2 rounded-2xl min-h-[300px] my-16`}
>
  <Image
    src={src}
    alt={alt}
    fill
    sizes="100vw"
    className="object-contain w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
  />
</div>


      {caption && (
        <figcaption className="text-center text-[--color-text-muted] text-sm mt-3">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
