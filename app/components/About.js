"use client";
import { useInView } from "../hooks/useInView";

const highlights = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Location", value: "Bengaluru" },
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
              real-world problems. Today, I specialize in building agentic AI
              solutions and cloud-native systems that help businesses unlock new
              possibilities.
            </p>
            <p>
              Every project is a new adventure&mdash;a chance to learn, create,
              and make an impact.
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
