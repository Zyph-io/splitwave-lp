import React from 'react';
import Logo from "../../assets/logoBranca.svg";
import LogoGhg from "../../assets/Logo Marcelo.svg";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-buttom-color text-white py-4 px-8 flex justify-around items-center max-md:flex-col">
      <div className="flex items-center">
        <a href="https://www.splitwave.com.br/" target='_blank'>
          <img src={Logo} alt="Logo Splitwave" className="mr-2 w-[134]" />
        </a>
      </div>
      <div className="text-center">
        <p>© Todos os direitos reservados</p>
      </div>
      <div className="flex items-center">
        <p className="mr-2">Desenvolvido por:</p>
        <a href="https://www.digitalgrowth.marketing/">
          <img src={LogoGhg} alt="Logo DigitalGrowth"  className=''/>
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
