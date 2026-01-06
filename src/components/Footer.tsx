import { LazyMotion, domAnimation, m } from "framer-motion";
import { memo } from "react";

const Footer = () => {
  return (
    <LazyMotion features={domAnimation}>
      <footer className="relative overflow-hidden bg-[#0b0f19] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

          <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full -top-24 -left-24" />
          <div className="absolute w-[260px] h-[260px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-20%]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <m.div
            className="py-12 flex flex-col items-center gap-6 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              mass: 0.6,
            }}
            viewport={{ once: true, margin: "-80px" }}
            style={{ translateZ: 0 }}
          >
            <m.h3
              className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              style={{ translateZ: 0 }}
            >
              Aravinth Raj
            </m.h3>

            <p className="text-sm text-gray-400 max-w-md">
              Building scalable systems, clean interfaces, and meaningful
              digital experiences.
            </p>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            <p className="text-[11px] text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </m.div>
        </div>
      </footer>
    </LazyMotion>
  );
};

export default memo(Footer);
