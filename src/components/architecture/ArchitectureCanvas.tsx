"use client";

import ArchitectureCard from "./ArchitectureCard";

export default function ArchitectureCanvas() {
  return (
    <div className="w-full max-w-3xl">

      {/* Gateway */}

      <div className="flex justify-center">

        <ArchitectureCard
          title="AI Gateway"
          subtitle="Secure API Layer"
        />

      </div>

      {/* Line */}

      <div className="mx-auto h-12 w-px bg-blue-500/40" />

      {/* Three Services */}

      <div className="grid grid-cols-3 gap-6">

        <ArchitectureCard
          title="Document RAG"
          subtitle="Semantic Search"
          delay={0.1}
        />

        <ArchitectureCard
          title="SQL Agent"
          subtitle="Natural Language SQL"
          delay={0.2}
        />

        <ArchitectureCard
          title="AI Chat"
          subtitle="Conversational Interface"
          delay={0.3}
        />

      </div>

      {/* Line */}

      <div className="mx-auto h-12 w-px bg-blue-500/40" />

      {/* Knowledge */}

      <div className="flex justify-center">

        <ArchitectureCard
          title="Knowledge Layer"
          subtitle="FAISS • PostgreSQL • Redis"
          delay={0.4}
        />

      </div>

      {/* Line */}

      <div className="mx-auto h-12 w-px bg-blue-500/40" />

      {/* LLM */}

      <div className="flex justify-center">

        <ArchitectureCard
          title="LLM Providers"
          subtitle="OpenAI • Gemini • Claude"
          delay={0.5}
        />

      </div>

    </div>
  );
}