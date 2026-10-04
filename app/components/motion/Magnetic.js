"use client";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../../hooks/useScrollFrame";

/** Pulls its child toward the cursor while hovered, then springs back. */
export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transition = "transform 0.15s linear";
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const onLeave = () => {
      el.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.transform = "translate3d(0, 0, 0)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={`inline-flex will-change-transform ${className}`}>
      {children}
    </span>
  );
}
