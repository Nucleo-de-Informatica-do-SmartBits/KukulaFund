"use client";

import Image from "next/image";
import Link from "next/link";

const campaigns = [
  {
    id: 1,
    category: "Formação Acadêmica",
    title: "Ajude Azar a continuar seus estudos",
    goal: "1234Kz",
    raised: "1234Kz",
    remaining: "1234Kz",
    image: "/Ajuda/Image1.png",
    categoryColor: "bg-green-500",
  },
  {
    id: 2,
    category: "Saúde",
    title: "Salve a vidas",
    goal: "1234Kz",
    raised: "1234Kz",
    remaining: "1234Kz",
    image: "/Ajuda/Image2.jfif",
    categoryColor: "bg-blue-500",
  },
  {
    id: 3,
    category: "Construção de Escolas",
    title: "Construir escola para alunos pobres",
    goal: "1234Kz",
    raised: "1234Kz",
    remaining: "1234Kz",
    image: "/Ajuda/Imagem3.jfif",
    categoryColor: "bg-purple-500",
  },
  {
    id: 4,
    category: "Formação Acadêmica",
    title: "Faça-os felizes.",
    goal: "1234Kz",
    raised: "1234Kz",
    remaining: "1234Kz",
    image: "/Ajuda/Image4.jfif",
    categoryColor: "bg-green-500",
  },
];

const successStories = [
  {
    id: 1,
    title: "Cada Gesto Conta",
    description: "Obrigado por Fazer Parte da Nossa Causa",
    image: "/Ajuda/Aconteceu/Image1.png",
  },
  {
    id: 2,
    title: "Com Gratidão",
    description: "Sua Contribuição Está Transformando Vidas",
    image: "/Ajuda/Aconteceu/Image2.png",
  },
  {
    id: 3,
    title: "Juntos Pela Esperança",
    description: "Agradecemos pelo Seu Apoio Incondicional",
    image: "/Ajuda/Aconteceu/Image3.png",
  },
  {
    id: 4,
    title: "Solidariedade em Ação",
    description: "Um Agradecimento Sincero Pela Sua Generosidade",
    image: "/Ajuda/Aconteceu/Image4.png",
  },
  {
    id: 5,
    title: "Unidos Pela Mudança",
    description: "Nosso Mais Profundo Agradecimento",
    image: "/Ajuda/Aconteceu/Image5.png",
  },
];

export default function CampaignsAndSuccess() {
  return (
    <section className="w-full py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        A sua ajuda é necessária
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={campaign.image}
              alt={campaign.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className={`px-3 py-1 text-sm text-white rounded-full ${campaign.categoryColor}`}>
                {campaign.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">{campaign.title}</h3>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span>Objetivo <strong>{campaign.goal}</strong></span>
                <span>Recolhido <strong>{campaign.raised}</strong></span>
                <span>Restantes <strong>{campaign.remaining}</strong></span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link href="/doar" className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700">
                  Doações <span className="text-green-500">💚</span>
                </Link>
                <button className="text-gray-500 hover:text-gray-800">➝</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 text-center mt-16 mb-8">Por você Aconteceu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {successStories.map((story) => (
          <div key={story.id} className="relative rounded-lg overflow-hidden shadow-lg">
            <Image src={story.image} alt={story.title} width={400} height={250} className="w-full h-56 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h3 className="text-lg font-semibold">{story.title}</h3>
              <p className="text-sm">{story.description}</p>
              <Link href="#" className="text-red-400 mt-2 inline-block">Saiba mais →</Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold">Mantenha-se atualizado sobre histórias de sucesso</h3>
        <p className="text-gray-600">Receba diretamente no seu e-mail</p>
        <div className="mt-4 flex justify-center">
          <input type="email" placeholder="Introduza o seu email" className="p-3 border rounded-l-lg" />
          <button className="bg-green-500 text-white px-6 py-3 rounded-r-lg">Subscrever</button>
        </div>
      </div>
    </section>
  );
}