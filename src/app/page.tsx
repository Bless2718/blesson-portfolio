import FeaturedProject from "@/components/sections/FeaturedProject";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/effects/ScrollProgress";
import About from "@/components/sections/About";
export default function Home() {
  return (
    <main className="bg-background text-foreground">

      <ScrollProgress />

      <Navbar />

      <Hero />
      <About />
      <FeaturedProject />
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </main>
  );
}