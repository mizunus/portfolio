"use client";
import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { DEFAULT_LOCALE, STORAGE_KEY, isSupported } from "./config";

import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import de from "./locales/de";
import pt from "./locales/pt";
import ja from "./locales/ja";
import zh from "./locales/zh";

const DICTS = { en, es, fr, de, pt, ja, zh };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // Always start on the default so the server-rendered HTML and the first
  // client paint agree; the stored/browser preference is applied after mount.
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    let next = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && isSupported(stored)) next = stored;
    } catch {
      // Private mode / blocked storage — fall through to browser language.
    }

    if (!next) {
      const browser = (navigator.language || "").slice(0, 2).toLowerCase();
      if (isSupported(browser)) next = browser;
    }

    if (next && next !== DEFAULT_LOCALE) setLocaleState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((code) => {
    if (!isSupported(code)) return;
    setLocaleState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Preference simply won't persist; the switch still works this visit.
    }
  }, []);

  // Fall back to English for any key a translation hasn't covered.
  const t = useMemo(() => {
    const dict = DICTS[locale] ?? en;
    return (path) => {
      const walk = (obj) =>
        path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
      const value = walk(dict);
      return value === undefined ? walk(en) : value;
    };
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}
