import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowDown } from "react-icons/fi";
import FloatingShapes from "./FloatingShapes";

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const titleWords = ["Aravinth Raj R"];

  const roles = useMemo(
    () => [
      "Full-Stack Engineer",
      "Problem Solver",
      "UI/UX Designer",
      "MERN Stack Engineer",
    ],
    [],
  );

  const icons = useMemo(
    () => [
      {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/RAravinthRaj",
      },
      {
        icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aravinth-raj-r-868963288/",
      },
      {
        icon: FaXTwitter,
        label: "X (Twitter)",
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
        href: "https://www.skillrack.com/faces/resume.xhtml?id=440619&key=454ab63e4f875b92e95ecbb5561046c0dc5f6aa7",
      },
      {
        icon: SiCodeforces,
        label: "CodeForces",
        href: "https://codeforces.com/profile/aravinthrajr",
      },
    ],
    [],
  );

  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) return;

    const delay = isMobile ? 3500 : 2000;

    const id = setTimeout(() => {
      setCurrentRole((p) => (p + 1) % roles.length);
    }, delay);

    return () => clearTimeout(id);
  }, [currentRole, isMobile, prefersReducedMotion, roles.length]);

  const hoverMotion = isMobile ? undefined : { scale: 1.08, y: -4 };
  const baseDuration = isMobile ? 0.45 : 0.6;

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
      >
        {!isMobile && !prefersReducedMotion && <FloatingShapes />}

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3">
              {titleWords.map((word, index) => (
                <m.span
                  key={index}
                  className="inline-block text-gradient"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: baseDuration,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  {word}
                </m.span>
              ))}
            </h1>

            <div className="relative h-8 sm:h-10 md:h-12 mb-8 overflow-hidden">
              {isMobile ? (
                <m.span
                  key={roles[currentRole]}
                  className="absolute inset-0 flex items-center justify-center font-semibold text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles[currentRole]}
                </m.span>
              ) : (
                <AnimatePresence initial={false}>
                  <m.span
                    key={roles[currentRole]}
                    className="absolute inset-0 flex items-center justify-center font-semibold text-primary"
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    {roles[currentRole]}
                  </m.span>
                </AnimatePresence>
              )}
            </div>

            <m.p
              className="text-muted-foreground max-w-xl md:max-w-3xl mx-auto mb-10 md:mb-14 xl:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: baseDuration, delay: 0.6 }}
            >
              Problem-driven full-stack engineer crafting scalable MERN
              applications with secure APIs, optimized databases, and clean
              system design.
            </m.p>

            <m.div
              className="flex justify-center gap-4 sm:gap-5 mb-12 md:mb-16 xl:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: baseDuration, delay: 0.8 }}
            >
              <m.a
                href="#projects"
                className="px-7 py-3.5 sm:px-9 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary"
                whileHover={hoverMotion}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </m.a>

              <m.a
                href="#contact"
                className="px-7 py-3.5 sm:px-9 sm:py-4 glass font-semibold rounded-lg border"
                whileHover={hoverMotion}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </m.a>
            </m.div>

            <m.div
              className="
                grid grid-cols-4 gap-x-5 gap-y-8
                w-fit mx-auto
                sm:flex sm:gap-6 md:gap-8
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {icons.slice(0, 4).map(({ icon: Icon, href, label }) => (
                <m.a
                  key={label}
                  href={href}
                  target="_blank"
                  title={label}
                  rel="noopener noreferrer"
                  className="relative group p-3 sm:p-3.5 rounded-full glass text-muted-foreground hover:text-primary transition-colors"
                  whileHover={hoverMotion}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-[18px] sm:text-[20px]" />

                  {!isMobile && (
                    <span
                      className="
          pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
          whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white
          opacity-0 scale-95 transition-all duration-200
          group-hover:opacity-100 group-hover:scale-100
        "
                    >
                      {label}
                    </span>
                  )}
                </m.a>
              ))}

              <div className="col-span-4 flex justify-center gap-5">
                {icons.slice(4).map(({ icon: Icon, href, label }) => (
                  <m.a
                    key={label}
                    href={href}
                    target="_blank"
                    title={label}
                    rel="noopener noreferrer"
                    className="relative group p-3 sm:p-3.5 rounded-full glass text-muted-foreground hover:text-primary transition-colors"
                    whileHover={hoverMotion}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-[18px] sm:text-[20px]" />

                    {!isMobile && (
                      <span
                        className="
          pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
          whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white
          opacity-0 scale-95 transition-all duration-200
          group-hover:opacity-100 group-hover:scale-100
        "
                      >
                        {label}
                      </span>
                    )}
                  </m.a>
                ))}
              </div>
            </m.div>
          </div>
        </div>

        <m.a
          href="#about"
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase">
            Scroll
          </span>
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <FiArrowDown size={18} />
          </m.div>
        </m.a>
      </section>
    </LazyMotion>
  );
};

export default HeroSection;
