"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeContainerProps {
  children: ReactNode;
}

export default function FadeContainer({
  children,
}: FadeContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}