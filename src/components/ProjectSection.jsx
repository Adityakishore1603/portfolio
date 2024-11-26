import React from "react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Tint & Orange",
    description: "It is a car modification company which provides sheets to protect your car from scratches.",
    skills: [
      "./images/stack/HTML.png",
      "./images/stack/CSS.png",
      "./images/stack/Javascript.svg",
      "./images/stack/Express.png",
      "./images/stack/NextJsCircle.png",
      "./images/stack/Tailwind.png",
      "./images/stack/NodeJs.svg",
      "./images/stack/MongoDB.svg",
      "./images/stack/Redux.svg",
      "./images/stack/Vercel.svg"
    ],
    githubLink: "",
    liveLink: ""
  },
  {
    id: 2,
    number: "02",
    title: "Breaking Copyrights",
    description: "A platform to download copyright-free YouTube music.",
    skills: [
      "./images/stack/HTML.png",
      "./images/stack/CSS.png",
      "./images/stack/Javascript.svg",
      "./images/stack/NextJsCircle.png",
      "./images/stack/Tailwind.png",
      "./images/stack/Redux.svg",
      "./images/stack/Vercel.svg"
    ],
    githubLink: "",
    liveLink: ""
  },
  {
    id: 3,
    number: "03",
    title: "Isha Tattva",
    description: "A website for an interior designer to showcase her works and samples.",
    skills: [
      "./images/stack/HTML.png",
      "./images/stack/CSS.png",
      "./images/stack/Javascript.svg",
      "./images/stack/NextJsCircle.png",
      "./images/stack/Tailwind.png",
      "./images/stack/Vercel.svg"
    ],
    githubLink: "",
    liveLink: ""
  },
  {
    id: 4,
    number: "04",
    title: "Granit",
    description: "An architectural website to plan your building or home (Hebrew Language).",
    skills: [
      "./images/stack/NextJsCircle.png",
      "./images/stack/Tailwind.png",
      "./images/stack/Vercel.svg"
    ],
    githubLink: "",
    liveLink: ""
  }
];

const ProjectSection = () => {
  return (
    <div className="bg-gray-200 mt-16" id="projects">
      <h2 className="text-4xl font-extrabold text-orange-600 text-center pt-8">
        Projects
      </h2>

      <div className="max-w-screen-xl mx-auto py-12 flex flex-col gap-28">
        {projects.map((project) => (
          <div
            className="relative w-9/10 h-[550px] bg-cover bg-center shadow-lg group"
            style={{
              backgroundImage: `url(./images/projects/Project${project.id}.png)`,
            }}
            key={project.id}
          >
            {/* Dark overlay with opacity transition on hover */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-0 group-hover:bg-opacity-0 transition-all duration-300"></div>

            {/* Project Number */}
            <div className="absolute top-[-45px] left-[-40px] text-white text-8xl font-bold z-10 opacity-0 group-hover:opacity-100 group-hover:text-green-800">
              {project.number}
            </div>

            {/* Project Content */}
            <div className="absolute flex flex-col text-white p-8 bottom-5 z-5 gap-4 transition-transform duration-400 transform scale-100 group-hover:scale-110 group-hover:text-green-800">
              <div className="flex gap-2 flex-wrap w-3/5">
                {project.skills.map((skill, index) => (
                  <img key={index} className="w-10" src={skill} alt={`Skill ${index + 1}`} />
                ))}
              </div>

              <h2 className="text-4xl font-bold leading-12">{project.title}</h2>
              <p className="w-7/10 text-lg italic">{project.description}</p>

              <div className="flex gap-3 items-center">
                <button className="py-2 px-6 bg-pink-500 text-white rounded hover:border-none">
                  Read More
                </button>
                <a href={project.githubLink}>
                  <i
                    title="GitHub Link"
                    className="fa-brands fa-github text-white text-3xl hover:text-orange-600 transition-all duration-400"
                  ></i>
                </a>
                <a href={project.liveLink}>
                  <i
                    title="Live Link"
                    className="fa-solid fa-link text-white text-3xl hover:text-orange-600 transition-all duration-400"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
