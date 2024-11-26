import React from 'react';

const skills = [
  './images/stack/HTML.png',
  './images/stack/CSS.png',
  './images/stack/Javascript.svg',
  './images/stack/React.png',
  './images/stack/NodeJs.svg',
  './images/stack/Next.svg',
  './images/stack/Redux.svg',
  './images/stack/Tailwind.png',
  './images/stack/Bootstrap.svg',
  './images/stack/MaterialUI.svg',
  './images/stack/Express.png',
  './images/stack/Git.svg',
  './images/stack/Github.svg',
  './images/stack/Graphql.svg',
  './images/stack/MongoDB.svg',
  './images/stack/Vercel.svg',
  './images/stack/ChartJs.svg',
  './images/stack/Bash.svg',
  './images/stack/Docker.svg',
  './images/stack/K8s.svg',
];

const SkillsSection = () => {
  return (
    <div id="skills" className="relative flex p-20 mt-40 mx-auto gap-8 mt-[-60]">
      <div className="absolute text-9xl font-bold text-gray-200 bottom-[-34.5%] right-[-25%] select-none overflow-hidden">
        Skills
      </div>

      <div className="w-1/2 flex flex-col ">
        <h2 className="text-5xl font-bold text-orange-600 leading-12">
          <span className="text-7xl">M</span>e and
          <br />
          MyTech Stack
        </h2>

        <div className="mt-4 w-5/6 text-justify">
          <p>
            Hi Everyone! My name is John Doe. I am a Full Stack Web Developer. I
            have been working for the last 3 years, and currently, I am working with a
            budding startup in the USA and as a full-time freelancer. I'm currently working on Next.js and
            making beautiful UI/UX design my key feature.
          </p>
          <p className="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            doloremque aspernatur, maiores voluptatum minus laudantium?
            Perspiciatis accusamus minima porro dolores necessitatibus, magni
            dolorem et qui veniam nulla sequi molestiae maxime.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem
            quos ullam veritatis voluptates tenetur qui ipsa nulla culpa itaque?
          </p>
        </div>
      </div>

      <div className="w-1/2 relative flex flex-wrap gap-8 justify-center">
        <img src="./images/userAsset/blob vector.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-5] animate-blob" alt="User Blob" />
        
        {skills.map((skill, index) => (
          <img key={index} src={skill} alt={`Skill ${index + 1}`} className="w-24 transition-all duration-500 transform hover:scale-110" />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
