import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/report/shell";
import { Hero as HeroPt, Investimentos as InvestimentosPt } from "@/components/report/ch-front";
import { Energia as EnergiaPt } from "@/components/report/ch-energia";
import { PetroleoBioGasTelecom as MidPt } from "@/components/report/ch-mid";
import { Transportes as TransportesPt } from "@/components/report/ch-transportes";
import { Hero as HeroEn, Investimentos as InvestimentosEn } from "@/components/report/en/ch-front";
import { Energia as EnergiaEn } from "@/components/report/en/ch-energia";
import { PetroleoBioGasTelecom as MidEn } from "@/components/report/en/ch-mid";
import { Transportes as TransportesEn } from "@/components/report/en/ch-transportes";
import { useLocale } from "@/components/report/locale";
import { EditionProvider } from "@/components/report/edition";
import { DigitalEdition } from "@/components/report/digital-edition";
import { editionById, type EditionId } from "@/components/report/editions";

const ids: EditionId[] = [
  "2026-01",
  "2026-02",
  "2026-03",
  "2026-04",
  "2026-05",
  "2026-06",
  "2026-07",
  "2026-08",
  "2026-09",
];

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => {
    const raw = typeof search.edicao === "string" ? search.edicao : "2026-09";
    const edicao = ids.includes(raw as EditionId) ? (raw as EditionId) : "2026-09";
    return { edicao };
  },
  component: Home,
});

function Home() {
  const { locale } = useLocale();
  const { edicao } = Route.useSearch();
  const edition = editionById(edicao);
  const english = locale === "en" && edition.full;
  const Hero = english ? HeroEn : HeroPt;
  const Investimentos = english ? InvestimentosEn : InvestimentosPt;
  const Energia = english ? EnergiaEn : EnergiaPt;
  const Mid = english ? MidEn : MidPt;
  const Transportes = english ? TransportesEn : TransportesPt;

  return (
    <EditionProvider>
      <Shell>
        {edition.full ? (
          <>
            <Hero />
            <Investimentos />
            <Energia />
            <Mid />
            <Transportes />
          </>
        ) : (
          <DigitalEdition />
        )}
      </Shell>
    </EditionProvider>
  );
}
