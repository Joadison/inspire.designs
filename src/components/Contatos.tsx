'use client'
import React, { useState } from 'react';

function Contatos() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-7xl font-greatVibes text-center text-gray-900 mb-16">Contatos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Lado esquerdo: Dados de redes sociais e contato */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-arsenica font-semibold text-gray-800">Redes Sociais</h2>
            <ul className="space-y-4 mt-4 text-lg text-gray-600">
              <li><a href="https://www.instagram.com/inspire.designsjv/" className="hover:text-pink-600">Instagram</a></li>
              <li><a href={`https://wa.me/5585987596656?text=${encodeURIComponent('Olá, gostaria de mais informações!')}`} className="hover:text-green-500">Whatsapp</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-arsenica font-semibold text-gray-800">Contatos</h2>
            <ul className="space-y-4 mt-4 text-lg text-gray-600">
              <li>Email: <a href="mailto:contato@empresa.com" className="text-blue-600">inspiredesigns@outlook.com</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-arsenica font-semibold text-gray-800">Envie um E-mail</h2>
          <form className="space-y-6"  action="https://formspree.io/f/xkggprog"  method="POST">
            <div>
              <label htmlFor="nome" className="block text-lg font-medium text-gray-700">Seu Nome</label>
              <input 
                type="text" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Digite seu nome" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Seu E-mail</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Digite seu e-mail" 
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-lg font-medium text-gray-700">Sua Mensagem</label>
              <textarea 
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4} 
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Escreva sua mensagem"
              />
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contatos;