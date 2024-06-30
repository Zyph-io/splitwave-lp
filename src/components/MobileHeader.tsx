import React from 'react';

const MobileHeader: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://via.placeholder.com/50" alt="Logo" className="mr-2" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full">
          Começar Agora!
        </button>
        <div className="flex flex-col space-y-1 cursor-pointer">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
