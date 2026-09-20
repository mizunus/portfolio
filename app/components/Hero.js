"use client";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

function useTypewriter(words, { typeMs = 65, eraseMs = 30, holdMs = 1800 } = {}) {
  // Seeded with the first phrase so the H1 has real text in the static HTML.
  const [text, setText] = useState(words[0]);
  const [idx, setIdx] = useState(0);
  const [erasing, setErasing] = useState(false);

  // Start the cycle over when the language changes.
  useEffect(() => {
    setText(words[0]);
    setIdx(0);
    setErasing(false);
  }, [words]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(words[0]);
      return;
    }

    const word = words[idx % words.length];

    if (!erasing && text === word) {
      const t = setTimeout(() => setErasing(true), holdMs);
      return () => clearTimeout(t);
    }

    if (erasing && text === "") {
      setErasing(false);
      setIdx((i) => i + 1);
      return;
    }

    const t = setTimeout(
      () =>
        setText((cur) =>
          erasing ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1)
        ),
      erasing ? eraseMs : typeMs
    );
    return () => clearTimeout(t);
  }, [text, erasing, idx, words, typeMs, eraseMs, holdMs]);

  return text;
}

export default function Hero() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const glowRef = useRef(null);
  const typed = useTypewriter(t("hero.roles"));

  useEffect(() => setMounted(true), []);

  // Pointer-tracked glow — cheap parallax that makes the hero feel alive.
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const step = (n) =>
    `transition-all duration-700 ease-out ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] max-w-[90vw] bg-accent-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div
          className={step(0)}
          style={{ transitionDelay: "60ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] mb-8 hover:border-emerald-400/40 transition-colors"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-mono text-emerald-300/90 tracking-wide">
              Open to freelance &amp; consulting
            </span>
          </a>
        </div>

        <h1
          className={`text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.02] mb-6 tracking-tight ${step(1)}`}
          style={{ transitionDelay: "140ms" }}
        >
          I build{" "}
          <span className="text-gradient">{typed || " "}</span>
          <span className="caret text-accent-400" aria-hidden="true" />
        </h1>

        <p
          className={`text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed ${step(2)}`}
          style={{ transitionDelay: "220ms" }}
        >
          {t("hero.introBefore")}{" "}
          <span className="text-white font-medium">{t("hero.name")}</span>
          {t("hero.introAfter")}
        </p>

        <p
          className={`text-sm font-mono text-slate-600 mb-10 ${step(3)}`}
          style={{ transitionDelay: "280ms" }}
        >
          {t("hero.stack")}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${step(4)}`}
          style={{ transitionDelay: "360ms" }}
        >
          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-white font-medium transition-all duration-200 hover:shadow-[0_0_40px_rgb(var(--accent-rgb)/0.35)]"
          >
            {t("hero.ctaPrimary")}
            <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg border border-white/[0.1] text-slate-300 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.03] font-medium transition-all duration-200"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-5 h-5 text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
