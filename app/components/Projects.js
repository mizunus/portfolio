"use client";
import Spotlight from "./Spotlight";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import ScrambleText from "./motion/ScrambleText";
import { useI18n } from "../i18n/LanguageProvider";

const projects = [
  { key: "flyos", name: "FlyOS", link: "https://work.flyos.ai/", role: "flyos", featured: true,
    tags: ["Agentic AI", "Tools", "Artifacts", "Workflow Builder"] },
  { key: "commerceos", name: "Saara Commerce OS", link: "https://apps.saara.io", role: "commerceos", featured: true,
    tags: ["Platform", "Dashboard", "Multi-product"] },
  { key: "discuvr", name: "Discuvr", link: "https://discuvr.in", role: "discuvr", featured: true,
    tags: ["Side Project", "LLM Tools", "Rapid MVPs"] },
  { key: "ecoreturns", name: "EcoReturns", link: "https://returns.saara.io/", role: "core",
    tags: ["SaaS", "E-commerce", "Automation"] },
  { key: "ecoship", name: "EcoShip", link: "https://ecoship.saara.io/", role: "core",
    tags: ["AI", "Logistics", "GreenTech"] },
  { key: "ecotrack", name: "EcoTrack", link: "https://ecotrack.saara.io/", role: "core",
    tags: ["SaaS", "E-commerce", "Post-purchase"] },
  { key: "cosell", name: "CoSell", link: "#", sunsetted: true,
    tags: ["Collaboration", "Sales", "Growth"] },
  { key: "coloyalty", name: "CoLoyalty", link: "#", sunsetted: true,
    tags: ["AI", "Loyalty", "Engagement"] },
  { key: "ecorefunds", name: "EcoRefunds", link: "#", sunsetted: true,
    tags: ["Refund Analytics", "AI Insights", "Optimization"] },
];

function ArrowIcon() {
  return (
    <span className="relative grid place-items-center w-9 h-9 shrink-0 rounded-full border border-line overflow-hidden transition-colors duration-300 group-hover:border-accent-500 group-hover:bg-accent-500">
      {[0, 1].map((n) => (
        <svg
          key={n}
          className={`absolute w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            n === 0
              ? "text-subtle group-hover:translate-x-6 group-hover:-translate-y-6"
              : "text-white -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      ))}
    </span>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const live = projects.filter((p) => !p.sunsetted);
  const past = projects.filter((p) => p.sunsetted);

  return (
    <section id="projects" className="relative py-28 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrambleText
          as="p"
          text={t("projects.label")}
          className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase"
        />
        <SplitText
          as="h2"
          text={t("projects.title")}
          className="text-3xl sm:text-5xl font-bold text-fg mb-4 tracking-tight"
        />
        <Reveal as="p" variant="blur" delay={150} className="text-subtle mb-14 max-w-xl">
          {t("projects.blurb")}
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {live.map((project, idx) => (
            <Reveal key={project.key} variant="clip" delay={(idx % 2) * 120} className="rounded-2xl">
              <Spotlight
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor={t("projects.visit")}
                className={`group flex flex-col h-full p-7 rounded-2xl border backdrop-blur-sm ${
                  project.featured
                    ? "bg-accent-500/[0.05] border-accent-500/20 hover:border-transparent"
                    : "bg-card border-line hover:border-accent-500/30 hover:bg-card-hover"
                }`}
              >
                {project.featured && <span className="orbit-border opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />}

                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-semibold text-fg tracking-tight group-hover:text-accent-400 transition-colors duration-200">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent-400 px-2 py-0.5 rounded-full border border-accent-400/30 bg-accent-400/10">
                        {t("projects.featured")}
                      </span>
                    )}
                  </div>
                  <ArrowIcon />
                </div>

                {project.role && (
                  <p className="text-xs font-mono text-accent-400/80 mb-3">
                    {t(`projects.roles.${project.role}`)}
                  </p>
                )}

                <p className="text-muted text-sm leading-relaxed mb-5">
                  {t(`projects.items.${project.key}`)}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-subtle px-2.5 py-1 bg-ink/[0.03] rounded-full border border-line"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        {past.length > 0 && (
          <>
            <Reveal variant="blur" className="flex items-center gap-4 mt-20 mb-8">
              <div className="h-px flex-1 bg-line" />
              <span className="text-xs font-mono text-faint uppercase tracking-widest">
                {t("projects.previously")}
              </span>
              <div className="h-px flex-1 bg-line" />
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {past.map((project, idx) => (
                <Reveal key={project.key} variant="up" delay={(idx % 2) * 100}>
                  <div className="relative h-full p-6 rounded-2xl bg-ink/[0.015] border border-dashed border-line opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-muted">
                          {project.name}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-faint px-2 py-0.5 rounded-full border border-line bg-ink/[0.02]">
                          {t("projects.sunsetted")}
                        </span>
                      </div>
                    </div>
                    <p className="text-subtle text-sm leading-relaxed mb-4">
                      {t(`projects.items.${project.key}`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-faint px-2.5 py-1 bg-ink/[0.02] rounded-full border border-line"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
