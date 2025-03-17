"use client";

import Link from "next/link";
import { Handshake, Package, Stethoscope } from "lucide-react"; 

const services = [
  {
    id: 1,
    title: "Pedido de Doação",
    description: "Solicitar",
    link: "/solicitar",
    icon: <Handshake size={40} className="text-red-600" />, 
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    id: 2,
    title: "Doação de Itens",
    description: "Candidatar-se",
    link: "/candidatar",
    icon: <Package size={40} className="text-yellow-600" />, 
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    id: 3,
    title: "Doação para Tratamentos Médicos",
    description: "Consultar",
    link: "/consultar",
    icon: <Stethoscope size={40} className="text-blue-600" />, 
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
];

export default function Services() {
  return (
    <section className="w-full py-16 px-6 md:px-12 text-center" >
      <div className="mb-8">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
          OS NOSSOS SERVIÇOS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Obtenha os nossos Serviços Gratuitos
        </h2>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-white shadow-md rounded-lg border flex flex-col items-center"
          >
          
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${service.bgColor}`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {service.title}
            </h3>
            <div className="mt-4">
              <Link
                href={service.link}
                className={`${service.textColor} font-medium flex items-center gap-1 hover:underline`}
              >
                {service.description} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
