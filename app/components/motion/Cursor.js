"use client";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../../hooks/useScrollFrame";

/**
 * Dot + trailing ring cursor. The ring swells over interactive elements and
 * shows a label over anything tagged with data-cursor="…".
 * Only mounts its behaviour for precise pointers with motion allowed.
 */
export default function Cursor() {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const html = document.documentElement;

    let mx = -100;
    let my = -100;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let visible = false;

    html.classList.add("cursor-on");
    root.classList.add("is-hidden");

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        rx = mx;
        ry = my;
        root.classList.remove("is-hidden");
      }
    };

    const onOver = (e) => {
      const labelled = e.target.closest?.("[data-cursor]");
      const interactive = e.target.closest?.("a, button, [role='button'], label, select");
      if (labelled) {
        label.textContent = labelled.getAttribute("data-cursor");
        root.classList.add("is-label");
        root.classList.remove("is-hover");
      } else {
        root.classList.remove("is-label");
        root.classList.toggle("is-hover", !!interactive);
      }
      const typing = e.target.closest?.("input, textarea");
      root.classList.toggle("is-hidden", !!typing);
    };

    const onLeave = () => {
      visible = false;
      root.classList.add("is-hidden");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      html.classList.remove("cursor-on");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="cursor is-hidden" aria-hidden="true">
      <div ref={ringRef} className="cursor__ring">
        <span ref={labelRef} className="cursor__label" />
      </div>
      <div ref={dotRef} className="cursor__dot" />
    </div>
  );
}
