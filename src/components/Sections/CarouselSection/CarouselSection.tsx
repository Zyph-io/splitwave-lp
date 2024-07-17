import BackgroundComent from '../../common/BackgroundComent/BackgroundComent';
import Slider from '../../common/Slider/Slider';


export default function CarouselSection() {
  return (
    <section className="relative bg-blue-900   text-white ">
      <BackgroundComent />
      <div className=' absolute top-0 w-full flex justify-center' >
        <h3 className='font-inter font-bold text-4xl max-md:text-[24px]'> <span className='text-[#3DA1DD]' > O QUE NOSSOS</span> CLIENTES <br /> ESTÃO FALANDO SOBRE NÓS.</h3>
        <Slider/>
      </div>
      <div className='flex justify-center mt-28 max-md:mt-5'>
            <button className='bg-buttom-color rounded-xl w-[417px] h-[85px] font-inter font-bold text-[26px] max-md:text-[20px] max-md:w-[317px]'> QUERO CRESCER MAIS</button>
      </div>


    </section>
  );
}
