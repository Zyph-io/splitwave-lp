import React, { useState } from 'react';

const logos = [
  "https://via.placeholder.com/150?text=Logo+1",
  "https://via.placeholder.com/150?text=Logo+2",
  "https://via.placeholder.com/150?text=Logo+3",
  "https://via.placeholder.com/150?text=Logo+4",
  "https://via.placeholder.com/150?text=Logo+5",
  "https://via.placeholder.com/150?text=Logo+6",
];

const TrustedBySection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + logos.length) % logos.length);
  };

  return (
    <section className="bg-blue-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          QUEM CONFIU NA SPLITWAVE
        </h2>
        <p className="text-lg">Essas grandes empresas confiam na SPLITWAVE devido ao nosso método desenvolvido exclusivamente para performance online.</p>
      </div>
      <div className="relative flex justify-center items-center">
        <button onClick={prevSlide} className="absolute left-0 transform -translate-y-1/2 top-1/2 bg-blue-500 p-2 rounded-full z-10">
          &#10094;
        </button>
        <div className="flex overflow-hidden w-full max-w-4xl">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 150}px)` }}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-none"
                style={{ width: "150px", height: "150px" }}
              >
                <img src={logo} alt={`Logo ${index + 1}`} className="rounded-md shadow-md" />
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="absolute right-0 transform -translate-y-1/2 top-1/2 bg-blue-500 p-2 rounded-full z-10">
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default TrustedBySection;
