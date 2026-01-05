import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0b0f19] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

        <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full -top-24 -left-24" />
        <div className="absolute w-[260px] h-[260px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-20%]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="py-12 flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"
            whileHover={{ scale: 1.03 }}
          >
            Aravinth Raj
          </motion.h3>

          <p className="text-sm text-gray-400 max-w-md">
            Building scalable systems, clean interfaces, and meaningful digital
            experiences.
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center">
            Crafted with
            <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            using React & modern web tech
          </p>

          <p className="text-[11px] text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
