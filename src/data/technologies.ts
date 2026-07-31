import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiOpenai,
} from "react-icons/si";
import { FaTools, FaBrain, FaRobot, FaDatabase, FaCogs } from "react-icons/fa";
import { ComponentType } from "react";

export interface Tech {
  name: string;
  description?: string;
  icon: ComponentType<{ className?: string }>;
  imgSrc?: string;
}

export const technologies: Record<string, Tech[]> = {
  ai_agents: [
    {
      name: "OpenAI / GPT-4",
      icon: SiOpenai,
      description: "Advanced LLMs for reasoning, multi-agent systems, and function calling",
    },
    {
      name: "Claude",
      icon: FaBrain,
      description: "Anthropic LLMs for complex document analysis & reasoning",
    },
    {
      name: "Gemini",
      icon: FaBrain,
      description: "Google multimodal models for high-throughput processing",
    },
    {
      name: "Groq",
      icon: FaBrain,
      description: "Ultra-fast Llama-3 inference for sub-second agent responses",
    },
    {
      name: "LangChain",
      icon: FaRobot,
      description: "Framework for building context-aware reasoning applications",
    },
    {
      name: "Hugging Face",
      icon: FaBrain,
      description: "Open-source models, embeddings, and transformer pipelines",
    },
  ],
  automation: [
    {
      name: "n8n",
      icon: FaCogs,
      description: "Fair-code workflow automation for enterprise integrations",
    },
    {
      name: "Notion",
      icon: FaTools,
      description: "Database sync, document workflows, and CRM operations",
    },
    {
      name: "Slack",
      icon: FaTools,
      description: "Custom interactive bots and automated team notifications",
    },
    {
      name: "Mattermost",
      icon: FaTools,
      description: "On-premise chat integration for recruiter & operations bots",
    },
    {
      name: "Gmail & Google Calendar",
      icon: FaTools,
      description: "Automated cold email outreach and meeting scheduling",
    },
    {
      name: "Apache Tika",
      icon: FaTools,
      description: "Enterprise multi-format document parsing (PDF, DOCX, TXT)",
    },
  ],
  rag_data: [
    {
      name: "RAG Systems",
      icon: FaBrain,
      description: "Retrieval-Augmented Generation for zero-hallucination Q&A",
    },
    {
      name: "PostgreSQL & pgvector",
      icon: SiPostgresql,
      description: "Relational storage with high-performance vector search",
    },
    {
      name: "Pinecone",
      icon: FaDatabase,
      description: "Managed vector database for similarity search",
    },
    {
      name: "Streamlit",
      icon: FaTools,
      description: "Rapid web UI deployment for AI knowledge apps",
    },
  ],
  core_stack: [
    {
      name: "Python",
      icon: SiPython,
      description: "Core language for AI backend, data pipelines, and RAG",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      description: "Typed web and API development",
    },
    {
      name: "Docker",
      icon: SiDocker,
      description: "Containerized deployment for n8n, databases, and microservices",
    },
    {
      name: "Git & GitHub",
      icon: SiGithub,
      description: "Version control, CI/CD, and repository management",
    },
  ],
};