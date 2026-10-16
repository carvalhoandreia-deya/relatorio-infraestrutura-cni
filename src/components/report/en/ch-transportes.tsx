import { Prose, Section } from "../ui";
import {
  AcidentesVisuals,
  AereoVisuals,
  CombustiveisVisuals,
  FerroVisuals,
  PedagioVisuals,
  PortosVisuals,
  TerminaisVisuals,
} from "../drawn";


export function Transportes() {
  return (
    <>
      <div className="pdf-chapter">
        <Section id="transportes" kicker="7" title="Transport" />
      </div>

      <Section id="portos" kicker="7.1" title="Selected ports and private-use terminals (ANTAQ)">
        <Prose>
          <p className="font-semibold">7.1.1. Cargo movement</p>
          <p>
            ANTAQ port throughput data are released with a lag relative to the publication month of the report.
            The data available were used.
          </p>
          <p>
            In February 2026, total cargo handled at public ports and private-use terminals (TUPs) was 101
            million tonnes, a volume 4% higher than in the same month of 2025.
          </p>
          <p>
            TUPs accounted for 67% of total cargo throughput at ports and terminals in February 2026. Total
            throughput at TUPs was 68 million tonnes, a volume 10% higher than that observed in the same month
            of 2025. Public ports handled 33 million tonnes, a volume 6% lower than that recorded in the same
            month of the previous year.
          </p>
          <p>
            The number of containers handled at all organized ports and private terminals in the country, in
            February 2026, was 1192 thousand TEUs (twenty-foot equivalent unit), a volume 4% higher than in the
            same month of the previous year.
          </p>
          <p>
            In February 2026, long-haul navigation accounted for 68% of total cargo throughput, followed by
            cabotage (24%), inland navigation (7%) and maritime and port support (less than 1%).
          </p>
          <p>
            In cabotage, 24 million tonnes were handled, 9% higher than that observed in February 2025.
          </p>
          <p>
            Private ports accounted for 75% of the cargo handled, totaling 18 million tonnes in February.
            Public ports handled 6 million tonnes, 25% of total throughput.
          </p>
          <p>
            The main cargoes handled, in tonnes, were liquid and gaseous bulk (15,9 million t), followed by
            solid bulk (4 million t), containerized cargo (3,8 million t) and general cargo (0,8 million t).
          </p>
        </Prose>
        <PortosVisuals />
      </Section>

      <Section id="terminais" kicker="7.1.2" title="Capacity used at container terminals">
        <Prose>
          <p>
            In June 2026, among the ten busiest terminals, the SUAPE container terminal had the highest level
            of utilization, with 100% occupancy.
          </p>
          <p className="font-semibold">7.1.3. Cancellations, omissions and delays at container terminals</p>
          <p>
            Of the 3173 container operations scheduled in long-haul navigation from January to June 2026, 651
            cases of omissions or cancellations were recorded (21% of the total).
          </p>
          <p>
            The Paranaguá TCP terminal had the largest number of problems (109), followed by Santos Brasil
            (100) and Brasil Terminal Portuário – BTP (69).
          </p>
          <p>
            As for the punctuality of movements at these facilities, from January to June 2026 there were 1096
            cases of delay, which represents 35% of the total. In that period, the facility with the largest
            number of operations that were not on time was Brasil Terminal Portuário (BTP), with 177 delay
            records.
          </p>
          <p>
            From January to June 2026, 55% of shipments scheduled at the country’s container terminals suffered
            delays, omissions or cancellations.
          </p>
        </Prose>
        <TerminaisVisuals />
      </Section>

      <Section id="aereo" kicker="7.2" title="Air transport (ANAC)">
        <Prose>
          <p>
            Paid passenger traffic in June 2026, adding the domestic and international markets, was 10,3
            million passengers, 1% below the figure recorded in the same month of the previous year. Domestic
            passengers accounted for 79% of total traffic in June 2026.
          </p>
          <p>
            Total air cargo traffic in the country, in June 2026, adding the domestic and international
            markets, was 119 thousand tonnes, an amount 9% higher than that recorded in the same month of the
            previous year. Domestic cargo accounted for 32% of total cargo handled in the period.
          </p>
        </Prose>
        <AereoVisuals />
      </Section>

      <Section id="ferro" kicker="7.3" title="Rail freight (ANTT)">
        <Prose>
          <p>
            Freight moved on the railways, in June 2026, was 49 million useful tonnes (TUs), approximately the
            level observed in the same month of 2025. Potassium chloride was the cargo with the largest growth
            (41%). Iron ore accounted for 71% of the total moved in June 2026.
          </p>
        </Prose>
        <FerroVisuals />
      </Section>

      <Section id="pedagio" kicker="7.4" title="Tolled road traffic (ABCR)">
        <Prose>
          <p>
            In June 2026, traffic on federal and state tolled highways was 174 million vehicles, 17% higher
            than that recorded in the same month of the previous year. Light vehicles accounted for 65% of
            total traffic, followed by heavy vehicles (31%) and motorcycles (1%). Exempt traffic on tolled
            highways totaled 5 million vehicles, which represents 3% of the total.
          </p>
          <p>
            Heavy-vehicle traffic in June 2026 was 53,4 million vehicles, equivalent to 31% of all tolled
            traffic. That figure was 34% higher than that observed in the same month of the previous year.
            Tolled traffic of light vehicles was 114 million vehicles, 11% higher than that recorded in June
            2025.
          </p>
          <p>
            The breakdown by type of highway management shows that traffic on federal tolled highways was 74
            million, 29% higher than that observed in June 2025. On state tolled highways, traffic was 100,5
            million, 10% higher than that observed in the same month of the previous year. Of that total, 79,8
            million vehicles traveled on highways in the state of São Paulo, and 20,6 million in other states.
          </p>
        </Prose>
        <PedagioVisuals />
      </Section>

      <Section id="acidentes" kicker="7.5" title="Accidents on federal highways (PRF)">
        <Prose>
          <p>
            In June 2026, 6.184 accidents were recorded on Brazilian federal highways, according to the Federal
            Highway Police (PRF). The total number of accidents is 1% higher than in the same month of 2025.
          </p>
          <p>
            The stretches of federal highways that concentrated the most accidents between January and June
            2026 were BR 101/SC (2053 accidents), BR 116/SP (1530 accidents) and BR 381/MG (1433 accidents).
          </p>
        </Prose>
        <AcidentesVisuals />
      </Section>

      <Section id="combustiveis" kicker="7.6" title="Consumer price of regular gasoline and diesel oil (ANP)">
        <Prose>
          <p>
            The average price of regular gasoline, in April 2026, was R$ 6,74/L, 7% higher than that observed
            in April 2025 (R$ 6,32/L).
          </p>
          <p>
            According to the latest data released by the ANP on price composition and formation, for April
            2026, federal taxes accounted for 10% of the price of regular gasoline, 1 percentage point (p.p.)
            lower than in the same period of the previous year. State taxes accounted for 23% of the price, a
            decrease of 0 p.p. compared with the same period of the previous year. Distribution-plus-retail
            margins rose 2 p.p. in the period.
          </p>
          <p>
            The average price of diesel oil, in April 2026, was R$ 7,28/L, 17% higher than that observed in
            April 2025 (R$ 6,22/L).
          </p>
          <p>
            According to the most recent information made available by the ANP on price composition and
            formation, for April 2026, federal taxes accounted for 0% of the diesel oil price, 5 percentage
            points (p.p.) lower than in the same period of the previous year. State taxes accounted for 3% of
            the price, a decrease of 15 p.p. compared with the same period of the previous year.
            Distribution-plus-retail margins rose 12 p.p. in the period.
          </p>
          <p>Note: *Price of biodiesel with freight and taxes.</p>
          <p>
            Following the end of the Federal Government’s provisional measure, federal taxes were reinstated
            from 01/01/2024.
          </p>
        </Prose>
        <CombustiveisVisuals />
      </Section>

      <Section id="expediente" kicker="Source" title="Credits">
        <Prose>
          <p>
            Infrastructure Report | Publication of the National Confederation of Industry – Infrastructure
            Superintendency | Infrastructure Superintendent: Wagner Cardoso | Team: Andreia Carvalho, Euder
            Santana, Fernanda Ortega, Mariana Lodder, Paula Bogossian, Patrick Fernandes, Ramon Cunha, Rennaly
            Sousa and Roberto Wagner | email: infra@cni.com.br | Graphic design: Núcleo de Editoração CNI |
            Customer Service – SAC: (61) 3317.9989 sac@cni.com.br | Setor Bancário Norte Quadra 1 Bloco C
            Edifício Roberto Simonsen CEP 70040-903 Brasília, DF | www.cni.com.br | Reproduction authorized
            provided the source is cited.
          </p>
          <p>Document prepared with data available through 17 September 2026.</p>
        </Prose>
      </Section>
    </>
  );
}
