import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.id === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const cs = project.caseStudy;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Banner */}
      <section
        className={`relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br ${project.color}`}
      >
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] -mr-64 -mt-64 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] -ml-48 -mb-48 rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-white/60 hover:text-white text-sm font-mono mb-8 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </motion.button>

          <motion.span
            className="text-white/50 font-mono text-xs uppercase tracking-[0.3em] block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            CASE STUDY{" "}
            {String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {cs.headline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white/80"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20 md:space-y-28">
        {/* THE PROBLEM */}
        <motion.section
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center text-lg">
              🔴
            </div>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
              The Problem
            </h2>
          </div>
          <div className="pl-0 md:pl-14">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-white/70 max-w-3xl">
              {cs.problem}
            </p>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

        {/* THE SOLUTION */}
        <motion.section
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-lg">
              🟢
            </div>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              The Solution
            </h2>
          </div>
          <div className="pl-0 md:pl-14">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-white/70 max-w-3xl mb-12">
              {cs.solution}
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cs.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/5"
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-white/50">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

        {/* THE IMPACT */}
        <motion.section
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-lg">
              📊
            </div>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              The Impact
            </h2>
          </div>
          <div className="pl-0 md:pl-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cs.impact.map((item, i) => (
                <motion.div
                  key={item.metric}
                  custom={i + 4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/[0.02] border border-gray-200 dark:border-white/10"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.metric}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-white/50">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

        {/* TECH STACK */}
        <motion.section
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-lg">
              🔧
            </div>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
              Tech Stack
            </h2>
          </div>
          <div className="pl-0 md:pl-14">
            <div className="flex flex-wrap gap-3">
              {cs.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {cs.architecture && (
              <div className="mt-8 p-5 rounded-2xl bg-gray-100/50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5">
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-white/30 mb-3">
                  Architecture Notes
                </p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/50">
                  {cs.architecture}
                </p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevProject ? (
              <Link
                to={`/project/${prevProject.id}`}
                className="group flex items-center gap-3 text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest block">
                    Previous
                  </span>
                  <span className="font-semibold">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/project/${nextProject.id}`}
                className="group flex items-center gap-3 text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors text-right"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest block">
                    Next
                  </span>
                  <span className="font-semibold">{nextProject.title}</span>
                </div>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
