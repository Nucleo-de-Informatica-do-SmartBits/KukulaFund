"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  "Esta plataforma mudou vidas! A transparência e a dedicação fazem a diferença.",
  "Graças a esta comunidade, pude receber apoio para continuar meus estudos.",
  "Cada doação aqui realmente chega a quem precisa. Recomendo a todos!",
  "Plataforma incrível! Fácil de usar e com um impacto real nas vidas das pessoas.",
];

export default function TestimonialsAndStats() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 px-6 md:px-12">
      <div className="text-center">
        <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-full">TESTEMUNHOS</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          O que as pessoas dizem sobre nós
        </h2>
        <div className="mt-6 bg-gray-100 p-8 rounded-lg relative">
          <p className="text-xl italic text-gray-600 transition-opacity">
            "{testimonials[currentIndex]}"
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-3xl font-bold text-green-600">0%</h3>
          <p className="font-semibold">Taxa da plataforma</p>
          <p className="text-gray-600">Garantimos total transparência.</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-600">12+</h3>
          <p className="font-semibold">Doações dadas</p>
          <p className="text-gray-600">Agradecemos imensamente.</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-600">16+</h3>
          <p className="font-semibold">Doadores ativos</p>
          <p className="text-gray-600">Sempre apoiando a causa.</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-600">2000+</h3>
          <p className="font-semibold">Histórias de sucesso</p>
          <p className="text-gray-600">Transformamos vidas diariamente.</p>
        </div>
      </div>
    </section>
  );
}
