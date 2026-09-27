import type { OrionNodeType } from "./OrionNode";

export const initialNodes: OrionNodeType[] = [
  {
    id: "users",
    type: "orionNode",
    position: { x: 500, y: 0 },
    data: {
      title: "Users",
      variant: "default",
      responsibilities: [
        "Employees",
        "Analysts",
        "Managers",
      ],
    },
  },

  {
    id: "auth",
    type: "orionNode",
    position: { x: 500, y: 380 },
    data: {
      title: "Authentication",
      variant: "default",
      responsibilities: [
        "JWT",
        "RBAC",
        "API Security",
      ],
    },
  },

  {
    id: "orion",
    type: "orionNode",
    position: { x: 420, y: 820 },
    data: {
      title: "Orion AI Core",
      variant: "core",
      responsibilities: [
        "AI Orchestration",
        "Context Engine",
        "Workflow Routing",
      ],
    },
  },

  {
    id: "rag",
    type: "orionNode",
    position: { x: 20, y: 1350 },
    data: {
      title: "Document AI",
      variant: "default",
      responsibilities: [
        "RAG",
        "Embeddings",
        "Semantic Search",
      ],
    },
  },

  {
    id: "assistant",
    type: "orionNode",
    position: { x: 500, y: 1350 },
    data: {
      title: "AI Assistant",
      variant: "default",
      responsibilities: [
        "LLMs",
        "Reasoning",
        "Memory",
      ],
    },
  },

  {
    id: "sql",
    type: "orionNode",
    position: { x: 980, y: 1350 },
    data: {
      title: "SQL Agent",
      variant: "default",
      responsibilities: [
        "SQL Generation",
        "Optimization",
        "PostgreSQL",
      ],
    },
  },

  {
    id: "vector",
    type: "orionNode",
    position: { x: 20, y: 1850 },
    data: {
      title: "Vector DB",
      variant: "default",
      responsibilities: [
        "Embeddings",
        "Similarity Search",
      ],
    },
  },

  {
    id: "llm",
    type: "orionNode",
    position: { x: 500, y: 1850 },
    data: {
      title: "Gemini / OpenAI",
      variant: "default",
      responsibilities: [
        "Generation",
        "Reasoning",
      ],
    },
  },

  {
    id: "postgres",
    type: "orionNode",
    position: { x: 980, y: 1850 },
    data: {
      title: "PostgreSQL",
      variant: "default",
      responsibilities: [
        "Structured Data",
        "Transactions",
      ],
    },
  },

  {
    id: "dashboard",
    type: "orionNode",
    position: { x: 500, y: 2350 },
    data: {
      title: "Analytics Dashboard",
      variant: "default",
      responsibilities: [
        "KPIs",
        "Insights",
        "Reports",
      ],
    },
  },
];