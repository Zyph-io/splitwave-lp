// src/components/MainSection.tsx
import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Tenha seu próprio gateway de pagamento</h1>
          <p className="text-lg mb-6">Tecnologia de ponta e segurança para ter um gateway de sucesso. Sem esforço, e com infra estrutura completa!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            QUERO TER MEU PRÓPRIO GATEWAY
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://via.placeholder.com/400x300" alt="Gateway de Pagamento" className="rounded-md shadow-md" />
        </div>
      </div>
      <div className="mt-16 flex justify-center space-x-4">
        <div className="bg-white text-blue-900 p-6 rounded-lg shadow-md text-center">
          <div className="mb-2">
            <img src="https://via.placeholder.com/100" alt="Mais Segurança" className="h-12 mx-auto" />
          </div>
          <div className="font-bold">Mais Segurança</div>
        </div>
        <div className="bg-white text-blue-900 p-6 rounded-lg shadow-md text-center">
          <div className="mb-2">
            <img src="https://via.placeholder.com/100" alt="Mais Inovação" className="h-12 mx-auto" />
          </div>
          <div className="font-bold">Mais Inovação</div>
        </div>
        <div className="bg-white text-blue-900 p-6 rounded-lg shadow-md text-center">
          <div className="mb-2">
            <img src="https://via.placeholder.com/100" alt="Mais Suporte" className="h-12 mx-auto" />
          </div>
          <div className="font-bold">Mais Suporte</div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
