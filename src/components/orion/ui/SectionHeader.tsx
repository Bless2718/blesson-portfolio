interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        {eyebrow}
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-8 text-lg leading-9 text-zinc-400">
        {description}
      </p>
    </div>
  );
}