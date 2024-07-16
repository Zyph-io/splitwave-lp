// src/components/Header.tsx
import React, { useState } from "react";
import Nav from "../common/Nav/Nav";
import Logo from "../common/Logo/Logo";
import ButtomMenuMobile from "../common/ButtomMenuMobile/ButtomMenuMobile";


function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" flex justify-center items-center   bg-blue-900 ">
      <div className=" lg:w-[66%]  gap-8 flex justify-between  items-center pt-4 ">
        <Logo />
        <ButtomMenuMobile onClick={toggleMenu} />
        <Nav isOpen={isOpen} />
      </div>
    </header>
  );
}

export default Header;
