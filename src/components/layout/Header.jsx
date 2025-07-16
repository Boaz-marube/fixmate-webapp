import React from "react";
import Logo from '../../assets/fixmate-logo.svg'
import Navbar from "../common/NavBar";

const Header = () => {
  return (
    <header className="p-4 bg-basecolor text-white flex justify-between items-center font-poppins h-[80px]">
      <img src={Logo} alt="Toto Logo" className="w-[65px] h-[65px] " />

    <Navbar />
    </header>
  );
};

export default Header;
