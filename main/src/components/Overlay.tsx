"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 25%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25, 1], [0, -50, -50]);

  // Section 2: 30% to 55%
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.45, 0.55, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.55, 1], [50, 50, 0, -50, -50]);

  // Section 3: 60% to 85%
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.65, 0.8, 0.9, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 0.65, 0.9, 1], [50, 50, 0, -50, -50]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-4 mix-blend-difference drop-shadow-2xl">
            Rajat Singh
          </h1>
          <p className="text-xl md:text-3xl text-neutral-300 font-light tracking-wide">
            A curious techie who loves to innovate.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white max-w-3xl mix-blend-difference drop-shadow-xl">
            I build digital experiences.
          </h2>
          <div className="w-24 h-1 bg-white mt-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
        >
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mix-blend-difference drop-shadow-xl">
            Bridging design <br className="hidden md:block"/> and engineering.
          </h2>
          <div className="flex gap-4 mt-8">
            <span className="px-6 py-2 border border-white/20 rounded-full backdrop-blur-md text-white/80 font-medium tracking-wider text-sm uppercase shadow-[0_0_20px_rgba(255,255,255,0.1)]">Full Stack</span>
            <span className="px-6 py-2 border border-white/20 rounded-full backdrop-blur-md text-white/80 font-medium tracking-wider text-sm uppercase shadow-[0_0_20px_rgba(255,255,255,0.1)]">AI</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
