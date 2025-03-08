"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  const menuItems = [
    { href: "#pacotes", label: "Pacotes" },
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contatos", label: "Contatos" },
  ];

  return (
    <>
      {/* Header fixo */}
      <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-md p-2 md:p-4 text-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
              className="rounded-full"
              priority
            />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 font-arsenica rounded-md hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex gap-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="px-4 py-2 rounded-md text-lg font-arsenica text-gray-700 hover:bg-blue-500 hover:text-white transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-md shadow-md p-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block py-2 text-center text-lg font-arsenica text-gray-700 hover:bg-blue-500 hover:text-white transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
