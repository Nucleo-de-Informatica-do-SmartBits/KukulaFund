'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Doaçao() {
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [agreed, setAgreed] = useState(false);
  
  const amounts = [10, 25, 50, 100, 250];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">O Seu Donativo</h2>
      <div className="flex gap-2 mb-4">
        <input 
          type="text" 
          className="p-2 border rounded w-full" 
          placeholder="Kz" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-green-500 text-white p-2 rounded">Quantidade</button>
      </div>
      <div className="flex gap-2 mb-6">
        {amounts.map((amt) => (
          <button 
            key={amt} 
            className={`p-2 border rounded ${selectedAmount === amt ? 'bg-green-200' : ''}`}
            onClick={() => setSelectedAmount(amt)}
          >
            {amt}.00Kz
          </button>
        ))}
      </div>
      
      <h3 className="text-lg font-bold mb-2">Selecione O Método De Pagamento</h3>
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" defaultChecked /> Doação De Testes
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" /> Doação Offline
        </label>
      </div>
      
      <h3 className="text-lg font-bold mb-2">Informação Pessoal</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <input type="text" placeholder="Nome Próprio" className="p-2 border rounded" />
        <input type="text" placeholder="Apelido" className="p-2 border rounded" />
      </div>
      <input type="email" placeholder="O Seu Email" className="p-2 border rounded w-full mb-4" />
      <textarea placeholder="Deixe Um Comentário..." className="p-2 border rounded w-full mb-4"></textarea>
      
      <div className="flex items-center gap-2 mb-4">
        <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
        <span>Concorda Com Os Termos?</span>
      </div>
      
      <div className="flex justify-between items-center bg-gray-200 p-2 rounded mb-4">
        <span>Total de Doações:</span>
        <span className="bg-green-500 text-white p-2 rounded">{selectedAmount}.00Kz</span>
      </div>
      
      <Link href="PaymentForm" className="block text-center bg-green-500 text-white p-2 rounded">
        Doe agora
      </Link>
    </div>
  );
}
