interface Props{
    subtitulo: string;
    texto: string;
    imgUrl: string;
}

export default function CardCondition( {subtitulo, texto, imgUrl}:Props ){
    return(
        <>
          <div className="w-[366px] h-[307px] flex flex-col justify-center items-center gap-5 mx-5 p-14 bg-[#0D0D0D8C] rounded-3xl">
              <img src={imgUrl} alt="" className="w-[88px] h-[88px]" />
              <h3 className="text-[#3DA1DD] font-inter font-bold text-[22px] text-center">{subtitulo}</h3>
              <p className="text-center text-white font-normal text-base font-inter ">{texto}</p>
            </div>
        
        </>
    )
}