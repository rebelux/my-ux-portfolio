"use client";
import Image from "next/image";
import Link from "next/link";

// ✅ Safe Botpress helper (works with free plan)
function askAIAbout(projectTitle: string) {
  if (typeof window === "undefined" || !window.botpress) return;

  const text = `Tell me about the ${projectTitle} project.`;
  let sent = false;

  const trySend = () => {
    if (sent) return;
    sent = true;
    window.botpress?.sendMessage?.(text);
  };

  window.botpress.open();
  window.botpress.on?.("webchat:ready", trySend);
  window.botpress.on?.("webchat:opened", trySend);
  setTimeout(trySend, 300);
}

// === Project Data ===
const featuredProjects = [
  {
    title: "CDC – NBS Modernization",
    subtitle: "Transforming public health data systems through human-centered design.",
    image: "/images/cdc-nbs-modernization-hero.jpg",
    description:
      "I led UX design for the modernization of CDC’s National Disease Surveillance platform—making it faster, more accessible, and easier for public health professionals to manage nationwide case data.",
    link: "/projects/cdc-nbs-modernization",
  },
  {
    title: "CMS – Identity Management Modernization",
    subtitle: "Streamlining secure access for healthcare data systems through HCD.",
    image: "/images/cms-identity-management-hero.jpg",
    description:
      "As UX Design Lead, I redesigned CMS’s Identity Management platform to simplify onboarding, improve accessibility, and align with Section 508 and USWDS standards for both internal and external users.",
    link: "/projects/cms-identity-management",
  },
  {
    title: "Arrow Digital – Building a UX Discovery Process",
    subtitle: "Transforming a development-focused company into a user-centered design practice.",
    image: "/images/arrow-digital-hero.jpg",
    description:
      "I built and scaled a UX Discovery Framework that redefined how projects were scoped, designed, and delivered—helping Arrow Digital grow from a 12-person development shop into a 200+ employee firm later acquired by Cognizant.",
    link: "/projects/arrow-digital-ux-discovery",
  },
];

const selectedWork = [
  {
    title: "Cracker Barrel",
    description:
      "Modernizing a legacy brand’s digital experience while preserving its charm. We reimagined Cracker Barrel’s online presence with a modern yet rustic aesthetic—bringing its in-store warmth to digital. The redesign also introduced smarter data organization for 600+ locations and proposed an AR experience to boost engagement.",
  },
  {
    title: "Central Electric Cooperative (CREC)",
    description:
      "Turning complex energy data into actionable insights. Designed a real-time Energy Dashboard and mobile tools that gave operations and field teams clear, visual data—enabling faster decisions, stronger collaboration, and more efficient responses in the field.",
  },
  {
    title: "PwC",
    description:
      "Designing enterprise-scale consistency for the world’s largest professional services firm. I directed UX strategy across 20+ internal enterprise applications, defining a cohesive design system that unified workflows and improved usability across PwC’s global software ecosystem.",
  },
  {
    title: "In Touch Ministries",
    description:
      "A complete digital transformation across web, mobile, and media. Partnered with In Touch Ministries to unify its web, mobile, and magazine experiences under one cohesive design system—expanding reach, accessibility, and engagement across audiences and devices.",
  },
];

// === Component ===
export default function ProjectsPage() {
  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-24">
        {/* === Header === */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of case studies showcasing my work in UX design, systems thinking,
            and organizational transformation. Each project demonstrates how design can
            create clarity, efficiency, and measurable impact at scale.
          </p>
        </header>

        {/* === Featured Case Studies === */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500 transition flex flex-col"
              >
                {/* === Image === */}
                <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                {/* === Card Content === */}
                <div className="flex flex-col justify-between p-6 flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-400">
                      {project.title}
                    </h3>
                    <p className="text-sm italic text-zinc-400 mb-2">
                      {project.subtitle}
                    </p>
                    <p
                      className="text-zinc-300 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </div>

                  {/* === Actions === */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-800">
                    <Link
                      href={project.link}
                      className="text-amber-500 hover:text-amber-400 transition text-sm font-medium"
                    >
                      Read Case Study →
                    </Link>
                    <button
                      onClick={() => askAIAbout(project.title)}
                      className="text-sm rounded-lg bg-amber-500 px-3 py-1.5 hover:bg-amber-600 transition"
                    >
                      Ask AI
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === Selected Work === */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Selected Work</h2>
          <div className="grid gap-12 md:grid-cols-2">
            {selectedWork.map((project) => (
              <div key={project.title} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-amber-500 transition">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button
                  onClick={() => askAIAbout(project.title)}
                  className="text-sm text-amber-500 hover:text-amber-400 transition"
                >
                  Ask AI about this project →
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
