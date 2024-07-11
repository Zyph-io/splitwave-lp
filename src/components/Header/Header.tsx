// src/components/Header.tsx
import React from 'react';
import logo from "../../assets/logo.png"

import ButtomLinear from '../common/ButtomLinear/ButtomLinear';

function Header() {
  return (
    <header className="bg-blue-900 text-white flex justify-evenly items-center py-4 ">
      <div className="flex items-center">
        <img src={logo} alt="Splitwave Logo" className="w-56 h-20  " />
      </div>
      <nav className="flex items-center justify-center font-bold gap-9 mr-28">
        <a href="#" className="hover:text-gray-300 text-xs ">Home</a>
        <a href="#" className="hover:text-gray-300 text-xs">Sobre nós</a>
        <a href="#" className="hover:text-gray-300 text-xs">Serviços</a>
        <a href="#" className="hover:text-gray-300 text-xs">Clientes</a>
        <a href="#" className="hover:text-gray-300 text-xs mr-[72px]">FAQ</a>
        <ButtomLinear text="Começar Agora!" />
      </nav>
    </header>
  );
}

export default Header;
