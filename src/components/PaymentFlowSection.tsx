import React from 'react';

const PaymentFlowSection: React.FC = () => {
  return (
    <section className=" text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">FLUXO DE SPLIT DE PAGAMENTOS FACILITADO</h2>
        <p className="text-lg text-[#3DA1DD] italic">Comissione todas as recebedores envolvidos em um único fluxo financeiro. Adicione isso à nossa conciliação, antecipação de recebíveis e controle tudo através de uma só plataforma.</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-6xl p-8 rounded-md ">
          <img
            src="https://s3-alpha-sig.figma.com/img/478a/eb3f/09053f2cf90f30f3cac1c5a7261ca96c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDkYAS5PjsAGTHc1-0BZILF0PHmVP~JlCSOlPt4lr2WOe4GaXD8qnEAshpDYhhc4fdpaDPAdlXxJ5QgN5dC4WpqaajIiySMxsF7QKstg0eqCKTCiNYlVArBewqO19d1iFz~KTtmRWVX6CZeBR2mjANj-m5em9EhSwLkzLOGuPG26Ae8E8ojFzY8xaox25P0s-r7UMLnDwmdTyUywgE3reHF9Ek~V5YSG6Y9S-x-x~uZyLDrdMX6sRrieCbTd9WGZJR8pIDKtO2Z8ApbJWaPp3DR10d5lieJs0ZOoghHCwilDoJDi8IzN~4oakbr5U6debJwgKuy3n9ZRcdU0YlD6MA__"
            alt="Fluxo de Split de Pagamentos"
            className="rounded-[12px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentFlowSection;
