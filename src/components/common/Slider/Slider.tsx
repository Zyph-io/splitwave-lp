import React from 'react';
import {register} from 'swiper/element/bundle';
import {Swiper, SwiperSlide} from 'swiper/react'
import CardComent from '../CardComent/CardComent';



register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Slider() {
    
    return (
        <>
            <Swiper pagination={true} autoplay={{ delay: 5000 }} slidesPerView={2} className=" absolute top-40 w-[60%] border ">
                <SwiperSlide> <CardComent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris. Maecenas imperdiet sapien dolor, ut semper sem dapibus vel.' /> </SwiperSlide>
                <SwiperSlide> <CardComent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris. Maecenas imperdiet sapien dolor, ut semper sem dapibus vel.' /> </SwiperSlide>
                <SwiperSlide> <CardComent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris. Maecenas imperdiet sapien dolor, ut semper sem dapibus vel.' /> </SwiperSlide>
                <SwiperSlide> <CardComent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris. Maecenas imperdiet sapien dolor, ut semper sem dapibus vel.' /> </SwiperSlide>

            </Swiper>

        </>
    )
}
