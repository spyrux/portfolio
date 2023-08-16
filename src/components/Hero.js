import React from "react";
import HeroImg from "../assets/hero-img.png";
import Typical from "react-typical";

import {
  PiGitlabLogoSimpleThin,
  PiLinkedinLogoThin,
} from "react-icons/pi";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-48">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1>
            <p className="text-4xl lg:text-6xl font-mono">Hello!</p>
            <br></br>
            <Typical className="text-3xl lg:text-5xl font-source whitespace-pre-line" steps={[ 
              "I'm William, \n  a Software Engineer", 1500]}
            loop ={1}
            wrapper = "p"
            />
           
            
          </h1>


          <div className="flex py-10 ">
            <a
              href="https://github.com/spyrux"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <PiGitlabLogoSimpleThin size={40} />{" "}
            </a>

            <a
              href="https://www.linkedin.com/in/wcuidev"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <PiLinkedinLogoThin size={40} />{" "}
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/14fy3n1xpNgaa4vOPWecCIrmsuTeQ4181/view?usp=sharing"
            className=" btn bg-accent border-2 rounded border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            View Resume
          </a>
        </div>

        <div className="hero-img py-10 md: py-0">
          <img
            src={HeroImg}
            alt="coding illustration"
            className=" w-20 md: w-3/4 m-auto rounded-xl shadow-xl shadow-[#7477FF]/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;