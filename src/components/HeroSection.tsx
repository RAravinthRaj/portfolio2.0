import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import FloatingShapes from "./FloatingShapes";

const HeroSection = () => {
  const titleWords = ["Aravinth Raj R"];
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Engineer",
    "Problem Solver",
    "UI/UX Designer",
    "MERN Stack Engineer",
  ];

  const icons = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/AravinthRajR",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aravinth-raj-r-868963288/",
    },
    {
      icon: FaTwitter,
      label: "Twitter / X",
      href: "https://x.com/aravinth_raj_r",
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      href: "https://leetcode.com/u/AravinthRaj239/",
    },
    {
      icon: SiGeeksforgeeks,
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/profile/aravinth_raj_05?tab=activity",
    },
    {
      icon: FaLaptopCode,
      label: "Skillrack",
      href: "https://www.skillrack.com/faces/resume.xhtml?id=440619&key=454ab63e4f875b92e95ecbb5561046c0dc5f6aa7",
    },
    { icon: SiCodechef, label: "CodeChef", href: "https://www.codechef.com/" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const _renderSocialIcons = () => {
    return (
      <motion.div
        className="
      grid grid-cols-4
      gap-x-5 gap-y-8
      w-fit mx-auto
      justify-items-center items-center
      sm:flex sm:items-center sm:justify-center sm:gap-6
      md:gap-8
    "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {/* First row (4 icons) */}
        {icons.slice(0, 4).map(({ icon: Icon, href, label }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
          relative group
          p-3 sm:p-3.5
          rounded-full glass
          text-muted-foreground
          hover:text-primary
          transition-colors
        "
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="text-[18px] sm:text-[20px]" />

            <span
              className="
            pointer-events-none
            absolute -top-9 left-1/2 -translate-x-1/2
            whitespace-nowrap
            rounded-md
            bg-background/90
            px-2 py-1
            text-xs font-medium
            text-foreground
            opacity-0 scale-95
            transition-all duration-200
            group-hover:opacity-100
            group-hover:scale-100
            group-hover:-top-11
            shadow-lg backdrop-blur
          "
            >
              {label}
            </span>
          </motion.a>
        ))}

        {/* Second row (3 icons centered in same row) */}
        <div className="col-span-4 flex justify-center gap-5">
          {icons.slice(4).map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
            relative group
            p-3 sm:p-3.5
            rounded-full glass
            text-muted-foreground
            hover:text-primary
            transition-colors
          "
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="text-[18px] sm:text-[20px]" />

              <span
                className="
              pointer-events-none
              absolute -top-9 left-1/2 -translate-x-1/2
              whitespace-nowrap
              rounded-md
              bg-background/90
              px-2 py-1
              text-xs font-medium
              text-foreground
              opacity-0 scale-95
              transition-all duration-200
              group-hover:opacity-100
              group-hover:scale-100
              group-hover:-top-11
              shadow-lg backdrop-blur
            "
              >
                {label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      <FloatingShapes />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Name */}
          <h1
            className="
              font-display font-bold
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              leading-tight md:leading-[1.15] xl:leading-[1.1]
              mb-3
            "
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block text-gradient"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Rotating Roles */}
          <div className="relative h-8 sm:h-10 md:h-12 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRole]}
                className="
                  absolute inset-0
                  flex items-center justify-center
                  text-base sm:text-lg md:text-xl
                  font-semibold
                  text-primary
                  tracking-wide
                "
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <motion.p
            className="
              text-base sm:text-lg md:text-xl
              text-muted-foreground
              max-w-xl md:max-w-3xl
              mx-auto
              leading-relaxed md:leading-loose
              mb-10 md:mb-14 xl:mb-16
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Problem-driven full-stack engineer crafting scalable MERN
            applications with secure APIs, optimized databases, and clean system
            design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 md:mb-16 xl:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="
                px-7 py-3.5 sm:px-9 sm:py-4
                text-sm sm:text-base
                bg-primary text-primary-foreground
                font-semibold rounded-lg
                glow-primary
              "
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px hsl(177 70% 50% / 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="
                px-7 py-3.5 sm:px-9 sm:py-4
                text-sm sm:text-base
                glass font-semibold rounded-lg
                border border-border
                hover:border-primary/50
                transition-colors
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {_renderSocialIcons()}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] sm:text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={16} className="sm:hidden" />
          <FiArrowDown size={20} className="hidden sm:block" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
