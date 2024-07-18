import React from 'react';
import fluxo from "../../../assets/fluxo.svg";
const PaymentFlowSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-blue-900 text-white pb-[229px]  max-md:pb-20 max-md:block">
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <h2 className="text-[38px] font-bold  font-inter">FLUXO DE SPLIT DE PAGAMENTOS FACILITADO</h2>
        <p className="text-base max-w-[55rem] font-light font-poppins text-[#3DA1DD] max-md:px-2">
          Comissione todas as recebedores envolvidos em um único fluxo financeiro.
           Adicione isso à nossa conciliação, antecipação de recebíveis e controle tudo através de uma só plataforma.
        </p>
      </div>
      <div className="flex justify-center items-center overflow-x-auto max-md:block">
        <div className="animate-slide-slow flex justify-center items-center p-2 max-md:block max-md:w-[1000px]">
          <img
            src={fluxo}
            alt="Fluxo de Split de Pagamentos"
            className="shadow-md rounded-[64px] max-md:shadow-none max-md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentFlowSection;
