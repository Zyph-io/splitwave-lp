import React from 'react';

const MobileSectionNine: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-2">ATENÇÃO!</h2>
          <p className="text-green-500 font-bold">Acelere seu crescimento agora com a CONNECT IQ!</p>
        </div>
        <p className="mb-8">
          Pronto para elevar seu negócio a um novo nível com a CONNECT IQ? Simplesmente clique no botão abaixo, preencha o formulário e nossa equipe de especialistas fará contato para dar início à sua transformação.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-8">
          Eleve seu Negócio Agora!
        </button>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-lg font-bold mb-2">Cancele, quando quiser!</h3>
          <p className="mb-4">
            <span className="text-green-500 font-bold">Na Connect IQ</span>, seu sucesso é nossa prioridade. Nós descartamos penalidades para garantir sua tranquilidade. Se nossos serviços de marketing <span className="font-bold">não estiverem alinhados com seus objetivos</span>, você tem total liberdade para cancelar, sem nenhum custo de rescisão, desde que cumpra o aviso prévio.
          </p>
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/100x100" alt="Placeholder" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSectionNine;
