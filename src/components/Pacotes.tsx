"use client"

import React from 'react';
import { FaCheckCircle, FaStar, FaCrown, FaLightbulb } from 'react-icons/fa';

function Pacotes() {
  const phoneNumber = '5585987596656';

  const sendMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const packages = [
    {
      title: "Básico",
      description: "Pacote ideal para quem está começando e busca soluções práticas e eficientes.",
      price: "R$ 149,90",
      features: ["Essencial", "Inicial", "Básico Web"],
      bgColor: "bg-gray-100",
      hoverColor: "hover:bg-gray-200",
      icon: <FaCheckCircle className="text-blue-500 text-4xl mb-4" />
    },
    {
      title: "Intermediário",
      description: "Para quem deseja mais funcionalidades e maior personalização.",
      price: "R$ 399,90",
      features: ["Avançado", "Pro", "Completo"],
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      icon: <FaStar className="text-yellow-500 text-4xl mb-4" />
    },
    {
      title: "Premium",
      description: "Pacote completo com todos os recursos e atendimento exclusivo.",
      price: "R$ 899,90",
      features: ["Premium", "Elite", "Supremo"],
      bgColor: "bg-green-100",
      hoverColor: "hover:bg-green-200",
      icon: <FaCrown className="text-purple-500 text-4xl mb-4" />
    },
    {
      title: "Personalizado",
      description: "Criamos um pacote sob medida para atender suas necessidades específicas.",
      price: "Sob Consulta",
      features: ["Serviços Sob Medida", "Consultoria Personalizada", "Soluções Específicas"],
      bgColor: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200",
      icon: <FaLightbulb className="text-orange-500 text-4xl mb-4" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-7xl font-greatVibes text-center text-gray-900 mb-12">Nossos Pacotes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`p-6 ${pkg.bgColor} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.hoverColor} cursor-pointer`}
            onClick={() => sendMessage(`Olá, tenho interesse no Pacote ${pkg.title}.`)}
          >
            <div className="text-center">
              {pkg.icon}
              <h2 className="text-2xl font-arsenica font-bold text-gray-900 mb-4">{pkg.title}</h2>
              <p className="text-center text-gray-600 mb-4">{pkg.description}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 flex items-center justify-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-center text-xl font-serif font-bold text-gray-800 mt-8">{pkg.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-2xl font-serif text-gray-800 mb-4">O sucesso começa com o primeiro passo!</p>
        <p className="text-lg text-gray-600">Escolha o pacote perfeito para seu negócio e vamos juntos alcançar novos patamares.</p>
        <button
          onClick={() => sendMessage('Olá, gostaria de saber mais sobre os pacotes.')}
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Entre em contato agora!
        </button>
      </div>
    </div>
  );
}

export default Pacotes;