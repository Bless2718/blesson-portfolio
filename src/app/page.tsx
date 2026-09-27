import FeaturedProject from "@/components/sections/FeaturedProject";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/effects/ScrollProgress";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <Skills />

      <div id="projects">
        <FeaturedProject />
      </div>

      <Certifications />
      <Contact />
    </main>
  );
}
