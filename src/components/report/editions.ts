import type { TocItem } from "./toc";
import fascicles from "./fascicles.json";

export type EditionId =
  | "2026-01"
  | "2026-02"
  | "2026-03"
  | "2026-04"
  | "2026-05"
  | "2026-06"
  | "2026-07"
  | "2026-08"
  | "2026-09";

export type Edition = {
  id: EditionId;
  number: number;
  month: string;
  monthEn: string;
  pdf: string;
  /** September is the full interactive reader. Earlier months are the report prose. */
  full: boolean;
};

type Chapter = {
  id: string;
  title: string;
  subs: { id: string; title: string; paragraphs: string[] }[];
};

export const fascicleText = fascicles as Record<string, Chapter[]>;

export const editions: Edition[] = [
  { id: "2026-01", number: 1, month: "Janeiro", monthEn: "January", pdf: "/editions/2026-01.pdf", full: false },
  { id: "2026-02", number: 2, month: "Fevereiro", monthEn: "February", pdf: "/editions/2026-02.pdf", full: false },
  { id: "2026-03", number: 3, month: "Março", monthEn: "March", pdf: "/editions/2026-03.pdf", full: false },
  { id: "2026-04", number: 4, month: "Abril", monthEn: "April", pdf: "/editions/2026-04.pdf", full: false },
  { id: "2026-05", number: 5, month: "Maio", monthEn: "May", pdf: "/editions/2026-05.pdf", full: false },
  { id: "2026-06", number: 6, month: "Junho", monthEn: "June", pdf: "/editions/2026-06.pdf", full: false },
  { id: "2026-07", number: 7, month: "Julho", monthEn: "July", pdf: "/editions/2026-07.pdf", full: false },
  { id: "2026-08", number: 8, month: "Agosto", monthEn: "August", pdf: "/editions/2026-08.pdf", full: false },
  { id: "2026-09", number: 9, month: "Setembro", monthEn: "September", pdf: "/editions/2026-09.pdf", full: true },
];

export function editionById(id: string | undefined): Edition {
  return editions.find((item) => item.id === id) ?? editions[8];
}

export function anchorId(id: string) {
  return `s-${id.replaceAll(".", "-")}`;
}

export function tocForFascicle(id: string): TocItem[] {
  const chapters = fascicleText[id] ?? [];
  const items: TocItem[] = [
    {
      id: "sumario",
      chapter: true,
      label: "Esta edição",
      search: "capa relatório texto",
    },
  ];
  for (const chapter of chapters) {
    items.push({
      id: anchorId(chapter.id),
      chapter: true,
      label: chapter.title,
      search: chapter.title,
    });
    for (const sub of chapter.subs) {
      items.push({
        id: anchorId(sub.id),
        label: sub.title,
        search: `${chapter.title} ${sub.title}`,
      });
    }
  }
  return items;
}
