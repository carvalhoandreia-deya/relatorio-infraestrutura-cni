import { Kpi, Kpis, Prose, Section } from "./ui";
import { Car, CircleDollarSign, Droplets, Factory, Flame, Fuel, Gauge, Landmark, Ship, TrainFront, Waves, Zap } from "lucide-react";
import { OguVisuals, ModalidadeVisuals, RapVisuals } from "./drawn";

export function Hero() {
  return (
    <header id="sumario" data-section="sumario" className="scroll-mt-44 pb-10 lg:scroll-mt-20">
      <div className="rounded-lg bg-title px-4 py-4 md:px-5 md:py-5">
        <p className="text-xs font-semibold tracking-wide text-accent uppercase">
          Ano 24 · Número 9 · Setembro 2026
        </p>
        <h1 className="mt-1.5 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-title-ink md:text-3xl">
          Relatório de Infraestrutura
        </h1>
      </div>
      <div className="mt-4 max-w-3xl space-y-3 leading-relaxed text-muted">
        <p className="text-lg">
          Publicação mensal da Confederação Nacional da Indústria (CNI), com leitura navegável e dados mais
          recentes disponíveis até o mês anterior à publicação.
        </p>
        <p className="rounded-md bg-note px-4 py-3 text-sm leading-relaxed">
          Como os órgãos responsáveis pela divulgação das informações possuem diferentes calendários de
          atualização, alguns indicadores podem apresentar defasagem significativa em relação ao período de
          referência.
        </p>
      </div>
      <div className="mt-8">
        <Kpis>
          <Kpi href="#balanca" icon={CircleDollarSign} value="US$ 5.912 milhões" label="Saldo da balança de petróleo e derivados" hint="Junho de 2026, FOB. No mesmo mês do ano anterior, US$ 2.672 milhões FOB." />
          <Kpi href="#ogu" icon={Landmark} value="R$ 84,7 bilhões" label="Alínea investimentos" hint="1,3% do orçamento total. Liquidados R$ 24 bilhões." />
          <Kpi href="#pld" icon={Gauge} value="R$ 188/MWh" label="PLD Sudeste e Centro-Oeste" hint="Valor 20% inferior ao registrado no mesmo mês de 2025." />
          <Kpi href="#combustiveis" icon={Fuel} value="R$ 7,28/L" label="Preço médio do óleo diesel" hint="Abril de 2026, 17% superior a abril de 2025 (R$ 6,22/L)." />
          <Kpi href="#consumo-ee" icon={Factory} value="16,6 mil GWh" label="Consumo industrial de energia elétrica" hint="1% superior ao mesmo mês de 2025 e 36% do total." />
          <Kpi href="#geracao" icon={Zap} value="71 GW médios" label="Geração no sistema interligado nacional" hint="3% superior a junho de 2025. Hidráulica acima de 30 MW médios: 56%." />
          <Kpi href="#reservatorios" icon={Droplets} value="151.411 GWh" label="Energia armazenada nos reservatórios" hint="2% superior a junho de 2025. Sul: 62%, 22 pontos percentuais abaixo." />
          <Kpi href="#petroleo-producao" icon={Waves} value="134 milhões bep" label="Produção nacional de petróleo" hint="19% superior a junho de 2025. Cerca de 98,1% de campos marítimos." />
          <Kpi href="#gas-preco" icon={Flame} value="US$ 19,91/MMBtu" label="Preço do gás ao consumidor industrial" hint="10% superior a setembro de 2024 (US$ 18,13/MMBtu)." />
          <Kpi href="#portos" icon={Ship} value="101 milhões t" label="Cargas em portos públicos e TUPs" hint="Fevereiro de 2026, 4% superior. TUPs: 67%." />
          <Kpi href="#pedagio" icon={Car} value="174 milhões" label="Movimentação em rodovias pedagiadas" hint="17% superior a junho de 2025. Veículos pesados: 34% superior." />
          <Kpi href="#ferro" icon={TrainFront} value="49 milhões TU" label="Movimentação de mercadorias nas ferrovias" hint="Valor aproximado ao de junho de 2025. Minério de ferro: 71%." />
        </Kpis>
      </div>
    </header>
  );
}

export function Investimentos() {
  return (
    <>
      <Section id="investimentos" kicker="1" title="Investimento" />

      <Section id="ogu" kicker="1.1" title="Orçamento Geral e de Investimentos da União">
        <Prose>
          <p>
            Em 2026, a dotação total autorizada registrada no Siga Brasil para o Orçamento da União foi de
            aproximadamente R$ 6,5 trilhões, conforme consulta em agosto de 2026. Deste valor, aproximadamente
            R$ 84,7 bilhões correspondem à alínea “investimentos”, o que representa 1,3% do orçamento total.
          </p>
          <p>
            Entre os órgãos superiores, o Ministério dos Transportes deteve o segundo maior orçamento de
            investimentos com R$ 13,4 bilhões, o que representou 16% da dotação total. O Ministério de Portos e
            Aeroportos tem orçamento de investimentos de R$ 836 milhões.
          </p>
          <p>
            Do orçamento de investimentos da União para 2026 (R$ 84,7 bilhões), foram empenhados R$ 53,8
            bilhões, cerca de 63,5% da dotação autorizada até o fim de agosto. No mesmo período foram
            liquidados R$ 24 bilhões e pagos R$ 22,6 bilhões. Já o pagamento total, incluindo os restos a pagar
            pagos no período, somaram R$ 46,1 bilhões.
          </p>
        </Prose>
        <OguVisuals />
      </Section>

      <Section
        id="transportes-orcamento"
        kicker="1.2"
        title="Orçamento Geral e de Investimentos do Ministério dos Transportes e do Ministério de Portos e Aeroportos"
      >
        <Prose>
          <p>
            Do montante de R$ 13,4 bilhões autorizados para os investimentos do Ministério dos Transportes em
            2026, foram empenhados cerca de R$ 11,3 bilhões (84,5% da dotação autorizada) e liquidados
            aproximadamente R$ 6,9 bilhões. Os valores pagos do orçamento foram de cerca de R$ 6,3 bilhões e o
            total desembolsado (incluindo os restos a pagar pagos) foi de R$ 9,2 bilhões.
          </p>
          <p>
            No que diz respeito ao Ministério de Portos e Aeroportos, do montante de R$ 836 milhões autorizado
            para investimentos em 2026, foram empenhados R$ 471 milhões, liquidados R$ 136 milhões e pagos R$
            122 milhões.
          </p>
          <p>
            Dos R$ 14,1 bilhões de investimentos autorizados para o Ministério dos Transportes (R$ 13,4
            bilhões) e para o Ministério de Portos e Aeroportos (R$ 836 milhões), aproximadamente 82% (R$ 11,6
            bilhões) foram destinados ao setor rodoviário. O restante foi dividido entre os setores ferroviário
            (R$ 411 milhões), aquaviário (R$ 554 milhões), aeroportuário (R$ 259 milhões) e outros (R$ 1,3
            bilhão).
          </p>
        </Prose>
        <ModalidadeVisuals />
        <Prose>
          <p>
            A União inscreveu, em 2026, aproximadamente R$ 8,1 bilhões de restos a pagar processados. Deste
            valor, o Ministério dos Transportes inscreveu cerca de R$ 159 milhões.
          </p>
          <p>
            Em relação aos restos a pagar não-processados, a União inscreveu, em 2026, R$ 70,5 bilhões. O
            Ministério dos Transportes teve R$ 4,4 bilhões inscritos e o Ministério de Portos e Aeroportos R$
            439 milhões.
          </p>
          <p>
            Do volume total de restos a pagar inscritos pela União, os pagamentos corresponderam a 29% do total
            inscrito, excluídos os cancelamentos. O Ministério dos Transportes pagou 64% do valor que inscreveu
            para 2026. O Ministério de Portos e Aeroportos pagou 41% do seu total inscrito.
          </p>
        </Prose>
        <RapVisuals />
      </Section>
    </>
  );
}

