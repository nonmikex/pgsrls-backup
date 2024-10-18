import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { image } from "../../constants/constants";

const images = [
  image.fibraOttica,
  image.fibraOttica7,
  image.fibraOttica8,
  image.fibraOttica9,
  image.fibraOttica10,
  // Asfalt Images
  image.asfalt,
  image.asfalt2,
  image.asfalt3,
  image.asfalt4,
  image.asfalt5,
  // Scavi
  image.costruzione1,
  image.costruzione3,
  image.costruzione4,
];

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row py-12 px-4 lg:px-[5%] xl:px-[7%] 2xl:px-[10%]">
      <div className="md:w-1/2 relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Construction site image ${currentImageIndex + 1}`}
            className="w-full h-[500px] object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-4 left-4 bg-[--g-sky-blue] text-white px-4 py-2 rounded-full text-sm font-semibold">
          15 anni di Servizio di qualità
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h2 className="text-[--g-sky-blue] font-semibold mb-2">CHI SIAMO</h2>
        <h1 className="text-3xl font-bold text-[--g-blue-dark] mb-4">
          Offriamo soluzioni innovative e affidabili per l'edilizia e le
          infrastrutture
        </h1>
        <p className="text-gray-600 mb-6">
          Polito Group S.r.l.s è un'azienda dinamica con oltre 15 anni di
          esperienza nella costruzione e ristrutturazione di edifici e nella
          manutenzione di strade e infrastrutture. Offriamo soluzioni innovative
          per migliorare le comunità e promuovere lo sviluppo tecnologico del
          Paese.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <div className="bg-[--g-sky-blue] rounded-full p-1 mr-2">
              <ArrowRight size={16} className="text-white" />
            </div>
            <span>
              Ampia esperienza nel settore delle costruzioni edili e stradali
            </span>
          </li>
          <li className="flex items-center">
            <div className="bg-[--g-sky-blue] rounded-full p-1 mr-2">
              <ArrowRight size={16} className="text-white" />
            </div>
            <span>Operatività a livello nazionale</span>
          </li>
          <li className="flex items-center">
            <div className="bg-[--g-sky-blue] rounded-full p-1 mr-2">
              <ArrowRight size={16} className="text-white" />
            </div>
            <span>Focus su soluzioni innovative</span>
          </li>
        </ul>
        <button className="bg-[--g-sky-blue] hover:bg-[--g-blue-dark] text-white px-6 py-2 rounded-full font-semibold flex items-center">
          <a href="/chi-siamo">Scopri di più</a>
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
