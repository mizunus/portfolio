"use client";
import { useInView } from "../hooks/useInView";

const highlights = [
  { label: "Years Building", value: "4+" },
  { label: "Products Shipped", value: "10+" },
  { label: "Based In", value: "Bengaluru" },
];

export default function About() {
  const [ref, inView] = useInView();

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
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-wider uppercase">
          About
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          My Journey
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
            <p>
              My fascination with technology began with a simple question:{" "}
              <span className="text-white font-medium">
                &ldquo;How can we make life easier with code?&rdquo;
              </span>
            </p>
            <p>
              From automating daily tasks to architecting AI-driven platforms,
              I&apos;ve always been driven by curiosity and a desire to solve
              real-world problems. Today I lead engineering at Saara, where
              I&apos;ve shipped four commerce products — returns, shipping,
              tracking and an agentic AI platform — and the unified Commerce OS
              that brings them under one roof. AI is part of that work, not the
              whole of it; mostly the job is designing systems that stay up,
              scale, and are pleasant to work on a year later.
            </p>
            <p>
              Outside of work I run <a href="https://discuvr.in" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-400/30 transition-colors">Discuvr</a>,
              a lab where I turn ideas into working tools in days rather than
              quarters. If you have something that needs building, that&apos;s
              usually the fastest way to see how I work.
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
