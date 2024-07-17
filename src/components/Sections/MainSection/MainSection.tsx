// src/components/MainSection.tsx
import React from 'react';
import fotoMaquina from "../../../assets/maquimaCartao.jpg";
import ButtomLinear from '../../common/ButtomLinear/ButtomLinear';
import Struture from '../../common/Structure/Structure';



const MainSection: React.FC = () => {
  return (
    <section className=" flex justify-center bg-blue-900 text-white py-16 px-8 max-md:px-4">
      <div className="max-w-[1150px] flex justify-star items-center max-md:w-full ">
        <div className="items-start justify-start mb-8 max-md:pl-0">
          <h1 className="text-4xl font-bold font-inter text-[52px] leading-[67px] mb-11 max-md:mb-5  max-md:text-3xl ">Tenha seu próprio <br /> gateway de pagamento</h1>
          <p className="text-lg mb-8 mt-11 max-md:mt-5 max-md:text-[17px] ">Tecnologia de ponta e segurança para ter <br /> um gateway de sucesso. Sem esforço, e com <br /> infra estrutura completa!</p>
          <ButtomLinear text='QUERO TER MEU PRÓPRIO GATEWAY'/>
          <h2 className='mt-12 text-xl font-bold font-inter'>INFRAESTRUTURA COMPLETA</h2>
          <Struture/>
        </div>
        <div className=" md:w-1/2 max-md:hidden ">
          <img src={fotoMaquina} alt="Gateway de Pagamento" className="rounded-[110px] max-md:hidden " />
        </div>
      </div>
     
    </section>
  );
};

export default MainSection;
