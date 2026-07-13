"use client";

import { motion } from "framer-motion";

export default function BackgroundAmbient() {
  return (
    <>
      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-48
          top-20
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-[170px]
          will-change-transform
        "
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [0, -45, 0],
          y: [0, 35, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-0
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-cyan-500/10
          blur-[190px]
          will-change-transform
        "
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-400/6
          blur-[150px]
          will-change-transform
        "
      />

      {/* Extra Floating Accent */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-1/3
          top-1/4
          h-56
          w-56
          rounded-full
          bg-indigo-500/10
          blur-[130px]
          will-change-transform
        "
      />
    </>
  );
}