import Container from "@/components/layout/Container";
import { orionTimeline } from "@/data/orion-timeline";

import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import BackgroundAmbient from "./ui/BackgroundAmbient";

export default function DevelopmentTimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#050508] py-36">
      <BackgroundAmbient />

      <Container>
        {/* Heading */}

        <Reveal>
          <SectionHeader
            eyebrow="Development Journey"
            title="From Idea to Enterprise Platform"
            description="Orion AI was developed through a structured engineering process, progressing from research and architecture to implementation, optimization, and deployment."
          />
        </Reveal>

        {/* Timeline */}

        <div className="mx-auto max-w-5xl">
          {orionTimeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.step}
                delay={index * 0.12}
              >
                <div className="relative flex gap-8 pb-16 last:pb-0">
                  {/* Timeline Column */}

                  <div className="flex flex-col items-center">
                    {/* Timeline Node */}

                    <div
                      className="
                        relative
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-500/30
                        bg-blue-500/10
                        text-blue-300
                        transition-all
                        duration-500
                        hover:scale-110
                        hover:border-blue-400/50
                      "
                    >
                      {/* Glow */}

                      <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                      <Icon
                        size={28}
                        strokeWidth={1.8}
                        className="relative transition-transform duration-300 hover:rotate-6"
                      />
                    </div>

                    {/* Connector */}

                    {index !== orionTimeline.length - 1 && (
                      <div className="mt-4 flex flex-1 justify-center">
                        <div className="w-px bg-gradient-to-b from-blue-500 via-cyan-400/50 to-transparent" />
                      </div>
                    )}
                  </div>

                  {/* Timeline Card */}

                  <GlassCard className="relative flex-1 overflow-hidden p-8">
                    {/* Decorative Glow */}

                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Step Badge */}

                    <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                      Step {item.step}
                    </div>

                    {/* Accent */}

                    <div className="mt-5 mb-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-transparent" />

                    {/* Title */}

                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-100">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-5 leading-8 text-zinc-400">
                      {item.description}
                    </p>

                    {/* Footer */}

                    <div className="mt-8 flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

                      <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                    </div>
                  </GlassCard>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}