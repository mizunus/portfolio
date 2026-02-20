"use client";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    name: "FlyOS",
    description:
      "Agentic AI platform where we built an AI chat experience with tools and artifacts, along with an AI widget builder and an AI workflow builder for rapid business automation.",
    link: "https://work.flyos.ai/",
    tags: ["Agentic AI", "Tools", "Artifacts", "Workflow Builder"],
  },
  {
    name: "EcoReturns",
    description:
      "Returns management platform that streamlines, automates, and optimizes the returns process for e-commerce brands.",
    link: "https://returns.saara.io/",
    tags: ["SaaS", "E-commerce", "Automation"],
  },
  {
    name: "EcoShip",
    description:
      "AI-powered shipping logistics platform that optimizes routes and reduces emissions, helping businesses save money and the planet.",
    link: "https://ecoship.saara.io/",
    tags: ["AI", "Logistics", "GreenTech"],
  },
  {
    name: "MVP Archive",
    description:
      "Personal project where I keep track of all MVPs I have built, with a single place to organize ideas, launches, and learnings.",
    link: "https://mvp.discuvr.in",
    tags: ["Personal Project", "MVPs", "Product Building"],
  },
  {
    name: "CoSell",
    description:
      "Collaborative selling platform that helped businesses partner, share leads, and grow together through shared networks.",
    link: "https://cosell.saara.io/",
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
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24" ref={ref}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-wider uppercase">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Things I&apos;ve Built
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.sunsetted)
            .map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
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
              </a>
            ))}
        </div>

        {projects.some((p) => p.sunsetted) && (
          <>
            <div className="flex items-center gap-4 mt-16 mb-8">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">
                Previously Shipped
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.sunsetted)
                .map((project, idx) => (
                  <div
                    key={idx}
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
