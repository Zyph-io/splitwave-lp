import React from 'react';
import LineLeft from '../../common/LineLeft/LineLeft';
import LineRight from '../../common/LineRight/LineRight';
import traco from "../../../assets/traco.png"


const SolutionSteps = () => {
  return (
    <section className="bg-blue-900 pt-28 pb-56 relative ">
      <div className="container mx-auto px-4 text-center  text-white relative">
        <div className='flex justify-center gap-1'>
          <div className=''>
            <h2 className="font-inter font-bold text-[38px] ">O QUE A</h2>
          </div>
          <div >
            <h2 className="font-inter text-[38px] font-bold  "><span className="text-blue-300">SPLITWAVE</span></h2>
            <img src={traco} alt="splitware" className='relative ml-[1.5rem]' />
          </div>
          <div>
            <h2 className="font-inter text-[38px] font-bold ">TRAZ DE SOLUÇÃO?</h2>
          </div>
        </div>
      </div>
     <LineLeft/>
     <LineRight/>
    </section>
  );
};

export default SolutionSteps;
