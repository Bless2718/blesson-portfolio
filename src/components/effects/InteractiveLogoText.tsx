"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function InteractiveLogoText({
  children,
  className = "",
}: Props) {

  const x = useMotionValue(50);
  const y = useMotionValue(50);

  const smoothX = useSpring(x, {
    stiffness: 220,
    damping: 28,
  });

  const smoothY = useSpring(y, {
    stiffness: 220,
    damping: 28,
  });

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseMove={(e) => {

        const rect =
          e.currentTarget.getBoundingClientRect();

        x.set(
          ((e.clientX - rect.left) / rect.width) * 100
        );

        y.set(
          ((e.clientY - rect.top) / rect.height) * 100
        );
      }}
      onMouseLeave={() => {

        x.set(50);

        y.set(50);

      }}
    >

      {/* Base */}

      <h1
        className="
          font-black
          tracking-tight
          text-transparent
          bg-clip-text
        "
        style={{
          background:
            "linear-gradient(90deg,#2563eb,#60a5fa,#2563eb)",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </h1>

      {/* Highlight */}

      <motion.h1
        className="
          absolute
          inset-0
          font-black
          tracking-tight
          pointer-events-none
          text-transparent
          bg-clip-text
        "
        style={{
          background:
            "linear-gradient(90deg,#ffffff,#93c5fd,#ffffff)",

          WebkitBackgroundClip: "text",

          WebkitMaskImage:
            "radial-gradient(circle,black 0%,transparent 70%)",

          WebkitMaskRepeat: "no-repeat",

          WebkitMaskSize: "260px 260px",

          WebkitMaskPositionX: smoothX,

          WebkitMaskPositionY: smoothY,
        }}
      >
        {children}
      </motion.h1>

    </motion.div>
  );
}