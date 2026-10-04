"use client";
import { useI18n } from "../i18n/LanguageProvider";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import ScrambleText from "./motion/ScrambleText";
import ScrollWords from "./motion/ScrollWords";
import Counter from "./motion/Counter";
import Spotlight from "./Spotlight";

export default function About() {
  const { t } = useI18n();
  const highlights = t("about.highlights");

  return (
    <section
      id="about"
      aria-label="About Siddharth Dangarh"
      className="py-28 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <ScrambleText
          as="p"
          text={t("about.label")}
          className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase"
        />
        <SplitText
          as="h2"
          text={t("about.title")}
          className="text-3xl sm:text-5xl font-bold text-fg mb-12 tracking-tight"
        />

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <ScrollWords
              className="text-2xl sm:text-3xl leading-snug text-fg font-medium tracking-tight"
              segments={[
                { text: t("about.p1Before") },
                { text: t("about.p1Quote"), className: "text-accent-400" },
              ]}
            />
            <Reveal as="p" variant="blur">
              {t("about.p2")}
            </Reveal>
            <Reveal as="p" variant="blur" delay={100}>
              {t("about.p3Before")}{" "}
              <a
                href="https://discuvr.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 underline underline-offset-4 decoration-accent-400/30 transition-colors"
              >
                Discuvr
              </a>
              {t("about.p3After")}
            </Reveal>
          </div>

          <div className="flex md:flex-col gap-4" role="list" aria-label="Key highlights">
            {highlights.map((item, i) => (
              <Reveal key={item.label} variant="scale" delay={i * 120} role="listitem">
                <Spotlight className="px-6 py-5 rounded-2xl bg-card border border-line text-center min-w-[140px] backdrop-blur-sm">
                  <div className="text-3xl font-bold text-fg mb-1 tracking-tight">
                    <Counter value={item.value} />
                  </div>
                  <div className="text-xs text-subtle uppercase tracking-wider">
                    {item.label}
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
