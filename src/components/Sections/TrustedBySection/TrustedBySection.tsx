import Elipse from "../../common/Elipse/Elipse";
import { register } from 'swiper/element/bundle';
import LogoAuraPay from "../../../assets/Parceiro Aurapay.png";
import LogoCashTime from "../../../assets/Parceiro Cashtime.png";
import LogoCentra from "../../../assets/Parceiro Centra Pay.png";
import LogoYpercash from "../../../assets/Parceiro Ypercash.png";

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


  const data = [
    { id: '1', imagem: LogoAuraPay },
    { id: '2', imagem: LogoCashTime },
    { id: '3', imagem: LogoCentra },
    { id: '4', imagem: LogoYpercash }
  ]

export default function TrustedBySection() {

  return (
    <>
      <section className=" relative flex flex-col justify-center items-center bg-blue-900 text-white py-16 px-8 max-md:px-1 max-md:w-full max-md:overflow-x-hidden scroll-smooth " id="trusted">
      <Elipse width="607px" heigth="661px" color="#4EDFFC"  />
        <div className="mx-auto text-center">
        
          <h2 className="text-[34px] font-inter font-bold mb-2"> QUEM CONFIOU NA SPLITWAVE </h2>
          <p className="font-inter font-normal text-lg mb-[42px]">Essas grandes empresas confiam na 
             <strong className="mx-1">SPLITWAVE</strong>
              devido ao nosso método desenvolvido exclusivamente para performance online.
          </p>
          
        </div>
        <div className="max-w-[1400px] mx-auto max-md:mx-0 max-md:w-[400px] max-md:items-center">
          <div className="flex flex-wrap justify-center items-center gap-10 max-md:flex-wrap max-md:gap-4">
              {data.map((item, idx : number) =>(
                <div key={idx} className="h-[190px] flex justify-center items-center   rounded-lg p-7 bg-[#002e96]">
                  <img src={item.imagem} alt="" className="max-w-60  max-md:w-24"/>
                </div>
              ) )}
              
          </div>
        </div>

      </section>
    </>
  );
}



