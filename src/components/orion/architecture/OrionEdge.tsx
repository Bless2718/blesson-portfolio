"use client";

import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getSmoothStepPath,
} from "@xyflow/react";

import { motion } from "framer-motion";

export default function OrionEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      {/* Main Line */}

      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "#3b82f6",
          strokeWidth: 2,
          opacity: 0.45,
        }}
      />

      {/* Moving Particle */}

      <EdgeLabelRenderer>
        <motion.div
          className="
            absolute
            h-3
            w-3
            rounded-full
            bg-blue-400
            shadow-[0_0_18px_rgba(59,130,246,.9)]
          "
          style={{
            offsetPath: `path("${edgePath}")`,
          } as any}
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </EdgeLabelRenderer>
    </>
  );
}