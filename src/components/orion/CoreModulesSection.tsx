import Container from "@/components/layout/Container";
import { orion } from "@/data/orion";

export default function CoreModulesSection() {
  return (
    <section className="bg-white py-32 text-zinc-900">
      <Container>
        <div className="mb-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Core Platform
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Enterprise AI Modules
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-zinc-600">
            Orion AI is designed as a modular enterprise platform,
            allowing organizations to combine intelligent search,
            conversational AI, analytics, automation, and secure
            infrastructure into one unified workspace.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {orion.coreModules.map((module) => (
            <div
              key={module.title}
              className="
                rounded-3xl
                border
                border-zinc-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-xl
              "
            >
              <div className="mb-6 h-14 w-14 rounded-2xl border border-blue-200 bg-blue-50" />

              <h3 className="text-2xl font-semibold">
                {module.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-600">
                {module.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {module.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-zinc-300
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-zinc-700
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}