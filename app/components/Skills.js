"use client";
import { useI18n } from "../i18n/LanguageProvider";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import ScrambleText from "./motion/ScrambleText";
import Spotlight from "./Spotlight";

const skillGroups = [
  ["Python", "JavaScript", "Django", "Next.js", "Node.js", "React"],
  ["AWS", "Azure", "Google Cloud", "Docker", "Nginx", "Gunicorn"],
  ["PostgreSQL", "MongoDB", "Redis", "Celery"],
  ["REST APIs", "GraphQL", "Prompt Engineering", "AI Agents", "LLMs"],
  ["Git", "GitHub", "CI/CD", "Linux", "Agile"],
];

export default function Skills() {
  const { t } = useI18n();
  const categories = t("skills.categories");

  return (
    <section id="skills" className="py-28 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrambleText
          as="p"
          text={t("skills.label")}
          className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase"
        />
        <SplitText
          as="h2"
          text={t("skills.title")}
          className="text-3xl sm:text-5xl font-bold text-fg mb-14 tracking-tight"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((skills, idx) => (
            <Reveal key={idx} variant="clip" delay={idx * 90} className="rounded-2xl">
              <Spotlight className="h-full p-6 rounded-2xl bg-card border border-line hover:border-accent-500/30 backdrop-blur-sm">
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="text-sm font-mono text-accent-400 tracking-wider uppercase">
                    {categories[idx]}
                  </h3>
                  <span className="text-xs font-mono text-faint">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="reveal-child inline-flex"
                      style={{ "--d": `${idx * 90 + 300 + i * 45}ms` }}
                    >
                      <span className="px-3 py-1.5 text-sm text-fg-soft bg-ink/[0.04] rounded-full border border-line hover:border-accent-500/40 hover:text-accent-400 hover:-translate-y-0.5 transition-all duration-200">
                        {skill}
                      </span>
                    </span>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
