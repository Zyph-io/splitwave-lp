import Profile from "../../../assets/Profile.svg";
import stars from "../../../assets/stars.svg";
import verification from "../../../assets/verication.svg"
interface Props{
    text: string;
}

export default function CardComent({text}:Props) {
    return(
        <>
          <div className=" border max-w-[530px] bg-[#222222] flex flex-col justify-center items-center p-10 mx-auto rounded-xl  max-md:mx-2 max-md:p-5 ">
             <div className="">
              <img src={Profile} alt="Usuário" className="max-w-[59px] max-md:w-[30px]" />
              <div className="flex my-6 max-md:my-1">
                <img src={stars} alt="" className="max-w-[101px]  mr-1 max-md:w-[50px]" />
                <img src={verification} alt="" className="max-w-[14px]" />
              </div>
             <p className="font-inter font-bold text-base max-md:text-xs ">{text}</p>
             </div>
          </div>        
        </>
    )
}