import React from 'react';

const MobileSectionSeven: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-8 text-center">
        O QUE <span className="text-green-500">NOSSOS CLIENTES</span> ESTÃO FALANDO SOBRE NÓS.
      </h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 text-center">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Cliente" className="rounded-full mr-4" />
          <div>
            <p className="font-bold">Rogério Vieira</p>
            <p className="text-sm text-gray-400">12 de Agosto, 2022</p>
          </div>
          <img src="https://via.placeholder.com/20" alt="Google Logo" className="ml-auto" />
        </div>
        <p className="text-sm mb-4">
          <span className="text-yellow-400">★★★★★</span>
        </p>
        <p>
          "Com a CONNECT IQ, nossa estratégia de tráfego pago alcançou resultados incríveis. Recomendo seus serviços para impulsionar qualquer negócio online."
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        QUERO CRESCER MAIS
      </button>
    </section>
  );
};

export default MobileSectionSeven;
