"use client";
import { useInView } from "../hooks/useInView";

const experiences = [
  {
    company: "Saara Inc.",
    role: "Senior Software Developer",
    period: "May 2023 — Present",
    location: "Bengaluru",
    bullets: [
      "Led architecture and implementation of an AI platform from scratch, designing agents that handle refunds, product analysis, and quality control.",
      "Drove cloud migration across AWS and Azure with robust security practices.",
      "Shipped flagship products including EcoShip and CoLoyalty, directly impacting business revenue.",
    ],
  },
  {
    company: "Saara Inc.",
    role: "Software Developer",
    period: "Jul 2022 — Apr 2023",
    location: "Bengaluru",
    bullets: [
      "Built a ChatGPT-powered returns/exchange chatbot, modernizing legacy customer service flows.",
      "Revamped and stabilized legacy codebases, improving performance and maintainability.",
      "Collaborated across the full software lifecycle from design to deployment.",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-24 px-6 scroll-mt-24" ref={ref}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-wider uppercase">
          Experience
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Where I&apos;ve Worked
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative pl-8 border-l-2 border-white/[0.06] hover:border-indigo-500/50 transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white/[0.08] bg-[#0a0a0f] group-hover:border-indigo-400 transition-colors duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}{" "}
                  <span className="text-slate-500 font-normal">
                    @ {exp.company}
                  </span>
                </h3>
                <span className="text-sm font-mono text-slate-500 shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-slate-500 mb-4">{exp.location}</p>

              <ul className="space-y-3">
                {exp.bullets.map((item, i) => (
                  <li
                    key={i}
                    className="text-slate-400 leading-relaxed flex gap-3"
                  >
                    <span className="text-indigo-400/50 mt-1 shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
