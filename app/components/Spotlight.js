"use client";
import { useCallback } from "react";

/**
 * Wraps a card so a soft light follows the cursor across it.
 * Falls back to a plain element when the pointer can't hover (touch).
 */
export default function Spotlight({ as: Tag = "div", className = "", children, ...props }) {
  const onPointerMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <Tag className={`spotlight ${className}`} onPointerMove={onPointerMove} {...props}>
      {children}
    </Tag>
  );
}
