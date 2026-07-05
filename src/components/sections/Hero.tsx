"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <div className="hero-glow" />

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto max-w-6xl text-center"
        >

          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">

            <span className="text-sm text-violet-300">

              Available for Opportunities

            </span>

          </div>

          <h2 className="mx-auto mt-10 max-w-4xl text-3xl font-light leading-relaxed text-zinc-300 md:text-5xl">

            Transforming Data Into
            <br />
            <span className="text-violet-300">
                Intelligent Decisions
            </span>

          </h2>

          <div className="mt-10 text-lg text-zinc-500 md:text-2xl">

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

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-zinc-400">

            Building scalable data platforms,
            machine learning solutions,
            enterprise analytics systems,
            and intelligent applications
            that solve real-world business problems.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Button
              size="lg"
              className="rounded-full bg-white px-10 py-7 text-base"
              onClick={() => {
                document
                .getElementById("projects")
                ?.scrollIntoView({
                    behavior: "smooth",
                    });
                    }}
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border border-white/10 bg-white/5 px-10 py-7 text-base text-white backdrop-blur-xl hover:bg-white/10 hover:text-white"
              onClick={() => {
                window.open(siteConfig.resume, "_blank");
                }}
            >
                Download Resume
            </Button>

          </div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-24 text-3xl text-zinc-600"
          >

            ↓

          </motion.div>

        </motion.div>

      </Container>
    </section>
  );
}