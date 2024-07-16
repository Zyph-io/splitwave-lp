import React from "react";
import ButtomLinear from "../common/ButtomLinear/ButtomLinear";

interface Props{
    isOpen: boolean;
}

export default function Nav({isOpen}:Props){
    return(
        <>
        <nav
        className={`${
          isOpen ? "block" : "hidden"
        }  text-white font-ubuntu font-bold text-base lg:gap-[49px]  md:flex md:items-center md:justify-center    bg-blue-900 `}
      >
            <a
              href="#"
              className="hover:text-gray-300 text-xs  "
            >
              Home
            </a>
            <a href="#" className="hover:text-gray-300 text-xs ">
              Sobre nós
            </a>
            <a href="#" className="hover:text-gray-300 text-xs">
              Serviços
            </a>
            <a href="#" className="hover:text-gray-300 text-xs">
              Clientes
            </a>
            <a href="#" className="hover:text-gray-300 text-xs ">
              FAQ
            </a>
            <ButtomLinear text="Começar Agora!" />
          </nav>
        
        
        </>
    )
}