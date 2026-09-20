"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "./ScrollProgress";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "../i18n/LanguageProvider";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
];

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : ""
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Siddharth Dangarh - Home"
          className="text-lg font-semibold text-white tracking-tight"
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

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <LanguageSwitcher />

          <a
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-sm text-slate-200 hover:bg-accent-500 hover:border-accent-400 hover:text-white transition-all duration-200"
          >
            {t("nav.cta")}
          </a>

          <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
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
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/[0.06]">
          <nav aria-label="Mobile navigation" className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 px-4 py-2.5 rounded-lg bg-accent-500 text-white text-sm font-medium text-center"
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
