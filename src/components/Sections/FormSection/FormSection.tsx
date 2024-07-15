import React, { useEffect, useRef } from "react";

export default function FormSection() {
  const ref = useRef(null);
  useEffect(() => {

    //@ts-expect-error RDStation ira vim da biblioteca externa.
    if (window.RDStationForms && [...ref.current.children].length < 1) {
      //@ts-expect-error RDStation ira vim da biblioteca externa.
      new window.RDStationForms('leads-b125aa7c11be23b21ed9', 'null').createForm()

    }
    
  }, [])

  return (

    <>
      <div className="bg-blue-900">
        <div>
          <h2 className="text-[40px]  font-normal font-ubuntu text-white  text-center">
            Pagamentos simples, inovadores e totalmente <br />personalizados à sua marca
          </h2>
        </div>
        <div>
          <div>
           
            <div role="main" id="leads-b125aa7c11be23b21ed9" ref={ref}></div>
          </div>

        </div>
      </div>



    </>
  )
}