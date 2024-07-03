import React from 'react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Por que a SPLITWAVE é a melhor escolha?",
      answer: "A SPLITWAVE é a melhor escolha porque oferece uma solução avançada de gateway de pagamentos que garante escalabilidade e segurança para o seu negócio.",
    },
    {
      question: "Como a SPLITWAVE pode impulsionar minhas vendas?",
      answer: "A SPLITWAVE pode impulsionar suas vendas oferecendo uma infraestrutura robusta e segura, além de suporte contínuo para otimizar suas transações.",
    },
    {
      question: "Quão rápido posso esperar resultados com a SPLITWAVE?",
      answer: "Os resultados com a SPLITWAVE podem ser vistos rapidamente, dependendo da integração e do volume de transações do seu negócio.",
    },
    {
      question: "Como faço para iniciar com a SPLITWAVE?",
      answer: "Para iniciar com a SPLITWAVE, basta entrar em contato conosco através do WhatsApp ou pelo nosso formulário de contato. Nossa equipe estará pronta para te ajudar.",
    },
    {
      question: "Quais serviços vocês prestam?",
      answer: "Prestamos serviços de gateway de pagamento, suporte técnico, consultoria de segurança e integração personalizada para atender às necessidades do seu negócio.",
    },
  ];

  return (
    <section className="text-white py-16 px-8 bg-gradient-to-r from-blue-900 to-[#002980]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-gray-800 bg-opacity-75 p-4 mb-4 rounded-lg shadow-md"
            >
              <summary className="cursor-pointer text-lg font-medium flex items-center">
                <svg
                  className="h-6 w-6 text-blue-400 mr-4 transform transition-transform duration-300 ease-in-out rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10l5-5 5 5H5z"
                    clipRule="evenodd"
                  />
                </svg>
                {faq.question}
              </summary>
              <p className="mt-2 pl-10">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="mb-8">
            Ainda ficou com alguma dúvida? Chame no WhatsApp, iremos te responder, não é nenhuma assistente virtual, bot e muito menos estagiário.
          </p>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[5px] w-[406px] h-[76px]">
            Chamar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
