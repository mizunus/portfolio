"use client";
import { useInView } from "../hooks/useInView";
import { useI18n } from "../i18n/LanguageProvider";

export default function Experience() {
  const [ref, inView] = useInView();
  const { t } = useI18n();
  const experiences = t("experience.entries");

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="relative py-28 px-6 scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]"
      ref={ref}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase">
          {t("experience.label")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          {t("experience.title")}
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              style={{ transitionDelay: `${idx * 90}ms` }}
              className="group relative pl-8 border-l-2 border-white/[0.06] hover:border-accent-500/50 transition-colors duration-300"
            >
              <div
                className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 bg-[#0a0a0f] transition-colors duration-300 ${
                  idx === 0
                    ? "border-accent-400 shadow-[0_0_16px_rgb(var(--accent-rgb)/0.6)]"
                    : "border-white/[0.08] group-hover:border-accent-400"
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}{" "}
                  <span className="text-slate-500 font-normal">@ Saara Inc.</span>
                </h3>
                <time className="text-sm font-mono text-slate-500 shrink-0">
                  {exp.period}
                </time>
              </div>

              <p className="text-sm text-slate-500 mb-4">{exp.location}</p>

              <ul className="space-y-3">
                {exp.bullets.map((item, i) => (
                  <li
                    key={i}
                    className="text-slate-400 leading-relaxed flex gap-3"
                  >
                    <span className="text-accent-400/50 mt-1 shrink-0" aria-hidden="true">
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
