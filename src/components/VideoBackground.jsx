import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { media } from "../data/media.js";

const SWITCH_INTERVAL = 10000;
const ENABLE_DELAY = 900;
const SCROLL_STOP_DELAY = 140;

export default function VideoBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const videos = useMemo(() => media.backgroundVideos || [], []);
  const [index, setIndex] = useState(0);
  const [canPlay, setCanPlay] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const videoRef = useRef(null);
  const stopTimeoutRef = useRef(null);

  useEffect(() => {
    if (videos.length <= 1 || prefersReducedMotion) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, SWITCH_INTERVAL);
    return () => clearInterval(id);
  }, [videos.length, prefersReducedMotion]);

  useEffect(() => {
    const timer = setTimeout(() => setCanPlay(true), ENABLE_DELAY);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const setVideoNode = useCallback((node) => {
    videoRef.current = node;
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black" />
    );
  }

  const active = videos[index] || {};
  const shouldRenderVideo = canPlay && isDesktop && active.src;

  useEffect(() => {
    if (!shouldRenderVideo || !videoRef.current) return undefined;
    const handleScroll = () => {
      const video = videoRef.current;
      if (!video) return;
      video.play().catch(() => {});
      if (stopTimeoutRef.current) {
        clearTimeout(stopTimeoutRef.current);
      }
      stopTimeoutRef.current = setTimeout(() => {
        video.pause();
      }, SCROLL_STOP_DELAY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (stopTimeoutRef.current) {
        clearTimeout(stopTimeoutRef.current);
        stopTimeoutRef.current = null;
      }
    };
  }, [shouldRenderVideo, active.src]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        {shouldRenderVideo ? (
          <motion.video
            key={active.src || "background-video"}
            style={{ y, willChange: "transform" }}
            className="h-full w-full object-cover opacity-25"
            src={active.src}
            poster={active.poster}
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            ref={setVideoNode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        ) : (
          <motion.div
            key={active.poster || "background-poster"}
            className="h-full w-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: active.poster
                ? `url(${active.poster})`
                : undefined,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-black" />
      {active.label ? (
        <div className="pointer-events-none absolute bottom-6 right-6 hidden rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 md:block">
          {active.label}
        </div>
      ) : null}
    </div>
  );
}
