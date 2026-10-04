"use client";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks/useScrollFrame";

/**
 * Interactive dot field behind the hero. Dots breathe on a slow wave, part
 * around the cursor on springs and light up in the accent colour, and any
 * click/tap sends a shockwave rippling across the grid.
 * Colours come from CSS tokens, so it follows the active theme.
 */
export default function HeroField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = prefersReducedMotion();
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const RADIUS = 150;
    const SPACING = coarse ? 30 : 24;

    let dots = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let colors = { dot: "17 17 32", alpha: 0.2, accent: "79 70 229" };
    const pointer = { x: -9999, y: -9999, active: false };
    const ripples = [];
    let raf = 0;
    let running = false;
    let onScreen = false;

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colors = {
        dot: cs.getPropertyValue("--field-dot").trim() || colors.dot,
        alpha: parseFloat(cs.getPropertyValue("--field-alpha")) || colors.alpha,
        accent: cs.getPropertyValue("--accent-rgb").trim() || colors.accent,
      };
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const offX = (width - (cols - 1) * SPACING) / 2;
      const offY = (height - (rows - 1) * SPACING) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ hx: offX + c * SPACING, hy: offY + r * SPACING, ox: 0, oy: 0, vx: 0, vy: 0 });
        }
      }
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const base = `rgb(${colors.dot})`;
      const accent = `rgb(${colors.accent})`;
      const now = t;

      // Retire finished shockwaves.
      for (let i = ripples.length - 1; i >= 0; i--) {
        if (now - ripples[i].t0 > 2200) ripples.splice(i, 1);
      }

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        if (!reduced) {
          // Pointer repulsion.
          if (pointer.active) {
            const dx = d.hx + d.ox - pointer.x;
            const dy = d.hy + d.oy - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist < RADIUS && dist > 0.01) {
              const f = (1 - dist / RADIUS) ** 2 * 3.2;
              d.vx += (dx / dist) * f;
              d.vy += (dy / dist) * f;
            }
          }

          // Shockwaves push a moving ring of dots outward.
          for (let k = 0; k < ripples.length; k++) {
            const rp = ripples[k];
            const age = now - rp.t0;
            const ringR = age * 0.75;
            const dx = d.hx - rp.x;
            const dy = d.hy - rp.y;
            const dist = Math.hypot(dx, dy);
            const band = Math.abs(dist - ringR);
            if (band < 50 && dist > 0.01) {
              const f = (1 - band / 50) * (1 - age / 2200) * 2.4;
              d.vx += (dx / dist) * f;
              d.vy += (dy / dist) * f;
            }
          }

          // Spring home.
          d.vx += -d.ox * 0.055;
          d.vy += -d.oy * 0.055;
          d.vx *= 0.84;
          d.vy *= 0.84;
          d.ox += d.vx;
          d.oy += d.vy;
        }

        const x = d.hx + d.ox;
        const y = d.hy + d.oy;
        const wave = reduced
          ? 0.5
          : (Math.sin(d.hx * 0.011 + now * 0.0011) * Math.cos(d.hy * 0.013 - now * 0.0008) + 1) / 2;
        const energy = Math.min(Math.hypot(d.ox, d.oy) / 18, 1);

        if (energy > 0.08) {
          ctx.fillStyle = accent;
          ctx.globalAlpha = 0.35 + energy * 0.65;
          ctx.beginPath();
          ctx.arc(x, y, 1.2 + energy * 1.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = base;
          ctx.globalAlpha = colors.alpha * (0.45 + wave * 0.9);
          const s = 1.4 + wave * 0.8;
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.y > 0 && pointer.y < rect.height;
    };
    const onLeave = () => (pointer.active = false);
    const onUp = (e) => e.pointerType !== "mouse" && onLeave();
    const onDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const y = e.clientY - rect.top;
      if (y < 0 || y > rect.height) return;
      ripples.push({ x: e.clientX - rect.left, y, t0: performance.now() });
    };

    readColors();
    build();
    if (reduced) draw(0);

    // Opening shockwave from the centre once the intro curtain lifts.
    const introDelay = document.documentElement.classList.contains("intro-seen") ? 300 : 1400;
    const kick = setTimeout(() => {
      ripples.push({ x: width / 2, y: height * 0.45, t0: performance.now() });
    }, introDelay);

    const ro = new ResizeObserver(() => {
      build();
      if (reduced) draw(0);
    });
    ro.observe(canvas);

    const sync = () => (onScreen && !document.hidden ? start() : stop());
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);

    const onVisibility = sync;
    document.addEventListener("visibilitychange", onVisibility);

    const mo = new MutationObserver(() => {
      readColors();
      if (reduced) draw(0);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      clearTimeout(kick);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-field" aria-hidden="true" />;
}
