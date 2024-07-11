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
          className="w-[47em] h-[27rem] object-cover relative"
        />
      </div>
      <div className="container relative mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-inter">12 MOTIVOS PARA ESCOLHER A
          <div className='flex flex-col justify-center items-center font-inter gap-2'>
            <span className="text-blue-300">SPLITWAVE</span>
            <img src={traco} alt="traco azul" className='w-[199px]' />
          </div>
        </h2>
        <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-[#2568ef82] to-[#2222227d] flex items-center gap-2 sm:gap-4 h-[70px] sm:h-[85px] rounded-lg shadow-lg transform transition duration-300 hover:scale-105 ${index < positionClasses.length ? positionClasses[index] : ''}`}
            >
              <div className="lg:flex bg-gradient-to-r from-[#2492FF] to-[#0043AE] rounded-[8px] p-2 items-center justify-center ml-[-1rem] shadow">
                <FaPlus className="text-white" />
              </div>
              <span className="text-sm sm:text-lg ml-2 font-semibold p-1">{reason}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center absolute left-1/4 ">
          <button className="w-full sm:w-[365px] h-[70px] text-white py-4 px-8 mt-[-5rem] z-20 rounded-lg text-lg md:text-[26px] font-bold hover:bg-blue-700 transition duration-300 bg-gradient-to-r from-[#3DA1DD] to-[#6AC7F9]">
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
