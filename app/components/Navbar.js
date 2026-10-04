"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "./ScrollProgress";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useI18n } from "../i18n/LanguageProvider";
import { useScrollFrame } from "../hooks/useScrollFrame";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
];

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [pill, setPill] = useState(null);
  const lastY = useRef(0);
  const linksRef = useRef(null);

  // Tuck away while reading downward, slide back on any upward scroll.
  useScrollFrame(() => {
    const y = window.scrollY;
    setScrolled(y > 20);
    if (Math.abs(y - lastY.current) > 6) {
      setHidden(y > lastY.current && y > 400);
      lastY.current = y;
    }
  });

  // Track which section sits under the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    const onTop = () => window.scrollY < window.innerHeight * 0.5 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  // Slide the highlight pill under the active link.
  useEffect(() => {
    const wrap = linksRef.current;
    const el = active && wrap?.querySelector(`a[href="${active}"]`);
    if (!el) return setPill(null);
    setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active, t]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-canvas/75 backdrop-blur-xl border-b border-line" : "border-b border-transparent"}`}
    >
      <nav
        aria-label="Primary navigation"
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Siddharth Dangarh - Home"
          className="text-lg font-semibold text-fg tracking-tight transition-transform duration-500 hover:rotate-[-8deg] hover:scale-110"
        >
          <Image
            src="/images/portfolio-logo-icon.png"
            alt="Siddharth Dangarh logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-md"
          />
        </Link>

        <div ref={linksRef} className="relative hidden md:flex items-center gap-1">
          <span
            aria-hidden="true"
            className="absolute top-0 h-full rounded-full bg-ink/[0.06] border border-line transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              left: pill?.left ?? 0,
              width: pill?.width ?? 0,
              opacity: pill ? 1 : 0,
            }}
          />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`relative px-4 py-1.5 text-sm transition-colors duration-200 ${
                active === link.href ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <ThemeToggle label={t("nav.theme")} />
          <LanguageSwitcher />

          <a
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 rounded-full bg-fg text-canvas text-sm font-medium hover:bg-accent-500 hover:text-white transition-all duration-300"
          >
            {t("nav.cta")}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-muted hover:text-fg transition-colors"
            aria-label={mobileOpen ? t("nav.menuClose") : t("nav.menuOpen")}
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-canvas/95 backdrop-blur-xl border-b border-line">
          <nav aria-label="Mobile navigation" className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hero-enter text-sm text-muted hover:text-fg transition-colors"
                style={{ "--d": `${i * 50}ms`, "--intro-delay": "0s" }}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 px-4 py-2.5 rounded-full bg-accent-500 text-white text-sm font-medium text-center"
            >
              {t("nav.cta")}
            </a>
          </nav>
        </div>
      )}

      <ScrollProgress />
    </header>
  );
}
