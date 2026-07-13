import { Edge } from "@xyflow/react";

export const initialEdges: Edge[] = [
  {
    id: "u-a",
    source: "users",
    target: "auth",
    animated: true,
    type: "orion",
  },

  {
    id: "a-o",
    source: "auth",
    target: "orion",
    animated: true,
    type: "orion",
  },

  {
    id: "o-r",
    source: "orion",
    target: "rag",
    animated: true,
    type: "orion",
  },

  {
    id: "o-ai",
    source: "orion",
    target: "assistant",
    animated: true,
    type: "orion",
  },

  {
    id: "o-s",
    source: "orion",
    target: "sql",
    animated: true,
    type: "orion",
  },

  {
    id: "r-v",
    source: "rag",
    target: "vector",
    animated: true,
    type: "orion",
  },

  {
    id: "ai-l",
    source: "assistant",
    target: "llm",
    animated: true,
    type: "orion",
  },

  {
    id: "s-p",
    source: "sql",
    target: "postgres",
    animated: true,
    type: "orion",
  },

  {
    id: "v-d",
    source: "vector",
    target: "dashboard",
    animated: true,
    type: "orion",
  },

  {
    id: "l-d",
    source: "llm",
    target: "dashboard",
    animated: true,
    type: "orion",
  },

  {
    id: "p-d",
    source: "postgres",
    target: "dashboard",
    animated: true,
    type: "orion",
  },
];