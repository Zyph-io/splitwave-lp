import { useEffect, useRef } from "react";

export default function FormSection() {
  const ref = useRef(null);
  useEffect(() => {

    //@ts-expect-error RDStation ira vim da biblioteca externa.
    if (window.RDStationForms && [...ref.current.children].length < 1) {
      //@ts-expect-error RDStation ira vim da biblioteca externa.
      new window.RDStationForms('leads-b125aa7c11be23b21ed9', 'null').createForm()
    }

    console.log('rendered')
  }, [])

  return (
    <>
      <div className="bg-blue-900">
        <div>
          <h2 className="flex flex-col justify-center items-center text-[40px] font-normal font-ubuntu text-white  text-center max-md:text-[30px]">
            Pagamentos simples, inovadores e totalmente <br />personalizados à sua marca
          </h2>
        </div>
        <div className=" flex flex-col justify-center items-center max-w-[700px] mx-auto" role="main" id="leads-b125aa7c11be23b21ed9" ref={ref}></div>
      </div>
    </>
  )
}