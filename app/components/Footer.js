"use client";
import { useRef } from "react";
import { useI18n } from "../i18n/LanguageProvider";
import { clamp01, useScrollFrame } from "../hooks/useScrollFrame";
import Magnetic from "./motion/Magnetic";

export default function Footer() {
  const { t } = useI18n();
  const markRef = useRef(null);

  // The wordmark rises and fills with colour as the page bottoms out.
  useScrollFrame(() => {
    const el = markRef.current;
    if (!el) return;
    const r = el.parentElement.getBoundingClientRect();
    const p = clamp01((window.innerHeight - r.top) / r.height);
    el.style.setProperty("--fp", p.toFixed(4));
  });

  const linkClass = "hover:text-fg transition-colors duration-200";

  return (
    <footer className="relative z-10 border-t border-line pt-10 px-6 overflow-hidden" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-subtle">
        <span>
          &copy; {new Date().getFullYear()} Siddharth Dangarh. {t("footer.rights")}
        </span>
        <nav aria-label="Footer links" className="flex items-center gap-6">
          <a
            href="https://in.linkedin.com/in/siddharth-dangarh-a896b61a7"
            target="_blank"
            rel="me noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a
            href="https://discuvr.in"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Discuvr
          </a>
          <a href="mailto:siddharthdangarh872@gmail.com" className={linkClass}>
            Email
          </a>
          <Magnetic>
            <a
              href="#top"
              aria-label={t("footer.top")}
              title={t("footer.top")}
              className="grid place-items-center w-9 h-9 rounded-full border border-line hover:border-accent-500 hover:bg-accent-500 hover:text-white transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
              </svg>
            </a>
          </Magnetic>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-10 select-none" aria-hidden="true">
        <div ref={markRef} className="wordmark text-center whitespace-nowrap">
          Siddharth
        </div>
      </div>
    </footer>
  );
}
