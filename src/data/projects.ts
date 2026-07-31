export interface ProjectFeature {
  title: string;
  description: string;
  icon: string; // emoji
}

export interface ProjectImpact {
  metric: string;
  description: string;
  icon: string; // emoji
}

export interface ProjectCaseStudy {
  headline: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  impact: ProjectImpact[];
  techStack: string[];
  architecture?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  color: string;
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: "axcess-recruitment-platform",
    title: "Axcess Recruitment AI",
    subtitle: "Multi-Agent Hiring Automation",
    description:
      "An AI recruitment platform that conducts SMS interviews, builds a RAG knowledge base from resumes, and gives recruiters an AI chatbot to search candidate intelligence instantly.",
    tech: ["n8n", "OpenAI", "PostgreSQL", "pgvector", "Mattermost"],
    color: "from-violet-600 to-indigo-900",
    caseStudy: {
      headline:
        "How AI Replaced 40 Hours of Manual Recruiting — Every Single Week",
      problem:
        "A Canadian staffing agency was drowning. Their team spent 40+ hours every week manually reading resumes, calling candidates, conducting phone screens, and tracking everything in spreadsheets. Good candidates were slipping through the cracks. The hiring pipeline was slow, inconsistent, and burning out the team.",
      solution:
        "I built a complete AI recruitment platform that handles the entire candidate pipeline — from first contact to recruiter-ready intelligence. The system automates interviews via SMS, builds a searchable knowledge base from every resume and job description, and gives recruiters an AI chatbot to find any candidate detail in seconds.",
      features: [
        {
          title: "SMS Interview Automation",
          description:
            "The system automatically claims new candidates, sends personalized interview questions via SMS, handles replies, analyzes response quality, and conducts multi-question interviews with natural human-like timing.",
          icon: "💬",
        },
        {
          title: "RAG Vector Database",
          description:
            "Every resume, job description, interview question, and candidate answer is embedded into a PostgreSQL + pgvector database — enabling instant semantic search across all recruitment data.",
          icon: "🧠",
        },
        {
          title: "Recruiter AI Chatbot",
          description:
            'A Mattermost chatbot called "Allie" lets recruiters ask natural questions like "Find candidates with 5+ years AWS experience" and get instant, accurate answers from the knowledge base.',
          icon: "🤖",
        },
        {
          title: "Resume & JD Ingestion",
          description:
            "Automated pipelines parse uploaded documents via Apache Tika, extract clean text, upsert database records, and auto-embed everything into the vector store — zero manual data entry.",
          icon: "📄",
        },
      ],
      impact: [
        {
          metric: "40+ hrs/week saved",
          description: "Eliminated manual resume screening and phone calls",
          icon: "⏱",
        },
        {
          metric: "Zero dropped candidates",
          description:
            "Every applicant is automatically processed and tracked",
          icon: "📋",
        },
        {
          metric: "Instant candidate search",
          description:
            "Recruiters find any detail via chat in under 3 seconds",
          icon: "🔍",
        },
        {
          metric: "Auto-scored interviews",
          description:
            "AI rates candidates from Strong Proceed to Pass — consistently",
          icon: "📊",
        },
      ],
      techStack: [
        "n8n",
        "OpenAI GPT-4",
        "PostgreSQL",
        "pgvector",
        "OpenPhone SMS",
        "Mattermost",
        "Apache Tika",
        "LangChain",
      ],
      architecture:
        "Multi-agent n8n orchestration with polling-based candidate assignment, webhook-driven SMS processing, SHA-256 message deduplication, and unified document_chunks RAG table with doc_type filtering.",
    },
  },
  {
    id: "ai-sales-bot",
    title: "AI Sales Bot",
    subtitle: "Autonomous Outreach & CRM Sync",
    description:
      "A fully autonomous sales bot that writes personalized cold emails, handles replies, qualifies leads through conversation, books meetings, and syncs everything to the CRM in real time.",
    tech: ["n8n", "OpenAI", "CRM Integration", "Gmail", "Google Calendar"],
    color: "from-emerald-600 to-teal-900",
    caseStudy: {
      headline:
        "Sales Reps Now Just Upload a CSV and Show Up to Meetings — AI Does Everything In Between",
      problem:
        "A staffing company's sales team was spending most of their week writing cold emails, following up with non-responders, and playing email tag to schedule meetings. They needed to scale outreach from dozens to hundreds of leads per week — without hiring more reps.",
      solution:
        "I built a fully autonomous AI sales bot with 2-way CRM integration. It handles the entire pipeline: from writing the first email to booking a confirmed Google Meet call — with real-time CRM status updates at every step.",
      features: [
        {
          title: "Live CRM Integration",
          description:
            "Fires instantly via CRM webhooks. Syncs lead status in real-time (New → Contacted → Qualified / Unqualified / Nurturing), logs email threads, notes, and qualification data directly into CRM records.",
          icon: "🔄",
        },
        {
          title: "AI-Written Cold Outreach",
          description:
            "Every email is unique — AI references the lead's company, industry, and location. No templates. Sounds like a real human wrote it — no em dashes, no bullet points, no corporate jargon.",
          icon: "✉️",
        },
        {
          title: "Smart Follow-Up Engine",
          description:
            "If no reply: 3 follow-ups over 15 days, each with a different angle. Same email thread. After 30 days, tries a completely fresh approach. All with randomized human-like delays.",
          icon: "🔁",
        },
        {
          title: "Automated Meeting Booking",
          description:
            "Checks Google Calendar for real availability, proposes 3 time slots to qualified leads, and creates a confirmed Google Meet event with all details.",
          icon: "📅",
        },
      ],
      impact: [
        {
          metric: "100% hands-free outreach",
          description:
            "From first email to booked meeting — zero human intervention",
          icon: "🚀",
        },
        {
          metric: "Real-time CRM sync",
          description:
            "Every lead status, email, and note updated automatically",
          icon: "🔄",
        },
        {
          metric: "Human-like delivery",
          description:
            "Anti-detection features prevent spam flags and feel natural",
          icon: "🎭",
        },
        {
          metric: "Scalable pipeline",
          description: "Handles hundreds of leads with the same quality",
          icon: "📈",
        },
      ],
      techStack: [
        "n8n",
        "OpenAI GPT-4",
        "StaffHive CRM",
        "HubSpot",
        "Gmail",
        "Google Calendar",
        "Webhooks",
      ],
      architecture:
        "Event-driven architecture with CRM webhook triggers, randomized delay scheduling (20-60 min reply windows), business-hours-only execution (Mon-Fri, 8AM-5PM), and per-lead state tracking with audit trail.",
    },
  },
  {
    id: "ai-leave-management",
    title: "AI Leave Management",
    subtitle: "SMS-Based Absence Tracking",
    description:
      'Employees text "I\'m sick today" and AI handles the rest — classifies the message, asks follow-ups, logs leave to the database, and notifies the manager instantly.',
    tech: ["n8n", "OpenAI", "PostgreSQL", "OpenPhone", "Mattermost"],
    color: "from-amber-600 to-orange-900",
    caseStudy: {
      headline:
        'Employees Just Text "I\'m Sick" — AI Handles Everything After That',
      problem:
        "A company's absence reporting was chaos. Employees called managers, left voicemails, or sent texts that got lost. Managers tracked sick days in spreadsheets. Notifications were missed. There was no audit trail. Nobody knew who was out on any given day without asking around.",
      solution:
        "I built an SMS-based leave management system where employees simply text to report an absence. AI handles classification, follow-up questions, database logging, and instant manager notifications — all automatically.",
      features: [
        {
          title: "Natural Language Understanding",
          description:
            'Employees text casually — "Not feeling well today" or "Need to take tomorrow off for a family thing." AI classifies the leave type automatically from 7 supported categories.',
          icon: "🗣️",
        },
        {
          title: "Smart Follow-Up Conversations",
          description:
            "AI asks for missing details: reason, expected return date, assignment coverage, and whether to notify a specific supervisor — all via natural SMS conversation.",
          icon: "💬",
        },
        {
          title: "Auto-Registration",
          description:
            "Unknown phone numbers are automatically registered as new employees. The system handles first-time interactions gracefully without any admin setup.",
          icon: "👤",
        },
        {
          title: "Manager Dashboard Commands",
          description:
            "Managers use Mattermost slash commands: /leavebot-stats for today's absence count by type, /leavebot-today for who's out, /leavebot-history for an employee's full leave record.",
          icon: "📊",
        },
      ],
      impact: [
        {
          metric: "50% time reduction",
          description: "Cut absence reporting overhead in half",
          icon: "⏱",
        },
        {
          metric: "Zero missed notifications",
          description: "Managers are alerted instantly — every single time",
          icon: "🔔",
        },
        {
          metric: "Full audit trail",
          description:
            "Every leave request, conversation, and decision is logged",
          icon: "📝",
        },
        {
          metric: "7 leave types auto-detected",
          description:
            "Sick, vacation, personal, bereavement, medical, family, and more",
          icon: "🏷️",
        },
      ],
      techStack: [
        "n8n",
        "OpenAI GPT-4.1-mini",
        "OpenPhone SMS",
        "PostgreSQL",
        "Mattermost",
      ],
    },
  },
  {
    id: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant",
    subtitle: "AI That Answers From Your Docs",
    description:
      "A RAG-powered AI chatbot that answers questions from your actual documents — not from imagination. Sub-second search, source citations, and live-deployed web interface.",
    tech: ["Python", "LangChain", "Groq", "Pinecone", "Streamlit"],
    color: "from-cyan-600 to-blue-900",
    caseStudy: {
      headline:
        "An AI That Answers Questions From Your Docs — Not From Imagination",
      problem:
        "Teams were spending hours digging through documents, research papers, and internal knowledge bases to find answers to common questions. The information existed — it was just buried across dozens of files, and nobody could search it efficiently.",
      solution:
        "I built a conversational AI assistant powered by Retrieval Augmented Generation (RAG). Users ask questions in plain English, the system searches a vector database for the most relevant content, and generates accurate, source-backed responses in seconds.",
      features: [
        {
          title: "Semantic Vector Search",
          description:
            "Questions are converted to vector embeddings and matched against document chunks in Pinecone — finding relevant content by meaning, not just keywords.",
          icon: "🔍",
        },
        {
          title: "Source Transparency",
          description:
            "Every answer shows exactly which documents were used to generate it. Users can verify the source — no blind trust required.",
          icon: "📎",
        },
        {
          title: "Conversation Memory",
          description:
            "The assistant remembers previous questions in the session, enabling natural follow-up conversations without repeating context.",
          icon: "🧠",
        },
        {
          title: "Live Web Interface",
          description:
            "Clean dark-theme Streamlit UI with gradient design, usage statistics dashboard, and one-click conversation reset. Deployed on Streamlit Cloud.",
          icon: "🌐",
        },
      ],
      impact: [
        {
          metric: "Sub-second search",
          description:
            "Vector similarity search returns results in milliseconds",
          icon: "⚡",
        },
        {
          metric: "1-3 second responses",
          description: "Full AI-generated answers with source citations",
          icon: "💨",
        },
        {
          metric: "Zero hallucinations",
          description:
            "Answers only from your actual documents — never makes things up",
          icon: "🎯",
        },
        {
          metric: "Live & deployed",
          description: "Running in production on Streamlit Cloud",
          icon: "🚀",
        },
      ],
      techStack: [
        "Python",
        "LangChain",
        "Groq (Llama3)",
        "Pinecone",
        "Sentence Transformers",
        "Streamlit",
      ],
    },
  },
  {
    id: "joniEats-restaurant-bot",
    title: "Restaurant AI Assistant",
    subtitle: "Conversational Ordering Chatbot",
    description:
      "An interactive AI chatbot for restaurant ordering and customer support — uses custom RAG retrieval to ground responses in exact menu items, pricing, and ordering flows.",
    tech: ["Python", "Groq", "scikit-learn", "Streamlit", "RAG"],
    color: "from-rose-600 to-pink-900",
    caseStudy: {
      headline:
        "A Restaurant Chatbot That Knows the Menu Better Than Your Staff",
      problem:
        "Restaurants receive dozens of repetitive inquiries daily — questions about menus, dietary options, operating hours, and ordering instructions. This strains staff resources and slows down actual service during peak hours.",
      solution:
        "I built a production-ready conversational chatbot specifically designed for restaurant knowledge retrieval and ordering assistance. It uses a custom lightweight RAG pipeline to ensure every answer is grounded in actual menu data — no hallucinated prices or items.",
      features: [
        {
          title: "Custom RAG Retrieval",
          description:
            "Built a high-performance retrieval pipeline using TF-IDF vectorization and cosine similarity over a structured restaurant knowledge corpus — fast, accurate, and lightweight.",
          icon: "📊",
        },
        {
          title: "Domain-Specific Parsing",
          description:
            "Separately indexes menu items, restaurant policies, ordering flows, and chat patterns — so retrieval is always targeted and relevant.",
          icon: "🍽️",
        },
        {
          title: "Ultra-Fast Inference",
          description:
            "Powered by Groq running Llama 3.1 — responses arrive in under 1 second. Customers never wait.",
          icon: "⚡",
        },
        {
          title: "Clean Chat Interface",
          description:
            "Streamlit-based web interface with conversation management, caching optimizations, and graceful error handling.",
          icon: "💬",
        },
      ],
      impact: [
        {
          metric: "Sub-second responses",
          description:
            "Customers get instant answers — faster than calling staff",
          icon: "⚡",
        },
        {
          metric: "Zero menu hallucinations",
          description: "Every price, item, and option comes from real data",
          icon: "🎯",
        },
        {
          metric: "Staff time freed",
          description:
            "Repetitive questions handled automatically, staff focuses on service",
          icon: "👨‍🍳",
        },
        {
          metric: "24/7 availability",
          description: "Answers questions outside operating hours too",
          icon: "🌙",
        },
      ],
      techStack: [
        "Python",
        "Streamlit",
        "Groq (Llama 3.1)",
        "scikit-learn",
        "TF-IDF",
        "Cosine Similarity",
      ],
    },
  },
  {
    id: "ai-brain-training-engine",
    title: "AI Brain Training Engine",
    subtitle: "Multi-Agent Document Ingestion",
    description:
      "A bulk document training pipeline that turns raw PDFs and resumes into structured RAG embeddings — using multi-agent AI to classify, extract, and embed everything automatically.",
    tech: ["n8n", "OpenAI", "Apache Tika", "PostgreSQL", "pgvector"],
    color: "from-purple-600 to-violet-900",
    caseStudy: {
      headline:
        "Turn Hundreds of Raw Documents Into a Searchable AI Knowledge Base — With One Click",
      problem:
        "Training an AI recruitment system requires ingesting hundreds of unstructured resumes and job descriptions. Manually reading each file, categorizing it, extracting structured fields, and preparing it for semantic search was slow, error-prone, and couldn't scale.",
      solution:
        "I built a unified training ingestion pipeline that takes any uploaded document — resume or job posting — and automatically classifies it, extracts structured data, stores it in the database, and generates vector embeddings for instant search. One upload, zero manual work.",
      features: [
        {
          title: "Multi-Agent Extraction",
          description:
            "A pipeline of specialized AI agents: File Parser (Apache Tika) → Classifier Agent (resume vs. job description) → Resume Extractor → JD Extractor. Each agent handles one task perfectly.",
          icon: "🔗",
        },
        {
          title: "Structured Data Extraction",
          description:
            "Pulls out candidate name, phone, skills from resumes. Extracts posting title, city, industry, salary from job descriptions. All structured and database-ready.",
          icon: "📋",
        },
        {
          title: "Auto-Embedding Generator",
          description:
            "Parsed content is automatically converted to vector embeddings and stored in document_chunks — ready for semantic search the moment ingestion completes.",
          icon: "🧬",
        },
        {
          title: "Zero-Hallucination Guardrails",
          description:
            "Strict rules for AI agents: if a field can't be extracted from the document, it stays empty. No guessing, no fabricating data.",
          icon: "🛡️",
        },
      ],
      impact: [
        {
          metric: "1-click bulk training",
          description: "Upload hundreds of files and walk away",
          icon: "☝️",
        },
        {
          metric: "Zero manual data entry",
          description:
            "AI handles classification, extraction, and embedding automatically",
          icon: "🤖",
        },
        {
          metric: "Instant search-ready",
          description:
            "Documents become searchable via RAG the moment they're processed",
          icon: "🔍",
        },
        {
          metric: "Scalable pipeline",
          description: "Handles bulk uploads via multi-part webhook triggers",
          icon: "📦",
        },
      ],
      techStack: [
        "n8n",
        "OpenAI GPT-4",
        "Apache Tika",
        "PostgreSQL",
        "pgvector",
      ],
    },
  },
  {
    id: "n8n-automation-suite",
    title: "n8n Automation Suite",
    subtitle: "Enterprise Workflow Automation",
    description:
      "A comprehensive suite of production n8n workflows covering team management, hiring, onboarding, community operations, and internal tooling — all integrated with Notion, Slack, and PostgreSQL.",
    tech: ["n8n", "Notion", "Slack", "PostgreSQL", "Gmail"],
    color: "from-sky-600 to-indigo-900",
    caseStudy: {
      headline:
        "Every Repetitive Process This Organization Had — Now Runs on Autopilot",
      problem:
        "A tech organization was running team management, hiring, onboarding, fellowship programs, and community operations manually. Tasks were falling through cracks. Notifications were inconsistent. Data lived in 5 different tools that didn't talk to each other.",
      solution:
        "I built a comprehensive suite of production n8n workflows that connected all their tools and automated every repeatable process. From onboarding approvals to certificate generation to job board management — each workflow runs reliably with error handling, conditional logic, and real-time notifications.",
      features: [
        {
          title: "Team Management Automation",
          description:
            "Automated core team onboarding with multi-step approval logic, Notion database updates, and role-based Slack notifications for every decision in the pipeline.",
          icon: "👥",
        },
        {
          title: "Fellowship Program Engine",
          description:
            "2-phase application processing with automated review workflows, certificate generation for fellows and track leads, and full sync with the organization's Notion workspace.",
          icon: "🎓",
        },
        {
          title: "Job Board & CRM Automation",
          description:
            "Automated job posting workflows with form submissions, applicant tracking in Notion, and lead pipeline management with status transitions.",
          icon: "💼",
        },
        {
          title: "Slack & Notion Integrations",
          description:
            "Custom bots connecting Slack channels with Notion databases for automated team reporting, workflow triggers, and bi-directional data sync.",
          icon: "🔌",
        },
      ],
      impact: [
        {
          metric: "Full process automation",
          description:
            "Every repeatable operation runs without human intervention",
          icon: "⚙️",
        },
        {
          metric: "Multi-tool integration",
          description:
            "Notion, Slack, PostgreSQL, Google Sheets, Gmail — all connected",
          icon: "🔗",
        },
        {
          metric: "Zero dropped tasks",
          description:
            "Error handling and notifications on every workflow ensure nothing falls through",
          icon: "✅",
        },
        {
          metric: "Instant team visibility",
          description:
            "Real-time Slack notifications and Notion dashboards for every process",
          icon: "👁️",
        },
      ],
      techStack: [
        "n8n",
        "Notion",
        "Slack",
        "PostgreSQL",
        "Google Sheets",
        "Gmail",
      ],
    },
  },
];
