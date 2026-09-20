"use client";
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { useI18n } from "../i18n/LanguageProvider";

const EMAIL = "siddharthdangarh872@gmail.com";

// Set NEXT_PUBLIC_WEB3FORMS_KEY to enable the inline form.
// Without it the section degrades to a plain mailto button.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const INTENT_IDS = ["project", "role", "advice", "other"];

export default function Contact() {
  const [ref, inView] = useInView();
  const { t, locale } = useI18n();
  const [intent, setIntent] = useState("project");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio: ${intent} - ${data.name}`,
          from_name: "siddharthdangarh.com",
          intent: t(`contact.intents.${intent}`),
          locale,
          ...data,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Send failed");
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  const field =
    "w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.05] transition-all duration-200";

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative py-24 px-6 scroll-mt-24"
      ref={ref}
    >
      <div
        className={`max-w-2xl mx-auto transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center">
          <p className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">{t("contact.blurb")}</p>
        </div>

        {status === "sent" ? (
          <div
            role="status"
            className="p-8 rounded-xl bg-emerald-400/[0.06] border border-emerald-400/20 text-center"
          >
            <div className="text-3xl mb-3" aria-hidden="true">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t("contact.sentTitle")}
            </h3>
            <p className="text-slate-400">{t("contact.sentBody")}</p>
          </div>
        ) : ACCESS_KEY ? (
          <form onSubmit={onSubmit} className="space-y-5">
            <fieldset>
              <legend className="text-sm text-slate-400 mb-3">
                {t("contact.intentLegend")}
              </legend>
              <div className="flex flex-wrap gap-2">
                {INTENT_IDS.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setIntent(id)}
                    aria-pressed={intent === id}
                    className={`px-4 py-2 rounded-lg text-sm border transition-all duration-200 ${
                      intent === id
                        ? "bg-accent-500/15 border-accent-400/40 text-accent-200"
                        : "bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.16]"
                    }`}
                  >
                    {t(`contact.intents.${id}`)}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                  {t("contact.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t("contact.namePlaceholder")}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                  {t("contact.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className={field}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={t("contact.messagePlaceholder")}
                className={`${field} resize-y`}
              />
            </div>

            {/* Honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {status === "error" && (
              <p role="alert" className="text-sm text-rose-400">
                {error} {t("contact.errorSuffix")}{" "}
                <a href={`mailto:${EMAIL}`} className="underline">
                  {EMAIL}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-8 py-3.5 rounded-lg bg-accent-500 hover:bg-accent-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium transition-all duration-200 hover:shadow-[0_0_32px_rgb(var(--accent-rgb)/0.3)]"
            >
              {status === "sending" ? t("contact.sending") : t("contact.send")}
            </button>

            <p className="text-xs text-slate-600 text-center">{t("contact.privacy")}</p>
          </form>
        ) : (
          <div className="text-center">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-white font-medium transition-all duration-200 hover:shadow-[0_0_32px_rgb(var(--accent-rgb)/0.25)]"
            >
              {t("contact.emailMe")}
            </a>
          </div>
        )}

        <div className="flex gap-8 justify-center text-sm mt-12">
          <a
            href="https://in.linkedin.com/in/siddharth-dangarh-a896b61a7"
            target="_blank"
            rel="me noopener noreferrer"
            className="text-slate-500 hover:text-accent-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-slate-500 hover:text-accent-400 transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://discuvr.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent-400 transition-colors duration-200"
          >
            Discuvr
          </a>
        </div>
      </div>
    </section>
  );
}
