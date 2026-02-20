"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-400 tracking-wide">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            Siddharth
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Senior Software Developer specializing in agentic AI platforms and
          cloud-native systems. I turn complex challenges into elegant, scalable
          software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition-all duration-200 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg border border-white/[0.1] text-slate-300 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.03] font-medium transition-all duration-200"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
