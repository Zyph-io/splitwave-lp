import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSyncAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';

const MainSection: React.FC = () => {
  return (
    <section className="text-white py-16 px-8 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Tenha seu próprio gateway de pagamento</h1>
          <p className="text-lg mb-6">Tecnologia de ponta e segurança para ter um gateway de sucesso. Sem esforço, e com infra estrutura completa!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            QUERO TER MEU PRÓPRIO GATEWAY
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://i.postimg.cc/PfKDJ8rM/imagem-layer.png" alt="Gateway de Pagamento" className="rounded-md shadow-md" />
        </div>
      </div>
      <div className='font-bold text-2xl '>INFRAESTRUTURA COMPLETA</div>
      <div className="max-w-[482px] h-[119px] mt-16 p-4 bg-white rounded-lg shadow-md flex justify-around items-center">
        <div className="text-center flex gap-4">
          <div className="w-12 h-12 bg-[#002980] rounded-full flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faShieldAlt} className="text-white text-xl" />
          </div>
          <div className="text-blue-900 font-bold text-justify"><span className='text-[#737373] '>Mais</span><br /> Segurança</div>
        </div>
        <div className="text-center flex gap-4">
          <div className="w-12 h-12 bg-[#002980] rounded-full flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faSyncAlt} className="text-white text-xl" />
          </div>
          <div className="text-blue-900 font-bold text-justify"><span className='text-[#737373] '>Mais</span><br /> Integração</div>
        </div>
        <div className="text-center flex gap-4">
          <div className="w-12 h-12 bg-[#002980] rounded-full flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faHeadset} className="text-white text-xl" />
          </div>
          <div className="text-blue-900 font-bold text-justify"><span className='text-[#737373] '>Mais</span><br /> Suporte</div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
