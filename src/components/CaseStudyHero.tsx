import Image from "next/image";

interface CaseStudyHeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function CaseStudyHero({ title, subtitle, imageUrl }: CaseStudyHeroProps) {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden">
      {imageUrl ? (
        <>
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </>
      ) : (
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
          <span className="text-zinc-500 italic">[No hero image yet]</span>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-zinc-100 max-w-3xl px-6">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-lg text-amber-500 mt-2 italic">{subtitle}</p>}
      </div>
    </div>
  );
}
