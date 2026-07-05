"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AcademicPills from "@/components/education/AcademicPills";

interface FeatureSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  location?: string;
  focusTitle: string;
  focus: string[];
  achievements?: string[];
  reverse?: boolean;
  dark?: boolean;
}

export default function FeatureSection({
  eyebrow,
  title,
  subtitle,
  description,
  logo,
  location,
  focusTitle,
  focus,
  achievements = [],
  reverse = false,
  dark = true,
}: FeatureSectionProps) {
  return (
    <section
      className={`border-y border-white/5 py-32 ${
        dark ? "bg-[#030303]" : "bg-[#0A0A0F]"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-20 px-8 lg:px-12 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* LEFT */}

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={logo}
            alt={subtitle}
            width={90}
            height={90}
            className="mb-8 object-contain"
          />

          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            {eyebrow}
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight md:text-7xl whitespace-pre-line">
            {title}
          </h2>

          <h3 className="mt-8 text-2xl font-semibold">
            {subtitle}
          </h3>

          {location && (
            <p className="mt-2 text-zinc-500">
              {location}
            </p>
          )}
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="gradient-text text-3xl font-bold">
            {description}
          </h3>

          <AcademicPills
            title={focusTitle}
            items={focus}
          />

          {achievements.length > 0 && (
            <div className="mt-12">
              <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-violet-400">
                Achievements
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex items-center gap-4"
                  >
                    <div className="h-2 w-2 rounded-full bg-violet-400" />

                    <p className="text-zinc-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}