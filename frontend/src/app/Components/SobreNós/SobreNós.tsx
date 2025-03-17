'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <motion.div 
      className="bg-gray-100 min-h-screen p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-gray-700 leading-relaxed">
            Bem-vindo ao nosso site! Somos uma plataforma dedicada a conectar pessoas generosas com causas que transformam vidas.
            Acreditamos que juntos podemos criar um mundo mais justo, solidário e cheio de oportunidades para todos.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Nosso objetivo é facilitar o processo de doação, oferecendo um ambiente seguro e transparente, onde você pode apoiar projetos e pessoas que realmente precisam.
          </p>
        </motion.div>
        
        <motion.aside 
          className="bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="font-semibold text-lg mb-4 border-b pb-2">Artigos Recentes</h3>
          <ul className="space-y-3">
            <li className="text-blue-600 cursor-pointer">Caridade, Expectativas Vs. Realidade</li>
            <li className="text-blue-600 cursor-pointer">Topo Desta Semana: Histórias Sobre Solidariedade</li>
            <li className="text-blue-600 cursor-pointer">Por Que Você Deve Focar na Caridade</li>
          </ul>
        </motion.aside>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="md:col-span-2 bg-gray-800 text-white p-6 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-white rounded-full border-4 border-green-500"></div>
          </div>
          <h4 className="text-lg font-semibold">Ivandro Panzo</h4>
          <p className="text-green-400">Fundador</p>
        </motion.div>
        
        <motion.aside 
          className="bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <h3 className="font-semibold text-lg mb-4 border-b pb-2">Tags Populares</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-300 text-green-900 px-2 py-1 rounded text-sm">Alimentação</span>
            <span className="bg-green-300 text-green-900 px-2 py-1 rounded text-sm">Casa</span>
            <span className="bg-green-300 text-green-900 px-2 py-1 rounded text-sm">Estilo de Vida</span>
            <span className="bg-green-300 text-green-900 px-2 py-1 rounded text-sm">Formação Acadêmica</span>
            <span className="bg-green-300 text-green-900 px-2 py-1 rounded text-sm">Água</span>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
}
