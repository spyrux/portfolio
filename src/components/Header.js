import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-5 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        WC
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-10 font-mono text-xl px-6">
          <li>
            <a >About</a>
          </li>
          <li>
            <a >Projects</a>
          </li>
          <li>
            <a >Blog</a>
          </li>
          <li>
            <a >Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/14fy3n1xpNgaa4vOPWecCIrmsuTeQ4181/view?usp=sharing" target="_blank" >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={toggle ? ' block mobile-nav left-0' : 'mobile-nav left-[100%]'}>
        
        <ul className="flex flex-col font-mono text-3xl py-10 m-12 space-y-2">
            
            <a href="/">About</a>
          
          
            <a href="/">Projects</a>
          
          
            <a href="/">Blog</a>
         
          
            <a href="/">Contact</a>
          
          
            <a href="/">Resume</a>
          
        </ul>
        
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;