import React from "react";

import Elipse from "../../common/Elipse/Elipse";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function TrustedBySection() {

  const data = [
    { id: '1', imagem: "https://via.placeholder.com/200x200" },
    { id: '2', imagem: "https://via.placeholder.com/200x200" },
    { id: '3', imagem: "https://via.placeholder.com/200x200" },
    { id: '4', imagem: "https://via.placeholder.com/200x200" },
    { id: '6', imagem: "https://via.placeholder.com/200x200" },
    { id: '7', imagem: "https://via.placeholder.com/200x200" },
    { id: '8', imagem: "https://via.placeholder.com/200x200" },
    { id: '9', imagem: "https://via.placeholder.com/200x200" },
    { id: '10', imagem: "https://via.placeholder.com/200x200" },
    { id: '11', imagem: "https://via.placeholder.com/200x200" },
    { id: '12', imagem: "https://via.placeholder.com/200x200" },
    { id: '13', imagem: "https://via.placeholder.com/200x200" }
  ]

  return (
    <>
      <section className="relative bg-blue-900 text-white py-16 px-8">
      <Elipse width="607px" heigth="661px" color="#4EDFFC"  />
        <div className="relative max-w-7xl mx-auto text-center">
        
          <h2 className="text-[34px] font-inter font-bold mb-2"> QUEM CONFIU NA SPLITWAVE </h2>
          <p className="font-inter font-normal text-lg mb-[42px]">Essas grandes empresas confiam na
             <span className='font-bold'>SPLITWAVE</span>
              devido ao nosso método desenvolvido exclusivamente para performance online.
          </p>
          
        </div>
        <div className="mx-60 flex justify-center items-center">
          <Swiper pagination={true} autoplay={{ delay: 5000 }} slidesPerView={6} className=" swiper-slide ">
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.imagem} alt="Parceiros da SplitWare" className="rounded-[20px] mb-16" />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>

      </section>
    </>
  );
}



