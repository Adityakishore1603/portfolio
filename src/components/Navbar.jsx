import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar container flex justify-between items-center py-4 ">
      <div className="logo-container flex items-center ml-60">
        <img src="./images/userAsset/NavLogo.jpg" alt="Logo" className="w-20 justify-center align-baseline" />
        <span className="logo-text text-2xl font-bold ml-[-1.2rem]">ohn Doe</span>
      </div>
      <div className="nav-items flex gap-4 mr-60 text-lg font-semibold ">
        <div className="nav-item hover:text-red-500 cursor-pointer ">
          <a href="#">Home</a>
        </div>
        <div className="nav-item hover:text-red-500 cursor-pointer">
          <a href="#">Projects</a>
        </div>
        <div className="nav-item hover:text-red-500 cursor-pointer">
          <a href="#">Skills</a>
        </div>
        <div className="nav-item hover:text-red-500 cursor-pointer">
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
