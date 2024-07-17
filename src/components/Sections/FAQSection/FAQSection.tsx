import React from 'react';
import CardFaq from '../../common/CardFaq/CardFaq';
import Questions from '../../common/Questions/Questions';
import imgXadrez from "../../../assets/xadrez.svg";
import LogoFaq from "../../../assets/logoFaq.svg";
import Elipse from '../../common/Elipse/Elipse';

export default function FAQSection() {
  return (
    <>
      <section className='py-24 bg-blue-900'>
        <div className='relative flex justify-center items-center pl-40'>
          <div>
            <CardFaq
              title='CHEGA DE PERDER TEMPO!'
              text='Transforme seu negócio com a solução avançada de gateway de pagamentos da SPLITWAVE e jogue o jogo que os maiores
                      players do mercado estão jogando, com uma solução própria, avançada e que garanta sua escalabilidade!'
            />
          </div>
          <div>
            <Elipse width='808px' heigth='813px' color='#03D6FF'  />
            <img src={imgXadrez} alt="" className=' ml-72 w-[808px] ' />
            
          </div>
        </div>
        <div className="flex -mt-52 ">
        <div className='w-[1042px] mx-auto relative flex items-center justify-center gap-10'>
          <div className='ml-24'>
            <Questions  question='Por que a SPLITWAVE é a melhor escolha?' response='n' />
            <Questions  question='Como a SPLITWAVE pode impulsionar minhas vendas?' response='n' />
            <Questions  question='Quão rápido posso esperar resultados com a SPLITWAVE' response='n' />
            <Questions  question='Como faço para iniciar com a SPLITWAVE' response='n' />
            <Questions  question='Quais serviços vocês prestam?' response='n' />
          </div>
          <div className=' mr-40'>
              <div>
                  <img src={LogoFaq} alt="" className='w-[275px] ' />
                  <h3 className='font-saira font-medium text-white text-[48px]'>Ainda ficou com alguma dúvida?</h3>
                  <p className='font-saira font-normal text-[18px] text-white'>Chame no WhatsApp, iremos te responder, não é nenhuma assistente virtual, bot e muito menos o estagiário.</p>
                  <button className='bg-buttom-color font-saira font-semibold text-[24px] w-[406px] h-[76px] rounded-[8px] text-white mt-8'>Chamar no WhatsApp</button>
              </div>
          </div>
          
        </div>
        </div>
        
      </section>

    </>
  )
}
