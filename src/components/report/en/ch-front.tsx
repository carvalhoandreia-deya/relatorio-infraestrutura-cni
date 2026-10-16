import { Kpi, Kpis, Prose, Section } from "../ui";
import { Car, CircleDollarSign, Droplets, Factory, Flame, Fuel, Gauge, Landmark, Ship, TrainFront, Waves, Zap } from "lucide-react";
import { OguVisuals, ModalidadeVisuals, RapVisuals } from "../drawn";


export function Hero() {
  return (
    <header id="sumario" data-section="sumario" className="scroll-mt-44 pb-10 lg:scroll-mt-20">
      <div className="rounded-lg bg-title px-4 py-4 md:px-5 md:py-5">
        <p className="text-xs font-semibold tracking-wide text-accent uppercase">
          Year 24 · No. 9 · September 2026
        </p>
        <h1 className="mt-1.5 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-title-ink md:text-3xl">
          Infrastructure Report
        </h1>
      </div>
      <div className="mt-4 max-w-3xl space-y-3 leading-relaxed text-muted">
        <p className="text-lg">
          Monthly publication of the National Confederation of Industry (CNI), with a navigable reading and
          the most recent data available through the month before publication.
        </p>
        <p className="rounded-md bg-note px-4 py-3 text-sm leading-relaxed">
          Because the agencies that release the figures follow different update calendars, some indicators
          may lag well behind the reference period.
        </p>
      </div>
      <div className="mt-8">
        <Kpis>
          <Kpi href="#balanca" icon={CircleDollarSign} value="US$ 5.912 million" label="Oil and products trade balance" hint="June 2026, FOB. In the same month of the previous year, US$ 2.672 million FOB." />
          <Kpi href="#ogu" icon={Landmark} value="R$ 84,7 billion" label="Investment line" hint="1,3% of the total budget. R$ 24 billion liquidated." />
          <Kpi href="#pld" icon={Gauge} value="R$ 188/MWh" label="PLD, Southeast and Central-West" hint="20% below the same month of 2025." />
          <Kpi href="#combustiveis" icon={Fuel} value="R$ 7,28/L" label="Average diesel price" hint="April 2026, 17% above April 2025 (R$ 6,22/L)." />
          <Kpi href="#consumo-ee" icon={Factory} value="16,6 thousand GWh" label="Industrial electricity consumption" hint="1% above the same month of 2025 and 36% of the total." />
          <Kpi href="#geracao" icon={Zap} value="71 average GW" label="Generation on the national interconnected system" hint="3% above June 2025. Hydro above 30 average MW: 56%." />
          <Kpi href="#reservatorios" icon={Droplets} value="151.411 GWh" label="Energy stored in reservoirs" hint="2% above June 2025. South: 62%, 22 percentage points lower." />
          <Kpi href="#petroleo-producao" icon={Waves} value="134 million bep" label="National oil production" hint="19% above June 2025. About 98,1% from offshore fields." />
          <Kpi href="#gas-preco" icon={Flame} value="US$ 19,91/MMBtu" label="Industrial consumer gas price" hint="10% above September 2024 (US$ 18,13/MMBtu)." />
          <Kpi href="#portos" icon={Ship} value="101 million t" label="Cargo at public ports and TUPs" hint="February 2026, 4% higher. TUPs: 67%." />
          <Kpi href="#pedagio" icon={Car} value="174 million" label="Traffic on tolled highways" hint="17% above June 2025. Heavy vehicles: 34% higher." />
          <Kpi href="#ferro" icon={TrainFront} value="49 million TU" label="Rail freight" hint="Approximately the June 2025 level. Iron ore: 71%." />
        </Kpis>
      </div>
    </header>
  );
}

export function Investimentos() {
  return (
    <>
      <Section id="investimentos" kicker="1" title="Investment" />

      <Section id="ogu" kicker="1.1" title="Overall and investment budget of the Federal government">
        <Prose>
          <p>
            In 2026, the total authorized appropriation recorded in Siga Brasil for the Federal budget was
            approximately R$ 6,5 trillion, based on the query of August 2026. Of that amount, approximately R$
            84,7 billion corresponds to the investment line, which represents 1,3% of the total budget.
          </p>
          <p>
            Among parent bodies, the Ministry of Transport held the second-largest investment budget, at R$
            13,4 billion, which represented 16% of the total appropriation. The Ministry of Ports and Airports
            has an investment budget of R$ 836 million.
          </p>
          <p>
            Of the Federal investment budget for 2026 (R$ 84,7 billion), R$ 53,8 billion had been committed,
            about 63,5% of the authorized appropriation through the end of August. Over the same period, R$ 24
            billion was liquidated and R$ 22,6 billion was paid. Total payment, including carry-over payables
            paid in the period, came to R$ 46,1 billion.
          </p>
        </Prose>
        <OguVisuals />
      </Section>

      <Section
        id="transportes-orcamento"
        kicker="1.2"
        title="Overall and investment budget of the Ministry of Transport and the Ministry of Ports and Airports"
      >
        <Prose>
          <p>
            Of the R$ 13,4 billion authorized for investment by the Ministry of Transport in 2026, about R$
            11,3 billion was committed (84,5% of the authorized appropriation) and approximately R$ 6,9 billion
            was liquidated. Amounts paid from the budget were about R$ 6,3 billion, and total disbursement
            (including paid carry-over payables) was R$ 9,2 billion.
          </p>
          <p>
            As for the Ministry of Ports and Airports, of the R$ 836 million authorized for investment in 2026,
            R$ 471 million was committed, R$ 136 million was liquidated and R$ 122 million was paid.
          </p>
          <p>
            Of the R$ 14,1 billion in investment authorized for the Ministry of Transport (R$ 13,4 billion) and
            for the Ministry of Ports and Airports (R$ 836 million), approximately 82% (R$ 11,6 billion) was
            allocated to roads. The remainder was divided among rail (R$ 411 million), waterways (R$ 554
            million), airports (R$ 259 million) and other (R$ 1,3 billion).
          </p>
        </Prose>
        <ModalidadeVisuals />
        <Prose>
          <p>
            The Federal government registered, in 2026, approximately R$ 8,1 billion in processed carry-over
            payables. Of that amount, the Ministry of Transport registered about R$ 159 million.
          </p>
          <p>
            For unprocessed carry-over payables, the Federal government registered, in 2026, R$ 70,5 billion.
            The Ministry of Transport had R$ 4,4 billion registered and the Ministry of Ports and Airports R$
            439 million.
          </p>
          <p>
            Of the total volume of carry-over payables registered by the Federal government, payments
            corresponded to 29% of the total registered, excluding cancellations. The Ministry of Transport
            paid 64% of the amount it registered for 2026. The Ministry of Ports and Airports paid 41% of its
            total registered.
          </p>
        </Prose>
        <RapVisuals />
      </Section>
    </>
  );
}

