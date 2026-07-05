"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AcademicFooter() {
  return (
    <section className="border-t border-white/5 bg-[#030303] py-28">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <h2 className="gradient-text text-5xl font-bold">
          The Journey Continues
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Every stage of my education has strengthened my ability to solve
          complex problems. Today, I'm applying those foundations to build
          intelligent AI systems and enterprise-grade data solutions.
        </p>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-8 py-4 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/20"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
}