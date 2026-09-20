"use client";
import { useEffect, useRef, useState } from "react";
import { LOCALES } from "../i18n/config";
import { useI18n } from "../i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LOCALES.find((l) => l.code === locale);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("nav.language")}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-2.4 3.75-5.4 3.75-9S14.5 5.4 12 3m0 18c-2.5-2.4-3.75-5.4-3.75-9S9.5 5.4 12 3M3.6 9h16.8M3.6 15h16.8"
          />
        </svg>
        <span className="text-xs font-mono uppercase tracking-wider">
          {current?.code}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t("nav.language")}
          className="absolute right-0 mt-2 w-44 py-1.5 rounded-xl bg-[#0f0f18]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/50 z-50"
        >
          {LOCALES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === locale}
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors duration-150 ${
                  l.code === locale
                    ? "text-accent-300 bg-accent-500/10"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <span>{l.native}</span>
                <span className="text-[10px] font-mono uppercase text-slate-600">
                  {l.code}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
