import Hero from "./_components/homeComponents/Hero";
import AboutMe from "./_components/homeComponents/AboutMe";
import ProjectSection from "./_components/homeComponents/ProjectSection";
import Contact from "./_components/homeComponents/Contact";

export default function Home() {
  return (
    <main className="w-full *:px-2 md:*:px-0">
      <Hero />
      <AboutMe />
      <ProjectSection />
      <Contact />
    </main>
  );
}
