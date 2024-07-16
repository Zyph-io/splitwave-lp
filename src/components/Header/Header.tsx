// src/components/Header.tsx
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Logo from "../common/Logo/Logo";
import ButtomMenuMobile from "../common/ButtomMenuMobile/ButtomMenuMobile";


function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" flex justify-center items-center   bg-blue-900 ">
      <div className="   lg:w-[65%] flex justify-between  items-center pt-4">
        <Logo />
        <ButtomMenuMobile onClick={toggleMenu} />
        <Nav isOpen={isOpen} />
      </div>
    </header>
  );
}

export default Header;
