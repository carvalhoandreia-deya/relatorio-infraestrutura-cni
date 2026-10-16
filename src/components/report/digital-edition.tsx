import { anchorId, fascicleText } from "./editions";
import { useEdition } from "./edition";
import { useLocale } from "./locale";
import { Section } from "./ui";

export function DigitalEdition() {
  const { current, openPdf } = useEdition();
  const { locale } = useLocale();
  const chapters = fascicleText[current.id] ?? [];
  const pt = locale === "pt";

  return (
    <>
      <header id="sumario" data-section="sumario" className="scroll-mt-44 pb-4 lg:scroll-mt-20">
        <div className="rounded-lg bg-title px-4 py-4 md:px-5">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">
            {pt ? `Ano 24 · Número ${current.number}` : `Year 24 · Number ${current.number}`}
          </p>
          <h1 className="mt-1.5 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-title-ink md:text-3xl">
            {pt ? current.month : current.monthEn} 2026
          </h1>
        </div>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {pt
            ? "Leitura do relatório. O texto segue o original da CNI. Tabelas e gráficos ficam no PDF desta edição."
            : "Reading of the report. The wording follows the CNI original, in Portuguese. Tables and charts are in this edition’s PDF."}
        </p>
        <button
          type="button"
          onClick={openPdf}
          className="mt-5 inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-fg"
        >
          {pt ? "Ver o PDF" : "View the PDF"}
        </button>
      </header>
      {chapters.map((chapter) => (
        <Section key={chapter.id} id={anchorId(chapter.id)} kicker={pt ? "Relatório" : "Report"} title={chapter.title}>
          {chapter.subs.map((sub) => (
            <div key={sub.id} id={anchorId(sub.id)} data-section={anchorId(sub.id)} className="scroll-mt-44 lg:scroll-mt-20">
              <h3 className="rounded-lg bg-title px-3 py-2 text-base font-semibold leading-snug text-title-ink">
                {sub.title}
              </h3>
              <div className="mt-3 max-w-3xl space-y-4 text-base leading-relaxed text-ink">
                {sub.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </Section>
      ))}
    </>
  );
}
