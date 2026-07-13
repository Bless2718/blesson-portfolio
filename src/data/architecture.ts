export const architectureNodes = [
  {
    id: "users",
    title: "Users",
    description: "Employees • Analysts",
    x: 50,
    y: 5,
    accent: "green",
  },

  {
    id: "auth",
    title: "Authentication",
    description: "JWT • RBAC",
    x: 50,
    y: 18,
    accent: "purple",
  },

  {
    id: "orion",
    title: "Orion AI Core",
    description: "Enterprise Intelligence",
    x: 50,
    y: 36,
    accent: "blue",
    size: "lg",
  },

  {
    id: "rag",
    title: "Document AI",
    description: "Enterprise RAG",
    x: 18,
    y: 60,
    accent: "blue",
  },

  {
    id: "assistant",
    title: "AI Assistant",
    description: "LLM Agents",
    x: 50,
    y: 60,
    accent: "purple",
  },

  {
    id: "sql",
    title: "SQL Agent",
    description: "Natural Language SQL",
    x: 82,
    y: 60,
    accent: "green",
  },

  {
    id: "vector",
    title: "Vector DB",
    description: "Embeddings",
    x: 18,
    y: 82,
    accent: "blue",
  },

  {
    id: "llm",
    title: "LLM",
    description: "Gemini / OpenAI",
    x: 50,
    y: 82,
    accent: "purple",
  },

  {
    id: "postgres",
    title: "PostgreSQL",
    description: "Enterprise DB",
    x: 82,
    y: 82,
    accent: "green",
  },

  {
    id: "dashboard",
    title: "Analytics",
    description: "Business Insights",
    x: 50,
    y: 97,
    accent: "blue",
  },
];
export const architectureConnections = [
  ["users", "auth"],
  ["auth", "orion"],

  ["orion", "rag"],
  ["orion", "assistant"],
  ["orion", "sql"],

  ["rag", "vector"],
  ["assistant", "llm"],
  ["sql", "postgres"],

  ["vector", "dashboard"],
  ["llm", "dashboard"],
  ["postgres", "dashboard"],
];