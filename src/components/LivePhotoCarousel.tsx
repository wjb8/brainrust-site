"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LivePhoto {
  src: string;
  alt: string;
}

interface LivePhotoCarouselProps {
  photos: LivePhoto[];
}

const AUTO_ADVANCE_MS = 6500;

const LivePhotoCarousel = ({ photos }: LivePhotoCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % photos.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, [photos.length]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.12),transparent_55%)] opacity-60" />
      <div className="relative aspect-[4/3] overflow-hidden border border-neutral-900 bg-neutral-950">
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.34)_48%,rgba(8,8,8,0.62))]" />
          </div>
        ))}
      </div>

      {photos.length > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {photos.map((photo, index) => (
            <button
              key={`${photo.src}-indicator`}
              type="button"
              aria-label={`Show live photo ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-px w-8 transition-colors duration-500 ${
                index === activeIndex ? "bg-neutral-300" : "bg-neutral-800"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LivePhotoCarousel;
