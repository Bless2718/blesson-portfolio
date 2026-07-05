"use client";

import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import FadeContainer from "@/components/common/FadeContainer";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";
import Link from "next/link";

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="section"
    >
      <Container>

        <SectionHeading
          title="About Me"
          subtitle="Passionate about building intelligent systems using Data Science, Machine Learning, Data Engineering, and AI."
        />

        <FadeContainer>

          <div className="grid gap-8 md:grid-cols-2">

            {/* Card 1 */}

            <Reveal>

              <div className="glass rounded-3xl p-8 premium-shadow">

                <h3 className="mb-5 text-2xl font-semibold">

                  👨 About Me

                </h3>

                <p className="leading-8 text-zinc-400">

                  I am currently pursuing my
                  Master's in Applied Data Science
                  while building production-ready
                  AI and Machine Learning projects
                  focused on solving real-world
                  business problems.

                </p>

              </div>

            </Reveal>

            {/* Card 2 */}

            <Reveal>
              <Link
              href="/education"
               className="
                   block
                   glass
                   rounded-3xl
                   p-8
                   premium-shadow
                   transition-all
                   duration-300
                   hover:-translate-y-2
                   hover:border-violet-500/40
                   hover:shadow-[0_0_40px_rgba(168,85,247,.2)]
               ">
                <h3 className="mb-5 text-2xl font-semibold">

                  🎓 Education

                </h3>

                <p className="leading-8 text-zinc-400">

                  MSc Applied Data Science

                  <br />

                  SRM Institute of Science and Technology

                  <br />

                  Expected Graduation: 2027

                </p>
                 <div className="mt-10 flex items-center justify-between">
                    <span
                    className="
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-violet-400
                    "
                    >
                         Explore Academic Journey
                         </span>
                         <span
                         className="
                         text-2xl
                         transition-transform
                         duration-300
                         group-hover:translate-x-2
                         "
                         >
                            →
                         </span>
                 </div>

              </Link>

            </Reveal>

            {/* Card 3 */}

            <Reveal>

              <div className="glass rounded-3xl p-8 premium-shadow">

                <h3 className="mb-5 text-2xl font-semibold">

                  🚀 Career Goal

                </h3>

                <p className="leading-8 text-zinc-400">

                  To become a Data Scientist
                  building enterprise AI systems,
                  machine learning solutions,
                  and intelligent analytics
                  platforms.

                </p>

              </div>

            </Reveal>

          </div>

        </FadeContainer>

      </Container>
    </AnimatedSection>
  );
}