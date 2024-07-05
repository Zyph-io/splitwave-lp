import React from 'react';

const TimeSection: React.FC = () => {
  return (
    <section className="relative py-16 px-8 flex w-full">
      <img
        src="https://i.postimg.cc/JhwxxBXk/Chess-layer.png"
        alt="Chess Background"
        className="absolute inset-0 w-full h-full object-contain ml-80"
      />
      <div className="relative max-w-7xl mx-auto flex items-center justify-center h-full">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white max-w-lg">
          <h2 className="text-4xl font-bold mb-4">CHEGA DE PERDER TEMPO!</h2>
          <p className="text-lg mb-6">
            Transforme seu negócio com a solução avançada de gateway de pagamentos da SPLITWAVE e jogue o jogo que os maiores players do mercado estão jogando, com uma solução própria, avançada e que garanta sua escalabilidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;
