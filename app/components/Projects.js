"use client";
import { useInView } from "../hooks/useInView";
import Spotlight from "./Spotlight";
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
    <svg
      className="w-5 h-5 text-slate-600 group-hover:text-accent-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0 mt-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();
  const { t } = useI18n();
  const live = projects.filter((p) => !p.sunsetted);
  const past = projects.filter((p) => p.sunsetted);

  return (
    <section id="projects" className="relative py-24 px-6 scroll-mt-24" ref={ref}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase">
          {t("projects.label")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          {t("projects.title")}
        </h2>
        <p className="text-slate-500 mb-12 max-w-xl">{t("projects.blurb")}</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {live.map((project, idx) => (
            <Spotlight
              as="a"
              key={project.key}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${idx * 70}ms` }}
              className={`group p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "bg-accent-500/[0.04] border-accent-500/20 hover:border-accent-400/40 sm:col-span-1"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-accent-500/30 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent-300 transition-colors duration-200">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-300 px-2 py-0.5 rounded-full border border-accent-400/30 bg-accent-400/10">
                      {t("projects.featured")}
                    </span>
                  )}
                </div>
                <ArrowIcon />
              </div>

              {project.role && (
                <p className="text-xs font-mono text-accent-400/70 mb-3">
                  {t(`projects.roles.${project.role}`)}
                </p>
              )}

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {t(`projects.items.${project.key}`)}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-slate-500 px-2.5 py-1 bg-white/[0.03] rounded border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Spotlight>
          ))}
        </div>

        {past.length > 0 && (
          <>
            <div className="flex items-center gap-4 mt-16 mb-8">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">
                {t("projects.previously")}
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {past.map((project) => (
                <div
                  key={project.key}
                  className="relative p-6 rounded-xl bg-white/[0.01] border border-white/[0.04] opacity-60 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-400">
                        {project.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 px-2 py-0.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
                        {t("projects.sunsetted")}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {t(`projects.items.${project.key}`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-slate-600 px-2.5 py-1 bg-white/[0.02] rounded border border-white/[0.03]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
