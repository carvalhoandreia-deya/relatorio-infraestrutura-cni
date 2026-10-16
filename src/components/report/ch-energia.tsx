import { Prose, Section } from "./ui";
import {
  ConsumoVisuals,
  ContinuidadeVisuals,
  ExpansaoVisuals,
  GdVisuals,
  GeracaoVisuals,
  PldVisuals,
  PrevisaoVisuals,
  ReservatorioVisuals,
  TransmissaoVisuals,
} from "./drawn";

export function Energia() {
  return (
    <>
      <Section id="energia" kicker="2" title="Energia Elétrica" />

      <Section id="geracao" kicker="2.1" title="Geração de Energia Elétrica (CCEE)">
        <Prose>
          <p>
            Em junho de 2026, a geração de energia elétrica no sistema interligado nacional registrou 71 GW
            médios, valor 3% superior ao verificado em junho de 2025.
          </p>
          <p>
            A fonte com maior participação foi a hidráulica em usinas com capacidade de geração superior a 30
            MW médios (56% do total). A fonte de geração de energia que apresentou o maior crescimento em
            comparação ao mesmo mês do ano anterior foi a fotovoltaica (30%).
          </p>
        </Prose>
        <GeracaoVisuals />
      </Section>

      <Section id="expansao" kicker="2.2" title="Expansão da Capacidade de Geração de Energia Elétrica (ANEEL)">
        <Prose>
          <p>
            O gráfico apresentado a seguir ilustra a expansão acumulada da capacidade geradora no sistema
            interligado nacional ao longo do ano corrente. As linhas representam uma média teórica de entrada
            uniforme de capacidade geradora para que a previsão seja atingida.
          </p>
          <p>
            Entre janeiro e junho de 2026, entraram em operação 71 usinas com um total de 2706 MW de potência
            instalada. Desse total, as usinas eólicas (EOLs) responderam por 59 MW, as usinas à biomassa por 86
            MW, as pequenas centrais hidrelétricas (PCHs) por 50 MW e as centrais geradoras fotovoltaicas (UFV)
            por 2511 MW.
          </p>
        </Prose>
        <ExpansaoVisuals />
      </Section>

      <Section id="previsao" kicker="2.2.1" title="Previsão da Expansão da Capacidade de Geração de Energia Elétrica">
        <Prose>
          <p>
            Cenário conservador: considera somente as usinas sem restrições à entrada em operação.
          </p>
          <p>
            Cenário otimista: considera as usinas sem restrições à entrada em operação e as usinas com
            impedimentos tais como licença ambiental não obtida, obra não iniciada e contrato de combustível
            indefinido.
          </p>
          <p>Estão inclusos em fontes alternativas, 50 MW referentes à entrada de UHEs.</p>
          <p>
            A previsão para 2026 equivale àquela definida em 31/12/2025 para os doze meses subsequentes.
          </p>
          <p>
            As estimativas divulgadas pela Agência Nacional de Energia Elétrica (ANEEL) indicam, no cenário
            conservador, aumento de 0,7% ao ano na capacidade total de geração elétrica do país, considerando o
            período entre o início de 2026 e o final de 2030.
          </p>
          <p>
            No cenário otimista, a previsão de expansão é de aproximadamente 15 GW no período 2026-2030. Nesse
            cenário, a taxa média de crescimento da capacidade instalada de geração elétrica seria de 1,3% ao
            ano.
          </p>
          <p>
            Entre 2026 e 2030, no cenário conservador, estima-se o crescimento de 2% da capacidade instalada no
            Brasil de usinas térmicas (UTEs). Mesmo com a expansão prevista, a participação na capacidade total
            instalada das UTEs deve ser mantida em cerca de 15% (desconsiderando as centrais nucleares) até
            2030. As usinas hidrelétricas devem reduzir a sua participação na matriz elétrica nacional de 49%,
            no início de 2026, para 48%, no final de 2030.
          </p>
          <p>
            Ao final de 2026, as fontes de energia alternativas corresponderam a 36% da capacidade instalada
            total. A participação das usinas térmicas a biomassa foi de 7% e, pela previsão conservadora, o
            percentual deve ser mantido até 2030. No caso das usinas eólicas (EOL), a previsão é que a
            participação dessa fonte na capacidade instalada suba para 16%, enquanto na participação das usinas
            solares fotovoltaicas estima-se um aumento de 10% para 11%. A participação das pequenas centrais
            hidrelétricas (PCHs) deve permanecer em 3% até 2030.
          </p>
          <p>
            A previsão otimista para a expansão da geração das fontes de energia alternativa é que a
            participação atinja, até 2030, 39% da capacidade instalada do País. As usinas solares fotovoltaicas
            (UFV) possuem a maior previsão de aumento da capacidade instalada, com um crescimento de 29%. Em
            segundo lugar ficam as usinas eólicas, com previsão de 8% de aumento de capacidade.
          </p>
        </Prose>
        <PrevisaoVisuals />
      </Section>

      <Section id="gd" kicker="2.2.2" title="Expansão da Geração Distribuída">
        <Prose>
          <p>
            A geração distribuída pode ser definida como uma fonte de energia elétrica conectada diretamente à
            rede de distribuição ou situada junto ao próprio consumidor. Em junho de 2026, entraram em operação
            443 MW de potência instalada em geração distribuída, valor 27% inferior ao observado no mesmo mês
            de 2025.
          </p>
          <p>
            A potência instalada acumulada em geração distribuída, até junho de 2026, foi de 46.504 MW, valor
            17% superior ao registrado no mesmo período de 2025. O setor industrial representou 7% desse total,
            com 3.263 MW de potência instalada.
          </p>
        </Prose>
        <GdVisuals />
      </Section>

      <Section id="transmissao" kicker="2.3" title="Expansão das Linhas de Transmissão (MME)">
        <Prose>
          <p>
            Os dados de expansão das linhas de transmissão divulgados pelo Ministério de Minas e Energia (MME)
            apresentam defasagem em relação ao mês de publicação do Relatório de Infraestrutura.
          </p>
          <p>
            Em março de 2026, entraram em operação 374 novos km de linhas de transmissão. De acordo com a
            previsão do Ministério de Minas e Energia, a expectativa para o ano de 2026 é de 4,7 mil km de
            novas linhas de transmissão em operação no país. Para 2027, são previstos 4,4 mil km de novas
            linhas de transmissão.
          </p>
          <p>
            As linhas de transmissão se dividem por classes de tensão que podem utilizar a rede elétrica. Do
            total de novas linhas que entraram em operação até março de 2026, 66 km foram da classe de tensão
            de 230 kV e 660 km foram da classe de tensão de 500/525 kV.
          </p>
        </Prose>
        <p className="text-sm leading-relaxed text-muted">
          Nota: Considera a previsão divulgada pelo Ministério de Minas e Energia em janeiro de 2026.
        </p>
        <TransmissaoVisuals />
      </Section>

      <Section id="reservatorios" kicker="2.4" title="Energia Armazenada Verificada (ONS)">
        <Prose>
          <p>
            Em junho de 2026, quatro das cinco regiões apresentaram nível de energia armazenada nos
            reservatórios inferior ao verificado no mesmo mês do ano anterior. A região Sul apresentou
            reservatórios com o nível de 62%, 22 pontos percentuais abaixo do verificado no mesmo mês de 2025.
            A região Nordeste foi a que apresentou o maior incremento no nível dos reservatórios na comparação
            com junho de 2025.
          </p>
          <p>
            Em junho de 2026, os reservatórios brasileiros apresentaram um nível equivalente a 151.411 GWh de
            energia armazenada, valor 2% superior ao observado para o mesmo mês no ano anterior. As regiões
            Sudeste/Centro-Oeste tiveram 97.982 GWh armazenados, valor 1% inferior ao observado em junho de
            2025.
          </p>
        </Prose>
        <ReservatorioVisuals />
      </Section>

      <Section id="consumo-ee" kicker="2.5" title="Consumo de Energia Elétrica (EPE)">
        <Prose>
          <p>
            O consumo no mercado nacional de fornecimento de energia elétrica a consumidores livres e cativos
            atingiu, em junho de 2026, 46 mil GWh, apresentando um valor 2,8% superior ao observado em junho de
            2025.
          </p>
          <p>
            O consumidor cativo é o consumidor ao qual só é permitido comprar energia da distribuidora detentora
            da concessão ou permissão na área onde se localizam as instalações do “acessante”. Já aquele que
            consumia carga igual ou maior que 3.000 kW era considerado consumidor livre e podia optar por
            contratar seu fornecimento de qualquer concessionário, permissionário ou autorizado de energia
            elétrica do sistema interligado. Essa limitação reduziu-se posteriormente, dando margem a maior
            abertura do mercado.
          </p>
          <p>
            O consumo industrial de energia elétrica foi de 16,6 mil GWh, valor 1% superior ao observado no
            mesmo mês de 2025, e representou 36% do total da energia elétrica consumida em junho de 2026.
          </p>
          <p>
            Em junho de 2026, o setor industrial que teve maior crescimento no consumo de energia elétrica foi
            o de extração de minerais metálicos, apresentando um aumento de 13% no consumo de energia na
            comparação com o mesmo mês de 2025.
          </p>
        </Prose>
        <ConsumoVisuals />
      </Section>

      <Section id="pld" kicker="2.6" title="Preço de Liquidação das Diferenças (CCEE)">
        <Prose>
          <p>
            O Preço de Liquidação das Diferenças (PLD) é utilizado para valorar a compra e a venda de energia
            no mercado de curto prazo. O PLD é um valor determinado semanalmente para cada patamar de carga com
            base no custo marginal de operação, limitado por um preço máximo e mínimo vigentes para cada
            período de apuração e para cada submercado.
          </p>
          <p>
            Os intervalos de duração de cada patamar são determinados para cada mês de apuração pelo ONS e
            informados à Câmara de Comercialização de Energia Elétrica (CCEE), para que sejam considerados no
            sistema de contabilização e liquidação.
          </p>
          <p>
            O cálculo da média mensal do PLD por submercado considera os preços semanais por patamar de carga
            leve, média e pesada, ponderado pelo número de horas em cada patamar e em cada semana do mês, para
            todas as regiões.
          </p>
          <p>
            Nas regiões Sudeste e Centro-Oeste, o PLD observado, em junho de 2026, foi de R$ 188/MWh, valor 20%
            inferior ao registrado no mesmo mês de 2025. Para a região Sul, o PLD registrou o valor de R$
            194/MWh, apresentando uma redução de 18% em relação ao mesmo mês do ano anterior. A região Nordeste
            registrou o valor de R$ 184/MWh, apresentando uma redução de 20% em relação ao mesmo mês do ano
            anterior. Já a região Norte apresentou o PLD em R$ 187/MWh, uma redução de 20% comparado com junho
            de 2025.
          </p>
        </Prose>
        <PldVisuals />
      </Section>

      <Section id="continuidade" kicker="2.7" title="Indicadores de continuidade do fornecimento de energia elétrica.">
        <Prose>
          <p>
            A continuidade do fornecimento de energia é acompanhada pela ANEEL por meio da Duração Equivalente
            de Interrupção por Unidade Consumidora (DEC) e da Frequência Equivalente de Interrupção por Unidade
            Consumidora (FEC). Os indicadores DEC e FEC são divulgados por meio de subdivisões das
            distribuidoras, denominadas conjuntos de unidades consumidoras.
          </p>
          <p>2.7.1. Duração Equivalente de Interrupção por Unidade Consumidora (DEC)</p>
          <p>
            O DEC é um indicador elaborado pela ANEEL que mede o tempo médio, em horas, que cada conjunto de
            unidades consumidoras ficou sem energia elétrica em um determinado mês.
          </p>
          <p>
            O DEC/Limite compara o valor do DEC observado com o limite estabelecido pela ANEEL. Esse índice
            permite avaliar se a distribuidora está dentro do padrão exigido (menor ou igual um) ou se excedeu
            (maior que um) o tempo máximo de interrupção determinado pela ANEEL.
          </p>
          <p>
            Em junho, a distribuidora MUXENERGIA foi a que apresentou o melhor desempenho em ternos de tempo
            médio de interrupção no fornecimento de energia, com um DEC de 0,24, seguida pela EFLJC (0,32) e
            pela EFLUL (0,45), respectivamente.
          </p>
          <p>A apuração desses indicadores considera interrupções com duração maior ou igual a 3 minutos.</p>
          <p>2.7.2. Frequência Equivalente de Interrupção por Unidade Consumidora (FEC)</p>
          <p>
            O indicador FEC é estabelecido pela ANEEL e mede a quantidade média de vezes que cada conjunto de
            unidades consumidoras sofreu interrupção no fornecimento de energia elétrica em um determinado
            período.
          </p>
          <p>
            O FEC/Limite compara o valor do FEC observado com o limite definido pela ANEEL. Assim como no caso
            do DEC/Limite, esse índice mostra se a frequência de interrupções está dentro do padrão
            estabelecido pela ANEEL (menor ou igual um) ou se foi ultrapassado (maior que um).
          </p>
          <p>
            Em junho, AME, ELFSM e ESS apresentaram o melhor desempenho em termos de frequência média de
            interrupções no fornecimento de energia, todas registrando um FEC de 0,59.
          </p>
          <p>A apuração desses indicadores considera interrupções com duração maior ou igual a 3 minutos.</p>
          <p>
            Entre junho de 2025 e junho de 2026, a duração média das interrupções no Brasil foi de 9 horas e 4
            minutos. Por sua vez, a quantidade média de interrupções atingiu 4,56.
          </p>
        </Prose>
        <ContinuidadeVisuals />
      </Section>

    </>
  );
}
