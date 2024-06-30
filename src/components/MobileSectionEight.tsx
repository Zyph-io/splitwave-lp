import React from 'react';

const logos = [
  "https://via.placeholder.com/150?text=Farmacia+Campinas", // Placeholder logo URL
  "https://via.placeholder.com/150?text=Rede+Menor+Preco", // Placeholder logo URL
  "https://via.placeholder.com/150?text=Farmacia+Praia+Comprida", // Placeholder logo URL
  "https://via.placeholder.com/150?text=Farmacia+Agape" // Placeholder logo URL
];

const MobileSectionEight: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">
          A CONNECT IQ É RESPONSAVEL PELO <span className="text-green-500">CRESCIMENTO DE GRANDES NEGÓCIOS</span>
        </h2>
        <p className="mb-8">
          Essas grandes empresas confiam na <span className="font-bold">CONNECT IQ</span> devido ao nosso método desenvolvido exclusivamente para performance online.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={logo} alt={`Logo ${index + 1}`} className="rounded-md shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileSectionEight;
