import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const topOffset = 80 + index * 40;
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto flex items-start justify-center px-4 md:sticky h-auto md:h-[80vh]"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative w-full min-h-[540px] md:min-h-0 md:h-[70vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br ${project.color}`}
      >
        {/* Decorative Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48 rounded-full" />

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center z-10">
            <motion.span
              className="text-white/70 font-mono text-xs sm:text-sm mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              PROJECT {String(index + 1).padStart(2, "0")}
            </motion.span>

            <motion.h3
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-white/50 text-sm font-mono uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {project.subtitle}
            </motion.p>

            <motion.p
              className="text-white/90 md:text-white/80 text-base sm:text-lg mb-6 md:mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white/90"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 md:mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* View Case Study Button */}
              <motion.button
                onClick={handleCaseStudyClick}
                className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-opacity-90 transition-all active:scale-95 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  <span>View Case Study</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Project Number Display */}
          <div className="hidden lg:flex w-1/2 h-full items-center justify-center p-12 relative">
            <motion.div
              className="relative w-full max-w-md aspect-square flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Large decorative number */}
              <span className="text-[12rem] font-black text-white/[0.06] leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Orbiting Dots */}
              <motion.div
                className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "-150px 150px" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-2 h-2 bg-white/60 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "150px -150px" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function Projects() {
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const navigate = useNavigate();

  const handleMobileScroll = () => {
    const el = mobileTrackRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth;
    if (!cardWidth) return;
    const nextIndex = Math.round(el.scrollLeft / cardWidth);
    if (nextIndex !== activeMobileIndex) {
      setActiveMobileIndex(nextIndex);
    }
  };

  const scrollToMobileCard = (index: number) => {
    const el = mobileTrackRef.current;
    if (!el) return;
    el.scrollTo({
      left: index * el.clientWidth,
      behavior: "smooth",
    });
    setActiveMobileIndex(index);
  };

  return (
    <section id="projects" className="relative w-full bg-transparent py-24 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto px-6 mb-14 md:mb-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2 text-gray-900 dark:text-white">
          Production{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 ">
            Projects
          </span>
        </h2>
        <p className="text-gray-500 dark:text-white/40 font-mono text-[10px] sm:text-xs">SCROLL TO EXPLORE CASE STUDIES</p>
      </div>

      {/* Mobile: Horizontal snap carousel */}
      <div className="md:hidden">
        <div
          ref={mobileTrackRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-4 gap-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-full shrink-0 snap-center px-1">
              <div className={`relative w-full min-h-[540px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br ${project.color}`}>
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-[90px] -mr-36 -mt-36 rounded-full" />
                <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  <span className="text-white/70 font-mono text-xs sm:text-sm mb-4 block">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-white/90 text-base sm:text-lg mb-6 max-w-md leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="w-full px-6 py-3.5 bg-white text-black font-bold rounded-full hover:bg-opacity-90 transition-all active:scale-95"
                    >
                      View Case Study →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Go to project ${index + 1}`}
              onClick={() => scrollToMobileCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${activeMobileIndex === index ? "w-6 bg-blue-500" : "w-2 bg-gray-300 dark:bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Stacked sticky cards */}
      <div className="hidden md:block relative space-y-12 md:space-y-24 pb-20 md:pb-48">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;