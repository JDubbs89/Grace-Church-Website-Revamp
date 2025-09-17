"use client"
import React, { useState, useEffect, useRef } from 'react';
import MediaContainer from './mediaContainer';
import DirectionalButton from './directionalButton';

type MediaItem = {
  src: string;
  children?: React.ReactNode;
};

type MediaCarouselSectionProps = {
  mediaItems: MediaItem[];
  autoAdvanceMs: number;
  pauseOnHover: boolean;
};

export default function MediaCarouselSection({ mediaItems, autoAdvanceMs, pauseOnHover }: MediaCarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);

  const indexBy = (indexToAdd: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + indexToAdd;
      if (newIndex < 0) return mediaItems.length - 1;
      if (newIndex >= mediaItems.length) return 0;
      return newIndex;
    });
    resetTimer();
  };

  const resetTimer = () => {
    setProgress(0);
    startTimeRef.current = Date.now();
    pausedTimeRef.current = 0;
  };

  const startTimer = () => {
    if (mediaItems.length <= 1) return;
    
    resetTimer();
    
    intervalRef.current = setInterval(() => {
      if (isPaused) return;
      
      const elapsed = Date.now() - startTimeRef.current - pausedTimeRef.current;
      const newProgress = (elapsed / autoAdvanceMs) * 100;
      
      if (newProgress >= 100) {
        indexBy(1);
      } else {
        setProgress(newProgress);
      }
    }, 50);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    pausedTimeRef.current += Date.now() - startTimeRef.current - pausedTimeRef.current;
  };

  const resumeTimer = () => {
    setIsPaused(false);
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    startTimer();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, autoAdvanceMs, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) pauseTimer();
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) resumeTimer();
  };

  return (
    <section className="media-carousel-section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div 
        className="media-carousel-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {mediaItems.map((item, index) => (
          <div key={index} className="media-carousel-slide">
            <MediaContainer src={item.src}>
              {item.children}
            </MediaContainer>
          </div>
        ))}
      </div>
      
      {mediaItems.length > 1 && (
        <>
          <DirectionalButton 
            direction="left" 
            onClick={() => indexBy(-1)} 
          />
          <DirectionalButton 
            direction="right" 
            onClick={() => indexBy(1)}
          />
          <div 
            className="absolute bottom-0 left-0 h-1 transition-all duration-100 ease-linear z-20"
            style={{ width: `${progress}%`, background: "rgb(10, 87, 138)" }}
          />
        </>
      )}
    </section>
  );
}