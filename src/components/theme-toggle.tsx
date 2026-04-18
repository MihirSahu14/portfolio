"use client";

import { useEffect, useState } from "react";

const THEMES = ["dark", "light"] as const;
type Theme = (typeof THEMES)[number];

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const saved = window.localStorage.getItem("theme") as Theme | null;
    if (saved && THEMES.includes(saved)) {
      return saved;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="pixel-button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
    </button>
  );
}
