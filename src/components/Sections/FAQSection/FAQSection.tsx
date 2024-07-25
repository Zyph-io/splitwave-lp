import CardFaq from '../../common/CardFaq/CardFaq';
import Questions from '../../common/Questions/Questions';
import imgXadrez from "../../../assets/xadrez.svg";
import LogoFaq from "../../../assets/logoFaq.svg";
import Elipse from '../../common/Elipse/Elipse';
import point from ""

export default function FAQSection() {

  const servicos = '';



  return (
    <>
      <section className=' py-24 bg-blue-900 max-md:py-0 scroll-smooth ' id='faq'>

        <div className='relative flex justify-center items-center pl-40 max-md:pl-0'>
          <div>
            <CardFaq
              title='CHEGA DE PERDER TEMPO!'
              text='Transforme seu negócio com a solução avançada de gateway de pagamentos da SPLITWAVE e jogue o jogo que os maiores
                      players do mercado estão jogando, com uma solução própria, avançada e que garanta sua escalabilidade!'
            />
          </div>
          <div className=' max-md:mt-[15rem] overflow-x-hidden '>
            <div className=' absolute w-[33%] h-[80%] mt-28 ml-80 bg-[#002980]  rounded-full opacity-80 blur-3xl max-md:mt-2 max-md:ml-16 max-md:w-[80%]'></div>
            <img src={imgXadrez} alt="" className=' ml-72 w-[808px] max-md:ml-12 max-md:w-[59rem] ' />

          </div>
        </div>

        <div className="flex -mt-52 max-md:mt-0  ">
          <div className='max-w-[1042px] mx-auto relative flex items-center justify-center gap-10 max-md:w-full max-md:flex-col'>
            <div className='ml-24 max-md:w-full max-md:ml-0 max-md:px-4'>
              <Questions question='Por que a SPLITWAVE é a melhor escolha?' response='A SplitWave transforma transações online em experiências únicas e memoráveis, refletindo a identidade de cada negócio. Oferecemos soluções inovadoras e personalizadas, sempre alinhadas às tendências do mercado, garantindo que seu negócio esteja sempre à frente.'
                                                                                       />
              <Questions question='Como a SPLITWAVE pode impulsionar minhas vendas?' response='Nossas soluções de pagamento são projetadas para proporcionar uma jornada de compra fluida e memorável, aumentando a satisfação do cliente e, consequentemente, suas vendas. Com recursos avançados como split de pagamentos, conciliação e antecipação de recebíveis, você tem controle total das suas transações.' />
              
              <Questions question='Quão rápido posso esperar resultados com a SPLITWAVE' response='A implementação rápida e eficiente da SplitWave permite que você comece a ver melhorias nas suas transações e na satisfação do cliente em pouco tempo, adaptando-se rapidamente às demandas do mercado digital.' />
             
              <Questions question='Como faço para iniciar com a SPLITWAVE' response='Iniciar com a SplitWave é simples. Basta entrar em contato conosco para uma consulta personalizada. Nossa equipe irá guiá-lo através de cada etapa, desde a integração até o uso diário da nossa plataforma.' />
              
              <Questions question='Quais serviços vocês prestam?' response='Oferecemos um gateway completo com recursos essenciais para o sucesso do seu negócio, incluindo:
&#8226; Soluções de pagamento personalizadas
&#8226; Split de pagamentos pós-transacional
&#8226; Conciliação de transações
&#8226; Antecipação de recebíveis
&#8226; Plataforma única para controle total financeiro.' />
            </div>
            <div className=' mr-40 max-md:mr-0 max-md:w-full max-md:pb-6'>
              <div className='max-md:flex max-md:flex-col max-md:items-center'>
                <img src={LogoFaq} alt="" className='max-w-[275px]  max-md:hidden' />
                <h3 className='font-saira font-medium text-white text-[48px] max-md:text-center max-md:text-[40px]'>Ainda ficou com alguma dúvida?</h3>
                <p className='font-saira font-normal text-[18px] text-white max-md:text-center'>Chame no WhatsApp, iremos te responder, não é nenhuma assistente virtual, bot e muito menos o estagiário.</p>
                <button className='bg-buttom-color font-saira font-semibold text-[24px] w-[406px] h-[76px] rounded-[8px] text-white mt-8  max-md:w-[320px] max-md:text-[20px]'>Chamar no WhatsApp</button>
              </div>
            </div>

          </div>
        </div>

      </section>

    </>
  )
}
