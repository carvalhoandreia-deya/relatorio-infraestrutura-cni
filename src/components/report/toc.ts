import type { Locale } from "./locale";

export type TocItem = {
  id: string;
  label: string;
  chapter?: boolean;
  search: string;
};

type TocSeed = {
  id: string;
  chapter?: boolean;
  pt: { label: string; search: string };
  en: { label: string; search: string };
};

const SEEDS: TocSeed[] = [
  {
    id: "sumario",
    chapter: true,
    pt: { label: "Sumário", search: "capa destaques números do mês" },
    en: { label: "Summary", search: "cover highlights month figures" },
  },
  {
    id: "investimentos",
    chapter: true,
    pt: { label: "1. Investimento", search: "orçamento ogu siga brasil dotação investimentos" },
    en: { label: "1. Investment", search: "budget appropriation siga brasil federal investment" },
  },
  {
    id: "ogu",
    pt: { label: "1.1 Orçamento Geral e de Investimentos da União", search: "órgãos superiores empenho liquidação pagamento restos" },
    en: { label: "1.1 Overall and investment budget of the Federal government", search: "ministries commitment liquidation payment carry-over" },
  },
  {
    id: "transportes-orcamento",
    pt: { label: "1.2 Orçamento Geral e de Investimentos do Ministério dos Transportes e do Ministério de Portos e Aeroportos", search: "modal rodoviário ferroviário aquaviário aeroportuário restos a pagar" },
    en: { label: "1.2 Overall and investment budget of the Ministry of Transport and the Ministry of Ports and Airports", search: "roads rail waterways airports carry-over payables" },
  },
  {
    id: "energia",
    chapter: true,
    pt: { label: "2. Energia Elétrica", search: "ccee aneel ons epe pld dec fec" },
    en: { label: "2. Electric power", search: "ccee aneel ons epe pld dec fec saidi" },
  },
  {
    id: "geracao",
    pt: { label: "2.1 Geração de Energia Elétrica (CCEE)", search: "hidráulica térmica eólica solar fotovoltaica" },
    en: { label: "2.1 Electric power generation (CCEE)", search: "hydro thermal wind solar photovoltaic" },
  },
  {
    id: "expansao",
    pt: { label: "2.2 Expansão da Capacidade de Geração de Energia Elétrica (ANEEL)", search: "usinas ufv eol pch biomassa aneel" },
    en: { label: "2.2 Expansion of electric power generation capacity (ANEEL)", search: "plants solar wind small hydro biomass aneel" },
  },
  {
    id: "previsao",
    pt: { label: "2.2.1 Previsão da Expansão da Capacidade de Geração de Energia Elétrica", search: "cenário conservador otimista" },
    en: { label: "2.2.1 Forecast of the expansion of electric power generation capacity", search: "conservative optimistic scenario" },
  },
  {
    id: "gd",
    pt: { label: "2.2.2 Expansão da Geração Distribuída", search: "potência instalada industrial aneel" },
    en: { label: "2.2.2 Expansion of distributed generation", search: "installed capacity industrial aneel" },
  },
  {
    id: "transmissao",
    pt: { label: "2.3 Expansão das Linhas de Transmissão (MME)", search: "mme km 500 kv" },
    en: { label: "2.3 Expansion of transmission lines (MME)", search: "mme km 500 kv" },
  },
  {
    id: "reservatorios",
    pt: { label: "2.4 Energia Armazenada Verificada (ONS)", search: "ons reservatórios subsistemas sul nordeste" },
    en: { label: "2.4 Verified stored energy (ONS)", search: "ons reservoirs subsystems south northeast" },
  },
  {
    id: "consumo-ee",
    pt: { label: "2.5 Consumo de Energia Elétrica (EPE)", search: "epe cativo livre industrial" },
    en: { label: "2.5 Electric power consumption (EPE)", search: "epe captive free market industrial" },
  },
  {
    id: "pld",
    pt: { label: "2.6 Preço de Liquidação das Diferenças (CCEE)", search: "preço de liquidação das diferenças submercado" },
    en: { label: "2.6 Differences Settlement Price (CCEE)", search: "differences settlement price spot submarket" },
  },
  {
    id: "continuidade",
    pt: { label: "2.7 Indicadores de continuidade do fornecimento de energia elétrica.", search: "aneel interrupção dec fec muxenergia" },
    en: { label: "2.7 Electricity supply continuity indicators.", search: "aneel saidi saifi interruption distributors muxenergia" },
  },
  {
    id: "petroleo",
    chapter: true,
    pt: { label: "3. Petróleo", search: "anp produção exportação importação" },
    en: { label: "3. Oil", search: "anp output exports imports boe" },
  },
  {
    id: "petroleo-producao",
    pt: { label: "3.1 Produção, Comércio Exterior e Processamento de Petróleo (ANP)", search: "bep api campos marítimos refinarias" },
    en: { label: "3.1 Oil production, foreign trade and processing (ANP)", search: "boe api offshore fields refineries" },
  },
  {
    id: "derivados",
    pt: { label: "3.2 Produção e Comércio Exterior de Combustíveis Derivados de Petróleo (ANP)", search: "diesel gasolina derivados dependência" },
    en: { label: "3.2 Production and foreign trade of petroleum-derived fuels (ANP)", search: "diesel gasoline petroleum products dependence" },
  },
  {
    id: "balanca",
    pt: { label: "3.3 Balança Comercial de Petróleo e Derivados (ANP)", search: "fob saldo exportação" },
    en: { label: "3.3 Trade balance of oil and petroleum products (ANP)", search: "fob surplus exports" },
  },
  {
    id: "biocombustiveis",
    chapter: true,
    pt: { label: "4. Biocombustíveis", search: "biodiesel etanol açúcar mapa anp" },
    en: { label: "4. Biofuels", search: "biodiesel ethanol sugar mapa anp" },
  },
  {
    id: "biodiesel",
    pt: { label: "4.1 Produção de Biodiesel (ANP)", search: "metro cúbico diesel" },
    en: { label: "4.1 Biodiesel production (ANP)", search: "cubic meter diesel" },
  },
  {
    id: "alcool",
    pt: { label: "4.2 Álcool", search: "hidratado anidro safra gasolina c" },
    en: { label: "4.2 Alcohol", search: "hydrous anhydrous crop gasoline c" },
  },
  {
    id: "gas",
    chapter: true,
    pt: { label: "5. Gás Natural", search: "mme bolívia gnl henry hub" },
    en: { label: "5. Natural gas", search: "mme bolivia lng henry hub" },
  },
  {
    id: "gas-oferta",
    pt: { label: "5.1 Produção e Oferta de Gás Natural (MME)", search: "reinjeção bolívia gnl oferta" },
    en: { label: "5.1 Natural gas production and supply (MME)", search: "reinjection bolivia lng supply" },
  },
  {
    id: "gas-consumo",
    pt: { label: "5.2 Consumo de Gás Natural (MME)", search: "industrial geração elétrica" },
    en: { label: "5.2 Natural gas consumption (MME)", search: "industrial power generation" },
  },
  {
    id: "gas-preco",
    pt: { label: "5.3 Preço do Gás Natural (MME e EIA)", search: "mmbtu eia henry hub" },
    en: { label: "5.3 Natural gas price (MME and EIA)", search: "mmbtu eia henry hub" },
  },
  {
    id: "telecom",
    chapter: true,
    pt: { label: "6. Telecomunicações", search: "anatel 5g 4g fibra" },
    en: { label: "6. Telecommunications", search: "anatel 5g 4g fiber" },
  },
  {
    id: "movel",
    pt: { label: "6.1 Serviços Contratados Ativos de Internet Móvel (ANATEL)", search: "acessos 2g 3g 4g 5g" },
    en: { label: "6.1 Active contracted mobile internet services (ANATEL)", search: "accesses 2g 3g 4g 5g" },
  },
  {
    id: "fixa",
    pt: { label: "6.2 Acessos em Internet Fixa (ANATEL)", search: "mbps fibra ótica" },
    en: { label: "6.2 Fixed internet accesses (ANATEL)", search: "mbps fiber optic" },
  },
  {
    id: "transportes",
    chapter: true,
    pt: { label: "7. Transportes", search: "antaq anac antt abcr prf portos" },
    en: { label: "7. Transport", search: "antaq anac antt abcr prf ports" },
  },
  {
    id: "portos",
    pt: { label: "7.1 Portos Selecionados e Terminais de Uso Privativo (ANTAQ)", search: "contêiner teu cabotagem granel" },
    en: { label: "7.1 Selected ports and private-use terminals (ANTAQ)", search: "container teu cabotage bulk private terminal" },
  },
  {
    id: "terminais",
    pt: { label: "7.1.2 Capacidade utilizada nos terminais de contêineres", search: "suape atrasos omissões santos btp cancelamentos" },
    en: { label: "7.1.2 Capacity used at container terminals", search: "suape delays omissions santos btp cancellations" },
  },
  {
    id: "aereo",
    pt: { label: "7.2 Transporte Aéreo (ANAC)", search: "passageiros carga anac" },
    en: { label: "7.2 Air transport (ANAC)", search: "passengers cargo anac" },
  },
  {
    id: "ferro",
    pt: { label: "7.3 Cargas Ferroviárias (ANTT)", search: "minério potássio antt tu" },
    en: { label: "7.3 Rail freight (ANTT)", search: "iron ore potassium antt" },
  },
  {
    id: "pedagio",
    pt: { label: "7.4 Tráfego Rodoviário Pedagiado (ABCR)", search: "abcr veículos leves pesados são paulo" },
    en: { label: "7.4 Tolled road traffic (ABCR)", search: "abcr light heavy vehicles sao paulo" },
  },
  {
    id: "acidentes",
    pt: { label: "7.5 Acidentes em Rodovias Federais (PRF)", search: "prf br-101 rodovias federais" },
    en: { label: "7.5 Accidents on federal highways (PRF)", search: "prf br-101 federal highways" },
  },
  {
    id: "combustiveis",
    pt: { label: "7.6 Preço ao Consumidor da Gasolina Comum e Óleo Diesel (ANP)", search: "preço ao consumidor tributos margem anp" },
    en: { label: "7.6 Consumer price of regular gasoline and diesel oil (ANP)", search: "retail price taxes margin anp" },
  },
  {
    id: "expediente",
    pt: { label: "Expediente", search: "cni equipe fonte sac" },
    en: { label: "Credits", search: "cni team source masthead" },
  },
];

export function tocFor(locale: Locale): TocItem[] {
  return SEEDS.map((item) => ({
    id: item.id,
    chapter: item.chapter,
    label: item[locale].label,
    search: item[locale].search,
  }));
}

export function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}
