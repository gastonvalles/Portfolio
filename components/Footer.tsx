import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineInstagram
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Gaston Valles<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://www.linkedin.com/in/gastonvalles/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 hover:text-blue"
              size={30}
            />
          </a>
          <a
            href="https://github.com/gastonvalles"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 hover:text-green-500"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/gastoffvalles"
            rel="noreferrer"
            target="_blank"
          >
            <RiTwitterXFill
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 hover:text-yellow-500"
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/gaston_valles/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 hover:text-pink"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCl4CmiFAnizj0Uf4p43zeAA"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 hover:text-red-600"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
