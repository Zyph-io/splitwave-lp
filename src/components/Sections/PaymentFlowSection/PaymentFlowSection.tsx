import React from 'react';
import fluxo from "../../../assets/fluxo.svg";
const PaymentFlowSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white pb-[229px]  max-md:pb-20">
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <h2 className="text-[38px] font-bold  font-inter">FLUXO DE SPLIT DE PAGAMENTOS FACILITADO</h2>
        <p className="text-base max-w-[55rem] font-light font-poppins text-[#3DA1DD] max-md:px-2">
          Comissione todas as recebedores envolvidos em um único fluxo financeiro.
           Adicione isso à nossa conciliação, antecipação de recebíveis e controle tudo através de uma só plataforma.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative max-w-full p-8  max-md:p-3">
          <img
            src={fluxo}
            alt="Fluxo de Split de Pagamentos"
            className="shadow-md max-w-full rounded-[64px] max-md:rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentFlowSection;
