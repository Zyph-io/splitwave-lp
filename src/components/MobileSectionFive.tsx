import React from 'react';

const features = [
  {
    icon: "https://via.placeholder.com/50", // Placeholder icon URL
    title: "POSICIONAMENTO NAS BUSCAS DO GOOGLE.",
    description: "Seja encontrado por quem realmente está buscando pelos seus produtos ou serviços."
  },
  {
    icon: "https://via.placeholder.com/50", // Placeholder icon URL
    title: "META ADS FACEBOOK & INSTAGRAM.",
    description: "Alcance potenciais clientes, promova seus posts, conquiste mais audiência."
  },
  {
    icon: "https://via.placeholder.com/50", // Placeholder icon URL
    title: "DESIGN & WEB, SOCIAL MEDIA, BRANDING.",
    description: "Sua empresa merece um visual impactante e pensado de forma estratégica."
  }
];

const MobileSectionFive: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-md mx-auto space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={feature.icon} alt={feature.title} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileSectionFive;
