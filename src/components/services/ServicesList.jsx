import React from "react";
import { ChevronRight } from "lucide-react";
import { services } from "./data/services";

export default function ServicesList() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[--g-blue-dark]">
            I nostri servizi
          </h1>
          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 bg-[--g-sky-blue]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({
  image,
  icon: Icon,
  title,
  description,
  slug,
  style,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg">
        <img className="w-6 h-6" src={Icon} alt="" />
      </div>
    </div>
    <div className="p-6">
      <h3 className={`text-xl font-bold text-[--g-blue-dark] mb-2 ${style}`}>
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-5">{description}</p>
      <div className="flex items-center">
        <a
          className="flex items-center gap-2 py-2 px-6 bg-[--g-sky-blue] text-white font-semibold rounded-full group"
          href={slug}
        >
          <span className="ml-6 group-hover:ml-0 transition-all">
            Scopri di più
          </span>
          <ChevronRight className="opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </a>
      </div>
    </div>
  </div>
);
