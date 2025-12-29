import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online store with real-time inventory and AI recommendations.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-primary/20 to-accent/20",
    featured: true,
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for tracking investments and market trends.",
    tags: ["Next.js", "TypeScript", "D3.js"],
    color: "from-accent/20 to-primary/20",
    featured: true,
  },
  {
    title: "Social Media App",
    category: "Mobile Development",
    description: "Cross-platform social app with real-time messaging and stories.",
    tags: ["React Native", "Firebase", "Redux"],
    color: "from-primary/20 to-secondary/30",
    featured: false,
  },
  {
    title: "AI Writing Assistant",
    category: "Machine Learning",
    description: "GPT-powered writing tool for content creators and marketers.",
    tags: ["Python", "OpenAI", "FastAPI"],
    color: "from-secondary/30 to-accent/20",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative group cursor-pointer ${project.featured ? "md:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative h-[400px] rounded-2xl overflow-hidden glass border border-transparent hover:border-primary/30 transition-all duration-500`}
        whileHover={{ y: -8 }}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
        
        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div>
            <motion.span
              className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4"
              animate={{ scale: isHovered ? 1.05 : 1 }}
            >
              {project.category}
            </motion.span>
            
            <motion.h3
              className="font-display text-2xl md:text-3xl font-bold mb-3"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            
            <p className="text-muted-foreground text-sm md:text-base max-w-md">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-background/50 rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project <ArrowUpRight size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Hover overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.span>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of my recent work showcasing web development, 
            design, and creative problem-solving.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:border-primary/30 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;