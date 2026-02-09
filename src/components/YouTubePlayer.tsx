"use client";

import React, { useEffect, useRef } from "react";

interface YouTubePlayerProps {
  videoId: string;
  title: string;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        el: HTMLElement,
        config: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: Record<string, (event: { data: number }) => void>;
        }
      ) => void;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
        BUFFERING: number;
      };
    };
  }
}

const YouTubePlayer = ({ videoId, title }: YouTubePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAPI = () => {
      if (document.querySelector('script[src*="youtube.com/iframe_api"]'))
        return;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    };

    const initPlayer = () => {
      if (!containerRef.current || !window.YT) return;

      new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onStateChange: (event: { data: number }) => {
            if (event.data === window.YT!.PlayerState.PLAYING) {
              window.dispatchEvent(new CustomEvent("yt-playing"));
            } else {
              window.dispatchEvent(new CustomEvent("yt-paused"));
            }
          },
        },
      });
    };

    loadAPI();

    if (window.YT) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  }, [videoId]);

  return (
    <div className="aspect-video w-full bg-neutral-900">
      <div ref={containerRef} title={title} className="w-full h-full" />
    </div>
  );
};

export default YouTubePlayer;
