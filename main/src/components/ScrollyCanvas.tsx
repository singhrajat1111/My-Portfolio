"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 160;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits e.g. 000, 001
      const indexFormatted = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${indexFormatted}_delay-0.05s.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  const drawImage = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];

    // Responsive aspect ratio matching (object-fit: cover)
    const renderWidth = canvas.width;
    const renderHeight = canvas.height;
    
    const imgAspect = img.width / img.height;
    const canvasAspect = renderWidth / renderHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      drawWidth = renderWidth;
      drawHeight = renderWidth / imgAspect;
      offsetX = 0;
      offsetY = (renderHeight - drawHeight) / 2;
    } else {
      drawWidth = renderHeight * imgAspect;
      drawHeight = renderHeight;
      offsetX = (renderWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, renderWidth, renderHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const currentFrame = Math.round(latest);
    requestAnimationFrame(() => drawImage(currentFrame));
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawImage(Math.round(frameIndex.get()));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [imagesLoaded, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden opacity-90">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white z-20 bg-black">
            <span className="animate-pulse tracking-widest text-sm text-neutral-400">LOADING SCENE...</span>
          </div>
        )}
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
    </div>
  );
}
