"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 h-px w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-accent-500 via-violet-400 to-fuchsia-400 transition-[width] duration-75 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
