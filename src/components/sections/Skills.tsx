"use client";

import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Wrench,
} from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import FadeContainer from "@/components/common/FadeContainer";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "SQL", "R"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "RAG",
      "Time Series Forecasting",
      "Classification",
      "Clustering",
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["FastAPI", "PostgreSQL", "MySQL", "ETL", "REST APIs"],
  },
  {
    title: "Libraries",
    icon: Layers3,
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  {
    title: "Visualization",
    icon: BarChart3,
    skills: ["Power BI", "KPI Dashboards"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section bg-[#050508] border-y border-white/5">
      <Container>
        <SectionHeading
          title="Technical Skills"
          subtitle="A practical toolkit spanning AI, machine learning, data engineering, analytics, visualization, and modern development workflows."
        />

        <FadeContainer>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <Reveal key={group.title}>
                  <div className="glass h-full rounded-3xl p-8 premium-shadow transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {group.title}
                    </h3>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </FadeContainer>
      </Container>
    </AnimatedSection>
  );
}
