import { useState } from "react";
import { ArrowDownToLine, PhoneCall, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { list } from "../../constants/constants";
import Footer from "../navigation/Footer";
import Statistics from "./Statistics";
import { image } from "../../constants/constants";
import imgContact from "../../assets/header-banner.jpg";

function ImageModal({ isOpen, onClose, image }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 text-white hover:text-gray-300 transition-colors duration-200"
          onClick={onClose}
        >
          <X size={30} />
        </button>
        <img
          src={image.image}
          alt={image.title}
          className="max-h-[80vh] max-w-full object-contain"
        />
        <div className="absolute bottom-4 left-4 right-4 text-white text-center">
          <h3 className="text-xl font-semibold">{image.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function Company() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <section className="w-full flex flex-col justify-center items-center text-center gap-2 px-[10%] py-16">
          <h1 className="text-3xl font-bold text-[#242424]">
            Passione, serietà & professionalità
          </h1>
          <p>
            POLITO GROUP sintetizza tre valori fondamentali per il successo e la
            crescita in qualsiasi ambito lavorativo: entusiasmo e passione per
            ciò che si fa; impegno e dedizione nel portare a termine i propri
            compiti con integrità; competenza, preparazione e abilità nel
            proprio campo. Questi elementi, combinati, garantiscono risultati
            eccellenti e una solida reputazione.
          </p>
        </section>

        <section
          style={{
            backgroundImage: `url(${image.costruzione3})`,
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
        >
          <div className="w-full h-full bg-[#ffffffe0] px-4 sm:px-[5%] xl:px-[15%]">
            <Statistics />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 items-center gap-4 px-4 md:px-[5%] xl:px-[15%] py-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-[#242424] mb-2">
              Chi siamo
            </h1>
            <b className="text-[--g-blue-dark]"></b>
            <div className="flex flex-col gap-2">
              <p>
                La POLITO GROUP S.r.l.s. è una realtà imprenditoriale giovane e
                dinamica, capace di distinguersi sul mercato grazie a un
                approccio innovativo che amplia e ridefinisce il concetto di
                "costruire". Non si tratta solo di edificare strutture, ma di
                creare valore attraverso la combinazione di creatività,
                competenza tecnica e una profonda sensibilità nei confronti
                delle esigenze delle persone e delle comunità. Per POLITO GROUP,
                costruire significa ripensare e migliorare il territorio nel suo
                complesso, ponendo l’essere umano al centro del progetto e
                adottando una visione che guarda al futuro con consapevolezza e
                rispetto per l’ambiente e la qualità della vita. L'azienda si
                impegna costantemente a interpretare le necessità del presente e
                anticipare quelle del futuro, proponendo soluzioni integrate che
                puntano a migliorare il benessere individuale e collettivo. La
                sua filosofia si riassume in un principio guida che permea ogni
                attività: costruire valore.
              </p>
              <p>
                Il valore che POLITO GROUP crea non riguarda soltanto le opere
                edili, ma si estende a una vasta gamma di settori strategici,
                offrendo una pluralità di servizi che contribuiscono alla
                trasformazione, modernizzazione e sostenibilità del territorio.
                Grazie a una struttura organizzativa flessibile e a un team di
                professionisti altamente specializzati, l’azienda è in grado di
                operare con successo in diversi ambiti, adattandosi alle
                richieste di un mercato in continua evoluzione. La capacità di
                gestire contemporaneamente molteplici cantieri e progetti
                complessi, sia nel Nord che nel Sud Italia, è resa possibile
                dall’efficiente coordinamento tra le risorse interne e un
                indotto di collaboratori esterni qualificati. Inoltre, la
                proprietà di un parco macchine e attrezzature all’avanguardia,
                insieme all'utilizzo delle più moderne tecnologie, consente di
                realizzare interventi rapidi, sicuri e di alta qualità.
              </p>

              <p>
                POLITO GROUP offre una vasta gamma di servizi, tutti orientati a
                rispondere alle sfide del mercato contemporaneo e a soddisfare
                le esigenze dei clienti, nel rispetto dei più alti standard
                tecnici e normativi. Tra i principali ambiti di attività,
                l’azienda si distingue per:
              </p>

              <ul className="list-disc px-6">
                <li>
                  <b>Costruzioni civili e industriali</b>, settore in cui POLITO
                  GROUP eccelle grazie a un approccio che privilegia la qualità,
                  la sicurezza e l'efficienza in ogni fase del progetto, dalla
                  pianificazione iniziale alla consegna finale. L'azienda si
                  occupa della costruzione di edifici residenziali, commerciali
                  e industriali, garantendo soluzioni personalizzate che
                  rispondono alle esigenze specifiche di ogni cliente.{" "}
                </li>
                <li>
                  <b>Infrastrutture stradali e ponti</b>, un settore strategico
                  in cui POLITO GROUP vanta una lunga esperienza nella
                  realizzazione e manutenzione di opere viarie essenziali per lo
                  sviluppo economico e sociale del territorio. L'azienda è in
                  grado di affrontare progetti complessi, garantendo il rispetto
                  delle normative vigenti e l’utilizzo delle tecniche più
                  avanzate.
                </li>
                <li>
                  <b>
                    Reti in Fibra Ottica, acquedotti, gasdotti, oleodotti, e
                    opere di irrigazione ed evacuazione
                  </b>
                  , ambiti nei quali POLITO GROUP si distingue per l’alta
                  competenza tecnica e la capacità di realizzare infrastrutture
                  essenziali per la fornitura di servizi vitali. Le reti di
                  distribuzione dell’acqua, del gas e delle telecomunicazioni
                  richiedono soluzioni all’avanguardia, e l'azienda è in grado
                  di fornire risposte efficaci e affidabili, nel pieno rispetto
                  degli standard di sicurezza e delle normative ambientali.
                </li>
                <li>
                  <b>
                    Interventi di difesa idraulica, sistemazioni fluviali e
                    bonifiche
                  </b>
                  , in cui POLITO GROUP opera con l’obiettivo di proteggere e
                  migliorare il territorio, contribuendo alla prevenzione di
                  rischi naturali come le alluvioni e l'erosione del suolo.
                  Questi interventi sono cruciali per garantire la sicurezza
                  delle comunità e la salvaguardia delle risorse naturali, e
                  l'azienda li realizza con un approccio integrato che tiene
                  conto delle esigenze ambientali e sociali.
                </li>
                <li>
                  <b>Bonifiche ambientali e demolizioni</b>, un settore in cui
                  l’azienda ha sviluppato una notevole competenza, operando con
                  un approccio responsabile e sostenibile. POLITO GROUP si
                  impegna a ridurre al minimo l’impatto ambientale dei suoi
                  interventi, adottando pratiche sicure e rispettose
                  dell'ecosistema, con particolare attenzione alla gestione dei
                  rifiuti e al recupero delle risorse.
                </li>
                <li>
                  <b>
                    Manutenzione e gestione delle reti energetiche e
                    infrastrutturali
                  </b>
                  , un servizio che garantisce il funzionamento continuo e
                  ottimale di infrastrutture essenziali per la vita quotidiana e
                  per lo sviluppo economico del territorio. L’azienda fornisce
                  interventi di manutenzione programmata e straordinaria,
                  assicurando che le reti di distribuzione dell'energia e delle
                  altre risorse funzionino in modo efficiente e sicuro.
                </li>
                <li>
                  <b>Ristrutturazioni residenziali e industriali</b>,
                  un’attività che si concentra sul recupero e la valorizzazione
                  del patrimonio edilizio esistente, con un'attenzione
                  particolare all'efficienza energetica e all'innovazione
                  tecnologica. POLITO GROUP è in grado di trasformare edifici
                  obsoleti in strutture moderne e funzionali, preservando al
                  contempo il valore storico e architettonico degli immobili.
                </li>
              </ul>

              <p>
                Con una visione strategica orientata all’innovazione e alla
                crescita sostenibile, POLITO GROUP è diventata un punto di
                riferimento nel panorama delle costruzioni, delle infrastrutture
                e dei servizi tecnologici in Italia. Grazie alla capacità di
                cogliere le nuove opportunità offerte dal mercato e di
                sperimentare soluzioni innovative, l'azienda è in costante
                evoluzione, pronta a rispondere alle sfide del futuro con
                competenza, passione e determinazione.
              </p>
            </div>
          </div>

          <aside className="w-full h-full p-2">
            <div className="w-full h-auto bg-gray-100 rounded overflow-hidden">
              <img
                className="w-full h-60 object-cover"
                src={imgContact}
                alt=""
              />
              <div className="p-4 flex flex-col gap-2">
                <PhoneCall className="text-[--g-sky-blue]" size={35} />
                <h4>Realizziamo i tuoi desideri</h4>
                <a
                  className="text-3xl font-black text-[--g-sky-blue]"
                  href="tel:341228035"
                >
                  340 122 8035
                </a>
                <span>
                  <b className="cursor-default">Email:</b>{" "}
                  <a href="mailto:politogroup@alice.it">politogroup@alice.it</a>
                </span>
              </div>
            </div>
          </aside>
        </section>

        <section className="bg-blue-900 py-24 px-4 sm:px-[5%] xl:px-[15%]">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-black uppercase text-white text-center mb-16"
            >
              Lista mezzi ed attrezzature
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {list.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white shadow-2xl transition-all duration-300 hover:shadow-blue-400/30 group cursor-pointer rounded-lg overflow-hidden"
                  onClick={() => openModal(item)}
                >
                  <div className="w-full h-full relative">
                    <img
                      className="w-full h-auto object-cover object-center"
                      src={item.image}
                      alt={`Attrezzatura ${index + 1}`}
                    />
                    <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-[--g-blue] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <AnimatePresence>
        {modalOpen && currentImage && (
          <ImageModal
            isOpen={modalOpen}
            onClose={closeModal}
            image={currentImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
