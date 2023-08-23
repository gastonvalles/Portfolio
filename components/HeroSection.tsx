/* eslint-disable react/no-unescaped-entities */
"use client" // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-white">Hi, I'm <span className="text-light-purple">Gaston</span>!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-white">
            I'm a {" "}
            <span className="font-semibold text-light-purple">
              Full Stack Developer{" "}
            </span>
            with a strong backend focus, based in Mendoza, Argentina.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-sans font-semibold px-6 py-3 bg-light-purple rounded shadow hover:bg-light-purple cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-white cursor-pointer hover:text-light-purple" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;