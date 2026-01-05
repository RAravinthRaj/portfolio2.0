import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaPython,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiDjango,
  SiCplusplus,
  SiTailwindcss,
  SiNextdotjs,
  SiC,
  SiFlask,
  SiMysql,
  SiJenkins,
  SiRender,
} from "react-icons/si";

const allSkills = [
  /* ---------------------------- FRONTEND ---------------------------- */
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  {
    name: "React Native",
    icon: FaReact,
    color: "#61DAFB",
    category: "Frontend",
  },
  { name: "HTML", icon: FaHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6", category: "Frontend" },
  { name: "SCSS", icon: FaSass, color: "#CC6699", category: "Frontend" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    category: "Frontend",
  },

  /* ---------------------------- LANGUAGES ---------------------------- */
  { name: "C", icon: SiC, color: "#A8B9CC", category: "Languages" },
  { name: "C++", icon: SiCplusplus, color: "#00599C", category: "Languages" },
  { name: "Java", icon: FaJava, color: "#ED8B00", category: "Languages" },
  { name: "Python", icon: FaPython, color: "#3776AB", category: "Languages" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Languages",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "Languages",
  },

  /* ----------------------------- BACKEND ----------------------------- */
  { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend" },
  { name: "Express", icon: SiExpress, color: "#D1D5DB", category: "Backend" },
  { name: "Django", icon: SiDjango, color: "#0F766E", category: "Backend" },
  { name: "Flask", icon: SiFlask, color: "#FFFFFF", category: "Backend" },

  /* ----------------------------- DATABASE ---------------------------- */
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },

  /* ------------------------------ TOOLS ------------------------------ */
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: FaGithub, color: "#E5E7EB", category: "Tools" },

  /* ------------------------------ DEVOPS ----------------------------- */
  { name: "Docker", icon: FaDocker, color: "#2496ED", category: "DevOps" },
  { name: "Jenkins", icon: SiJenkins, color: "#D24939", category: "DevOps" },
  { name: "Render", icon: SiRender, color: "#46E3B7", category: "DevOps" },
  { name: "AWS", icon: FaAws, color: "#FF9900", category: "DevOps" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Database",
  "Tools",
  "DevOps",
];

/* -------------------------------------------------------------------------- */
/*                              ANIMATIONS                                     */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    filter: "blur(6px)",
    transition: { duration: 0.25 },
  },
};

/* -------------------------------------------------------------------------- */
/*                              MAIN SECTION                                   */
/* -------------------------------------------------------------------------- */

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const scrollToSkills = () => {
      if (window.location.hash === "#skills" && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToSkills();
    window.addEventListener("hashchange", scrollToSkills);

    return () => window.removeEventListener("hashchange", scrollToSkills);
  }, []);

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28  text-white overflow-hidden"
    >
      {/* Subtle cyber background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="absolute w-[420px] h-[420px] bg-cyan-500/10 blur-3xl rounded-full top-1/3 -left-48" />
        <div className="absolute w-[360px] h-[360px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-15%]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Expertise
          </motion.span>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive toolkit of modern technologies and frameworks that I
            use to bring ideas to life.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeCategory === cat
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/40"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:border-cyan-400/30"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 32px rgba(34,211,238,0.18)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    group p-6 rounded-2xl
                    bg-white/5 border border-white/10
                    hover:border-cyan-400/40
                    transition-all
                    flex flex-col items-center text-center
                  "
                >
                  <Icon
                    className="text-3xl mb-4 transition-transform group-hover:scale-110"
                    style={{
                      color: skill.color,
                      filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.45))",
                    }}
                  />
                  <h3 className="text-base font-semibold text-gray-200 group-hover:text-white">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
