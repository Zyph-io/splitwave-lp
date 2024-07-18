import React from "react";
import { GoArrowUp } from "react-icons/go";
export default function ButtomAnchor(){

  function Scroll(){
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }


    return(
        <>
        <div className=" fixed right-4 bottom-6 z-50 animate-bounce">
              <button onClick={Scroll} className=" max-w-10 text-2xl right-1 bg-buttom-color bg-white rounded-xl p-2  "> <GoArrowUp/> </button>
          </div>      
          
        </>
    )
}