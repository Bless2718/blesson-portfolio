"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CursorGlowText from "@/components/effects/CursorGlowText";

import { orion } from "@/data/orion";
import AcademicPills from "@/components/education/AcademicPills";
import ArchitectureCanvas from "@/components/architecture/ArchitectureCanvas";

export default function FeaturedProject() {
  return (
    <section className="section bg-[#050508] border-y border-white/5">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:px-10">

        {/* LEFT SIDE */}

        <div className="flex-1">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-400">
            Featured Project
          </p>

          <CursorGlowText 
          className="text-6xl lg:text-8xl leading-none"
          >
            {orion.hero.title}
            </CursorGlowText>

          <h3 className="mt-4 text-2xl font-semibold text-zinc-300">
            {orion.hero.subtitle}
          </h3>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            {orion.hero.description}
          </p>

          <AcademicPills
            title="Technology Stack"
            items={orion.builtWith}
          />

          <Link
            href="/orion"
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-8
              py-4
              font-medium
              text-white
              transition-all
              duration-300
              hover:border-blue-400
              hover:bg-blue-500/20
            "
          >
            View Case Study

            <ArrowRight size={18} />
          </Link>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex flex-1 justify-center">

          <ArchitectureCanvas />

        </div>

      </div>

    </section>
  );
}