// Fora da página por enquanto. O boletim volta quando a edição mensal for modernizada.
import { Callout, DataTable, Note, Prose, Section } from "./ui";
import { useLocale, type Locale } from "./locale";
import { glossary } from "./glossary";

type Line = {
  indicador: string;
  leitura: string;
  variacao: string;
  janela: string;
  fonte: string;
};

type Brief = {
  kicker: string;
  title: string;
  lede: string;
  agentKicker: string;
  agentTitle: string;
  agentBody: string;
  reading: string;
  gap: string;
  note: string;
  cadenceTitle: string;
  cadence: string[];
  next: string;
  budgetCaption: string;
  energyCaption: string;
  realCaption: string;
  budgetSource: string;
  cols: { key: keyof Line; label: string }[];
  budget: Line[];
  energy: Line[];
  real: Line[];
};

const columns = {
  pt: [
    { key: "indicador" as const, label: "Indicador" },
    { key: "leitura" as const, label: "Leitura" },
    { key: "variacao" as const, label: "Variação publicada" },
    { key: "janela" as const, label: "Janela" },
    { key: "fonte" as const, label: "Fonte" },
  ],
  en: [
    { key: "indicador" as const, label: "Indicator" },
    { key: "leitura" as const, label: "Reading" },
    { key: "variacao" as const, label: "Published change" },
    { key: "janela" as const, label: "Window" },
    { key: "fonte" as const, label: "Source" },
  ],
};

const brief: Record<Locale, Brief> = {
  pt: {
    kicker: "Desempenho · edição automática",
    title: "Boletim de setembro de 2026",
    lede: "Recompilado a cada relatório, no mesmo roteiro de indicadores, para leitura de mercado. Os números são os do Relatório de Infraestrutura; a mesa só fixa a terminologia e a janela de cada série.",
    agentKicker: "Mesa de tradução",
    agentTitle: "Agente de economia, infraestrutura e contexto local",
    agentBody:
      "A versão em inglês é preparada por um agente de tradução especializado em economia e em infraestrutura, com o vocabulário do mercado financeiro global e o desenho institucional brasileiro — empenho não é desembolso, PLD não é tarifa ao consumidor, TUP não é porto público. O botão English no topo abre essa edição. Nenhum número do relatório é recalculado.",
    reading:
      "O ponto de atenção orçamentária é o vão entre empenho e liquidação: 63,5% da dotação de investimentos já empenhados até agosto, e R$ 24 bilhões liquidados. Na energia, a hidráulica acima de 30 MW foi 56% da geração. No petróleo, o saldo comercial de junho foi de US$ 5.912 milhões, ante US$ 2.672 milhões em junho de 2025.",
    gap: "Empenho de 63,5% não é o mesmo que liquidação. A liquidação foi de R$ 24 bilhões e o pagamento do exercício de R$ 22,6 bilhões. O total pago, com restos a pagar, chegou a R$ 46,1 bilhões.",
    note: "Alta e queda não são juízo de valor. Em acidentes e em preço, a variação positiva não é favorável. O gás natural deste relatório fecha em setembro de 2025 — a série do MME vem com defasagem e não deve ser lida como dado de 2026.",
    cadenceTitle: "Roteiro que a edição mensal recompila",
    cadence: [
      "Execução do investimento federal — Siga Brasil — até agosto de 2026.",
      "Geração, armazenagem, consumo, PLD e continuidade — CCEE, ONS, EPE e ANEEL — junho de 2026.",
      "Petróleo, derivados e biocombustíveis — ANP — junho de 2026.",
      "Gás natural — MME — setembro de 2025, última competência do relatório.",
      "Telecomunicações — ANATEL — junho de 2026.",
      "Portos e TUPs — ANTAQ — fevereiro de 2026.",
      "Pedágio, ferrovias e acidentes — ABCR, ANTT e PRF — junho de 2026. Gasolina e diesel ao consumidor — ANP — abril de 2026.",
    ],
    next: "A próxima compilação sai com o relatório de outubro, no mesmo roteiro. Esta edição usa dados disponíveis até 17 de setembro de 2026.",
    budgetCaption: "Execução do investimento da União — OGU 2026",
    budgetSource: "Siga Brasil, via CNI. Até agosto de 2026.",
    energyCaption: "Sistema elétrico e gás",
    realCaption: "Petróleo, logística e redes",
    cols: columns.pt,
    budget: [
      { indicador: "Dotação de investimentos", leitura: "R$ 84,7 bi", variacao: "1,3% do orçamento de R$ 6,5 tri", janela: "2026", fonte: "Siga Brasil" },
      { indicador: "Empenho / dotação", leitura: "63,5%", variacao: "R$ 53,8 bi empenhados", janela: "até agosto de 2026", fonte: "Siga Brasil" },
      { indicador: "Liquidação", leitura: "R$ 24 bi", variacao: "Pagamento do exercício: R$ 22,6 bi", janela: "até agosto de 2026", fonte: "Siga Brasil" },
      { indicador: "Total pago, com RAP", leitura: "R$ 46,1 bi", variacao: "Inclui restos a pagar pagos", janela: "até agosto de 2026", fonte: "Siga Brasil" },
      { indicador: "Empenho de Transportes", leitura: "84,5%", variacao: "R$ 11,3 bi de R$ 13,4 bi. Liquidado: R$ 6,9 bi", janela: "até agosto de 2026", fonte: "Siga Brasil" },
    ],
    energy: [
      { indicador: "Geração no SIN", leitura: "71 GW médios", variacao: "+3% ante junho de 2025", janela: "junho de 2026", fonte: "CCEE" },
      { indicador: "PLD Sudeste/Centro-Oeste", leitura: "R$ 188/MWh", variacao: "−20% ante junho de 2025", janela: "junho de 2026", fonte: "CCEE" },
      { indicador: "Energia armazenada", leitura: "151.411 GWh", variacao: "+2%; Sul em 62% (−22,0 p.p.)", janela: "junho de 2026", fonte: "ONS" },
      { indicador: "Oferta de gás natural", leitura: "76,8 mi m³/dia", variacao: "−10%; GNL −71%", janela: "setembro de 2025", fonte: "MME" },
    ],
    real: [
      { indicador: "Produção de petróleo", leitura: "134 mi bep", variacao: "+19% ante junho de 2025", janela: "junho de 2026", fonte: "ANP" },
      { indicador: "Saldo petróleo e derivados", leitura: "US$ 5.912 mi", variacao: "US$ 2.672 mi em junho de 2025", janela: "junho de 2026", fonte: "ANP" },
      { indicador: "Cargas portuárias", leitura: "101 mi t", variacao: "+4%; TUPs com 67%", janela: "fevereiro de 2026", fonte: "ANTAQ" },
      { indicador: "Acessos 5G", leitura: "24% da base", variacao: "+37% ante junho de 2025", janela: "junho de 2026", fonte: "ANATEL" },
      { indicador: "Veículos pedagiados", leitura: "174 mi", variacao: "+17%; pesados +34%", janela: "junho de 2026", fonte: "ABCR" },
      { indicador: "Acidentes em rodovias federais", leitura: "6.184", variacao: "+1% ante junho de 2025", janela: "junho de 2026", fonte: "PRF" },
    ],
  },
  en: {
    kicker: "Performance · automatic edition",
    title: "September 2026 brief",
    lede: "Recompiled with every report, on the same indicator route, for a cross-border read. Figures are the CNI Infrastructure Report’s; the desk only locks terminology and the window of each series.",
    agentKicker: "Translation desk",
    agentTitle: "Agent for economics, infrastructure and local context",
    agentBody:
      "The English edition is prepared by a translation agent specialized in economics and infrastructure, using global financial-market vocabulary and Brazilian institutional design — a commitment is not a disbursement, the PLD is not a retail tariff, and a TUP is not a public port. The English button in the header opens that edition. No report figure is recalculated.",
    reading:
      "The budget point that matters offshore is the gap between commitment and liquidation: 63,5% of the investment appropriation was committed through August, and R$ 24 billion was liquidated. In power, hydro above 30 MW is 56% of generation. In oil, the June trade balance was US$ 5.912 million, from US$ 2.672 million in June 2025.",
    gap: "A 63,5% commitment ratio is not the same as liquidation. Liquidation was R$ 24 billion and in-year payment was R$ 22,6 billion. Total paid, including carry-over payables, reached R$ 46,1 billion.",
    note: "An increase is not a judgment. For accidents and prices, a positive change is not favorable. Natural gas in this report closes in September 2025 — the MME series is lagged and must not be read as a 2026 print.",
    cadenceTitle: "Route the monthly edition recompiles",
    cadence: [
      "Federal investment execution — Siga Brasil — through August 2026.",
      "Generation, storage, consumption, PLD and continuity — CCEE, ONS, EPE and ANEEL — June 2026.",
      "Oil, products and biofuels — ANP — June 2026.",
      "Natural gas — MME — September 2025, the latest month in the report.",
      "Telecommunications — ANATEL — June 2026.",
      "Ports and private-use terminals — ANTAQ — February 2026.",
      "Tolls, rail and accidents — ABCR, ANTT and PRF — June 2026. Retail gasoline and diesel — ANP — April 2026.",
    ],
    next: "The next compilation ships with the October report, on the same route. This edition uses data available through 17 September 2026.",
    budgetCaption: "Federal investment execution — 2026 budget",
    budgetSource: "Siga Brasil, via CNI. Through August 2026.",
    energyCaption: "Power system and natural gas",
    realCaption: "Oil, logistics and networks",
    cols: columns.en,
    budget: [
      { indicador: "Investment appropriation", leitura: "R$ 84.7 billion", variacao: "1.3% of the R$ 6.5 trillion budget", janela: "2026", fonte: "Siga Brasil" },
      { indicador: "Commitment / appropriation", leitura: "63.5%", variacao: "R$ 53.8 billion committed", janela: "through August 2026", fonte: "Siga Brasil" },
      { indicador: "Liquidation", leitura: "R$ 24 billion", variacao: "In-year payments: R$ 22,6 billion", janela: "through August 2026", fonte: "Siga Brasil" },
      { indicador: "Total paid, with carry-over", leitura: "R$ 46,1 billion", variacao: "Includes paid carry-over payables", janela: "through August 2026", fonte: "Siga Brasil" },
      { indicador: "Transport ministry commitment", leitura: "84,5%", variacao: "R$ 11,3 billion of R$ 13,4 billion. Liquidated: R$ 6,9 billion", janela: "through August 2026", fonte: "Siga Brasil" },
    ],
    energy: [
      { indicador: "SIN generation", leitura: "71 average GW", variacao: "+3% vs June 2025", janela: "June 2026", fonte: "CCEE" },
      { indicador: "PLD Southeast/Central-West", leitura: "R$ 188/MWh", variacao: "−20% vs June 2025", janela: "June 2026", fonte: "CCEE" },
      { indicador: "Stored energy", leitura: "151,411 GWh", variacao: "+2%; South at 62% (−22.0 p.p.)", janela: "June 2026", fonte: "ONS" },
      { indicador: "Natural gas supply", leitura: "76.8 million m³/day", variacao: "−10%; LNG −71%", janela: "September 2025", fonte: "MME" },
    ],
    real: [
      { indicador: "Oil output", leitura: "134 million bep", variacao: "+19% vs June 2025", janela: "June 2026", fonte: "ANP" },
      { indicador: "Oil and products balance", leitura: "US$ 5.912 million", variacao: "US$ 2.672 million in June 2025", janela: "June 2026", fonte: "ANP" },
      { indicador: "Port throughput", leitura: "101 million t", variacao: "+4%; TUPs at 67%", janela: "February 2026", fonte: "ANTAQ" },
      { indicador: "5G accesses", leitura: "24% of the base", variacao: "+37% vs June 2025", janela: "June 2026", fonte: "ANATEL" },
      { indicador: "Toll vehicles", leitura: "174 million", variacao: "+17%; heavy +34%", janela: "June 2026", fonte: "ABCR" },
      { indicador: "Federal highway accidents", leitura: "6,184", variacao: "+1% vs June 2025", janela: "June 2026", fonte: "PRF" },
    ],
  },
};

export function Performance() {
  const { locale } = useLocale();
  const copy = brief[locale];
  return (
    <Section id="desempenho" kicker={copy.kicker} title={copy.title} lede={copy.lede}>
      <article className="max-w-3xl rounded-lg border border-line bg-card p-4">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">{copy.agentKicker}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-ink">{copy.agentTitle}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink">{copy.agentBody}</p>
      </article>
      <Prose>
        <p>{copy.reading}</p>
      </Prose>
      <DataTable
        caption={copy.budgetCaption}
        columns={copy.cols}
        rows={copy.budget}
        source={copy.budgetSource}
      />
      <Callout>{copy.gap}</Callout>
      <DataTable caption={copy.energyCaption} columns={copy.cols} rows={copy.energy} source="CCEE, ONS, MME, via CNI." />
      <DataTable caption={copy.realCaption} columns={copy.cols} rows={copy.real} source="ANP, ANTAQ, ANATEL, ABCR, PRF, via CNI." />
      <Note>{copy.note}</Note>
      <div className="overflow-hidden rounded-lg border border-line bg-card">
        <p className="border-b border-line px-4 py-3 text-sm font-semibold text-ink">{glossary[locale].title}</p>
        <dl>
          {glossary[locale].terms.map((term) => (
            <div key={term.termo} className="grid gap-1 border-t border-line px-4 py-3 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-4">
              <dt className="text-sm font-semibold text-ink">{term.termo}</dt>
              <dd className="text-sm leading-relaxed text-muted">{term.uso}</dd>
            </div>
          ))}
        </dl>
        <p className="border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">{glossary[locale].note}</p>
      </div>
      <div className="max-w-3xl">
        <h3 className="font-serif text-2xl leading-tight text-ink">{copy.cadenceTitle}</h3>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
          {copy.cadence.map((step) => (
            <li key={step} className="border-l-4 border-accent pl-3">
              {step}
            </li>
          ))}
        </ul>
      </div>
      <Note>{copy.next}</Note>
    </Section>
  );
}
