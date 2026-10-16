import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "pt" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
  numberLocale: string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "cni-report-locale";

export function LocaleProvider({
  children,
  forced,
}: {
  children: ReactNode;
  forced?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(forced ?? "pt");

  useEffect(() => {
    if (forced) return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") setLocaleState(saved);
  }, [forced]);

  useEffect(() => {
    if (forced) return;
    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
  }, [locale, forced]);

  const value = useMemo<LocaleContextValue>(() => {
    function persist(next: Locale) {
      setLocaleState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
    }
    return {
      locale,
      setLocale: persist,
      toggle: () => persist(locale === "pt" ? "en" : "pt"),
      numberLocale: locale === "en" ? "en-US" : "pt-BR",
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used within LocaleProvider");
  return value;
}
