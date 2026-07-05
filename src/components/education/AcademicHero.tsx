"use client";

import { motion } from "framer-motion";

export default function AcademicHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">

      <div className="hero-glow" />

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
          duration: 0.8,
        }}
        className="mx-auto max-w-5xl text-center"
      >

        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">

          Academic Journey

        </p>

        <h1 className="gradient-text mt-8 text-6xl font-bold md:text-8xl">

          Learning.

          <br />

          Growing.

          <br />

          Building.

        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-zinc-400">

          Every academic milestone has contributed to the way I approach
          engineering, problem solving, and building intelligent systems.

        </p>

      </motion.div>

    </section>
  );
}