import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useLocale } from "./locale";
import { editionById, editions, type Edition, type EditionId } from "./editions";

type EditionContextValue = {
  current: Edition;
  pdfOpen: boolean;
  openPdf: () => void;
  closePdf: () => void;
  select: (id: EditionId) => void;
  read: () => void;
};

const EditionContext = createContext<EditionContextValue | null>(null);

export function EditionProvider({ children }: { children: ReactNode }) {
  const { edicao } = useSearch({ from: "/" });
  const navigate = useNavigate();
  const { locale } = useLocale();
  const current = editionById(edicao);
  const [pdfOpen, setPdfOpen] = useState(false);

  useEffect(() => {
    document.title =
      locale === "en"
        ? `Infrastructure Report · ${current.monthEn} 2026 · CNI`
        : `Relatório de Infraestrutura · ${current.month} 2026 · CNI`;
  }, [current, locale]);

  useEffect(() => {
    document.body.style.overflow = pdfOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [pdfOpen]);

  const value = useMemo<EditionContextValue>(
    () => ({
      current,
      pdfOpen,
      openPdf: () => setPdfOpen(true),
      closePdf: () => setPdfOpen(false),
      select: (id) => {
        void navigate({ to: "/", search: { edicao: id } });
      },
      read: () => {
        setPdfOpen(false);
        window.scrollTo(0, 0);
      },
    }),
    [current, pdfOpen, navigate],
  );

  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>;
}

export function useEdition() {
  const value = useContext(EditionContext);
  if (!value) throw new Error("useEdition must be used within EditionProvider");
  return value;
}

export function shareUrl(id: EditionId) {
  const url = new URL(window.location.href);
  url.searchParams.set("edicao", id);
  url.hash = "";
  return url.toString();
}

export { editions };
