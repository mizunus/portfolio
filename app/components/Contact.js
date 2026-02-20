"use client";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24" ref={ref}>
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-wider uppercase">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          I&apos;m always open to discussing new projects, opportunities, or
          just having a good conversation about tech and AI.
        </p>

        <a
          href="mailto:siddharthdangarh872@gmail.com"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition-all duration-200 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)] mb-12"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          Say Hello
        </a>

        <div className="flex gap-8 justify-center text-sm">
          <a
            href="https://in.linkedin.com/in/siddharth-dangarh-a896b61a7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:siddharthdangarh872@gmail.com"
            className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
