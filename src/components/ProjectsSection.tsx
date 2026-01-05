// import { motion, AnimatePresence, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { ExternalLink } from "lucide-react";
// import { FaGithub } from "react-icons/fa";

// import inventoryImg from "../assets/images/inventory_management_system.png";
// import staffImg from "../assets/images/staff_management.png";
// import blogImg from "../assets/images/blog_application.avif";
// import airlineImg from "../assets/images/airline_passenger.avif";
// import pgLifeImg from "../assets/images/pg_life.avif";
// import medicineImg from "../assets/images/medicine_finder.avif";
// import portfolioImg from "../assets/images/portfolio.png";
// import todoImg from "../assets/images/todo_list.jpg";

// const projects = [
//   {
//     title: "Inventory Management System",
//     category: "Web Application",
//     description:
//       "A full-stack inventory platform with role-based access control, real-time stock tracking, sales analytics, and secure JWT-based authentication.",
//     image: inventoryImg,
//     tags: ["React", "Node.js", "MongoDB", "JWT", "RBAC"],
//     github: {
//       frontend: "https://github.com/RAravinthRaj/nec-store-react",
//       backend: "https://github.com/RAravinthRaj/nec-store-node",
//     },
//     demo: "https://nec-store-react.onrender.com",
//   },
//   {
//     title: "Staff Management System",
//     category: "Mobile Application",
//     description:
//       "A React Native app to manage staff profiles, attendance, and roles.",
//     image: staffImg,
//     tags: ["React Native", "Node.js", "MySQL"],
//     github: {
//       frontend: "https://github.com/RAravinthRaj/nec-staff-hub-rn",
//       backend: "https://github.com/RAravinthRaj/nec-staff-hub-node",
//     },
//     badge: "Ongoing",
//   },
//   {
//     title: "Blog Application",
//     category: "Web Application",
//     description:
//       "A full-stack blogging platform with authentication and REST APIs.",
//     image: blogImg,
//     tags: ["React", "Spring Boot", "MySQL"],
//     github: {
//       frontend: "https://github.com/RAravinthRaj/blog-app-react",
//       backend: "https://github.com/RAravinthRaj/blog-app-spring",
//     },
//   },
//   {
//     title: "Airline Passenger System",
//     category: "Console Application",
//     description: "C++ console application using OOP and data structures.",
//     image: airlineImg,
//     tags: ["C++", "OOP", "DSA"],
//     github: {
//       frontend:
//         "https://github.com/RAravinthRaj/airline-passenger-and-luggage-management-system",
//     },
//   },
//   {
//     title: "PG Life",
//     category: "Web Application",
//     description:
//       "PG accommodation discovery platform with filtering and authentication.",
//     image: pgLifeImg,
//     tags: ["HTML", "CSS", "JavaScript", "PHP"],
//     github: {
//       frontend: "https://github.com/RAravinthRaj/pg-life",
//     },
//   },
//   {
//     title: "Medicine Finder",
//     category: "Web Application",
//     description: "Flask-based application to search medicine availability.",
//     image: medicineImg,
//     tags: ["Python", "Flask"],
//     github: {
//       frontend: "https://github.com/RAravinthRaj/medicine-finder",
//     },
//   },
//   {
//     title: "Personal Portfolio",
//     category: "Web Application",
//     description: "Animated portfolio showcasing projects and skills.",
//     image: portfolioImg,
//     tags: ["React", "Framer Motion", "Tailwind CSS"],
//     github: {
//       frontend: "https://github.com/RAravinthRaj/portfolio2.0",
//     },
//   },
//   {
//     title: "Todo List Application",
//     category: "Full Stack Web Application",
//     description: "MERN-based Todo app with authentication.",
//     image: todoImg,
//     tags: ["MongoDB", "Express", "React", "Node.js"],
//     github: {
//       frontend: "https://github.com/RAravinthRaj/todo-app",
//     },
//   },
// ];

// /* -------------------------------------------------------------------------- */
// /*                                ANIMATIONS                                   */
// /* -------------------------------------------------------------------------- */

// const overlayVariants = {
//   hidden: { y: "100%" },
//   visible: {
//     y: 0,
//     transition: { type: "spring", stiffness: 140, damping: 22 },
//   },
// };

// const mobileOverlayVariants = {
//   hidden: { opacity: 0, y: -8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.35, ease: "easeOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -6,
//     transition: { duration: 0.25 },
//   },
// };

// /* -------------------------------------------------------------------------- */
// /*                                  OVERLAY                                    */
// /* -------------------------------------------------------------------------- */

// const Overlay = ({ project }: any) => (
//   <>
//     {project.badge && (
//       <span className="absolute top-4 right-4 px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
//         {project.badge}
//       </span>
//     )}

//     <div>
//       <span className="text-xs uppercase text-primary">{project.category}</span>
//       <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
//       <p className="text-sm text-muted-foreground mb-4">
//         {project.description}
//       </p>

//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.tags.map((tag: string) => (
//           <span
//             key={tag}
//             className="px-3 py-1 text-xs rounded-full border border-primary/30"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>

//     <div className="flex gap-5 border-t pt-4">
//       {project.github?.frontend && (
//         <a
//           href={project.github.frontend}
//           target="_blank"
//           className="flex items-center gap-2 text-sm hover:text-primary"
//         >
//           <FaGithub /> GitHub
//         </a>
//       )}

//       {project.demo && (
//         <a
//           href={project.demo}
//           target="_blank"
//           className="flex items-center gap-2 text-sm hover:text-accent"
//         >
//           <ExternalLink size={16} /> Demo
//         </a>
//       )}
//     </div>
//   </>
// );

// /* -------------------------------------------------------------------------- */
// /*                                PROJECT CARD                                 */
// /* -------------------------------------------------------------------------- */

// const ProjectCard = ({ project, index, activeIndex, setActiveIndex }: any) => {
//   const isOpen = activeIndex === index;

//   return (
//     <motion.div
//       onClick={() => setActiveIndex(isOpen ? null : index)}
//       onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(index)}
//       onMouseLeave={() => window.innerWidth >= 1024 && setActiveIndex(null)}
//       className="relative overflow-hidden border rounded-2xl cursor-pointer"
//       whileHover={{ boxShadow: "0 0 28px rgba(45,212,191,0.25)" }}
//     >
//       <div className="h-72">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* DESKTOP OVERLAY */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={overlayVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="hidden lg:flex absolute inset-0 bg-background/90 backdrop-blur-xl p-6 flex-col justify-between"
//           >
//             <Overlay project={project} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* MOBILE / TABLET OVERLAY */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={mobileOverlayVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="lg:hidden border-t bg-background/95 overflow-hidden"
//           >
//             <div className="p-6">
//               <Overlay project={project} />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// /* -------------------------------------------------------------------------- */
// /*                              MAIN SECTION                                   */
// /* -------------------------------------------------------------------------- */

// export default function ProjectsSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [showAll, setShowAll] = useState(false);

//   const row1 = projects.slice(0, 1);
//   const row2 = projects.slice(1, 3);
//   const row3 = projects.slice(3, 6);
//   const row4 = projects.slice(6, 8);

//   return (
//     <section
//       id="projects"
//       ref={ref}
//       className="relative py-28 bg-[#0b0f19] text-white overflow-hidden"
//     >
//       {/* CYBER BACKGROUND */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
//         <div className="absolute w-[420px] h-[420px] bg-cyan-500/10 blur-3xl rounded-full top-1/3 -left-48" />
//         <div className="absolute w-[360px] h-[360px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-15%]" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//         >
//           Featured <span className="text-gradient">Projects</span>
//         </motion.h2>

//         {/* MOBILE + TABLET → 1 CARD PER ROW */}
//         <div className="grid grid-cols-1 gap-8 lg:hidden">
//           {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
//             <ProjectCard
//               key={project.title}
//               project={project}
//               index={index}
//               activeIndex={activeIndex}
//               setActiveIndex={setActiveIndex}
//             />
//           ))}
//         </div>

//         {/* DESKTOP CUSTOM LAYOUT */}
//         <div className="hidden lg:flex flex-col gap-8">
//           <div className="flex gap-8">
//             {row1.map((p, i) => (
//               <div key={p.title} className="w-full">
//                 <ProjectCard
//                   project={p}
//                   index={i}
//                   activeIndex={activeIndex}
//                   setActiveIndex={setActiveIndex}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-8">
//             {row2.map((p, i) => (
//               <div key={p.title} className="w-1/2">
//                 <ProjectCard
//                   project={p}
//                   index={i + 1}
//                   activeIndex={activeIndex}
//                   setActiveIndex={setActiveIndex}
//                 />
//               </div>
//             ))}
//           </div>

//           {showAll && (
//             <div className="flex gap-8">
//               {row3.map((p, i) => (
//                 <div key={p.title} className="w-1/3">
//                   <ProjectCard
//                     project={p}
//                     index={i + 3}
//                     activeIndex={activeIndex}
//                     setActiveIndex={setActiveIndex}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}

//           {showAll && (
//             <div className="flex gap-8">
//               {row4.map((p, i) => (
//                 <div key={p.title} className="w-1/2">
//                   <ProjectCard
//                     project={p}
//                     index={i + 6}
//                     activeIndex={activeIndex}
//                     setActiveIndex={setActiveIndex}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="text-center mt-16">
//           <motion.button
//             onClick={() => setShowAll((p) => !p)}
//             className="px-7 py-3.5 glass rounded-lg border hover:border-primary/50"
//             whileHover={{ scale: 1.05, color: "rgb(45, 212, 191)" }}
//           >
//             {showAll ? "View Less Projects" : "View More Projects"}
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import inventoryImg from "../assets/images/inventory_management_system.png";
import staffImg from "../assets/images/staff_management.png";
import blogImg from "../assets/images/blog_application.avif";
import airlineImg from "../assets/images/airline_passenger.avif";
import pgLifeImg from "../assets/images/pg_life.avif";
import medicineImg from "../assets/images/medicine_finder.avif";
import portfolioImg from "../assets/images/portfolio.png";
import todoImg from "../assets/images/todo_list.jpg";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const projects = [
  {
    title: "Inventory Management System",
    category: "Web Application",
    description:
      "A full-stack inventory platform with role-based access control, real-time stock tracking, sales analytics, and secure JWT-based authentication.",
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
      "A React Native app to manage staff profiles, attendance, and roles.",
    image: staffImg,
    tags: ["React Native", "Node.js", "MySQL"],
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
      "A full-stack blogging platform with authentication and REST APIs.",
    image: blogImg,
    tags: ["React", "Spring Boot", "MySQL"],
    github: {
      frontend: "https://github.com/RAravinthRaj/blog-app-react",
      backend: "https://github.com/RAravinthRaj/blog-app-spring",
    },
  },
  {
    title: "Airline Passenger System",
    category: "Console Application",
    description: "C++ console application using OOP and data structures.",
    image: airlineImg,
    tags: ["C++", "OOP", "DSA"],
    github: {
      frontend:
        "https://github.com/RAravinthRaj/airline-passenger-and-luggage-management-system",
    },
  },
  {
    title: "PG Life",
    category: "Web Application",
    description:
      "PG accommodation discovery platform with filtering and authentication.",
    image: pgLifeImg,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: {
      frontend: "https://github.com/RAravinthRaj/pg-life",
    },
  },
  {
    title: "Medicine Finder",
    category: "Web Application",
    description: "Flask-based application to search medicine availability.",
    image: medicineImg,
    tags: ["Python", "Flask"],
    github: {
      frontend: "https://github.com/RAravinthRaj/medicine-finder",
    },
  },
  {
    title: "Personal Portfolio",
    category: "Web Application",
    description: "Animated portfolio showcasing projects and skills.",
    image: portfolioImg,
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    github: {
      frontend: "https://github.com/RAravinthRaj/portfolio2.0",
    },
  },
  {
    title: "Todo List Application",
    category: "Full Stack Web Application",
    description: "MERN-based Todo app with authentication.",
    image: todoImg,
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: {
      frontend: "https://github.com/RAravinthRaj/todo-app",
    },
  },
];

/* -------------------------------------------------------------------------- */
/*                                ANIMATIONS                                   */
/* -------------------------------------------------------------------------- */

// Card entrance
const cardReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// Desktop overlay
const overlayVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 22 },
  },
};

// Mobile / tablet expand
const mobileOverlayVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25 },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  OVERLAY                                    */
/* -------------------------------------------------------------------------- */

const Overlay = ({ project }: any) => (
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
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full border border-primary/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="flex gap-5 border-t pt-4">
      {project.github?.frontend && (
        <a
          href={project.github.frontend}
          target="_blank"
          className="flex items-center gap-2 text-sm hover:text-primary"
        >
          <FaGithub /> GitHub
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          className="flex items-center gap-2 text-sm hover:text-accent"
        >
          <ExternalLink size={16} /> Demo
        </a>
      )}
    </div>
  </>
);

/* -------------------------------------------------------------------------- */
/*                                PROJECT CARD                                 */
/* -------------------------------------------------------------------------- */

const ProjectCard = ({ project, index, activeIndex, setActiveIndex }: any) => {
  const isOpen = activeIndex === index;

  return (
    <motion.div
      variants={cardReveal}
      initial="hidden"
      animate="visible"
      onClick={() => setActiveIndex(isOpen ? null : index)}
      onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(index)}
      onMouseLeave={() => window.innerWidth >= 1024 && setActiveIndex(null)}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 30px rgba(45,212,191,0.25)",
      }}
      className="relative overflow-hidden border rounded-2xl cursor-pointer"
    >
      <div className="h-72">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* DESKTOP OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="hidden lg:flex absolute inset-0 bg-background/90 backdrop-blur-xl p-6 flex-col justify-between"
          >
            <Overlay project={project} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE / TABLET OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden border-t bg-background/95"
          >
            <div className="p-6">
              <Overlay project={project} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              MAIN SECTION                                   */
/* -------------------------------------------------------------------------- */

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const row1 = projects.slice(0, 1);
  const row2 = projects.slice(1, 3);
  const row3 = projects.slice(3, 6);
  const row4 = projects.slice(6, 8);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 bg-[#0b0f19] text-white overflow-hidden"
    >
      {/* CYBER BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="absolute w-[420px] h-[420px] bg-cyan-500/10 blur-3xl rounded-full top-1/3 -left-48" />
        <div className="absolute w-[360px] h-[360px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-15%]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        {/* MOBILE + TABLET */}
        <div className="grid grid-cols-1 gap-8 lg:hidden">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-col gap-8">
          <div className="flex gap-8">
            {row1.map((p, i) => (
              <div key={p.title} className="w-full">
                <ProjectCard
                  project={p}
                  index={i}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-8">
            {row2.map((p, i) => (
              <div key={p.title} className="w-1/2">
                <ProjectCard
                  project={p}
                  index={i + 1}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </div>
            ))}
          </div>

          {showAll && (
            <div className="flex gap-8">
              {row3.map((p, i) => (
                <div key={p.title} className="w-1/3">
                  <ProjectCard
                    project={p}
                    index={i + 3}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </div>
              ))}
            </div>
          )}

          {showAll && (
            <div className="flex gap-8">
              {row4.map((p, i) => (
                <div key={p.title} className="w-1/2">
                  <ProjectCard
                    project={p}
                    index={i + 6}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <motion.button
            onClick={() => setShowAll((p) => !p)}
            className="px-7 py-3.5 glass rounded-lg border hover:border-primary/50"
            whileHover={{ scale: 1.05, color: "rgb(45, 212, 191)" }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "View Less Projects" : "View More Projects"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
