"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">

            <span className="text-sm text-violet-300">

              Open to Data Science Opportunities

            </span>

          </div>

          <h1 className="mt-10 text-7xl md:text-8xl lg:text-9xl font-black tracking-tight md:text-8xl">

            Blesson Samuel

          </h1>

          <h2 className="mt-12 text-4xl font-light text-zinc-300">

            Building intelligent systems with

            <br />

            <span className="font-semibold text-violet-300">

              data, machine learning and analytics.

            </span>

          </h2>

          <div className="mt-12 text-lg text-zinc-500">

            <TypeAnimation
              sequence={[
                "Data Scientist",
                2000,
                "Machine Learning Engineer",
                2000,
                "Data Engineer",
                2000,
                "Data Analyst",
                2000,
              ]}
              repeat={Infinity}
            />

          </div>

          <div className="mt-14 flex justify-center gap-5">

            <Button
              className="
              rounded-full
              px-8
              py-6
              bg-white
              text-black
              hover:bg-zinc-200
              transition-all
              duration-300
              "
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              className="
              rounded-full
              px-8
              py-6
              border-white/10
              bg-white/5
              backdrop-blur-md
              hover:bg-white/10
              "
            >
              Download Resume
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}