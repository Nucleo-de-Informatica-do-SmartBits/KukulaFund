"use client";

import Link from "next/link";
import { Users } from "lucide-react";

const contributors = [
  { id: 1, name: "Ana", lastName: "Clara" },
  { id: 2, name: "Lucas", lastName: "Gabriel" },
  { id: 3, name: "Maria", lastName: "Vitória" },
  { id: 4, name: "João", lastName: "Pedro" },
];

export default function CampaignsAndContributors() {
  return (
    <section className="w-full py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">
        Contribuidores Recentes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {contributors.map((contributor) => (
          <div key={contributor.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Users className="text-orange-500 w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{contributor.name}</h3>
            <p className="text-gray-600">{contributor.lastName}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/register"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700 inline-block"
        >
          REGISTE-SE AGORA <span className="text-green-500">💚</span>
        </Link>
      </div>
    </section>
  );
}
