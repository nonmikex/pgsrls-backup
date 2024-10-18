import { image } from "../../../constants/constants";
import { icon } from "../../../constants/constants";

export const services = [
  {
    image: image.costruzione,
    icon: icon.House,
    title:
      "Costruzione e ristrutturazione di edifici commerciali e residenziali",
    description: `   Lavori edili per il settore residenziale, offrendo anche interventi
            qualificati per ambiti commerciali e industriali. Ci occupiamo di
            restauro di edifici storici, preservandone il valore, e realizziamo
            ristrutturazioni complete, migliorando funzionalità ed estetica
            degli immobili. Grazie all'esperienza e all'uso di tecnologie
            moderne, garantiamo soluzioni personalizzate e di alta qualità per
            ogni progetto.`,
    slug: "/servizi/edilizia-civile-industriale",
    projects: [
      {
        title: "COMPLESSO RESIDENZIALE – VIA DEL BIGOLO PADOVA",
        images: [image.costruzione3],
        description: "COMMITTENTE: PRIVATO",
        style: "",
      },
      {
        title: "COMPLESSO RESIDENZIALE – VIA VALEGGIO – PADOVA",
        images: [image.costruzione1, image.costruzione2],
        description: "COMMITTENTE: PRIVATO",
        style: "sm:grid-cols-2 gap-4",
      },
      {
        title: `LAVORI DI MANUTENZIONE STRAORDINARIA E RISANAMENTO CONSERVATIVO DELL’IMMOBILE SITO IN PIAZZA DIAZ CENTRO STORICO PADULA (SA)`,
        images: [
          image.ristrutturazione,
          image.ristrutturazione1,
          image.ristrutturazione2,
          image.ristrutturazione3,
        ],
        description: "COMMITTENTE: PRIVATO",
        style: "grid-cols-2 sm:grid-cols-3 gap-4",
      },
      {
        title: `LAVORI DI COMPLETAMENTO DELL’URBANIZZAZIONE DELL’AREA P.I.P- REALIZZAZIONE DI UN PREFABBRICATO E SISTEMAZIONE AREA A VERDE - SAN PIETRO AL TANAGRO (SA)`,
        images: [
          image.risanamento5,
          image.risanamento6,
          image.risanamento7,
          image.risanamento8,
          image.risanamento9,
        ],
        description: "COMMITTENTE: Comune di San Pietro al Tanagro (SA)",
        style: "md:grid-cols-2 lg:grid-cols-3 gap-4",
      },
      {
        title:
          "COMPLESSO ARTIGIANALE – VIALE AUSTRIA – AREA PIP P.S.NICOLO’(PD)",
        images: [image.costruzione4],
        description: "COMMITTENTE: PRIVATO",
        style: "lg:grid-cols-1",
      },
    ],
  },
  {
    image: image.fibraOttica,
    icon: icon.Excavator,
    title: "Realizzazione e manutenzione di reti ed impianti",
    description: `   Realizziamo lavori di scavo, costruzione e manutenzione per reti
            elettriche, di telecomunicazioni, acquedotti, gasdotti, oleodotti,
            linee fognarie oltre a opere di irrigazione e drenaggio. Gestiamo la
            preparazione del sito, la posa di cavi e tubazioni, e la
            connessione, garantendo così una rete di comunicazione efficiente e
            affidabile.`,
    slug: "/servizi/realizzazione-manutenzione-reti-impianti",
    projects: [
      {
        title: `LAVORI DI SCAVO E POSA IN OPERA DI FIBRA OTTICA - PADOVA E PROVINCIA`,
        images: [
          image.fibraOttica1,
          image.fibraOttica2,
          image.fibraOttica3,
          image.fibraOttica4,
          image.fibraOttica5,
          image.fibraOttica6,
        ],
        style: "grid-cols-2 md:grid-cols-3 gap-4",
      },
      {
        title:
          "LAVORI DI SCAVO E POSA IN OPERA DI FIBRA OTTICA PRESSO COMUNE DI TREVISO (TV) E PROVINCIA",
        images: [
          image.fibraOttica14,
          image.fibraOttica10,
          image.fibraOttica9,
          image.fibraOttica8,
        ],
        style: "xs:grid-cols-2 md:grid-cols-3 gap-4",
      },
      {
        title:
          "LAVORI DI SCAVO E POSA IN OPERA DI FIBRA OTTICA PRESSO I COMUNI DI JESOLO E SAN DONÀ DI PIAVE (VE)",
        images: [
          image.fibraOttica7,
          image.fibraOttica15,
          image.fibraOttica16,
          image.fibraOttica17,
          image.fibraOttica18,
        ],
        style: "grid-cols-2 md:grid-cols-3 gap-4",
      },
      {
        title: `LAVORI DI SISTEMAZIONI ESTERNE “IMPIANTO PUBBLICA ILLUMINAZIONE, IMPIANTO DI IRRIGAZIONE,LINEA ANTINCENDIO E SERVIZI” SEDE COMPRENSORIALE PROTEZIONE CIVILE COM 13 PADULA (SA)`,
        images: [
          image.esterne4,
          image.esterne5,
          image.esterne6,
          image.esterne7,
          image.esterne9,
        ],
        style: "lg:grid-cols-3 gap-4",
      },
      {
        title: `LAVORI DI MANUTENZIONE - GASDOTTI - CONDOTTE IDRICHE E FOGNARIE`,
        images: [
          image.condotte10,
          image.condotte2,
          image.condotte3,
          image.condotte5,
          image.condotte11,
          image.condotte12,
          image.condotte8,
          image.condotte13,
          image.condotte14,
          image.condotte15,
        ],
        style: "grid-cols-2 md:grid-cols-3 gap-4",
      },
      {
        title: `LAVORI DI REALIZZAZIONE SERVIZI DI SCARICO ,SISTEMAZIONI ESTERNE E COMPLETAMENTO CANILE COMPRENSORIALE NEL COMUNE DI SALA CONSILINA(SA)`,
        images: [image.esterne1, image.esterne2, image.esterne3],
        style: "lg:grid-cols-2 gap-4",
      },
    ],
  },
  {
    image: image.asfalt,
    icon: icon.Road,
    title: "Realizzazione e manutenzione di infrastrutture stradali",
    description: `La nostra missione è garantire la massima qualità nella costruzione
            e manutenzione di infrastrutture stradali, utilizzando le tecnologie
            più avanzate, come quelle per le pavimentazioni stradali ad alte
            prestazioni`,
    slug: "/servizi/infrastrutture-stradali-ponti",
    projects: [
      {
        title: "RIPRISTINI IN ASFALTO - AREA VENETO E FRIULI",
        images: [
          image.asfalt1,
          image.asfalt2,
          image.asfalt3,
          image.asfalt4,
          image.asfalt8,
        ],
        style: "grid-cols-2 md:grid-cols-3 gap-4",
      },
      {
        title: `LAVORI DI SISTEMAZIONE DEL SOTTOFONDO E REALIZZAZIONE DEL PIANO STRADALE IN ASFALTO LOC. MOZZONI CAGGIANO (SA)`,
        images: [image.asfalt5, image.asfalt6, image.asfalt7],
        style: "xs:grid-cols-2 md:grid-cols-3 gap-4",
      },
      {
        title: `REALIZZAZIONE DI SOTTOPASSO VIA MONFERRATO E COMPLETAMENTO KM 3 DI BRETELLA S.R. 47 DI ALTICHIERO VENETO STRADE”ABANO TERME – PADOVA`,
        images: [
          image.sottopasso1,
          image.sottopasso2,
          image.sottopasso3,
          image.sottopasso4,
          image.sottopasso5,
          image.sottopasso8,
        ],
        style: "xs:grid-cols-2 md:grid-cols-3 gap-4",
      },
    ],
  },
  {
    image: image.fiuviali,
    icon: icon.Waves,
    title:
      "Operazioni fluviali, di difesa, di sistemazione idraulica e di bonifica",
    description: `Eseguiamo operazioni fluviali per la gestione e la protezione delle risorse idriche, inclusi lavori di difesa contro le inondazioni e interventi di sistemazione idraulica. Ci occupiamo di bonifiche ambientali, manutenzione di corsi d’acqua e realizzazione di opere per garantire la sicurezza e l’efficienza della rete idrica, promuovendo la sostenibilità e la tutela degli ecosistemi.`,
    slug: "/servizi/operazioni-fluviali-difesa-sistemazione-idraulica-bonifica",
    projects: [
      {
        title:
          "LAVORI DI MANUTENZIONE URGENTE CANALE VALLE MAURO SALA CONSILINA (SA)",
        images: [
          image.fiuviali,
          image.fiuviali1,
          image.fiuviali2,
          image.fiuviali4,
          image.fiuviali5,
          image.fiuviali6,
          image.fiuviali7,
          image.fiuviali8,
          image.fiuviali9,
        ],
        style: "grid-cols-2 sm:grid-cols-3 gap-4",
      },
    ],
  },
  {
    image: image.bnfDemolizione,
    icon: icon.Excavator,
    title: "Bonifiche Ambientali e Demolizioni",
    description: `Realizziamo bonifiche ambientali per il ripristino e la salvaguardia degli ecosistemi, gestendo la rimozione di contaminanti e materiali pericolosi. Offriamo anche servizi di demolizione, eseguendo lavori di abbattimento controllato di strutture obsolette, garantendo la sicurezza e il rispetto delle normative ambientali, e promuovendo la riqualificazione degli spazi urbani.`,
    slug: "/servizi/bonifiche-ambientali-demolizioni",
    style: "w-[90%]",
    projects: [
      {
        title:
          "LAVORI DI DEMOLIZIONE E SCAVO PER COSTRUZIONE CIVILE ABITAZIONE.",
        images: [image.bnfDemolizione, image.bnfDemolizione2],
        style: "grid-cols-1 xs:grid-cols-2 gap-4",
      },
      {
        title:
          "LAVORI DI DEMOLIZIONE DI PLINTO, RECINZIONE E RIPRISTINO STATO DEI LUOGHI DEL SITO SA148 IN LOC. SCIALANDRO MONTESANO SULLA MARCELLANA (SA)",
        images: [
          image.bnfDemolizione3,
          image.bnfDemolizione4,
          image.bnfDemolizione5,
          image.bnfDemolizione6,
          image.bnfDemolizione7,
        ],
        style: "xs:grid-cols-2 lg:grid-cols-3 gap-4",
      },
      {
        title: "OPERE DI BONIFICA AMBIENTALE - PADOVA E ROVIGO",
        images: [
          image.bnfDemolizione1,
          image.bnfDemolizione10,
          image.bnfDemolizione11,
        ],
        style: "xs:grid-cols-2 lg:grid-cols-3 gap-4",
      },
    ],
  },
  {
    image: image.risanamento,
    icon: icon.Hammer,
    title: "Restauro e risanamento conservatorio",
    description: `Realizziamo interventi di restauro e risanamento conservativo per preservare il patrimonio storico e architettonico. Ci occupiamo della manutenzione e del recupero di edifici, rispettando le caratteristiche originali e utilizzando tecniche e materiali adeguati. Garantiamo la valorizzazione delle strutture, unendo esteti e funzionalità, per mantenere la loro integrità e bellezza nel tempo.`,
    slug: "/servizi/restauro-risanamento-conservatorio",
    projects: [
      {
        title:
          "RIPRISTINO, PAVIMENTAZIONE DI PREGIO PRESSO CENTRO STORICO PADOVA",
        images: [
          image.risanamento3,
          image.risanamento4,
          image.risanamento2,
          image.risanamento,
        ],
        style: "grid-cols-2 md:grid-cols-3 gap-4",
      },
      {
        title: `LAVORI DI RISTRUTTURAZIONE RIPRISTINO E CREAZIONE DI PICCOLI INVASI ARTIFICIALI POZZI ABBEVERATOI PESCHIERE ATTRAVERSO LE TECNICHE DELL’ARCHITETTURA RURALE PER LA VALORIZZAZIONE DEL PAESAGGIO E LA TUTELA DELLA BIODIVERSITÀ AREA ALBURNI FONTE SAN TOMMASO – POLLA (SA)`,
        images: [
          image.risanamento10,
          image.risanamento11,
          image.risanamento13,
          image.risanamento12,
          image.risanamento14,
        ],
        style: "xs:grid-cols-2 md:grid-cols-3 gap-4",
      },
      {
        title:
          "INTERVENTI DI RIQUALIFICAZIONE E VALORIZZAZIONE DI STRUTTURE PER LA FRUIZIONE TURISTICA E OPERE DI INTEGRAZIONE DEL CENTRO STORICO CON IL PARCO ARCHEOLOGICO URBANO DELL’ANTICA VOLCEI – BUCCINO (SA)",
        images: [image.risanamento15, image.risanamento16, image.risanamento17],
        style: "xs:grid-cols-2 md:grid-cols-3 gap-4",
      },
    ],
  },
];
