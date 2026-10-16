import { Prose, Section } from "../ui";
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
} from "../drawn";

export function PetroleoBioGasTelecom() {
  return (
    <>
      <div className="pdf-chapter">
        <figure className="pdf-photo">
          <img src="/editions/pt-figures/img_p10_1.jpg" alt="" />
        </figure>
        <Section id="petroleo" kicker="3" title="Oil" />
      </div>

      <Section
        id="petroleo-producao"
        kicker="3.1"
        title="Oil production, foreign trade and processing (ANP)"
      >
        <Prose>
          <p>
            National oil production, in June 2026, was 134 million barrels of oil equivalent (1 bep equals
            0,16 m³), a volume 19% higher than that produced in the same month of the previous year.
          </p>
          <p>
            The average API gravity (a scale that measures the density of liquids derived from oil) of the oil
            produced in June 2026 was 28,4°, with 3,9% of production considered light oil (greater than or
            equal to 31°API), 89,3% considered medium oil (between 22°API and 31°API) and 6,8% considered heavy
            oil (less than 22°API).
          </p>
        </Prose>
        <Prose>
          <p>
            According to the ANP, in June 2026, about 98,1% of Brazil’s oil production was extracted from
            offshore fields.
          </p>
          <p>
            The volume corresponding to oil processing at national refineries, in June 2026, was 63 million
            bep. That volume was 5% higher than that observed in the same month in 2025.
          </p>
          <p>
            The volume of oil exported by the country, in June 2026, was 60,6 million bep, a volume 7% higher
            than that exported in June 2025. Oil imports were 6,7 million bep, a volume 15% lower than that
            observed in the same month of the previous year. Apparent oil consumption reached 80,3 million
            bep.
          </p>
          <p>
            The average price of oil imported by the country, in June 2026, was US$ 114/barrel, 65% higher than
            that observed in June 2025.
          </p>
        </Prose>
        <PetroleoVisuals />
        <figure className="pdf-photo">
          <img src="/editions/pt-figures/img_p11_1.jpg" alt="" />
        </figure>
      </Section>

      <Section
        id="derivados"
        kicker="3.2"
        title="Production and foreign trade of petroleum-derived fuels (ANP)"
      >
        <Prose>
          <p>
            In June 2026, national production of petroleum products was 65 million bep, a volume 1% higher than
            that produced in June 2025.
          </p>
          <p>
            Imports of petroleum products, in June 2026, were 14 million bep, 18% below the figure recorded in
            June of the previous year. As for exports of petroleum products, in June 2026 a total of 15 million
            bep was recorded, which represents a volume 25% higher than that observed in the same month of
            2025.
          </p>
          <p>
            In June 2026, external dependence on petroleum products was -2% relative to apparent consumption of
            64 million bep.
          </p>
        </Prose>
        <DerivadosVisuals />
      </Section>

      <Section id="balanca" kicker="3.3" title="Trade balance of oil and petroleum products (ANP)">
        <Prose>
          <p>
            Brazil’s trade balance of oil and petroleum products, in June 2026, showed a positive balance of
            US$ 5.912 million FOB. That is, Brazil exported US$ 5.912 million FOB more than it imported. In the
            same month of the previous year, that balance was positive by US$ 2.672 million FOB.
          </p>
        </Prose>
        <BalancaVisuals />
        <figure className="pdf-photo">
          <img src="/editions/pt-figures/img_p13_platform.jpg" alt="" />
        </figure>
      </Section>

      <div className="pdf-chapter">
        <Section id="biocombustiveis" kicker="4" title="Biofuels" />
      </div>

      <Section id="biodiesel" kicker="4.1" title="Biodiesel production (ANP)">
        <Prose>
          <p>
            National biodiesel production, in June 2026, was 845 thousand m³, an amount 8% higher than that
            produced in June 2025.
          </p>
          <p>
            The price of diesel oil (blended with biodiesel), in June 2026, was R$ 6,78/ℓ, 14% higher than that
            recorded in June 2025.
          </p>
        </Prose>
        <BiodieselVisuals />
      </Section>

      <Section id="alcool" kicker="4.2" title="Alcohol">
        <Prose>
          <p className="font-semibold">4.2.1. Alcohol and sugar production (MAPA)</p>
          <p>
            The 2025/2026 crop produced, through June 2026, 12 million m³ of alcohol. Of that total, 65% refers
            to production of hydrous ethyl alcohol, which is ordinary ethanol, sold at gasoline stations, while
            anhydrous ethanol is that blended into gasoline. Total alcohol production was 22% higher than in
            the same period of the previous crop.
          </p>
          <p>
            Sugar production in the same period was 11 million tonnes, a volume 13% lower than that observed in
            the same period of the 2024/2025 crop.
          </p>
          <p>
            Crops begin in April and end in August of the following year. Thus, for four months two parallel
            crops are observed in the different Brazilian states.
          </p>
          <p className="font-semibold">4.2.2. Sales of hydrous ethyl alcohol (ANP)</p>
          <p>
            Sales of hydrous ethyl alcohol were 1,8 million m³ in June 2026. This figure represents an 11%
            increase relative to the volume sold in June of the previous year.
          </p>
          <p>
            Sales of hydrous ethyl alcohol accounted for 32% of the universe of alcohol and gasoline sales in
            June 2026. That share was 1,2 percentage point higher than that observed in June of the previous
            year.
          </p>
          <p>
            In June 2026, the average consumer price of hydrous ethyl alcohol was R$ 4,13/ℓ, 2% lower than that
            observed in the same month of the previous year.
          </p>
          <p>¹Gasoline C: Gasoline A + a percentage of anhydrous alcohol.</p>
        </Prose>
        <AlcoolVisuals />
      </Section>

      <div className="pdf-chapter">
        <Section id="gas" kicker="5" title="Natural gas" />
      </div>

      <Section id="gas-oferta" kicker="5.1" title="Natural gas production and supply (MME)">
        <Prose>
          <p>
            According to the most recent data released by the MME, average daily national production of natural
            gas, in September 2025, was 191 million m³/day, an increase of 12% compared with September of the
            previous year.
          </p>
          <p>
            Average imports of natural gas (GN) from Bolivia, in September 2025, were 10,5 million m³/day, a
            volume 28% lower than that observed in the same month of 2024. Average imports of liquefied natural
            gas (LNG), in September 2025, totaled 5 million m³/day, a volume 71% lower than the amount observed
            in the same month of the previous year.
          </p>
          <p>
            In September 2025, total natural gas supply totaled 76,8 million m³/day, 10% below the level
            observed in the same month of the previous year.
          </p>
          <p>
            The share of natural gas burned, lost, reinjected and consumed at exploration and production (E&P)
            units was 68,5% in September 2024. In September 2025, that share was 67,8%.
          </p>
        </Prose>
        <GasOfertaVisuals />
      </Section>

      <Section id="gas-consumo" kicker="5.2" title="Natural gas consumption (MME)">
        <Prose>
          <p>
            Natural gas consumption in the country in September 2025 was, on average, about 76 million m³/day.
            That average is 7% lower than the average daily volume consumed in September 2024. Industry
            consumed approximately 41 million m³/day of natural gas, a volume 2% higher than that recorded in
            the same month of the previous year.
          </p>
          <p>
            Electric generation accounted for 34% of natural gas consumption in September 2025. Industry
            accounted for 54% of the total volume of gas consumed in the same month.
          </p>
        </Prose>
        <GasConsumoVisuals />
      </Section>

      <Section id="gas-preco" kicker="5.3" title="Natural gas price (MME and EIA)">
        <Prose>
          <p>
            The average price of natural gas to the industrial consumer, in September 2025, was US$
            19,91/MMBtu, 10% higher than that observed in September 2024 (US$ 18,13/MMBtu).
          </p>
          <p>
            In September 2025, the average price of natural gas on the Henry Hub spot market was US$
            2,97/MMBtu, 30% higher than that recorded in September 2024. This price does not include taxes and
            transportation, and is set on business days in trades for next-day delivery.
          </p>
          <p>
            ¹Price with tax and transportation cost. Monthly average. ²Price without tax and transportation
            cost. Monthly weighted average of daily quotes.
          </p>
        </Prose>
        <GasPrecoVisuals />
      </Section>

      <div className="pdf-chapter">
        <Section id="telecom" kicker="6" title="Telecommunications" />
      </div>

      <Section id="movel" kicker="6.1" title="Active contracted mobile internet services (ANATEL)">
        <Prose>
          <p>
            Approximately 278 million mobile accesses were made in June 2026, 4% higher than that observed in
            the same month of the previous year. Of those accesses, 24% were made on 5G technology, 64% on 4G
            technology, 5% on 3G technology and 7% on 2G technology.
          </p>
          <p>
            In June 2026, 5G technology accounted for the largest growth relative to June 2025 (37%), while 3G
            technology showed the largest decline (15%).
          </p>
        </Prose>
        <MovelVisuals />
      </Section>

      <Section id="fixa" kicker="6.2" title="Fixed internet accesses (ANATEL)">
        <Prose>
          <p>
            In June 2026, 58 million fixed internet accesses were made, 7% higher than that recorded in the
            same month of the previous year. Of total accesses, 95% were made at a speed above 34 Mbps, which
            represents growth of 9% relative to accesses made in June 2025 in that same band.
          </p>
          <p>
            The increase in high-speed accesses follows the growth in the use of fiber optics, which rose 10%
            compared with the same period of the previous year. Fiber optics is the technology with the largest
            number of accesses in Brazil, covering 81% of the market.
          </p>
        </Prose>
        <FixaVisuals />
      </Section>
    </>
  );
}
