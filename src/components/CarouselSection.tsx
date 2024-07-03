import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris. Maecenas imperdiet sapien dolor, ut semper sem dapibus vel.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris. Maecenas imperdiet sapien dolor, ut semper sem dapibus vel.",
    rating: 4,
    verified: true
  },
  // Adicione mais depoimentos conforme necessário
];

const CarouselSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="text-white py-16 px-8"
      style={{
        backgroundImage: "url('https://i.postimg.cc/kGzJVpwy/DEP-blur-01.png')",
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          O QUE <span className="text-blue-400">NOSSOS</span> CLIENTES ESTÃO FALANDO SOBRE NÓS.
        </h2>
      </div>
      <div className="relative flex justify-center items-center">
        <button onClick={prevSlide} className="absolute left-0 transform -translate-y-1/2 top-1/2 bg-blue-500 p-2 rounded-full">
          &#10094;
        </button>
        <div className="flex space-x-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index === current ? 'block' : 'hidden'
              } bg-gray-800 bg-opacity-75 p-6 rounded-md w-96`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">&#9733;</span>
                    ))}
                    {testimonial.verified && <span className="text-blue-400 ml-2">&#10003;</span>}
                  </div>
                </div>
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute right-0 transform -translate-y-1/2 top-1/2 bg-blue-500 p-2 rounded-full">
          &#10095;
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          QUERO CRESCER MAIS
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;
