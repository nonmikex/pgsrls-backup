import React from "react";
import { Phone, Mail, MapPin, AtSign } from "lucide-react";
import { awardsImage } from "../../constants/constants";

export default function Footer() {
  return (
    <footer className="bg-[--g-blue] text-white pt-8">
      <div className="w-full h-auto pb-8 px-4 lg:px-[5%] xl:px-[10%]">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold">
            POLITO GROUP S.R.L.S
            <span className="block w-1/4 h-1 bg-[--g-sky-blue] mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div>
              <h4 className="font-bold mb-4">CHI SIAMO</h4>
              <p className="text-sm">
                L'azienda ha sviluppato nel corso degli anni elevati standard di
                qualità organizzativa e tecnologica, garantendo l'esecuzione di
                opere di eccellenza e una straordinaria capacità di rispondere
                efficacemente alle esigenze dei clienti.
              </p>
            </div>

            <div className="mt-8">
              <img className="w-24 h-auto" src={awardsImage} alt="" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">MENU</h4>
            <ul className="space-y-2 px-2">
              <li className="text-[--g-sky-blue] hover:underline">
                <a href="/">Home</a>
              </li>
              <li className="text-[--g-sky-blue] hover:underline">
                <a href="/chi-siamo">Chi siamo</a>
              </li>
              <li className="text-[--g-sky-blue] hover:underline">
                <a href="/servizi">Servizi</a>
              </li>
              <li className="text-[--g-sky-blue] hover:underline">
                <a href="/lavora-con-noi">Lavora con noi</a>
              </li>
              <li className="text-[--g-sky-blue] hover:underline">
                <a href="/contatti">Contatti</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">SERVIZI</h4>
            <ul className="space-y-2 px-2 list-disc">
              <li className="text-[--g-sky-blue]">
                <a
                  href="/servizi/edilizia-civile-industriale"
                  className="hover:underline"
                >
                  Edilizia civile ed industriale
                </a>
              </li>
              <li className="text-[--g-sky-blue]">
                <a
                  href="/servizi/realizzazione-manutenzione-reti-impianti"
                  className="hover:underline"
                >
                  Realizzazione e manutenzione di reti ed impianti
                </a>
              </li>
              <li className="text-[--g-sky-blue]">
                <a
                  href="/servizi/infrastrutture-stradali-ponti"
                  className="hover:underline"
                >
                  Infrastrutture stradali e ponti
                </a>
              </li>
              <li className="text-[--g-sky-blue]">
                <a
                  href="/servizi/bonifiche-ambientali-demolizioni"
                  className="hover:underline"
                >
                  Bonifiche Ambientali e Demolizioni
                </a>
              </li>
              <li className="text-[--g-sky-blue]">
                <a
                  href="/servizi/operazioni-fluviali-di-difesa"
                  className="hover:underline"
                >
                  Operazioni fluviali, di difesa, di sistemazione idraulica e di
                  bonifica
                </a>
              </li>
              <li className="text-[--g-sky-blue]">
                <a
                  href="/servizi/restauro-e-risanamento-conservatorio"
                  className="hover:underline"
                >
                  Restauro e risanamento conservatorio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">INFORMAZIONI</h3>
            <h4 className="text-sm font-bold text-[--g-sky-blue] mb-2">
              SEDE LEGALE:
            </h4>
            <div className="flex items-center mb-4">
              <MapPin className="w-[25px] lg:w-[30px]" />
              <p className="ml-2">Via San Biagio N.19 CAP 84034 PADULA (SA)</p>
            </div>
            <h4 className="text-sm font-bold text-[--g-sky-blue] mb-2">
              SEDE OPERATIVA:
            </h4>
            <div className="flex items-center mb-4">
              <MapPin className="w-[25px] lg:w-[30px]" />
              <p className="ml-2">
                Via Dell'Industria N.35 CAP 35020 PADOVA (PD)
              </p>
            </div>
            <h4 className="text-sm font-bold text-[--g-sky-blue] mb-2">
              TELEFONO:
            </h4>
            <div className="flex items-center mb-4">
              <Phone size={20} />
              <a href="tel:3401228035" className="ml-2 hover:underline">
                +39 340 122 8035
              </a>
            </div>
            <div className="flex items-center mb-4">
              <Phone size={20} />
              <a href="tel:3493921838" className="ml-2 hover:underline">
                +39 349 392 1838
              </a>
            </div>
            <h4 className="text-sm font-bold text-[--g-sky-blue] mb-2">
              E-MAIL:
            </h4>
            <div className="flex items-center mb-4">
              <Mail size={20} />
              <a
                href="mailto:politogroup@alice.it"
                className="ml-2 hover:underline"
              >
                politogroup@alice.it
              </a>
            </div>
            <h4 className="text-sm font-bold text-[--g-sky-blue] mb-2">PEC:</h4>
            <div className="flex items-center mb-4">
              <AtSign size={20} />
              <a
                href="mailto:politogroupsrls@pec.it"
                className="ml-2 hover:underline"
              >
                politogroupsrls@pec.it
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 px-4 lg:px-[5%] xl:px-[10%]">
        <h4>
          © 2024 Polito Group S.R.L.S | P.I. 05554370659 | Privacy & Policy
        </h4>
      </div>
    </footer>
  );
}
