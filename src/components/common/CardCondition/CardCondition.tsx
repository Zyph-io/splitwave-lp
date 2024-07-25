interface Props{
    subtitulo: string;
    texto: string;
    imgUrl: string;
}

export default function CardCondition( {subtitulo, texto, imgUrl}:Props ){
    return(
        <>
            <div className=" min-w-[300px] min-h-[240px] md:w-[366px] md:h-[307px] flex flex-col justify-center items-center gap-5 mx-5 p-14 bg-[#0D0D0D8C] rounded-3xl max-md:px-[80px] max-md:py-4 max-md:gap-3 ">
                {/* <svg className="h-[88px]">
                    <mask id="svgmask3">
                        <rect width="88px" height="88px" fill="#3DA1DD" />
                    </mask>
                    <image xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={imgUrl} mask="url(#svgmask3)"></image>
                </svg> */}
                <img src={imgUrl} alt="" className="md:w-[88px] md:h-[88px] max-md:w-[44px]" />
                <h3 className="text-[#3DA1DD] font-inter font-bold text-[22px] text-center max-md:text-[14px] max-md:w-full">{subtitulo}</h3>
                <p className="text-center text-white font-normal text-base font-inter max-md:text-[12px] max-md:w-[150%] ">{texto}</p>
            </div>
        </>
    )
}