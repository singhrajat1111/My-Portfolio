"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [framesLoaded, setFramesLoaded] = useState(0);

  const handleLoadProgress = useCallback((loaded: number) => {
    setFramesLoaded(loaded);
  }, []);

  // We consider the app "ready" when the first frame is loaded
  // to ensure instant perceived load, but we can also wait for more.
  const isReady = framesLoaded >= 1; 

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      {/* Global Intro Loader */}
      <IntroLoader 
        onComplete={() => setIntroFinished(true)} 
        isReady={isReady}
      />

      <AnimatePresence>
        {introFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <ScrollyCanvas 
                onLoadProgress={handleLoadProgress} 
              />
              <Overlay />
            </div>
            <Projects />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hidden ScrollyCanvas for preloading before intro finishes */}
      {!introFinished && (
        <div className="hidden">
          <ScrollyCanvas onLoadProgress={handleLoadProgress} />
        </div>
      )}
    </main>
  );
}
