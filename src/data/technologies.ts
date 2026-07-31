import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiJavascript,
  SiOpenai,
  SiCplusplus,
  SiPytorch,
  SiTensorflow,
  SiMysql,
  SiSupabase,
  SiVercel,
  SiFastapi,
} from "react-icons/si";
import { FaBrain, FaRobot, FaDatabase, FaCogs, FaTools, FaCode } from "react-icons/fa";
import { ComponentType } from "react";

// SVG Imports
import n8nIcon from "../assets/Icons/n8n.svg";
import langchainIcon from "../assets/Icons/langchain.svg";
import huggingfaceIcon from "../assets/Icons/huggingface.svg";
import notionIcon from "../assets/Icons/notion.svg";
import slackIcon from "../assets/Icons/slack.svg";
import mattermostIcon from "../assets/Icons/mattermost.svg";
import claudeIcon from "../assets/Icons/claude.svg";
import geminiIcon from "../assets/Icons/gemini.svg";
import pineconeIcon from "../assets/Icons/pinecone.svg";
import streamlitIcon from "../assets/Icons/streamlit.svg";
import postgresqlIcon from "../assets/Icons/postgresql.svg";
import pythonIcon from "../assets/Icons/python.svg";
import dockerIcon from "../assets/Icons/docker.svg";
import openaiIcon from "../assets/Icons/openai.svg";
import groqIcon from "../assets/Icons/groq.svg";
import tikaIcon from "../assets/Icons/tika.svg";
import gmailIcon from "../assets/Icons/gmail.svg";
import googlecalendarIcon from "../assets/Icons/googlecalendar.svg";
import supabaseIcon from "../assets/Icons/supabase.svg";
import vscodeIcon from "../assets/Icons/vscode.svg";
import cplusplusIcon from "../assets/Icons/cplusplus.svg";
import pytorchIcon from "../assets/Icons/pytorch.svg";
import tensorflowIcon from "../assets/Icons/tensorflow.svg";
import vercelIcon from "../assets/Icons/vercel.svg";
import mysqlIcon from "../assets/Icons/mysql.svg";
import jsonIcon from "../assets/Icons/json.svg";
import antigravityIcon from "../assets/Icons/antigravity.svg";
import makeIcon from "../assets/Icons/make.svg";
import fastapiIcon from "../assets/Icons/fastapi.svg";
import restapiIcon from "../assets/Icons/restapi.svg";
import gitIcon from "../assets/Icons/git.svg";
import githubIcon from "../assets/Icons/github.svg";

export interface Tech {
  name: string;
  description?: string;
  icon: ComponentType<{ className?: string }>;
  imgSrc?: string;
}

export const technologies: Record<string, Tech[]> = {
  ai_agents: [
    {
      name: "OpenAI",
      icon: SiOpenai,
      imgSrc: openaiIcon,
      description: "Advanced LLMs for reasoning, multi-agent systems, and function calling",
    },
    {
      name: "Claude",
      icon: FaBrain,
      imgSrc: claudeIcon,
      description: "Anthropic LLMs for complex document analysis & reasoning",
    },
    {
      name: "Gemini",
      icon: FaBrain,
      imgSrc: geminiIcon,
      description: "Google multimodal models for high-throughput processing",
    },
    {
      name: "Groq",
      icon: FaBrain,
      imgSrc: groqIcon,
      description: "Ultra-fast Llama-3 inference for sub-second agent responses",
    },
    {
      name: "LangChain",
      icon: FaRobot,
      imgSrc: langchainIcon,
      description: "Framework for building context-aware reasoning applications",
    },
    {
      name: "Hugging Face",
      icon: FaBrain,
      imgSrc: huggingfaceIcon,
      description: "Open-source models, embeddings, and transformer pipelines",
    },
    {
      name: "PyTorch",
      icon: SiPytorch,
      imgSrc: pytorchIcon,
      description: "Deep learning framework for AI research & custom models",
    },
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      imgSrc: tensorflowIcon,
      description: "Machine learning platform for ML model development & NLP",
    },
  ],
  automation: [
    {
      name: "n8n",
      icon: FaCogs,
      imgSrc: n8nIcon,
      description: "Fair-code workflow automation for enterprise integrations",
    },
    {
      name: "Make.com",
      icon: FaCogs,
      imgSrc: makeIcon,
      description: "Visual platform for automating workflows, apps, and systems",
    },
    {
      name: "Notion",
      icon: FaTools,
      imgSrc: notionIcon,
      description: "Database sync, document workflows, and CRM operations",
    },
    {
      name: "Slack",
      icon: FaTools,
      imgSrc: slackIcon,
      description: "Custom interactive bots and automated team notifications",
    },
    {
      name: "Mattermost",
      icon: FaTools,
      imgSrc: mattermostIcon,
      description: "On-premise chat integration for recruiter & operations bots",
    },
    {
      name: "Gmail",
      icon: FaTools,
      imgSrc: gmailIcon,
      description: "Automated cold email outreach and follow-ups",
    },
    {
      name: "Google Calendar",
      icon: FaTools,
      imgSrc: googlecalendarIcon,
      description: "Automated meeting booking and scheduling",
    },
    {
      name: "Apache Tika",
      icon: FaTools,
      imgSrc: tikaIcon,
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
      imgSrc: postgresqlIcon,
      description: "Relational storage with high-performance vector search",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      imgSrc: mysqlIcon,
      description: "Relational database management for structured application data",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      imgSrc: supabaseIcon,
      description: "Open-source Firebase alternative with PostgreSQL & realtime APIs",
    },
    {
      name: "Pinecone",
      icon: FaDatabase,
      imgSrc: pineconeIcon,
      description: "Managed vector database for similarity search",
    },
    {
      name: "Streamlit",
      icon: FaTools,
      imgSrc: streamlitIcon,
      description: "Rapid web UI deployment for AI knowledge apps",
    },
    {
      name: "JSON",
      icon: FaCode,
      imgSrc: jsonIcon,
      description: "Structured data parsing, interchange, and schema validation",
    },
  ],
  core_stack: [
    {
      name: "Python",
      icon: SiPython,
      imgSrc: pythonIcon,
      description: "Core language for AI backend, data pipelines, and RAG",
    },
    {
      name: "FastAPI",
      icon: SiFastapi,
      imgSrc: fastapiIcon,
      description: "High-performance Python web framework for building APIs",
    },
    {
      name: "REST APIs",
      icon: FaTools,
      imgSrc: restapiIcon,
      description: "RESTful architecture, webhooks, and microservice communication",
    },
    {
      name: "C++",
      icon: SiCplusplus,
      imgSrc: cplusplusIcon,
      description: "High-performance systems programming & algorithmic data structures",
    },
    {
      name: "Docker",
      icon: SiDocker,
      imgSrc: dockerIcon,
      description: "Containerized deployment for n8n, databases, and microservices",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      imgSrc: vercelIcon,
      description: "Serverless web deployment & edge function hosting",
    },
    {
      name: "VS Code",
      icon: FaTools,
      imgSrc: vscodeIcon,
      description: "Primary development environment and IDE workspace",
    },
    {
      name: "Antigravity",
      icon: FaTools,
      imgSrc: antigravityIcon,
      description: "Advanced AI agent engineering environment",
    },
    {
      name: "Git",
      icon: SiGit,
      imgSrc: gitIcon,
      description: "Distributed version control system",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      imgSrc: githubIcon,
      description: "Cloud repository hosting, code collaboration, and CI/CD",
    },
  ],
};