import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import CardComent from "../CardComent/CardComent";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const metadata = [
  {
    text: "O sistema da Splitwave está muito intuitivo. Com uma interface limpa, estamos conseguindo utilizá-lo sem grandes dificuldades. Nossos clientes também têm nos passado um feedback positivo sobre a utilização por eles. A constante atualização e o suporte eficaz também têm nos ajudado muito.",
    title: "CentraPay",
    stars: "",
    profile: "",
    verification: "",
  },
  {
    text: "O sistema da Splitwave está muito intuitivo. Com uma interface limpa, estamos conseguindo utilizá-lo sem grandes dificuldades. Nossos clientes também têm nos passado um feedback positivo sobre a utilização por eles. A constante atualização e o suporte eficaz também têm nos ajudado muito.",
    title: "CentraPay",
    stars: "",
    profile: "",
    verification: "",
  },
  {
    text: "O sistema da Splitwave está muito intuitivo. Com uma interface limpa, estamos conseguindo utilizá-lo sem grandes dificuldades. Nossos clientes também têm nos passado um feedback positivo sobre a utilização por eles. A constante atualização e o suporte eficaz também têm nos ajudado muito.",
    title: "CentraPay",
    stars: "",
    profile: "",
    verification: "",
  },
  {
    text: "O sistema da Splitwave está muito intuitivo. Com uma interface limpa, estamos conseguindo utilizá-lo sem grandes dificuldades. Nossos clientes também têm nos passado um feedback positivo sobre a utilização por eles. A constante atualização e o suporte eficaz também têm nos ajudado muito.",
    title: "CentraPay",
    stars: "",
    profile: "",
    verification: "",
  },
  {
    text: "O sistema da Splitwave está muito intuitivo. Com uma interface limpa, estamos conseguindo utilizá-lo sem grandes dificuldades. Nossos clientes também têm nos passado um feedback positivo sobre a utilização por eles. A constante atualização e o suporte eficaz também têm nos ajudado muito.",
    title: "CentraPay",
    stars: "",
    profile: "",
    verification: "",
  },
  {
    text: "O sistema da Splitwave está muito intuitivo. Com uma interface limpa, estamos conseguindo utilizá-lo sem grandes dificuldades. Nossos clientes também têm nos passado um feedback positivo sobre a utilização por eles. A constante atualização e o suporte eficaz também têm nos ajudado muito.",
    title: "CentraPay",
    stars: "",
    profile: "",
    verification: "",
  },
];

export default function Slider() {
  return (
    <>
      {/* <Swiper pagination={true} autoplay={{ delay: 5000 }} slidesPerView={2} className=" absolute py-10 top-40 max-w-[60%]  max-md:max-w-[90%] max-md:mx-10 max-md:top-12 ">
                {metadata.length && metadata.map(cardData => (
                    <SwiperSlide>
                        <CardComent data={cardData} />
                    </SwiperSlide>
                ))}
            </Swiper> */}
      <Swiper
        pagination={true}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        className=" absolute py-10 top-40 w-full max-w-[60%]  max-md:max-w-[90%] max-md:mx-10 max-md:top-12 justify-center flex "
      >
        <SwiperSlide>
          <CardComent data={metadata[0]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
