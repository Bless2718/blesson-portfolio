import {
  Code2,
  Server,
  BrainCircuit,
  Database,
  Cloud,
} from "lucide-react";

export const techStack = [
  {
    title: "Frontend",
    icon: Code2,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    icon: Server,
    technologies: [
      "FastAPI",
      "JWT",
      "SQLAlchemy",
      "REST API",
    ],
  },

  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    technologies: [
      "Gemini API",
      "LangChain",
      "Hugging Face",
      "FAISS",
    ],
  },

  {
    title: "Database",
    icon: Database,
    technologies: [
      "PostgreSQL",
    ],
  },

  {
    title: "Deployment",
    icon: Cloud,
    technologies: [
      "GitHub",
      "Vercel",
      "Docker (Planned)",
    ],
  },
];