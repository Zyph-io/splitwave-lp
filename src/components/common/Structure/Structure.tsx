import React from "react";
import seguranca from "../../../assets/Seguranca.svg"
import integracao from "../../../assets/integracao.svg"
import suporte from "../../../assets/Suporte.svg"
export default function Struture(){
    return(
        <>
          <div className="w-fit bg-white  flex justify-center items-center gap-11 py-9  px-9  rounded-[20px] ml-[-5px] mt-10 ">
             <div className="flex justify-center items-center w-28 h-12">
                <div className="bg-[#1A3C75] p-3 rounded-3xl mr-2">
                    <img src={seguranca} alt="Mais Segurança" />
                </div>
                <div>
                    <p className="text-[#0D0D0D] text-[11px] font-bold font-inter"> <span className="text-[#737373]">Mais</span> <br />Segurança</p>
                </div>
             </div>
             <div className="flex justify-center items-center w-28 h-12">
                <div className="bg-[#1A3C75] px-2 py-[14px]   rounded-3xl mr-2">
                    <img src={integracao} alt="Mais Segurança" />
                </div>
                <div>
                    <p className="text-[#0D0D0D] text-[11px] font-bold font-inter"> <span className="text-[#737373]">Mais</span> <br />Integração</p>
                </div>
             </div>
             <div className="flex justify-center items-center w-28 h-12">
                <div className="bg-[#1A3C75] p-3 rounded-3xl mr-2">
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