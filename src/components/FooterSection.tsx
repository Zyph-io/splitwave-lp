import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className=" text-white py-4 px-8 flex justify-between items-center bg-gradient-to-r from-#3DA1DD to-[#6AC7F9]">
      <div className="flex items-center">
        <img src="https://i.postimg.cc/9Qmy1t8K/f4a2751a42c33ff2dc833e930293a596.png" alt="Logo Splitwave" className="mr-2 w-28" />
        <span className="text-lg font-bold"></span>
      </div>
      <div className="text-center">
        <p>© Todos os direitos reservados</p>
      </div>
      <div className="flex items-center">
        <p className="mr-2">Desenvolvido por:</p>
        <img src="https://i.postimg.cc/FRDMdx6v/5df1eceb148033aebcb44c9ed2eac508.png" alt="Logo DigitalGrowth" className='w-28'/>
      </div>
    </footer>
  );
};

export default FooterSection;
