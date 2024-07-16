interface Props{
    title: string;
    text: string;
}

export default function CardFaq( {title, text}:Props ){
    return(
        <>
        <div className="absolute top-40 left-40 ml-36 mt-20 bg-[#3F3F3F6B] w-[676px] pt-[52px] pr-[74px] pb-[45px] pl-[61px] rounded-[20px]">
            <h3 className="font-ubuntu font-bold text-[35px] text-white">{title}</h3>
            <p className="font-ubuntu font-normal text-[22px] text-white">{text}</p>
        </div>
        </>
    )
}