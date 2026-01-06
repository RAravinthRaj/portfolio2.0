import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef, memo } from "react";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "Top 25%", label: "LeetCode Contest Ranking" },
  { value: "1532", label: "Skillrack Global Rank" },
  { value: "13th", label: "GFG Institute Rank" },
];

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable & scalable systems" },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive experiences" },
  { icon: Rocket, title: "Performance", desc: "Fast & optimized apps" },
  { icon: Sparkles, title: "Innovation", desc: "Creative problem solving" },
];

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.6,
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        ref={ref}
        className="relative py-20 md:py-32 overflow-hidden bg-[#0b0f19] text-white"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
          <div className="absolute w-[420px] h-[420px] bg-cyan-500/10 blur-3xl rounded-full top-1/3 -left-48" />
          <div className="absolute w-[360px] h-[360px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-15%]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <m.div
              className="relative"
              style={{ translateZ: 0 }}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={spring}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />

                <m.div
                  className="relative w-full h-full rounded-3xl glass overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  style={{ translateZ: 0 }}
                >
                  <img
                    src="/assets/profile.jpeg"
                    alt="Aravinth Raj"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </m.div>

                <m.div
                  className="absolute -right-4 top-8 px-4 py-2 rounded-xl glass"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ translateZ: 0 }}
                >
                  <span className="text-primary font-semibold">
                    ✨ Available
                  </span>
                </m.div>
              </div>
            </m.div>

            <div>
              <m.span
                className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={spring}
                style={{ translateZ: 0 }}
              >
                About Me
              </m.span>

              <m.h2
                className="font-display text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.05 }}
                style={{ translateZ: 0 }}
              >
                Turning Ideas Into{" "}
                <span className="text-gradient">Working Solutions</span>
              </m.h2>

              <m.p
                className="text-muted-foreground text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.1 }}
                style={{ translateZ: 0 }}
              >
                Full-stack Engineer specializing in MERN, REST & GraphQL APIs,
                with hands-on experience building secure authentication flows,
                optimized databases, and scalable backend systems focused on
                clean architecture and real-world impact.
              </m.p>

              <m.div
                className="grid grid-cols-2 gap-4 mb-10"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.15 }}
                style={{ translateZ: 0 }}
              >
                {highlights.map(({ icon: Icon, title, desc }, index) => (
                  <m.div
                    key={title}
                    className="p-4 rounded-xl glass hover:border-primary/30 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...spring, delay: 0.2 + index * 0.06 }}
                    style={{ translateZ: 0 }}
                  >
                    <Icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </m.div>
                ))}
              </m.div>

              <m.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.25 }}
                style={{ translateZ: 0 }}
              >
                <m.a
                  href="https://drive.google.com/file/d/1xxx6WyfQFVbj9-9t7xI3SeMQOq6ufzhh/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </m.a>
              </m.div>
            </div>
          </div>

          <m.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.3 }}
            style={{ translateZ: 0 }}
          >
            {stats.map(({ value, label }, index) => (
              <div key={label} className="text-center">
                <m.span
                  className="block font-display text-4xl md:text-5xl font-bold text-gradient mb-2"
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
                  style={{ translateZ: 0 }}
                >
                  {value}
                </m.span>
                <span className="text-muted-foreground text-sm">{label}</span>
              </div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(AboutSection);
