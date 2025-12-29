import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(177 70% 50% / 0.4) 0%, transparent 70%)",
          top: "-200px",
          right: "-200px",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(280 70% 60% / 0.5) 0%, transparent 70%)",
          bottom: "10%",
          left: "-100px",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-20 h-20 border border-primary/30 rounded-lg"
        style={{ top: "20%", left: "10%" }}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-16 h-16 border border-accent/30 rounded-full"
        style={{ top: "60%", right: "15%" }}
        animate={{
          y: [20, -20, 20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-12 h-12 bg-primary/10 rounded-lg rotate-45"
        style={{ bottom: "30%", left: "20%" }}
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-8 h-8 bg-accent/10 rounded-full"
        style={{ top: "40%", right: "25%" }}
        animate={{
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(177 70% 50%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(177 70% 50%) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
};

export default FloatingShapes;