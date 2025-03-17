'use client';

import { useState } from 'react';
import Image from 'next/image';

const paymentMethods = [
  { name: 'PayPal', src: '/Pagamento/Paypal.png' },
  { name: 'American Express', src: '/Pagamento/Express.jfif' },
  { name: 'Visa', src: '/Pagamento/Visa.png' },
  { name: 'MasterCard', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' }, 
];

export default function PaymentForm() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-semibold">Confira</h2>
        <p className="text-gray-600 mb-4">Tipo de cartão</p>
        <div className="flex space-x-4 mb-6">
          {paymentMethods.map((method) => (
            <button 
              key={method.name} 
              onClick={() => setSelectedMethod(method.name)}
              className={`border rounded-lg p-2 ${selectedMethod === method.name ? 'border-blue-500' : 'border-gray-300'}`}
            >
              <Image src={method.src} alt={method.name} width={50} height={30} />
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="cardName" 
            placeholder="Nome do Card" 
            value={formData.cardName} 
            onChange={handleChange} 
            className="p-2 border rounded w-full" 
          />
          <input 
            type="text" 
            name="cardNumber" 
            placeholder="Número do Card" 
            value={formData.cardNumber} 
            onChange={handleChange} 
            className="p-2 border rounded w-full" 
          />
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              name="expiryDate" 
              placeholder="Data de validade (MM/YY)" 
              value={formData.expiryDate} 
              onChange={handleChange} 
              className="p-2 border rounded w-full" 
            />
            <input 
              type="text" 
              name="cvc" 
              placeholder="CVC" 
              value={formData.cvc} 
              onChange={handleChange} 
              className="p-2 border rounded w-full" 
            />
          </div>
          <button 
            type="submit" 
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Confirmar Pagamento
          </button>
        </form>
      </div>
    </div>
  );
}
