"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-5 inset-x-0 z-50">
      <Container>
        <nav className="glass premium-shadow flex h-16 items-center justify-between rounded-full px-7">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight transition-colors hover:text-violet-300"
          >
            BS.
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-zinc-400 transition-all duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button
            className="rounded-full bg-white text-black hover:bg-zinc-200 px-6"
            onClick={() => window.open(siteConfig.resume, "_blank")}
          >
            Resume
          </Button>
        </nav>
      </Container>
    </header>
  );
}
