import Container from "@/components/layout/Container";
import { projectHighlights } from "@/data/orion-highlights";

import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import BackgroundAmbient from "./ui/BackgroundAmbient";

export default function ProjectHighlightsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050508] py-36">
      <BackgroundAmbient />

      <Container>
        {/* Heading */}

        <Reveal>
          <SectionHeader
            eyebrow="Project Highlights"
            title="Built for Enterprise AI Workflows"
            description="Orion AI combines intelligent automation, secure architecture, enterprise-grade infrastructure, and modern engineering practices into a scalable AI platform."
          />
        </Reveal>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.1}
              >
                <GlassCard className="relative h-full overflow-hidden p-8">
                  {/* Decorative Glow */}

                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      mb-6
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
                      group-hover:rotate-3
                    "
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Accent */}

                  <div className="mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-transparent" />

                  {/* Title */}

                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-100">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-zinc-400">
                    {item.description}
                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

                    <div className="h-px flex-1 bg-gradient-to-r from-blue-500/40 to-transparent" />
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