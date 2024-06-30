import React from 'react';
import { FaPlus } from 'react-icons/fa';

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
    <section className="relative bg-blue-900 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-60 flex justify-center items-center w-full m-auto">
        <img
          src="https://s3-alpha-sig.figma.com/img/d38a/7e8b/2dcbe87a5b742056a07f0ae314f8ca59?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JW8lurrWJxU7W1mpl1Y176NTg10aQWUxNQw3aZat3AtEqapr~0xzDSKAPmwf2PhoUGGxZ2uoCCvEBWM0tb1MKrAbR2yvZrzn1YiR~K4Del-KlzwmB6W5syhoY~Zvbc8oLknH2haav~0Egjn3~wAurkjW5gDBmq3-hFw9leN6h4VQsUhEC6e4HleCY-gMKLE-0Lsrqz0WlC7yLgqiB29e-bBmQGArJGXCESBnftNxgRHLg4QbIOQoNQHiK2zxTX7BMwQ7NQFpa1MJgdD7v7HEEiCwDWRd-yko6YKZ3wVcf~8CoTIdl6vOFWDNwGuUdowWVaCJjqO9i4tsYWyqBwnPYA__"
          alt="Mockup Background"
          className="w-[47em] h-[27rem] object-cover"
        />
      </div>
      <div className="container relative mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">12 MOTIVOS PARA ESCOLHER A <span className="text-blue-300">SPLITWAVE</span></h2>
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
        <div className="flex justify-center">
          <button className="w-full sm:w-[365px] h-[70px] text-white py-4 px-8 rounded-lg text-lg md:text-[26px] font-bold hover:bg-blue-700 transition duration-300 bg-gradient-to-r from-[#3DA1DD] to-[#6AC7F9]">
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
