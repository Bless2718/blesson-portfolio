import OrionHero from "@/components/orion/OrionHero";
import ProblemSection from "@/components/orion/ProblemSection";
import SolutionSection from "@/components/orion/SolutionSection";
import CoreModulesSection from "@/components/orion/CoreModulesSection";
import ArchitectureSection from "@/components/orion/ArchitectureSection";
import ProjectHighlightsSection from "@/components/orion/ProjectHighlightsSection";
import TechnologyStackSection from "@/components/orion/TechnologyStackSection";
import DevelopmentTimelineSection from "@/components/orion/DevelopmentTimelineSection";
import FutureRoadmapSection from "@/components/orion/FutureRoadmapSection";
import ProjectCTASection from "@/components/orion/ProjectCTASection";
export default function OrionPage() {
  return (
    <main className="bg-background text-foreground">
      <OrionHero />
      <ProblemSection />
      <SolutionSection/>
      <CoreModulesSection />
      <ArchitectureSection />
      <ProjectHighlightsSection />
      <TechnologyStackSection />
      <DevelopmentTimelineSection />
      <FutureRoadmapSection />
      <ProjectCTASection />
    </main>
  );
}