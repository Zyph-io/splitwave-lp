import commentarioDireito from "../../../assets/comentarioDireito.svg"
import commentarioEsquerdo from "../../../assets/comentarioEsquerdo.svg"

export default function BackgroundComent(){
    return(
        <>
        <div className=" flex justify-between ">
            <img src={commentarioEsquerdo} alt="cards de comentarios" className=" " />
            <img src={commentarioDireito} alt="cards de comentarios" className=" " />
        </div>
        
        </>
    )
}