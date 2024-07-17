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
            <Swiper pagination={true} autoplay={{ delay: 5000 }} slidesPerView={2} className=" absolute py-10 top-40 max-w-[60%]  max-md:max-w-[90%] max-md:mx-10 max-md:top-12 ">
                <SwiperSlide> <CardComent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris.' /> </SwiperSlide>
                <SwiperSlide> <CardComent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris.' /> </SwiperSlide>
                <SwiperSlide> <CardComent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris.' /> </SwiperSlide>
                <SwiperSlide> <CardComent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget quam mauris.' /> </SwiperSlide>

            </Swiper>

        </>
    )
}
