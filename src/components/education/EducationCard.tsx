interface EducationCardProps {
  year: string;
  degree: string;
  institute: string;
  location: string;
  description: string;
  highlights: string[];
}

export default function EducationCard({
  year,
  degree,
  institute,
  location,
  description,
  highlights,
}: EducationCardProps) {
  return (
    <div
      className="
      glass
      premium-shadow
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-violet-500/40
    "
    >
      <span className="text-violet-400 font-medium">
        {year}
      </span>

      <h3 className="mt-3 text-2xl font-bold">
        {degree}
      </h3>

      <p className="mt-2 text-zinc-400">
        {institute}
      </p>

      <p className="mt-6 leading-8 text-zinc-500">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">

  {highlights.map((item) => (

    <span
      key={item}
      className="
      rounded-full
      border
      border-violet-500/20
      bg-violet-500/10
      px-4
      py-2
      text-sm
      text-violet-300
      "
    >

      {item}

    </span>

  ))}

</div>
    </div>
  );
}