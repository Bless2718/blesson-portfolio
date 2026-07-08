import OrionHero from "@/components/orion/OrionHero";
import ProblemSection from "@/components/orion/ProblemSection";
import SolutionSection from "@/components/orion/SolutionSection";
import CoreModulesSection from "@/components/orion/CoreModulesSection";
import ArchitectureSection from "@/components/orion/ArchitectureSection";
export default function OrionPage() {
  return (
    <main className="bg-background text-foreground">
      <OrionHero />
      <ProblemSection />
      <SolutionSection/>
      <CoreModulesSection />
      <ArchitectureSection />
    </main>
  );
}