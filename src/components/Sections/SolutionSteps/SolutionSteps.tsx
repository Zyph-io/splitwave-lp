import React from 'react';

const steps = [
  {
    title: "INTEGRAÇÃO NO CODE",
    description: ""
  },
  {
    title: "Suporte técnico 24 horas, 7 dias por semana",
    description: ""
  },
  {
    title: "Múltiplos métodos de pagamento à sua disposição",
    description: ""
  },
  {
    title: "Integração com múltiplas plataformas de e-commerce",
    description: ""
  },
  {
    title: "Relatórios detalhados",
    description: ""
  },
  {
    title: "Checkout Personalizado e com alta taxa de aprovação",
    description: ""
  }
];

const SolutionSteps = () => {
  return (
    <section className="bg-blue-900 py-20 relative ">
      <div className="container mx-auto px-4 text-center text-white relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">O QUE A <span className="text-blue-300">SPLITWAVE</span> TRAZ DE SOLUÇÃO?</h2>
        <div className="relative hidden md:block">
          {/* Linha horizontal superior */}
          <div className="absolute left-0 right-0 top-[20%] transform-translate-y-1/2 z-0">
            <div className="w-full h-0.5 bg-white opacity-50"></div>
          </div>
          {/* Linha horizontal inferior */}
          <div className="absolute left-0 right-0 top-[80%] transform-translate-y-1/2 z-0">
            <div className="w-full h-0.5 bg-white opacity-50"></div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-24 gap-x-8 md:gap-x-12 mt-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center z-10">
                {/* Bolinha */}
                <div className="absolute top-1/2 transform-translate-y-1/2 left-1/2 transform-translate-x-1/2 z-10">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center border-2 border-blue-300">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 mt-36 p-2">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-6 sm:grid-rows-3 sm:grid-flow-col md:hidden">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center bg-blue-800 p-4 rounded-lg shadow-md relative">
              {/* Bolinha */}
              <div className="absolute top-0 transform-translate-y-[-50%] left-1/2 transform-translate-x-1/2 z-10">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center border-2 border-blue-300">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 mt-12">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSteps;
