import { Prose, Section } from "./ui";
import {
  AlcoolVisuals,
  BalancaVisuals,
  BiodieselVisuals,
  DerivadosVisuals,
  FixaVisuals,
  GasConsumoVisuals,
  GasOfertaVisuals,
  GasPrecoVisuals,
  MovelVisuals,
  PetroleoVisuals,
} from "./drawn";

export function PetroleoBioGasTelecom() {
  return (
    <>
      <Section id="petroleo" kicker="3" title="Petróleo" />

      <Section id="petroleo-producao" kicker="3.1" title="Produção, Comércio Exterior e Processamento de Petróleo (ANP)">
        <Prose>
          <p>
            A produção nacional de petróleo, no mês de junho de 2026, foi de 134 milhões de barris de petróleo,
            equivalente (1 bep equivale a 0,16 m³), volume 19% superior ao produzido no mesmo mês do ano
            anterior.
          </p>
          <p>
            O grau API (escala que mede a densidade dos líquidos derivados do petróleo) médio do petróleo
            produzido em junho de 2026 foi de 28,4°, sendo que 3,9% da produção foi considerada óleo leve
            (maior ou igual a 31°API), 89,3% considerada óleo médio (entre 22°API e 31°API) e 6,8% considerada
            óleo pesado (menor que 22°API).
          </p>
        </Prose>
        <Prose>
          <p>
            De acordo com a ANP, em junho de 2026, cerca de 98,1% da produção de petróleo do Brasil foi
            extraída de campos marítimos.
          </p>
          <p>
            O volume correspondente ao processamento de petróleo nas refinarias nacionais, em junho de 2026,
            foi de 63 milhões bep. Esse volume foi 5% superior ao observado no mesmo mês em 2025.
          </p>
          <p>
            O volume de petróleo exportado pelo país, em junho de 2026, foi de 60,6 milhões bep, volume 7%
            superior ao exportado em junho de 2025. Já a importação de petróleo foi de 6,7 milhões bep, volume
            15% inferior ao observado no mesmo mês do ano anterior. O consumo aparente de petróleo alcançou
            80,3 milhões bep.
          </p>
          <p>
            O preço médio do petróleo importado pelo país, em junho de 2026, foi de US$ 114/barril, valor 65%
            superior ao observado em junho de 2025.
          </p>
        </Prose>
        <PetroleoVisuals />
      </Section>

      <Section
        id="derivados"
        kicker="3.2"
        title="Produção e Comércio Exterior de Combustíveis Derivados de Petróleo (ANP)"
      >
        <Prose>
          <p>
            Em junho de 2026, a produção nacional de derivados de petróleo foi de 65 milhões bep, volume 1%
            superior ao produzido em junho de 2025.
          </p>
          <p>
            A importação de derivados de petróleo, em junho de 2026, foi de 14 milhões bep, valor 18% inferior
            ao registrado em junho do ano anterior. No que diz respeito à exportação de derivados de petróleo,
            em junho de 2026 foi constatado um total de 15 milhões bep, o que representa um volume 25% superior
            ao observado no mesmo mês de 2025.
          </p>
          <p>
            Em junho de 2026, a dependência externa de derivados do petróleo foi de -2% em relação a um consumo
            aparente de 64 milhões bep.
          </p>
        </Prose>
        <DerivadosVisuals />
      </Section>

      <Section id="balanca" kicker="3.3" title="Balança Comercial de Petróleo e Derivados (ANP)">
        <Prose>
          <p>
            A balança comercial brasileira de petróleo e derivados, em junho de 2026, apresentou saldo positivo
            de US$ 5.912 milhões FOB. Ou seja, o Brasil exportou US$ 5.912 milhões FOB a mais do que importou.
            No mesmo mês do ano anterior, esse saldo foi positivo em US$ 2.672 milhões FOB.
          </p>
        </Prose>
        <BalancaVisuals />
      </Section>

      <Section id="biocombustiveis" kicker="4" title="Biocombustíveis" />

      <Section id="biodiesel" kicker="4.1" title="Produção de Biodiesel (ANP)">
        <Prose>
          <p>
            A produção nacional de biodiesel, em junho de 2026, foi de 845 mil m³, montante 8% superior ao
            produzido em junho de 2025.
          </p>
          <p>
            O preço do óleo diesel (misturado com biodiesel), em junho de 2026, foi de R$ 6,78/ℓ, valor 14%
            superior ao registrado em junho de 2025.
          </p>
        </Prose>
        <BiodieselVisuals />
      </Section>

      <Section id="alcool" kicker="4.2" title="Álcool">
        <Prose>
          <p className="font-semibold">4.2.1. Produção de Álcool e Açúcar (MAPA)</p>
          <p>
            A safra 2025/2026 produziu, até junho de 2026, 12 milhões de m³ de álcool. Desse total, 65% são
            referentes à produção de álcool etílico hidratado, que é o etanol comum, vendido nos postos de
            gasolina, enquanto o etanol anidro é aquele misturado à gasolina. A produção total de álcool foi
            22% superior em relação ao mesmo período da safra anterior.
          </p>
          <p>
            A produção de açúcar no mesmo período foi de 11 milhões de toneladas, volume 13% inferior ao
            observado no mesmo período da safra 2024/2025.
          </p>
          <p>
            As safras se iniciam em abril e se encerram em agosto do ano posterior. Assim, durante quatro meses
            se observam duas safras paralelas nos diferentes estados brasileiros.
          </p>
          <p className="font-semibold">4.2.2. Vendas de Álcool Etílico Hidratado (ANP)</p>
          <p>
            As vendas de álcool etílico hidratado foram de 1,8 milhão de m³ em junho de 2026. Esse número
            representa um aumento de 11% em relação ao volume vendido em junho do ano anterior.
          </p>
          <p>
            As vendas de álcool etílico hidratado representaram 32% do universo de vendas do álcool e da
            gasolina em junho de 2026. Essa participação foi 1,2 ponto percentual superior ao observado em
            junho do ano anterior.
          </p>
          <p>
            Em junho de 2026, o preço médio ao consumidor do álcool etílico hidratado foi de R$ 4,13/ℓ, valor
            2% inferior ao observado no mesmo mês do ano anterior.
          </p>
          <p>¹Gasolina C: Gasolina A + percentual de Álcool Anidro.</p>
        </Prose>
        <AlcoolVisuals />
      </Section>

      <Section id="gas" kicker="5" title="Gás Natural" />

      <Section id="gas-oferta" kicker="5.1" title="Produção e Oferta de Gás Natural (MME)">
        <Prose>
          <p>
            Segundo dados mais recentes divulgados pelo MME, a produção nacional diária média de gás natural,
            em setembro de 2025, foi de 191 milhões m³/dia, representando um aumento de 12% comparado a
            setembro do ano anterior.
          </p>
          <p>
            A importação média de Gás Natural (GN) da Bolívia, em setembro de 2025, foi de 10,5 milhões de
            m³/dia, volume 28% inferior ao observado no mesmo mês de 2024. A importação média de Gás Natural
            Liquefeito (GNL), em setembro de 2025, totalizou 5 milhões m³/dia, volume 71% inferior ao montante
            observado no mesmo mês do ano anterior.
          </p>
          <p>
            Em setembro de 2025, a oferta total de gás natural totalizou 76,8 milhões m³/dia, valor 10%
            inferior ao observado no mesmo mês do ano anterior.
          </p>
          <p>
            A proporção de gás natural queimado, perdido, reinjetado e consumido nas unidades de exploração e
            produção (E&P) foi de 68,5% em setembro de 2024. Em setembro de 2025, essa proporção foi de 67,8%.
          </p>
        </Prose>
        <GasOfertaVisuals />
      </Section>

      <Section id="gas-consumo" kicker="5.2" title="Consumo de Gás Natural (MME)">
        <Prose>
          <p>
            O consumo de gás natural no país em setembro de 2025 foi, em média, cerca de 76 milhões de
            m³/dia. Essa média é 7% inferior ao volume médio diário consumido em setembro de 2024. O setor
            industrial consumiu aproximadamente 41 milhões de m³/dia de gás natural, volume 2% superior ao
            apresentado no mesmo mês do ano anterior.
          </p>
          <p>
            A geração elétrica foi responsável por 34% do consumo de gás natural em setembro de 2025. O setor
            industrial foi responsável por 54% do volume total de gás consumido no mesmo mês.
          </p>
        </Prose>
        <GasConsumoVisuals />
      </Section>

      <Section id="gas-preco" kicker="5.3" title="Preço do Gás Natural (MME e EIA)">
        <Prose>
          <p>
            O preço médio do gás natural ao consumidor industrial, em setembro de 2025, foi de US$
            19,91/MMBtu, valor 10% superior ao observado em setembro de 2024 (US$ 18,13/MMBtu).
          </p>
          <p>
            Em setembro de 2025, o preço médio do gás natural no mercado spot Henry Hub foi de US$ 2,97/MMBtu,
            valor 30% superior ao apresentado em setembro de 2024. Esse preço não inclui impostos e transporte,
            sendo estabelecido nos dias úteis em negociações para entrega no dia seguinte.
          </p>
          <p>
            ¹Preço com imposto e custo de transporte. Média mensal. ²Preço sem imposto e custo de transporte.
            Média ponderada mensal das cotações diárias.
          </p>
        </Prose>
        <GasPrecoVisuals />
      </Section>

      <Section id="telecom" kicker="6" title="Telecomunicações" />

      <Section id="movel" kicker="6.1" title="Serviços Contratados Ativos de Internet Móvel (ANATEL)">
        <Prose>
          <p>
            Foram realizados, aproximadamente, 278 milhões de acessos móveis no mês de junho de 2026, valor 4%
            superior ao observado no mesmo mês do ano anterior. Desses acessos, 24% foram realizados por
            tecnologia 5G, 64% por tecnologia 4G, 5% por tecnologia 3G e 7% por tecnologia 2G.
          </p>
          <p>
            Em junho de 2026, a tecnologia 5G foi a que representou o maior crescimento em relação a junho de
            2025 (37%), enquanto a tecnologia 3G apresentou a maior retração (15%).
          </p>
        </Prose>
        <MovelVisuals />
      </Section>

      <Section id="fixa" kicker="6.2" title="Acessos em Internet Fixa (ANATEL)">
        <Prose>
          <p>
            No mês de junho de 2026, foram efetuados 58 milhões de acessos em internet fixa, valor 7% superior
            ao verificado no mesmo mês do ano anterior. Do total de acessos, 95% foram realizados em velocidade
            superior a 34 Mbps, o que representa um crescimento de 9% em relação aos acessos realizados em
            junho de 2025 nessa mesma faixa.
          </p>
          <p>
            O aumento dos acessos em alta velocidade acompanha o crescimento da utilização da fibra ótica, que
            aumentou 10% com relação ao mesmo período do ano anterior. A fibra ótica é a tecnologia com maior
            número de acessos no Brasil, abrangendo 81% do mercado.
          </p>
        </Prose>
        <FixaVisuals />
      </Section>
    </>
  );
}
