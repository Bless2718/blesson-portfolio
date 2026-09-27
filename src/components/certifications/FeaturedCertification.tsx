"use client";

import Image from "next/image";
import Reveal from "@/components/orion/ui/Reveal";
import GlassCard from "@/components/orion/ui/GlassCard";

import {
  ArrowRight,
  Calendar,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";

interface FeaturedCertificationProps {
  title: string;
  issuer: string;
  partner?: string;
  duration: string;
  description: string;
  image: string;
  status: string;
  credential: string;
}

export default function FeaturedCertification({
  title,
  issuer,
  partner,
  duration,
  description,
  image,
  status,
  credential,
}: FeaturedCertificationProps) {
  return (
    <Reveal>
      <GlassCard className="group relative overflow-hidden p-0">
        {/* Ambient Glow */}

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="grid items-center lg:grid-cols-2">

          {/* Certificate Preview */}

          <a
            href={credential}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden"
          >
            <Image
              src={image}
              alt={title}
              width={900}
              height={650}
              className="
                h-full
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-black/50
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            >
              <span className="rounded-full bg-white px-6 py-3 font-semibold text-black">
                View Certificate
              </span>
            </div>
          </a>

          {/* Content */}

          <div className="p-10">

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <BadgeCheck size={16} />
              {status}
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              {description}
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-zinc-300">
                <GraduationCap
                  size={18}
                  className="text-blue-400"
                />

                <span>
                  {issuer}
                  {partner && ` × ${partner}`}
                </span>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <Calendar
                  size={18}
                  className="text-blue-400"
                />

                <span>{duration}</span>
              </div>

            </div>

            <a
              href={credential}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/link
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-blue-600
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-blue-500
                hover:shadow-[0_0_25px_rgba(59,130,246,.35)]
              "
            >
              View Credential

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </a>

          </div>

        </div>
      </GlassCard>
    </Reveal>
  );
}