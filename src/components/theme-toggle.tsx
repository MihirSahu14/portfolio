"use client";

import { useRef } from "react";

// Initial theme is set by the inline script in layout.tsx; label swaps via CSS on [data-theme].
export function ThemeToggle() {
  const transitionTimeout = useRef<number | undefined>(undefined);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = next;
    root.dataset.themeTransition = next === "light" ? "to-light" : "to-dark";
    try {
      localStorage.setItem("theme", next);
    } catch {}

    window.clearTimeout(transitionTimeout.current);
    transitionTimeout.current = window.setTimeout(() => {
      delete root.dataset.themeTransition;
    }, 2600);
  }

  return (
    <button
      type="button"
      className="pixel-button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      <span className="theme-label-dark">LIGHT MODE</span>
      <span className="theme-label-light">DARK MODE</span>
    </button>
  );
}
