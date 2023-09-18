import React from "react"

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
]

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
              Hello! 👋😁 <br />
              My name is Gaston Valles and I'm a{" "}
              <span className="font-bold text-light-purple">{"experienced"}</span>,
              <span className="font-bold text-light-purple">{" committed"}</span>, and
              <span className="font-bold text-light-purple">{" enthusiast"}</span> full stack developer based in Mendoza, Argentina.
            </p>
            <br />
            <p>
              I graduated from the intensive 
              <span className="font-bold text-yellow-400">{" Henry"}</span> bootcamp in January of 2023 
              and have been looking for a trainee or junior position as a backend 
              <span className="font-bold text-gray-400">{" (preferable)"}</span>, frontend or fullstack developer.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-light-purple">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 😁
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start cursor-pointer">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-600 rounded font-bold hover:bg-light-purple hover:text-yellow-400 hover:font-bold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
