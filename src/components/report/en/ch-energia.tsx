import { Prose, Section } from "../ui";
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
} from "../drawn";

export function Energia() {
  return (
    <>
      <div className="pdf-chapter">
        <figure className="pdf-photo">
          <img src="/editions/pt-figures/img_p7_1.jpg" alt="" />
        </figure>
        <Section id="energia" kicker="2" title="Electric power" />
      </div>

      <Section id="geracao" kicker="2.1" title="Electric power generation (CCEE)">
        <Prose>
          <p>
            In June 2026, electric power generation on the national interconnected system recorded 71 average
            GW, 3% above the level observed in June 2025.
          </p>
          <p>
            The source with the largest share was hydro at plants with generation capacity above 30 average MW
            (56% of the total). The generation source with the largest increase compared with the same month of
            the previous year was solar PV (30%).
          </p>
        </Prose>
        <GeracaoVisuals />
      </Section>

      <Section id="expansao" kicker="2.2" title="Expansion of electric power generation capacity (ANEEL)">
        <Prose>
          <p>
            The chart below illustrates the cumulative expansion of generating capacity on the national
            interconnected system over the current year. The lines represent a theoretical average of uniform
            entry of generating capacity so that the forecast is met.
          </p>
          <p>
            Between January and June 2026, 71 plants entered operation, with a total of 2706 MW of installed
            capacity. Of that total, wind plants (EOL) accounted for 59 MW, biomass plants for 86 MW, small
            hydro plants (PCHs) for 50 MW and solar PV plants (UFV) for 2511 MW.
          </p>
        </Prose>
        <ExpansaoVisuals />
      </Section>

      <Section
        id="previsao"
        kicker="2.2.1"
        title="Forecast of the expansion of electric power generation capacity"
      >
        <Prose>
          <p>Conservative scenario: considers only plants with no restrictions on entry into operation.</p>
          <p>
            Optimistic scenario: considers plants with no restrictions on entry into operation and plants with
            impediments such as an environmental license not obtained, construction not started and an
            undefined fuel contract.
          </p>
          <p>Included in alternative sources are 50 MW referring to the entry of UHEs.</p>
          <p>
            The forecast for 2026 is the one defined on 31/12/2025 for the following twelve months.
          </p>
          <p>
            The estimates released by the National Electric Energy Agency (ANEEL) indicate, in the conservative
            scenario, an increase of 0,7% a year in the country’s total electric generation capacity, for the
            period between the start of 2026 and the end of 2030.
          </p>
          <p>
            In the optimistic scenario, the expansion forecast is approximately 15 GW in the 2026–2030 period.
            In that scenario, the average growth rate of installed electric generation capacity would be 1,3%
            a year.
          </p>
          <p>
            Between 2026 and 2030, in the conservative scenario, growth of 2% is estimated in Brazil’s
            installed capacity of thermal plants (UTEs). Even with the expected expansion, the share of UTEs in
            total installed capacity is expected to remain at about 15% (excluding nuclear plants) through
            2030. Hydro plants are expected to reduce their share of the national electric mix from 49% at the
            start of 2026 to 48% at the end of 2030.
          </p>
          <p>
            At the end of 2026, alternative energy sources accounted for 36% of total installed capacity. The
            share of biomass thermal plants was 7% and, under the conservative forecast, that percentage is
            expected to be maintained through 2030. For wind plants (EOL), the forecast is that this source’s
            share of installed capacity will rise to 16%, while the share of solar PV plants is estimated to
            increase from 10% to 11%. The share of small hydro plants (PCHs) is expected to remain at 3%
            through 2030.
          </p>
          <p>
            The optimistic forecast for the expansion of generation from alternative energy sources is that
            their share will reach, by 2030, 39% of the country’s installed capacity. Solar PV plants (UFV)
            have the largest forecast increase in installed capacity, with growth of 29%. In second place are
            wind plants, with a forecast 8% increase in capacity.
          </p>
        </Prose>
        <PrevisaoVisuals />
      </Section>

      <Section id="gd" kicker="2.2.2" title="Expansion of distributed generation">
        <Prose>
          <p>
            Distributed generation can be defined as a source of electric power connected directly to the
            distribution network or sited at the consumer. In June 2026, 443 MW of installed capacity in
            distributed generation entered operation, 27% below the level observed in the same month of 2025.
          </p>
          <p>
            Cumulative installed capacity in distributed generation, through June 2026, was 46.504 MW, 17%
            above the level recorded in the same period of 2025. Industry accounted for 7% of that total, with
            3.263 MW of installed capacity.
          </p>
        </Prose>
        <GdVisuals />
      </Section>

      <Section id="transmissao" kicker="2.3" title="Expansion of transmission lines (MME)">
        <Prose>
          <p>
            Transmission-line expansion data released by the Ministry of Mines and Energy (MME) lag the
            publication month of the Infrastructure Report.
          </p>
          <p>
            In March 2026, 374 new km of transmission lines entered operation. According to the Ministry of
            Mines and Energy forecast, the expectation for 2026 is 4,7 thousand km of new transmission lines
            in operation in the country. For 2027, 4,4 thousand km of new transmission lines are forecast.
          </p>
          <p>
            Transmission lines are divided by voltage classes that can use the electric grid. Of the total new
            lines that entered operation through March 2026, 66 km were in the 230 kV voltage class and 660 km
            were in the 500/525 kV voltage class.
          </p>
        </Prose>
        <p className="text-sm leading-relaxed text-muted">
          Note: Considers the forecast released by the Ministry of Mines and Energy in January 2026.
        </p>
        <TransmissaoVisuals />
      </Section>

      <Section id="reservatorios" kicker="2.4" title="Verified stored energy (ONS)">
        <Prose>
          <p>
            In June 2026, four of the five regions had a level of energy stored in reservoirs below that
            observed in the same month of the previous year. The South had reservoirs at 62%, 22 percentage
            points below the level observed in the same month of 2025. The Northeast had the largest increase
            in reservoir levels compared with June 2025.
          </p>
          <p>
            In June 2026, Brazilian reservoirs had a level equivalent to 151.411 GWh of stored energy, 2%
            above the level observed for the same month in the previous year. The Southeast/Central-West
            regions had 97.982 GWh stored, 1% below the level observed in June 2025.
          </p>
        </Prose>
        <ReservatorioVisuals />
      </Section>

      <Section id="consumo-ee" kicker="2.5" title="Electric power consumption (EPE)">
        <Prose>
          <p>
            Consumption in the national market for the supply of electric power to free and captive consumers
            reached, in June 2026, 46 thousand GWh, 2,8% above the level observed in June 2025.
          </p>
          <p>
            A captive consumer is a consumer who may buy energy only from the distributor holding the
            concession or permission in the area where the “user’s” facilities are located. A consumer with a
            load equal to or greater than 3.000 kW was considered a free consumer and could choose to contract
            supply from any concessionaire, permit holder or authorized agent of the interconnected system.
            That limit was later reduced, allowing greater opening of the market.
          </p>
          <p>
            Industrial consumption of electric power was 16,6 thousand GWh, 1% above the level observed in the
            same month of 2025, and accounted for 36% of the total electric power consumed in June 2026.
          </p>
          <p>
            In June 2026, the industrial sector with the largest growth in electric power consumption was
            extraction of metallic minerals, with a 13% increase in energy consumption compared with the same
            month of 2025.
          </p>
        </Prose>
        <ConsumoVisuals />
      </Section>

      <Section id="pld" kicker="2.6" title="Differences Settlement Price (CCEE)">
        <Prose>
          <p>
            The Differences Settlement Price (PLD) is used to value the purchase and sale of energy in the
            short-term market. The PLD is a value set weekly for each load level based on the marginal cost of
            operation, limited by a maximum and a minimum price in force for each settlement period and for
            each submarket.
          </p>
          <p>
            The duration intervals of each level are set for each settlement month by the ONS and reported to
            the Electric Energy Trading Chamber (CCEE), so that they are taken into account in the accounting
            and settlement system.
          </p>
          <p>
            The calculation of the monthly average PLD by submarket considers the weekly prices by light,
            medium and heavy load level, weighted by the number of hours in each level and in each week of the
            month, for all regions.
          </p>
          <p>
            In the Southeast and Central-West, the PLD observed in June 2026 was R$ 188/MWh, 20% below the
            level recorded in the same month of 2025. For the South, the PLD was R$ 194/MWh, an 18% reduction
            from the same month of the previous year. The Northeast recorded R$ 184/MWh, a 20% reduction from
            the same month of the previous year. The North had a PLD of R$ 187/MWh, a 20% reduction compared
            with June 2025.
          </p>
        </Prose>
        <PldVisuals />
      </Section>

      <Section id="continuidade" kicker="2.7" title="Electricity supply continuity indicators.">
        <Prose>
          <p>
            Continuity of energy supply is monitored by ANEEL through the Equivalent Duration of Interruption
            per Consumer Unit (DEC) and the Equivalent Frequency of Interruption per Consumer Unit (FEC). The
            DEC and FEC indicators are published for subdivisions of the distributors, called sets of consumer
            units.
          </p>
          <p>2.7.1. Equivalent Duration of Interruption per Consumer Unit (DEC)</p>
          <p>
            DEC is an indicator prepared by ANEEL that measures the average time, in hours, that each set of
            consumer units was without electric power in a given month.
          </p>
          <p>
            DEC/Limit compares the observed DEC with the limit set by ANEEL. This index shows whether the
            distributor is within the required standard (less than or equal to one) or exceeded (greater than
            one) the maximum interruption time set by ANEEL.
          </p>
          <p>
            In June, the distributor MUXENERGIA had the best performance in terms of average interruption time,
            with a DEC of 0,24, followed by EFLJC (0,32) and EFLUL (0,45), respectively.
          </p>
          <p>These indicators are measured for interruptions lasting 3 minutes or more.</p>
          <p>2.7.2. Equivalent Frequency of Interruption per Consumer Unit (FEC)</p>
          <p>
            The FEC indicator is set by ANEEL and measures the average number of times each set of consumer
            units had its energy supply interrupted in a given period.
          </p>
          <p>
            FEC/Limit compares the observed FEC with the limit set by ANEEL. As with DEC/Limit, this index
            shows whether the frequency of interruptions is within the standard set by ANEEL (less than or
            equal to one) or was exceeded (greater than one).
          </p>
          <p>
            In June, AME, ELFSM and ESS had the best performance in terms of average frequency of supply
            interruptions, all recording a FEC of 0,59.
          </p>
          <p>These indicators are measured for interruptions lasting 3 minutes or more.</p>
          <p>
            Between June 2025 and June 2026, the average duration of interruptions in Brazil was 9 hours and 4
            minutes. The average number of interruptions reached 4,56.
          </p>
        </Prose>
        <ContinuidadeVisuals />
      </Section>
    </>
  );
}
