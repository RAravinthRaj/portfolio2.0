import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      for (const item of navItems) {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <LazyMotion features={domAnimation}>
      <>
        <m.nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled ? "glass py-4" : "py-6"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container mx-auto px-6 flex items-center justify-between">
            <m.a
              href="#home"
              className="font-display text-2xl font-bold text-gradient will-change-transform"
              whileHover={!isTouchDevice ? { scale: 1.05 } : undefined}
              whileTap={{ scale: 0.95 }}
            >
              AR
            </m.a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <m.a
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium text-sm tracking-wide transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={!isTouchDevice ? { y: -2 } : undefined}
                >
                  {item.name}

                  {activeSection === item.href.slice(1) && (
                    <m.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </m.a>
              ))}
            </div>

            <m.a
              href="#contact"
              className="hidden md:block px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg glow-primary will-change-transform"
              whileHover={
                !isTouchDevice
                  ? {
                      scale: 1.05,
                      boxShadow: "0 0 40px hsl(177 70% 50% / 0.6)",
                    }
                  : undefined
              }
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
            </m.a>

            <m.button
              onClick={() => setIsOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              whileTap={{ scale: 0.9 }}
            >
              <span className="w-6 h-0.5 bg-foreground rounded-full" />
              <span className="w-4 h-0.5 bg-foreground rounded-full" />
              <span className="w-6 h-0.5 bg-foreground rounded-full" />
            </m.button>
          </div>
        </m.nav>

        <AnimatePresence>
          {isOpen && (
            <>
              <m.div
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <m.aside
                className="fixed top-0 right-0 z-50 h-full w-72 bg-[#0b0f19] border-l border-white/10"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                }}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
                  <div className="absolute w-60 h-60 bg-cyan-500/10 blur-3xl rounded-full top-1/3 -left-24" />
                </div>

                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-display text-xl font-bold text-gradient">
                      Menu
                    </span>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-white/10 transition"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={handleNavClick}
                        className={`text-base font-medium transition-colors ${
                          activeSection === item.href.slice(1)
                            ? "text-primary"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-auto pt-10">
                    <a
                      href="#contact"
                      onClick={handleNavClick}
                      className="block text-center px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary"
                    >
                      Let&apos;s Talk
                    </a>
                  </div>
                </div>
              </m.aside>
            </>
          )}
        </AnimatePresence>
      </>
    </LazyMotion>
  );
};

export default Navigation;
