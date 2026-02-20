"use client";
import { useInView } from "../hooks/useInView";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "JavaScript", "Django", "Next.js", "Node.js", "React"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Azure", "Google Cloud", "Docker", "Nginx", "Gunicorn"],
  },
  {
    title: "Data & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Celery"],
  },
  {
    title: "AI & APIs",
    skills: ["REST APIs", "GraphQL", "Prompt Engineering", "AI Agents", "LLMs"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "CI/CD", "Linux", "Agile"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-24" ref={ref}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-wider uppercase">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Technologies I Work With
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 transition-all duration-300"
            >
              <h3 className="text-sm font-mono text-indigo-400 mb-4 tracking-wider uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-slate-300 bg-white/[0.04] rounded-md border border-white/[0.06] hover:border-indigo-500/30 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
