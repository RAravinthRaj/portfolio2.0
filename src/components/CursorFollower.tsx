import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorFollower = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-50 hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(177 70% 50% / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Small cursor dot */}
      <motion.div
        className="fixed w-3 h-3 rounded-full bg-primary pointer-events-none z-50 hidden lg:block mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CursorFollower;