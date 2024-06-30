import React from 'react';

const MobileSectionThree: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          O nosso negócio é <span className="text-green-500">Acelerar os seus Resultados</span>.
        </h2>
        <p className="mb-8">
          Vamos elaborar o melhor plano de ação para aumentar a sua receita e a do seu negócio, no menor tempo possível.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-8">
          Começar Agora!
        </button>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-xl font-bold">100+</p>
            <p className="text-sm">Projetos finalizados</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-xl font-bold">50+</p>
            <p className="text-sm">Clientes Satisfeitos</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-xl font-bold">500k</p>
            <p className="text-sm">De Faturamento</p>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">Estrutura completa</h3>
        <div className="bg-white text-black p-4 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 p-4 rounded-full mb-2">
                <img src="https://via.placeholder.com/50" alt="Estratégia" />
              </div>
              <p className="text-sm">Mais Estratégia</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 p-4 rounded-full mb-2">
                <img src="https://via.placeholder.com/50" alt="Resultado" />
              </div>
              <p className="text-sm">Mais Resultado</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 p-4 rounded-full mb-2">
                <img src="https://via.placeholder.com/50" alt="Design" />
              </div>
              <p className="text-sm">Mais Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSectionThree;
