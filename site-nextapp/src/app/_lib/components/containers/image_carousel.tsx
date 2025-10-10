"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MediaCarouselProps = {
  images: string[];
};

export default function MediaCarousel({ images }: MediaCarouselProps) {
  const slides = images;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dominantColor, setDominantColor] = useState("rgb(50,50,50)");
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeImageRef = useRef<HTMLImageElement | null>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);

  // ---------- preload images ----------
  useEffect(() => {
    slides.forEach((src, i) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () =>
        setLoadedImages((p) => ({
          ...p,
          [i]: true,
        }));
      img.onerror = () =>
        setLoadedImages((p) => ({
          ...p,
          [i]: false,
        }));
      img.src = src;
    });
  }, [slides]);

  // ---------- dominant color extraction ----------
  const extractDominantColor = (src: string) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      try {
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let r = 0,
          g = 0,
          b = 0,
          count = 0;
        const step = 10;
        for (let i = 0; i < data.length; i += 4 * step) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
        if (count > 0) {
          setDominantColor(
            `rgb(${Math.floor(r / count)}, ${Math.floor(g / count)}, ${Math.floor(b / count)})`
          );
        }
      } catch (e) {
        // cross-origin or other errors
        console.error("Color extraction failed:", e);
      }
    };
  };

  useEffect(() => {
    if (loadedImages[currentIndex]) {
      extractDominantColor(slides[currentIndex]);
    }
  }, [currentIndex, loadedImages, slides]);

  // ---------- slide navigation ----------
  const handleNext = () => {
    if (isTransitioning || slides.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((p) => (p + 1) % slides.length);
  };

  const handlePrev = () => {
    if (isTransitioning || slides.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((p) => (p - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isTransitioning) return;
    const t = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(t);
  }, [isTransitioning]);

  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex;
    let pos = 0;
    if (diff === 0) pos = 0;
    else if (diff === 1 || diff === -(slides.length - 1)) pos = 1;
    else if (diff === -1 || diff === slides.length - 1) pos = -1;
    else pos = diff > 0 ? 2 : -2;

    return {
      transform: `translateX(${pos * 100}%)`,
      transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
      zIndex: diff === 0 ? 2 : 1,
    } as React.CSSProperties;
  };

  // ---------- sync container height to the active image (ResizeObserver) ----------
  useEffect(() => {
    const container = containerRef.current;
    const img = activeImageRef.current;

    if (!container) return;

    // fallback while no active image element is available
    if (!img) {
      container.style.height = imageHeight ? `${imageHeight}px` : "300px";
      return;
    }

    // function to set container height based on the image's rendered height
    const setHeightFromImg = () => {
      const newH = img.clientHeight;
      setImageHeight(newH);
      container.style.height = `${newH}px`;
    };

    // initial set
    setHeightFromImg();

    // observe changes to the image's size
    const ro = new ResizeObserver(() => {
      setHeightFromImg();
    });
    ro.observe(img);

    // cleanup
    return () => {
      ro.disconnect();
    };
    // we want to re-run when active image element changes (currentIndex) or when load state changes
  }, [currentIndex, loadedImages[currentIndex]]);

  // ---------- render ----------
  return (
    <div className="flex justify-center items-center w-full p-4">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-900 transition-[height] duration-300"
        style={{
          width: "60vw",
          maxHeight: "90vh",
          minHeight: imageHeight ? undefined : "300px", // skeleton until first measurement
        }}
      >
        {/* background gradient based on dominant color */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${dominantColor} 0%, rgba(0,0,0,0.8) 50%, ${dominantColor} 100%)`,
            transition: "background 0.5s ease-in-out",
          }}
        />

        {/* Slides */}
        {slides.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={getSlideStyle(i)}
          >
            {loadedImages[i] ? (
              <img
                // make sure the active slide assigns the ref for ResizeObserver
                ref={(el) => {
                  if (i === currentIndex) activeImageRef.current = el ?? null;
                  // clear stale ref when it's not active
                  else if (activeImageRef.current && activeImageRef.current === el) {
                    activeImageRef.current = null;
                  }
                }}
                src={src}
                alt={`Slide ${i + 1}`}
                className="object-contain max-w-[60vw] max-h-[90vh] block"
                onLoad={() => {
                  // ensure loaded flag (preload may already do it)
                  setLoadedImages((p) => ({ ...p, [i]: true }));
                  // If the loaded image is the current, immediately extract color (fast feedback)
                  if (i === currentIndex) extractDominantColor(src);
                }}
              />
            ) : (
              // skeleton placeholder matches expected area
              <div className="w-[60vw] h-[40vh] bg-gray-700 animate-pulse rounded" />
            )}
          </div>
        ))}

        {/* Prev/Next buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* hidden canvas used for color extraction */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}