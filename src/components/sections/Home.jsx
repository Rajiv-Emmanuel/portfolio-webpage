import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll"; 

export const Home = () => {
  return (
     <RevealOnScroll>
    <section id="home" className="min-h-screen flex items-center justify-center relative">
     
      <div className="flex flex-col items-center justify-center w-full h-full text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Hi, Welcome to my portfolio_I am Rajiv Emmanuel
        </h1>
        <br />
        <br />
        <br />

        <p className="text-gray-400 text-lg mb-8 max-w-lg text-center relative before:content-['“'] before:absolute before:-top-6 before:-left-4 before:text-4xl after:content-['”'] after:absolute after:-right-6 after:bottom-0 after:text-4xl">
          I’m a final-year Informatics student with a strong interest in QA Automation, software testing, and the application of mathematics in computing — especially in AI and problem-solving.
          I’m currently building my GitHub portfolio and strengthening my practical skills in testing, automation, and programming.
        </p>

        <br/>
        <div></div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105"
          >
            View Projects
          </a>
          <span className="hidden md:inline-block w-8"></span>
          <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105 relative overflow-hidden">
            Contact Me
          </a>
        </div>
        <br />
      </div>
     
    </section>
     </RevealOnScroll>
  );
};
