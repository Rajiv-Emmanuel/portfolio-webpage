import "./App.css";
import React, { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css"
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import Footer from './components/sections/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      )}
      
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "ease-in-out opacity-100" : "ease-in-out opacity-0"} bg-black text-gray-100 text-center p-8 font-grotesk`}>
         
         <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         <Home />
         <About />
         <Projects />
         <Contact />
         <Footer />
       </div>
    </>
  );
} 

export default App;