import { icon } from "../../constants/constants";

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className={`rounded-lg p-4 text-white ${color} w-full h-auto`}>
    <div className="bg-white w-10 flex justify-center items-center p-1 mb-2 rounded-lg">
      <img className="w-8 h-8" src={Icon} alt="" />
    </div>
    <h3 className="text-xl font-black mb-2">{title}</h3>
    <p className="text-sm opacity-90 font-medium">{description}</p>
  </div>
);

export default function ConstructionFeatures() {
  const features = [
    {
      icon: icon.House,
      title: "Edilizia Commerciale e Residenziale",
      description:
        "Costruzioni e ristrutturazioni edili Industriali e di Infrastrutture da oltre 15 anni.",
      color: "bg-[--g-sky-blue]",
    },
    {
      icon: icon.Excavator,
      title: "Movimento terra, bonifica e demolizione di opere.",
      description:
        "Professionalità nei lavori di scavo, ripristino e demolizione, utilizzando tecniche specifiche e attrezzature adeguate. ",
      color: "bg-[--g-blue]",
    },
    {
      icon: icon.Road,
      title: "Opere Stradali e Asfalti",
      description:
        "Squadre specializzate per la posa degli asfalti, oltre a quelle tradizionali per lavori edili, stradali e fognari, soddisfacendo i requisiti della Pubblica amministrazione.",
      color: "bg-[--g-sky-blue]",
    },
    {
      icon: icon.Location,
      title: "Operatività Nazionale",
      description:
        "L'azienda opera nel Nord e Sud Italia con dipendenti diretti e specialisti, permettendo la gestione simultanea di diversi cantieri di varie tipologie.",
      color: "bg-[--g-blue]",
    },
    {
      icon: icon.Innovative,
      title: "Soluzioni Innovative",
      description:
        "Combiniamo creatività e competenza tecnica per sviluppare idee tecnologiche all'avanguardia.",
      color: "bg-[--g-sky-blue]",
    },
  ];

  return (
    <div className="flex items-center py-24 pb-12 px-4 lg-px-[5%] xl:px-[6%] 2xl:px-[10%]">
      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
