import React from 'react';
import { FaPlus } from 'react-icons/fa';
import dashborad from "../../../assets/dashboard.png";
import traco from "../../../assets/traco.png";

const reasons = [
  "Suporte 24 horas",
  "Saque rápido",
  "Upsell e Order Bumper no Checkout",
  "Integração no code",
  "Múltiplos meios de pagamento",
  "Segurança Avançada",
  "Reports Detalhados",
  "Integre com múltiplas plataformas",
  "Segurança Avançada",
  "Customização Fácil",
  "Automação Inteligente",
  "Relatórios em Tempo Real"
];

const positionClasses = [
  'mt-0 ml-0',
  'mt-1 ml-0',
  'mt-3 ml-0',
  'mt-0 lg:ml-20',
  'mt-1 lg:ml-10',
  'mt-3 lg:ml-10',
  'mt-0 lg:ml-20',
  'mt-1 lg:ml-10',
  'mt-3 lg:ml-10',
  'mt-0 ml-0',
  'mt-1 ml-0',
  'mt-3 ml-0'
];

const ReasonsSection = () => {
  return (
    <section className="relative bg-blue-900 py-20 overflow-hidden ">
      <div className="absolute inset-0  flex justify-center items-center w-full m-auto">
        <img
          src={dashborad}
          alt="Mockup Background"
          className="w-[934px] h-[606px] mt-[113px]  relative"
        />
      </div>
      <div className="container relative mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-inter">12 MOTIVOS PARA ESCOLHER <br /> 
          <div className='flex flex-col justify-center items-center font-inter gap-2'>
             <span className="text-blue-300"> <span className='text-white'>A</span> SPLITWAVE</span>
            <img src={traco} alt="traco azul" className='w-[199px] ml-3' />
          </div>
        </h2>
        <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 mb-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-[#2568ef82] to-[#2222227d] font-ubuntu  flex items-center gap-2 sm:gap-4 h-[70px] sm:h-[85px] rounded-lg shadow-lg transform transition duration-300 hover:scale-105 ${index < positionClasses.length ? positionClasses[index] : ''}`}
            >
              <div className="lg:flex bg-gradient-to-r from-[#2492FF] to-[#0043AE] rounded-[8px] p-2 items-center justify-center ml-[-1rem] shadow">
                <FaPlus className="text-white" />
              </div>
              <span className="text-sm sm:text-lg ml-2 font-semibold p-1">{reason}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
          <button className="w-full sm:w-[406px] h-[85px] text-white py-6 px-[61px]  z-20 rounded-[10px] font-inter  text-2xl  md:text-[26px] font-bold hover:bg-blue-700 transition duration-300 bg-gradient-to-r from-[#3DA1DD] to-[#6AC7F9]">
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
