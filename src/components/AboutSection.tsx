// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

// const stats = [
//   { value: "5+", label: "Projects Built" },
//   { value: "Top 25%", label: "LeetCode Contest Ranking" },
//   { value: "1532", label: "Skillrack Global Rank" },
//   { value: "13th", label: "GFG Institute Rank" },
// ];

// const highlights = [
//   { icon: Code2, title: "Clean Code", desc: "Maintainable & scalable systems" },
//   { icon: Palette, title: "UI/UX Design", desc: "Intuitive experiences" },
//   { icon: Rocket, title: "Performance", desc: "Fast & optimized apps" },
//   { icon: Sparkles, title: "Innovation", desc: "Creative problem solving" },
// ];

// const AboutSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="about"
//       className="py-20 relative md:py-32 overflow-hidden"
//       ref={ref}
//     >
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT — 3D MODEL */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="relative aspect-square max-w-md mx-auto">
//               {/* Glow */}
//               <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />

//               {/* Glass Card */}
//               <motion.div
//                 className="relative w-full h-full rounded-3xl glass overflow-hidden"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <img
//                   src="/assets/profile.jpeg"
//                   alt="Aravinth Raj"
//                   className="w-full h-full object-cover
//                           rounded-3xl
//                           transition-transform duration-500
//                           group-hover:scale-105
//                         "
//                 />
//               </motion.div>

//               {/* Floating Badge */}
//               <motion.div
//                 className="absolute -right-4 top-8 px-4 py-2 rounded-xl glass"
//                 animate={{ y: [-5, 5, -5] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//               >
//                 <span className="text-primary font-semibold">✨ Available</span>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* RIGHT — CONTENT */}
//           <div>
//             <motion.span
//               className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               About Me
//             </motion.span>

//             <motion.h2
//               className="font-display text-4xl md:text-5xl font-bold mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               Turning Ideas Into{" "}
//               <span className="text-gradient">Working Solutions</span>
//             </motion.h2>

//             <motion.p
//               className="text-muted-foreground text-lg leading-relaxed mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Full-stack Engineer specializing in MERN, REST & GraphQL APIs,
//               with hands-on experience building secure authentication flows,
//               optimized databases, and scalable backend systems focused on clean
//               architecture and real-world impact.
//             </motion.p>

//             {/* Highlights */}
//             <motion.div
//               className="grid grid-cols-2 gap-4 mb-10"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               {highlights.map(({ icon: Icon, title, desc }, index) => (
//                 <motion.div
//                   key={title}
//                   className="p-4 rounded-xl glass hover:border-primary/30 transition-all"
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
//                 >
//                   <Icon className="w-6 h-6 text-primary mb-2" />
//                   <h4 className="font-semibold text-sm mb-1">{title}</h4>
//                   <p className="text-xs text-muted-foreground">{desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CV Buttons */}
//             <motion.div
//               className="flex flex-wrap gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.5 }}
//             >
//               <motion.a
//                 href="/assets/Aravinth_Raj_CV.pdf"
//                 download
//                 className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Download CV
//               </motion.a>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border sm:mt-20"
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           {stats.map(({ value, label }, index) => (
//             <motion.div key={label} className="text-center">
//               <motion.span
//                 className="block font-display text-4xl md:text-5xl font-bold text-gradient mb-2"
//                 initial={{ scale: 0.5 }}
//                 animate={isInView ? { scale: 1 } : {}}
//                 transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
//               >
//                 {value}
//               </motion.span>
//               <span className="text-muted-foreground text-sm">{label}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const CV_DRIVE_URL = "https://drive.google.com/drive/u/2/home";

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

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden bg-[#0b0f19] text-white"
    >
      {/* 🔥 SAME CYBER BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="absolute w-[420px] h-[420px] bg-cyan-500/10 blur-3xl rounded-full top-1/3 -left-48" />
        <div className="absolute w-[360px] h-[360px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-15%]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />

              <motion.div
                className="relative w-full h-full rounded-3xl glass overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/assets/profile.jpeg"
                  alt="Aravinth Raj"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </motion.div>

              <motion.div
                className="absolute -right-4 top-8 px-4 py-2 rounded-xl glass"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-primary font-semibold">✨ Available</span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
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
              Turning Ideas Into{" "}
              <span className="text-gradient">Working Solutions</span>
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full-stack Engineer specializing in MERN, REST & GraphQL APIs,
              with hands-on experience building secure authentication flows,
              optimized databases, and scalable backend systems focused on clean
              architecture and real-world impact.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {highlights.map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  className="p-4 rounded-xl glass hover:border-primary/30 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Icon className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="/assets/Aravinth_Raj_CV.pdf"
                download
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map(({ value, label }, index) => (
            <motion.div key={label} className="text-center">
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
