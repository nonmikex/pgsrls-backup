import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../components/services/data/services";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import { image } from "../constants/constants";

export default function ServicesDetail() {
  const { slug } = useParams();

  const service = services.find(
    (service) => service.slug === `/servizi/${slug}`
  );

  if (!service) {
    return <div>Servizio non trovato</div>;
  }

  return (
    <>
      <Navbar />
      <main className="mt-[4.5rem]">
        <div
          className="w-full h-[50vh]"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-black/60">
            <h1 className="text-3xl text-center text-white uppercase font-black">
              {service.title}
            </h1>
            <div className="w-[20vw] h-1 bg-[--g-sky-blue]"></div>
          </div>
        </div>
      </main>
      <div className="mb-12 px-4 lg:px-[10%]">
        <div className="w-full flex justify-center items-center -translate-y-16">
          <div className="max-w-xl flex flex-col gap-4 bg-white p-4 rounded-xl shadow">
            <img className="w-10 h-10" src={service.icon} alt="" />
            <p>{service.description}</p>
          </div>
        </div>
        <div className="space-y-12">
          {service.projects && service.projects.length > 0 ? (
            service.projects.map((project, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-[--g-blue-dark] mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">COMMITENTE: PRIVATO</p>
                <div className={`w-full grid ${project.style}`}>
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`w-full h-auto ${
                        [
                          image.esterne3,
                          image.risanamento9,
                          image.esterne9,
                        ].includes(img)
                          ? `col-span-2`
                          : ""
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Immagine ${idx + 1} di ${project.title}`}
                        className={`w-full h-full object-cover rounded-md ${
                          (img === image.fibraOttica14 ? "h-[350px]" : "",
                          img === image.fibraOttica10 ? "h-[350px]" : "",
                          img === image.fibraOttica8 ? "h-[350px]" : "")
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              Non ci sono progetti disponibili per questo servizio.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
