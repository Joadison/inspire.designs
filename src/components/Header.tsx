'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: "#pacotes", label: "Pacotes" },
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contatos", label: "Contatos" },
  ]

  return (
    <header className='bg-[#f3f6fa] p-4 md:p-8'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <Image src='/logo.png' alt="Logo" width={90} height={90} className='rounded-full' />
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className='md:hidden p-2 font-arsenica font-semibold rounded-md hover:bg-gray-200 transition-colors'>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className='hidden md:flex gap-x-4'>
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className='px-4 py-2 rounded-md font-arsenica text-2xl font-semibold  text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out'
              >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className='md:hidden mt-4'>
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className='block py-2 px-4 text-center font-arsenica text-2xl font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out'
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header

