import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiDjango,
  SiCplusplus,
  SiTailwindcss,
  SiC,
  SiFlask,
  SiMysql,
  SiJenkins,
  SiRender,
  SiVercel,
} from "react-icons/si";

const allSkills = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    category: "Frontend",
    level: 90,
  },
  {
    name: "React Native",
    icon: FaReact,
    color: "#61DAFB",
    category: "Frontend",
    level: 85,
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
    category: "Frontend",
    level: 95,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
    category: "Frontend",
    level: 90,
  },
  {
    name: "SCSS",
    icon: FaSass,
    color: "#CC6699",
    category: "Frontend",
    level: 85,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    category: "Frontend",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Frontend",
    level: 90,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "Frontend",
    level: 85,
  },

  { name: "C", icon: SiC, color: "#A8B9CC", category: "Languages", level: 75 },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    category: "Languages",
    level: 80,
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#ED8B00",
    category: "Languages",
    level: 85,
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    category: "Languages",
    level: 90,
  },

  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    category: "Backend",
    level: 85,
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#D1D5DB",
    category: "Backend",
    level: 80,
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#0F766E",
    category: "Backend",
    level: 75,
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "#FFFFFF",
    category: "Backend",
    level: 75,
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    category: "Database",
    level: 85,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    category: "Database",
    level: 80,
  },

  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    category: "Tools",
    level: 90,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#E5E7EB",
    category: "Tools",
    level: 90,
  },

  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    category: "DevOps",
    level: 75,
  },
  {
    name: "Jenkins",
    icon: SiJenkins,
    color: "#D24939",
    category: "DevOps",
    level: 70,
  },
  {
    name: "Render",
    icon: SiRender,
    color: "#46E3B7",
    category: "DevOps",
    level: 80,
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
    category: "DevOps",
    level: 85,
  },
];

const categories = [
  "Frontend",
  "Backend",
  "Languages",
  "Database",
  "Tools",
  "DevOps",
];

const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.2 },
  },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (window.location.hash === "#skills" && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const filteredSkills = useMemo(
    () => allSkills.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="skills"
        ref={ref}
        className="relative py-28 text-white overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
          <div className="absolute w-[420px] h-[420px] bg-cyan-500/10 blur-3xl rounded-full top-1/3 -left-48" />
          <div className="absolute w-[360px] h-[360px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-15%]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <m.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              Skills & <span className="text-gradient">Technologies</span>
            </m.h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/40"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <m.div
                    key={skill.name}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={!isTouchDevice ? { y: -6 } : undefined}
                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center will-change-transform"
                  >
                    <Icon
                      className="text-3xl mb-4"
                      style={{ color: skill.color }}
                    />

                    <h3 className="text-base font-semibold mb-3">
                      {skill.name}
                    </h3>

                    <div className="w-full mt-auto">
                      <div className="h-2 mt-5 w-full bg-white/10 rounded-full overflow-hidden">
                        <m.div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: skill.color,
                            transformOrigin: "left",
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: skill.level / 100 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 mt-2 block">
                        Proficiency · {skill.level}%
                      </span>
                    </div>
                  </m.div>
                );
              })}
            </AnimatePresence>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
