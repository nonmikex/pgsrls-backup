import React from "react";
import { Users, Home, Percent, Truck, Building } from "lucide-react";
import CountUp from "react-countup";

const StatItem = ({ icon, value, label, suffix = "" }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="text-4xl font-bold text-blue-600 mt-2">
      <CountUp end={value} duration={3.5} suffix={suffix} />
    </span>
    <span className="text-xs text-gray-600 font-bold text-center mt-1">
      {label}
    </span>
  </div>
);

export default function Statistics() {
  return (
    <div className="w-full py-24 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
      <StatItem
        icon={<Users className="w-12 h-12 text-blue-600" aria-hidden="true" />}
        value={30}
        suffix="+"
        label="PERSONE NEL NOSTRO TEAM"
      />
      <StatItem
        icon={<Home className="w-12 h-12 text-blue-600" aria-hidden="true" />}
        value={200}
        suffix="+"
        label="OPERE REALIZZATE"
      />
      <StatItem
        icon={
          <Percent className="w-12 h-12 text-blue-600" aria-hidden="true" />
        }
        value={98}
        suffix="%"
        label="CLIENTI SODDISFATTI"
      />
      <StatItem
        icon={<Truck className="w-12 h-12 text-blue-600" aria-hidden="true" />}
        value={50}
        suffix="+"
        label="MACCHINE OPERATRICI"
      />
      <StatItem
        icon={
          <Building className="w-12 h-12 text-blue-600" aria-hidden="true" />
        }
        value={2}
        label="SEDI OPERATIVE"
      />
    </div>
  );
}
