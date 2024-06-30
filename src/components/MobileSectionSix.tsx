import React from 'react';

const items = [
  "Buscamos o melhor cliente para o seu negócio, aquele que está buscando o que sua empresa tem a oferecer.",
  "Olhamos diariamente para suas vendas e montamos uma estratégia personalizada para elevar o seu faturamento.",
  "Mapeamos o seu negócio para torná-lo à prova de crises tornando o mesmo adaptável para qualquer momento.",
  "Com base em métricas validadas, iremos potencializar e acelerar o crescimento do seu negócio.",
  "Nós temos toda mão de obra necessária para o seu negócio, com a 'connect iq' você tem economia.",
  "Planejamento estratégico, gestão de tráfego pago, Design, Branding, RR e web."
];

const MobileSectionSix: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-8 text-center">
          O QUE A <span className="text-green-500">CONNECT IQ</span> FAZ?
        </h2>
        <ul className="space-y-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-1 bg-green-500 h-full mx-auto"></div>
              </div>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MobileSectionSix;
