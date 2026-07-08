"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface CursorGlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function CursorGlowText({
  children,
  className = "",
}: CursorGlowTextProps) {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  const background = useMotionTemplate`
    radial-gradient(
      220px circle at ${mouseX}px ${mouseY}px,
      #ffffff 0%,
      #bfdbfe 12%,
      #60a5fa 28%,
      #3b82f6 48%,
      #2563eb 68%,
      #172554 100%
    )
  `;

  return (
    <div
      className="relative inline-block"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        mouseX.set(-999);
        mouseY.set(-999);
      }}
    >
      <motion.h2
        className={`
          relative
          font-black
          tracking-tight
          text-transparent
          bg-clip-text
          transition-all
          duration-300
          ${className}
        `}
        style={{
          backgroundImage: background,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        {children}
      </motion.h2>
    </div>
  );
}