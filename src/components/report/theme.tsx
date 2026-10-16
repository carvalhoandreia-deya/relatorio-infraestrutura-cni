import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocale } from "./locale";

export type Theme = "editorial" | "dark" | "cni";

type ThemeContextValue = {
  theme: Theme;
  effective: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "cni-report-appearance";

const THEME_COLOR: Record<Theme, string> = {
  editorial: "#142029",
  dark: "#0c1418",
  cni: "#164194",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  const [theme, setThemeState] = useState<Theme>("cni");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "editorial" || saved === "dark" || saved === "cni") setThemeState(saved);
  }, []);

  const effective: Theme = locale === "en" ? "editorial" : theme;

  useEffect(() => {
    document.documentElement.dataset.theme = effective;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLOR[effective]);
  }, [effective]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      effective,
      setTheme: (next) => {
        setThemeState(next);
        window.localStorage.setItem(STORAGE_KEY, next);
      },
    }),
    [theme, effective],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used within ThemeProvider");
  return value;
}
