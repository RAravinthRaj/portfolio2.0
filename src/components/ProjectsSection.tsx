import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import inventoryImg from "../assets/images/inventory_management_system.png";
import staffImg from "../assets/images/staff_management_system.webp";
import blogImg from "../assets/images/blog_application.avif";
import airlineImg from "../assets/images/airline_passenger.avif";
import pgLifeImg from "../assets/images/pg_life.avif";
import medicineImg from "../assets/images/medicine_finder.avif";
import portfolioImg from "../assets/images/portfolio.jpeg";

const projects = [
  {
    title: "Inventory Management System",
    category: "Web Application",
    description:
      "A full-stack inventory platform with role-based access control, real-time stock tracking, sales analytics, and secure JWT-based authentication for business operations.",
    image: inventoryImg,
    tags: ["React", "Node.js", "MongoDB", "JWT", "RBAC"],
    github: {
      frontend: "https://github.com/RAravinthRaj/nec-store-react",
      backend: "https://github.com/RAravinthRaj/nec-store-node",
    },
    demo: "https://nec-store-react.onrender.com",
  },
  {
    title: "Staff Management System",
    category: "Mobile Application",
    description:
      "A React Native mobile application to manage staff profiles, attendance tracking, and role assignments using secure REST APIs.",
    image: staffImg,
    tags: ["React Native", "Node.js", "MySQL", "REST API"],
    github: {
      frontend: "https://github.com/RAravinthRaj/nec-staff-hub-rn",
      backend: "https://github.com/RAravinthRaj/nec-staff-hub-node",
    },
    badge: "Ongoing",
  },
  {
    title: "Blog Application",
    category: "Web Application",
    description:
      "A full-stack blogging platform supporting authentication, post creation, editing, and commenting with a scalable REST-based architecture.",
    image: blogImg,
    tags: ["React", "Spring Boot", "MySQL", "REST API"],
    github: {
      frontend: "https://github.com/RAravinthRaj/blog-app-react",
      backend: "https://github.com/RAravinthRaj/blog-app-spring",
    },
    demo: "https://www.linkedin.com/posts/aravinth-raj-r-868963288_reactjs-springboot-mysql-activity-7328420416270598144-SRJO",
  },
  {
    title: "Airline Passenger System",
    category: "Console Application",
    description:
      "A C++ console-based system applying object-oriented programming and data structures to manage airline passenger and luggage records efficiently.",
    image: airlineImg,
    tags: ["C++", "OOP", "Data Structures", "Algorithms"],
    github: {
      frontend:
        "https://github.com/RAravinthRaj/airline-passenger-and-luggage-management-system",
    },
  },
  {
    title: "PG Life",
    category: "Web Application",
    description:
      "A responsive web platform to discover PG accommodations with filtering, authentication, and a clean user interface.",
    image: pgLifeImg,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: {
      frontend: "https://github.com/RAravinthRaj/pg-life",
    },
  },
  {
    title: "Medicine Finder",
    category: "Web Application",
    description:
      "A Flask-based web application that allows users to search medicines and check availability through a simple interface.",
    image: medicineImg,
    tags: ["Python", "Flask", "Web App", "Backend"],
    github: {
      frontend: "https://github.com/RAravinthRaj/medicine-finder",
    },
  },
  {
    title: "Personal Portfolio",
    category: "Web Application",
    description:
      "A modern animated personal portfolio showcasing projects, skills, and achievements with responsive layouts and smooth UI interactions.",
    image: portfolioImg,
    tags: ["React", "Framer Motion", "Tailwind CSS", "UI/UX"],
    github: {
      frontend: "https://github.com/RAravinthRaj/portfolio2.0",
    },
    demo: "#",
  },
];

const overlayVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
};

type CardProps = {
  project: (typeof projects)[0];
  index: number;
  activeIndex: number | null;
  setActiveIndex: (i: number | null) => void;
};

const Overlay = ({ project }: { project: (typeof projects)[0] }) => (
  <>
    {project.badge && (
      <span className="absolute top-4 right-4 px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
        {project.badge}
      </span>
    )}

    <div>
      <span className="text-xs uppercase text-primary">{project.category}</span>
      <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full border-2 border-primary/30 bg-background/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="flex flex-wrap gap-5 border-t pt-4">
      {project.github.frontend && (
        <a
          href={project.github.frontend}
          target="_blank"
          rel="noopener noreferrer"
          className="
        group flex items-center gap-2 text-sm font-medium
        text-muted-foreground transition-all duration-300
        hover:text-primary
      "
        >
          <FaGithub className="transition-transform duration-300 group-hover:scale-110" />

          <span className="relative">
            {project.github.backend ? "Frontend" : "GitHub"}
            <span
              className="
            absolute left-0 -bottom-1 h-[2px] w-0
            bg-gradient-to-r from-primary to-accent
            transition-all duration-300
            group-hover:w-full
          "
            />
          </span>
        </a>
      )}

      {project.github.backend && (
        <a
          href={project.github.backend}
          className="
      group flex items-center gap-2 text-sm font-medium
      text-muted-foreground
      transition-all duration-300
      hover:text-primary
    "
        >
          <FaGithub className="transition-transform duration-300 group-hover:scale-110" />
          <span className="relative">
            Backend
            <span
              className="
          absolute left-0 -bottom-1 h-[2px] w-0
          bg-gradient-to-r from-primary to-accent
          transition-all duration-300
          group-hover:w-full
        "
            />
          </span>
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          className="
      group flex items-center gap-2 text-sm font-medium
      text-muted-foreground
      transition-all duration-300
      hover:text-accent
    "
        >
          <ExternalLink
            size={16}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="relative">
            Demo
            <span
              className="
          absolute left-0 -bottom-1 h-[2px] w-0
          bg-gradient-to-r from-accent to-primary
          transition-all duration-300
          group-hover:w-full
        "
            />
          </span>
        </a>
      )}
    </div>
  </>
);

const ProjectCard = ({
  project,
  index,
  activeIndex,
  setActiveIndex,
}: CardProps) => {
  const isOpen = activeIndex === index;

  const colSpanClass =
    index === 0 || index === projects.length - 1
      ? "lg:col-span-6"
      : index === 1 || index === 2
      ? "lg:col-span-3"
      : "lg:col-span-2";

  return (
    <div className={colSpanClass}>
      <motion.div
        onClick={() => setActiveIndex(isOpen ? null : index)}
        onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(index)}
        onMouseLeave={() => window.innerWidth >= 1024 && setActiveIndex(null)}
        className="relative overflow-hidden border rounded-2xl cursor-pointer"
        whileHover={{
          boxShadow: "0 0 28px hsl(177 70% 50% / 0.25)",
        }}
      >
        {/* IMAGE */}
        <div className="relative h-72">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* DESKTOP OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="hidden lg:flex absolute inset-0 bg-background/90 backdrop-blur-xl p-6 flex-col justify-between z-20"
            >
              <Overlay project={project} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* MOBILE + TABLET EXPAND */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden border border-t-0 rounded-b-2xl bg-background/95"
          >
            <div className="p-6">
              <Overlay project={project} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-5" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            onClick={() => setShowAll((p) => !p)}
            className="
    px-7 py-3.5 sm:px-9 sm:py-4
    text-sm sm:text-base
    glass font-semibold rounded-lg
    border border-border
  
    hover:border-primary/50
  "
            whileHover={{
              scale: 1.05,
              color: "rgb(45, 212, 191)", // primary teal
              boxShadow: "0 8px 24px rgba(45, 212, 191, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "View Less Projects" : "View More Projects"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
