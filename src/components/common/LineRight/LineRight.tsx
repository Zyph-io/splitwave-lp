import React from "react";

export default function LineRight() {
    return (
        <>
            <div className=" relative mt-56">
                <div className="absolute border-t-[1px]  w-[75%] right-0 ">
                    <div className=" mt-[-12px] ml-[-9px]  flex z-10 items-center justify-center w-6 h-6 border-2 border-blue-500 rounded-full">
                        <div className="absolute w-2 h-2 z-50   bg-[#3DA1DD] rounded-full"></div>
                        <div className="absolute w-[198px] mt-[3rem] ml-[11rem]">
                            <h4 className="font-inter text-white text-lg font-normal mt-24">
                            Integração com múltiplas plataformas de e-commerce
                            </h4>
                        </div>
                    </div>
                    <div className=" absolute mt-[-1.5rem] right-[65.6%] flex z-10 items-center justify-center w-6 h-6 border-2 border-blue-500 rounded-full">
                        <div className="absolute w-2 h-2 z-50   bg-[#3DA1DD] rounded-full"></div>
                        <div className="absolute w-[198px] mt-[3rem] ml-[11rem]">
                            <h4 className="font-inter text-white text-lg font-normal mt-24">
                            Relatórios <br /> detalhados
                            </h4>
                        </div>
                    </div>
                    <div className=" absolute mt-[-1.5rem] right-[32.5%] flex z-10 items-center justify-center w-6 h-6 border-2 border-blue-500 rounded-full">
                        <div className="absolute w-2 h-2 z-50   bg-[#3DA1DD] rounded-full"></div>
                        <div className="absolute w-[198px] mt-[5rem] ml-[11rem]">
                            <h4 className="font-inter text-white text-lg font-normal mt-24">
                                Checkout <br /> Personalizado e com alta taxa de aprovacão
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
