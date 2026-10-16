import { Prose, Section } from "./ui";
import {
  AcidentesVisuals,
  AereoVisuals,
  CombustiveisVisuals,
  FerroVisuals,
  PedagioVisuals,
  PortosVisuals,
  TerminaisVisuals,
} from "./drawn";

export function Transportes() {
  return (
    <>
      <Section id="transportes" kicker="7" title="Transportes" />

      <Section id="portos" kicker="7.1" title="Portos Selecionados e Terminais de Uso Privativo (ANTAQ)">
        <Prose>
          <p className="font-semibold">7.1.1. Movimentação de cargas</p>
          <p>
            Os dados de movimentação portuária da ANTAQ são divulgados com defasagem em relação ao mês de
            publicação do relatório. Foram considerados os dados disponíveis.
          </p>
          <p>
            Em fevereiro de 2026, o total de cargas movimentadas nos portos públicos e nos terminais de uso
            privativo (TUPs) foi de 101 milhões de toneladas, volume 4% superior ao do mesmo mês de 2025.
          </p>
          <p>
            Os TUPs representaram 67% da movimentação total de cargas nos portos e terminais em fevereiro de
            2026. A movimentação total nos TUPs foi de 68 milhões de toneladas, volume 10% superior ao
            observado no mesmo mês de 2025. Os portos públicos movimentaram 33 milhões de toneladas, volume 6%
            inferior ao registrado no mesmo mês do ano anterior.
          </p>
          <p>
            A quantidade de contêineres movimentados em todos os portos organizados e terminais privados do
            país, em fevereiro de 2026, foi de 1192 mil TEUs (twenty-foot equivalent unit), volume 4% superior
            ao mesmo mês do ano anterior.
          </p>
          <p>
            Em fevereiro de 2026, a navegação de longo curso representou 68% da movimentação total de cargas,
            seguida pela navegação de cabotagem (24%), de interior (7%) e de apoio marítimo e portuário (menos
            de 1%).
          </p>
          <p>
            Na navegação de cabotagem, foram movimentadas 24 milhões de toneladas, valor 9% superior ao
            observado em fevereiro de 2025.
          </p>
          <p>
            Os portos privados corresponderam por 75% das cargas movimentadas, totalizando 18 milhões de
            toneladas em fevereiro. Os portos públicos movimentaram 6 milhões de toneladas, 25% da movimentação
            total.
          </p>
          <p>
            As principais cargas movimentadas, em toneladas, foram os granéis líquidos e gasosos (15,9 milhões
            ton), seguidos pelos granéis sólidos (4 milhões ton), pelas cargas conteinerizadas (3,8 milhões
            ton) e pela carga geral (0,8 milhões ton).
          </p>
        </Prose>
        <PortosVisuals />
      </Section>

      <Section id="terminais" kicker="7.1.2" title="Capacidade utilizada nos terminais de contêineres">
        <Prose>
          <p>
            Em junho de 2026, dentre os dez terminais mais movimentados, o terminal de contêiner de SUAPE foi o
            que apresentou o maior nível de utilização, com 100% da ocupação.
          </p>
          <p className="font-semibold">
            7.1.3. Cancelamentos, omissões e atrasos nos terminais de contêineres
          </p>
          <p>
            Das 3173 operações de contêiner previstas na navegação de longo curso de janeiro a junho de 2026,
            foram contabilizados 651 casos de omissões ou cancelamentos (21% do total).
          </p>
          <p>
            O terminal Paranaguá TCP foi o que apresentou o maior número de problemas (109), seguido por Santos
            Brasil (100) e Brasil Terminal Portuário – BTP (69).
          </p>
          <p>
            Em relação à pontualidade das movimentações nessas infraestruturas, de janeiro a junho de 2026,
            foram 1096 casos de atraso, o que representa 35% do total. Nesse período, a instalação que
            apresentou o maior número de operações não pontuais foi o Brasil Terminal Portuário (BTP) com 177
            registros de atraso.
          </p>
          <p>
            De janeiro a junho de 2026, 55% dos embarques previstos nos terminais de contêineres do país
            sofreram atrasos, omissões ou cancelamentos.
          </p>
        </Prose>
        <TerminaisVisuals />
      </Section>

      <Section id="aereo" kicker="7.2" title="Transporte Aéreo (ANAC)">
        <Prose>
          <p>
            A movimentação de passageiros pagos em junho de 2026, somando mercado nacional e internacional, foi
            de 10,3 milhões de passageiros, valor 1% inferior ao averiguado no mesmo mês do ano anterior. Os
            passageiros nacionais representaram 79% da movimentação total em junho de 2026.
          </p>
          <p>
            A movimentação de carga aérea total no país, em junho de 2026, somando mercado nacional e
            internacional, foi de 119 mil toneladas, montante 9% superior ao averiguado no mesmo mês do ano
            anterior. A carga doméstica respondeu por 32% do total de cargas movimentadas no período.
          </p>
        </Prose>
        <AereoVisuals />
      </Section>

      <Section id="ferro" kicker="7.3" title="Cargas Ferroviárias (ANTT)">
        <Prose>
          <p>
            A movimentação de mercadorias nas ferrovias, em junho de 2026, foi de 49 milhões de toneladas úteis
            (TUs), valor aproximado ao observado no mesmo mês de 2025. A movimentação de cloreto de potássio
            foi a que apresentou maior crescimento (41%). O minério de ferro correspondeu a 71% do total
            movimentado em junho de 2026.
          </p>
        </Prose>
        <FerroVisuals />
      </Section>

      <Section id="pedagio" kicker="7.4" title="Tráfego Rodoviário Pedagiado (ABCR)">
        <Prose>
          <p>
            Em junho de 2026, a movimentação em rodovias federais e estaduais pedagiadas foi de 174 milhões de
            veículos, valor 17% superior ao averiguado no mesmo mês do ano anterior. Os veículos leves
            representaram 65% da movimentação total, seguido pelos veículos pesados (31%) e motos (1%). O
            tráfego isento em rodovias pedagiadas somou 5 milhões de veículos, o que representa 3% do total.
          </p>
          <p>
            O tráfego de veículos pesados em junho de 2026 foi de 53,4 milhões de veículos, equivalente à 31%
            de todo o tráfego pedagiado. Esse valor foi 34% superior ao observado no mesmo mês no ano anterior.
            O tráfego pedagiado de veículos leves foi de 114 milhões de veículos, valor 11% superior ao
            verificado em junho de 2025.
          </p>
          <p>
            A avaliação por tipo de gestão das rodovias revela que o tráfego em rodovias federais pedagiadas
            foi de 74 milhões, valor 29% superior ao observado em junho de 2025. Em relação às rodovias
            estaduais pedagiadas, o tráfego foi de 100,5 milhões, valor 10% superior ao observado no mesmo mês
            do ano anterior. Desse total, trafegaram nas rodovias do estado de São Paulo 79,8 milhões de
            veículos, e em outros estados, 20,6 milhões.
          </p>
        </Prose>
        <PedagioVisuals />
      </Section>

      <Section id="acidentes" kicker="7.5" title="Acidentes em Rodovias Federais (PRF)">
        <Prose>
          <p>
            Em junho de 2026, foram registrados 6.184 acidentes nas rodovias federais brasileiras, segundo
            dados da Polícia Rodoviária Federal (PRF). O total de acidentes é 1% superior ao mesmo mês de 2025.
          </p>
          <p>
            Os trechos das rodovias federais que mais concentraram acidentes entre janeiro e junho de 2026
            foram os da BR 101/SC (2053 acidentes), BR 116/SP (1530 acidentes) e BR 381/MG (1433 acidentes).
          </p>
        </Prose>
        <AcidentesVisuals />
      </Section>

      <Section id="combustiveis" kicker="7.6" title="Preço ao Consumidor da Gasolina Comum e Óleo Diesel (ANP)">
        <Prose>
          <p>
            O preço médio da gasolina comum, em abril de 2026, foi de R$ 6,74/L, valor 7% superior ao
            observado em abril de 2025 (R$ 6,32/L).
          </p>
          <p>
            De acordo com os últimos dados divulgados pela ANP, relacionados à composição e estruturas de
            formação de preços, referentes a abril de 2026, os tributos federais corresponderam a 10% do preço
            da gasolina comum, valor 1 ponto percentual (p.p.) inferior em relação ao mesmo período do ano
            anterior. Os tributos estaduais representaram 23% do preço, uma diminuição de 0 p.p. em comparação
            ao mesmo período do ano anterior. As margens de distribuição mais revenda apresentaram um aumento
            de 2 p.p. no período.
          </p>
          <p>
            Já o preço médio do óleo diesel, em abril de 2026, foi de R$ 7,28/L, valor 17% superior ao
            observado em abril de 2025 (R$ 6,22/L).
          </p>
          <p>
            Segundo as informações mais recentes, disponibilizadas pela ANP, relacionadas à composição e
            estruturas de formação de preços, referentes a abril de 2026, os tributos federais corresponderam a
            0% do preço do óleo diesel, valor 5 pontos percentuais (p.p.) inferior em relação ao mesmo período
            do ano anterior. Os tributos estaduais representaram 3% do preço, uma diminuição de 15 p.p. em
            comparação ao mesmo período do ano anterior. As margens de distribuição mais revenda apresentaram
            um aumento de 12 p.p. no período.
          </p>
          <p>
            Nota: *Preço do biodiesel com frete e tributos.
          </p>
          <p>
            Conforme fim da medida provisória do Governo Federal, houve reoneração dos tributos federais a
            partir de 01/01/2024.
          </p>
        </Prose>
        <CombustiveisVisuals />
      </Section>

      <Section id="expediente" kicker="Fonte" title="Expediente">
        <Prose>
          <p>
            Relatório de Infraestrutura | Publicação da Confederação Nacional da Indústria – Superintendência
            de Infraestrutura | Superintendente de Infraestrutura: Wagner Cardoso | Equipe: Andreia Carvalho,
            Euder Santana, Fernanda Ortega, Mariana Lodder, Paula Bogossian, Patrick Fernandes, Ramon Cunha,
            Rennaly Sousa e Roberto Wagner | e-mail: infra@cni.com.br | Projeto Gráfico: Núcleo de Editoração
            CNI | Serviço de Atendimento ao Cliente – SAC: (61) 3317.9989 sac@cni.com.br | Setor Bancário Norte
            Quadra 1 Bloco C Edifício Roberto Simonsen CEP 70040-903 Brasília, DF | www.cni.com.br | Autorizada
            a reprodução desde que citada a fonte.
          </p>
          <p>Documento elaborado com dados disponíveis até 17 de setembro de 2026.</p>
        </Prose>
      </Section>
    </>
  );
}
