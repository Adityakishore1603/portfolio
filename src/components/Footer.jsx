import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="footer-wrapper flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Footer Faded Text */}
          <div className="footer-faded-text text-4xl font-bold text-gray-300 opacity-50">
            John Doe
          </div>

          {/* Links Section */}
          <div className="link-wrapper flex flex-col md:flex-row gap-6">
            <div>
              <a href="#projects" className="text-lg text-gray-300 hover:text-orange-500 transition-colors">
                Projects
              </a>
            </div>
            <div>
              <a href="#skills" className="text-lg text-gray-300 hover:text-orange-500 transition-colors">
                Skills
              </a>
            </div>
            <div>
              <a href="#contactme" className="text-lg text-gray-300 hover:text-orange-500 transition-colors">
                Contact Me
              </a>
            </div>
          </div>

          {/* Icon Section */}
          <div className="icon-wrapper flex gap-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon text-2xl hover:text-orange-500 transition-all">
              <FaLinkedin />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="icon text-2xl hover:text-orange-500 transition-all">
              <FaGithub />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon text-2xl hover:text-orange-500 transition-all">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon text-2xl hover:text-orange-500 transition-all">
              <FaInstagram />
            </a>
            <a href="mailto:your-email@example.com" className="icon text-2xl hover:text-orange-500 transition-all">
              <FaEnvelope />
            </a>
            {/* Additional icons */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon text-2xl hover:text-orange-500 transition-all">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icon text-2xl hover:text-orange-500 transition-all">
              <FaYoutube />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
