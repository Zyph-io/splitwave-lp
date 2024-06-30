import React from 'react';

const faqs = [
  "Por que a ConnectIQ é a melhor escolha?",
  "Como a ConnectIQ pode impulsionar minhas vendas?",
  "Quão rápido posso esperar resultados com a ConnectIQ?",
  "Como faço para iniciar com a ConnectIQ?",
  "Quais serviços vocês prestam?"
];

const MobileFAQSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
        <p className="text-lg mb-8">Ainda ficou com alguma dúvida? Chame no WhatsApp, iremos te responder, não é nenhuma assistente virtual, bot e muito menos o estagiário.</p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full mb-8">
          Chamar no WhatsApp
        </button>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <summary className="cursor-pointer">{faq}</summary>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileFAQSection;
