"use client"

import React from 'react'

function Pacotes() {
  const phoneNumber = '5585987596656';

  const sendMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-7xl font-greatVibes text-center text-gray-900 mb-12">Nossos Pacotes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Pacote Básico */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-125"
         onClick={() => sendMessage('Olá, tenho interesse no Pacote Básico.')}>
          <h2 className="text-2xl font-arsenica font-bold text-center text-gray-900 mb-4">Básico</h2>
          <p className="text-center text-gray-600 mb-4">Pacote ideal para quem está começando e busca soluções práticas e eficientes.</p>
          {/* <ul className='text-center'>
            <li>Essencial</li>
            <li>Inicial</li>
            <li>Básico Web</li>
          </ul> */}
          <p className="text-center text-xl font-serif font-bold text-gray-800 mt-8">R$ 149,90</p>
        </div>

        {/* Pacote Intermediário */}
        <div className="p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-125"
          onClick={() => sendMessage('Olá, tenho interesse no Pacote Intermediário.')}>
          <h2 className="text-2xl font-arsenica font-bold text-center text-gray-900 mb-4">Intermediário</h2>
          <p className="text-center text-gray-600 mb-4">Para quem deseja mais funcionalidades e maior personalização.</p>
         {/*  <ul className='text-center'>
            <li>Avançado</li>
            <li>Pro</li>
            <li>Completo</li>
          </ul> */}
          <p className="text-center text-xl font-serif font-bold text-gray-800 mt-8">R$ 399,90</p>
        </div>

        {/* Pacote Premium */}
        <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-125"
          onClick={() => sendMessage('Olá, tenho interesse no Pacote Premium.')}>
          <h2 className="text-2xl font-arsenica font-bold text-center text-gray-900 mb-4">Premium</h2>
          <p className="text-center text-gray-600 mb-4">Pacote completo com todos os recursos e atendimento exclusivo.</p>
          {/* <ul className='text-center'>
            <li>Premium</li>
            <li>Elite</li>
            <li>Supremo</li>
          </ul> */}
          <p className="text-center text-xl font-serif font-bold text-gray-800 mt-8">R$ 899,90</p>
        </div>

        {/* Pacote Personalizado */}
        <div className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-125"
         onClick={() => sendMessage('Olá, tenho interesse no Pacote Personalizado.')}>
          <h2 className="text-2xl font-arsenica font-bold text-center text-gray-900 mb-4">Personalizado</h2>
          <p className="text-center text-gray-600 mb-4">Criamos um pacote sob medida para atender suas necessidades específicas.</p>
          {/* <ul className='text-center'>
            <li>Serviços Sob Medida</li>
            <li>Consultoria Personalizada</li>
            <li>Soluções Específicas para as Necessidades do Cliente</li>
          </ul> */}
          <p className="text-center text-xl font-serif font-bold text-gray-800 mt-8">Sob Consulta</p>
        </div>

      </div>

      <div className="text-center mt-16">
        <p className="text-2xl font-serif text-gray-800 mb-4">O sucesso começa com o primeiro passo!</p>
        <p className="text-lg text-gray-600">Escolha o pacote perfeito para seu negócio e vamos juntos alcançar novos patamares.</p>
        <button 
          onClick={() => sendMessage('Olá, gostaria de saber mais sobre os pacotes.')}
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Entre em contato agora!
        </button>
      </div>
    </div>
  )
}

export default Pacotes
