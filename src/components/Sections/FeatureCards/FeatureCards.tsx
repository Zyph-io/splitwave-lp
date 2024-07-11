import React from 'react';
import CardCondition from '../../common/CardCondition/CardCondition';
import checkout from "../../../assets/checkout.svg";
import taxa from "../../../assets/taxa.svg"
import split from "../../../assets/split.svg";

const FeatureCards = () => {
  return (
    <section className="bg-blue-900 flex justify-center items-center py-20">
      <CardCondition  
        subtitulo='CHECKOUT PERSONALIZADO' 
        texto='Proporcione uma experiência de compra exclusiva e adaptada aos valores e visual da empresa do seu cliente.' 
        imgUrl={checkout}
       />
      <CardCondition  
        subtitulo='+98% TAXA DE APROVAÇÃO' 
        texto='Acima de 98% de aprovação no checkout. Garantimos transações rápidas e seguras.' 
        imgUrl={taxa}
       />
      <CardCondition  
        subtitulo='SPLIT DE PAGAMENTOS AUTOMÁTICO' 
        texto='Comissione todos os recebedores envolvidos em um fluxo financeiro' 
        imgUrl={split}
       />
    </section>
  );
};

export default FeatureCards;
