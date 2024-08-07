import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Block Magic Hackathon: P2PBetting",
    description: "Sitio de apuestas P2P de Esports y deportes donde usuarios pueden conectar sus billeteras de Crypto para apostar con otro usuario. Proyecto de Web3 para competir en una Chainlink Hackathon.",
    technologies: "React, TypeScript, Solidity, Ruby, Python, TailwindCSS",
    image: "/P2PBetting.png",
    github: "https://github.com/martinllobell/dapp",
    link: "https://martinllobell.github.io/dapp/",
  },
  {
    name: "Legendaryum Collectibles",
    description:
      "Backend app designed to create a collecting experience in a metaverse. Users can connect through socket and explore different 3D 'rooms' containing 'coins' collectibles.",
    technologies:
      "TypeScript, Node.js, Express, Redis, Socket.io, HTML, TailwindCSS",
    image: "/Legendaryum.png",
    github: "https://github.com/gastonvalles/Legendaryum-Collectibles",
  },
  {
    name: "UrbanWest Shoes",
    description: "Shoes E-commerce project in which I'm currently working.",
    technologies:
      "TypeScript, Next.js, Redux, Node.js, NestJs, Sequelize, PostgreSQL, TailwindCSS",
    image: "/UrbanWest.png",
    github: "https://github.com/griimreaper/e-commerce-tech",
  },
  {
    name: "StoryDots E-commerce",
    description:
      "Challenge to apply to a full stack developer position in StoryDots. It consists of creating an E commerce-themed API REST with all CRUD operations for '/products' and '/brands' endpoints.",
    technologies:
      "React, Redux, Node.js, Express, Sequelize, PostgreSQL, CSS Modules",
    image: "/storydots.png",
    github: "https://github.com/gastonvalles/StoryDots-Challenge",
    link: "https://story-dots-challenge.vercel.app/",
  },
  {
    name: "Old Portfolio",
    description:
      "My first portfolio. It's a fully responsive Single Page Application that shows my way in programming",
    technologies: "HTML, CSS, JavaScript",
    image: "/old-portfolio.png",
    github: "https://github.com/gastonvalles/Old-Portfolio",
    link: "https://gastonvalles-old-portfolio.vercel.app/",
  },
  {
    name: "Youpet",
    description:
      "Website of shifts for your pet with highly trained professionals. You can view al the services in the landing page, select a professional and make an appointment for your pet",
    technologies:
      "React, Redux, Node.js, Express, Sequelize, PostgreSQL, Bootstrap",
    image: "/Youpet.jpg",
    github: "https://github.com/gastonvalles/Youpet",
  },
  {
    name: "Individual Project: TravelApp",
    description:
      "Single Page Application for Henry bootcamp. Enables visitors to filter, search, view detailed information about each country.",
    technologies:
      "React, Redux, Node.js, Express, Sequelize, PostgreSQL, CSS Modules",
    image: "/PI.jpg",
    github: "https://github.com/gastonvalles/Countries-PI",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl text-white">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 text-white">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                    {project.link && (
                      <Link href={project.link} target="_blank" />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                      <br />
                      <span className="text-light-purple">
                        {project.technologies}
                      </span>
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-green-500"
                        />
                      </Link>
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-yellow-400"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
