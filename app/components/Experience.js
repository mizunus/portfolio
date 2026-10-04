"use client";
import { useRef } from "react";
import { useI18n } from "../i18n/LanguageProvider";
import { clamp01, useScrollFrame } from "../hooks/useScrollFrame";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import ScrambleText from "./motion/ScrambleText";

export default function Experience() {
  const { t } = useI18n();
  const experiences = t("experience.entries");
  const timelineRef = useRef(null);

  // The rail fills as you read, and each role lights up as it crosses
  // the reading line (60% down the viewport).
  useScrollFrame(() => {
    const el = timelineRef.current;
    if (!el) return;
    const line = window.innerHeight * 0.6;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--tp", clamp01((line - r.top) / r.height).toFixed(4));
    el.querySelectorAll("article").forEach((a) => {
      // A data attribute, not a class: React owns className and would wipe it.
      a.dataset.active = a.getBoundingClientRect().top < line ? "true" : "false";
    });
  });

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="relative py-28 px-6 scroll-mt-24 border-y border-line bg-ink/[0.015]"
    >
      <div className="max-w-6xl mx-auto">
        <ScrambleText
          as="p"
          text={t("experience.label")}
          className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase"
        />
        <SplitText
          as="h2"
          text={t("experience.title")}
          className="text-3xl sm:text-5xl font-bold text-fg mb-14 tracking-tight"
        />

        <div ref={timelineRef} className="relative space-y-14">
          <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-0.5 bg-line">
            <div className="timeline__fill absolute inset-0" />
          </div>

          {experiences.map((exp, idx) => (
            <Reveal
              as="article"
              key={idx}
              variant="left"
              delay={idx * 90}
              className="group relative pl-10"
            >
              <div className="timeline__dot absolute -left-[7px] top-1.5 w-4 h-4 rounded-full border-2 border-line-strong bg-canvas" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-fg tracking-tight">
                  {exp.role}{" "}
                  <span className="text-subtle font-normal">@ Saara Inc.</span>
                </h3>
                <time className="text-sm font-mono text-subtle shrink-0">
                  {exp.period}
                </time>
              </div>

              <p className="text-sm text-subtle mb-4">{exp.location}</p>

              <ul className="space-y-3">
                {exp.bullets.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted leading-relaxed flex gap-3 transition-transform duration-300 hover:translate-x-1"
                  >
                    <span className="text-accent-400/60 mt-1 shrink-0" aria-hidden="true">
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
