"use client";
import Image from "next/image";
import Link from "next/link";

// top of file (after imports)
function askAIAbout(projectTitle: string) {
  if (typeof window === "undefined" || !window.botpress) return;

  const text = `Tell me about the ${projectTitle} case study.`;
  let sent = false;

  const trySend = () => {
    if (sent) return;
    sent = true;
    window.botpress?.sendMessage?.(text);
  };

  // Open chat, then try to send once it's ready/open.
  window.botpress.open();
  window.botpress.on?.("webchat:ready", trySend);
  window.botpress.on?.("webchat:opened", trySend);

  // Fallback in case events have already fired
  setTimeout(trySend, 300);
}


export default function ProjectsPage() {
  const projects = [
    {
      title: "CDC – NBS Modernization",
      subtitle: "Transforming public health data systems through human-centered design.",
      image: "/images/cdc-nbs-modernization-hero.jpg",
      description:
        "Led UX design for CDC&rsquo;s modernization of the National Disease Surveillance platform, improving usability, accessibility, and scalability for public health professionals nationwide.",
      link: "/projects/cdc-nbs-modernization",
    },
    {
      title: "CMS – Identity Management Modernization",
      subtitle: "Streamlining secure access for healthcare data systems through HCD.",
      image: "/images/cms-identity-management-hero.jpg",
      description:
        "Redesigned CMS&rsquo;s Identity Management system to simplify onboarding, improve accessibility, and ensure Section 508 compliance across internal and external user groups.",
      link: "/projects/cms-identity-management",
    },
    {
      title: "Arrow Digital – Building a UX Discovery Process",
      subtitle: "Transforming a development-focused company into a user-centered design practice.",
      image: "/images/arrow-digital-hero.jpg",
      description:
        "Developed and scaled a UX discovery process that became core to Arrow Digital&rsquo;s delivery model—helping grow the company from 12 to over 200 employees and positioning it for acquisition.",
      link: "/projects/arrow-digital-ux-discovery",
    },
  ];

  return (
    <main className="bg-black text-zinc-100 px-6 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-16">
        {/* === Page Header === */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of case studies showcasing my work in UX design, systems thinking,
            and organizational transformation. Each project demonstrates how design can create
            clarity, efficiency, and measurable impact at scale.
          </p>
        </header>

        {/* === Project Cards === */}
        <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {projects.map((project) => (
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
                <h2 className="text-xl font-semibold text-amber-400">{project.title}</h2>
                <p className="text-sm italic text-zinc-400 mb-2">{project.subtitle}</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* === Actions Row === */}
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
        </section>
      </div>
    </main>
  );
}