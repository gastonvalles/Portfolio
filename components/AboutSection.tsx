import React from "react";

const skills = [
  { skill: "HTML / CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Zustand" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Bun" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "NestJs" },
  { skill: "Sequelize" },
  { skill: "PostgreSQL" },
  { skill: "Mongoose" },
  { skill: "MongoDB" },
  { skill: "Redis" },
  { skill: "Docker" },
  { skill: "Go" },
  { skill: "Gin" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "SCRUM Agile Methodology" },
  { skill: "Leadership" },
  { skill: "Team Player" },
  { skill: "Fast Learner" },
  { skill: "C1 English" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 text-white">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-light-purple border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              My name is{" "}
              <span className="font-bold text-white">{"Gaston Valles"}</span>, a{" "}
              <span className="font-bold text-green-500 hover:text-green-400 cursor-pointer">
                {"experienced"}
              </span>
              ,
              <span className="font-bold text-green-500 hover:text-green-400 cursor-pointer">
                {" collaborative"}
              </span>{" "}
              and
              <span className="font-bold text-green-500 hover:text-green-400 cursor-pointer">
                {" analytical"}
              </span>{" "}
              full stack developer with a strong
              <span className="font-bold text-light-purple hover:text-yellow-400 cursor-pointer">
                {" backend"}
              </span>{" "}
              focus.
            </p>
            <br />
            <p>
              Graduated from the intensive
              <span className="font-bold text-yellow-400 hover:text-yellow-300 cursor-pointer">
                {" Henry Bootcamp"}
              </span>{" "}
              in January of 2023 and working in the field since then. <br />
              Currently looking for new opportunities as a backend
              <span className="font-bold text-gray-500 hover:text-gray-400 cursor-pointer">
                {" (preferable)"}
              </span>
              , frontend or fullstack developer position.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-red-600 hover:text-red-500 cursor-pointer">
                never stop
              </span>{" "}
              growing and that's why I'm constantly developing new projects,
              learning new technologies in addition to training my current
              skills to improve my professional value.
            </p>
            <br />
            <p>
              Let's do{" "}
              <span className="font-bold text-green-500 hover:text-yellow-400 cursor-pointer">
                {" amazing "}
              </span>
              things together! 😁
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start cursor-pointer">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-600 rounded font-bold hover:bg-green-500 hover:text-white hover:font-bold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
