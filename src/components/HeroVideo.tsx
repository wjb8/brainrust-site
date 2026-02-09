"use client";

import React, { useEffect, useRef } from "react";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handlePlaying = () => videoRef.current?.pause();
    const handlePaused = () => videoRef.current?.play();

    window.addEventListener("yt-playing", handlePlaying);
    window.addEventListener("yt-paused", handlePaused);

    return () => {
      window.removeEventListener("yt-playing", handlePlaying);
      window.removeEventListener("yt-paused", handlePaused);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
