import Container from "@/components/layout/Container";
import { orion } from "@/data/orion";
import Reveal from "./ui/Reveal";
export default function SolutionSection() {
  return (
    <Reveal>
    <section className="bg-[#050508] py-32 text-white">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="grid gap-6">
            {orion.solution.features.map((feature) => (
              <div
                key={feature.title}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:bg-blue-500/10
                "
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-blue-500/20 border border-blue-500/30" />

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
              {orion.solution.title}
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              {orion.solution.heading}
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              {orion.solution.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
    </Reveal>
  );
}