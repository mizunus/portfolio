"use client";
import { useRef } from "react";
import { clamp01, useScrollFrame } from "../../hooks/useScrollFrame";

/**
 * Words light up one by one as the paragraph travels through the viewport.
 * `segments` lets parts of the sentence carry their own styling.
 */
export default function ScrollWords({ segments, className = "" }) {
  const ref = useRef(null);
  const lit = useRef(-1);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const vh = window.innerHeight;
    const r = el.getBoundingClientRect();
    const p = clamp01((vh * 0.85 - r.top) / (r.height + vh * 0.4));
    const words = el.querySelectorAll(".scroll-words__w");
    const count = Math.round(p * words.length);
    if (count === lit.current) return;
    lit.current = count;
    words.forEach((w, i) => w.classList.toggle("is-lit", i < count));
  });

  return (
    <p ref={ref} className={className}>
      {segments.map((seg, s) => (
        <span key={s} className={seg.className}>
          {seg.text.split(/(\s+)/).map((w, i) =>
            /^\s*$/.test(w) ? (
              w
            ) : (
              <span key={i} className="scroll-words__w">
                {w}
              </span>
            )
          )}
          {s < segments.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}
