import React from 'react';

const FormSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-8 flex justify-center items-center">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Pagamentos simples, inovadores e totalmente personalizados à sua marca
        </h2>
        <form className=" p-8 rounded-md shadow-md text-gray-800 space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="WhatsApp"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Empresa"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Website"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Quero uma proposta personalizada
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
