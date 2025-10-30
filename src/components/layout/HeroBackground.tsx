'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { glacialDepth } from '@/theme/glacialDepth';
import { CSSProperties } from "react";

interface HeroBackgroundProps {
  src: string;
  alt?: string;
  opacity?: number;
  blendMode?: string;
  fixedToViewport?: boolean;
  heightClass?: string;
  className?: string;
}

export default function HeroBackground({
  src,
  alt = 'Decorative background',
  opacity = 0.85,
  blendMode = 'soft-light',
  fixedToViewport = false,
  heightClass = 'h-[calc(80vh+5rem)]',
  className,
}: HeroBackgroundProps) {
  return (
    <motion.div
      className={`${
        fixedToViewport
          ? 'fixed inset-x-0 top-0 z-0 pointer-events-none'
          : 'absolute inset-0 z-0 pointer-events-none'
      } ${heightClass} overflow-hidden ${className ?? ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      style={{
        backgroundColor: glacialDepth.colors.bg,
      }}
    >
      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            mixBlendMode: blendMode as CSSProperties["mixBlendMode"],
            opacity,
            // ⬇️  Fade out the bottom ~12% of the image
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 88%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 88%, transparent 100%)',
        }}
        className="md:[mask-image:linear-gradient(to_bottom,black_0%,black_92%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_92%,transparent_100%)]"
      />


    </motion.div>
  );
}
