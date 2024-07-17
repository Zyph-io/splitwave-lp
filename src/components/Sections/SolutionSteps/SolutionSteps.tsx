import LineLeft from '../../common/LineLeft/LineLeft';
import LineRight from '../../common/LineRight/LineRight';
import traco from "../../../assets/traco.png"


const SolutionSteps = () => {
  return (
    <section className="bg-blue-900 pt-28 pb-56 relative ">
      <div className="container mx-auto px-4 text-center  text-white relative ">
        <div className='flex justify-center gap-1 max-md:flex-col '>
          <div className=''>
            <h2 className="font-inter font-bold text-[38px] max-md:text-[28px] ">O QUE A</h2>
          </div>
          <div className='max-md:flex max-md:flex-col max-md:items-center'>
            <h2 className="font-inter text-[38px] font-bold  max-md:text-[28px]"><span className="text-blue-300">SPLITWAVE</span></h2>
            <img src={traco} alt="splitware" className='relative ml-[1.5rem] max-md:w-40' />
          </div>
          <div>
            <h2 className="font-inter text-[38px] font-bold max-md:text-[28px]">TRAZ DE SOLUÇÃO?</h2>
          </div>
        </div>
      </div>
     <LineLeft/>
     <LineRight/>
    </section>
  );
};

export default SolutionSteps;
