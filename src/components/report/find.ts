import { normalize } from "./toc";

export type TextHit = {
  sectionId: string;
  before: string;
  match: string;
  after: string;
};

const CAP = 100;

export function findIn(root: HTMLElement, query: string): { hits: TextHit[]; ranges: Range[]; capped: boolean } {
  const needle = normalize(query.trim());
  const hits: TextHit[] = [];
  const ranges: Range[] = [];
  if (needle.length < 2) return { hits, ranges, capped: false };

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent || parent.closest("script, style, noscript")) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let capped = false;
  let node = walker.nextNode() as Text | null;
  while (node && !capped) {
    const text = node.nodeValue ?? "";
    const { folded, map } = foldSpan(text);
    let from = 0;
    let at = folded.indexOf(needle, from);
    while (at !== -1) {
      const start = map[at];
      const end = at + needle.length < map.length ? map[at + needle.length] : text.length;
      if (end > start) {
        const range = document.createRange();
        range.setStart(node, start);
        range.setEnd(node, end);
        ranges.push(range);
        const section = node.parentElement?.closest<HTMLElement>("[data-section]");
        const left = Math.max(0, start - 42);
        const right = Math.min(text.length, end + 42);
        hits.push({
          sectionId: section?.dataset.section ?? "sumario",
          before: `${left > 0 ? "…" : ""}${collapse(text.slice(left, start))}`,
          match: text.slice(start, end),
          after: `${collapse(text.slice(end, right))}${right < text.length ? "…" : ""}`,
        });
      }
      if (hits.length >= CAP) {
        capped = true;
        break;
      }
      from = at + needle.length;
      at = folded.indexOf(needle, from);
    }
    node = walker.nextNode() as Text | null;
  }
  return { hits, ranges, capped };
}

export function paintHits(ranges: Range[], current: number) {
  const api = highlightApi();
  if (!api) return;
  const rest = api.create();
  const now = api.create();
  ranges.forEach((range, index) => {
    if (index === current) now.add(range);
    else rest.add(range);
  });
  api.set("report-find", rest);
  api.set("report-find-current", now);
}

export function clearHits() {
  highlightApi()?.clear();
}

function highlightApi() {
  const css = (globalThis as { CSS?: { highlights?: HighlightRegistry } }).CSS;
  const HighlightCtor = (globalThis as { Highlight?: new () => HighlightLike }).Highlight;
  if (!css?.highlights || !HighlightCtor) return null;
  return {
    create() {
      return new HighlightCtor();
    },
    set(name: string, value: HighlightLike) {
      css.highlights?.set(name, value);
    },
    clear() {
      css.highlights?.delete("report-find");
      css.highlights?.delete("report-find-current");
    },
  };
}

type HighlightLike = { add(range: Range): void };

type HighlightRegistry = {
  set(name: string, value: HighlightLike): void;
  delete(name: string): void;
};

function foldSpan(text: string) {
  let folded = "";
  const map: number[] = [];
  let index = 0;
  for (const char of text) {
    const plain = char.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    for (const piece of plain) {
      folded += piece;
      map.push(index);
    }
    index += char.length;
  }
  return { folded, map };
}

function collapse(value: string) {
  return value.replace(/\s+/g, " ");
}
