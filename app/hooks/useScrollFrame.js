"use client";
import { useEffect, useRef } from "react";

// One shared, rAF-throttled scroll/resize listener for every scroll-linked
// effect on the page, so N effects never means N listeners firing per event.
const subscribers = new Set();
let queued = false;

function flush() {
  queued = false;
  subscribers.forEach((fn) => fn());
}

function schedule() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(flush);
}

export const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useScrollFrame(callback) {
  const saved = useRef(callback);
  saved.current = callback;

  useEffect(() => {
    const fn = () => saved.current();
    if (subscribers.size === 0) {
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
    }
    subscribers.add(fn);
    fn();

    return () => {
      subscribers.delete(fn);
      if (subscribers.size === 0) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      }
    };
  }, []);
}
