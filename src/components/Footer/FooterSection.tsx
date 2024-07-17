import React from 'react';
import Logo from "../../assets/logo.png";
import LogoGhg from "../../assets/Logo Marcelo.svg"

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 px-8 flex justify-around items-center max-md:flex-col">
      <div className="flex items-center">
        <img src={Logo} alt="Logo Splitwave" className="mr-2 w-[134]" />
      </div>
      <div className="text-center">
        <p>© Todos os direitos reservados</p>
      </div>
      <div className="flex items-center">
        <p className="mr-2">Desenvolvido por:</p>
        <img src={LogoGhg} alt="Logo DigitalGrowth" />
      </div>
    </footer>
  );
};

export default FooterSection;
