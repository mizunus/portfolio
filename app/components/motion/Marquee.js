"use client";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../../hooks/useScrollFrame";

/**
 * Infinite ticker whose speed, direction and skew follow scroll velocity.
 * Scroll down and it races forward; scroll up and it reverses.
 */
export default function Marquee({ items, reverse = false, outline = false, speed = 0.6 }) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track || prefersReducedMotion()) return;

    let x = 0;
    let dir = reverse ? 1 : -1;
    let lastY = window.scrollY;
    let velocity = 0;
    let half = track.scrollWidth / 2;
    let raf = 0;
    let running = false;

    const loop = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      if (delta !== 0) dir = (delta > 0 ? -1 : 1) * (reverse ? -1 : 1);
      velocity += (Math.min(Math.abs(delta), 80) - velocity) * 0.1;

      x += dir * (speed + velocity * 0.35);
      if (x <= -half) x += half;
      if (x > 0) x -= half;

      const skew = Math.max(-12, Math.min(12, velocity * 0.4 * -dir));
      track.style.transform = `translate3d(${x}px, 0, 0) skewX(${skew}deg)`;
      raf = requestAnimationFrame(loop);
    };

    // Only animate while on screen.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        lastY = window.scrollY;
        raf = requestAnimationFrame(loop);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(wrap);

    const onResize = () => (half = track.scrollWidth / 2);
    window.addEventListener("resize", onResize);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [reverse, speed, items]);

  // Two identical halves so the loop seam is invisible.
  const half = (copy) =>
    items.map((item, i) => (
      <span
        key={`${copy}-${i}`}
        className={`marquee__item ${outline ? "marquee__item--outline" : "text-fg"}`}
      >
        {item}
        <span className="marquee__star">✦</span>
      </span>
    ));

  return (
    <div ref={wrapRef} className="marquee" aria-hidden="true">
      <div ref={trackRef} className="marquee__track">
        {half("a")}
        {half("b")}
      </div>
    </div>
  );
}
