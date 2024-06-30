import React from 'react';

const FAQSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">CHEGA DE PERDER TEMPO!</h2>
          <p className="mb-8">
            Transforme seu negócio com a solução avançada de gateway de pagamentos da SPLITWAVE e jogue o jogo que os maiores players do mercado estão jogando, com uma solução própria, avançada e que garanta sua escalabilidade!
          </p>
          <div className="bg-blue-800 p-4 rounded-lg shadow-md">
            <details className="mb-2">
              <summary className="cursor-pointer">Por que a SPLITWAVE é a melhor escolha?</summary>
              <p className="pl-4">Resposta para a pergunta 1.</p>
            </details>
            <details className="mb-2">
              <summary className="cursor-pointer">Como a SPLITWAVE pode impulsionar minhas vendas?</summary>
              <p className="pl-4">Resposta para a pergunta 2.</p>
            </details>
            <details className="mb-2">
              <summary className="cursor-pointer">Quão rápido posso esperar resultados com a SPLITWAVE?</summary>
              <p className="pl-4">Resposta para a pergunta 3.</p>
            </details>
            <details className="mb-2">
              <summary className="cursor-pointer">Como faço para iniciar com a SPLITWAVE?</summary>
              <p className="pl-4">Resposta para a pergunta 4.</p>
            </details>
            <details className="mb-2">
              <summary className="cursor-pointer">Quais serviços vocês prestam?</summary>
              <p className="pl-4">Resposta para a pergunta 5.</p>
            </details>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <img src="https://via.placeholder.com/200x200" alt="Imagem Placeholder" className="rounded-md shadow-md" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="mb-8">Ainda ficou com alguma dúvida? Chame no WhatsApp, iremos te responder, não é nenhuma assistente virtual, bot é muito menos.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Chamar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
