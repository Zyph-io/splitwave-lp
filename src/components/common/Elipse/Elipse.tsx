import React from "react";

interface Props{
  color: string;
  width: string;
  heigth: string;
  position: string;
  right: string;
  top: string;

}

export default function Elipse({color, width, heigth, }:Props ){

    
    return(
        <>
          <div 
             style={ {width: width, height: heigth, background: color, position: "absolute", right:"15px", top:"-500px"}  }
             className="opacity-20 rounded-full blur-3xl"
            ></div>
        </>
    )
}