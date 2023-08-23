import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "UrbanWest Shoes",
    description:
      "Shoes E-commerce project in which i'm currently working.",
    technologies:
      "TypeScript, Next.js, Redux, Node.js, NestJs, Sequelize, PostgreSQL, TailwindCSS",
    image: "/UrbanWest.png",
    github: "https://github.com/griimreaper/e-commerce-tech",
    link: "https://github.com/griimreaper/e-commerce-tech-server",
  },
  {
    name: "StoryDots E-commerce",
    description:
      "Challenge to apply to a full stack developer position in StoryDots. It consists of creating an Ecommerce-themed API REST with all CRUD operations for /products and /brands endpoints.",
    technologies:
      "React, Redux, Node.js, Express, Sequelize, PostgreSQL, CSS Modules",
    image: "/storydots.png",
    github: "https://github.com/gastonvalles/StoryDots-Challenge",
    link: "https://story-dots-challenge.vercel.app/",
  },
  {
    name: "Old Portfolio",
    description:
      "fully responsive Single Page Application (SPA) made with HTML, CSS, and vanilla JavaScript.",
    technologies: "HTML, CSS, JavaScript",
    image: "/old-portfolio.png",
    github: "https://github.com/gastonvalles/Old-Portfolio",
    link: "https://gastonvalles-old-portfolio.vercel.app/",
  },
  {
    name: "Youpet",
    description:
      "Website of shifts for your pet with highly trained professionals.",
    technologies:
      "React, Redux, Node.js, Express, Sequelize, PostgreSQL, Bootstrap",
    image: "/Youpet.jpg",
    github: "https://github.com/gastonvalles/Youpet",
    link: "https://youpet.vercel.com",
  },
  {
    name: "Individual Project: TravelApp",
    description:
      "Single Page Application for Henry bootcamp. Enables visitors to filter, search, view detailed information about each country.",
    technologies:
      "React, Redux, Node.js, Express, Sequelize, PostgreSQL, CSS Modules",
    image: "/PI.jpg",
    github: "https://github.com/gastonvalles/Countries-PI",
    link: "https://travelapp-countries-pi.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl text-white">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-light-purple border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 text-white">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                      <br />
                      {project.technologies}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
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
