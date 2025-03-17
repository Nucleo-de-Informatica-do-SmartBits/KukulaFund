"use client";


import Link from "next/link";

export default function RecentArticles() {
  const articles = [
    {
      title: "Como Pedro se tornar médico",
      description: "Pedro sempre sonhou em ser médico.....",
      category: "Education",
      image: "/Artigo/Imagem.png",
      link: "#",
    },
    {
      title: "Pedro está bem agora",
      description: "Graças ao apoio de muitas pessoas...",
      category: "Education",
      image: "/Artigo/Imagem.png",
      link: "#",
    },
    {
      title: "Doe Pedro",
      description:
        "Pedro, como muitos, teve um sonho: tornar-se médico e ajudar a comunidade em que cresceu...",
      category: "Education",
      image: "/Artigo/Imagem.png",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Veja os nossos artigos mais recentes
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                {article.category}
              </span>
              <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
              <p className="text-gray-600 mt-1">{article.description}</p>
              <Link href={article.link} className="text-red-500 font-semibold mt-3 inline-block">
                Saiba mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
