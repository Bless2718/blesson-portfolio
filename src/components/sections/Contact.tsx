"use client";

import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/data/site";

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: null,
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="section">
      <Container>
        <SectionHeading
          title="Let's Connect"
          subtitle="Open to data science, machine learning, analytics, and applied AI opportunities where I can build practical systems that turn data into decisions."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="glass rounded-3xl p-8 premium-shadow md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                Contact
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                Have a data, analytics, or AI problem worth solving?
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                I am an Applied Data Science graduate student with hands-on
                experience building machine learning pipelines, forecasting
                systems, REST APIs, AI-powered applications, and dashboards.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]">
                      <div className="rounded-xl bg-violet-500/10 p-3 text-violet-300">
                        <Icon size={19} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                          {item.label}
                        </p>
                        <p className="mt-1 break-all text-sm text-zinc-200">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass flex h-full flex-col justify-between rounded-3xl p-8 premium-shadow md:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                  Professional Profiles
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Find my work online
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  Explore my code, projects, professional background, and
                  current resume.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-zinc-200 transition-all hover:border-violet-400/30 hover:bg-violet-500/10"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin size={19} />
                    LinkedIn
                  </span>
                  <span>↗</span>
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-zinc-200 transition-all hover:border-violet-400/30 hover:bg-violet-500/10"
                >
                  <span className="flex items-center gap-3">
                    <Github size={19} />
                    GitHub
                  </span>
                  <span>↗</span>
                </a>

                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-medium text-black transition-colors hover:bg-zinc-200"
                >
                  <span className="flex items-center gap-3">
                    <Download size={19} />
                    View Resume
                  </span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </AnimatedSection>
  );
}
