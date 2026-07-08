import Container from "@/components/layout/Container";
import { orion } from "@/data/orion";

export default function ProblemSection() {
  return (
    <section className="bg-white py-32 text-zinc-900">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              The Problem
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              {orion.problem.heading}
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-600">
              {orion.problem.description}
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <div className="space-y-5">
              {orion.problem.points.map((point) => (
                <div
                  key={point}
                  className="
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        mt-1
                        h-3
                        w-3
                        rounded-full
                        bg-blue-500
                      "
                    />

                    <p className="text-lg leading-8 text-zinc-700">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}