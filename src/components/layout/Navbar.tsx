"use client";

import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <nav className="mt-8 flex h-16 items-center justify-between rounded-full border border-white/5 bg-black/40 backdrop-blur-3xl px-8">
          <h1 className="text-xl font-bold tracking-wide">
            Blesson Samuel
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a
              href="#about"
              className="transition hover:text-zinc-400"
              >
                About
              </a>
            <a
                href="#projects"
                className="transition hover:text-zinc-400"
              >
                Projects
                </a>
            <a
                href="#skills"
                className="transition hover:text-zinc-400"
              >
                Skills
              </a>
            <a
                href="#contact"
                className="transition hover:text-zinc-400"
              >
                Contact
              </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}