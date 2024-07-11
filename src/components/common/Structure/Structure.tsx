import React from "react";
import seguranca from "../../../assets/segurança.png"
import integracao from "../../../assets/integracao.png"
import suporte from "../../../assets/suporte.png"
export default function Struture(){
    return(
        <>
          <div className="w-fit bg-white  flex gap-11 py-9  px-10  rounded-[20px] ml-[-3px] mt-10 ">
              <img src={seguranca} alt="Mais Segurança" className="w-24" />
              <img src={integracao} alt="Mais Integração" className="w-24" />
              <img src={suporte} alt="Mais Suporte" className="w-24" />
          </div> 
        
        </>
    )
}