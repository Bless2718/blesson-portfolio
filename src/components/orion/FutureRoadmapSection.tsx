import Container from "@/components/layout/Container";
import { roadmap } from "@/data/orion-roadmap";

import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import BackgroundAmbient from "./ui/BackgroundAmbient";

export default function FutureRoadmapSection() {
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "In Progress":
        return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";

      case "Future":
        return "border-violet-500/30 bg-violet-500/10 text-violet-300";

      default:
        return "border-blue-500/30 bg-blue-500/10 text-blue-300";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#050508] py-36">
      <BackgroundAmbient />

      <Container>
        {/* Heading */}

        <Reveal>
          <SectionHeader
            eyebrow="Future Roadmap"
            title="What's Next for Orion AI"
            description="Orion AI is designed as an evolving enterprise platform with capabilities that can expand alongside organizational needs."
          />
        </Reveal>

        {/* Roadmap */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {roadmap.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.1}
              >
                <GlassCard className="relative h-full overflow-hidden p-7">
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

                  {/* Status */}

                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getStatusClasses(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                  {/* Accent */}

                  <div className="mt-5 mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-transparent" />

                  {/* Title */}

                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-100">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  {/* Progress */}

                  <div className="mt-8">
                    <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                      <span>Roadmap Progress</span>

                      <span>{item.status}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          item.status === "In Progress"
                            ? "w-3/4 bg-emerald-400"
                            : item.status === "Future"
                            ? "w-1/4 bg-violet-400"
                            : "w-1/2 bg-blue-400"
                        }`}
                      />
                    </div>
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