import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-10 py-5 bg-primary text-white w-full fixed z-10">
      <a href="/" className=" opacity-0 md:opacity-100 logo text-2xl font-bold text-accent z-50">
        WC
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-10 font-mono text-xl px-6">
          <li>
            <a href ="/#about" >About</a>
          </li>
          <li>
            <a href ="/#experience">Experience</a>
          </li>
          <li>
            <a href = "/#projects" >Projects</a>
          </li>

          <li>
            <a href="https://drive.google.com/file/d/14fy3n1xpNgaa4vOPWecCIrmsuTeQ4181/view?usp=sharing" target="_blank" >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={toggle ? ' block mobile-nav left-0 bg-primary' : 'mobile-nav left-[100%]'}>
        
        <ul className="flex flex-col font-mono text-3xl py-10 m-12 space-y-2">
            
            <a href ="/#about" >About</a>
          
          
            <a href ="/#experience">Experience</a>
          
          
            <a href = "/#projects" >Projects</a>
         
          
            <a href="https://drive.google.com/file/d/14fy3n1xpNgaa4vOPWecCIrmsuTeQ4181/view?usp=sharing" target="_blank" >
              Resume
            </a>
          
        </ul>
        
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden z-50">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;