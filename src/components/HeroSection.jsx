import React, { useEffect } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  useEffect(() => {
    // Initialize Typed.js when component mounts
    const options = {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };
    new Typed(".role", options);
  }, []);

  return (
    <div className="relative flex justify-center items-center gap-20 mx-auto my-16 px-4 pb-32">
      {/* Faded Text */}
      <div className="absolute select-none text-7xl text-gray-200 font-bold bottom-[-16%] left-[-5%] transition-all duration-[3000ms] ml-20 mb-">
        John Doe
      </div>

      {/* Left Content */}
      <div className="hero-section-left flex flex-col justify-center gap-8  ml-40">
        <div className="text-4xl text-[#343d68] font-medium">Hi! John Doe</div>

        <div className="text-5xl leading-[45px] font-normal">
          I am a <span className="text-[#4e45d5] font-extrabold role"></span>
        </div>

        <div className="mt-4 w-[70%] font-medium">
          I’m a software developer and here is my portfolio website. Here you’ll
          learn about my journey as a software developer.
        </div>

        <a href="#contactme" className="btn-pink bg-[#203bc1] text-white text-center py-3 px-9 shadow-lg font-medium text-lg cursor-pointer relative z-10 transition-all duration-500 hover:bg-[#e84949] max-w-[200px]">
          Hire me
        </a>
      </div>

      {/* Right Content */}
      <div className="hero-section-right relative  ">
        {/* Icons */}
        <div className="absolute icon-dots">
          <img src="./images/userAsset/dots.png" alt="dots" />
        </div>
        <div className="absolute icon-cube">
          <img src="./images/userAsset/cube.png" alt="cube" />
        </div>
        <div className="absolute icon-circle">
          <img src="./images/userAsset/circle.png" alt="circle" />
        </div>
        <div className="absolute icon-zigzag">
          <img src="./images/userAsset/zigzags.png" alt="zigzags" />
        </div>
        <div className="absolute icon-plus">
          <img src="./images/userAsset/plus.png" alt="plus" />
        </div>

        {/* User Image */}
        <div className="user-image p-10 filter grayscale transition-all duration-1000 animate-scaleImage">
          <img src="./images/userAsset/UserImage.png" alt="John Doe" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
