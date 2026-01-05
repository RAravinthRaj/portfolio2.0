import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route click
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-4" : "py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <motion.a
            href="#home"
            className="font-display text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AR
          </motion.a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative font-medium text-sm tracking-wide transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <motion.a
            href="#contact"
            className="hidden md:block px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg glow-primary"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px hsl(177 70% 50% / 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            whileTap={{ scale: 0.9 }}
          >
            <span className="w-6 h-0.5 bg-foreground rounded-full" />
            <span className="w-4 h-0.5 bg-foreground rounded-full" />
            <span className="w-6 h-0.5 bg-foreground rounded-full" />
          </motion.button>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* DRAWER */}
            <motion.aside
              className="fixed top-0 right-0 z-50 h-full w-72 bg-[#0b0f19] border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {/* CYBER BACKGROUND */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
                <div className="absolute w-60 h-60 bg-cyan-500/10 blur-3xl rounded-full top-1/3 -left-24" />
              </div>

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* HEADER */}
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

                {/* LINKS */}
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

                {/* CTA */}
                <div className="mt-auto pt-10">
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="block text-center px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
