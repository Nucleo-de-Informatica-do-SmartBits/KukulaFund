'use client';

import { useState } from 'react';


export default function Solicitacao() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-lg font-semibold">Entre Em Contacto</h2>
        <h1 className="text-2xl font-bold mb-4">Envie-Me Uma Mensagem</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="firstName" 
              placeholder="Nome" 
              value={formData.firstName} 
              onChange={handleChange} 
              className="p-2 border rounded w-full" 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Sobrenome" 
              value={formData.lastName} 
              onChange={handleChange} 
              className="p-2 border rounded w-full" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="p-2 border rounded w-full" 
            />
            <input 
              type="text" 
              name="number" 
              placeholder="Número" 
              value={formData.number} 
              onChange={handleChange} 
              className="p-2 border rounded w-full" 
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Mensagem" 
            value={formData.message} 
            onChange={handleChange} 
            className="p-2 border rounded w-full h-32"
          ></textarea>
          <button 
            type="submit" 
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
