import Container from "@/components/layout/Container";
import BackgroundAmbient from "./ui/BackgroundAmbient";
import Reveal from "./ui/Reveal";

import {
  ExternalLink,
  FileText,
  ArrowRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function ProjectCTASection() {
  const stats = [
    { value: "10+", label: "Core Modules" },
    { value: "20+", label: "REST APIs" },
    { value: "8+", label: "Enterprise Features" },
    { value: "100%", label: "Responsive UI" },
  ];

  const technologies = [
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "TypeScript",
    "Tailwind CSS",
    "Gemini",
    "LangChain",
    "React Flow",
  ];

  return (
    <section className="relative overflow-hidden bg-[#050508] py-40">
      <BackgroundAmbient />

      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-14
            text-center
            backdrop-blur-xl
          "
        >
          {/* Decorative Glow */}

          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[160px]" />

          {/* Header */}

          <Reveal>
            <>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Project Showcase
              </span>

              <h2 className="mt-6 text-5xl font-bold text-white">
                Ready to Explore Orion AI?
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
                Orion AI demonstrates how modern AI technologies,
                enterprise architecture, scalable backend systems,
                and intelligent automation can be combined into a
                production-ready AI platform.
              </p>
            </>
          </Reveal>

          {/* Statistics */}

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.08}
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-500/30
                    hover:shadow-[0_0_25px_rgba(59,130,246,.18)]
                  "
                >
                  <div className="text-3xl font-bold text-white">
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA Buttons */}

          <Reveal delay={0.25}>
            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <a
                href="https://github.com/Bless2718/orion-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-blue-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-blue-500
                  hover:shadow-[0_0_35px_rgba(59,130,246,.35)]
                "
              >
                <FaGithub size={20} />

                GitHub Repository

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  hover:bg-white/5
                "
              >
                <ExternalLink size={20} />
                Live Demo
              </a>

              <a
                href="#"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  hover:bg-white/5
                "
              >
                <FileText size={20} />
                Documentation
              </a>
            </div>
          </Reveal>

          {/* Tech Stack */}

          <Reveal delay={0.35}>
            <div className="mt-20 border-t border-white/10 pt-10">
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Built With
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <Reveal
                    key={tech}
                    delay={index * 0.04}
                  >
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        px-4
                        py-2
                        text-sm
                        text-blue-300
                        transition-all
                        duration-300
                        hover:border-blue-400/40
                        hover:bg-blue-500/20
                        hover:text-white
                      "
                    >
                      {tech}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}