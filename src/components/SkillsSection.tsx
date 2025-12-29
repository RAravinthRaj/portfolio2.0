import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", level: 92 },
      { name: "UI/UX Design", level: 88 },
      { name: "Prototyping", level: 85 },
      { name: "Design Systems", level: 90 },
    ],
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "GraphQL", "AWS", "Docker", "Git", "Figma", "Tailwind",
  "Redux", "Prisma", "Firebase"
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(177 70% 50%), hsl(200 80% 60%))",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(177 70% 50% / 0.3) 0%, transparent 70%)",
            top: "20%",
            left: "-10%",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
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
            A comprehensive toolkit of modern technologies and frameworks
            that I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="p-6 rounded-2xl glass"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="font-display text-xl font-bold mb-6 text-gradient">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={0.3 + catIndex * 0.1 + skillIndex * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Technology Pills */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h4 className="text-muted-foreground mb-6">Technologies I Work With</h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full glass text-sm font-medium hover:border-primary/30 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;