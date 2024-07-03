// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className=" text-white flex justify-between items-center py-4 px-6">
      <div className="flex items-center space-x-2">
        <img src="/path/to/logo.png" alt="Splitwave Logo" className="h-8" />
        <span className="text-xl font-semibold">splitwave</span>
      </div>
      <nav className="flex space-x-8">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Sobre nós</a>
        <a href="#" className="hover:text-gray-300">Serviços</a>
        <a href="#" className="hover:text-gray-300">Clientes</a>
        <a href="#" className="hover:text-gray-300">FAQ</a>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Começar Agora!
      </button>
    </header>
  );
};

export default Header;
