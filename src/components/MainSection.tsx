import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className=" text-white py-16 px-8 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Tenha seu próprio gateway de pagamento</h1>
          <p className="text-lg mb-6">Tecnologia de ponta e segurança para ter um gateway de sucesso. Sem esforço, e com infra estrutura completa!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            QUERO TER MEU PRÓPRIO GATEWAY
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://i.postimg.cc/GpN0fBH2/8953473-1.png" alt="Gateway de Pagamento" className="rounded-md shadow-md" />
        </div>
      </div>
      <div className="max-w-[482px] h-32 mt-16 p-4 bg-white rounded-lg shadow-md flex justify-around">
        <div className="text-center w-12 h-12 bg-[#002980] rounded-full">
          <img src="https://i.postimg.cc/65wdZYYW/engrenagem.png" alt="Mais Segurança" className="h-12 mx-auto mb-2" />
          <div className="text-blue-900 font-bold">Mais Segurança</div>
        </div>
        <div className="text-center w-12 h-12 bg-[#002980] rounded-full">
          <img src="https://i.postimg.cc/pLrk9sL9/seta.png" alt="Mais Integração" className="h-12 mx-auto mb-2" />
          <div className="text-blue-900 font-bold">Mais Integração</div>
        </div>
        <div className="text-center w-12 h-12 bg-[#002980] rounded-full">
          <img src="https://i.postimg.cc/Gp180pVc/caneta.png" alt="Mais Suporte" className="h-12 mx-auto mb-2" />
          <div className="text-blue-900 font-bold">Mais Suporte</div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
