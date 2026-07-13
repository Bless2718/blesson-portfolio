"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import {
  User,
  ShieldCheck,
  Cpu,
  FileText,
  Bot,
  Database,
  Layers3,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

type OrionNodeData = {
  title: string;
  responsibilities: string[];
  variant?: "default" | "core";
};

export default function OrionNode({
  data,
}: NodeProps<OrionNodeData>) {
  const isCore = data.variant === "core";

  const getAccent = () => {
    switch (data.title) {
      // Green
      case "Users":
      case "Analytics Dashboard":
        return {
          border: "border-emerald-500/30",
          iconBorder: "border-emerald-400/30",
          iconBg: "bg-emerald-500/10",
          iconText: "text-emerald-300",
          glow: "hover:shadow-[0_0_35px_rgba(16,185,129,.25)]",
          badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
          dot: "bg-emerald-400",
        };

      // Purple
      case "Authentication":
      case "AI Assistant":
      case "Gemini / OpenAI":
        return {
          border: "border-violet-500/30",
          iconBorder: "border-violet-400/30",
          iconBg: "bg-violet-500/10",
          iconText: "text-violet-300",
          glow: "hover:shadow-[0_0_35px_rgba(168,85,247,.25)]",
          badge: "bg-violet-500/10 border-violet-500/30 text-violet-300",
          dot: "bg-violet-400",
        };

      // Blue (default)
      default:
        return {
          border: "border-blue-500/30",
          iconBorder: "border-blue-400/30",
          iconBg: "bg-blue-500/10",
          iconText: "text-blue-300",
          glow: "hover:shadow-[0_0_35px_rgba(59,130,246,.25)]",
          badge: "bg-blue-500/10 border-blue-500/30 text-blue-300",
          dot: "bg-blue-400",
        };
    }
  };

  const accent = getAccent();

  const getIcon = () => {
    switch (data.title) {
      case "Users":
        return <User size={24} />;

      case "Authentication":
        return <ShieldCheck size={24} />;

      case "Orion AI Core":
        return <Cpu size={30} strokeWidth={1.6} />;

      case "Document AI":
        return <FileText size={24} />;

      case "AI Assistant":
        return <Bot size={24} />;

      case "SQL Agent":
        return <Database size={24} />;

      case "Vector DB":
        return <Layers3 size={24} />;

      case "Gemini / OpenAI":
        return <BrainCircuit size={24} />;

      case "Analytics Dashboard":
        return <BarChart3 size={24} />;

      default:
        return <Cpu size={24} />;
    }
  };

  return (
    <div
      className={`
        relative
        ${isCore ? "w-[480px]" : "w-[360px]"}
        rounded-3xl
        border
        ${isCore ? "border-blue-400/60" : accent.border}
        bg-gradient-to-br
        from-[#0b1120]
        via-[#0d1529]
        to-[#05070f]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-[1.02]
        ${accent.glow}
      `}
    >
      {/* Orion Core Glow */}
      {isCore && (
        <>
          <div
            className="
              absolute
              inset-0
              -z-20
              rounded-[40px]
              bg-blue-500/20
              blur-3xl
              opacity-70
            "
          />

          <div
            className="
              absolute
              -inset-2
              -z-10
              rounded-[36px]
              border
              border-blue-400/20
              animate-[spin_18s_linear_infinite]
            "
          />
        </>
      )}

      <Handle type="target" position={Position.Top} />

      {/* Icon */}
      <div
        className={`
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          ${
            isCore
              ? "border-blue-400/40 bg-blue-500/20 text-blue-300"
              : `${accent.iconBorder} ${accent.iconBg} ${accent.iconText}`
          }
        `}
      >
        {getIcon()}
      </div>

      {/* Accent Bar */}
      <div
        className={`
          mb-5
          h-1
          w-24
          rounded-full
          ${
            isCore
              ? "bg-gradient-to-r from-blue-400 to-cyan-300"
              : "bg-white/20"
          }
        `}
      />

      {/* Title */}
      <h3
        className={`font-bold text-white ${
          isCore ? "text-3xl" : "text-2xl"
        }`}
      >
        {data.title}
      </h3>

      {/* Badge */}
      {isCore && (
        <div className="mt-3 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
          Enterprise Intelligence Core
        </div>
      )}

      {/* Responsibilities */}
      <div className="mt-7 space-y-3">
        {data.responsibilities.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-zinc-300"
          >
            <div
              className={`
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                ${isCore ? "bg-blue-500/10" : accent.iconBg}
              `}
            >
              <div
                className={`h-2 w-2 rounded-full ${
                  isCore ? "bg-blue-400" : accent.dot
                }`}
              />
            </div>

            <span>{item}</span>
          </div>
        ))}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}