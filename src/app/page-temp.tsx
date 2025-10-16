import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="bg-bg text-text">
      <NavBar />
      <Hero />
      <AboutSection />
      <ProjectsGrid />
    </main>
  );
}

