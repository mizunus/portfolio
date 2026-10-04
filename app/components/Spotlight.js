"use client";
import { useCallback } from "react";

const canTilt = () =>
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Wraps a card so a soft light follows the cursor across it and the card
 * tilts toward the pointer in 3D. Touch devices get the plain card.
 */
export default function Spotlight({
  as: Tag = "div",
  className = "",
  tilt = 6,
  children,
  ...props
}) {
  const onPointerMove = useCallback(
    (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      if (!tilt || !canTilt()) return;
      el.classList.add("is-tilting");
      el.style.setProperty("--ry", `${((x / rect.width) - 0.5) * tilt * 2}deg`);
      el.style.setProperty("--rx", `${(0.5 - y / rect.height) * tilt * 2}deg`);
    },
    [tilt]
  );

  const onPointerLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.classList.remove("is-tilting");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return (
    <Tag
      className={`spotlight ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}
