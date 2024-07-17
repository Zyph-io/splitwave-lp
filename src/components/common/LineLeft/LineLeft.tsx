export default function LineLeft() {
    return (
        <>
            <div className="relative w-[75%] flex justify-between items-center mt-[106px]  max-md:w-[82%]">
                
                    <div className="absolute  top-1/2 w-[100%] border-t-[1px] opacity-70 border-white  "></div>
                    <div className="flex  z-10 items-center justify-center w-6  max-h-6 ml-[29rem] border-2 border-blue-500 rounded-full max-md:ml-0 ">
                        <div className="absolute w-2 h-2 z-50  bg-[#3DA1DD] rounded-full"></div>
                        <div className="relative mt-10">
                            <h4 className="font-inter text-white text-lg font-normal mt-24 ml-[6rem] max-md:text-[13px] max-md:ml-[75px] max-md:mt-[53px] max-md:leading-[20px]">INTEGRACÃO NO CODE</h4>
                        </div>
                    </div>
                    <div className="flex z-10 items-center justify-center max-w-6 max-h-6  border-2 border-blue-500 rounded-full ">
                        <div className="absolute w-2 h-2  bg-[#3DA1DD]  rounded-full"></div>
                        <div className="relative mt-10 ml-[8rem] max-md:ml-[2rem]">
                            <h4 className="font-inter text-white text-lg font-normal mt-24 w-60 ml-[6rem] max-md:text-[13px] max-md:ml-[2rem] max-md:w-32 max-md:mt-[70px] max-md:leading-[20px]">Suporte técnico 24 horas,<br /> 7 dias por semana</h4>
                        </div>
                    </div>
                    <div className="flex z-10 items-center justify-center w-6 h-6  mr-[-8px]  border-2 border-blue-500 rounded-full">
                        <div className="absolute w-2 h-2  bg-[#3DA1DD] rounded-full"></div>
                        <div className="relative mt-10 ml-[8rem] max-md:ml-[3rem]">
                            <h4 className="font-inter text-white text-lg font-normal mt-32 w-60 ml-[6rem]  max-md:text-[13px] max-md:ml-[0rem] max-md:mt-[90px] max-md:w-24 max-md:leading-[20px] ">Múltiplos métodos de pagamento à sua disposição</h4>
                        </div>
                    </div>      
            </div>


        </>
    )
}