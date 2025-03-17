"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
       
        
          <Image
            src="/Logo.png"
            alt="Logo"
            width={20}
            height={10}
            className=""
          />

      
          <nav className="mt-4 flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:underline">Campanhas</a>
            <a href="#" className="hover:underline">Sobre nós</a>
            <a href="#" className="hover:underline">Contactos</a>
            <a href="#" className="hover:underline">Ajuda</a>
          </nav>

    
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Instagram size={24} />
            </a>
          </div>

    
          <p className="mt-4 text-gray-500 text-sm">
            © 2025 <strong className="text-gray-700">Solidarize-se.co</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
