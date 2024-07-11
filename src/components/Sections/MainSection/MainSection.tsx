// src/components/MainSection.tsx
import React from 'react';
import fotoMaquina from "../../../assets/maquimaCartao.jpg";
import ButtomLinear from '../../common/ButtomLinear/ButtomLinear';
import Struture from '../../common/Structure/Structure';



const MainSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex justify-start  md:flex-row items-center">
        <div className="h-[36rem] flex-1 items-start justify-start  md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold font-inter text-[52px] leading-[67px] mb-11">Tenha seu próprio <br /> gateway de pagamento</h1>
          <p className="text-lg mb-8 mt-11">Tecnologia de ponta e segurança para ter <br /> um gateway de sucesso. Sem esforço, e com <br /> infra estrutura completa!</p>
          <ButtomLinear text='QUERO TER MEU PRÓPRIO GATEWAY'/>
          <h2 className='mt-12 text-xl font-bold font-inter'>INFRAESTRUTURA COMPLETA</h2>
          <Struture/>
        </div>
        <div className=" md:w-1/2">
          <img src={fotoMaquina} alt="Gateway de Pagamento" className="rounded-[110px]" />
        </div>
      </div>
     
    </section>
  );
};

export default MainSection;
