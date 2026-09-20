"use client";
import { useInView } from "../hooks/useInView";
import { useI18n } from "../i18n/LanguageProvider";

export default function About() {
  const [ref, inView] = useInView();
  const { t } = useI18n();
  const highlights = t("about.highlights");

  return (
    <section
      id="about"
      aria-label="About Siddharth Dangarh"
      className="py-24 px-6 scroll-mt-24"
      ref={ref}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase">
          {t("about.label")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          {t("about.title")}
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
            <p>
              {t("about.p1Before")}{" "}
              <span className="text-white font-medium">{t("about.p1Quote")}</span>
            </p>
            <p>{t("about.p2")}</p>
            <p>
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
            </p>
          </div>

          <div className="flex md:flex-col gap-4" role="list" aria-label="Key highlights">
            {highlights.map((item) => (
              <div
                key={item.label}
                role="listitem"
                className="px-6 py-5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center min-w-[140px]"
              >
                <div className="text-2xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
