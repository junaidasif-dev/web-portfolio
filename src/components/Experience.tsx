import React, { useState, useEffect, useRef } from 'react';

// Defining types for the experience data to resolve TypeScript "never" and "any" errors
interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities?: string[];
  projects?: string[];
  tech: string[];
  type: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "AI Automation Engineer",
    company: "Axcess Staffing Solutions",
    period: "2025 - Present",
    location: "Remote / Canada",
    description: "Designing and deploying production multi-agent AI systems, recruitment automation pipelines, and RAG architectures.",
    responsibilities: [
      "Architected SMS candidate interviewing platform processing automated multi-question screening flows",
      "Engineered PostgreSQL + pgvector RAG database for zero-hallucination document Q&A",
      "Built Mattermost recruiter AI assistant ('Allie') for instant semantic candidate matching",
      "Deployed automated SMS leave management system with natural language intent classification"
    ],
    projects: [
      "Axcess Recruitment AI Platform",
      "Axcess AI Leave Management System",
      "AI Ingestion & Training Engine"
    ],
    tech: ["n8n", "OpenAI", "PostgreSQL", "pgvector", "OpenPhone SMS", "Mattermost", "Apache Tika"],
    type: "Contract / Project"
  },
  {
    id: 2,
    role: "AI Systems & Automation Developer",
    company: "Independent Client Solutions",
    period: "2024 - Present",
    location: "Remote",
    description: "Building custom AI agents, automated sales pipelines, and n8n enterprise workflows for international clients.",
    responsibilities: [
      "Developed autonomous AI sales bot with 2-way StaffHive/HubSpot CRM sync & Google Meet scheduling",
      "Created RAG Knowledge Assistant apps with Pinecone, LangChain, and Streamlit",
      "Architected 20+ production n8n business automation workflows connecting Notion, Slack, and PostgreSQL",
      "Implemented strict anti-detection & humanized delay algorithms for automated outreach"
    ],
    projects: [
      "AI Sales Bot with Live CRM Sync",
      "RAG Knowledge Assistant",
      "n8n Business Automation Suite"
    ],
    tech: ["Python", "n8n", "LangChain", "Pinecone", "Groq", "Streamlit", "CRM APIs"],
    type: "Freelance"
  }
];

import gsap from "gsap";

export default function Experience() {
  // Explicitly typing the state to Experience | null to avoid 'never' errors
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedExp && overlayRef.current) {
      gsap.fromTo(overlayRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [selectedExp]);

  const closeOverlay = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => setSelectedExp(null)
      });
    } else {
      setSelectedExp(null);
    }
  };

  return (
    <section id="experience" className="relative w-full min-h-screen bg-transparent text-gray-900 dark:text-white py-20 md:py-32 px-5 md:px-6 overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 uppercase text-gray-900 dark:text-white">Experience</h2>
          <div className="w-12 h-1 bg-gray-900/10 dark:bg-white/20" />
        </header>

        <div className="relative border-l border-gray-200 dark:border-white/10 ml-3 md:ml-4 space-y-8 md:space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className="relative pl-7 md:pl-10 group cursor-pointer"
            >
              {/* Timeline Dot - Using canonical Tailwind classes w-2.5 h-2.5 */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20 group-hover:bg-blue-600 dark:group-hover:bg-white group-hover:scale-150 transition-all" />

              <div className="bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/5 p-6 rounded-2xl hover:border-blue-500/30 dark:hover:border-white/20 hover:bg-white dark:hover:bg-[#111] transition-all duration-300 shadow-sm hover:shadow-xl dark:group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 dark:text-white/60 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 dark:text-white/30 font-mono text-[11px] md:text-sm uppercase tracking-[0.12em] md:tracking-widest">
                    {exp.period}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExp && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
            onClick={closeOverlay}
          />

          <div
            ref={overlayRef}
            className="relative w-full md:w-[65%] lg:w-[50%] h-full bg-white dark:bg-[#111] border-l border-gray-100 dark:border-white/10 shadow-2xl overflow-y-auto"
          >
            <div className="p-5 sm:p-6 md:p-12">
              <button
                onClick={closeOverlay}
                className="mb-7 md:mb-12 ml-auto text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] md:tracking-widest"
              >
                <span>←</span> Back to Timeline
              </button>

              <div className="space-y-8">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    {selectedExp.type}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">
                    {selectedExp.role}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-white/60 font-medium">{selectedExp.company}</p>
                  <p className="text-gray-400 dark:text-white/30 font-mono mt-2 text-xs md:text-sm leading-relaxed">{selectedExp.location} • {selectedExp.period}</p>
                </div>

                <div className="h-px w-full bg-gray-100 dark:bg-white/5" />

                <div className="space-y-6">
                  <h4 className="text-sm font-mono text-gray-400 dark:text-white/40 uppercase tracking-[0.2em]">The Mission</h4>
                  <p className="text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                    {selectedExp.description}
                  </p>
                </div>

                {selectedExp.responsibilities && (
                  <div className="space-y-6">
                    <h4 className="text-sm font-mono text-gray-400 dark:text-white/40 uppercase tracking-[0.2em]">Responsibilities</h4>
                    <ul className="space-y-4">
                      {selectedExp.responsibilities.map((item: string, i: number) => (
                        <li key={i} className="flex gap-4 text-gray-600 dark:text-white/70 leading-relaxed italic">
                          <span className="text-blue-600 dark:text-blue-500 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedExp.projects && (
                  <div className="space-y-6">
                    <h4 className="text-sm font-mono text-gray-400 dark:text-white/40 uppercase tracking-[0.2em]">Notable Projects</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedExp.projects.map((proj: string, i: number) => (
                        <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                          <p className="text-gray-900 dark:text-white/90 font-medium">{proj}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-6 pb-20">
                  <h4 className="text-sm font-mono text-gray-400 dark:text-white/40 uppercase tracking-[0.2em]">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.tech.map((t: string) => (
                      <span key={t} className="px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg text-xs font-mono text-gray-600 dark:text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}