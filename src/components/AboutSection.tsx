import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Palette, title: "UI/UX Design", desc: "Creating intuitive experiences" },
  { icon: Rocket, title: "Performance", desc: "Optimizing for speed & efficiency" },
  { icon: Sparkles, title: "Innovation", desc: "Pushing creative boundaries" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              
              {/* Main image container */}
              <motion.div
                className="relative w-full h-full rounded-3xl glass overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-8xl font-bold text-gradient opacity-30">
                    JD
                  </span>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -right-4 top-8 px-4 py-2 rounded-xl glass"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-primary font-semibold">✨ Available</span>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -left-4 bottom-8 px-4 py-3 rounded-xl glass"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-2xl font-bold text-gradient">5+</span>
                <span className="text-sm text-muted-foreground block">Years Exp.</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <motion.span
              className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.span>

            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Crafting Digital
              <span className="text-gradient"> Experiences</span>
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a passionate full-stack developer and designer based in San Francisco. 
              With over 5 years of experience, I specialize in creating beautiful, 
              functional web applications that deliver exceptional user experiences.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {highlights.map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  className="p-4 rounded-xl glass group hover:border-primary/30 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Download CV
            </motion.a>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map(({ value, label }, index) => (
            <motion.div
              key={label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="block font-display text-4xl md:text-5xl font-bold text-gradient mb-2"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {value}
              </motion.span>
              <span className="text-muted-foreground text-sm">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;