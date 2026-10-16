import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { BookOpen, Download, ExternalLink, FileText, Menu, Search, Share2, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLocale } from "./locale";
import { useTheme, type Theme } from "./theme";
import { tocFor } from "./toc";
import { tocForFascicle } from "./editions";
import { shareUrl, useEdition } from "./edition";
import { PdfFrame } from "./pdf-frame";
import { GlossaryPanel } from "./glossary";
import { clearHits, findIn, paintHits, type TextHit } from "./find";

export function Shell({ children }: { children: ReactNode }) {
  const { locale, toggle } = useLocale();
  const { theme, setTheme, effective } = useTheme();
  const { current, openPdf } = useEdition();
  const toc = current.full ? tocFor(locale) : tocForFascicle(current.id);
  const [active, setActive] = useState("sumario");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<TextHit[]>([]);
  const [capped, setCapped] = useState(false);
  const [currentHit, setCurrentHit] = useState(-1);
  const [listOpen, setListOpen] = useState(false);
  const rangesRef = useRef<Range[]>([]);
  const currentHitRef = useRef(-1);
  currentHitRef.current = currentHit;
  const [copied, setCopied] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const ui = locale === "en" ? chrome.en : chrome.pt;

  useEffect(() => {
    const nodes = () => Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const mark = () => {
      const list = nodes();
      if (list.length === 0) return;
      const line = window.innerWidth >= 1024 ? 80 : 176;
      let next = list[0].getAttribute("data-section") ?? "sumario";
      for (const node of list) {
        if (node.getBoundingClientRect().top <= line) {
          next = node.getAttribute("data-section") ?? next;
        }
      }
      setActive(next);
    };
    mark();
    window.addEventListener("scroll", mark, { passive: true });
    window.addEventListener("hashchange", mark);
    return () => {
      window.removeEventListener("scroll", mark);
      window.removeEventListener("hashchange", mark);
    };
  }, [current.id]);

  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-report]");
    clearHits();
    if (!root || query.trim().length < 2) {
      rangesRef.current = [];
      setHits((current) => (current.length === 0 ? current : []));
      setCapped(false);
      return;
    }
    const found = findIn(root, query);
    rangesRef.current = found.ranges;
    setHits(found.hits);
    setCapped(found.capped);
    paintHits(found.ranges, currentHitRef.current);
    return () => {
      clearHits();
    };
  }, [query, locale, current.id]);

  useLayoutEffect(() => {
    if (rangesRef.current.length === 0) return;
    paintHits(rangesRef.current, currentHit);
  }, [currentHit, hits]);

  function jump(index: number) {
    const range = rangesRef.current[index];
    if (!range) return;
    setCurrentHit(index);
    setListOpen(false);
    const details = range.startContainer.parentElement?.closest("details");
    if (details) details.open = true;
    const rect = range.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + rect.top - 168, behavior: "smooth" });
  }

  async function share() {
    const url = shareUrl(current.id);
    const title =
      locale === "en"
        ? `Infrastructure Report · ${current.monthEn} 2026`
        : `Relatório de Infraestrutura · ${current.month} 2026`;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    const clip = navigator.clipboard
      ? navigator.clipboard.writeText(url).then(() => true).catch(() => false)
      : Promise.resolve(false);
    const legacy = copyLink(url);
    if (legacy || (await clip)) {
      setShareLink(null);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      return;
    }
    setShareLink(url);
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#sumario" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-card focus:p-3">
        {ui.skip}
      </a>
      <header className="app-header print:hidden fixed inset-x-0 top-0 z-40 border-b border-line bg-header px-2 py-2 text-header-fg sm:px-4 lg:flex lg:h-14 lg:items-center lg:gap-2 lg:py-0">
        <div className="flex min-w-0 items-center gap-1 sm:gap-2 lg:flex-1">
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-header-fg lg:hidden"
            aria-label={open ? ui.close : ui.open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <a href="#sumario" className="flex min-w-0 flex-1 items-center lg:flex-none">
            <img
              src={logoSrc(locale, effective)}
              alt={locale === "en" ? "CNI, Brazilian National Confederation of Industry" : "CNI, Confederação Nacional da Indústria"}
              className="h-8 w-auto max-w-16 object-contain object-left sm:h-9 sm:max-w-40 lg:max-w-none"
            />
          </a>
          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => void share()}
                aria-label={copied ? ui.copied : ui.share}
                className="inline-flex size-11 items-center justify-center gap-1.5 rounded-md border border-header-fg/30 text-header-fg sm:w-auto sm:px-2.5"
              >
                <Share2 className="size-4" />
                <span className="hidden lg:inline">{copied ? ui.copied : ui.share}</span>
              </button>
              {shareLink ? (
                <div className="absolute top-12 right-0 z-50 w-72 max-w-[calc(100dvw-1.5rem)] rounded-md border border-line bg-card p-3 text-ink shadow-sm">
                  <p className="text-xs leading-relaxed text-muted">{ui.shareManual}</p>
                  <input
                    readOnly
                    value={shareLink}
                    aria-label={ui.share}
                    className="mt-2 w-full rounded-md border border-line bg-paper px-2 py-1.5 text-xs text-ink"
                    onFocus={(event) => event.currentTarget.select()}
                    ref={(node) => node?.focus()}
                  />
                </div>
              ) : null}
            </div>
            <button
              type="button"
              onClick={openPdf}
              aria-label={ui.pdfLabel}
              className="hidden h-11 items-center gap-1.5 rounded-md border border-header-fg/30 px-2.5 text-sm font-semibold text-header-fg lg:inline-flex"
            >
              <FileText className="size-4" />
              <span>PDF</span>
            </button>
            <button
              type="button"
              onClick={() => setGlossaryOpen(true)}
              aria-label={ui.glossary}
              className="hidden h-11 items-center gap-1.5 rounded-md border border-header-fg/30 px-2.5 text-sm font-semibold text-header-fg lg:inline-flex"
            >
              <BookOpen className="size-4" />
              <span>{ui.glossary}</span>
            </button>
            <a
              href="/editions/2026-09-en.pdf"
              download="infrastructure-report-september-2026.pdf"
              aria-label={ui.englishPdf}
              className="hidden h-11 items-center gap-1.5 rounded-md border border-header-fg/30 px-2.5 text-sm font-semibold text-header-fg lg:inline-flex"
            >
              <Download className="size-4" />
              <span>{locale === "en" ? ui.englishPdfShort : ui.englishPdfShortPt}</span>
            </a>
            <button
              type="button"
              onClick={toggle}
              aria-pressed={locale === "en"}
              aria-label={ui.langLabel}
              className="inline-flex h-11 min-w-11 items-center justify-center rounded-md border border-header-fg/30 px-2 text-sm font-semibold text-header-fg"
            >
              <span className="sm:hidden">{ui.langShort}</span>
              <span className="hidden sm:inline">{ui.lang}</span>
            </button>
            <a
              href="https://suinfra-catalogue-hub.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ui.catalogue}
              className="hidden h-11 items-center gap-1.5 rounded-md border border-header-fg/30 px-2.5 text-sm font-semibold text-header-fg lg:inline-flex"
            >
              <ExternalLink className="size-4 shrink-0" />
              <span className="hidden xl:inline">{ui.catalogue}</span>
            </a>
          </div>
        </div>
        <div className="mobile-actions mt-2 gap-1 overflow-x-auto">
          <button
            type="button"
            onClick={openPdf}
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-header-fg/30 px-2.5 text-xs font-semibold text-header-fg"
          >
            <FileText className="size-4" />
            PDF
          </button>
          <button
            type="button"
            onClick={() => setGlossaryOpen(true)}
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-header-fg/30 px-2.5 text-xs font-semibold text-header-fg"
          >
            <BookOpen className="size-4" />
            {ui.glossary}
          </button>
          <a
            href="/editions/2026-09-en.pdf"
            download="infrastructure-report-september-2026.pdf"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-header-fg/30 px-2.5 text-xs font-semibold text-header-fg"
          >
            <Download className="size-4" />
            {locale === "en" ? "English PDF" : ui.englishPdfShortPt}
          </a>
          <a
            href="https://suinfra-catalogue-hub.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-header-fg/30 px-2.5 text-xs font-semibold text-header-fg"
          >
            <ExternalLink className="size-4" />
            {ui.catalogueShort}
          </a>
        </div>
        <div className="relative mt-2 w-full lg:mt-0 lg:ml-2 lg:w-56 xl:w-72">
          <label className="sr-only" htmlFor="busca">
            {ui.search}
          </label>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
          <input
            id="busca"
            role="combobox"
            aria-expanded={listOpen && query.trim().length >= 2}
            aria-controls="busca-lista"
            aria-autocomplete="list"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setCurrentHit(-1);
              setListOpen(true);
            }}
            onFocus={() => setListOpen(true)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setListOpen(false);
                return;
              }
              if (event.key === "Enter" && hits.length > 0) {
                event.preventDefault();
                const next = currentHit < 0 || currentHit >= hits.length - 1 ? 0 : currentHit + 1;
                jump(next);
              }
            }}
            placeholder={ui.placeholder}
            className="h-10 w-full rounded-md border border-line bg-card pr-3 pl-9 text-sm text-ink placeholder:text-muted"
          />
          {listOpen && query.trim().length >= 2 ? (
            <div
              id="busca-lista"
              className="absolute top-12 right-0 z-50 max-h-96 w-full overflow-hidden rounded-md border border-line bg-card text-ink shadow-sm lg:w-[28rem]"
            >
              <p className="border-b border-line px-3 py-2 text-xs text-muted">
                {hits.length === 0 ? ui.empty : capped ? ui.capped : ui.count(hits.length)}
              </p>
              <ul className="max-h-80 overflow-y-auto">
                {hits.map((hit, index) => (
                  <li key={`${hit.sectionId}-${index}`}>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => jump(index)}
                      className={cn(
                        "block w-full px-3 py-2 text-left hover:bg-accent-soft",
                        currentHit === index && "bg-accent-soft",
                      )}
                    >
                      <span className="block text-xs text-muted">{toc.find((item) => item.id === hit.sectionId)?.label}</span>
                      <span className="text-sm leading-snug">
                        {hit.before}
                        <mark className="rounded-sm bg-[var(--find-bg)] px-0.5 text-[var(--find-ink)]">{hit.match}</mark>
                        {hit.after}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </header>

      {open ? (
        <button
          type="button"
          aria-label={ui.close}
          className="print:hidden fixed inset-0 z-30 bg-scrim/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        className={cn(
          "nav-panel print:hidden fixed left-0 z-30 w-72 overflow-y-auto border-r border-line bg-card px-3 py-4 transition-transform lg:w-64 lg:translate-x-0",
          open ? "is-open translate-x-0" : "-translate-x-full",
        )}
      >
        <p className="px-2 pb-2 text-xs font-semibold tracking-wide text-muted uppercase">{ui.summary}</p>
        <nav aria-label={ui.nav}>
          <ul className="space-y-0.5">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    setOpen(false);
                    setActive(item.id);
                  }}
                  className={cn(
                    "flex min-h-11 items-center rounded-md px-2 py-2 text-sm leading-snug",
                    item.chapter ? "mt-2 font-semibold" : "pl-4",
                    active === item.id ? "bg-accent-soft text-accent" : "text-ink hover:bg-paper",
                  )}
                  aria-current={active === item.id ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 space-y-1 border-t border-line pt-3 lg:hidden">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openPdf();
            }}
            className="flex min-h-11 w-full items-center gap-2 rounded-md px-2 text-sm font-semibold text-ink hover:bg-paper"
          >
            <FileText className="size-4 text-accent" />
            PDF
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setGlossaryOpen(true);
            }}
            className="flex min-h-11 w-full items-center gap-2 rounded-md px-2 text-sm font-semibold text-ink hover:bg-paper"
          >
            <BookOpen className="size-4 text-accent" />
            {ui.glossary}
          </button>
          <a
            href="/editions/2026-09-en.pdf"
            download="infrastructure-report-september-2026.pdf"
            className="flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold text-ink hover:bg-paper"
          >
            <Download className="size-4 text-accent" />
            {ui.englishPdf}
          </a>
          <a
            href="https://suinfra-catalogue-hub.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold text-ink hover:bg-paper"
          >
            <ExternalLink className="size-4 text-accent" />
            {ui.catalogue}
          </a>
        </div>
      </aside>

      <div className="app-offset lg:pl-64">
        <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
          {locale === "en" ? (
            <div className="print-banner print:hidden mb-6 flex flex-col gap-3 border-l-4 border-accent bg-accent-soft px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-ink">{current.full ? ui.banner : ui.bannerMonth}</p>
              {current.full ? (
                <a
                  href="/editions/2026-09-en.pdf"
                  download="infrastructure-report-september-2026.pdf"
                  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-3 text-sm font-semibold text-accent-fg"
                >
                  <Download className="size-4" />
                  {ui.englishPdf}
                </a>
              ) : null}
            </div>
          ) : (
            <div className="print-banner print:hidden">
              <ThemeSwitch theme={theme} onChange={setTheme} />
            </div>
          )}
          <div data-report>{children}</div>
        </main>
      </div>
      <PdfFrame />
      <GlossaryPanel open={glossaryOpen} onClose={() => setGlossaryOpen(false)} />
    </div>
  );
}

const chrome = {
  pt: {
    skip: "Ir para o conteúdo",
    search: "Buscar no relatório",
    placeholder: "Buscar no texto",
    empty: "Nenhum trecho com esse termo",
    capped: "100 primeiros trechos",
    count: (n: number) => (n === 1 ? "1 trecho" : `${n} trechos`),
    summary: "Sumário",
    nav: "Seções do relatório",
    open: "Abrir sumário",
    close: "Fechar sumário",
    lang: "English",
    langShort: "EN",
    langLabel: "Ver versão em inglês",
    catalogue: "Publicações de Infraestrutura",
    catalogueShort: "Publicações",
    share: "Compartilhar",
    copied: "Link copiado",
    shareManual: "Não foi possível copiar sozinho. Selecione o link:",
    pdfLabel: "Ver a edição em PDF",
    englishPdf: "Baixar PDF em inglês",
    englishPdfShort: "PDF EN",
    englishPdfShortPt: "PDF inglês",
    glossary: "Glossário",
    banner: "",
    bannerMonth: "",
  },
  en: {
    skip: "Skip to content",
    search: "Search the report",
    placeholder: "Search the text",
    empty: "No passage with that term",
    capped: "First 100 passages",
    count: (n: number) => (n === 1 ? "1 passage" : `${n} passages`),
    summary: "Contents",
    nav: "Report sections",
    open: "Open contents",
    close: "Close contents",
    lang: "Português",
    langShort: "PT",
    langLabel: "Ver versão em português",
    catalogue: "Infrastructure publications",
    catalogueShort: "Publications",
    share: "Share",
    copied: "Link copied",
    shareManual: "Couldn’t copy automatically. Select the link:",
    pdfLabel: "View the PDF edition",
    englishPdf: "Download English PDF",
    englishPdfShort: "Download",
    englishPdfShortPt: "PDF inglês",
    glossary: "Glossary",
    banner:
      "English edition by the translation desk — economics, Brazilian institutions and infrastructure — for international readers. Terms follow global project-finance usage. Figures and Brazilian notation are unchanged from the CNI report.",
    bannerMonth:
      "The English desk edition covers September 2026. Earlier months stay in Portuguese, as in the report, with the original PDF beside the reading.",
  },
};

const THEMES: { id: Theme; label: string }[] = [
  { id: "cni", label: "CNI" },
  { id: "editorial", label: "Claro" },
  { id: "dark", label: "Escuro" },
];

function copyLink(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.left = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus({ preventScroll: true });
  area.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

function ThemeSwitch({ theme, onChange }: { theme: Theme; onChange: (theme: Theme) => void }) {
  return (
    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center">
      <span className="text-xs font-semibold tracking-wide text-muted uppercase">Aparência</span>
      <div className="grid grid-cols-3 rounded-md border border-line bg-card p-1 sm:inline-flex" role="group" aria-label="Aparência do relatório">
        {THEMES.map((item) => {
          const selected = theme === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(item.id)}
              className={cn(
                "h-11 rounded px-3 text-sm font-semibold",
                selected ? "bg-accent text-accent-fg" : "text-ink hover:bg-paper",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function logoSrc(locale: "pt" | "en", theme: Theme) {
  const negative = theme !== "cni";
  if (locale === "en") return negative ? "/brand/cni-en-neg.png" : "/brand/cni-en.png";
  return negative ? "/brand/cni-pt-neg.png" : "/brand/cni-pt.png";
}
