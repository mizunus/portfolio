"use client";
import { useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import ScrambleText from "./motion/ScrambleText";
import Magnetic from "./motion/Magnetic";

const EMAIL = "siddharthdangarh872@gmail.com";

// Set NEXT_PUBLIC_WEB3FORMS_KEY to enable the inline form.
// Without it the section degrades to a plain mailto button.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const INTENT_IDS = ["project", "role", "advice", "other"];

export default function Contact() {
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
    "w-full px-4 py-3 rounded-xl bg-card border border-line text-fg-soft placeholder:text-faint focus:outline-none focus:border-accent-500/60 focus:bg-card-hover focus:shadow-[0_0_0_4px_rgb(var(--accent-rgb)/0.12)] transition-all duration-300";

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative py-32 px-6 scroll-mt-24"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <ScrambleText
            as="p"
            text={t("contact.label")}
            className="text-sm font-mono text-accent-400 mb-3 tracking-wider uppercase"
          />
          <SplitText
            as="h2"
            text={t("contact.title")}
            className="text-4xl sm:text-6xl font-bold text-fg mb-5 tracking-tight"
          />
          <Reveal as="p" variant="blur" delay={150} className="text-muted text-lg mb-12 leading-relaxed">
            {t("contact.blurb")}
          </Reveal>
        </div>

        <Reveal variant="up" delay={250}>

        {status === "sent" ? (
          <div
            role="status"
            className="hero-enter p-8 rounded-2xl bg-emerald-500/[0.07] border border-emerald-500/25 text-center"
            style={{ "--intro-delay": "0s" }}
          >
            <div className="text-3xl mb-3 text-emerald-600 dark:text-emerald-400 animate-[spin_3s_linear_infinite] inline-block" aria-hidden="true">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-fg mb-2">
              {t("contact.sentTitle")}
            </h3>
            <p className="text-muted">{t("contact.sentBody")}</p>
          </div>
        ) : ACCESS_KEY ? (
          <form onSubmit={onSubmit} className="space-y-5">
            <fieldset>
              <legend className="text-sm text-muted mb-3">
                {t("contact.intentLegend")}
              </legend>
              <div className="flex flex-wrap gap-2">
                {INTENT_IDS.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setIntent(id)}
                    aria-pressed={intent === id}
                    className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 active:scale-95 ${
                      intent === id
                        ? "bg-accent-500 border-accent-500 text-white shadow-[0_8px_24px_-8px_rgb(var(--accent-rgb)/0.6)]"
                        : "bg-card border-line text-muted hover:text-fg hover:border-line-strong"
                    }`}
                  >
                    {t(`contact.intents.${id}`)}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-2">
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
                <label htmlFor="email" className="block text-sm text-muted mb-2">
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
              <label htmlFor="message" className="block text-sm text-muted mb-2">
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
              <p role="alert" className="text-sm text-rose-600 dark:text-rose-400">
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
              className="w-full px-8 py-3.5 rounded-full bg-fg text-canvas hover:bg-accent-500 hover:text-white disabled:opacity-60 disabled:cursor-not-allowed font-medium transition-all duration-300 hover:shadow-[0_12px_40px_-8px_rgb(var(--accent-rgb)/0.6)] active:scale-[0.98]"
            >
              {status === "sending" ? t("contact.sending") : t("contact.send")}
            </button>

            <p className="text-xs text-faint text-center">{t("contact.privacy")}</p>
          </form>
        ) : (
          <div className="text-center">
            <Magnetic>
              <a
                href={`mailto:${EMAIL}`}
                className="grid place-items-center w-40 h-40 rounded-full bg-fg text-canvas text-lg font-medium hover:bg-accent-500 hover:text-white hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_20px_60px_-10px_rgb(var(--accent-rgb)/0.6)]"
              >
                {t("contact.emailMe")} &rarr;
              </a>
            </Magnetic>
          </div>
        )}
        </Reveal>

        <div className="flex gap-8 justify-center text-sm mt-14">
          <a
            href="https://in.linkedin.com/in/siddharth-dangarh-a896b61a7"
            target="_blank"
            rel="me noopener noreferrer"
            className="text-subtle hover:text-accent-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-subtle hover:text-accent-400 transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://discuvr.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtle hover:text-accent-400 transition-colors duration-200"
          >
            Discuvr
          </a>
        </div>
      </div>
    </section>
  );
}
