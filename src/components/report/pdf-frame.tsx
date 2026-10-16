import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { editions, type EditionId } from "./editions";
import { useEdition } from "./edition";
import { useLocale } from "./locale";

export function PdfFrame() {
  const { current, pdfOpen, closePdf, select, read } = useEdition();
  const { locale } = useLocale();
  const pt = locale === "pt";

  useEffect(() => {
    if (!pdfOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePdf();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pdfOpen, closePdf]);

  if (!pdfOpen) return null;

  const fileName = `relatorio-infraestrutura-${current.id}.pdf`;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-paper" role="dialog" aria-modal="true" aria-label={pt ? "Edição em PDF" : "PDF edition"}>
      <div className="flex h-14 shrink-0 items-center gap-2 border-b border-line bg-header px-3 text-header-fg">
        <p className="hidden text-sm font-semibold sm:block">{pt ? "Edição em PDF" : "PDF edition"}</p>
        <label className="sr-only" htmlFor="edicao-pdf">
          {pt ? "Escolher mês" : "Choose month"}
        </label>
        <select
          id="edicao-pdf"
          value={current.id}
          onChange={(event) => select(event.target.value as EditionId)}
          className="h-10 min-w-0 flex-1 rounded-md border border-line bg-card px-2 text-sm text-ink sm:max-w-xs sm:flex-none"
        >
          {editions.map((item) => (
            <option key={item.id} value={item.id}>
              {pt ? item.month : item.monthEn} 2026 · {pt ? "nº" : "no."} {item.number}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={read}
          className="hidden h-10 shrink-0 items-center rounded-md border border-header-fg/30 px-3 text-sm font-semibold sm:inline-flex"
        >
          {pt ? "Ler digital" : "Read"}
        </button>
        <a
          href={current.pdf}
          download={fileName}
          className="inline-flex h-10 shrink-0 items-center rounded-md border border-header-fg/30 px-3 text-sm font-semibold"
        >
          {pt ? "Baixar" : "Download"}
        </a>
        <button
          type="button"
          onClick={closePdf}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md"
          aria-label={pt ? "Fechar PDF" : "Close PDF"}
        >
          <X className="size-5" />
        </button>
      </div>
      <PdfPages
        src={current.pdf}
        label={pt ? current.month : current.monthEn}
        loading={pt ? "Abrindo o relatório" : "Opening the report"}
        failed={pt ? "Não foi possível mostrar o PDF aqui. Use Baixar para abrir o arquivo." : "The PDF could not be shown here. Use Download to open the file."}
      />
    </div>
  );
}

function PdfPages({ src, label, loading, failed }: { src: string; label: string; loading: string; failed: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [progress, setProgress] = useState("");

  useEffect(() => {
    const node = host.current;
    if (!node) return;
    let dead = false;
    let task: { destroy: () => void } | undefined;
    setState("loading");
    setProgress("");

    (async () => {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
      const response = await fetch(src);
      if (!response.ok) throw new Error(String(response.status));
      const data = new Uint8Array(await response.arrayBuffer());
      if (dead) return;
      const loading = pdfjs.getDocument({ data });
      task = loading;
      const doc = await loading.promise;
      if (dead) return;
      node.replaceChildren();
      const cssWidth = Math.max(280, node.clientWidth - 24);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      for (let index = 1; index <= doc.numPages; index += 1) {
        if (dead) return;
        const page = await doc.getPage(index);
        const base = page.getViewport({ scale: 1 });
        const cssScale = cssWidth / base.width;
        const viewport = page.getViewport({ scale: cssScale * pixelRatio });
        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = `${Math.floor(base.width * cssScale)}px`;
        canvas.style.height = `${Math.floor(base.height * cssScale)}px`;
        canvas.className = "mx-auto mb-3 bg-white shadow-sm";
        canvas.setAttribute("aria-label", `${label}, página ${index}`);
        node.appendChild(canvas);
        await page.render({ canvas, viewport }).promise;
        if (!dead) setProgress(`${index}/${doc.numPages}`);
      }
      if (!dead) setState("ready");
    })().catch(() => {
      if (!dead) setState("error");
    });

    return () => {
      dead = true;
      task?.destroy();
    };
  }, [src, label]);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-[#d7dde2] px-3 py-4">
      {state === "loading" ? (
        <p className="mb-3 text-center text-sm text-ink">{loading}{progress ? ` · ${progress}` : "…"}</p>
      ) : null}
      {state === "error" ? (
        <p className="mb-3 text-center text-sm text-ink">
          {failed}
        </p>
      ) : null}
      <div ref={host} />
    </div>
  );
}
