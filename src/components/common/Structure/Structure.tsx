import seguranca from "../../../assets/Seguranca.svg"
import integracao from "../../../assets/integracao.svg"
import suporte from "../../../assets/Suporte.svg"
export default function Struture(){
    return(
        <>
          <div className="w-fit bg-white  flex justify-center items-center gap-11 py-9  px-9  rounded-[20px] ml-[-5px] mt-10 max-md:gap-4  max-md:w-full border max-md:px-3">
             <div className="flex justify-center items-center max-w-28 max-h-12 ">
                <div className="bg-[#1A3C75] p-3 rounded-3xl mr-2 max-md:p-1 max-md:w-9 ">
                    <img src={seguranca} alt="Mais Segurança" className="max-md:w-20" />
                </div>
                <div>
                    <p className="text-[#0D0D0D] text-[11px] font-bold font-inter"> <span className="text-[#737373]">Mais</span> <br />Segurança</p>
                </div>
             </div>
             <div className="flex justify-center items-center max-w-28 max-h-12">
                <div className="flex bg-[#1A3C75] px-2 py-[14px]  rounded-3xl mr-2 max-md:p-1 max-md:w-9 max-md:h-9">
                    <img src={integracao} alt="Mais Segurança"  />
                </div>
                <div>
                    <p className="text-[#0D0D0D] text-[11px] font-bold font-inter"> <span className="text-[#737373]">Mais</span> <br />Integração</p>
                </div>
             </div>
             <div className="flex justify-center items-center max-w-28 max-h-12">
                <div className="flex bg-[#1A3C75] p-3 rounded-3xl mr-2 max-md:p-1 max-md:w-9 max-md:h-9 ">
                    <img src={suporte} alt="Mais Segurança" />
                </div>
                <div>
                    <p className="text-[#0D0D0D] text-[11px] font-bold font-inter"> <span className="text-[#737373]">Mais</span> <br />Suporte</p>
                </div>
             </div>
          </div> 

        
        </>
    )
}