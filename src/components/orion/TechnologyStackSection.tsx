import Container from "@/components/layout/Container";
import { techStack } from "@/data/tech-stack";

import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import BackgroundAmbient from "./ui/BackgroundAmbient";

export default function TechnologyStackSection() {
  return (
    <section className="relative overflow-hidden bg-[#050508] py-36">
      <BackgroundAmbient />

      <Container>
        {/* Heading */}

        <Reveal>
          <SectionHeader
            eyebrow="Technology Stack"
            title="Built With Modern Enterprise Technologies"
            description="Orion AI combines a modern frontend, scalable backend, enterprise databases, and AI technologies into a unified, production-ready platform."
          />
        </Reveal>

        {/* Categories */}

        <div className="grid gap-8 lg:grid-cols-2">
          {techStack.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal
                key={category.title}
                delay={index * 0.12}
              >
                <GlassCard className="relative overflow-hidden p-8">
                  {/* Decorative Glow */}

                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Header */}

                  <div className="relative mb-8 flex items-center gap-5">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-blue-500/30
                        bg-blue-500/10
                        text-blue-300
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:border-blue-400/40
                      "
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">
                        {category.technologies.length} Technologies
                      </p>
                    </div>
                  </div>

                  {/* Technology List */}

                  <div className="space-y-4">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="
                          group/item
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-white/5
                          bg-white/[0.02]
                          px-5
                          py-4
                          transition-all
                          duration-300
                          hover:translate-x-1
                          hover:border-blue-500/20
                          hover:bg-blue-500/[0.04]
                        "
                      >
                        <span className="font-medium text-zinc-200 transition-colors duration-300 group-hover/item:text-white">
                          {tech}
                        </span>

                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

                          <div className="h-px w-6 bg-gradient-to-r from-blue-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}