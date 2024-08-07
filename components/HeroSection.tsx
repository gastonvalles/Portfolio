/* eslint-disable react/no-unescaped-entities */
"use client";
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
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-white">
            Hello, I'm <span className="text-yellow-400 hover:text-green-500">Gaston Valles</span>
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-white">
            <span className="font-semibold text-light-purple hover:text-green-500">
              Full Stack Developer{" "}
            </span>
            with a strong backend focus, based in Mendoza, Argentina.
          </p>
          <button className="transition-all transform hover:translate-y-1 hover:scale-105">
            <a
              href="/Gaston Valles CV.pdf"
              className="text-gray-100 font-semibold px-6 py-3  rounded bg-light-purple hover:bg-green-500 hover:font-semibold hover:text-white"
              download=""
            >
              Download CV
            </a>
          </button>
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
          <HiArrowDown
            size={35}
            className="animate-bounce text-white cursor-pointer hover:text-yellow-400"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
