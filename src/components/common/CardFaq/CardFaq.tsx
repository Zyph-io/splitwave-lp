interface Props{
    title: string;
    text: string;
}

export default function CardFaq( {title, text}:Props ){
    return(
        <>
        <div className="absolute top-40 left-40 ml-36 mt-20 bg-[#3F3F3F6B] max-w-[676px] pt-[52px] pr-[74px] 
                        pb-[45px] pl-[61px] rounded-[20px] max-md:left-0 max-md:top-[-4rem] max-md:z-30 max-md:pr-0 max-md:ml-2 max-md:w-5/6 max-md:pl-2 ">
            <h3 className="font-ubuntu font-bold text-[35px] text-white max-md:text-[30px]">{title}</h3>
            <p className="font-ubuntu font-normal text-[22px] text-white max-md:text-[17px]">{text}</p>
        </div>
        </>
    )
}