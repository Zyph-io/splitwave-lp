import ButtomReasons from '../../common/ButtomReasons/ButtomReasons';
import dashborad from "../../../assets/dashboard.png";
import traco from "../../../assets/traco.png";


const ReasonsSection = () => {
  return (
    <section className="relative bg-blue-900  overflow-hidden pt-[50px] ">
      <div className="absolute  mt-32  flex justify-center items-center w-full">
        <img
          src={dashborad}
          alt="Mockup Background"
          className="max-w-[934px] h-[606px]"
        />
      </div>
      <div className="container relative  mx-auto px-4 text-center text-white max-md:px-0">
        <h2 className="text-[38px]  font-bold font-inter max-md:-mt-4">12 MOTIVOS PARA ESCOLHER <br /> 
          <div className='flex flex-col justify-center items-center font-inter gap-2'>
             <span className="text-blue-300"> <span className='text-white'>A</span> SPLITWAVE</span>
            <img src={traco} alt="traco azul" className='w-[199px] ml-3' />
          </div>
        </h2>
        <ButtomReasons/>
        <div className="  flex justify-center mt-[47px]">
          <button className="max-w-[407px]   text-white py-6 px-[61px] rounded-[10px] font-inter text-2xl  font-bold  bg-buttom-color max-md:text-lg ">
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
