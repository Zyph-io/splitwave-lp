import { FaPlus } from 'react-icons/fa';

export default function ButtomReasons(){
    const reasons = [
        "Suporte 24 horas",
        "Saque rápido",
        "Upsell e Order Bumper no Checkout",
        "Integração no code",
        "Múltiplos meios de pagamento",
        "Segurança Avançada",
        "Reports Detalhados",
        "Integre com múltiplas plataformas",
        "Segurança Avançada"
      ];
      
      const positionClasses = [
        'mt-0 ml-0',
        'mt-0 ml-0',
        'mt-0 ml-0',
        'mt-0 ml-[40px]',
        'mt-0 ml-[40px]',
        'mt-0 ml-[40px]',
        'mt-0 ml-[0px]',
        'mt-0 ml-0',
        'mt-0 ml-0',
        
      ];
    
    return(
        <>
         <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-12 mt-28 px-20 max-md:flex max-md:flex-wrap max-md:justify-around max-md:items-center max-md:gap-3 max-md:px-[6px] max-md:mt-2   ">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={` w-[367px] h-[84px] rounded-[20px] bg-buttom-servide font-ubuntu cursor-pointer
                          flex items-center shadow-lg transform transition duration-300 hover:scale-105 max-md:w-[165px] max-md:h-[54px] max-md:ml-2 max-md:mx-0 max-md:mt-5 
                           ${index < positionClasses.length ? positionClasses[index] : ''}`
                        }
            >
              {/* icone  */}
              <div className="lg:flex bg-buttom-servide-plus rounded-[8px] p-2 items-center justify-center ml-[-1rem] shadow max-md:p-[5px] max-md:ml-[-0.6rem] ">
                <FaPlus className="text-white " />
              </div>
              <span className=" sm:text-lg ml-2 font-medium pl-[22px] max-md:ml-0 max-md:text-[12px] max-md:pl-[6px] ">{reason}</span>
            </div>
          ))}
        </div>
        
        
        
        
        
        </>
    )
}