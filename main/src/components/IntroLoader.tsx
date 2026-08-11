"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface IntroLoaderProps {
  onComplete: () => void;
  isReady?: boolean;
}

export default function IntroLoader({ onComplete, isReady = true }: IntroLoaderProps) {
  const [visible, setVisible] = useState(true);

  const handleExitComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Base timer for the branding sequence
    const timer = setTimeout(() => {
      // Only set invisible if the parent says we're ready (frames loaded)
      if (isReady) {
        setVisible(false);
      }
    }, 1800);
    
    return () => clearTimeout(timer);
  }, [isReady]);

  // Fallback: If for some reason isReady takes too long, 
  // we exit anyway at 3.5s to not block the user forever
  useEffect(() => {
    if (visible) {
      const fallback = setTimeout(() => setVisible(false), 3500);
      return () => clearTimeout(fallback);
    }
  }, [visible]);

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            isolation: "isolate",
          }}
          className="bg-black flex items-center justify-center p-6"
        >
          <div className="flex flex-col items-center gap-10">

            {/* ── Rotating avatar container ── */}
            <div className="relative flex items-center justify-center w-36 h-36">
              
              {/* 360° Rotating Border Ring */}
              <motion.div
                initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 360, opacity: 1, scale: 1 }}
                transition={{
                  rotate: { duration: 0.8, ease: "easeOut" },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 }
                }}
                style={{ willChange: "transform" }}
                className="absolute inset-0 rounded-full border-2 border-white/10 border-t-white/80"
              />

              {/* Avatar Image Component */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative w-28 h-28 rounded-full overflow-hidden bg-neutral-900 border border-white/5"
              >
                <Image
                  src="/avatar.webp"
                  alt="Rajat Singh"
                  fill
                  priority={true}
                  className="object-cover"
                  onError={(e) => {
                    // If image fails, show monogram
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Fallback Monogram (hidden if image loads) */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl tracking-tighter mix-blend-difference pointer-events-none">
                  RS
                </div>
              </motion.div>
            </div>

            {/* ── Text Branding ── */}
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white text-base font-bold tracking-[0.3em] uppercase mb-2"
              >
                Rajat Singh
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-neutral-500 text-[10px] tracking-[0.4em] uppercase"
              >
                Creative Developer
              </motion.p>
            </div>

            {/* ── Progressive Loading Bar ── */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "linear" }}
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
