import Profile from "../../../assets/Profile.svg";
import stars from "../../../assets/stars.svg";
import verification from "../../../assets/verication.svg"
interface Props{
    text: string;
}

export default function CardComent({text}:Props) {
    return(
        <>
          <div className=" flex flex-col justify-center items-center p-10 mx-auto rounded-xl  bg-[#222222] w-[530px] ">
             <div className="">
              <img src={Profile} alt="Usuário" className="w-[59px] h-[63px]" />
              <div className="flex my-3">
                <img src={stars} alt="" className="w-[101px] h-[18px] mr-1"/>
                <img src={verification} alt="" className="w-[14px] h-[15px]" />
              </div>
             <p className="font-inter font-bold text-base">{text}</p>
             </div>
          </div>        
        </>
    )
}