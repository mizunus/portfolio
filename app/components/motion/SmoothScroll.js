"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "../../hooks/useScrollFrame";

/** Inertial page scrolling. In-page anchor links glide to their target. */
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.09,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
