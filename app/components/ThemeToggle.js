"use client";
import { useEffect } from "react";
import { flushSync } from "react-dom";
import { prefersReducedMotion } from "../hooks/useScrollFrame";

const THEME_COLORS = { light: "#f6f5f1", dark: "#0a0a0f" };

function syncThemeColor(theme) {
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((m) => m.setAttribute("content", THEME_COLORS[theme]));
}

/**
 * Light/dark switch. The new theme washes over the page as a circle
 * expanding from the button (View Transitions API), with a plain swap
 * as the fallback. Icon state is pure CSS off [data-theme], so the
 * server render never disagrees with the client.
 */
export default function ThemeToggle({ label = "Toggle colour theme" }) {
  useEffect(() => {
    syncThemeColor(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggle = (e) => {
    const html = document.documentElement;
    const next = html.dataset.theme === "dark" ? "light" : "dark";

    const apply = () => {
      html.dataset.theme = next;
      syncThemeColor(next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage blocked — the switch still applies for this visit.
      }
    };

    if (!document.startViewTransition || prefersReducedMotion()) {
      apply();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = document.startViewTransition(() => flushSync(apply));
    transition.ready.then(() => {
      html.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
        },
        {
          duration: 750,
          easing: "cubic-bezier(0.7, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative grid place-items-center w-9 h-9 rounded-lg text-muted hover:text-fg hover:bg-ink/[0.06] transition-colors duration-200"
    >
      <svg
        className="theme-toggle__sun absolute w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"
        />
      </svg>
      <svg
        className="theme-toggle__moon absolute w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.5 14.5A8.5 8.5 0 019.5 3.5a8.5 8.5 0 1011 11z"
        />
      </svg>
    </button>
  );
}
