"use client";

import { motion } from "framer-motion";

interface ArchitectureCardProps {
  title: string;
  subtitle?: string;
  delay?: number;
}

export default function ArchitectureCard({
  title,
  subtitle,
  delay = 0,
}: ArchitectureCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.45,
      }}
      className="
        group
        relative
        rounded-2xl
        border
        border-blue-500/20
        bg-white/[0.03]
        backdrop-blur-xl
        px-6
        py-5
        transition-all
        duration-300
        hover:border-blue-400
        hover:-translate-y-1
        hover:shadow-[0_0_35px_rgba(59,130,246,.15)]
      "
    >
      <h4 className="text-base font-semibold text-white">
        {title}
      </h4>

      {subtitle && (
        <p className="mt-2 text-sm text-zinc-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}