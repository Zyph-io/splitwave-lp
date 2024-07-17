interface Props{
    text: string;
}

export default function ButtomLinear({text}: Props) {
    return(
        <>
        <button className=" flex justify-center items-center h-12 bg-buttom-color font-ubuntu text-white font-bold py-4 px-9 rounded-lg text-base  ">
         {text}
        </button>
        
        
        </>
    )
    
    
}