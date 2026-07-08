import Container from "@/components/layout/Container";
import ArchitectureNode from "./ArchitectureNode";


export default function ArchitectureSection() {
  return (
    <section className="bg-[#050508] py-36">
      <Container>
        {/* Heading */}
        <div className="mb-24 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Enterprise Architecture
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Orion AI System Design
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Orion AI is designed as a modular enterprise platform where
            independent AI services collaborate through a secure backend
            architecture to deliver intelligent business workflows.
          </p>
        </div>

        {/* USERS */}
        <div className="flex flex-col items-center">
          <ArchitectureNode
            title="Users"
            description="Employees • Analysts • Managers"
            accent="green"
            responsibilities={[
              "Ask Questions",
              "Upload Documents",
              "View Insights",
            ]}
          />

        </div>

        {/* AUTHENTICATION */}
        <div className="flex flex-col items-center">
          <ArchitectureNode
            title="Authentication"
            description="JWT • RBAC • Security"
            accent="purple"
            responsibilities={[
              "JWT Authentication",
              "Role Based Access",
              "API Security",
            ]}
          />

        </div>

        {/* ORION PLATFORM */}
        <div className="flex flex-col items-center">
          <ArchitectureNode
            title="Orion AI Platform"
            description="Enterprise Intelligence Layer"
            accent="blue"
            size="lg"
            responsibilities={[
              "AI Orchestration",
              "Agent Routing",
              "Workflow Engine",
              "Context Management",
            ]}
          />
        </div>

        {/* SERVICES */}
        <div className="mt-24 grid gap-10 lg:grid-cols-3">
          <div className="flex justify-center">
            <ArchitectureNode
              title="Document AI"
              description="Enterprise RAG"
              responsibilities={[
                "Semantic Search",
                "Embeddings",
                "Vector Retrieval",
              ]}
            />
          </div>

          <div className="flex justify-center">
            <ArchitectureNode
              title="AI Assistant"
              description="LLM • Agents"
              responsibilities={[
                "Conversation",
                "Memory",
                "Reasoning",
              ]}
            />
          </div>

          <div className="flex justify-center">
            <ArchitectureNode
              title="SQL Agent"
              description="Natural Language SQL"
              responsibilities={[
                "SQL Generation",
                "Query Optimization",
                "PostgreSQL",
              ]}
            />
          </div>
        </div>

        {/* STORAGE */}
        <div className="mt-24 grid gap-10 lg:grid-cols-3">
          <div className="flex justify-center">
            <ArchitectureNode
              title="Vector Database"
              description="Embedding Storage"
              responsibilities={[
                "Vector Index",
                "Similarity Search",
                "Knowledge Store",
              ]}
              accent="green"
            />
          </div>

          <div className="flex justify-center">
            <ArchitectureNode
              title="LLM"
              description="Gemini / OpenAI"
              responsibilities={[
                "Reasoning",
                "Text Generation",
                "Function Calling",
              ]}
              accent="purple"
            />
          </div>

          <div className="flex justify-center">
            <ArchitectureNode
              title="PostgreSQL"
              description="Enterprise Database"
              responsibilities={[
                "Structured Data",
                "Transactions",
                "Business Records",
              ]}
              accent="blue"
            />
          </div>
        </div>

        {/* CONNECTION TO DASHBOARD */}
        <div className="mt-16 flex justify-center">
        </div>

        {/* DASHBOARD */}
        <div className="flex justify-center">
          <ArchitectureNode
            title="Analytics Dashboard"
            description="Reports • KPIs • Business Insights"
            accent="green"
            responsibilities={[
              "Visualization",
              "Monitoring",
              "Enterprise Reporting",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}