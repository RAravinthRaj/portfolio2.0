import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            JD
          </motion.a>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> by John Doe
          </p>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;