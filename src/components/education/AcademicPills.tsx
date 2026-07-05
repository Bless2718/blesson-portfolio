"use client";

import { motion } from "framer-motion";

interface AcademicPillsProps {
  title: string;
  items: string[];
}

export default function AcademicPills({
  title,
  items,
}: AcademicPillsProps) {
  return (
    <div className="mt-12">

      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">

        {items.map((item, index) => (

          <motion.span
            key={item}
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="
              rounded-full
              border
              border-violet-500/20
              bg-violet-500/5
              px-5
              py-2
              text-sm
              font-medium
              text-zinc-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-violet-400
              hover:bg-violet-500/10
              hover:text-white
            "
          >
            {item}
          </motion.span>

        ))}

      </div>

    </div>
  );
}