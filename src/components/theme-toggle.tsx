"use client";

import { useEffect, useRef, useState } from "react";

const THEMES = ["dark", "light"] as const;
type Theme = (typeof THEMES)[number];
type ThemeTransition = "to-light" | "to-dark";

function applyTheme(theme: Theme, transition?: ThemeTransition) {
  document.documentElement.dataset.theme = theme;

  if (transition) {
    document.documentElement.dataset.themeTransition = transition;
  } else {
    delete document.documentElement.dataset.themeTransition;
  }

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
  const previousThemeRef = useRef<Theme>(theme);
  const transitionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const previousTheme = previousThemeRef.current;
    const transition =
      previousTheme === theme
        ? undefined
        : theme === "light"
          ? "to-light"
          : "to-dark";

    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    applyTheme(theme, transition);

    if (transition) {
      transitionTimeoutRef.current = window.setTimeout(() => {
        delete document.documentElement.dataset.themeTransition;
        transitionTimeoutRef.current = null;
      }, 2600);
    }

    previousThemeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

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
