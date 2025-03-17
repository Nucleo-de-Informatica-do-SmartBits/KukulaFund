"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16">

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Procura ajuda financeira para emergências médicas ou causas sociais?
        </h1>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <Link
            href="/Solicitacao"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Solicite Doação
          </Link>
          <Link
            href="#"
            className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition"
          >
            Doe e Ajude
          </Link>
        </div>
      </div>

    
      <div className="relative md:w-1/2 mt-10 md:mt-0">
        <div className="rounded-full   p-4">
          <Image
            src="/HomePage/HomePage.jfif"
            alt="Crianças felizes"
            width={500}
            height={500}
            className="rounded-full object-cover clip-path-[circle(60%_at_center)] mask-image-[radial-gradient(circle,_rgba(0,0,0,1)_60%,_rgba(0,0,0,0)_100%)]"
          />
        </div>
      </div>
    </section>
  );
}
