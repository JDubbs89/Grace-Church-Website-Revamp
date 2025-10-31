"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BasicButton from "../buttons/basic_button";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  loop?: boolean;
  autoAdvance?: boolean;
  autoAdvanceInterval?: number; // in ms
  queueLength?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  loop = true,
  autoAdvance = true,
  autoAdvanceInterval = 8000,
  queueLength = 1,
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [queue, setQueue] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigation = (dir: number) => {
    setQueue((prev) => {
      if (prev.length >= queueLength) return prev; // cap queue length
      return [...prev, dir];
    });
  };

  const processQueue = () => {
    if (isAnimating || queue.length === 0) return;
    const dir = queue[0];
    setDirection(dir);
    setIsAnimating(true);

    setIndex((prev) => {
      const newIndex = prev + dir;
      if (loop) {
        return (newIndex + items.length) % items.length;
      } else {
        if (newIndex < 0) return 0;
        if (newIndex >= items.length) return items.length - 1;
        return newIndex;
      }
    });

    setTimeout(() => {
      setIsAnimating(false);
      setQueue((prev) => prev.slice(1));
    }, 500);
  };

  useEffect(() => {
    if (!isAnimating && queue.length > 0) {
      processQueue();
    }
  }, [queue, isAnimating]);

  // Auto advance functionality
  useEffect(() => {
    if (!autoAdvance) return;
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);

    autoAdvanceRef.current = setInterval(() => {
      handleNavigation(1);
    }, autoAdvanceInterval);

    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
  }, [autoAdvance, autoAdvanceInterval]);

  // Pause auto-advance when user interacts
  const resetAutoAdvance = () => {
    if (!autoAdvance) return;
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current);
      autoAdvanceRef.current = setInterval(() => handleNavigation(1), autoAdvanceInterval);
    }
  };

  // Touch/swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    resetAutoAdvance();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      handleNavigation(deltaX > 0 ? -1 : 1);
    }

    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <div
      className="relative w-full overflow-hidden group select-none bg-[#0A5789]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full h-[65vh] flex justify-center items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full h-full flex flex-col md:flex-row items-center justify-center bg-white"
          >
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
              <img
                src={items[index].image}
                alt={items[index].title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-start p-8 md:pb-20 md:text-left md:justify-end bg-gradient-to-br to-[#418ceec2] from-[#044f73] text-white">
              <h2 className="text-[2rem] md:text-[5rem] font-semibold mb-4">{items[index].title}</h2>
              <p className="text-gray-200 text-lg">{items[index].description}</p>
              <BasicButton name="View Calendar" href="" className="mt-5"/>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows (visible only on hover, hidden on mobile) */}
      <button
        onClick={() => {
          handleNavigation(-1);
          resetAutoAdvance();
        }}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white py-2 pr-4.25 pl-3.5 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        ❮
      </button>
      <button
        onClick={() => {
          handleNavigation(1);
          resetAutoAdvance();
        }}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white py-2 pl-4 pr-3.75 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        ❯
      </button>
      {/* Dot Indicators */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i !== index) setIndex(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-400 ${
              i === index ? "bg-white scale-115" : "bg-[#9c9c9cb0] hover:bg-gray-200 scale-95 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;