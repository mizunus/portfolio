"use client";
import { useInView } from "../hooks/useInView";
import Spotlight from "./Spotlight";

const projects = [
  {
    name: "FlyOS",
    description:
      "Agentic AI platform where we built an AI chat experience with tools and artifacts, along with an AI widget builder and an AI workflow builder for rapid business automation.",
    link: "https://work.flyos.ai/",
    tags: ["Agentic AI", "Tools", "Artifacts", "Workflow Builder"],
    role: "Lead — architecture & agent design",
    featured: true,
  },
  {
    name: "Saara Commerce OS",
    description:
      "A unified dashboard that brings every Saara product - EcoReturns, EcoShip, EcoTrack and FlyOS - under one login and one interface, so merchants run their whole post-purchase stack from a single place.",
    link: "https://apps.saara.io",
    tags: ["Platform", "Dashboard", "Multi-product"],
    role: "Lead - designed and built the unified platform",
    featured: true,
  },
  {
    name: "Discuvr",
    description:
      "My own lab of live AI MVPs — an IP-law Q&A bot, a patent reply generator, a multi-provider LLM comparison bench, a proposal writer, a security scanner and more. Every idea ships as something you can actually click.",
    link: "https://discuvr.in",
    tags: ["Side Project", "LLM Tools", "Rapid MVPs"],
    role: "Solo — design, build, deploy",
    featured: true,
  },
  {
    name: "EcoReturns",
    description:
      "Returns management platform that streamlines, automates, and optimizes the returns process for e-commerce brands.",
    link: "https://returns.saara.io/",
    tags: ["SaaS", "E-commerce", "Automation"],
    role: "Core engineer",
  },
  {
    name: "EcoShip",
    description:
      "AI-powered shipping logistics platform that optimizes routes and reduces emissions, helping businesses save money and the planet.",
    link: "https://ecoship.saara.io/",
    tags: ["AI", "Logistics", "GreenTech"],
    role: "Core engineer",
  },
  {
    name: "EcoTrack",
    description:
      "Branded order-tracking for e-commerce stores - merchants customize the tracking page with their own logo, colors and typography, turning a generic shipping update into a branded touchpoint.",
    link: "https://ecotrack.saara.io/",
    tags: ["SaaS", "E-commerce", "Post-purchase"],
    role: "Core engineer",
  },
  {
    name: "CoSell",
    description:
      "Collaborative selling platform that helped businesses partner, share leads, and grow together through shared networks.",
    link: "#",
    tags: ["Collaboration", "Sales", "Growth"],
    sunsetted: true,
  },
  {
    name: "CoLoyalty",
    description:
      "AI-driven loyalty platform that used intelligent segmentation to deliver rewards that boosted engagement and retention.",
    link: "#",
    tags: ["AI", "Loyalty", "Engagement"],
    sunsetted: true,
  },
  {
    name: "EcoRefunds",
    description:
      "A solution that analyzes why refunds are happening and provides actionable suggestions to reduce refund rates.",
    link: "#",
    tags: ["Refund Analytics", "AI Insights", "Optimization"],
    sunsetted: true,
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0 mt-1"
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
  const live = projects.filter((p) => !p.sunsetted);
  const past = projects.filter((p) => p.sunsetted);

  return (
    <section id="projects" className="relative py-24 px-6 scroll-mt-24" ref={ref}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-wider uppercase">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Things I&apos;ve Built
        </h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          Commerce platforms I&apos;ve shipped at Saara, plus a running lab of
          side projects. Most of these are live — click through and try them.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {live.map((project, idx) => (
            <Spotlight
              as="a"
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${idx * 70}ms` }}
              className={`group p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "bg-indigo-500/[0.04] border-indigo-500/20 hover:border-indigo-400/40 sm:col-span-1"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-400/30 bg-indigo-400/10">
                      Featured
                    </span>
                  )}
                </div>
                <ArrowIcon />
              </div>

              {project.role && (
                <p className="text-xs font-mono text-indigo-400/70 mb-3">
                  {project.role}
                </p>
              )}

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
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
                Previously Shipped
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {past.map((project) => (
                <div
                  key={project.name}
                  className="relative p-6 rounded-xl bg-white/[0.01] border border-white/[0.04] opacity-60 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-400">
                        {project.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 px-2 py-0.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
                        Sunsetted
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {project.description}
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
