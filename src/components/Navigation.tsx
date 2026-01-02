import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          className="font-display text-2xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AR
        </motion.a>

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

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 p-2"
          whileTap={{ scale: 0.9 }}
        >
          <span className="w-6 h-0.5 bg-foreground rounded-full" />
          <span className="w-4 h-0.5 bg-foreground rounded-full" />
          <span className="w-6 h-0.5 bg-foreground rounded-full" />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
