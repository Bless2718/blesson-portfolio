import Container from "@/components/layout/Container";
import ArchitectureCanvas from "./architecture/ArchitectureCanvas";

export default function ArchitectureSection() {
  return (
    <section className="bg-[#050508] py-36">
      <Container>
        <div className="mb-20 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Enterprise Architecture
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Orion AI System Design
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Orion AI is built as a modular enterprise platform where AI services,
            databases, and intelligent workflows collaborate to deliver
            contextual business insights.
          </p>
        </div>

        <ArchitectureCanvas />
      </Container>
    </section>
  );
}