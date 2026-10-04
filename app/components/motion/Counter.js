"use client";
import { useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { prefersReducedMotion } from "../../hooks/useScrollFrame";

/**
 * Counts a leading number up from zero ("10+" → 0+, 1+, … 10+).
 * Values without a leading number render unchanged.
 */
export default function Counter({ value, duration = 1600, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const numRef = useRef(null);
  const match = /^(\d+)(.*)$/.exec(value);

  useEffect(() => {
    const node = numRef.current;
    if (!node || !match || !inView || prefersReducedMotion()) return;

    const target = Number(match[1]);
    let raf = 0;
    let start = 0;
    const tick = (now) => {
      start ||= now;
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      node.textContent = String(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      node.textContent = match[1];
    };
  }, [inView, value, duration]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span key={value} ref={numRef}>
        {match[1]}
      </span>
      {match[2]}
    </span>
  );
}
