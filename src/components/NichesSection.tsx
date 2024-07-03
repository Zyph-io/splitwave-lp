// src/components/NichesSection.tsx
import React from 'react';

const NichesSection: React.FC = () => {
  return (
    <section className=" text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">PRINCIPAIS NICHOS DE ATUAÇÃO DA <span className="text-blue-400">SPLITWAVE</span></h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="p-6 rounded-lg text-center">
          <img src="https://i.postimg.cc/DZNb7BVq/Group-1772.png" alt="Cassino" className="rounded-md mb-4" />
          <div className="text-xl font-bold"></div>
        </div>
        <div className="p-6 rounded-lg text-center">
          <img src="https://i.postimg.cc/W3ScZHpk/Group-1773.png" alt="Ecommerce" className="rounded-md mb-4" />
          <div className="text-xl font-bold"></div>
        </div>
        <div className="p-6 rounded-lg text-center">
          <img src="https://i.postimg.cc/m2zKZD9M/Group-1774.png" alt="Drop Shipping" className="rounded-md mb-4" />
          <div className="text-xl font-bold"></div>
        </div>
      </div>
    </section>
  );
};

export default NichesSection;
