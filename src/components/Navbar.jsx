import React, { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            rajiv<span className="text-blue-500">_emmanuel</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <div> <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a> </div>
            <div> <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a> </div>
            <div> <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a> </div>
          </div>

          {/* Hamburger icon (mobile only) */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(prev => !prev)}>
            &#9776;
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-30">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};
