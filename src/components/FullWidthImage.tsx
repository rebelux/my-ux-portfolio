"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FullWidthImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function FullWidthImage({ src, alt, caption }: FullWidthImageProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      viewport={{ once: true }}
      className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] my-16"
    >
<div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 overflow-hidden bg-[--color-bg-alt]">
  <Image
    src={src}
    alt={alt}
    width={1920}
    height={1080}
    sizes="100vw"
    className="w-full h-auto object-contain transition-transform duration-700 ease-out hover:scale-105"
    priority
  />
</div>

      {caption && (
        <figcaption className="text-center text-sm text-[--color-text-muted] mt-4">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
