// src/components/NichesSection.tsx
import React from 'react';
import traco from "../../../assets/traco.png";
import cassino from "../../../assets/cassino.svg"
import drop from "../../../assets/drop.svg";
import ecommerce from "../../../assets/ecommerce.svg";

const NichesSection: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-8" id='services'>
      <div className="max-w-7xl mx-auto flex justify-center items-center  text-center mb-12 max-md:flex-col">
        <h2 className="text-3xl font-bold mt-[-7px] mr-2">PRINCIPAIS NICHOS DE ATUAÇÃO DA</h2>
          <div className='flex flex-col justify-center items-center'>
             <span className="text-blue-400  text-[38px] font-bold">SPLITWAVE</span>
             <img src={traco} alt="splitware" className='w-48 ml-6' />
      </div>
        
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        {/* <div className="text-center">
          <img src={cassino} alt="Cassino" className="mb-4" />
        </div> */}
        <div className="text-center">
          <img src={ecommerce} alt="Cassino" className="mb-4" />
        </div>
        <div className="text-center">
          <img src={drop} alt="Cassino" className="mb-4" />
        </div>
       
      </div>
    </section>
  );
};

export default NichesSection;
