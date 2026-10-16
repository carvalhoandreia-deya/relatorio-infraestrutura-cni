import { useEffect } from "react";
import { X } from "lucide-react";
import type { Locale } from "./locale";
import { useLocale } from "./locale";

type Term = { termo: string; uso: string };

export const glossary: Record<Locale, { title: string; close: string; note: string; terms: Term[] }> = {
  pt: {
    title: "Glossário",
    close: "Fechar glossário",
    note: "Definições curtas para ler os números. Não substituem o conceito jurídico.",
    terms: [
      { termo: "Dotação", uso: "Valor que o orçamento autoriza gastar. Ainda não é dinheiro em caixa." },
      { termo: "Empenho", uso: "Reserva da dotação para um contrato. Ainda não é entrega nem pagamento." },
      { termo: "Liquidação", uso: "Reconhecimento de que o bem ou o serviço foi entregue." },
      { termo: "Restos a pagar (RAP)", uso: "Contas de anos anteriores que ainda não foram pagas." },
      { termo: "GW médio", uso: "Média da eletricidade gerada no mês, não um pico. 1 GW = 1.000 MW." },
      { termo: "GWh", uso: "Energia acumulada. Nos reservatórios, é o quanto ainda podem gerar." },
      { termo: "PLD", uso: "Preço da energia no mercado de curto prazo, em R$ por MWh. Não é a conta de luz." },
      { termo: "DEC e FEC", uso: "Tempo e número de vezes em que a energia faltou. No exterior, os nomes próximos são SAIDI e SAIFI." },
      { termo: "bep", uso: "Barril equivalente de petróleo. 1 bep equivale a 0,16 m³." },
      { termo: "TUP", uso: "Terminal portuário de uso privado. Não é um porto público." },
    ],
  },
  en: {
    title: "Glossary",
    close: "Close glossary",
    note: "Short definitions for the figures. They do not replace the local legal concept.",
    terms: [
      { termo: "Dotação", uso: "Appropriation — authorized budget allocation, not cash on hand." },
      { termo: "Empenho", uso: "Commitment — reservation of the appropriation. Not yet liquidation or payment." },
      { termo: "Liquidação", uso: "Liquidation — verification that the good or service was delivered." },
      { termo: "Restos a pagar (RAP)", uso: "Carry-over payables — prior-year commitments not yet paid." },
      { termo: "GW médio", uso: "Average GW — mean electric power over the month, not a peak. 1 GW = 1,000 MW." },
      { termo: "GWh", uso: "Accumulated energy. For reservoirs, what they could still generate." },
      { termo: "PLD", uso: "Differences Settlement Price — short-term wholesale power price, in R$ per MWh. Not the retail tariff." },
      { termo: "DEC e FEC", uso: "Interruption duration and frequency. The nearest international names are SAIDI and SAIFI; ANEEL’s rule is not identical." },
      { termo: "bep", uso: "Barrel of oil equivalent (boe). 1 bep equals 0,16 m³. The report keeps the token bep." },
      { termo: "TUP", uso: "Private-use terminal. Not an organized public port." },
    ],
  },
};

export function GlossaryPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { locale } = useLocale();
  const copy = glossary[locale];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button type="button" className="absolute inset-0 bg-scrim/40" aria-label={copy.close} onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="glossario-titulo"
        className="relative z-10 m-3 flex max-h-[min(40rem,calc(100dvh-2rem))] w-full max-w-lg flex-col overflow-hidden rounded-lg border border-line bg-card text-ink shadow-sm"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <h2 id="glossario-titulo" className="font-serif text-xl text-ink">
            {copy.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.close}
            className="inline-flex size-11 items-center justify-center rounded-md text-ink"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <dl>
            {copy.terms.map((term) => (
              <div key={term.termo} className="grid gap-1 border-b border-line px-4 py-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
                <dt className="text-sm font-semibold text-ink">{term.termo}</dt>
                <dd className="text-sm leading-relaxed text-muted">{term.uso}</dd>
              </div>
            ))}
          </dl>
          <p className="px-4 py-3 text-xs leading-relaxed text-muted">{copy.note}</p>
        </div>
      </div>
    </div>
  );
}
