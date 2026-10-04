"use client";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";
import { clamp01, useScrollFrame } from "../hooks/useScrollFrame";
import HeroField from "./HeroField";
import SplitText from "./motion/SplitText";
import Magnetic from "./motion/Magnetic";

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
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const typed = useTypewriter(t("hero.roles"));

  // Content sinks, shrinks and blurs as the hero scrolls away.
  useScrollFrame(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;
    const p = clamp01(window.scrollY / (section.offsetHeight * 0.85));
    content.style.setProperty("--hp", p.toFixed(4));
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <HeroField />

      <div ref={contentRef} className="hero-parallax relative max-w-4xl mx-auto text-center">
        <div className="hero-enter" style={{ "--d": "0ms" }}>
          <Magnetic strength={0.2}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-600/25 bg-emerald-500/[0.08] dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] mb-8 hover:border-emerald-500/50 transition-colors backdrop-blur-sm"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </span>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-300/90 tracking-wide">
                {t("hero.badge")}
              </span>
            </a>
          </Magnetic>
        </div>

        <h1 className="hero-title text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-fg leading-[1.02] mb-6 tracking-tight">
          <SplitText text={t("hero.headline")} mode="chars" delay={120} stagger={40} />{" "}
          <span className="hero-enter inline-block" style={{ "--d": "420ms" }}>
            <span className="text-gradient">{typed || "\u00a0"}</span>
            <span className="caret text-accent-400" aria-hidden="true" />
          </span>
        </h1>

        <p
          className="hero-enter text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{ "--d": "560ms" }}
        >
          {t("hero.introBefore")}{" "}
          <span className="text-fg font-medium">{t("hero.name")}</span>
          {t("hero.introAfter")}
        </p>

        <p
          className="hero-enter text-sm font-mono text-faint mb-10"
          style={{ "--d": "660ms" }}
        >
          {t("hero.stack")}
        </p>

        <div
          className="hero-enter flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ "--d": "760ms" }}
        >
          <Magnetic>
            <a
              href="#contact"
              className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-fg text-canvas font-medium transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgb(var(--accent-rgb)/0.6)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-accent-500 translate-y-full rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:rounded-none"
              />
              <span className="relative group-hover:text-white transition-colors duration-300">
                {t("hero.ctaPrimary")}
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full border border-line-strong text-fg-soft hover:text-fg hover:border-fg/40 bg-canvas/40 backdrop-blur-sm font-medium transition-all duration-300"
            >
              {t("hero.ctaSecondary")}
            </a>
          </Magnetic>
        </div>
      </div>

      <div
        className="hero-enter absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        style={{ "--d": "1000ms" }}
        aria-hidden="true"
      >
        <div className="scroll-cue" />
      </div>
    </section>
  );
}
