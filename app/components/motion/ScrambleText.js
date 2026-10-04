"use client";
import { useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { prefersReducedMotion } from "../../hooks/useScrollFrame";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+/<>_";

/** Decodes from random glyphs into the real text the first time it is seen. */
export default function ScrambleText({ text, as: Tag = "span", className = "", duration = 900 }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const textRef = useRef(null);

  useEffect(() => {
    const node = textRef.current;
    if (!node || !inView || prefersReducedMotion()) return;

    const chars = Array.from(text);
    let raf = 0;
    let start = 0;

    const tick = (now) => {
      start ||= now;
      const p = Math.min((now - start) / duration, 1);
      const settled = Math.floor(p * chars.length);
      node.textContent = chars
        .map((ch, i) =>
          i < settled || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]
        )
        .join("");
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      node.textContent = text;
    };
  }, [inView, text, duration]);

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {/* Keyed so React hands us a fresh node whenever the locale changes. */}
      <span key={text} ref={textRef} aria-hidden="true">
        {text}
      </span>
    </Tag>
  );
}
