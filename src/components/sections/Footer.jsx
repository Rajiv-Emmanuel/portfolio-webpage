
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12 text-sm">
        <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0 text-center md:text-left" >
            <h2 className="text-lg font-bold">Rajiv Emmanuel</h2>
            <p className="text-gray-400">Audio Software Developer</p>
          </p>
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rajiv Portfolio. All rights reserved.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/Rajiv-Emmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajiv-emmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;



