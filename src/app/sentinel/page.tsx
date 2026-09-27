import SentinelHero from "@/components/sentinel/SentinelHero";
import ProblemSection from "@/components/sentinel/ProblemSection";
import DatasetSection from "@/components/sentinel/DatasetSection";
import PipelineSection from "@/components/sentinel/PipelineSection";
import EDASection from "@/components/sentinel/EDASection";
import ModelsSection from "@/components/sentinel/ModelsSection";
import ForecastSection from "@/components/sentinel/ForecastSection";
import DashboardSection from "@/components/sentinel/DashboardSection";
import ResultsSection from "@/components/sentinel/ResultsSection";
import TechnologyStackSection from "@/components/sentinel/TechnologyStackSection";
import FutureScopeSection from "@/components/sentinel/FutureScopeSection";
import ProjectCTASection from "@/components/sentinel/ProjectCTASection";

export default function SentinelPage() {
  return (
    <main className="bg-[#050508] text-white">
      <SentinelHero />
      <ProblemSection />
      <DatasetSection />
      <PipelineSection />
      <EDASection />
      <ModelsSection />
      <ForecastSection />
      <DashboardSection />
      <ResultsSection />
      <TechnologyStackSection />
      <FutureScopeSection />
      <ProjectCTASection />
    </main>
  );
}