import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  kicker,
  title,
  lede,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  const bare = !children;
  return (
    <section
      id={id}
      data-section={id}
      className={cn("scroll-mt-44 lg:scroll-mt-20", bare ? "pt-6 md:pt-8" : "py-6 md:py-8")}
    >
      <div className="rounded-lg bg-title px-4 py-3 md:px-5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="inline-flex h-6 items-center rounded-md bg-accent px-2 text-xs font-semibold tracking-wide text-accent-fg tabular">
            {kicker}
          </span>
          <h2 className="min-w-0 flex-1 text-lg font-semibold leading-snug tracking-tight text-title-ink md:text-xl">
            {title}
          </h2>
        </div>
      </div>
      {lede ? <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{lede}</p> : null}
      {children ? <div className="mt-6 space-y-8">{children}</div> : null}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-4 text-base leading-relaxed text-ink">{children}</div>;
}

export function Kpis({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{children}</div>;
}

export function Kpi({
  value,
  label,
  hint,
  href,
  icon: Icon,
}: {
  value: string;
  label: string;
  hint?: string;
  href?: string;
  icon?: LucideIcon;
}) {
  const body = (
    <>
      {Icon ? <Icon className="mb-3 size-4 text-accent" strokeWidth={1.75} aria-hidden /> : null}
      <p className="font-serif text-2xl leading-none text-ink tabular">{value}</p>
      <p className="mt-2 text-sm font-medium leading-snug text-ink">{label}</p>
      {hint ? <p className="mt-1 text-sm leading-snug text-muted">{hint}</p> : null}
    </>
  );
  const className =
    "block rounded-lg border border-line bg-card p-4 text-left transition-colors hover:border-accent";
  if (href) {
    return (
      <a href={href} className={className}>
        {body}
      </a>
    );
  }
  return <div className={className}>{body}</div>;
}

export function Var({ value }: { value: string }) {
  const trimmed = value.trim();
  const negative = trimmed.startsWith("-") || trimmed.startsWith("−");
  const flat = trimmed === "0%" || trimmed === "0,0%" || trimmed === "0 p.p." || trimmed === "0";
  return (
    <span
      className={cn(
        "font-semibold tabular",
        negative ? "text-copper" : flat ? "text-muted" : "text-green",
      )}
    >
      {value}
    </span>
  );
}

export type Column = {
  key: string;
  label: string;
  align?: "left" | "right";
};

function emphasisRow(row: Record<string, ReactNode>, columns: Column[]) {
  const first = String(row[columns[0]?.key ?? ""] ?? "");
  return /^(total|brasil|união|brazil|federal government)/i.test(first);
}

export function DataTable({
  caption,
  columns,
  rows,
  source,
  note,
}: {
  caption: string;
  columns: Column[];
  rows: Record<string, ReactNode>[];
  source: string;
  note?: string;
}) {
  const table = (
    <div className="hidden overflow-x-auto md:block">
      <table className="w-full min-w-[36rem] border-collapse text-sm">
        <thead>
          <tr className="bg-accent text-accent-fg">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cn(
                  "px-3 py-2 font-semibold whitespace-nowrap",
                  column.align === "right" ? "text-right" : "text-left",
                )}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const emphasis = emphasisRow(row, columns);
            return (
              <tr
                key={index}
                className={cn(
                  "border-t border-line",
                  emphasis ? "bg-accent-soft font-semibold" : index % 2 === 1 ? "bg-paper/60" : "bg-card",
                )}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      "px-3 py-2 align-top whitespace-nowrap",
                      column.align === "right" ? "text-right tabular" : "text-left",
                    )}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-card">
      <figcaption className="border-b border-line px-4 py-3 text-sm font-semibold text-ink">
        {caption}
      </figcaption>
      <ul className="md:hidden">
        {rows.map((row, index) => {
          const [lead, ...rest] = columns;
          const emphasis = emphasisRow(row, columns);
          return (
            <li
              key={index}
              className={cn("border-t border-line px-4 py-3", emphasis ? "bg-accent-soft" : index % 2 === 1 ? "bg-paper/60" : "bg-card")}
            >
              <p className="text-sm font-semibold text-ink">{lead ? row[lead.key] : null}</p>
              <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-2">
                {rest.map((column) => (
                  <div key={column.key} className="min-w-0">
                    <dt className="text-xs leading-snug text-muted">{column.label}</dt>
                    <dd className="text-sm font-medium break-words text-ink tabular">{row[column.key]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          );
        })}
      </ul>
      {table}
      <figcaption className="space-y-1 border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">
        <p>{source}</p>
        {note ? <p>{note}</p> : null}
      </figcaption>
    </figure>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="border-l-4 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed text-ink">
      {children}
    </aside>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="max-w-3xl text-sm leading-relaxed text-muted">{children}</p>;
}

export function ChartFrame({
  title,
  source,
  note,
  children,
}: {
  title: string;
  source: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <figure className="rounded-lg border border-line bg-card p-4">
      <figcaption className="mb-3 text-sm font-semibold text-ink">{title}</figcaption>
      {children}
      <figcaption className="mt-3 space-y-1 text-xs leading-relaxed text-muted">
        <p>{source}</p>
        {note ? <p>{note}</p> : null}
      </figcaption>
    </figure>
  );
}
