import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className=" text-white py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://via.placeholder.com/50x50" alt="Logo Splitwave" className="mr-2" />
        <span className="text-lg font-bold">splitwave</span>
      </div>
      <div className="text-center">
        <p>© Todos os direitos reservados</p>
      </div>
      <div className="flex items-center">
        <p className="mr-2">Desenvolvido por:</p>
        <img src="https://via.placeholder.com/50x50" alt="Logo DigitalGrowth" />
      </div>
    </footer>
  );
};

export default FooterSection;
