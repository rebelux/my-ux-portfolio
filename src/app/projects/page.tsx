"use client";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Enterprise Dashboard Redesign",
    description:
      "Improved usability for a complex analytics platform, boosting task efficiency by 40%.",
    image: "/images/project-dashboard.png",
    link: "#",
  },
  {
    title: "Public Health Mobile App",
    description:
      "Designed a mobile experience for health inspectors to streamline field reporting and data accuracy.",
    image: "/images/project-health.png",
    link: "#",
  },
  {
    title: "Design System Implementation",
    description:
      "Built a scalable component library aligned with the Salesforce Lightning Design System for enterprise software.",
    image: "/images/project-design-system.png",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-500/30 transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold">{proj.title}</h2>
              <p className="text-zinc-400 mt-2">{proj.description}</p>

              <div className="mt-4 flex justify-between items-center">
                <Link
                  href={proj.link}
                  className="text-amber-500 hover:text-amber-400 transition"
                >
                  Read Case Study →
                </Link>

                <button
                  onClick={() => {
                    if (typeof window !== "undefined" && window.botpress) {
                      window.botpress.open();
                    }
                  }}
                  className="text-sm text-zinc-300 hover:text-amber-400 transition"
                >
                  Ask AI →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
