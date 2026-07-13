import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-500/30
        hover:shadow-[0_0_35px_rgba(59,130,246,.18)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}