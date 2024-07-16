import React from "react";
import logo from "../../../assets/logo.png";

export default function Logo(){
    return(
        <>
         <div className="flex items-center justify-center">
          <img src={logo} alt="Splitwave Logo" className="w-56 h-20 object-contain  " />
        </div>
        
        </>
    )
}