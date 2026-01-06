import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { FiArrowDown } from "react-icons/fi";
import FloatingShapes from "./FloatingShapes";

const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

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
      href: "https://www.geeksforgeeks.org/profile/aravinth_raj_05",
    },
    {
      icon: FaLaptopCode,
      label: "Skillrack",
      href: "https://www.skillrack.com/faces/resume.xhtml?id=440619",
    },
    { icon: SiCodechef, label: "CodeChef", href: "https://www.codechef.com/" },
  ];

  useEffect(() => {
    const id = setTimeout(
      () => setCurrentRole((p) => (p + 1) % roles.length),
      2000
    );
    return () => clearTimeout(id);
  }, [currentRole]);

  const hoverMotion = !isTouchDevice ? { scale: 1.1, y: -4 } : undefined;

  const renderSocialIcons = () => (
    <m.div
      className="
        grid grid-cols-4 gap-x-5 gap-y-8
        w-fit mx-auto
        justify-items-center items-center
        sm:flex sm:items-center sm:justify-center sm:gap-6
        md:gap-8
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      {icons.slice(0, 4).map(({ icon: Icon, href, label }) => (
        <m.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative group p-3 sm:p-3.5
            rounded-full glass
            text-muted-foreground
            hover:text-primary
            transition-colors
            will-change-transform
          "
          whileHover={hoverMotion}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="text-[18px] sm:text-[20px]" />

          <span
            className="
              pointer-events-none
              absolute -top-9 left-1/2 -translate-x-1/2
              whitespace-nowrap
              rounded-md bg-background/90
              px-2 py-1 text-xs font-medium
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
        </m.a>
      ))}

      <div className="col-span-4 flex justify-center gap-5">
        {icons.slice(4).map(({ icon: Icon, href, label }) => (
          <m.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative group p-3 sm:p-3.5
              rounded-full glass
              text-muted-foreground
              hover:text-primary
              transition-colors
              will-change-transform
            "
            whileHover={hoverMotion}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="text-[18px] sm:text-[20px]" />

            <span
              className="
                pointer-events-none
                absolute -top-9 left-1/2 -translate-x-1/2
                whitespace-nowrap
                rounded-md bg-background/90
                px-2 py-1 text-xs font-medium
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
          </m.a>
        ))}
      </div>
    </m.div>
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
      >
        <FloatingShapes />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3">
              {titleWords.map((word, index) => (
                <m.span
                  key={index}
                  className="inline-block text-gradient will-change-transform"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word}
                </m.span>
              ))}
            </h1>

            <div className="relative h-8 sm:h-10 md:h-12 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <m.span
                  key={roles[currentRole]}
                  className="absolute inset-0 flex items-center justify-center font-semibold text-primary will-change-transform"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {roles[currentRole]}
                </m.span>
              </AnimatePresence>
            </div>

            <m.p
              className="text-muted-foreground max-w-xl md:max-w-3xl mx-auto mb-10 md:mb-14 xl:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Problem-driven full-stack engineer crafting scalable MERN
              applications with secure APIs, optimized databases, and clean
              system design.
            </m.p>

            <m.div
              className="flex justify-center gap-4 sm:gap-5 mb-12 md:mb-16 xl:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <m.a
                href="#projects"
                className="px-7 py-3.5 sm:px-9 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary will-change-transform"
                whileHover={!isTouchDevice ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </m.a>

              <m.a
                href="#contact"
                className="px-7 py-3.5 sm:px-9 sm:py-4 glass font-semibold rounded-lg border will-change-transform"
                whileHover={!isTouchDevice ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </m.a>
            </m.div>

            {renderSocialIcons()}
          </div>
        </div>

        <m.a
          href="#about"
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase">
            Scroll
          </span>
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={16} className="sm:hidden" />
            <FiArrowDown size={20} className="hidden sm:block" />
          </m.div>
        </m.a>
      </section>
    </LazyMotion>
  );
};

export default HeroSection;
