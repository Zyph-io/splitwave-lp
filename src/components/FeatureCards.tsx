import React from 'react';
import { FaShoppingCart, FaCheckCircle, FaMoneyCheckAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaShoppingCart size={40} />,
    title: "CHECKOUT PERSONALIZADO",
    description: "Proporcione uma experiência de compra exclusiva e adaptada aos valores e visual da empresa do seu cliente."
  },
  {
    icon: <FaCheckCircle size={40} />,
    title: "+98% TAXA DE APROVAÇÃO",
    description: "Acima de 98% de aprovação no checkout. Garantimos transações rápidas e seguras."
  },
  {
    icon: <FaMoneyCheckAlt size={40} />,
    title: "SPLIT DE PAGAMENTOS AUTOMÁTICO",
    description: "Comissione todos os recebedores envolvidos em um fluxo financeiro."
  }
];

const FeatureCards = () => {
  return (
    <section className="bg-blue-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#1c3664] text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                index === 2 ? 'sm:col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#293d6c] p-4 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#3DA1DD]">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
