interface ArchitectureNodeProps {
  title: string;
  description: string;
  responsibilities?: string[];
  accent?: "blue" | "purple" | "green";
  size?: "sm" | "md" | "lg";
}

export default function ArchitectureNode({
  title,
  description,
  responsibilities = [],
  accent = "blue",
  size = "md",
}: ArchitectureNodeProps) {
  const accentStyles = {
    blue: {
      border: "border-blue-500/30",
      glow: "hover:shadow-[0_0_40px_rgba(59,130,246,.25)]",
      icon: "bg-blue-500/20 border-blue-400/30",
    },

    purple: {
      border: "border-violet-500/30",
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,.25)]",
      icon: "bg-violet-500/20 border-violet-400/30",
    },

    green: {
      border: "border-emerald-500/30",
      glow: "hover:shadow-[0_0_40px_rgba(16,185,129,.25)]",
      icon: "bg-emerald-500/20 border-emerald-400/30",
    },
  };

  const sizeStyles = {
    sm: "w-64 p-6",
    md: "w-72 p-7",
    lg: "w-[420px] p-10",
  };

  const style = accentStyles[accent];
  const sizeClass = sizeStyles[size];

  return (
    <div
      className={`
        group
        relative
        ${sizeClass}
        rounded-3xl
        border
        ${style.border}
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        ${style.glow}
      `}
    >
      {/* Accent Bar */}
      <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-current opacity-70" />

      {/* Icon Placeholder */}
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
          ${style.icon}
        `}
      >
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-white ${
          size === "lg" ? "text-3xl" : "text-xl"
        }`}
      >
        {title}
      </h3>

      {/* Enterprise Badge */}
      {size === "lg" && (
        <span className="mt-3 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
          Enterprise Intelligence Core
        </span>
      )}

      {/* Description */}
      <p
        className={`mt-4 text-zinc-400 ${
          size === "lg"
            ? "text-lg leading-8"
            : "leading-7"
        }`}
      >
        {description}
      </p>
      {responsibilities.length > 0 && (
  <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
    {responsibilities.map((item) => (
      <div
        key={item}
        className="flex items-center gap-3 text-sm text-zinc-300"
      >
        <div className="h-2 w-2 rounded-full bg-blue-400" />

        <span>{item}</span>
      </div>
    ))}
  </div>
)}
    </div>
  );
}