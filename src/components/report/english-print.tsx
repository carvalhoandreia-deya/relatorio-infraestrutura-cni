import { useEffect } from "react";
import { LocaleProvider } from "./locale";
import { Hero, Investimentos } from "./en/ch-front";
import { Energia } from "./en/ch-energia";
import { PetroleoBioGasTelecom } from "./en/ch-mid";
import { Transportes } from "./en/ch-transportes";

function EnglishBody() {
  useEffect(() => {
    const root = document.documentElement;
    const previousTheme = root.dataset.theme;
    const previousLang = root.lang;
    root.dataset.theme = "cni";
    root.lang = "en";
    return () => {
      if (previousTheme) root.dataset.theme = previousTheme;
      root.lang = previousLang;
    };
  }, []);

  return (
    <article className="pdf-doc" data-pdf-ready="1">
      <header className="pdf-mast">
        <img
          src="/brand/cni-en.png"
          alt="CNI, Brazilian National Confederation of Industry"
          className="pdf-logo"
        />
        <p className="pdf-mast-meta">
          Year 24
          <br />
          No. 9 · September 2026
        </p>
      </header>
      <figure className="pdf-lead">
        <img src="/editions/pt-figures/img_p0_1.jpg" alt="" />
      </figure>
      <Hero />
      <Investimentos />
      <Energia />
      <PetroleoBioGasTelecom />
      <Transportes />
      <p className="pdf-colophon">
        English edition of the CNI Infrastructure Report, year 24, number 9, September 2026. Figures and
        Brazilian notation are unchanged from the report. The official Portuguese edition remains the
        publication of record.
      </p>
    </article>
  );
}

export function EnglishDocument() {
  return (
    <LocaleProvider forced="en">
      <EnglishBody />
    </LocaleProvider>
  );
}
