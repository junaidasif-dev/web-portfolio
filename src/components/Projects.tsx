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
  // Balanced sticky top offset that never pushes card off-screen on smaller laptop viewports
  const topOffset = 64 + Math.min(index * 12, 72);
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto flex items-start justify-center px-3 sm:px-4 md:sticky"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[480px] lg:min-h-[520px] max-h-[85vh] md:max-h-[min(640px,82vh)] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br ${project.color} flex flex-col`}
      >
        {/* Decorative Background Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 lg:w-96 lg:h-96 bg-white/10 blur-[100px] -mr-40 -mt-40 rounded-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row h-full flex-1">
          {/* Left Side: Content */}
          <div className="w-full lg:w-3/5 p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between flex-1 z-10">
            <div>
              <motion.span
                className="text-white/70 font-mono text-[11px] sm:text-xs md:text-sm mb-2 sm:mb-3 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                PROJECT {String(index + 1).padStart(2, "0")}
              </motion.span>

              <motion.h3
                className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 tracking-tight leading-tight"
                initial={{ x: -15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-white/60 text-xs sm:text-sm font-mono uppercase tracking-wider mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {project.subtitle}
              </motion.p>

              <motion.p
                className="text-white/90 md:text-white/80 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl leading-relaxed font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 mb-5 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-black/25 backdrop-blur-md border border-white/10 rounded-full text-[11px] sm:text-xs font-medium text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* View Case Study Button Wrapper */}
            <motion.div
              className="pt-2 sm:pt-4 shrink-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={handleCaseStudyClick}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black font-bold text-sm sm:text-base rounded-full hover:bg-opacity-90 transition-all active:scale-95 overflow-hidden shadow-lg inline-flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
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
          <div className="hidden lg:flex w-2/5 h-full items-center justify-center p-6 lg:p-8 xl:p-12 relative select-none">
            <motion.div
              className="relative w-full max-w-xs aspect-square flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Large decorative number */}
              <span className="text-[7rem] xl:text-[10rem] font-black text-white/[0.07] leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Orbiting Dots */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-white/70 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "-100px 100px" }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-2 h-2 bg-white/50 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "100px -100px" }}
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
    <section id="projects" className="relative w-full bg-transparent py-16 md:py-24 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto px-6 mb-10 md:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2 text-gray-900 dark:text-white">
          Production{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Projects
          </span>
        </h2>
        <p className="text-gray-500 dark:text-white/40 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
          Scroll to explore case studies
        </p>
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
              <div className={`relative w-full min-h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br ${project.color} flex flex-col justify-between p-6 sm:p-8`}>
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-[90px] -mr-36 -mt-36 rounded-full pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full justify-between flex-1">
                  <div>
                    <span className="text-white/70 font-mono text-xs sm:text-sm mb-2 block">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs font-mono uppercase tracking-wider mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-white/90 text-sm sm:text-base mb-5 leading-relaxed font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-black/25 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-2 shrink-0">
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="w-full px-6 py-3.5 bg-white text-black font-bold text-sm rounded-full hover:bg-opacity-90 transition-all active:scale-95 shadow-lg cursor-pointer"
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
              className={`h-2 rounded-full transition-all duration-300 ${
                activeMobileIndex === index ? "w-6 bg-blue-500" : "w-2 bg-gray-300 dark:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Stacked sticky cards */}
      <div className="hidden md:block relative space-y-10 md:space-y-16 pb-16 md:pb-36">
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