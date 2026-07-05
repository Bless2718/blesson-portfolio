interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-20 text-center">

      <h2 className="gradient-text text-5xl font-bold md:text-6xl">

        {title}

      </h2>

      {subtitle && (

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

          {subtitle}

        </p>

      )}

    </div>
  );
}