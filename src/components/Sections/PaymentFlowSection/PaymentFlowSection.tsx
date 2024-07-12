import React from 'react';
import fluxo from "../../../assets/fluxo.svg";
const PaymentFlowSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white ">
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <h2 className="text-[38px] font-bold mb-4 font-inter">FLUXO DE SPLIT DE PAGAMENTOS FACILITADO</h2>
        <p className="text-lg w-[55rem] border font-light text-[#3DA1DD]">
          Comissione todas as recebedores envolvidos em um único fluxo financeiro.
           Adicione isso à nossa conciliação, antecipação de recebíveis e controle tudo através de uma só plataforma.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-6xl p-8 ">
          <img
            src={fluxo}
            alt="Fluxo de Split de Pagamentos"
            className="shadow-md w-full rounded-[64px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentFlowSection;
