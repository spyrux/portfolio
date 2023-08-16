import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  PiGitlabLogoSimpleThin,
  PiLinkedinLogoThin,
} from "react-icons/pi";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            <br />I'm William, <br />
            a Software Engineer
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
              href="https://www.youtube.com/@coderamrin"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <PiLinkedinLogoThin size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/CoderAmrin/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <PiLinkedinLogoThin size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="max-w-sm md:max-w-xl rounded-xl drop-shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;