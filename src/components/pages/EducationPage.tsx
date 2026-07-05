import AcademicHero from "@/components/education/AcademicHero";
import AcademicJourney from "@/components/education/AcademicJourney";
import AcademicFooter from "@/components/education/AcademicFooter";

export default function EducationPage() {
  return (
    <main className="bg-background text-foreground">
      <AcademicHero />
      <AcademicJourney />
      <AcademicFooter />
    </main>
  );
}