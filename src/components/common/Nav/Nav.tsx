import React from "react";
import ButtomLinear from "../ButtomLinear/ButtomLinear";

interface Props{
    isOpen: boolean;
}

export default function Nav({isOpen}:Props){
    return(
        <>
        <nav
        className={`${
          isOpen ? "absolute right-0 left-0  top-[75px] flex flex-col justify-end items-end border gap-4 px-8 py-3 " : "hidden"
        }  text-white font-ubuntu font-bold lg:gap-[49px]  md:flex md:items-center md:justify-center lg:mr-28   bg-blue-900 `}
      >
            <a
              href="#"
              className="hover:text-gray-300 text-base "
            >
              Home
            </a>
            <a href="#" className="hover:text-gray-300 text-base  ">
              Sobre nós
            </a>
            <a href="#" className="hover:text-gray-300 text-base ">
              Serviços
            </a>
            <a href="#" className="hover:text-gray-300 text-base ">
              Clientes
            </a>
            <a href="#" className="hover:text-gray-300 text-base ">
              FAQ
            </a>
            <ButtomLinear text="Começar Agora!" />
          </nav>
        
        
        </>
    )
}