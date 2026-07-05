"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.section>
  );
}