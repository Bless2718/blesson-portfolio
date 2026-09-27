"use client";

import Image from "next/image";

import Reveal from "@/components/orion/ui/Reveal";
import GlassCard from "@/components/orion/ui/GlassCard";

import {
  ArrowRight,
  BadgeCheck,
  Calendar,
} from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  duration: string;
  image: string;
  status: string;
  credential: string;
  delay?: number;
}

export default function CertificationCard({
  title,
  issuer,
  duration,
  image,
  status,
  credential,
  delay = 0,
}: CertificationCardProps) {
  return (
    <Reveal delay={delay}>
      <GlassCard className="group relative h-full overflow-hidden p-0">

        {/* Glow */}

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-[90px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Certificate Preview */}

        <a
          href={credential}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden"
        >
          <Image
            src={image}
            alt={title}
            width={700}
            height={500}
            className="
              h-56
              w-full
              object-cover
              transition-transform
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
              bg-black/45
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          >
            <span className="rounded-full bg-white px-5 py-2 font-semibold text-black">
              View
            </span>
          </div>
        </a>

        {/* Content */}

        <div className="p-7">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
            <BadgeCheck size={14} />
            {status}
          </span>

          <h3 className="mt-5 text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-zinc-400">
            {issuer}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
            <Calendar
              size={16}
              className="text-blue-400"
            />

            {duration}
          </div>

          <a
            href={credential}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link
              mt-8
              inline-flex
              items-center
              gap-2
              font-semibold
              text-blue-400
              transition-colors
              duration-300
              hover:text-blue-300
            "
          >
            View Credential

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </a>

        </div>

      </GlassCard>
    </Reveal>
  );
}