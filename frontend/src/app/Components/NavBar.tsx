"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-gray-100 border-b">
      <Link href="/" className="text-lg font-bold text-green-600">
        Solidarie-se.co
      </Link>

      <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
        <li>
          <Link href="/" className="hover:text-green-600 transition">
            Início
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-green-600 transition">
            Campanhas
          </Link>
        </li>
        <li>
          <Link href="/SobreNos" className="hover:text-green-600 transition">
            Sobre nós
          </Link>
        </li>
        <li>
          <Link href="Contacto" className="hover:text-green-600 transition">
            Entre em Contato
          </Link>
        </li>
      </ul>

      <div className="flex gap-4">
        <Link href="/Entrar" className="text-gray-800 hover:text-green-600">
          Entrar
        </Link>
        <Link
          href="Doacao"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Doação
        </Link>
      </div>
    </nav>
  );
}
