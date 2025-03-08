"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    nome: "Josiane Melo",
    inst: "aprendacom.tiajosi",
    imagem: "/josy.png",
    texto: `Gostaria de expressar minha gratidão e satisfação pelo trabalho excepcional que suo equipe realizou no
        desenvolvimento de melhorias para minha empresa, personalização, consultorias e no projeto online. A dedicação,
        criatividade e profissionalismo demonstrados superaram as minhas expectativas. Cada detalhe foi cuidadosamente
        considerado, e o resultado final reflete perfeitamente a identidade e os valores da minha empresa. Agradeço
        imensamente por transformar minha visão em realidade e por tornar todo o processo tao agradável e eficiente. Estou
        empolgada para continuar parceria de sucesso!`,
  },
  {
    id: 2,
    nome: "Ana Vitória",
    inst: "vitoriamacedo.estetic",
    imagem: "/vitoria.png",
    texto: `Quero dizer os meus sinceros agradecimentos à equipe da Inspire Designs pelo excelente trabalho realizado no
      desenvolvimento do meu site profissional e pela consultoria em identidade visual para o meu Instagram. A dedicação e o
      talento de vocês não só transformaram a minha presença online, como também aumentaram significativamente o meu 
      engajamento e atraíram novos clientes. Além disso, vocês fizeram tudo isso de forma fluida e agradável, sempre
      ouvindo minhas opiniões e desejos. Sou imensamente grata pelo impacto positivo que vocês trouxeram ao meu negócio. Muito obrigada!!!`,
  },
  {
    id: 3,
    nome: "Ana Rebeca",
    inst: "ana_rebeca2009",
    imagem: "/rebeca.png",
    texto: `Quero expressar minha gratidão pelo excelente trabalho. Amei cada detalhe, estava simplesmente maravilhoso! Parabéns pela criatividade e dedicação. Muito obrigado pelo esforço e excelência demonstrados. Com certeza irei indicar para amigos e familiares.`,
  },
  {
    id: 4,
    nome: "Daniele",
    inst: "dannyleite4",
    imagem: "/daniele.png",
    texto:
      "Excelente! O serviço prestado foi impecável e os resultados superaram nossas expectativas. Agradecemos a dedicação e compromisso...",
  },
  {
    id: 5,
    nome: "João Pedro",
    inst: "joaopmadeira720",
    imagem: "/pedro.png",
    texto:
      "Excelente! O serviço prestado foi impecável e os resultados superaram nossas expectativas. Agradecemos a dedicação e compromisso...",
  },
];

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + depoimentos.length) % depoimentos.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-7xl font-greatVibes text-center text-black mb-6">
        Depoimentos
      </h1>

      <div className="relative">
        {/* Setas de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black p-2 font-bold"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black p-2 font-bold"
        >
          <ChevronRight />
        </button>

        {/* Carrossel */}
        <div className="flex overflow-hidden mt-10 shadow-2xl">
          {depoimentos.map((depoimento, index) => (
            <div
              key={depoimento.id}
              className={`w-full flex-shrink-0 transition-transform duration-500 ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <div className="text-center bg-gray-50 rounded-md p-8">
                <Image
                  src={depoimento.imagem}
                  alt={depoimento.nome}
                  width={100}
                  height={110}
                  className="rounded-full mx-auto shadow-xl"
                />
                <div className="flex justify-center mt-8">
                  <span className="font-semibold text-2xl">
                    {depoimento.nome}
                  </span>
                  <a
                    href={`https://www.instagram.com/${depoimento.inst}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline ml-2 mt-1 "
                  >
                    <Instagram />
                  </a>
                </div>

                <p className="mt-4 md:text-xl text-sm mx-9">
                  {depoimento.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;
