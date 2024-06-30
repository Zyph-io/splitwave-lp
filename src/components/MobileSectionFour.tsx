import React from 'react';

const MobileSectionFour: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 flex flex-col items-center">
      <div className="mb-8">
        <img
          src="https://s3-alpha-sig.figma.com/img/cb94/f6c5/cc7bd9d9f8a58a7f19c0e38aa91dcfd6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JU2DPfo89GSFl0iUDezWWG9~HXUQoouMlB27a2im2acBuURvhFgRSiF3nEhSdpWwETY0R7azEieqed5NcWv~RcuTv5YJ6xSclFFtwsjr08Oy5YNiBH0ebmeHqja-oKotKN-XjvO8lVP~g1-LKMx0C5nSfa0J3Oj0iJHyEM6zD9kwmkqzEzuzuenDuKYCHL1kIn4vAzHnTRsamy0w4q6AmlkPA5DZSirR6C56DdZxyWNzCEbzohxCvNhWZPvRP88vNAh4THo-GmJrLmN2gY3e9g42sPjNr~PnGsJ639gi3FRc0lgrBAfqojPA6vR3~ZHaAE6qCs2MXTB5kon3e0HGNg__"
          alt="Placeholder"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          CRESÇA RÁPIDO COM O PODER DA INTERNET.
        </h2>
        <p className="mb-4">
          Se você quer acelerar o <span className="font-bold">crescimento do seu negócio</span>, precisa atrair mais pessoas e ter uma estratégia montada e validada para <span className="font-bold">convertê-los em clientes</span>.
        </p>
        <p className="mb-4">
          Quer saber como o seu negócio pode <span className="font-bold">ganhar visibilidade</span> e aumentar o seu <span className="font-bold">poder de venda</span>? Veja o que cada ferramenta apresenta abaixo é capaz de fazer e peça uma análise com um de nossos especialistas.
        </p>
        <p className="mb-8 font-bold text-green-500">A CONNECT IQ está aqui para te ajudar!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Falar com especialista
        </button>
      </div>
    </section>
  );
};

export default MobileSectionFour;
