import React from 'react'
import { Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bottom-0 left-0 z-20 w-full bg-[#f3f6fa] p-8 mt-16 ">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <p className="text-lg text-gray-700">
          Feito com ❤️ por <strong>Inspire Designs</strong>
        </p>
        <a 
          href="https://www.instagram.com/inspire.designsjv/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg text-blue-600 hover:text-blue-800 transition-colors flex gap-x-2"
        >
           Siga-nos no Instagram <Instagram className='mt-1'/>
        </a>
        
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        <p>&copy; {new Date().getFullYear()} Inspire Designs. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;
