// src/components/NichesSection.tsx
import React from 'react';

const NichesSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">PRINCIPAIS NICHOS DE ATUAÇÃO DA <span className="text-blue-400">SPLITWAVE</span></h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="bg-blue-700 p-6 rounded-lg shadow-md text-center">
          <img src="https://via.placeholder.com/300x200" alt="Cassino" className="rounded-md mb-4" />
          <div className="text-xl font-bold">Cassino</div>
        </div>
        <div className="bg-blue-700 p-6 rounded-lg shadow-md text-center">
          <img src="https://via.placeholder.com/300x200" alt="Ecommerce" className="rounded-md mb-4" />
          <div className="text-xl font-bold">Ecommerce</div>
        </div>
        <div className="bg-blue-700 p-6 rounded-lg shadow-md text-center">
          <img src="https://via.placeholder.com/300x200" alt="Drop Shipping" className="rounded-md mb-4" />
          <div className="text-xl font-bold">Drop Shipping</div>
        </div>
      </div>
    </section>
  );
};

export default NichesSection;
