"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 80,
        damping: 18,
        mass: 0.8,
      }}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
}