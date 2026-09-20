// Global audience, not region-specific. Native names so a speaker
// recognises their own language without needing to read English.
export const LOCALES = [
  { code: "en", name: "English",    native: "English" },
  { code: "es", name: "Spanish",    native: "Español" },
  { code: "fr", name: "French",     native: "Français" },
  { code: "de", name: "German",     native: "Deutsch" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "ja", name: "Japanese",   native: "日本語" },
  { code: "zh", name: "Chinese",    native: "中文" },
];

export const DEFAULT_LOCALE = "en";
export const STORAGE_KEY = "preferred-locale";

export const isSupported = (code) => LOCALES.some((l) => l.code === code);
