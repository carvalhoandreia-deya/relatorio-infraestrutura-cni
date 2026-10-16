import { useState } from "react";
import { ChartFrame, DataTable, Var } from "./ui";
import { Donut, GroupedBars, RankList, StackedBars } from "./charts";
import { useLocale } from "./locale";

const A = "var(--color-series-a)";
const B = "var(--color-series-b)";
const C = "var(--color-series-c)";
const D = "var(--color-series-d)";
const E = "var(--color-series-e)";

function useT() {
  const { locale } = useLocale();
  return (pt: string, en: string) => (locale === "en" ? en : pt);
}

export function OguVisuals() {
  const t = useT();
  const rows: [string, string, string, string, string, string, string, string, string, string, string, string][] = [
    ["Ministério dos Transportes", "Ministry of Transport", "13.415", "11.340", "84,5%", "6.934", "51,7%", "6.283", "46,8%", "2.959", "9.242", "1.517"],
    ["Ministério da Saúde", "Ministry of Health", "14.101", "7.501", "53,2%", "3.636", "25,8%", "3.434", "24,3%", "4.010", "7.443", "9.389"],
    ["Ministério da Defesa", "Ministry of Defense", "10.321", "5.730", "55,5%", "2.339", "22,7%", "2.170", "21,0%", "2.328", "4.498", "2.646"],
    ["Ministério da Fazenda", "Ministry of Finance", "0,648", "0,182", "28,2%", "0,019", "3,0%", "0,019", "2,9%", "0,089", "0,108", "0,263"],
    ["Ministério da Educação", "Ministry of Education", "8.356", "4.782", "57,2%", "1.614", "19,3%", "1.573", "18,8%", "3.210", "4.782", "5.849"],
    ["Ministério das Cidades", "Ministry of Cities", "8.398", "4.595", "54,7%", "1.817", "21,6%", "1.809", "21,5%", "2.202", "4.011", "7.484"],
    ["Ministério da Integração e do Desenvolvimento Regional", "Ministry of Integration and Regional Development", "8.690", "5.314", "61,1%", "0,959", "11,0%", "0,895", "10,3%", "3.483", "4.378", "11.881"],
    ["Ministério da Justiça e Segurança Pública", "Ministry of Justice and Public Security", "3.310", "2.218", "67,0%", "0,446", "13,5%", "0,430", "13,0%", "0,950", "1.381", "1.608"],
    ["Ministério da Ciência, Tecnologia e Inovação", "Ministry of Science, Technology and Innovation", "2,748", "1,946", "70,8%", "0,891", "32,4%", "0,870", "31,6%", "0,710", "1,579", "0,196"],
    ["Ministério da Agricultura e Pecuária", "Ministry of Agriculture and Livestock", "1,424", "0,844", "59,3%", "0,345", "24,3%", "0,156", "10,9%", "1,154", "1,309", "2,152"],
    ["Ministério de Portos e Aeroportos", "Ministry of Ports and Airports", "0,836", "0,471", "56,3%", "0,136", "16,3%", "0,122", "14,6%", "0,171", "0,293", "0,238"],
    ["Ministério do Esporte", "Ministry of Sport", "0,580", "0,486", "83,7%", "0,035", "6,0%", "0,031", "5,3%", "0,348", "0,379", "1,302"],
    ["Outros*", "Other*", "11.890", "8.365", "70,4%", "4.850", "40,8%", "4.828", "40,6%", "1.912", "6.740", "4.262"],
    ["Total", "Total", "84.715", "53.775", "63,5%", "24.021", "28,4%", "22.618", "26,7%", "23.525", "46.143", "48.787"],
  ];
  return (
    <DataTable
        caption={t(
          "Tabela 1 — Execução orçamentária da União, investimentos por órgão superior (R$ milhões)",
          "Table 1 — Federal budget execution, investment by parent body (R$ million)",
        )}
        source={t("Fonte: elaboração própria com dados do Siga Brasil.", "Source: prepared by the authors with data from Siga Brasil.")}
        note={t("Valores menores que R$ 1 milhão não estão descritos na tabela.", "Amounts below R$ 1 million are not described in the table.")}
        columns={[
          { key: "orgao", label: t("Órgão superior", "Parent body") },
          { key: "a", label: t("Dotação (a)", "Appropriation (a)"), align: "right" },
          { key: "b", label: t("Empenho (b)", "Commitment (b)"), align: "right" },
          { key: "ba", label: "b/a", align: "right" },
          { key: "c", label: t("Liquidação (c)", "Liquidation (c)"), align: "right" },
          { key: "ca", label: "c/a", align: "right" },
          { key: "d", label: t("Pagamento (d)", "Payment (d)"), align: "right" },
          { key: "da", label: "d/a", align: "right" },
          { key: "e", label: t("RAP pagos (e)", "RAP paid (e)"), align: "right" },
          { key: "f", label: t("Total pago", "Total paid"), align: "right" },
          { key: "rp", label: t("RP a pagar", "RAP to pay"), align: "right" },
        ]}
        rows={rows.map(([pt, en, a, b, ba, c, ca, d, da, e, f, rp]) => ({
          orgao: t(pt, en),
          a, b, ba, c, ca, d, da, e, f, rp,
        }))}
      />
  );
}

export function ModalidadeVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Investimentos por modalidade (R$ bilhões)", "Investment by mode (R$ billion)")}
        source={t("Elaboração própria com dados do Siga Brasil.", "Prepared by the authors with data from Siga Brasil.")}
        note={t(
          "Rodoviário R$ 11,6 bi; outros R$ 1,3 bi; aquaviário R$ 554 mi; ferroviário R$ 411 mi; aeroportuário R$ 259 mi.",
          "Roads R$ 11,6 billion; other R$ 1,3 billion; waterways R$ 554 million; rail R$ 411 million; airports R$ 259 million.",
        )}
      >
        <Donut
          data={[
            { name: t("Rodoviário 11,6", "Roads 11,6"), value: 11.6, fill: A },
            { name: t("Outros 1,3", "Other 1,3"), value: 1.3, fill: C },
            { name: t("Aquaviário 0,554", "Waterways 0,554"), value: 0.554, fill: B },
            { name: t("Ferroviário 0,411", "Rail 0,411"), value: 0.411, fill: D },
            { name: t("Aeroportuário 0,259", "Airports 0,259"), value: 0.259, fill: E },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t(
          "Tabela 2 — Execução por modalidade, Transportes e Portos e Aeroportos (R$ milhões)",
          "Table 2 — Execution by mode, Transport and Ports and Airports (R$ million)",
        )}
        source={t("Fonte: elaboração própria com dados do Siga Brasil.", "Source: prepared by the authors with data from Siga Brasil.")}
        note={t("Valores menores que R$ 1 milhão não estão descritos na tabela.", "Amounts below R$ 1 million are not described in the table.")}
        columns={[
          { key: "modo", label: t("Modalidade", "Mode") },
          { key: "a", label: t("Dotação", "Appropriation"), align: "right" },
          { key: "b", label: t("Empenho", "Commitment"), align: "right" },
          { key: "ba", label: "b/a", align: "right" },
          { key: "c", label: t("Liquidação", "Liquidation"), align: "right" },
          { key: "d", label: t("Pagamento", "Payment"), align: "right" },
          { key: "pago", label: t("Total pago", "Total paid"), align: "right" },
        ]}
        rows={[
          ["Aeroportuário", "Airports", "259", "102", "39%", "25", "25", "60"],
          ["Ferroviário", "Rail", "411", "104", "25%", "27", "18", "121"],
          ["Aquaviário", "Waterways", "554", "315", "57%", "72", "61", "150"],
          ["Rodoviário", "Roads", "11.585", "9.919", "86%", "5.930", "5.194", "7.755"],
          ["Outros", "Other", "1.286", "582", "45%", "381", "376", "589"],
          ["Total", "Total", "14.095", "11.022", "78%", "6.435", "5.674", "8.675"],
        ].map(([pt, en, a, b, ba, c, d, pago]) => ({ modo: t(pt, en), a, b, ba, c, d, pago }))}
      />
    </>
  );
}

export function RapVisuals() {
  const t = useT();
  const cols = [
    { key: "orgao", label: t("Órgão", "Body") },
    { key: "i", label: t("Inscritos", "Registered"), align: "right" as const },
    { key: "c", label: t("Cancelados", "Cancelled"), align: "right" as const },
    { key: "p", label: t("Pagos", "Paid"), align: "right" as const },
    { key: "a", label: t("A pagar", "To pay"), align: "right" as const },
  ];
  return (
    <div className="grid gap-6">
      <DataTable
        caption={t("Restos a pagar processados (R$ milhões)", "Processed carry-over payables (R$ million)")}
        source={t("Fonte: elaboração própria com dados do Siga Brasil.", "Source: prepared by the authors with data from Siga Brasil.")}
        note={t("Valores menores que R$ 1 milhão não estão descritos na tabela.", "Amounts below R$ 1 million are not described in the table.")}
        columns={cols}
        rows={[
          { orgao: t("Ministério dos Transportes", "Ministry of Transport"), i: "159", c: "0", p: "131", a: "29" },
          { orgao: t("Ministério de Portos e Aeroportos", "Ministry of Ports and Airports"), i: "1", c: "0", p: "1", a: "0" },
          { orgao: t("União", "Federal government"), i: "8.072", c: "153", p: "2.537", a: "5.382" },
        ]}
      />
      <DataTable
        caption={t("Restos a pagar não processados (R$ milhões)", "Unprocessed carry-over payables (R$ million)")}
        source={t("Fonte: elaboração própria com dados do Siga Brasil.", "Source: prepared by the authors with data from Siga Brasil.")}
        note={t("Valores menores que R$ 1 milhão não estão descritos na tabela.", "Amounts below R$ 1 million are not described in the table.")}
        columns={cols}
        rows={[
          { orgao: t("Ministério dos Transportes", "Ministry of Transport"), i: "4.404", c: "58", p: "2.745", a: "1.061" },
          { orgao: t("Ministério de Portos e Aeroportos", "Ministry of Ports and Airports"), i: "439", c: "25", p: "158", a: "247" },
          { orgao: t("União", "Federal government"), i: "70.458", c: "681", p: "20.122", a: "49.654" },
        ]}
      />
    </div>
  );
}

export function GeracaoVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Geração por fonte, junho contra junho (MW médio)", "Generation by source, June against June (average MW)")}
        source={t("Elaboração própria com dados da CCEE. Tabela 4.", "Prepared by the authors with data from CCEE. Table 4.")}
        note={t(
          "A soma dos percentuais pode ser diferente de 100% por arredondamento.",
          "Percentages may not sum to 100% because of rounding.",
        )}
      >
        <GroupedBars
          data={[
            { fonte: t("Hidráulica >30", "Hydro >30"), y2025: 38125, y2026: 39674 },
            { fonte: t("Eólica", "Wind"), y2025: 14239, y2026: 13065 },
            { fonte: t("Térmica", "Thermal"), y2025: 10265, y2026: 11105 },
            { fonte: t("Solar", "Solar"), y2025: 3139, y2026: 4068 },
            { fonte: "PCH/CGH", y2025: 2837, y2026: 2785 },
          ]}
          xKey="fonte"
          bars={[
            { key: "y2025", name: t("Junho 2025", "June 2025"), fill: D },
            { key: "y2026", name: t("Junho 2026", "June 2026"), fill: A },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 4 — Geração de energia por fonte (MW médio)", "Table 4 — Power generation by source (average MW)")}
        source={t("Fonte: elaboração própria com dados da CCEE.", "Source: prepared by the authors with data from CCEE.")}
        columns={[
          { key: "fonte", label: t("Fonte", "Source") },
          { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
          { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
          { key: "p", label: t("Participação", "Share"), align: "right" },
        ]}
        rows={[
          ["Hidráulica (>30 MW)", "Hydro (>30 MW)", "38.125", "39.674", "4%", "56%"],
          ["Térmica", "Thermal", "10.265", "11.105", "8%", "16%"],
          ["Eólica", "Wind", "14.239", "13.065", "-8%", "18%"],
          ["PCH e CGH", "PCH and CGH", "2.837", "2.785", "-2%", "4%"],
          ["Fotovoltaica", "Solar PV", "3.139", "4.068", "30%", "6%"],
          ["Total", "Total", "68.604", "70.697", "3%", "100%"],
        ].map(([pt, en, a, b, v, p]) => ({ fonte: t(pt, en), a, b, v: <Var value={v} />, p }))}
      />
    </>
  );
}

export function ExpansaoVisuals() {
  const t = useT();
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ChartFrame
        title={t("Expansão acumulada em 2026 (MW)", "Cumulative expansion in 2026 (MW)")}
        source={t("Elaboração própria com dados da ANEEL. Pontos rotulados no gráfico até junho.", "Prepared by the authors with data from ANEEL. Points labeled on the chart through June.")}
      >
        <GroupedBars
          data={[
            { mes: t("Jan", "Jan"), mw: 543 },
            { mes: t("Fev", "Feb"), mw: 1286 },
            { mes: t("Mar", "Mar"), mw: 2426 },
            { mes: t("Abr", "Apr"), mw: 2466 },
            { mes: t("Mai", "May"), mw: 2470 },
            { mes: t("Jun", "Jun"), mw: 2706 },
          ]}
          xKey="mes"
          bars={[{ key: "mw", name: t("Entrada acumulada", "Cumulative entry"), fill: A }]}
        />
      </ChartFrame>
      <ChartFrame
        title={t("Potência que entrou em operação até junho de 2026", "Capacity that entered operation through June 2026")}
        source={t("ANEEL, via CNI. Soma: 2706 MW.", "ANEEL, via CNI. Sum: 2706 MW.")}
        note={t("UFV 93%, biomassa 3%, PCH 2% e eólica 2%.", "Solar PV 93%, biomass 3%, PCH 2% and wind 2%.")}
      >
        <Donut
          data={[
            { name: "UFV 2511 MW", value: 2511, fill: E },
            { name: t("Biomassa 86 MW", "Biomass 86 MW"), value: 86, fill: A },
            { name: "EOL 59 MW", value: 59, fill: B },
            { name: "PCH 50 MW", value: 50, fill: C },
          ]}
        />
      </ChartFrame>
    </div>
  );
}

export function PrevisaoVisuals() {
  const t = useT();
  const block = (pt: string, en: string, rows: string[][]) => (
    <DataTable
      caption={t(pt, en)}
      source={t(
        "Fonte: elaboração própria com dados da ANEEL. A previsão de 2026 é a definida em 31/12/2025.",
        "Source: prepared by the authors with data from ANEEL. The 2026 forecast is the one set on 31/12/2025.",
      )}
      note={t(
        "Fontes alternativas incluem 50 MW de UHEs. Térmicas fósseis: óleo combustível, diesel, gás natural e carvão.",
        "Alternative sources include 50 MW of large hydro. Fossil thermal: fuel oil, diesel, natural gas and coal.",
      )}
      columns={[
        { key: "c", label: t("Cenário", "Scenario") },
        { key: "y26", label: "2026", align: "right" },
        { key: "y27", label: "2027", align: "right" },
        { key: "y28", label: "2028", align: "right" },
        { key: "y29", label: "2029", align: "right" },
        { key: "y30", label: "2030", align: "right" },
        { key: "sum", label: "Σ", align: "right" },
      ]}
      rows={rows.map(([c, ...rest]) => ({
        c: t(c, c === "Conservador" ? "Conservative" : "Optimistic"),
        y26: rest[0], y27: rest[1], y28: rest[2], y29: rest[3], y30: rest[4], sum: rest[5],
      }))}
    />
  );
  return (
    <>
      <ChartFrame
        title={t(
          "Capacidade instalada ao final de cada ano — fontes alternativas, cenário otimista (GW)",
          "Installed capacity at each year-end — alternative sources, optimistic scenario (GW)",
        )}
        source={t("Elaboração própria com dados da ANEEL. Em 2025, capacidade em 31/12/2025.", "Prepared by the authors with data from ANEEL. For 2025, capacity on 31/12/2025.")}
      >
        <StackedBars
          xKey="ano"
          data={[
            { ano: "2025", eol: 35.9, bio: 15.8, ufv: 22.1, pch: 6.0 },
            { ano: "2026", eol: 36.3, bio: 15.9, ufv: 22.7, pch: 6.1 },
            { ano: "2027", eol: 37.5, bio: 16.4, ufv: 25.5, pch: 6.2 },
            { ano: "2028", eol: 37.6, bio: 16.5, ufv: 28.6, pch: 6.3 },
            { ano: "2029", eol: 38.1, bio: 16.5, ufv: 29.2, pch: 6.3 },
            { ano: "2030", eol: 39.1, bio: 16.6, ufv: 29.3, pch: 6.8 },
          ]}
          bars={[
            { key: "eol", name: "EOL", fill: B },
            { key: "bio", name: t("Biomassa", "Biomass"), fill: A },
            { key: "ufv", name: "UFV", fill: E },
            { key: "pch", name: "PCH", fill: C },
          ]}
        />
      </ChartFrame>
      {block("Tabela 5 — Fontes alternativas (MW)", "Table 5 — Alternative sources (MW)", [
        ["Conservador", "1.180", "3.499", "268", "27", "6", "4.980"],
        ["Otimista", "1.180", "4.655", "3.384", "1.164", "1.619", "12.002"],
      ])}
      {block("Usinas termelétricas fósseis (MW)", "Fossil thermal plants (MW)", [
        ["Conservador", "2.404", "663", "0", "0", "0", "3.067"],
        ["Otimista", "2.404", "663", "14", "0", "49", "3.130"],
      ])}
      {block("Somatório alternativas e fósseis (MW)", "Sum of alternatives and fossil (MW)", [
        ["Conservador", "3.584", "4.162", "268", "27", "6", "8.047"],
        ["Otimista", "3.584", "5.318", "3.398", "1.164", "1.668", "15.132"],
      ])}
    </>
  );
}

export function GdVisuals() {
  const t = useT();
  return (
    <DataTable
      caption={t("Tabela 6 — Acréscimo de potência instalada em geração distribuída (MW)", "Table 6 — Added distributed-generation capacity (MW)")}
      source={t("Fonte: elaboração própria com dados da ANEEL.", "Source: prepared by the authors with data from ANEEL.")}
      columns={[
        { key: "c", label: t("Classe", "Class") },
        { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
        { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
        { key: "v", label: t("Variação", "Change"), align: "right" },
      ]}
      rows={[
        ["Residencial", "Residential", "336,4", "270,6", "-20%"],
        ["Comercial", "Commercial", "122,2", "109,45", "-10%"],
        ["Rural", "Rural", "75,9", "34,0", "-55%"],
        ["Industrial", "Industrial", "60,5", "21,2", "-65%"],
        ["Iluminação e poder público", "Public lighting and government", "12,4", "7,9", "-36%"],
        ["Total", "Total", "607,3", "443,1", "-27%"],
      ].map(([pt, en, a, b, v]) => ({ c: t(pt, en), a, b, v: <Var value={v} /> }))}
    />
  );
}

export function TransmissaoVisuals() {
  const t = useT();
  return (
    <ChartFrame
      title={t("Entrada acumulada de linhas de transmissão em 2026 (km)", "Cumulative entry of transmission lines in 2026 (km)")}
      source={t("Elaboração própria com dados do MME. Valores rotulados no gráfico até junho.", "Prepared by the authors with data from MME. Values labeled on the chart through June.")}
      note={t("Considera a previsão divulgada pelo Ministério de Minas e Energia em janeiro de 2026.", "Uses the forecast released by the Ministry of Mines and Energy in January 2026.")}
    >
      <GroupedBars
        data={[
          { mes: t("Jan", "Jan"), km: 499 },
          { mes: t("Fev", "Feb"), km: 888 },
          { mes: t("Mar", "Mar"), km: 2021 },
          { mes: t("Abr", "Apr"), km: 2751 },
          { mes: t("Mai", "May"), km: 2840 },
          { mes: t("Jun", "Jun"), km: 3508 },
        ]}
        xKey="mes"
        bars={[{ key: "km", name: t("Acumulado (km)", "Cumulative (km)"), fill: A }]}
      />
    </ChartFrame>
  );
}

export function ReservatorioVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Nível dos reservatórios (% do máximo)", "Reservoir level (% of maximum)")}
        source={t("Elaboração própria com dados do ONS.", "Prepared by the authors with data from ONS.")}
      >
        <GroupedBars
          data={[
            { reg: t("Nordeste", "Northeast"), y2025: 69, y2026: 89 },
            { reg: t("Norte", "North"), y2025: 97, y2026: 94 },
            { reg: "SE/CO", y2025: 66, y2026: 66 },
            { reg: t("Sul", "South"), y2025: 84, y2026: 62 },
          ]}
          xKey="reg"
          bars={[
            { key: "y2025", name: t("Junho 2025", "June 2025"), fill: D },
            { key: "y2026", name: t("Junho 2026", "June 2026"), fill: A },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 7 — Nível de armazenagem verificada nos reservatórios (%)", "Table 7 — Verified reservoir storage level (%)")}
        source={t("Fonte: elaboração própria com dados do ONS.", "Source: prepared by the authors with data from ONS.")}
        columns={[
          { key: "s", label: t("Subsistema", "Subsystem") },
          { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
          { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
          { key: "v", label: t("Variação (p.p.)", "Change (p.p.)"), align: "right" },
        ]}
        rows={[
          ["Nordeste", "Northeast", "69%", "89%", "20,3"],
          ["Norte", "North", "97%", "94%", "-2,8"],
          ["Sudeste/Centro-Oeste", "Southeast/Center-West", "66%", "66%", "-0,9"],
          ["Sul", "South", "84%", "62%", "-22,0"],
        ].map(([pt, en, a, b, v]) => ({ s: t(pt, en), a, b, v: <Var value={v.startsWith("-") ? v : `+${v}`} /> }))}
      />
    </>
  );
}

export function ConsumoVisuals() {
  const t = useT();
  return (
    <>
      <DataTable
        caption={t("Tabela 8 — Consumo de energia elétrica por classe (GWh)", "Table 8 — Electricity consumption by class (GWh)")}
        source={t("Fonte: elaboração própria com dados da EPE.", "Source: prepared by the authors with data from EPE.")}
        columns={[
          { key: "c", label: t("Classe", "Class") },
          { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
          { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
        ]}
        rows={[
          ["Residencial", "Residential", "13.858", "14.386", "3,8%"],
          ["Industrial", "Industrial", "16.438", "16.589", "0,9%"],
          ["Comercial", "Commercial", "7.982", "8.432", "5,6%"],
          ["Outras", "Other", "6.694", "6.812", "1,8%"],
          ["Total", "Total", "44.972", "46.219", "2,8%"],
        ].map(([pt, en, a, b, v]) => ({ c: t(pt, en), a, b, v: <Var value={v} /> }))}
      />
      <DataTable
        caption={t("Tabela 9 — Consumo de energia elétrica por setor industrial (GWh)", "Table 9 — Electricity consumption by industrial sector (GWh)")}
        source={t("Fonte: elaboração própria com dados da EPE.", "Source: prepared by the authors with data from EPE.")}
        note={t("*Exceto máquinas e equipamentos.", "*Except machinery and equipment.")}
        columns={[
          { key: "s", label: t("Setor", "Sector") },
          { key: "a", label: "2025", align: "right" },
          { key: "b", label: "2026", align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
          { key: "p", label: t("Parte", "Share"), align: "right" },
        ]}
        rows={[
          ["Metalúrgico", "Metals", "4.225", "4.064", "-4%", "25%"],
          ["Outros", "Other", "2.614", "2.621", "0%", "16%"],
          ["Produtos alimentícios", "Food products", "2.252", "2.322", "3%", "14%"],
          ["Químico", "Chemicals", "1.512", "1.576", "4%", "10%"],
          ["Minerais não metálicos", "Non-metallic minerals", "1.266", "1.294", "2,2%", "8%"],
          ["Extração de minerais metálicos", "Metallic mineral extraction", "1.233", "1.393", "13%", "8%"],
          ["Borracha e plástico", "Rubber and plastic", "1.019", "1.012", "-1%", "6%"],
          ["Papel e celulose", "Pulp and paper", "855", "846", "-1%", "5%"],
          ["Automotivo", "Automotive", "575", "581", "1%", "4%"],
          ["Têxtil", "Textiles", "526", "514", "-2%", "3%"],
          ["Produtos metálicos*", "Metal products*", "362", "365", "1%", "2%"],
          ["Total", "Total", "16.438", "16.589", "1%", "100%"],
        ].map(([pt, en, a, b, v, p]) => ({ s: t(pt, en), a, b, v: <Var value={v} />, p }))}
      />
    </>
  );
}

export function PldVisuals() {
  const t = useT();
  return (
    <ChartFrame
      title={t("PLD médio em junho de 2026 (R$/MWh)", "Average PLD in June 2026 (R$/MWh)")}
      source={t("Elaboração própria com dados da CCEE.", "Prepared by the authors with data from CCEE.")}
    >
      <GroupedBars
        data={[
          { reg: "SE/CO", pld: 188 },
          { reg: t("Sul", "South"), pld: 194 },
          { reg: t("Nordeste", "Northeast"), pld: 184 },
          { reg: t("Norte", "North"), pld: 187 },
        ]}
        xKey="reg"
        bars={[{ key: "pld", name: t("Junho 2026", "June 2026"), fill: A }]}
      />
    </ChartFrame>
  );
}

const CONTINUIDADE: [string, number, number | null][] = [
  ["MUXENERGIA", 0.24, null],
  ["EFLJC", 0.32, null],
  ["EFLUL", 0.45, null],
  ["RORAIMA", 0.46, null],
  ["UHENPAL", 0.48, 0.75],
  ["CHESP", 0.51, null],
  ["CEA EQTL", 0.55, null],
  ["ELETROCAR", 0.58, 0.74],
  ["HIDROPAN", 0.59, 1.12],
  ["EAC", 0.6, null],
  ["DMED", 0.63, 0.69],
  ["NEO COSERN", 0.65, null],
  ["CPFL SANTA CRUZ", 0.66, null],
  ["DEMEI", 0.66, 0.94],
  ["SULGIPE", 0.67, 0.74],
  ["ELFSM", 0.69, 0.59],
  ["CPFL PIRATININGA", 0.69, null],
  ["EQTL PA", 0.76, null],
  ["CPFL PAULISTA", 0.78, 0.61],
  ["ERO", 0.79, null],
  ["EPB", 0.8, null],
  ["EDP ES", 0.8, null],
  ["ESS", 0.81, 0.59],
  ["EDP SP", 0.82, null],
  ["NEO ELEKTRO", 0.82, 0.66],
  ["COPEL-Dis", 0.82, 0.77],
  ["EMR", 0.83, 0.62],
  ["NEO COELBA", 0.83, 0.65],
  ["EMT", 0.84, null],
  ["RGE", 0.84, 0.62],
  ["ETO", 0.86, null],
  ["ENEL CE", 0.87, 0.75],
  ["EQTL MA", 0.9, 0.75],
  ["NEO PE", 0.9, 0.63],
  ["CEMIG-D", 0.91, 0.9],
  ["ESE", 0.91, 0.68],
  ["EMS", 0.92, 0.69],
  ["ENEL RJ", 0.94, 0.71],
  ["COCEL", 0.95, 0.95],
  ["EQTL AL", 0.95, null],
  ["AME", 0.96, 0.59],
  ["NEO BRASÍLIA", 0.97, 0.98],
  ["CELESC-Dis", 0.97, 0.81],
  ["EQTL PI", 0.98, null],
  ["LIGHT", 1, 0.8],
  ["EQTL GO", 1.01, 0.74],
  ["ENEL SP", 1.03, 0.95],
  ["COOPERALIANÇA", 1.05, 1.29],
  ["DCELT", 1.13, 1.14],
  ["CEEE EQTL", 1.29, 0.82],
  ["PACTO", 1.36, 0.88],
];

function indice(value: number | null) {
  if (value === null) return <span className="text-muted">—</span>;
  const text = value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return <span className={value > 1 ? "font-semibold text-copper" : "font-semibold text-ink"}>{text}</span>;
}

export function ContinuidadeVisuals() {
  const t = useT();
  const [query, setQuery] = useState("");
  const needle = query.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().trim();
  const rows = CONTINUIDADE.filter(([name]) =>
    name.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().includes(needle),
  );
  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-card">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <figcaption className="text-sm font-semibold text-ink">
          {t(
            "DEC/Limite e FEC/Limite das distribuidoras em junho de 2026",
            "DEC/Limit and FEC/Limit of distributors in June 2026",
          )}
        </figcaption>
        <label className="relative block w-full sm:w-64">
          <span className="sr-only">{t("Buscar distribuidora", "Search a distributor")}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("Buscar distribuidora", "Search a distributor")}
            className="h-11 w-full rounded-md border border-line bg-paper px-3 text-sm text-ink placeholder:text-muted"
          />
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-accent text-accent-fg">
              <th scope="col" className="px-3 py-2 text-left font-semibold">
                {t("Distribuidora", "Distributor")}
              </th>
              <th scope="col" className="px-2 py-2 text-right font-semibold sm:px-3">
                DEC/Limite
              </th>
              <th scope="col" className="px-2 py-2 text-right font-semibold sm:px-3">
                FEC/Limite
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-3 py-6 text-center text-muted">
                  {t("Nenhuma distribuidora encontrada.", "No distributor found.")}
                </td>
              </tr>
            ) : (
              rows.map(([name, dec, fec], index) => (
                <tr key={name} className={index % 2 === 1 ? "border-t border-line bg-paper/60" : "border-t border-line bg-card"}>
                  <th scope="row" className="px-3 py-2 text-left text-xs font-medium text-ink sm:text-sm">
                    {name}
                  </th>
                  <td className="px-2 py-2 text-right text-xs tabular sm:px-3 sm:text-sm">{indice(dec)}</td>
                  <td className="px-2 py-2 text-right text-xs tabular sm:px-3 sm:text-sm">{indice(fec)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <figcaption className="space-y-1 border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">
        <p>
          {t(
            "Fonte: elaboração própria com dados da Aneel. Gráficos 9 e 10.",
            "Source: prepared by the authors with data from Aneel. Charts 9 and 10.",
          )}
        </p>
        <p>
          {t(
            "A apuração desses indicadores considera interrupções com duração maior ou igual a 3 minutos. Valores acima de 1 excedem o limite da ANEEL. O traço indica distribuidora sem FEC/Limite no gráfico 10.",
            "These indicators count interruptions of 3 minutes or more. Values above 1 exceed the ANEEL limit. A dash means the distributor has no FEC/Limit on chart 10.",
          )}
        </p>
      </figcaption>
    </figure>
  );
}

export function PetroleoVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Qualidade do petróleo produzido em junho de 2026", "Quality of oil produced in June 2026")}
        source={t("Elaboração própria com dados da ANP.", "Prepared by the authors with data from ANP.")}
      >
        <Donut
          data={[
            { name: t("Médio 89,3%", "Medium 89,3%"), value: 89.3, fill: A },
            { name: t("Pesado 6,8%", "Heavy 6,8%"), value: 6.8, fill: C },
            { name: t("Leve 3,9%", "Light 3,9%"), value: 3.9, fill: E },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 10 — Produção e comércio exterior de petróleo (milhões bep)", "Table 10 — Oil production and foreign trade (million boe)")}
        source={t("Fonte: elaboração própria com dados da ANP.", "Source: prepared by the authors with data from ANP.")}
        columns={[
          { key: "i", label: t("Petróleo", "Oil") },
          { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
          { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
        ]}
        rows={[
          ["Produção (a)", "Production (a)", "112,7", "134,2", "19%"],
          ["Importação (b)", "Imports (b)", "7,9", "6,7", "-15%"],
          ["Exportação (c)", "Exports (c)", "56,8", "60,6", "7%"],
          ["Consumo aparente (a+b−c)", "Apparent consumption (a+b−c)", "63,8", "80,3", "26%"],
        ].map(([pt, en, a, b, v]) => ({ i: t(pt, en), a, b, v: <Var value={v} /> }))}
      />
    </>
  );
}

export function DerivadosVisuals() {
  const t = useT();
  return (
    <DataTable
      caption={t("Tabela 11 — Derivados de petróleo (milhões bep)", "Table 11 — Petroleum products (million boe)")}
      source={t("Fonte: elaboração própria com dados da ANP.", "Source: prepared by the authors with data from ANP.")}
      columns={[
        { key: "i", label: t("Derivados", "Products") },
        { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
        { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
        { key: "v", label: t("Variação", "Change"), align: "right" },
      ]}
      rows={[
        ["Produção (a)", "Production (a)", "64,9", "65,4", "1%"],
        ["Importação (b)", "Imports (b)", "16,5", "13,5", "-18%"],
        ["Exportação (c)", "Exports (c)", "11,7", "14,6", "25%"],
        ["Consumo aparente (a+b−c)", "Apparent consumption (a+b−c)", "69,7", "64,2", "-8%"],
      ].map(([pt, en, a, b, v]) => ({ i: t(pt, en), a, b, v: <Var value={v} /> }))}
    />
  );
}

export function BalancaVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Saldo da balança (milhões US$ FOB)", "Trade balance (US$ million FOB)")}
        source={t("Elaboração própria com dados da ANP.", "Prepared by the authors with data from ANP.")}
      >
        <GroupedBars
          data={[
            { item: t("Petróleo", "Oil"), y2025: 2964, y2026: 5512 },
            { item: t("Derivados", "Products"), y2025: -292, y2026: 400 },
            { item: t("Total", "Total"), y2025: 2672, y2026: 5912 },
          ]}
          xKey="item"
          bars={[
            { key: "y2025", name: t("Junho 2025", "June 2025"), fill: D },
            { key: "y2026", name: t("Junho 2026", "June 2026"), fill: A },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 12 — Balança comercial de petróleo e derivados (milhões US$ FOB)", "Table 12 — Trade balance of oil and products (US$ million FOB)")}
        source={t("Fonte: elaboração própria com dados da ANP.", "Source: prepared by the authors with data from ANP.")}
        columns={[
          { key: "i", label: t("Item", "Item") },
          { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
          { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
        ]}
        rows={[
          ["Receita com exportação de petróleo", "Oil export revenue", "3.511", "6.283", "79%"],
          ["Dispêndio com importação de petróleo", "Oil import spending", "548", "771", "41%"],
          ["Balança de petróleo", "Oil balance", "2.964", "5.512", ""],
          ["Receita com exportação de derivados", "Products export revenue", "912", "1.703", "87%"],
          ["Dispêndio com importação de derivados", "Products import spending", "1.204", "1.302", "8%"],
          ["Balança de derivados", "Products balance", "-292", "400", ""],
          ["Receita total com exportação", "Total export revenue", "4.424", "7.985", "81%"],
          ["Dispêndio total com importação", "Total import spending", "1.752", "2.073", "18%"],
          ["Balança total", "Total balance", "2.672", "5.912", ""],
        ].map(([pt, en, a, b, v]) => ({ i: t(pt, en), a, b, v: v ? <Var value={v} /> : "—" }))}
      />
    </>
  );
}

export function BiodieselVisuals() {
  const t = useT();
  return (
    <DataTable
      caption={t("Biodiesel em junho", "Biodiesel in June")}
      source={t("Fonte: elaboração própria com dados da ANP.", "Source: prepared by the authors with data from ANP.")}
      columns={[
        { key: "i", label: t("Indicador", "Indicator") },
        { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
        { key: "v", label: t("Ante jun/2025", "Vs Jun/2025"), align: "right" },
      ]}
      rows={[
        { i: t("Produção", "Production"), b: t("845 mil m³", "845 thousand m³"), v: <Var value="8%" /> },
        { i: t("Diesel com biodiesel ao consumidor", "Diesel with biodiesel, consumer price"), b: "R$ 6,78/ℓ", v: <Var value="14%" /> },
      ]}
    />
  );
}

export function AlcoolVisuals() {
  const t = useT();
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ChartFrame
        title={t("Álcool da safra 2025/2026 até junho", "2025/2026 crop alcohol through June")}
        source={t("Elaboração própria com dados do MAPA.", "Prepared by the authors with data from MAPA.")}
        note={t("12 milhões de m³, 22% acima do mesmo ponto da safra anterior.", "12 million m³, 22% above the same point of the previous crop.")}
      >
        <Donut
          data={[
            { name: t("Hidratado 65%", "Hydrous 65%"), value: 65, fill: A },
            { name: t("Demais 35%", "Other 35%"), value: 35, fill: E },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 13 — Produção acumulada de álcool e açúcar", "Table 13 — Cumulative alcohol and sugar production")}
        source={t("Fonte: elaboração própria com dados do MAPA. Safra 2025/2026 até junho de 2026.", "Source: prepared by the authors with data from MAPA. 2025/2026 crop through June 2026.")}
        columns={[
          { key: "i", label: t("Produto", "Product") },
          { key: "b", label: t("Até junho de 2026", "Through June 2026"), align: "right" },
          { key: "v", label: t("Ante a safra anterior", "Vs previous crop"), align: "right" },
        ]}
        rows={[
          { i: t("Álcool", "Alcohol"), b: t("12 milhões m³", "12 million m³"), v: <Var value="22%" /> },
          { i: t("Açúcar", "Sugar"), b: t("11 milhões t", "11 million t"), v: <Var value="-13%" /> },
        ]}
      />
    </div>
  );
}

export function GasOfertaVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Oferta de gás natural (milhões m³/dia)", "Natural gas supply (million m³/day)")}
        source={t("Elaboração própria com dados do MME.", "Prepared by the authors with data from MME.")}
        note={t("A produção nacional da tabela não inclui GNL.", "National production in the table does not include LNG.")}
      >
        <StackedBars
          xKey="mes"
          data={[
            { mes: t("Set/2024", "Sep/2024"), liq: 53.6, bol: 14.6, gnl: 17 },
            { mes: t("Set/2025", "Sep/2025"), liq: 61.4, bol: 10.5, gnl: 4.89 },
          ]}
          bars={[
            { key: "liq", name: t("Produção líquida", "Net production"), fill: A },
            { key: "bol", name: t("Bolívia", "Bolivia"), fill: B },
            { key: "gnl", name: "GNL", fill: E },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 14 — Balanço do gás natural (milhões m³/dia)", "Table 14 — Natural gas balance (million m³/day)")}
        source={t("Fonte: elaboração própria com dados do MME.", "Source: prepared by the authors with data from MME.")}
        columns={[
          { key: "i", label: t("Item", "Item") },
          { key: "a", label: t("Setembro 2024", "September 2024"), align: "right" },
          { key: "b", label: t("Setembro 2025", "September 2025"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
        ]}
        rows={[
          ["Produção nacional", "National production", "169,9", "190,6", "12%"],
          ["− Reinjeção", "− Reinjection", "93,5", "102,2", "9%"],
          ["− Queimas e perdas", "− Flaring and losses", "3,6", "4,1", "13%"],
          ["− Consumo próprio", "− Own use", "19,2", "22,9", "19%"],
          ["= Produção líquida", "= Net production", "53,6", "61,4", "15%"],
          ["+ Importação Bolívia", "+ Imports from Bolivia", "14,6", "10,5", "-28%"],
          ["+ Regaseificação de GNL", "+ LNG regasification", "17,0", "4,89", "-71%"],
          ["= Oferta", "= Supply", "85,2", "76,8", "-10%"],
        ].map(([pt, en, a, b, v]) => ({ i: t(pt, en), a, b, v: <Var value={v} /> }))}
      />
    </>
  );
}

export function GasConsumoVisuals() {
  const t = useT();
  return (
    <ChartFrame
      title={t("Consumo de gás natural em setembro de 2025", "Natural gas consumption in September 2025")}
      source={t("Elaboração própria com dados do MME.", "Prepared by the authors with data from MME.")}
      note={t("Cerca de 76 milhões de m³/dia, 7% abaixo de setembro de 2024.", "About 76 million m³/day, 7% below September 2024.")}
    >
      <Donut
        data={[
          { name: t("Indústria 54%", "Industry 54%"), value: 54, fill: A },
          { name: t("Geração elétrica 34%", "Power generation 34%"), value: 34, fill: B },
          { name: t("Demais 12%", "Other 12%"), value: 12, fill: E },
        ]}
      />
    </ChartFrame>
  );
}

export function GasPrecoVisuals() {
  const t = useT();
  return (
    <ChartFrame
      title={t("Preço do gás ao consumidor industrial (US$/MMBtu)", "Industrial consumer gas price (US$/MMBtu)")}
      source={t("Elaboração própria com dados do MME. Henry Hub em set/2025: US$ 2,97 (+30%).", "Prepared by the authors with data from MME. Henry Hub in Sep/2025: US$ 2,97 (+30%).")}
    >
      <GroupedBars
        data={[
          { mes: t("Set/2024", "Sep/2024"), preco: 18.13 },
          { mes: t("Set/2025", "Sep/2025"), preco: 19.91 },
        ]}
        xKey="mes"
        bars={[{ key: "preco", name: t("Industrial", "Industrial"), fill: A }]}
      />
    </ChartFrame>
  );
}

export function MovelVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Composição da base móvel em junho de 2026", "Mobile base mix in June 2026")}
        source={t("Elaboração própria com dados da Anatel.", "Prepared by the authors with data from Anatel.")}
      >
        <Donut
          data={[
            { name: "4G 64%", value: 64, fill: A },
            { name: "5G 24%", value: 24, fill: B },
            { name: "2G 7%", value: 7, fill: E },
            { name: "3G 5%", value: 5, fill: C },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 16 — Acessos móveis por tecnologia (milhões)", "Table 16 — Mobile accesses by technology (million)")}
        source={t("Fonte: elaboração própria com dados da Anatel.", "Source: prepared by the authors with data from Anatel.")}
        columns={[
          { key: "i", label: t("Tecnologia", "Technology") },
          { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
          { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
          { key: "p", label: t("Parte", "Share"), align: "right" },
        ]}
        rows={[
          ["2G", "2G", "18,9", "18,8", "0%", "7%"],
          ["3G", "3G", "16,7", "14,1", "-15%", "5%"],
          ["4G", "4G", "182,0", "177,6", "-2%", "64%"],
          ["5G", "5G", "48,9", "67,2", "37%", "24%"],
          ["Total", "Total", "266,5", "277,8", "4%", "100%"],
        ].map(([pt, en, a, b, v, p]) => ({ i: t(pt, en), a, b, v: <Var value={v} />, p }))}
      />
    </>
  );
}

export function FixaVisuals() {
  const t = useT();
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ChartFrame
        title={t("Acessos fixos por tecnologia", "Fixed accesses by technology")}
        source={t("Elaboração própria com dados da Anatel. Junho de 2026.", "Prepared by the authors with data from Anatel. June 2026.")}
      >
        <Donut
          data={[
            { name: t("Fibra 81%", "Fiber 81%"), value: 81, fill: A },
            { name: t("Demais 19%", "Other 19%"), value: 19, fill: D },
          ]}
        />
      </ChartFrame>
      <ChartFrame
        title={t("Acessos por faixa de velocidade", "Accesses by speed band")}
        source={t("Elaboração própria com dados da Anatel. Junho de 2026.", "Prepared by the authors with data from Anatel. June 2026.")}
      >
        <Donut
          data={[
            { name: t("> 34 Mbps 95%", "> 34 Mbps 95%"), value: 95, fill: B },
            { name: t("Até 34 Mbps 5%", "Up to 34 Mbps 5%"), value: 5, fill: E },
          ]}
        />
      </ChartFrame>
    </div>
  );
}

export function PortosVisuals() {
  const t = useT();
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartFrame
          title={t("Quem movimentou a carga em fevereiro de 2026 (milhões de toneladas)", "Who moved the cargo in February 2026 (million tonnes)")}
          source={t("Elaboração própria com dados da ANTAQ.", "Prepared by the authors with data from ANTAQ.")}
        >
          <StackedBars
            xKey="mes"
            data={[{ mes: t("Fev/2026", "Feb/2026"), tup: 68, pub: 33 }]}
            bars={[
              { key: "tup", name: "TUPs", fill: A },
              { key: "pub", name: t("Portos públicos", "Public ports"), fill: D },
            ]}
          />
        </ChartFrame>
        <ChartFrame
          title={t("Navegação em fevereiro de 2026", "Navigation in February 2026")}
          source={t("Elaboração própria com dados da ANTAQ.", "Prepared by the authors with data from ANTAQ.")}
        >
          <Donut
            data={[
              { name: t("Longo curso 68%", "Long-haul 68%"), value: 68, fill: A },
              { name: t("Cabotagem 24%", "Cabotage 24%"), value: 24, fill: B },
              { name: t("Interior 7%", "Inland 7%"), value: 7, fill: E },
              { name: t("Apoio <1%", "Support <1%"), value: 1, fill: C },
            ]}
          />
        </ChartFrame>
      </div>
      <ChartFrame
        title={t("Cabotagem por natureza (milhões de toneladas)", "Cabotage by cargo type (million tonnes)")}
        source={t("Texto da seção. Fevereiro de 2026.", "Section text. February 2026.")}
      >
        <GroupedBars
          data={[
            { nat: t("Líquido e gasoso", "Liquid and gas"), t: 15.9 },
            { nat: t("Sólido", "Solid"), t: 4 },
            { nat: t("Contêiner", "Container"), t: 3.8 },
            { nat: t("Geral", "General"), t: 0.8 },
          ]}
          xKey="nat"
          bars={[{ key: "t", name: t("Fev/2026", "Feb/2026"), fill: A }]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 17 — Movimentação por natureza (mil toneladas)", "Table 17 — Cargo by type (thousand tonnes)")}
        source={t("Fonte: elaboração própria com dados da ANTAQ.", "Source: prepared by the authors with data from ANTAQ.")}
        columns={[
          { key: "i", label: t("Natureza", "Type") },
          { key: "a", label: t("Fev/2025", "Feb/2025"), align: "right" },
          { key: "b", label: t("Fev/2026", "Feb/2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
        ]}
        rows={[
          ["Granel sólido", "Solid bulk", "55.528", "56.963", "3%"],
          ["— Portos públicos", "— Public ports", "20.332", "18.566", "-9%"],
          ["— TUPs", "— TUPs", "35.196", "38.397", "9%"],
          ["Granel líquido e gasoso", "Liquid and gaseous bulk", "23.953", "26.854", "12%"],
          ["— Portos públicos", "— Public ports", "4.693", "4.889", "4%"],
          ["— TUPs", "— TUPs", "19.261", "21.965", "14%"],
          ["Carga geral", "General cargo", "5.109", "4.731", "-7%"],
          ["— Portos públicos", "— Public ports", "2.234", "1.940", "-13%"],
          ["— TUPs", "— TUPs", "2.875", "2.790", "-3%"],
          ["Carga conteinerizada", "Containerized cargo", "12.443", "12.437", "0%"],
          ["— Portos públicos", "— Public ports", "8.215", "7.880", "-4%"],
          ["— TUPs", "— TUPs", "4.228", "4.557", "8%"],
          ["Total", "Total", "97.033", "100.984", "4,1%"],
          ["— Portos públicos", "— Public ports", "35.473", "33.275", "-6%"],
          ["— TUPs", "— TUPs", "61.560", "67.709", "10%"],
        ].map(([pt, en, a, b, v]) => ({ i: t(pt, en), a, b, v: <Var value={v} /> }))}
      />
      <DataTable
        caption={t("Tabela 18 — Cabotagem por natureza (mil toneladas)", "Table 18 — Cabotage by type (thousand tonnes)")}
        source={t("Fonte: elaboração própria com dados da ANTAQ.", "Source: prepared by the authors with data from ANTAQ.")}
        columns={[
          { key: "i", label: t("Natureza", "Type") },
          { key: "a", label: t("Fev/2025", "Feb/2025"), align: "right" },
          { key: "b", label: t("Fev/2026", "Feb/2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
        ]}
        rows={[
          ["Granel sólido", "Solid bulk", "3.467", "3.978", "15%"],
          ["Granel líquido e gasoso", "Liquid and gaseous bulk", "14.424", "15.913", "10%"],
          ["Carga geral", "General cargo", "889", "811", "-9%"],
          ["Carga conteinerizada", "Containerized cargo", "3.736", "3.763", "1%"],
          ["Total", "Total", "22.517", "24.466", "8,7%"],
        ].map(([pt, en, a, b, v]) => ({ i: t(pt, en), a, b, v: <Var value={v} /> }))}
      />
    </>
  );
}

export function TerminaisVisuals() {
  const t = useT();
  const rows = [
    ["Suape", 71, 100],
    ["Santos Brasil", 78, 91],
    ["Paranaguá TCP", 90, 86],
    ["Multi-Rio", 51, 85],
    ["Portonave", 78, 83],
    ["Itapoá", 91, 82],
    ["Brasil Terminal Portuário (BTP)", 73, 77],
    ["DP World Santos", 66, 68],
    ["Porto Chibatão", 76, 52],
    ["Rio Grande", 50, 35],
  ] as const;
  return (
    <>
      <ChartFrame
        title={t("Utilização dos terminais de contêineres em junho de 2026 (%)", "Container terminal utilization in June 2026 (%)")}
        source={t("SOLVE Shipping. Suape, 100%, é o maior nível entre os dez mais movimentados.", "SOLVE Shipping. Suape, at 100%, is the highest level among the ten busiest.")}
      >
        <RankList
          digits={0}
          max={100}
          threshold={99}
          rows={[...rows].sort((a, b) => b[2] - a[2]).map(([name, , y]) => ({ name, value: y }))}
        />
      </ChartFrame>
      <DataTable
        caption={t("Utilização em junho (%)", "Utilization in June (%)")}
        source={t("Fonte: SOLVE Shipping.", "Source: SOLVE Shipping.")}
        columns={[
          { key: "t", label: t("Terminal", "Terminal") },
          { key: "a", label: "jun/25", align: "right" },
          { key: "b", label: "jun/26", align: "right" },
        ]}
        rows={rows.map(([name, a, b]) => ({ t: name, a: `${a}%`, b: `${b}%` }))}
      />
      <DataTable
        caption={t("Tabela 19 — Omissões e cancelamentos, jan–jun/2026", "Table 19 — Omissions and cancellations, Jan–Jun/2026")}
        source={t("Fonte: SOLVE Shipping.", "Source: SOLVE Shipping.")}
        note={t(
          "O Porto de Chibatão (AM) não conta com essas estatísticas e foi substituído pelo Porto de Pecém (CE).",
          "The Port of Chibatão (AM) is not in these statistics and was replaced by the Port of Pecém (CE).",
        )}
        columns={[
          { key: "i", label: t("Instalação", "Facility") },
          { key: "n", label: t("Omissões", "Omissions"), align: "right" },
          { key: "op", label: t("Operações previstas", "Scheduled operations"), align: "right" },
          { key: "p", label: "%", align: "right" },
        ]}
        rows={[
          ["Brasil Terminal Portuário (BTP)", "69", "359", "19%"],
          ["Multi-Rio", "50", "237", "21%"],
          ["Paranaguá TCP", "109", "530", "21%"],
          ["Rio Grande", "60", "240", "25%"],
          ["DP World Santos", "23", "212", "11%"],
          ["Itapoá", "42", "285", "15%"],
          ["Portonave", "42", "185", "23%"],
          ["Santos Brasil", "100", "383", "26%"],
          ["Pecém", "17", "72", "24%"],
          ["Suape", "5", "75", "7%"],
          ["Outros", "134", "595", "23%"],
          ["Brasil", "651", "3.173", "21%"],
        ].map(([i, n, op, p]) => ({ i: i === "Outros" ? t("Outros", "Other") : i === "Brasil" ? t("Brasil", "Brazil") : i, n, op, p }))}
      />
      <DataTable
        caption={t("Tabela 20 — Atrasos, jan–jun/2026", "Table 20 — Delays, Jan–Jun/2026")}
        source={t("Fonte: SOLVE Shipping.", "Source: SOLVE Shipping.")}
        columns={[
          { key: "i", label: t("Instalação", "Facility") },
          { key: "n", label: t("Atrasos", "Delays"), align: "right" },
          { key: "op", label: t("Operações previstas", "Scheduled operations"), align: "right" },
          { key: "p", label: "%", align: "right" },
        ]}
        rows={[
          ["Paranaguá TCP", "168", "530", "32%"],
          ["Brasil Terminal Portuário (BTP)", "177", "359", "49%"],
          ["Santos Brasil", "89", "383", "23%"],
          ["Portonave", "101", "185", "55%"],
          ["DP World Santos", "77", "212", "36%"],
          ["Multi-Rio", "111", "237", "47%"],
          ["Itapoá", "73", "285", "26%"],
          ["Rio Grande", "70", "240", "29%"],
          ["Suape", "28", "75", "37%"],
          ["Pecém", "7", "72", "10%"],
          ["Outros", "195", "595", "33%"],
          ["Brasil", "1.096", "3.173", "35%"],
        ].map(([i, n, op, p]) => ({ i: i === "Outros" ? t("Outros", "Other") : i === "Brasil" ? t("Brasil", "Brazil") : i, n, op, p }))}
      />
    </>
  );
}

export function AereoVisuals() {
  const t = useT();
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ChartFrame
        title={t("Passageiros em junho de 2026", "Passengers in June 2026")}
        source={t("Elaboração própria com dados da ANAC. Total: 10,3 milhões (−1%).", "Prepared by the authors with data from ANAC. Total: 10,3 million (−1%).")}
      >
        <Donut
          data={[
            { name: t("Nacionais 79%", "Domestic 79%"), value: 79, fill: A },
            { name: t("Internacionais 21%", "International 21%"), value: 21, fill: B },
          ]}
        />
      </ChartFrame>
      <ChartFrame
        title={t("Carga aérea em junho de 2026", "Air cargo in June 2026")}
        source={t("Elaboração própria com dados da ANAC. Total: 119 mil t (+9%).", "Prepared by the authors with data from ANAC. Total: 119 thousand t (+9%).")}
      >
        <Donut
          data={[
            { name: t("Doméstica 32%", "Domestic 32%"), value: 32, fill: E },
            { name: t("Internacional 68%", "International 68%"), value: 68, fill: C },
          ]}
        />
      </ChartFrame>
    </div>
  );
}

export function FerroVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Minério de ferro no total de junho de 2026", "Iron ore in the June 2026 total")}
        source={t("Elaboração própria com dados da ANTT.", "Prepared by the authors with data from ANTT.")}
      >
        <Donut
          data={[
            { name: t("Minério de ferro 71%", "Iron ore 71%"), value: 71, fill: C },
            { name: t("Demais cargas 29%", "Other cargo 29%"), value: 29, fill: A },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 21 — Mercadorias nas ferrovias (mil TU)", "Table 21 — Rail freight (thousand useful tonnes)")}
        source={t("Fonte: elaboração própria com dados da ANTT.", "Source: prepared by the authors with data from ANTT.")}
        columns={[
          { key: "i", label: t("Mercadoria", "Commodity") },
          { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
          { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
        ]}
        rows={[
          ["Minério de ferro", "Iron ore", "35.017", "34.841", "-1%"],
          ["Soja", "Soybeans", "5.347", "5.366", "0%"],
          ["Açúcar", "Sugar", "1.676", "1.619", "-3%"],
          ["Celulose", "Pulp", "1.203", "1.111", "-8%"],
          ["Farelo de soja", "Soybean meal", "700", "906", "29%"],
          ["Produtos siderúrgicos", "Steel products", "837", "748", "-11%"],
          ["Cobre", "Copper", "502", "669", "33%"],
          ["Carvão mineral", "Coal", "465", "520", "12%"],
          ["Cloreto de potássio", "Potassium chloride", "312", "438", "41%"],
          ["Demais produtos", "Other products", "2.735", "2.584", "-6%"],
          ["Total", "Total", "48.793", "48.802", "0,0%"],
        ].map(([pt, en, a, b, v]) => ({ i: t(pt, en), a, b, v: <Var value={v} /> }))}
      />
    </>
  );
}

export function PedagioVisuals() {
  const t = useT();
  return (
    <>
      <ChartFrame
        title={t("Classes em junho (milhões de veículos)", "Classes in June (million vehicles)")}
        source={t("Elaboração própria com dados da ABCR. Tabela 22.", "Prepared by the authors with data from ABCR. Table 22.")}
      >
        <GroupedBars
          data={[
            { c: t("Leves", "Light"), y2025: 102.3, y2026: 114 },
            { c: t("Pesados", "Heavy"), y2025: 39.7, y2026: 53.4 },
            { c: t("Motos", "Motorcycles"), y2025: 2.4, y2026: 2.2 },
            { c: t("Isentos", "Exempt"), y2025: 4.1, y2026: 4.6 },
          ]}
          xKey="c"
          bars={[
            { key: "y2025", name: t("Junho 2025", "June 2025"), fill: D },
            { key: "y2026", name: t("Junho 2026", "June 2026"), fill: A },
          ]}
        />
      </ChartFrame>
      <ChartFrame
        title={t("Gestão do tráfego em junho de 2026 (milhões de veículos)", "Traffic management in June 2026 (million vehicles)")}
        source={t("Elaboração própria com dados da ABCR.", "Prepared by the authors with data from ABCR.")}
      >
        <Donut
          data={[
            { name: t("São Paulo 79,8", "São Paulo 79,8"), value: 79.8, fill: A },
            { name: t("Federais 74", "Federal 74"), value: 74, fill: B },
            { name: t("Demais estados 20,6", "Other states 20,6"), value: 20.6, fill: E },
          ]}
        />
      </ChartFrame>
      <DataTable
        caption={t("Tabela 22 — Tráfego pedagiado (milhões de veículos)", "Table 22 — Tolled traffic (million vehicles)")}
        source={t("Fonte: elaboração própria com dados da ABCR.", "Source: prepared by the authors with data from ABCR.")}
        columns={[
          { key: "i", label: t("Classe", "Class") },
          { key: "a", label: t("Junho 2025", "June 2025"), align: "right" },
          { key: "b", label: t("Junho 2026", "June 2026"), align: "right" },
          { key: "v", label: t("Variação", "Change"), align: "right" },
        ]}
        rows={[
          ["Veículos leves", "Light vehicles", "102,3", "114,0", "11,4%"],
          ["Veículos pesados", "Heavy vehicles", "39,7", "53,4", "34,3%"],
          ["Motos", "Motorcycles", "2,4", "2,2", "-9,0%"],
          ["Tráfego isento", "Exempt traffic", "4,1", "4,6", "13,8%"],
          ["Tráfego total", "Total traffic", "148,6", "174,2", "17,3%"],
        ].map(([pt, en, a, b, v]) => ({ i: t(pt, en), a, b, v: <Var value={v} /> }))}
      />
    </>
  );
}

export function AcidentesVisuals() {
  const t = useT();
  const rows: [string, string, string, string][] = [
    ["SC-101", "2.008", "2.053", "2%"],
    ["SP-116", "1.554", "1.530", "-2%"],
    ["MG-381", "1.276", "1.433", "12%"],
    ["RJ-101", "1.138", "1.197", "5%"],
    ["PR-277", "1.032", "1.145", "11%"],
    ["ES-101", "1.049", "884", "-16%"],
    ["MG-40", "943", "921", "-2%"],
    ["RJ-116", "859", "874", "2%"],
    ["PR-376", "806", "920", "14%"],
    ["PB-230", "631", "547", "-13%"],
    ["RS-116", "642", "629", "-2%"],
    ["SC-282", "657", "785", "19%"],
    ["MG-116", "643", "687", "7%"],
    ["RS-290", "436", "346", "-21%"],
    ["SC-470", "507", "557", "10%"],
    ["MT-163", "491", "464", "-5%"],
    ["MG-262", "516", "517", "0,2%"],
    ["PE-101", "498", "667", "34%"],
    ["BA-101", "493", "453", "-8%"],
    ["Demais trechos", "18.598", "19.429", "4%"],
    ["Total", "34.777", "36.038", "4%"],
  ];
  return (
    <DataTable
      caption={t(
        "Tabela 23 — Acidentes por trecho, acumulado até junho",
        "Table 23 — Accidents by stretch, cumulative through June",
      )}
      source={t("Fonte: elaboração própria com dados da PRF.", "Source: prepared by the authors with data from PRF.")}
      columns={[
        { key: "i", label: "BR/UF" },
        { key: "a", label: "2025", align: "right" },
        { key: "b", label: "2026", align: "right" },
        { key: "v", label: t("Variação", "Change"), align: "right" },
      ]}
      rows={rows.map(([i, a, b, v]) => ({
        i: i === "Demais trechos" ? t("Demais trechos", "Other stretches") : i === "Total" ? "Total" : i,
        a,
        b,
        v: <Var value={v} />,
      }))}
    />
  );
}

export function CombustiveisVisuals() {
  const t = useT();
  return (
    <ChartFrame
      title={t("Preço médio ao consumidor (R$/L)", "Average consumer price (R$/L)")}
      source={t("Elaboração própria com dados da ANP. Abril.", "Prepared by the authors with data from ANP. April.")}
    >
      <GroupedBars
        data={[
          { c: t("Gasolina comum", "Regular gasoline"), y2025: 6.32, y2026: 6.74 },
          { c: t("Óleo diesel", "Diesel oil"), y2025: 6.22, y2026: 7.28 },
        ]}
        xKey="c"
        bars={[
          { key: "y2025", name: t("Abril 2025", "April 2025"), fill: D },
          { key: "y2026", name: t("Abril 2026", "April 2026"), fill: A },
        ]}
      />
    </ChartFrame>
  );
}
