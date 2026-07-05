"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[3px] origin-left bg-violet-500"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}